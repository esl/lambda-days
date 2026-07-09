# Migration / provenance

This repository is a **static archive** of `lambdadays.org`, captured 2026-07-08.

## Source

`lambdadays.org` served each edition at `https://www.lambdadays.org/lambdadays<year>`
from a CMS backend. Pages were fully server-rendered (real content in the HTML),
so the archive is a faithful static mirror — not a rebuild.

## What was captured

- **12 editions, 2014–2025**, each at `/lambdadays<year>/index.html`.
- **490 speaker & talk detail pages** at `/lambdadays<year>/<slug>/` — the bios and
  talk descriptions linked from each edition (crawled breadth-first to closure).
  502 HTML pages in total.
- **2 original microsites** (`/static/lambda2014.htm`, `/static/lambda2015.htm`)
  from the earlier URL scheme, preserved verbatim (images inlined as data URIs).
- **All reachable `/static/**` assets** (CSS, JS, images) and **S3-hosted images**
  (`lambdadays-prod` bucket), downloaded and localized under `/static/` and
  `/static/s3/` so the archive survives the source site and its S3 bucket.
- **Inline-style backgrounds** — speaker photos, logos and section/venue
  backgrounds set via `style="background-image:url(...)"` and `<style>` blocks
  (not just `<img>` tags), all downloaded and localized.
- **Per-edition section theming** — on the live site `/static/js/theme.js` loads an
  edition-specific `theme-<edition>.js` that applies most section styling at runtime
  via jQuery (the pink "Become a sponsor" background, the blue venue block, section
  colours, speaker-name colours). Relying on that JS is fragile for an archive, so
  those rules are **baked into the static HTML** as inline styles + a `<style>`
  block, exactly as the JS would set them — the sections render correctly with no
  JavaScript. The theme files and the images they reference are also captured.
  (Editions 2014/2023/2024/2025 use `theme-2023`.)
- **Talk slide decks** — presentation PDFs/PPTX linked from speaker pages,
  including those hosted on S3 (`/presentations/`, `/pdf/`).
- **Linked documents** (CfP forms, reports, "regulamin" rules) under
  `/static/upload/media/*.pdf`.
- Slide-deck PDFs are **recompressed** (Ghostscript /ebook, 150 dpi) for size,
  only where the result is valid and smaller.

## What was changed

- **Asset URLs localized** — remote `/static` and S3 image URLs rewritten to
  local paths; CSS `url(...)` references followed and downloaded.
- **Cross-edition navigation made relative** — links between editions rewritten
  from absolute `www.lambdadays.org/lambdadays<year>` to `/lambdadays<year>/`, so
  the archive is browsable independent of the domain.
- **Speaker slugs with diacritics recovered** — some source landing pages link
  speaker pages with diacritics *dropped* (`jerzy-mller`, 404); the real page uses
  transliteration (`jerzy-muller`). Recovered the correct slug from each speaker's
  display name and rewrote the links (7 fixed on the 2014 edition).
- **Tracking / popup scripts stripped** — Google Tag Manager / analytics and
  GetResponse popup scripts removed.
- **CMS edit-mode link artifacts** (`/admin_page_elements/edit_block/...`)
  cleaned back to the real destination URL.
- Genuine external links (YouTube, sponsors, social, Erlang Solutions / Code Sync)
  left absolute and unchanged.

## Known gaps

Everything the source still serves is captured. Verified across all 514 pages
(20k+ references): only the following are missing, and each is **already dead at
the source** — nothing recoverable:

- **2 broken links**: `jan-machek` / `jan-macháček` (2014 speaker — the detail
  page 404s at source even at the correct slug; his photo and schedule entry are
  present, and his bio is in the `/static/lambda2014.htm` microsite), and one 2022
  talk slide PDF (`...juliuenigmaelm.pdf`, 404 at source).
- **1 dead speaker photo** — the 2018 Nikhil Barthwal headshot (404 at source);
  it degrades to an empty background, not a broken-image icon.

## Sponsor logos (2017 / 2018)

The 2017 and 2018 sponsor/partner logos were 404 at the source S3 bucket. They were
restored by following each sponsor's link and sourcing a current logo (from the
sponsor's own site, Wikimedia, or the brand's icon), saved under `/static/logos/`.

- **Restored (18 slots):** PTI, Grand Parade (uses the **William Hill** logo — Grand
  Parade is part of William Hill), Codegram, ironSource, Microsoft, Sphere Research
  (now Sphere Engine), IT-Leaders, Geek Girls Carrots, uSwitch, Zimpler, Subvisual,
  IHS Markit, SlideMight, ElixirFountain, ConfEngine, SPOJ, WITI. Sourced from each
  sponsor's site, Wikimedia (Microsoft, IHS Markit, ironSource, William Hill), or the
  Wayback Machine for defunct ones (Geek Girls Carrots, ElixirFountain). Codegram is a
  low-resolution icon — the only mark still available.
- **Skipped, tile removed:** `fby.by` (2017 & 2018 — now redirects to a
  Russian-language loans site), and Kraków JS (domain parked/for sale, no logo
  recoverable anywhere).

The `cookie-consent` popup that the live site loads was also removed from the archive.

## Tooling

Capture/build tooling lives in the hub repo under
`migration-data/lambda_days/` (`build_lambda_days.py`, idempotent/resumable:
`crawl` then `build`). Re-running regenerates this site from the raw page mirror.
