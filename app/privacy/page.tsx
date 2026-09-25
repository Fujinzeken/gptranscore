import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal-page";

// Draft pending PKT legal review — see OPEN-ITEMS.md before launch.

export const metadata: Metadata = {
  title: "Privacy Policy | PKT Logistics",
  description:
    "How PKT collects, uses and protects information submitted through this website, including messaging consent and data requests.",
};

const SECTIONS: LegalSection[] = [
  {
    id: "collect",
    title: "Information we collect",
    body: (
      <>
        <p>We collect only what you choose to send us through the forms on this site:</p>
        <ul>
          <li>
            <strong>Quote requests</strong> — your name, company, email, phone
            and the details of your load (lane, dates, equipment, commodity).
          </li>
          <li>
            <strong>Contact messages</strong> — your name, email, phone where
            asked, the route you selected and your message.
          </li>
          <li>
            <strong>Driver applications</strong> — your name, phone, email,
            location, driver type, CDL class and years of experience, plus your
            yes/no and count answers to the pre-qualification questions.
          </li>
        </ul>
        <p>
          We do not ask for or collect Social Security numbers, dates of birth,
          driver&rsquo;s licence numbers or background-check authorisations on
          this website. Those are handled directly with our recruiting team
          later in the hiring process.
        </p>
      </>
    ),
  },
  {
    id: "use",
    title: "How we use it",
    body: (
      <>
        <p>We use the information you submit to:</p>
        <ul>
          <li>respond to your quote request, message or application;</li>
          <li>contact you by phone, text or email about that request;</li>
          <li>keep a record of the request and our response; and</li>
          <li>run and improve this website.</li>
        </ul>
        <p>
          We do not sell your information. Form submissions are delivered to
          our team through service providers who process them only on our
          behalf.
        </p>
      </>
    ),
  },
  {
    id: "messaging",
    title: "Calls and text messages",
    body: (
      <>
        <p>
          Our forms include an optional box to agree to text messages from PKT
          Transportation INC. Ticking it is never required to send a form.
          When you tick it, we store a record of that consent: the consent
          wording you agreed to, the date and time you agreed, and the page
          where you agreed.
        </p>
        <p>
          <strong>
            SMS opt-in and phone numbers collected for SMS are not shared with
            any third party or affiliate company for marketing purposes.
          </strong>
        </p>
        <p>
          Message frequency varies, and message and data rates may apply. Reply
          STOP to any message to opt out, or HELP for assistance. See the{" "}
          <a href="/terms#sms">text messaging terms</a> for details.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Analytics and cookies",
    body: (
      <>
        <p>
          This site does not currently set advertising or tracking cookies. We
          may add analytics to understand how visitors use the site — for
          example, pages visited, the referring site, and device and browser
          type. That information would be used in aggregate, not to identify
          you, and this policy will be updated before any such tool is added.
        </p>
        <p>You can block or delete cookies at any time in your browser settings.</p>
      </>
    ),
  },
  {
    id: "retention",
    title: "Retention and security",
    body: (
      <p>
        We keep submitted information for as long as we need it to handle your
        request and meet our business and legal obligations, then delete it.
        We use reasonable administrative and technical safeguards to protect
        it, but no method of transmission or storage is completely secure.
      </p>
    ),
  },
  {
    id: "children",
    title: "Children's privacy",
    body: (
      <p>
        This site is not directed to anyone under 13, and we do not knowingly
        collect personal information from children. If you believe a child has
        sent us information, contact us and we will delete it.
      </p>
    ),
  },
  {
    id: "requests",
    title: "Your requests",
    body: (
      <>
        <p>
          You can ask us what information we hold about you, ask us to correct
          it, or ask us to delete it. To make a request, email{" "}
          <a href="mailto:safety@pktgroup.net">safety@pktgroup.net</a>, call{" "}
          <a href="tel:+12246660136">+1 (224) 666-0136</a>, use the{" "}
          <a href="/contact">contact page</a>, or write to us:
        </p>
        <p>
          PKT Transportation INC
          <br />
          9400 W Higgins Rd STE 412
          <br />
          Rosemont, IL 60018
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        We may update this policy from time to time. The date at the top of
        this page shows when it last changed.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy policy"
      intro="What PKT Transportation INC collects when you request a quote, send a message or apply to drive — and what we do with it."
      updated="September 25, 2026"
      sections={SECTIONS}
    />
  );
}
