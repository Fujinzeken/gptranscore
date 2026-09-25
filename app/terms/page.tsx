import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal-page";

// Draft pending PKT legal review — see OPEN-ITEMS.md before launch.

export const metadata: Metadata = {
  title: "Terms of Use | PKT Logistics",
  description:
    "Terms for using the PKT website, including acceptable use and the non-binding nature of rate estimates and quote responses.",
};

const SECTIONS: LegalSection[] = [
  {
    id: "acceptance",
    title: "Using this site",
    body: (
      <p>
        This website is operated by PKT Transportation INC (USDOT 3188421, MC
        132863), 9400 W Higgins Rd STE 412, Rosemont, IL 60018. By using it,
        you agree to these terms. If you do not agree, please do not use the
        site.
      </p>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    body: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>submit false, misleading or someone else&rsquo;s information;</li>
          <li>
            use the site or its forms to send spam, malware or unlawful
            content;
          </li>
          <li>
            attempt to gain unauthorised access to the site, its servers or
            the data behind it; or
          </li>
          <li>
            scrape, copy or republish site content for commercial use without
            our written permission.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "estimates",
    title: "Quotes and estimates are not binding",
    body: (
      <>
        <p>
          Rates, transit times, availability and any other figures we provide
          through this site — including responses to quote requests — are
          estimates for planning purposes only. They are not an offer or a
          contract of carriage.
        </p>
        <p>
          A shipment is accepted only when PKT confirms it in writing through a
          rate confirmation or other agreement. That agreement, not this
          website, governs the shipment.
        </p>
      </>
    ),
  },
  {
    id: "sms",
    title: "Text messaging (SMS)",
    body: (
      <>
        <p>
          <strong>Consent.</strong> Phone numbers obtained as part of the SMS
          consent process will not be shared with third parties for marketing
          purposes.
        </p>
        <p>
          <strong>What we send.</strong> If you consent to receive text
          messages from PKT Transportation INC, you may receive messages
          related to conversations you started with us, appointment reminders,
          meetings, follow-ups on cases and order confirmations. Example:
          &ldquo;Hello, Thank you for contacting PKT Transportation INC, how
          can we help you? Reply STOP to opt-out at any time. Message and data
          rates may apply. For assistance, text HELP or visit our Privacy
          Policy and Terms and Conditions.&rdquo;
        </p>
        <p>
          <strong>Frequency and fees.</strong> Message frequency varies.
          Message and data rates may apply; your mobile carrier may charge for
          each message sent or received.
        </p>
        <p>
          <strong>How to opt in.</strong> By ticking the SMS consent box on a
          form on this website, on an intake or paper form, or by agreeing
          verbally with our team. Consent is not a condition of any service or
          of applying to drive.
        </p>
        <p>
          <strong>How to opt out.</strong> Reply STOP to any message. Once you
          opt out you will receive no further texts; reply START to opt back
          in. Reply HELP for assistance, or contact us at{" "}
          <a href="tel:+12246660136">+1 (224) 666-0136</a> or{" "}
          <a href="mailto:safety@pktgroup.net">safety@pktgroup.net</a>.
        </p>
      </>
    ),
  },
  {
    id: "careers",
    title: "Driver opportunities",
    body: (
      <p>
        Job postings and pay information on this site describe current
        opportunities and may change. Submitting an application does not
        create an offer of employment or a lease agreement. All drivers are
        subject to our qualification process and applicable FMCSA
        requirements.
      </p>
    ),
  },
  {
    id: "content",
    title: "Site content",
    body: (
      <p>
        The text, graphics, logos and photographs on this site belong to PKT
        or are used with permission. We work to keep content accurate but it
        is provided &ldquo;as is&rdquo;, and we may change or remove it at any
        time without notice.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: (
      <p>
        To the fullest extent permitted by law, PKT is not liable for any
        indirect, incidental or consequential damages arising from your use
        of, or inability to use, this website. Liability for freight in our
        care is governed by the applicable shipping agreement and federal law,
        not by these terms.
      </p>
    ),
  },
  {
    id: "links",
    title: "Links to other sites",
    body: (
      <p>
        Links to third-party sites, such as the FMCSA, are provided for
        convenience. We are not responsible for their content or practices.
      </p>
    ),
  },
  {
    id: "law",
    title: "Governing law",
    body: (
      <p>
        These terms are governed by the laws of the State of Illinois, without
        regard to its conflict-of-law rules. Any dispute relating to this site
        will be brought in the state or federal courts located in Cook County,
        Illinois.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Questions",
    body: (
      <p>
        Questions about these terms? Email{" "}
        <a href="mailto:safety@pktgroup.net">safety@pktgroup.net</a>, call{" "}
        <a href="tel:+12246660136">+1 (224) 666-0136</a>, or use the{" "}
        <a href="/contact">contact page</a>.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of use"
      intro="The rules for using this website, and what a rate estimate from us does and doesn't mean."
      updated="September 25, 2026"
      sections={SECTIONS}
    />
  );
}
