import React from 'react';

const AccountDeletion: React.FC = () => {
  const lastUpdated = 'July 14, 2026';

  return (
    <main className="pt-24 pb-20">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Data Deletion Instructions
          </h1>
          <p className="text-foreground/80 leading-relaxed">
            TROVIX LLP ("Trovix", "we", "our", or "us") provides these Data Deletion Instructions in
            accordance with the Meta Platform Terms, the WhatsApp Business Messaging Policy, the Facebook
            Login Policy, and the Instagram Platform Policy. This page explains how you can request
            deletion of your personal data in connection with our company website and any current or
            future software product, application, platform, integration, or API developed or operated by
            Trovix LLP (collectively, the "Services"), including Services that integrate with Meta
            Login, Facebook Login, Facebook Lead Ads, Instagram messaging, Messenger, or the WhatsApp
            Business Platform.
          </p>
          <p className="text-sm text-muted-foreground mt-3">Last updated: {lastUpdated}</p>
        </header>

        <div className="space-y-8 text-foreground/90 leading-7">

          <section>
            <h2 className="text-2xl font-semibold mb-3">1. How Users Can Request Deletion</h2>
            <p>
              Any individual whose personal data is processed by Trovix LLP, whether as a registered user
              of our website, a user of a Trovix LLP product, or an end user who has interacted with a
              business using a Trovix LLP product, may request deletion of that data at any time by:
            </p>
            <ol className="list-decimal pl-6 mt-3 space-y-2">
              <li>
                Sending an email to{' '}
                <a href="mailto:info@trovixtech.com" className="text-electric-blue hover:underline">
                  info@trovixtech.com
                </a>{' '}
                with the subject line "Data Deletion Request";
              </li>
              <li>
                Identifying which Service your request relates to, and providing the information needed
                for us to locate your data, such as your registered email address, phone number, account
                identifier, or the name of the business through which you interacted with a Trovix LLP
                product; and
              </li>
              <li>
                Confirming that you are requesting deletion of your personal data, or specifying the
                particular records you would like deleted.
              </li>
            </ol>
            <p className="mt-3">
              We will acknowledge your request, verify your identity as described in Section 7, and
              process the deletion in accordance with the timeline described in Section 6.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">2. Meta Login Users</h2>
            <p>
              If you signed in to a Trovix LLP product using your Meta account (including "Continue with
              Facebook" or "Continue with Instagram"), you can request deletion of the data we obtained
              through that login in either of the following ways:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                <strong>Directly through Trovix LLP:</strong> email{' '}
                <a href="mailto:info@trovixtech.com" className="text-electric-blue hover:underline">
                  info@trovixtech.com
                </a>{' '}
                with the subject line "Data Deletion Request," including the name or email address
                associated with your Meta account so that we can locate your record.
              </li>
              <li>
                <strong>Through your Meta account settings:</strong> open the Facebook or Instagram app or
                website, go to Settings, select "Apps and Websites" (or "Business Integrations," depending
                on the app), locate the relevant Trovix LLP product, and remove it. Removing an app in
                this way revokes its future access to your Meta account but does not automatically delete
                data already stored by Trovix LLP; to have that data deleted, please also submit a request
                as described above.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">3. Facebook Login Users</h2>
            <p>
              Where a Trovix LLP product uses Facebook Login, the data we receive is limited to the
              profile information you and Facebook authorize us to receive, such as your name, email
              address, profile picture, and Facebook user identifier. To request deletion of this data:
            </p>
            <ol className="list-decimal pl-6 mt-3 space-y-2">
              <li>
                Email{' '}
                <a href="mailto:info@trovixtech.com" className="text-electric-blue hover:underline">
                  info@trovixtech.com
                </a>{' '}
                with the subject line "Data Deletion Request — Facebook Login," including the name,
                email address, or Facebook user identifier associated with your account; and
              </li>
              <li>
                Optionally, remove the relevant Trovix LLP product from your Facebook "Apps and Websites"
                settings to revoke its future access to your Facebook profile.
              </li>
            </ol>
            <p className="mt-3">
              We will delete the Facebook Login profile data associated with your account within the
              timeline set out in Section 6, subject to the legal retention exceptions in Section 8.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">4. WhatsApp Users</h2>
            <p>
              If you have exchanged messages with a business through a Trovix LLP product connected to
              the WhatsApp Business Platform, the business you messaged is generally the controller of
              your conversation data and is the first point of contact for a deletion request. You may
              also request deletion directly from Trovix LLP by:
            </p>
            <ol className="list-decimal pl-6 mt-3 space-y-2">
              <li>
                Emailing{' '}
                <a href="mailto:info@trovixtech.com" className="text-electric-blue hover:underline">
                  info@trovixtech.com
                </a>{' '}
                with the subject line "Data Deletion Request — WhatsApp," including the WhatsApp phone
                number and, if known, the name of the business you messaged; and
              </li>
              <li>
                Confirming that you would like your message history, phone number, and related metadata
                deleted from the relevant Trovix LLP product.
              </li>
            </ol>
            <p className="mt-3">
              We will locate and delete the WhatsApp conversation data associated with your phone number
              within the systems we operate on behalf of the relevant business, subject to that business's
              own retention instructions and the legal retention exceptions described in Section 8.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">5. CRM Customers and Other Business Accounts</h2>
            <p>
              If you are a business, professional, or organization using a Trovix LLP product such as a
              CRM, school management system, or business automation platform ("Business Customer"), you
              may request deletion of your business account and the associated data by:
            </p>
            <ol className="list-decimal pl-6 mt-3 space-y-2">
              <li>
                Emailing{' '}
                <a href="mailto:info@trovixtech.com" className="text-electric-blue hover:underline">
                  info@trovixtech.com
                </a>{' '}
                from an email address associated with an authorized administrator on the account, with the
                subject line "Data Deletion Request — Business Account"; and
              </li>
              <li>
                Specifying whether you would like your entire account and all associated end-user records
                deleted, or only specific records within it.
              </li>
            </ol>
            <p className="mt-3">
              Where an individual end user asks us to delete their data but that data was submitted to us
              by a Business Customer (for example, a lead captured through Facebook Lead Ads, or a
              contact record in a CRM), we will, where appropriate, direct the request to the relevant
              Business Customer and support that Business Customer in fulfilling it, consistent with our
              role as a data processor acting on the Business Customer's instructions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">6. Expected Processing Timeline</h2>
            <p>
              We will acknowledge a data deletion request promptly upon receipt. Once your identity has
              been verified in accordance with Section 7, we will complete the deletion, or provide an
              explanation for any delay or partial fulfillment, within thirty (30) days, except where a
              longer period is permitted or required by applicable law, or where a legal retention
              exception described in Section 8 applies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">7. Identity Verification</h2>
            <p>
              To protect against fraudulent or unauthorized deletion requests, we take reasonable steps to
              verify that a request is made by the individual to whom the data relates, or by someone
              authorized to act on their behalf. Depending on the Service involved, we may ask you to
              confirm the registered email address, phone number, account identifier, Facebook or
              Instagram user identifier, or other information associated with your account. Where data was
              submitted to us by a Business Customer, we may direct you to that Business Customer, or ask
              the Business Customer to confirm your identity and authorization, before completing the
              deletion. We will not action a request where we are unable to reasonably verify the
              requester's identity or authority.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">8. Legal Retention Exceptions</h2>
            <p>
              We may retain certain data, or specific fields within it, after a deletion request where
              retention is necessary to:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Comply with a legal, tax, or accounting obligation applicable to us under Indian law, including recordkeeping requirements under applicable tax and corporate law;</li>
              <li>Establish, exercise, or defend legal claims;</li>
              <li>Prevent fraud, abuse, or violations of our Terms of Service; or</li>
              <li>Fulfill an obligation specifically required by applicable law or by a competent regulatory or judicial authority.</li>
            </ul>
            <p className="mt-3">
              Where data is retained under this Section, we restrict its use to the specific purpose that
              justifies retention, and we delete it once that purpose no longer applies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">9. Data Backup Handling</h2>
            <p>
              When we process a deletion request, we remove the relevant data from our live, production
              systems within the timeline described in Section 6. Copies of that data may continue to
              exist temporarily in encrypted backup and disaster-recovery systems, which are maintained
              solely for business continuity purposes, are access-restricted, and are not used to restore
              or reintroduce deleted data into production systems except in the course of disaster
              recovery. Backup copies are overwritten or purged in the ordinary course of our backup
              rotation cycle, no later than one hundred eighty (180) days after deletion from production
              systems.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">10. Business Account Deletion</h2>
            <p>
              When a Business Customer terminates its subscription or requests closure of its business
              account, we will deactivate access to the account and, subject to Sections 8 and 9, delete
              or anonymize the Business Customer's account data and the End-User data associated with it
              within the timeline described in Section 6. Where feasible, we will offer the Business
              Customer a reasonable opportunity to export its data before deletion is completed. We will
              only act on a business account deletion request from an individual we have verified as an
              authorized administrator of that account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">11. Appeal Process</h2>
            <p>
              If your deletion request is declined, or only partially fulfilled because a legal retention
              exception applies, we will explain the reason in our response. If you disagree with that
              outcome, you may appeal by replying to our response, or by emailing{' '}
              <a href="mailto:info@trovixtech.com" className="text-electric-blue hover:underline">
                info@trovixtech.com
              </a>{' '}
              with the subject line "Data Deletion Appeal" within thirty (30) days, explaining the basis
              for your appeal. We will review the appeal and provide a final written determination within
              a reasonable period. If you remain dissatisfied, you may contact our Grievance Officer as
              described in our Privacy Policy, or lodge a complaint with the competent data protection
              authority in your jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">12. Contact Details</h2>
            <p>
              For any data deletion request, appeal, or question about this page, please contact:
            </p>
            <p className="mt-3">
              Trovix LLP<br />
              India<br />
              Email:{' '}
              <a href="mailto:info@trovixtech.com" className="text-electric-blue hover:underline">
                info@trovixtech.com
              </a>
              <br />
              Website:{' '}
              <a
                href="https://www.trovixtech.com"
                className="text-electric-blue hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.trovixtech.com
              </a>
            </p>
          </section>
        </div>

        <footer className="mt-12 pt-6 border-t border-white/10 text-sm text-muted-foreground">
          <p>
            These Data Deletion Instructions apply to www.trovixtech.com and to all present and future
            software products, applications, platforms, and services developed and operated by Trovix
            LLP, including all integrations with Meta Login, Facebook Login, Facebook Lead Ads, Instagram,
            Messenger, and the WhatsApp Business Platform.
          </p>
        </footer>
      </section>
    </main>
  );
};

export default AccountDeletion;
