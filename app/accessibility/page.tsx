import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal-page";

// Draft pending PKT legal review and the formal accessibility audit — see
// OPEN-ITEMS.md before launch.

export const metadata: Metadata = {
  title: "Accessibility Statement | PKT Logistics",
  description:
    "PKT's commitment to WCAG 2.1 Level AA, how the site is tested, and how to report an accessibility issue.",
};

const SECTIONS: LegalSection[] = [
  {
    id: "commitment",
    title: "Our commitment",
    body: (
      <p>
        PKT wants everyone — shippers, drivers and job seekers — to be able to
        use this website. We aim to conform to the Web Content Accessibility
        Guidelines (WCAG) 2.1 at Level AA.
      </p>
    ),
  },
  {
    id: "measures",
    title: "What we do",
    body: (
      <ul>
        <li>Semantic headings, landmarks and labelled form fields.</li>
        <li>Full keyboard access, with visible focus indicators.</li>
        <li>Text alternatives for meaningful images and maps.</li>
        <li>Colour contrast that meets AA ratios for body text.</li>
        <li>Respect for reduced-motion settings in animations.</li>
        <li>Layouts that reflow on small screens and at 200% zoom.</li>
      </ul>
    ),
  },
  {
    id: "audit",
    title: "Testing and audit",
    body: (
      <p>
        The site is checked with automated tools and manual keyboard and
        screen-reader testing as pages are built. A formal WCAG 2.1 AA audit
        is scheduled; this statement will be updated with its date and results
        once complete.
      </p>
    ),
  },
  {
    id: "limitations",
    title: "Known limitations",
    body: (
      <p>
        Some third-party content we link to, such as government lookup tools,
        is outside our control and may not meet the same standard. If
        something on our own pages doesn&rsquo;t work for you, we want to hear
        about it.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Report an issue",
    body: (
      <>
        <p>
          If you have trouble using any part of this site, or need information
          in a different format, contact us and tell us the page and the
          problem. We will work with you to provide the information another
          way.
        </p>
        <ul>
          <li>
            Phone: <a href="tel:+12246660136">+1 (224) 666-0136</a>
          </li>
          <li>
            Email: <a href="mailto:safety@pktgroup.net">safety@pktgroup.net</a>
          </li>
          <li>
            Online: the <a href="/contact">contact page</a> (Vendors &amp;
            general route)
          </li>
          <li>Mail: 9400 W Higgins Rd STE 412, Rosemont, IL 60018</li>
        </ul>
      </>
    ),
  },
];

export default function AccessibilityPage() {
  return (
    <LegalPage
      eyebrow="Accessibility"
      title="Accessibility statement"
      intro="Our WCAG 2.1 AA commitment, how we test, and how to tell us when something doesn't work."
      updated="September 25, 2026"
      sections={SECTIONS}
    />
  );
}
