# Ill Utility Audit

The following utilities encourage weak or non-semantic HTML usage and are
flagged for refactoring:

- **Removed `.link` / `.inverse-link`** (`src/cdn/helpers/typography.css`):
  replaced with neutral `.text-primary` and `.text-inverse-primary` utilities
  so color styling no longer implies anchor semantics.
- **Replaced `.button` with `.btn`** (`src/cdn/elements/buttons.css`,
  `src/cdn/helpers/reset.css`): styles now apply only to semantic
  `<button>` or `<a href>` elements via the neutral `.btn` helper.
- **`.list`** (`src/cdn/elements/lists.css`): generic list styling that allows
  non-semantic containers like `<div class="list">`. Restrict to `<ul>`/`<ol>`
  via selectors (e.g. `ul.list, ol.list`) or rename to a neutral helper like
  `.list-reset`.

Additional utilities will be added as the project is audited for semantic
conformance.

