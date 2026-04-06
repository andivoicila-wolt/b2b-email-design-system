# Palette Compliance Report

Date: 2026-04-06
Scope audited: `src/`, `static/`, `README.md`

## Status legend
- `Compliant`: in approved Wolt B2B palette (or explicitly approved extension for this system)
- `Allowed-Derived`: systematic tint/shade derived from approved palette for UI layering
- `Legacy-Compat`: kept only for backward compatibility in preview parsing logic
- `Replace`: non-compliant and should be removed

## 1) Compliant colors (active)
- `#f8f8f8` Milk White (background)
- `#021738` Blueberry Blue (primary dark surface / text)
- `#00c2e8` Wolt Blue (accent)
- `#ff834f` Pumpkin Orange (warning accent)
- `#fff6f1` Light Pumpkin Orange (warning surface)
- `#ffffff` white
- `#4a5568` body text neutral

## 2) Allowed-derived colors (active)
These are intentionally used for hierarchy/layering and are derived from Blueberry/Wolt Blue:
- `#12325d` secondary dark surface
- `#f2f6fc` light secondary surface
- `#0c2142`, `#18406f`, `#1a3a67`, `#2f4f7f` dark UI layers/borders (dashboard/playbook/preview wrappers)
- `#d4e1f1`, `#e7f1fb`, `#eaf3ff`, `#e6edf8`, `#b7c5d9`, `#8b98ab`, `#8ca0bf`, `#a0aec0` support neutrals for docs UI
- `#53d5f1`, `#67d3ae`, `#1a936f` state/interactive UI derivatives in docs UI

## 3) Legacy-compat colors (kept intentionally)
- `#010e1f`
- `#1e293b`

Usage: only in `static/preview.html` color-detection logic to correctly detect previously built templates and convert them in light-preview mode.

## 4) Replace status
Current `Replace` list: **none**.

All previously non-compliant alert colors were replaced in:
- `src/components/operational-alert.mjml`

## 5) Key alignment changes completed
- Template/body dark base aligned to `#021738` in all templates
- Secondary dark module surfaces aligned to `#12325d`
- Dashboard/playbook/preview wrappers aligned to Milk White + Blueberry/Wolt-derived scale
- Alert module updated to Pumpkin + Light Pumpkin + Blueberry/Wolt-derived info styling

