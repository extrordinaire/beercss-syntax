# Ill Utility Audit

The following utilities encourage weak or non-semantic HTML usage and are
flagged for refactoring:

- **`.link` / `.inverse-link`** (`src/cdn/helpers/typography.css`): apply link
  styling without requiring an `<a>` element. Rename to neutral text color
  utilities (e.g. `.text-primary`, `.text-inverse-primary`) and rely on real
  anchors for navigation.
- **`.button`** (`src/cdn/elements/buttons.css`, `src/cdn/helpers/reset.css`):
  styles any element to look like a button and shadows native `button`
  semantics. Replace with a neutral helper such as `.btn` and require usage on
  actual `<button>` or `<a href>` elements.
- **`.list`** (`src/cdn/elements/lists.css`): generic list styling that allows
  non-semantic containers like `<div class="list">`. Restrict to `<ul>`/`<ol>`
  via selectors (e.g. `ul.list, ol.list`) or rename to a neutral helper like
  `.list-reset`.
- **`.divider` / `[class*=divider]`** (`src/cdn/elements/dividers.css`): enables
  `<div class="divider">` patterns. Prefer `<hr>` elements with optional
  modifier classes.

Additional utilities will be added as the project is audited for semantic
conformance.

