# Ill Utility Audit

The following utilities encourage weak or non-semantic HTML usage and are
flagged for refactoring:

- **`.link`** (`src/cdn/helpers/typography.css`): applies link styling without
  requiring an `<a>` element. Consider a neutral name such as
  `.text-primary` and rely on real anchors for navigation.
- **`.divider` / `[class*=divider]`** (`src/cdn/elements/dividers.css`): enables
  `<div class="divider">` patterns. Prefer `<hr>` elements with optional
  modifier classes.

Additional utilities will be added as the project is audited for semantic
conformance.

