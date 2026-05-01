import React from 'react';

const PrivacyPolicy: React.FC = () => {
  const lastUpdated = 'May 1, 2026';

  return (
    <main className="pt-24 pb-20">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">Privacy Policy</h1>
          <p className="text-foreground/80 leading-relaxed">
            This Privacy Policy explains how TROVIX LLP manages information for the Trovix School
            Management System and related applications provided to schools and users.
          </p>
          <p className="text-sm text-muted-foreground mt-3">Last updated: {lastUpdated}</p>
        </header>

        <div className="space-y-8 text-foreground/90 leading-7">
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
            <p>
              We collect only the information needed to provide school management services. This may
              include:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Mobile number for OTP-based login and account verification.</li>
              <li>Name and profile information such as role, class, designation, and photo.</li>
              <li>
                Student and staff records provided by authorized school administrators and users.
              </li>
              <li>
                Device information such as device model, operating system, app version, and unique
                device identifiers where required for security and reliability.
              </li>
              <li>
                Usage data such as feature interactions, session activity, and error logs to help
                maintain system performance.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">2. How We Use Information</h2>
            <p>We use collected information for the following purposes:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Authentication and secure access through OTP login.</li>
              <li>
                School operations, including attendance, fees, communication, and day-to-day
                management workflows.
              </li>
              <li>Improving application performance, usability, and reliability.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">3. Data Ownership and Control</h2>
            <p>
              Schools are the owners and primary controllers of their institutional data. TROVIX LLP
              acts as a platform and technology provider, processing information to deliver agreed
              services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Third-Party Services</h2>
            <p>
              We use trusted third-party services where necessary, including Firebase for
              authentication and push notifications. These providers may process limited technical
              data required to support those services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Data Deletion Requests</h2>
            <p>
              Users may request data deletion through their school administration or by contacting us
              at info@trovixtech.com. We will coordinate with the relevant school and process
              requests as applicable by policy and legal requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">6. Security</h2>
            <p>
              We apply reasonable technical and organizational security measures to protect data from
              unauthorized access, alteration, disclosure, or loss. However, no digital system can be
              guaranteed as fully risk-free.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">7. Children&apos;s Privacy</h2>
            <p>
              The platform is designed for schools and authorized users. Student data is managed
              under school authority. If you believe personal data of a child has been processed
              inappropriately, contact us immediately at info@trovixtech.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">8. Contact Us</h2>
            <p>
              TROVIX LLP<br />
              Email: info@trovixtech.com
            </p>
          </section>
        </div>

        <footer className="mt-12 pt-6 border-t border-white/10 text-sm text-muted-foreground">
          <p>
            This Privacy Policy applies to the Trovix School Management System and related
            applications developed and maintained by TROVIX LLP.
          </p>
        </footer>
      </section>
    </main>
  );
};

export default PrivacyPolicy;