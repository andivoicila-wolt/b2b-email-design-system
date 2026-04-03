# Wolt Icon Repository

This folder is the single source of truth for icon assets used in the email system.

## Structure

- `source/svg/` - raw master SVG exports from Bynder
- `source/png/` - raw PNG exports from Bynder
- `web/svg/` - optimized SVGs for web/dashboard preview usage
- `web/png/` - web PNG fallbacks
- `email/png-1x/` - email-safe PNG icons at 1x size
- `email/png-2x/` - retina email-safe PNG icons at 2x size
- `icon-manifest.json` - canonical metadata and approved usage

## Naming convention

Use this naming format:

`wolt-{family}-{name}-{size}-{theme}.{ext}`

Examples:
- `wolt-core-order-24-dark.svg`
- `wolt-core-order-24-light.svg`
- `wolt-core-order-48-dark.png`

## Bynder ingest workflow

1. Export required icons from Bynder to `source/svg` and `source/png`
2. Create production variants for `web/*` and `email/*`
3. Register each icon in `icon-manifest.json`
4. Run `npm run icons:validate`
5. Use only files listed in the manifest from templates/components

## Email constraints

- Prefer PNG in email templates for client compatibility
- Keep icon dimensions explicit (`width` in MJML)
- Keep file sizes low (target under ~20KB per icon)
