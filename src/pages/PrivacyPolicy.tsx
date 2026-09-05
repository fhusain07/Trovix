import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  const lastUpdated = 'July 14, 2026';

  return (
    <main className="pt-24 pb-20">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">Privacy Policy</h1>
          <p className="text-foreground/80 leading-relaxed">
            TROVIX LLP ("Trovix", "the Company", "we", "our", or "us") is an Indian Limited Liability
            Partnership that designs, develops, and operates a range of software products, websites,
            mobile applications, cloud platforms, and Software-as-a-Service ("SaaS") solutions. This
            Privacy Policy explains how we collect, use, disclose, and protect information in connection
            with our company website and every current and future product, application, platform,
            integration, or service that we develop or operate (collectively, the "Services").
          </p>
          <p className="text-sm text-muted-foreground mt-3">Last updated: {lastUpdated}</p>
        </header>

        <div className="space-y-8 text-foreground/90 leading-7">

          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Scope of This Policy</h2>
            <p>
              This Privacy Policy applies to www.trovixtech.com and to all products and services
              developed or operated by Trovix LLP, including but not limited to sales management
              systems, school and institutional management software, business and
              marketing automation tools, artificial intelligence assistants, communication platforms,
              WhatsApp Business Platform integrations, Facebook Login integrations, Facebook Lead Ads
              integrations, Instagram messaging integrations, Messenger integrations, email and voice
              calling features, application programming interfaces (APIs), mobile applications, and web
              applications, whether accessed directly by you or made available to you through one of our
              business customers.
            </p>
            <p className="mt-3">
              Because Trovix LLP builds and maintains multiple distinct products for different
              customers, an individual product may publish a supplementary, product-specific privacy
              notice describing practices unique to that product. Where such a notice exists, it should
              be read together with this Privacy Policy; on any matter specifically addressed by a
              product-specific notice, that notice governs for that product, and this Privacy Policy
              continues to govern all other matters and all other products.
            </p>
            <p className="mt-3">
              By accessing our website or using any Trovix LLP product or service, you agree to the
              collection, use, and disclosure of information as described in this Privacy Policy. If you
              do not agree with this Policy, please do not use our Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">2. Key Definitions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>"Business Customer"</strong> means an organization, professional, or individual
                that subscribes to or is licensed to use a Trovix LLP product or Service to manage its
                own operations, communications, or customer relationships.
              </li>
              <li>
                <strong>"End User"</strong> means an individual who interacts with a Business Customer
                through a Trovix LLP Service — for example, a lead who submits a Facebook Lead Ad, a
                customer who messages a Business Customer on WhatsApp or Instagram, or a student,
                parent, or staff member whose records are maintained by an educational institution using
                our software.
              </li>
              <li>
                <strong>"Platform Data"</strong> means any data obtained from or through Meta Platforms,
                Inc. and its affiliated services (Facebook, Instagram, WhatsApp, Messenger, and related
                APIs), including data obtained via Facebook Login, the Lead Ads API, the WhatsApp
                Business Platform, and the Instagram Messaging API.
              </li>
              <li>
                <strong>"Personal Data" or "Personal Information"</strong> means any information relating
                to an identified or identifiable natural person, consistent with the meaning given to
                that term (or equivalent terms such as "personal data" or "personal information") under
                the General Data Protection Regulation ("GDPR"), the Digital Personal Data Protection Act,
                2023 ("DPDP Act"), the Information Technology Act, 2000 and rules made thereunder, and,
                where applicable, the California Consumer Privacy Act ("CCPA").
              </li>
              <li>
                <strong>"Data Controller" / "Data Fiduciary"</strong> and <strong>"Data Processor"</strong>{' '}
                carry the meanings given to them under applicable data protection law. In most of our
                business-to-business Services, the Business Customer acts as the data controller/data
                fiduciary in respect of End User data, and Trovix LLP acts as a data processor acting on
                the Business Customer's instructions.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">3. Information We Collect</h2>
            <p>
              The categories of information we collect depend on which Service you use and the manner in
              which you interact with us, our website, or a Business Customer. We do not require every
              product to collect every category described below.
            </p>

            <h3 className="text-xl font-semibold mt-5 mb-2">3.1 Information You Provide Directly</h3>
            <p>
              When you create an account, subscribe to a Service, contact us, or fill out a form on our
              website, we may collect your name, email address, phone number, company or organization
              name, job title, billing and payment details, and the content of any message you send us.
            </p>

            <h3 className="text-xl font-semibold mt-5 mb-2">3.2 Business Customer Data</h3>
            <p>
              Business Customers may upload, input, or transmit data into our Services in the course of
              using them — for example, contact lists, sales or customer records, student and staff records,
              message templates, campaign configurations, and workflow or automation rules. Trovix LLP
              processes this data solely to provide, maintain, and support the relevant Service, and in
              accordance with the Business Customer's instructions and its agreement with us. The
              Business Customer is responsible for ensuring it has a lawful basis to provide such data to
              us and, where applicable, has obtained any necessary consents from the individuals to whom
              the data relates.
            </p>

            <h3 className="text-xl font-semibold mt-5 mb-2">3.3 End-User Data</h3>
            <p>
              Where a Service is used by a Business Customer to communicate with or manage its own
              customers, students, or contacts, we may process Personal Data relating to those End Users
              on the Business Customer's behalf. This may include names, phone numbers, email addresses,
              message content, engagement history, and records specific to the relevant product (for
              example, attendance or fee records in a school management platform, or lead records in a
              sales management system). End Users should refer to the privacy notice of the relevant Business Customer for
              information on how that organization uses their data; Trovix LLP's role in respect of this
              data is generally that of a data processor acting under contract.
            </p>

            <h3 className="text-xl font-semibold mt-5 mb-2">3.4 WhatsApp Message Data</h3>
            <p>
              Where a Business Customer uses a Trovix LLP product to send or receive messages through the
              WhatsApp Business Platform, we may process the sender and recipient phone numbers, message
              content, message templates, timestamps, delivery and read status, and media attachments
              necessary to deliver that messaging functionality. This data is used solely to provide
              messaging, automation, and customer-support functionality requested by the Business
              Customer. We do not use WhatsApp message content or metadata to serve advertisements, and we
              require that messages be sent only to recipients who have provided appropriate opt-in
              consent to the relevant Business Customer, consistent with the WhatsApp Business Messaging
              Policy.
            </p>

            <h3 className="text-xl font-semibold mt-5 mb-2">3.5 Facebook Data (Including Facebook Login)</h3>
            <p>
              Where you choose to log in to a Trovix LLP product using Facebook Login, we receive the
              profile information you and Facebook authorize us to receive, which may include your name,
              email address, profile picture, and Facebook user identifier. Where a Business Customer
              connects a Facebook Page or ad account to a Trovix LLP product, we may also process Page or
              ad account identifiers, permissions, and related metadata strictly to provide the requested
              integration.
            </p>

            <h3 className="text-xl font-semibold mt-5 mb-2">3.6 Facebook Lead Ads Data</h3>
            <p>
              Where a Business Customer connects its Facebook Lead Ads to a Trovix LLP product, we
              retrieve the information submitted by a person through the relevant lead form via the Lead
              Ads API — which may include name, email address, phone number, and responses to custom
              questions configured by the Business Customer — solely for the purpose of delivering that
              lead information into the Business Customer's sales management system, automation workflow, or notification
              system. This data is not used by Trovix LLP for any purpose other than delivering it to the
              Business Customer that ran the relevant ad campaign.
            </p>

            <h3 className="text-xl font-semibold mt-5 mb-2">3.7 Instagram Data</h3>
            <p>
              Where a Business Customer connects an Instagram professional account to a Trovix LLP
              product for messaging or automation purposes, we may process Instagram-scoped identifiers,
              message content, comments, and related metadata obtained through the Instagram Messaging
              API or Instagram Graph API, solely to provide the requested messaging or engagement
              functionality on behalf of that Business Customer.
            </p>

            <h3 className="text-xl font-semibold mt-5 mb-2">3.8 Cookies and Similar Technologies</h3>
            <p>
              Our website and web-based product dashboards may use cookies, local storage, and similar
              tracking technologies to keep you signed in, remember your preferences, understand how our
              website is used, and improve performance. Some cookies are strictly necessary for the site
              to function; others are used for analytics or preference purposes and will only be set with
              your consent where required by applicable law. You can control or disable cookies through
              your browser settings, as described in Section 15 below.
            </p>

            <h3 className="text-xl font-semibold mt-5 mb-2">3.9 Device Information</h3>
            <p>
              We may automatically collect information about the device you use to access our Services,
              including device model, operating system and version, browser type, unique device or
              advertising identifiers, mobile network information, and general location information
              inferred from your IP address.
            </p>

            <h3 className="text-xl font-semibold mt-5 mb-2">3.10 Log Files and Usage Data</h3>
            <p>
              Our servers and APIs automatically generate log files that may include IP addresses, access
              times, pages or API endpoints requested, referring URLs, error reports, and diagnostic
              information. We use this data to operate, secure, troubleshoot, and improve our Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">4. How We Use Information</h2>
            <p>We use the information described above for purposes that include:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Providing, operating, maintaining, and supporting our Services;</li>
              <li>Authenticating users and securing accounts;</li>
              <li>
                Delivering communications through the channel a Business Customer has configured
                (WhatsApp, Facebook Messenger, Instagram, email, or voice calling);
              </li>
              <li>Processing transactions and managing billing and subscriptions;</li>
              <li>Responding to inquiries and providing customer support;</li>
              <li>Monitoring, analyzing, and improving the performance, reliability, and security of our Services;</li>
              <li>Developing new features and products;</li>
              <li>Detecting, investigating, and preventing fraud, abuse, and security incidents;</li>
              <li>Complying with applicable legal, regulatory, and contractual obligations; and</li>
              <li>
                With appropriate consent or as otherwise permitted by law, sending administrative or
                marketing communications, which you may opt out of at any time.
              </li>
            </ul>
            <p className="mt-3">
              We do not sell Personal Data, and we do not use Platform Data obtained through Meta
              Platforms for any purpose other than providing the functionality requested by the relevant
              Business Customer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Legal Basis for Processing (GDPR)</h2>
            <p>
              Where the GDPR applies, we rely on one or more of the following legal bases to process
              Personal Data: performance of a contract with you or a Business Customer; compliance with a
              legal obligation; our legitimate interests in operating, securing, and improving our
              Services, provided those interests are not overridden by your data protection rights; and,
              where required, your consent, which you may withdraw at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">6. API Integrations and Meta Platform Compliance</h2>
            <p>
              Certain Trovix LLP products integrate with Meta Platforms, Inc. services, including
              Facebook Login, the Facebook Lead Ads API, the WhatsApp Business Platform, the Instagram
              Messaging API, and Messenger APIs. In respect of any Platform Data obtained through these
              integrations, we commit to the following:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                We use Platform Data only to provide and improve the specific features and functionality
                requested by the Business Customer or authorized by the End User, and consistent with the
                permissions actually granted;
              </li>
              <li>We do not sell Platform Data, and we do not use it for advertising or ad-targeting purposes;</li>
              <li>
                We do not use Platform Data to build unrelated profiles of individuals or to enrich data
                obtained from other sources beyond what is necessary to deliver the requested Service
                functionality;
              </li>
              <li>
                We limit access to Platform Data to personnel and systems that require it to operate the
                relevant Service, and we apply the security measures described in Section 9;
              </li>
              <li>
                We retain Platform Data only for as long as necessary to provide the relevant Service or
                as otherwise described in this Policy, and we delete or de-identify it thereafter, or upon
                a valid deletion request as described in Section 14; and
              </li>
              <li>
                We operate our integrations in accordance with the Meta Platform Terms, the WhatsApp
                Business Messaging Policy, the Facebook Login Policy, and the Instagram Platform Policy,
                as each may be updated by Meta from time to time.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">7. How We Share Information; Data Processors</h2>
            <p>
              We do not sell Personal Data. We may share information with the following categories of
              recipients, each of which is bound by contractual, technical, or organizational measures
              appropriate to the sensitivity of the data:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                <strong>Business Customers:</strong> where a Service is provided to you through a Business
                Customer, information you provide is shared with that Business Customer as the operator of
                the Service you are using.
              </li>
              <li>
                <strong>Service providers and sub-processors:</strong> including cloud hosting and
                infrastructure providers, communication and messaging gateway providers (including
                WhatsApp Business Solution Providers, SMS, email delivery, and voice calling providers),
                analytics providers, and payment processors, engaged to perform functions on our behalf
                and only to the extent necessary for that purpose.
              </li>
              <li>
                <strong>Meta Platforms, Inc.:</strong> to the extent necessary to operate integrations you
                or a Business Customer have authorized, such as delivering a WhatsApp message or
                retrieving lead data you have requested.
              </li>
              <li>
                <strong>Professional advisors and authorities:</strong> including legal, accounting, and
                other advisors, and law enforcement, regulators, or courts, where required by applicable
                law or to protect our rights, users, or the public.
              </li>
              <li>
                <strong>Corporate transactions:</strong> in connection with a merger, acquisition,
                financing, or sale of assets, subject to appropriate confidentiality protections and,
                where required, notice to affected users.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">8. Third-Party Services</h2>
            <p>
              Our Services may link to, integrate with, or rely on third-party platforms such as Meta
              Platforms (Facebook, Instagram, WhatsApp, Messenger), cloud infrastructure providers,
              analytics services, and payment gateways. These third parties process data in accordance
              with their own privacy policies, and Trovix LLP is not responsible for the privacy practices
              of any third-party service outside our control. We encourage you to review the privacy
              policies of any third-party service you interact with.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">9. Security Measures</h2>
            <p>
              We implement reasonable technical and organizational security measures designed to protect
              Personal Data against unauthorized access, alteration, disclosure, or destruction, in line
              with the reasonable security practices contemplated under the Information Technology Act,
              2000 and the rules made thereunder. These measures may include encryption of data in
              transit, access controls and role-based permissions, network security controls, and
              periodic review of our security practices. No method of transmission or storage is
              completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">10. Data Retention</h2>
            <p>
              We retain Personal Data only for as long as reasonably necessary to fulfill the purposes for
              which it was collected, including to provide the relevant Service, comply with our legal and
              contractual obligations, resolve disputes, and enforce our agreements. Business Customer and
              End-User data is generally retained for the duration of the applicable subscription or
              contractual relationship and for a reasonable period thereafter, unless the Business
              Customer instructs earlier deletion or a longer retention period is required by applicable
              law. Where feasible, data obtained through Meta Platform integrations is retained only for
              as long as necessary to provide the relevant functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">11. International Data Transfers</h2>
            <p>
              Trovix LLP is based in India, and our Services are primarily operated and hosted from India.
              Where the provision of a Service requires Personal Data to be transferred to, or processed
              in, a country other than the one in which you are located — including transfers necessary to
              operate integrations with Meta Platforms or other international service providers — we take
              steps intended to ensure that such transfers are conducted in a manner consistent with
              applicable law, which may include reliance on contractual safeguards such as standard
              contractual clauses, adequacy determinations, or other lawful transfer mechanisms recognized
              under the GDPR and the DPDP Act.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">12. Children's Privacy</h2>
            <p>
              Our Services are not directed at, and we do not knowingly collect Personal Data directly
              from, children for the purpose of independent account registration or marketing. Certain
              Services — such as school and institutional management software — are designed to be used by
              educational institutions, which act as the data controller/data fiduciary for student
              records and are responsible for obtaining any consent required under applicable law,
              including parental or guardian consent where a child's Personal Data is processed. If we
              become aware that Personal Data of a child has been collected other than as described in
              this section and without the required consent, we will take reasonable steps to delete it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">13. Your Rights</h2>
            <p>
              Depending on your location and applicable law, you may have some or all of the following
              rights in relation to your Personal Data:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                <strong>Under the GDPR</strong> (for individuals in the European Economic Area and United
                Kingdom): the right to access, rectify, or erase your Personal Data; restrict or object to
                processing; request data portability; withdraw consent at any time; and lodge a complaint
                with your local supervisory authority.
              </li>
              <li>
                <strong>Under the DPDP Act</strong> (for individuals in India): the right to obtain
                information about processing of your Personal Data, seek correction and erasure, have your
                grievances addressed, nominate another individual to exercise your rights in the event of
                death or incapacity, and withdraw consent at any time where processing is based on
                consent.
              </li>
              <li>
                <strong>Under the CCPA</strong> (for California residents, where applicable): the right to
                know what Personal Information we collect and how it is used and disclosed, the right to
                request deletion, the right to opt out of the sale or sharing of Personal Information (we
                do not sell Personal Information), and the right not to be discriminated against for
                exercising these rights.
              </li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us using the details in Section 19. Where a Service
              is provided to you through a Business Customer, we recommend also contacting that Business
              Customer directly, as it is typically the controller/fiduciary responsible for your data and
              best positioned to action your request; we will support that Business Customer, or act
              directly where appropriate, in fulfilling valid requests.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">14. Data Deletion Process</h2>
            <p>
              You may request deletion of your Personal Data, including data collected via Facebook
              Login, Instagram, Facebook Lead Ads, or the WhatsApp Business Platform, by:
            </p>
            <ol className="list-decimal pl-6 mt-3 space-y-2">
              <li>
                Emailing{' '}
                <a href="mailto:info@trovixtech.com" className="text-gold hover:underline">
                  info@trovixtech.com
                </a>{' '}
                with the subject line "Data Deletion Request," including sufficient information for us to
                identify your account or record (such as your registered phone number, email address, or
                the Business Customer through which you interact with our Services); or
              </li>
              <li>
                Where applicable to the product you use, following the steps on our{' '}
                <Link to="/account-deletion" className="text-gold hover:underline">
                  Data Deletion Instructions
                </Link>{' '}
                page.
              </li>
            </ol>
            <p className="mt-3">
              Upon receiving a verified request, we will delete or anonymize the relevant Personal Data
              within the timeframe required by applicable law, except where retention is necessary to
              comply with a legal obligation, resolve a dispute, or enforce our agreements. Where data was
              provided to us by a Business Customer on whose behalf we act as a processor, we may direct
              your request to that Business Customer and will assist it in fulfilling a valid deletion
              request in accordance with our contractual obligations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">15. Managing Cookies</h2>
            <p>
              Most browsers allow you to refuse or delete cookies through their settings. Because cookies
              may be used to keep you signed in and remember your preferences, disabling them may affect
              the availability or functionality of certain features of our website and product
              dashboards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">16. Grievance Officer</h2>
            <p>
              In accordance with the Information Technology Act, 2000, the rules made thereunder, and the
              DPDP Act, we have designated a Grievance Officer to address complaints or concerns regarding
              the processing of your Personal Data.
            </p>
            <p className="mt-3">
              Grievance Officer, Trovix LLP<br />
              Email:{' '}
              <a href="mailto:info@trovixtech.com" className="text-gold hover:underline">
                info@trovixtech.com
              </a>
            </p>
            <p className="mt-3">
              We will acknowledge and address grievances within the timelines prescribed under applicable
              law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">17. Regulatory Compliance</h2>
            <p>This Privacy Policy is designed to align with, among others:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Meta Platform Terms and the Meta Developer Policies;</li>
              <li>The WhatsApp Business Messaging Policy;</li>
              <li>The Facebook Login Policy;</li>
              <li>The Instagram Platform Policy;</li>
              <li>The General Data Protection Regulation (GDPR);</li>
              <li>The California Consumer Privacy Act (CCPA), where applicable;</li>
              <li>The Information Technology Act, 2000, and the rules made thereunder, including the Sensitive Personal Data or Information Rules; and</li>
              <li>The Digital Personal Data Protection Act, 2023 (DPDP Act).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">18. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices,
              our products, or applicable law. We will post the revised Policy on this page with an
              updated "Last updated" date. We encourage you to review this Policy periodically. Material
              changes will, where required by law, be communicated through additional notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">19. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <p className="mt-3">
              Trovix LLP<br />
              India<br />
              Email:{' '}
              <a href="mailto:info@trovixtech.com" className="text-gold hover:underline">
                info@trovixtech.com
              </a>
              <br />
              Website:{' '}
              <a
                href="https://www.trovixtech.com"
                className="text-gold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.trovixtech.com
              </a>
            </p>
          </section>
        </div>

        <footer className="mt-12 pt-6 border-t border-border text-sm text-muted-foreground">
          <p>
            This Privacy Policy applies to www.trovixtech.com and to all present and future software
            products, applications, platforms, and services developed and operated by Trovix LLP.
          </p>
        </footer>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
