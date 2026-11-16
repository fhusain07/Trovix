import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

export async function openBrowser() {
  const executable = [
    process.env.TROVIX_CHROME_PATH,
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    '/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  ].find(path => path && existsSync(path));
  if (!executable) throw new Error('Install Chrome/Chromium/Edge or set TROVIX_CHROME_PATH.');
  const profile = resolve('.trovix-review/chrome-profile-' + process.pid);
  await mkdir(profile, { recursive: true });
  const child = spawn(executable, [
    '--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
    '--remote-debugging-port=0', '--user-data-dir=' + profile, 'about:blank',
  ], { windowsHide: true, stdio: 'ignore' });
  child.on('error', error => console.error(error.message));
  let port;
  for (let attempt = 0; attempt < 100; attempt++) {
    const active = await readFile(resolve(profile, 'DevToolsActivePort'), 'utf8').catch(() => '');
    if (active) { port = active.split('\n')[0]; break; }
    await new Promise(done => setTimeout(done, 100));
  }
  if (!port) { child.kill(); throw new Error('Chrome debugging endpoint unavailable'); }
  const targets = await fetch('http://127.0.0.1:' + port + '/json').then(r => r.json());
  const socket = new WebSocket(targets.find(t => t.type === 'page').webSocketDebuggerUrl);
  await new Promise((done, reject) => {
    const timeout = setTimeout(() => reject(new Error('Chrome socket timeout')), 10000);
    socket.onopen = () => { clearTimeout(timeout); done(); };
    socket.onerror = error => { clearTimeout(timeout); reject(error); };
  });
  let id = 0;
  const pending = new Map();
  const listeners = new Set();
  socket.onmessage = event => {
    const message = JSON.parse(event.data);
    if (message.id) {
      const task = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) task?.reject(new Error(JSON.stringify(message.error)));
      else task?.done(message.result);
    } else for (const listener of listeners) listener(message);
  };
  const send = (method, params = {}) => new Promise((done, reject) => {
    pending.set(++id, { done, reject });
    socket.send(JSON.stringify({ id, method, params }));
  });
  const evaluate = async expression => {
    const result = await send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
    if (result.exceptionDetails) throw new Error(JSON.stringify(result.exceptionDetails));
    return result.result.value;
  };
  const navigate = async url => {
    await send('Page.navigate', { url });
    for (let attempt = 0; attempt < 100; attempt++) {
      await new Promise(done => setTimeout(done, 50));
      if (await evaluate('location.href === ' + JSON.stringify(url) + ' && document.readyState === "complete"')) return;
    }
    throw new Error('Navigation timed out: ' + url);
  };
  const viewport = (width, height) => send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: false });
  const screenshot = async (path, fullPage = false) => {
    const options = { format: 'png', captureBeyondViewport: fullPage };
    if (fullPage) {
      const { cssContentSize } = await send('Page.getLayoutMetrics');
      options.clip = { x: 0, y: 0, width: cssContentSize.width, height: cssContentSize.height, scale: 1 };
    }
    const { data } = await send('Page.captureScreenshot', options);
    await writeFile(path, Buffer.from(data, 'base64'));
  };
  await send('Page.enable');
  await send('Runtime.enable');
  await send('Network.enable');
  return { send, evaluate, navigate, viewport, screenshot, listeners,
    close: async () => { await send('Browser.close').catch(() => {}); socket.close(); child.kill(); },
  };
}
