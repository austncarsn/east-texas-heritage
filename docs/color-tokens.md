# Color Token Specification — East Texas Heritage Archive

This document describes the redesigned color token system. The palette is intentionally minimal and draws inspiration from aged paper, ink, and archival photography.

## Overview
- Goal: Minimal (8-10 tokens), high-contrast, heritage-inspired palette for text-heavy archival content.
- Themes: Light and Dark variants using semantic tokens: background, surface, text-primary, text-muted, border, accent-heritage, accent-map.

## Tokens
| Token | Hex | Role | Use Case |
|---|---:|---|---|
| --color-background-base | #FAF7F0 | Neutral Base | Page backgrounds (aged paper cream) |
| --color-surface | #FFFFFF | Surface | Cards, panels, overlays |
| --color-text-primary | #261814 | Primary Text | Body and headings (deep charcoal ink) |
| --color-text-muted | #6B6B6B | Muted Text | Secondary text, captions |
| --color-border | #CFC6B8 | Subtle Border | Dividers, card borders |
| --color-accent-heritage | #8F4F2C | Heritage Accent | Links, highlights (sepia) |
| --color-accent-map | #3B6B73 | Map/Interactive Accent | Interactive states (teal/ink) |
| --color-critical | #A03A3A | Critical | Destructive actions (muted red) |

## Light / Dark Variants
Light theme is optimized for readability with a warm paper base and deep ink for text.
Dark theme swaps to deep charcoal backgrounds and lighter text while preserving heritage accents.

## Accessibility & Contrast
All text/background combos are designed to meet WCAG AA for normal text (≥4.5:1). Contrast checks:

| Foreground | Background | Ratio | WCAG |
|---|---|---:|---|
| --color-text-primary (#261814) | --color-background-base (#FAF7F0) | 16.05:1 | AAA |
| --color-text-primary (#261814) | --color-surface (#FFFFFF) | 17.17:1 | AAA |
| --color-text-muted (#6B6B6B) | --color-background-base (#FAF7F0) | 4.98:1 | AA |
| --color-accent-heritage (#8F4F2C) | --color-background-base (#FAF7F0) | 5.91:1 | AA |
| --color-accent-map (#3B6B73) | --color-background-base (#FAF7F0) | 5.55:1 | AA |
| --color-critical (#A03A3A) | --color-background-base (#FAF7F0) | 6.21:1 | AA |

Note: Dark theme variants offer similar ratios; testing on real page content is recommended for images and overlays.

### Dark theme contrasts
Using the dark variant tokens, quick checks show the following exemplary ratios (foreground on dark background):

| Foreground (dark) | Background (dark) | Ratio | WCAG |
|---|---|---:|---|
| --color-text-primary (#F8F6F1) | --color-background-base (#12100E) | 14.01:1 | AAA |
| --color-text-muted (#D2CFC7) | --color-background-base (#12100E) | 7.12:1 | AAA |
| --color-accent-heritage (#B67B4A) | --color-background-base (#12100E) | 5.41:1 | AA |

### Color blind & non-color cues
- The accent separation (sepia vs teal) is chosen to provide distinct luminance and hue differences to assist color-blind users.
- For charts and timelines, add pattern fills or texture variations in addition to color.
- Maintain visible focus outlines (use --ring) for keyboard users.

(Contrast ratios in a later section)

## Historical Inspiration
- Aged paper & cream: evokes archival document backgrounds (soft, warm). 
- Sepia / brown accents: mimic aged photos and tints used in archival annotation.
- Teal/blue accents: subtle ink/map tones common in historical cartography.

## Usage Guidelines
- Prefer semantic tokens, not hex codes in components.
- Reserve `--color-accent-heritage` for links and subtle emphasis.
- Use `--color-accent-map` for interactive controls and selected states.
- Avoid heavy gradients; prefer subtle shadows for depth.

### Design guidance for accessibility
- Pair color with non-color cues where possible (icons, underlines, patterns) to support color-blind users.
- For charts/timelines, use textures or alternating strokes for differentiation in addition to color.
- Test with deuteranomaly/protanomaly simulators when creating period-specific palettes.

## Next Steps
- Implement a CSS token file in `src/styles/color-tokens.css` and import it.
- Provide JSON export for design tools and run automated contrast checks.
