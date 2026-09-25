# PKT site — open items awaiting client confirmation

The site is aligned to the three sitemap CSVs (Sitemap, Content Detail,
Summary & Legend). Where the CSV body and the client comments ("Open Items /
Dev Notes") disagree, the comment wins. Nothing below is invented on the site;
every unresolved value renders as neutral fallback copy.

## Content alignment — what changed (September 2026)

### Removed (client: "we currently don't do")

- **Step deck, dedicated and drop trailer** — pages deleted and every mention
  stripped (nav, footer, services hub, cross-sells, quote form equipment list,
  about copy, careers). Old URLs 308-redirect to `/services`.

### Removed (not in the approved sitemap)

| Old URL | Redirects to |
| --- | --- |
| `/services/step-deck`, `/services/dedicated`, `/services/drop-trailer`, `/freight-brokerage-services` | `/services` |
| `/pktgrouptechnology`, `/sustainability` (+ uppercase variants) | `/company` |
| `/office-careers`, `/elitedriverprogram`, `/highestpayingtruckingcompanies` (+ uppercase variants) | `/careers` |
| `/blog` | `/` |
| `/Safety` | `/safety` |

Redirects live in `next.config.ts` (`REMOVED_ROUTES`) and are mirrored as
301s in `public/_redirects`.

### Removed (invented or carried over from the previous brand)

- All invented people: leadership grid, driver managers, testimonials, named
  dispatchers.
- Press releases, awards, "journey" timeline, history section.
- "Founded 2006", "Two decades", "500+ tractors", "1,800 trailers", Joliet HQ,
  GP Transco references.
- Invented phone numbers: (800) 460-5071, (708) 298-8281, 800-555-0199.
- Safety tech stack not in the CSV: Samsara, Idelic, E-SMART, Safety Connect,
  safety videos, weather intel, "Top CSA scores".
- Careers: invented pay calculator, ELITE programme, benefits grid, equipment
  showcase, route cards, driver highlights.
- Orphaned components and images left behind by the above.

### Client comments rewritten into page copy

- **Home:** "Operating since 2018" ticker; three equipment types link to their
  service pages; regional corridors named in Coverage.
- **Services hub:** Equipment section (three cards); lane map of the 18 state
  pairs; corridors Midwest→Northeast, Northeast→Southeast, Southeast→Midwest.
- **Dry van:** 53′ equipment; first-come, first-served facilities loaded in
  about 2 hours.
- **Reefer:** units under manufacturer warranty; commodity focus (produce,
  grocery, dairy, meat and poultry); Booking Requirements section.
- **Flatbed:** 48′ and 53′ 2025 trailers; aluminum available; headracks; team
  flatbed for direct deliveries; full tarped loads; permitted oversize with
  permits and escorts arranged (the RGN / multi-axle exclusion stays).
- **Company drivers:** training for new CDL-A holders; USPS freight for US
  citizens; new 53′ dry vans; no owner-operator overhead.
- **Owner-operators:** team loads on consistent lanes.
- **Safety:** 24/7 maintenance team, partner repair shops with short wait
  times, planned PM service; Compliance block with USDOT/MC and an FMCSA
  SAFER lookup link.
- **Contact:** office address and USDOT/MC block; quote route links to the
  full quote form.

### Built (Phase 1)

- `/privacy`, `/terms`, `/accessibility` — CSV SEO titles and outlines.
  **All three are drafts pending PKT legal review.** The accessibility
  statement references a formal WCAG 2.1 AA audit that has not happened yet;
  add its date and results once done.
- 404 page — CSV title ("Page Not Found | PKT Logistics"), links to services,
  careers, open positions and contact. The CSV also asks for a search box;
  the site has no search index, so this is deferred.
- `/careers/jobs` — state and driver-type filters, JobPosting JSON-LD per
  opening, `validThrough` expiry filter with hourly revalidation. `JOBS` in
  `components/driver-careers/jobs-data.ts` is empty until real openings are
  supplied (the board shows an honest empty state).
- `/careers/apply?type=owner-operator` preselects the driver type; the
  Telegram alert now shows "Applying as" and no longer prints empty
  city/ZIP.

### Carried over from the original pktgroup.net

Source: the live site's Home, Drive with us, Get a quote, Contacts, Privacy
Policy and Terms and Conditions pages.

- **Company identity:** legal name **PKT Transportation INC** (footer
  copyright, contact office block, privacy, terms, JobPosting JSON-LD);
  main phone **+1 (224) 666-0136** and email **safety@pktgroup.net** (footer,
  contact office block, privacy, terms, accessibility).
- **SMS consent:** the original checkbox wording, word for word, is on the
  quote form (contact step), contact form (every route that asks for a phone),
  Quick Apply and the driver qualification modal. It is optional and
  unticked by default. Each submission now sends `smsConsent` (Yes/No),
  `smsConsentText`, `smsConsentAt` and `smsConsentSource` to Apps Script, and
  the Telegram alert shows "SMS consent: Yes · /page".
  **Apps Script needs four new columns** for these fields on every tab, or
  the values are dropped.
- **Terms:** new "Text messaging (SMS)" section from the original terms
  (not shared for marketing, message types, example message, STOP/START/HELP,
  opt-in methods). "50 to 1000 messages daily across all users" is replaced
  with "Message frequency varies", to match the checkbox wording.
- **Privacy:** "SMS opt-in and phone numbers are not shared with any third
  party or affiliate company for marketing purposes", plus a children's
  privacy section.
- **Driver FAQ (careers hub):** CDL-A + 6 months of experience; training by
  professional instructors for drivers without experience; Kenworth and
  Freightliner Cascadia trucks; 24/7 dispatch, maintenance, PTI and fuel
  teams; clean-inspection bonus; owner-operator discounts at UGL Truck Center
  and Montgomery Truck Wash. FAQPage JSON-LD added.
- **Company drivers:** clean-inspection bonus and 24/7 support cards.
  **Owner-operators:** shop/wash discounts and 24/7 support cards.
- **Home:** Communication section now says dispatch is available around the
  clock. (The broker testimonials were added, then removed at the client's
  request.)
- **Company:** original mission statement and the brokers-and-drivers
  relationship line; overview stats 5+ years, 20,000+ loads delivered, 96% of
  US ZIP codes covered, 24/7 dispatch.
- **Contact:** operations route shows "Dispatch: available around the clock,
  24/7" (replaces the unresolved operations [HOURS] for dispatch).

Not carried over: the "Through a unique combination of engineering,
construction and design…" subtitle (WordPress theme filler), the "We go
Global" heading, "Track Shipment", Google Places (not used by this site) and
the cookie banner (this site sets no tracking cookies).

## Needs client confirmation

### Decided by the client (September 25, 2026)

- **Equipment year: 2025.** Home ticker reads "2025 equipment"; company
  drivers and the FAQ say 2025 Kenworth and Freightliner Cascadia tractors.
- **Stats stay:** 5+ years, 20,000+ loads, 96% of US ZIP codes, 24/7 dispatch.
- **Testimonials removed.**
- **One phone and one email sitewide:** +1 (224) 666-0136 and
  safety@pktgroup.net. The recruiting numbers +1 (331) 256-8985 and
  +1 (331) 336-1445 are no longer used anywhere; every contact route, the
  careers pages, Quick Apply, the driver modal and the footer use the main
  line.
- **New truck photography; home hero is now an image carousel.** The old
  photos showed another carrier's branded trucks, trailer and staff ("GP
  Transco"), an Australian road train and a European road, and the hero video
  came from the same source. All were removed. The current photos in
  `public/trucks/` are placeholders until PKT supplies its own fleet photos:
  - Unsplash (free commercial use, no attribution required):
    `highway-dry-van.jpg`, `reefer-desert.jpg`, `flatbed-kenworth.jpg`.
  - AI-generated, unbranded: `highway-dusk.jpg`, `loading-dock.jpg`,
    `cab-view.jpg`, `interstate-aerial.jpg`, `equipment-yard-tight.jpg`,
    `dry-van-dock.jpg`, `night-rest.jpg`.
  - Alt text describes what each photo shows; none claims to show PKT
    equipment. The two staff cutouts on the About page were removed.

### Raised by the original site

- **Applicants without a CDL-A:** the original driver form accepted Class B
  and "no license, but would like to obtain one", and asked about US work
  eligibility and endorsements (Doubles, Triples, HazMat). The new forms
  follow the CSV (CDL-A focus). Confirm whether those questions should come
  back.

### Conflicts in the source docs

- **USDOT number:** appears as **3188421** and **318421** (Safety row). Using
  **3188421** sitewide. MC 132863 is consistent.
- **Founding date:** company record says 09/17/2018; About copy says "We
  started in 2024". Home keeps "Operating since 2018"; the About paragraph
  now omits the year until PKT confirms.
- **Quick Apply "Four questions":** the CSV meta/intro says four questions;
  the form has six fields (first name, last name, phone, state, years of
  experience, applying as). The CSV wording is kept — trim the form or update
  the copy.
- **Privacy vs. driver pre-qualification form:** the CSV says no background
  data is collected on site. The multi-step driver qualification modal (nav
  "Drive With PKT" button) asks self-reported yes/no questions about medical
  card, drug tests, DUI/violations, accidents and felony history. The privacy
  draft describes this accurately (no SSN, DOB, licence number or background-
  check authorisation). Decide whether to keep those questions or route the
  button to Quick Apply only.

### Phones, emails, hours

- **Phones and emails:** resolved — +1 (224) 666-0136 and
  safety@pktgroup.net on every route (see the client decisions above).
- **Quote and operations phones / hours** ([PHONE], [HOURS]): unresolved.
  The only hours on the site are recruiting's Mon–Sat 8 AM–5 PM CDT.
- **Quick Apply callback window** ([X HOURS] in "We'll call you within
  [X HOURS]"): rendered as "during business hours".

### Specs and data

- **Insurance coverage and limits:** not stated; the site offers a
  certificate of insurance on request.
- **Equipment spec placeholders** still open in the structured CSV fields:
  dry van ([YEAR RANGE], [DOOR TYPE], [SUSPENSION]); reefer ([UNIT MAKE],
  [RANGE], [MONITORING METHOD], [INTERVALS]); flatbed ([HEIGHT],
  [MAX PAYLOAD]). These render as "available on request".
- **Leadership:** the CSV build note says skip the section rather than use
  placeholders. Only one name was supplied (Jahongir Temirov); the section
  ships when names, titles, photos and contact details are available.
- **Driver job openings:** add real postings (with `validThrough`) to
  `jobs-data.ts`.

## Contact page (/contact) — build requirement still open

- CSV: each route posts to a different address, and recruiting/operations
  use distinct call-tracking numbers. Today all four routes post to one
  `/api/contact` endpoint with a `route` tag that rides into the Apps Script
  row and the Telegram alert. Split into per-route endpoints/addresses and
  add call-tracking numbers once the client supplies them.
- The Telegram alert spells the route out (quotes → "🚚 New freight & quotes"
  · Lane; operations → "📦 Existing customers & operations" · Details;
  recruiting → "🚛 Driver recruiting" · Details; vendors → "🤝 Vendors &
  general" · Topic) with the id in parentheses.
- All four routes share one Apps Script sheet tab. To do on the script side:
  confirm which tab `form: "contact"` writes to, split on `route` into
  `Quotes`, `Operations`, `Recruiting`, `Vendors`, and give each tab headers
  for the fields that route sends (name/email on all; phone on all but
  vendors; `hours` on operations/recruiting; `message` on quotes and vendors).

## Phase 4 (later)

Remaining sitemap pages marked Phase 4 in the CSV are not built yet.
