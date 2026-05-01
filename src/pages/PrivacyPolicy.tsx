import React from 'react';

const PrivacyPolicy: React.FC = () => {
  const lastUpdated = 'May 1, 2026';

  return (
    <main className="pt-24 pb-20">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">Privacy Policy</h1>
          <p className="text-foreground/80 leading-relaxed">
            TROVIX LLP ("we", "our", or "us") provides the Trovix School Management System and related applications used by educational institutions. This Privacy Policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-muted-foreground mt-3">Last updated: {lastUpdated}</p>
        </header>

        <div className="space-y-8 text-foreground/90 leading-7">

          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
            <p>We collect only the information needed to provide school management services. This may include:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Mobile number for OTP-based login and authentication.</li>
              <li>Name and profile information such as role, class, designation, and photo.</li>
              <li>Student and staff records provided by authorized school administrators and users.</li>
              <li>Device information such as device model, operating system, and app version.</li>
              <li>Usage data such as feature interactions, session activity, and error logs.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">2. How We Use Information</h2>
            <p>We use collected information for the following purposes:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Authentication and secure access through OTP login.</li>
              <li>School operations including attendance, fees, communication, and management workflows.</li>
              <li>Improving application performance, usability, and reliability.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">3. Data Ownership and Control</h2>
            <p>
              Schools are the owners and controllers of their institutional data. TROVIX LLP acts as a platform provider (data processor) and processes data only to deliver services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Third-Party Services</h2>
            <p>
              We use trusted third-party services including Firebase Authentication and Firebase Cloud Messaging (push notifications). These services may process limited technical data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Notifications</h2>
            <p>
              The application may send push notifications for updates such as announcements, alerts, and school-related activities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">6. Data Retention</h2>
            <p>
              Data is retained only as long as necessary to provide services and as required by the respective school or applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">7. Data Deletion Requests</h2>
            <p>
              Users may request data deletion through their school administration or by contacting us at info@trovixtech.com. We will coordinate with the relevant school to process such requests.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">8. Security</h2>
            <p>
              We implement reasonable technical and organizational measures to protect data. However, no system can be completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">9. Children's Privacy</h2>
            <p>
              This platform is intended for use by educational institutions. Student data is managed under the authority of the respective school.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">11. Contact Us</h2>
            <p>
              TROVIX LLP<br />
              Email: info@trovixtech.com<br />
              Website: https://trovixtech.com
            </p>
          </section>
        </div>

        <footer className="mt-12 pt-6 border-t border-white/10 text-sm text-muted-foreground">
          <p>
            This Privacy Policy applies to all applications and platforms developed and operated by TROVIX LLP.
          </p>
        </footer>
      </section>
    </main>
  );
};

export default PrivacyPolicy;