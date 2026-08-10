import React from 'react';

const TermsOfService: React.FC = () => {
  const lastUpdated = 'July 14, 2026';

  return (
    <main className="pt-24 pb-20">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">Terms of Service</h1>
          <p className="text-foreground/80 leading-relaxed">
            These Terms of Service ("Terms") govern your access to and use of www.trovixtech.com and
            any software product, website, mobile application, cloud platform, or Software-as-a-Service
            ("SaaS") solution developed, operated, or offered by TROVIX LLP ("Trovix", "the Company",
            "we", "our", or "us"), an Indian Limited Liability Partnership, whether now existing or
            introduced in the future (collectively, the "Services").
          </p>
          <p className="text-sm text-muted-foreground mt-3">Last updated: {lastUpdated}</p>
        </header>

        <div className="space-y-8 text-foreground/90 leading-7">

          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing our website, creating an account, or otherwise using any Trovix LLP Service,
              you agree to be bound by these Terms and by our{' '}
              <a href="/privacy-policy" className="text-gold hover:underline">Privacy Policy</a>,
              which is incorporated into these Terms by reference. If you are entering into these Terms
              on behalf of a company, institution, or other legal entity, you represent that you have the
              authority to bind that entity, in which case "you" and "your" refers to that entity.
            </p>
            <p className="mt-3">
              Because Trovix LLP offers multiple distinct products, a specific Service may be governed by
              additional product-specific terms, an order form, or a statement of work ("Product Terms")
              agreed between you and Trovix LLP. These Terms apply to every Service by default; where
              Product Terms exist for a particular Service and conflict with these Terms, the Product
              Terms govern for that Service, and these Terms continue to govern all other Services and all
              matters not addressed in the Product Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">2. Eligibility</h2>
            <p>
              You must be at least 18 years of age and competent to enter into a binding contract under
              Section 11 of the Indian Contract Act, 1872 (or the equivalent law of your jurisdiction) to
              use our Services. If you are using the Services on behalf of an organization, you represent
              that the organization is duly organized and validly existing under applicable law and that
              you are authorized to accept these Terms on its behalf.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">3. Account Registration</h2>
            <p>
              Certain Services require you to register for an account. You agree to provide accurate,
              current, and complete information during registration and to keep it up to date. You are
              responsible for maintaining the confidentiality of your account credentials and for all
              activity that occurs under your account. You must notify us promptly at{' '}
              <a href="mailto:info@trovixtech.com" className="text-gold hover:underline">
                info@trovixtech.com
              </a>{' '}
              if you become aware of any unauthorized use of your account. We reserve the right to
              refuse registration, or to suspend or terminate an account, in accordance with Section 15
              (Termination).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Acceptable Use</h2>
            <p>
              You agree to use the Services only for lawful business purposes and in accordance with
              these Terms, any applicable Product Terms, and all applicable laws and regulations. You are
              responsible for all data, content, and communications that you or your end users submit to,
              or transmit through, the Services ("Customer Data"), and for ensuring that you have all
              rights and consents necessary to process that Customer Data through the Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Prohibited Activities</h2>
            <p>You agree not to, and not to permit any third party to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Use the Services for any unlawful, fraudulent, defamatory, or harassing purpose;</li>
              <li>
                Send unsolicited bulk messages, spam, or communications to recipients who have not
                provided appropriate consent, including through WhatsApp, Messenger, Instagram, email, or
                voice calling features;
              </li>
              <li>
                Reverse engineer, decompile, disassemble, or attempt to derive the source code of any
                part of the Services, except to the extent such restriction is prohibited by applicable
                law;
              </li>
              <li>
                Copy, resell, sublicense, rent, lease, or otherwise make the Services available to any
                third party except as expressly permitted by these Terms or applicable Product Terms;
              </li>
              <li>
                Scrape, harvest, or extract data from the Services other than through the features and
                APIs we provide for that purpose;
              </li>
              <li>
                Upload or transmit viruses, malware, or other code intended to disrupt, damage, or gain
                unauthorized access to any system;
              </li>
              <li>
                Circumvent, disable, or interfere with security-related features of the Services or
                attempt to gain unauthorized access to any account, system, or network;
              </li>
              <li>
                Impersonate any person or entity, or misrepresent your affiliation with any person or
                entity;
              </li>
              <li>Infringe the intellectual property, privacy, or other rights of any third party; or</li>
              <li>
                Use the Services in a manner that violates the Meta Platform Terms, the WhatsApp Business
                Messaging Policy, the Facebook Login Policy, the Instagram Platform Policy, or the terms
                of any other third-party platform integrated with the Services.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">6. WhatsApp and Meta Platform Compliance</h2>
            <p>
              Certain Services enable integration with Meta Platforms, Inc. services, including the
              WhatsApp Business Platform, Facebook Login, Facebook Lead Ads, Instagram messaging, and
              Messenger. Where you use such integrations, you additionally agree that:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                You will comply with the Meta Platform Terms, the WhatsApp Business Messaging Policy, the
                Facebook Login Policy, and the Instagram Platform Policy, as applicable, as each may be
                updated by Meta from time to time;
              </li>
              <li>
                You are solely responsible for obtaining valid opt-in consent from recipients before
                sending them messages through WhatsApp, Messenger, or Instagram, and for the content of
                any message, advertisement, or lead form you configure or send through the Services;
              </li>
              <li>
                You will not use these integrations to send messages relating to prohibited or restricted
                content categories under Meta's policies, and you will not use lead data or message data
                obtained through these integrations for any purpose other than your own legitimate
                business communications with the relevant individual;
              </li>
              <li>
                Trovix LLP acts as a technology provider enabling your use of these integrations; you, and
                not Trovix LLP, are the sender, advertiser, or data controller of record in respect of
                messages, advertisements, and lead forms that you configure and control; and
              </li>
              <li>
                We may suspend or restrict your access to a Meta-connected feature, without liability to
                you, where we reasonably believe your use violates this Section, Meta's policies, or
                applicable law, including where such action is required by Meta.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">7. API Usage</h2>
            <p>
              Where a Service provides access to an application programming interface (API), whether
              developed by Trovix LLP or made available as a pass-through to a third-party API such as a
              Meta API, your use of that API is subject to any documentation, rate limits, and usage
              policies we publish, in addition to these Terms. You must keep all API keys, tokens, and
              credentials confidential and are responsible for all activity conducted using your
              credentials. We may suspend or revoke API access for activity that we reasonably believe
              constitutes abuse, a security risk, or a violation of these Terms. APIs are provided on an
              "as is" basis and may be modified, versioned, or deprecated with reasonable notice where
              practicable. Where an API wraps or exposes a third-party platform's functionality, your use
              is also subject to that third party's own developer terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">8. Third-Party Integrations</h2>
            <p>
              The Services may integrate with third-party platforms and services, including Meta
              Platforms (Facebook, Instagram, WhatsApp, Messenger), payment gateways, cloud hosting
              providers, and communication or analytics providers. Your use of any such integration is
              also governed by the applicable third party's terms of service and privacy policy. We do
              not control, and are not responsible for, the availability, functionality, or policies of
              third-party platforms, and we are not liable for any change, suspension, or discontinuation
              of a third-party platform that affects the Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">9. Subscription</h2>
            <p>
              Paid Services are made available on a subscription basis for the term, features, and usage
              limits specified at the time of purchase or in the applicable order form. Unless otherwise
              stated in the applicable order form, subscriptions renew automatically for successive terms
              equal to the original subscription period unless cancelled in accordance with the notice
              period specified at the time of purchase. We may offer upgrades, downgrades, or changes to
              plan features from time to time, subject to any applicable price adjustment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">10. Billing</h2>
            <p>
              Fees for paid Services are payable in advance for each billing cycle through the payment
              method you provide, in accordance with the pricing and invoicing terms specified at the
              time of purchase or in the applicable order form. Failure to pay undisputed fees when due
              may result in suspension of access to the relevant Service until payment is received. You
              must notify us of any billing dispute within a reasonable period of the relevant invoice
              date; undisputed amounts remain payable pending resolution. Except as expressly stated in an
              applicable order form or as required by law, fees are non-refundable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">11. Taxes</h2>
            <p>
              Unless expressly stated otherwise, fees for the Services are exclusive of applicable taxes,
              including Goods and Services Tax (GST) and any other tax, duty, levy, or similar
              governmental charge imposed on the provision of the Services. You are responsible for all
              such taxes other than taxes on Trovix LLP's net income. Where required under applicable
              Indian tax law, we will charge and collect applicable taxes on our invoices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">12. Intellectual Property</h2>
            <p>
              Trovix LLP and its licensors retain all right, title, and interest in and to the Services,
              including all associated software, source code, documentation, trademarks, trade names,
              logos, and underlying technology. Except for the limited, non-exclusive, non-transferable
              right to access and use the Services in accordance with these Terms and any applicable
              Product Terms, no rights are granted to you by implication or otherwise. As between you and
              Trovix LLP, you retain all right, title, and interest in and to your Customer Data. If you
              provide us with feedback or suggestions about the Services, you grant us a non-exclusive,
              royalty-free, perpetual license to use that feedback to improve our Services, without any
              obligation to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">13. Confidentiality</h2>
            <p>
              Each party may disclose non-public business, technical, or product information to the other
              in connection with these Terms ("Confidential Information"). The receiving party will use
              the disclosing party's Confidential Information solely to exercise its rights and perform
              its obligations under these Terms, and will protect it using at least the same degree of
              care it uses to protect its own confidential information of similar nature, and no less than
              a reasonable degree of care. These obligations do not apply to information that is or
              becomes publicly available through no fault of the receiving party, was already lawfully
              known to the receiving party, is independently developed without reference to the
              disclosing party's Confidential Information, or is required to be disclosed by law, provided
              that, where legally permissible, the receiving party gives the disclosing party reasonable
              prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">14. Availability</h2>
            <p>
              We use commercially reasonable efforts to make the Services available and to maintain their
              performance and security. The Services may be temporarily unavailable for scheduled
              maintenance, emergency maintenance, or reasons beyond our reasonable control, including the
              unavailability of third-party platforms integrated with the Services, such as Meta
              Platforms. Except where a specific service-level commitment is set out in a separate written
              agreement or order form, the Services are not guaranteed to be uninterrupted, timely, secure,
              or error-free.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">15. Termination</h2>
            <p>
              You may stop using the Services, or terminate a paid subscription, in accordance with the
              cancellation terms specified at the time of purchase or in the applicable order form. We may
              suspend or terminate your access to the Services, in whole or in part: (a) for any material
              breach of these Terms or applicable Product Terms that is not cured within a reasonable
              period after notice, where capable of cure; (b) immediately, where you violate Section 5
              (Prohibited Activities) or Section 6 (WhatsApp and Meta Platform Compliance), or where
              required by applicable law or by a third-party platform such as Meta; or (c) for convenience,
              upon reasonable prior notice, in the case of Services provided without a fixed term.
            </p>
            <p className="mt-3">
              Upon termination, your right to access and use the Services will end, and fees accrued but
              unpaid as of the effective date of termination will remain due. Handling of Customer Data
              following termination, including export and deletion, is addressed in our{' '}
              <a href="/privacy-policy" className="text-gold hover:underline">Privacy Policy</a>.
              Sections of these Terms that by their nature should survive termination — including
              Intellectual Property, Confidentiality, Disclaimer, Limitation of Liability, Indemnification,
              and Governing Law — will survive.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">16. Disclaimer</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICES ARE PROVIDED "AS IS" AND
              "AS AVAILABLE," WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY,
              INCLUDING ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE,
              AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE,
              OR FREE OF HARMFUL COMPONENTS, OR THAT ANY THIRD-PARTY PLATFORM INTEGRATED WITH THE SERVICES,
              INCLUDING META PLATFORMS, WILL REMAIN AVAILABLE OR UNCHANGED.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">17. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, TROVIX LLP WILL NOT BE LIABLE FOR ANY
              INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY
              LOSS OF PROFITS, REVENUE, DATA, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF THE
              SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. TO THE MAXIMUM
              EXTENT PERMITTED BY APPLICABLE LAW, TROVIX LLP'S AGGREGATE LIABILITY ARISING OUT OF OR
              RELATED TO THESE TERMS OR THE SERVICES WILL NOT EXCEED THE AMOUNT YOU PAID TO TROVIX LLP FOR
              THE RELEVANT SERVICE IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM.
              THESE LIMITATIONS WILL NOT APPLY TO LIABILITY ARISING FROM A PARTY'S INDEMNIFICATION
              OBLIGATIONS, BREACH OF CONFIDENTIALITY, GROSS NEGLIGENCE, WILLFUL MISCONDUCT, OR ANY
              LIABILITY THAT CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">18. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Trovix LLP, its partners, employees, and
              agents from and against any claims, liabilities, damages, losses, and expenses, including
              reasonable legal fees, arising out of or related to: (a) your use of the Services in
              violation of these Terms, applicable Product Terms, or applicable law; (b) your Customer
              Data, or any message, advertisement, or communication sent through the Services; or (c) your
              violation of the Meta Platform Terms, the WhatsApp Business Messaging Policy, or any other
              third-party platform terms applicable to your use of the Services. Trovix LLP agrees to
              indemnify, defend, and hold you harmless from any third-party claim that the Services, as
              provided by us and used in accordance with these Terms, infringe that third party's
              intellectual property rights under Indian law. In each case, the indemnifying party's
              obligations are conditioned on prompt written notice of the claim, and the indemnifying
              party being given control of the defense and settlement of the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">19. Force Majeure</h2>
            <p>
              Neither party will be liable for any failure or delay in performance under these Terms
              (other than payment obligations) resulting from causes beyond its reasonable control,
              including acts of God, natural disaster, war, terrorism, riot, epidemic or pandemic,
              governmental action, labor disputes, failure of telecommunications, internet, or power
              infrastructure, or the unavailability, suspension, or policy changes of a third-party
              platform such as Meta Platforms, WhatsApp, Facebook, or Instagram.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">20. Dispute Resolution</h2>
            <p>
              In the event of any dispute, controversy, or claim arising out of or relating to these
              Terms, the parties will first attempt in good faith to resolve the matter through
              negotiation between authorized representatives. If the dispute is not resolved within thirty
              (30) days of one party notifying the other in writing of the dispute, it will be referred to
              and finally resolved by arbitration under the Arbitration and Conciliation Act, 1996, and any
              statutory modification or re-enactment thereof. The arbitration will be conducted by a sole
              arbitrator mutually appointed by the parties, or, failing agreement, appointed in accordance
              with the Act. The seat and venue of arbitration will be Nagpur, Maharashtra, India, and the
              language of arbitration will be English. The arbitral award will be final and binding on the
              parties. Nothing in this Section prevents either party from seeking urgent interim or
              injunctive relief from a competent court.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">21. Jurisdiction</h2>
            <p>
              Subject to Section 20 (Dispute Resolution), the courts of competent jurisdiction at Nagpur,
              Maharashtra, India will have exclusive jurisdiction over any matter arising out of or
              relating to these Terms that is not subject to, or that arises in connection with,
              arbitration under Section 20, including applications for interim relief.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">22. Indian Governing Law</h2>
            <p>
              These Terms, and any dispute arising out of or in connection with them or the Services, are
              governed by and construed in accordance with the laws of India, including the Indian
              Contract Act, 1872, the Information Technology Act, 2000, and the rules made thereunder, and,
              in respect of Trovix LLP's status as a limited liability partnership, the Limited Liability
              Partnership Act, 2008, without regard to conflict-of-law principles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">23. Changes to These Terms</h2>
            <p>
              We may revise these Terms from time to time to reflect changes in our Services, business
              practices, or applicable law. We will post the revised Terms on this page with an updated
              "Last updated" date, and, where changes are material, will use reasonable efforts to provide
              additional notice. Your continued use of the Services after the effective date of a revision
              constitutes your acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">24. Contact Information</h2>
            <p>
              If you have questions about these Terms, please contact us:
            </p>
            <p className="mt-3">
              Trovix LLP<br />
              Nagpur, Maharashtra, India<br />
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
            These Terms of Service apply to www.trovixtech.com and to all present and future software
            products, applications, platforms, and services developed and operated by Trovix LLP.
          </p>
        </footer>
      </section>
    </main>
  );
};

export default TermsOfService;
