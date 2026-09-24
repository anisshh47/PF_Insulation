# PF Insulation — Phase 1 website audit

Captured: **19 September 2026**. Source: **https://pfinsulation.com.au/**.

Phase 1 is a content and asset baseline for the future UI redesign. No production changes were made.

## Reference pack

- [Audit and redesign handover](audit.md): business details, services, forms, content issues and priorities.
- [Visual asset gallery](asset-gallery.html): browse all downloaded images locally.
- [Logo files](logos/): clearly named copies of the header logo, social image and blog branding.
- [Page inventory](content-inventory.md): URLs, titles, headings and outgoing links.
- [Asset inventory](asset-inventory.md) and [asset manifest](assets-manifest.json): source URLs, local files, dimensions when supplied, sizes and SHA-256 hashes.
- [Form definitions](forms.json): public form field configuration and success messages.
- [Page metadata](pages.json): image placement, links, metadata, headings and stylesheet references.
- [Raw source](source/): HTML and extracted text, sitemap, robots.txt and stylesheets.
- [Stylesheet manifest](styles-manifest.json) and [capture errors](capture-errors.json).

## Coverage

Captured **16 public URLs**: seven main/utility URLs, the `/home` alias, and eight blog articles. Downloaded **35 image URLs**, representing **26 unique byte-identical assets**, totalling **15,631,915 bytes**. Duplicate CDN versions are deliberately retained and identified by checksum. All 35 returned HTTP 200. The crawl followed the public sitemap and same-site links; account, search, cart and query-filter URLs were excluded.

The source files preserve original wording, including outdated claims, typos and placeholder text. They are evidence, not approved replacement copy. `/` and `/home` share the `source/home.*` archive files; the per-URL records remain separate in `pages.json`.

The archive is not a working offline copy of Squarespace: it does not reproduce hosted form delivery or every platform JavaScript dependency. The homepage was visually inspected in the browser, but subsequent browser timeouts prevented a complete visual/responsive audit and saved screenshot set. Four observed hosted font downloads failed through the browser; font references remain in the HTML/CSS. Forms were inspected without submission; inbox routing and successful delivery were not tested.

The scripts `capture.py` and `organize.py` document the collection process. `python-deps/` contains the local HTML parser used by them.
