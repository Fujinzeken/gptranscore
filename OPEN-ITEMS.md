# PKT site — open items awaiting client confirmation

Facts below are used in the built pages; everything else pending is rendered as
neutral fallback copy. Nothing is invented.

## Conflicts in the source docs
- **Founding date:** home/sitemap say "operating since 2018"; About copy says
  "We started in 2024". **Currently using 2018** (matches the company record).
- **USDOT number:** appears as both **3188421** and **318421** in the docs.
  **Currently using 3188421** (footer legal strip). Confirm which is correct.
  MC# 132863 is consistent across all doc rows.

## Unconfirmed data rendered as fallback
- Equipment specs on all service pages ([YEAR RANGE], [DOOR TYPE], [SUSPENSION],
  step-deck dimensions) → "specs available on request" copy.
- **Operations phone:** (224) 666-0136 is confirmed as a PKT number but its
  department route is unspecified in the docs, so the footer omits the
  Operations line. If it is the ops line — or a separate general number —
  add it to the footer Contact block.
- Recruiting phone: five contacts listed (Jessica, Otabek, Jasmina, Miss
  Medina, Thomas) — which one is the public recruiting line?
- [HOURS] for ops/recruiting (quick-apply response window uses
  "Mon–Sat 8:00–17:00 CDT" from the doc).
- Insurance coverage/limits (safety page, Phase 2).
- **Reefer equipment specifics taken from the notes column (not the structured
  fields):** 2025 brand-new Great Dane reefers; Carrier and Thermo King
  refrigeration units; continuous and start-stop modes; 24/7 road service
  support. The structured row still carries placeholders ([UNIT MAKE],
  [YEAR RANGE], [RANGE], [CONTINUOUS AND CYCLE], [MONITORING METHOD],
  [INTERVALS]) — confirm the notes are current before launch. Monitoring is
  rendered as "continuous" (from the reefer meta) and driver checks as
  "on a regular schedule" ([INTERVALS] unresolved).
- **Flatbed equipment specifics taken from the notes column (not the
  structured fields):** 48' and 53' 2025 flatbeds; aluminum build; headracks
  for storing securement equipment. Structured placeholders ([LENGTH],
  [MATERIAL], [YEAR RANGE], deck height [HEIGHT], [MAX PAYLOAD]) remain
  unresolved — deck height and max payload render as "available on request".
  Securement kit items ([STRAPS, CHAINS, BINDERS, EDGE PROTECTION],
  [TARP TYPES], [COIL RACKS]) are listed generically ("straps, chains,
  binders and edge protection"; tarps as "available" per the meta row).
  Oversize/escort note ("escorts, paid expensive rates") from the notes is
  marketing-voice and not rendered.
- Leadership names/photos — page will ship without the leadership section
  (per the doc's own build note). One name given: Jahongir Temirov.

## Pages not offered today (client note in docs)
Step deck, dedicated, drop trailer — "we currently don't do" notes on all
three. Sitemap still lists them; built anyway (P1/P2 increment) with the
"specs available on request" fallback. Client decision on the contradiction
still pending.

## Driver jobs board (/careers/jobs)
- CSV "Build requirement": each opening needs JobPosting structured data
  with an enforced expiry date (Google for Jobs eligibility). The board page
  ships with the posting specimen + filters + honest empty state; before any
  real listing goes live, add the JSON-LD JobPosting schema and an expiry
  sweep, or Google delists expired postings and the domain's standing there
  takes the hit.
