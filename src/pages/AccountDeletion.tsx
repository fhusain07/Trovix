import React from 'react';

const AccountDeletion: React.FC = () => {
  return (
    <main className="pt-24 pb-20">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Account Deletion Request
          </h1>
          <p className="text-foreground/80 leading-relaxed">
            If you want to delete your account and associated data from Trovix Campus,
            please follow these steps.
          </p>
        </header>

        <div className="space-y-8 text-foreground/90 leading-7">
          <section>
            <h2 className="text-2xl font-semibold mb-3">How to Request Deletion</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                Send an email to{' '}
                <a
                  href="mailto:info@trovixtech.com"
                  className="text-electric-blue hover:underline"
                >
                  info@trovixtech.com
                </a>{' '}
                from your registered mobile number or email.
              </li>
              <li>Mention your registered phone number and school name.</li>
              <li>
                Our team will verify and process your request within 3-5 working days.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Data Deletion</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Your personal data, account details, and associated records will be
                deleted.
              </li>
              <li>
                Some data may be retained if required for legal or operational purposes.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Queries</h2>
            <p>
              For any queries, contact:{' '}
              <a
                href="mailto:info@trovixtech.com"
                className="text-electric-blue hover:underline"
              >
                info@trovixtech.com
              </a>
            </p>
          </section>
        </div>
      </section>
    </main>
  );
};

export default AccountDeletion;
