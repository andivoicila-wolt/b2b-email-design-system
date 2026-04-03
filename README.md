# Wolt B2B Merchant Email Design System

A modular, responsive email template system built with **MJML** for use in **Customer.io**.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Build all templates (one-time)
npm run build

# 3. Start the live development server (auto-rebuild + browser refresh)
npm run dev
```

## Project Structure

```
email-system/
├── build.js                    # Custom build script (MJML → HTML)
├── package.json
├── src/
│   ├── components/             # Reusable MJML modules
│   │   ├── header.mjml         # Logo + nav label
│   │   ├── hero-banner.mjml    # Full-width hero with CTA
│   │   ├── content-block.mjml  # Text block with eyebrow, bullets, CTA
│   │   ├── two-column-grid.mjml # Image + text side-by-side
│   │   ├── feature-highlights.mjml # 3-column icon grid
│   │   ├── cta-module.mjml     # Standalone dual-CTA banner
│   │   ├── feature-grid.mjml   # Card grid (e.g., merchant spotlights)
│   │   ├── video-embed.mjml    # Video thumbnail with play overlay
│   │   ├── operational-alert.mjml # Warning/info alert (2 variants)
│   │   ├── testimonial.mjml    # Quote + avatar + case study link
│   │   └── footer.mjml         # Dark footer with resources + legal
│   └── templates/              # Complete email templates
│       ├── newsletter.mjml     # Quarterly merchant newsletter
│       ├── product-launch.mjml # Product announcement
│       └── operational.mjml    # Action-required / alert email
└── dist/                       # Compiled HTML output (auto-generated)
```

## Design Tokens

| Token | Value |
|---|---|
| Max Width | 640px |
| Primary (Blueberry Blue) | `#021738` |
| Accent (Wolt Cyan) | `#00c2e8` |
| Body Text | `#4a5568` |
| Body Background | `#f0f1f4` |
| Font | Omnes Pro (fallback: Helvetica, Arial) |

## Card Composition Rules

To keep stacked sections looking like one continuous rounded card, use this structure:

1. Top section: `border-radius="12px 12px 0 0"`
2. Middle section(s): no radius
3. Bottom section: `border-radius="0 0 12px 12px"`

For single-section cards, use `border-radius="12px"`.

This is especially important for modules split across multiple `<mj-section>` blocks (for example title/content + grid, or copy + CTA rows).

## How to Use

### Creating a new email
1. Create a new `.mjml` file in `src/templates/`
2. Include the `<mj-head>` block with the Omnes font import
3. Mix and match modules using `<mj-include path="../components/MODULE.mjml" />`
4. Run `npm run build` to compile

### Deploying to Customer.io
1. Run `npm run build`
2. Open the compiled `.html` file from `dist/`
3. Copy the entire HTML content
4. Paste into Customer.io's HTML editor
5. Customer.io Liquid tags (e.g., `{{ customer.first_name }}`, `{% unsubscribe_url %}`) are preserved automatically

### Live preview during development
Run `npm run dev` — this opens a browser window that refreshes every time you save a `.mjml` file.

## Publish Online (GitHub Pages)

This repo includes an auto-deploy workflow:
`.github/workflows/deploy-pages.yml`

On each push to `main`, it will:
1. Install dependencies with `npm ci`
2. Build templates with `npm run build`
3. Publish `dist/` to GitHub Pages

### Setup steps
1. Push this folder to a GitHub repository
2. Ensure the deployment branch is `main` (or update the workflow trigger)
3. In GitHub, open `Settings -> Pages`
4. Set Source to `GitHub Actions`
5. Push a commit (or run the workflow manually from the Actions tab)

Your hosted preview URL will be:
`https://<your-user-or-org>.github.io/<repo-name>/`

## Wolt Icon System (Bynder)

Use `assets/icons/` as the source of truth for icon assets.

1. Export raw icons from Bynder into:
   `assets/icons/source/svg` and `assets/icons/source/png`
2. Prepare production variants for:
   `assets/icons/web/*` and `assets/icons/email/*`
3. Register each icon in:
   `assets/icons/icon-manifest.json`
4. Validate before commit:
   `npm run icons:validate`

Detailed conventions are documented in:
`assets/icons/README.md`

## Adobe Fonts Setup

Replace `your-project-id` in each template's `<mj-style>` block with your actual Adobe Fonts project ID:

```html
<mj-style>
  @import url("https://use.typekit.net/YOUR_PROJECT_ID.css");
</mj-style>
```

## Customer.io Liquid Tags Used

- `{{ customer.first_name }}` — Personalization
- `{% if customer.first_name %}...{% endif %}` — Conditional logic
- `{{ customer.payment_expiry | default: "the 15th" }}` — Defaults
- `{% unsubscribe_url %}` — Unsubscribe link
