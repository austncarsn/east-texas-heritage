East Texas Heritage — Color Tokens

This folder contains the JSON export for design tools.

Usage:
- Import `color-tokens.json` into Figma or Storybook's token system.
- Use semantic tokens (e.g., `color-background-base`) for components.
- Keep palette minimal; create collection-specific tokens when needed but map them to semantic roles.

Naming convention:
- `color-<role>` for main roles.
- `dark-color-<role>` for dark mode variants.

Accessibility:
- Use `--color-text-primary` on `--color-background-base` for body and headings.
- Test for contrast ratios when overriding tokens.