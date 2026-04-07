# Wolt B2B Email Client QA Checklist

Use this checklist before every send. It is designed for Litmus or Email on Acid.

## 1) Release Context

- Release date:
- Campaign / Template:
- Branch / Commit SHA:
- QA owner:
- Approver:

## 2) Tools

- Primary testing tool: Litmus / Email on Acid
- Source preview URL:
- Final HTML source path:

## 3) Client Matrix (Required)

Mark each row as `PASS`, `FAIL`, or `N/A`.

| Client | Device | Light | Dark | Mobile layout | Buttons | Typography | Notes |
|---|---|---|---|---|---|---|---|
| Apple Mail (latest) | iPhone iOS |  |  |  |  |  |  |
| Apple Mail (latest) | iPad iOS |  |  |  |  |  |  |
| Apple Mail (latest) | macOS Desktop |  |  |  |  |  |  |
| Gmail App | iPhone iOS |  |  |  |  |  |  |
| Gmail App | Android |  |  |  |  |  |  |
| Gmail Web | Chrome Desktop |  |  |  |  |  |  |
| Gmail Web | Safari Desktop |  |  |  |  |  |  |
| Outlook (Classic) | Windows Desktop |  |  |  |  |  |  |
| Outlook (New) | Windows Desktop |  |  |  |  |  |  |
| Outlook App | iPhone iOS |  |  |  |  |  |  |
| Outlook App | Android |  |  |  |  |  |  |
| Yahoo Mail | iPhone iOS |  |  |  |  |  |  |
| Yahoo Mail | Web Desktop |  |  |  |  |  |  |

## 4) Visual Rules (Required)

Verify all items for the final selected template.

### Layout

- Outer page background is `#f8f8f8` (Milk White).
- Content cards are white (`#ffffff`) unless intentionally soft-surface.
- Card radius and separators are consistent.
- No broken stacking or clipped corners on mobile.

### Typography

- Omnes loads where supported.
- Stylistic sets are applied where client supports OpenType (`ss01`, `ss05`, `ss07`).
- Fallback font rendering remains readable and consistent.
- Heading and body hierarchy is preserved in both light and dark modes.

### Buttons

- Primary button color: `#00c2e8` with dark text.
- Radius and weight consistent with design system.
- Secondary/ghost buttons keep visible border and readable text.
- Buttons are full-width/tap-safe on narrow mobile layouts.

### Images

- All image URLs load with no broken placeholders.
- Hero and module images crop correctly on mobile.
- No old reference screenshots inside final redesigned modules.

### Dark/Light Behavior

- Preview switcher changes newsletter content styling correctly.
- Text remains readable (no white-on-white / dark-on-dark).
- CTA contrast remains compliant in both modes.

## 5) Functional Checks

- All CTA links open correct destination and include tracking params.
- Unsubscribe link works.
- Preference / legal links work.
- No merge-tag leakage (e.g., `{{ customer.first_name }}` rendered correctly in tests).

## 6) Accessibility Spot Checks

- Body copy minimum readable size on mobile.
- Sufficient contrast for primary text and CTA labels.
- Images have meaningful alt text.
- Reading order is logical in mobile screen reader flow.

## 7) Failure Log

| ID | Client | Severity (Blocker/Major/Minor) | Issue | Fix | Re-test |
|---|---|---|---|---|---|
| 1 |  |  |  |  |  |
| 2 |  |  |  |  |  |
| 3 |  |  |  |  |  |

## 8) Sign-off

- QA complete: Yes / No
- Blocking issues remaining: Yes / No
- Approved to send: Yes / No
- Final approver:
- Date/time:

