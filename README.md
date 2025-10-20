# East Texas Heritage Archive

Modern, interactive archive of East Texas communities, built with a clean civic UI and a pragmatic React stack.

## Features

- Interactive map for towns and sites
- Timeline from before European contact to present, with decade markers and key events
- Community profiles with architecture, people, sources, and media
- Accessible, responsive UI, keyboard friendly, high contrast
- React, TypeScript, Vite, Tailwind

## Quick start

Prereqs: Node 18+, npm 9+

    npm install
    npm run dev
    # build and preview
    npm run build
    npm run preview

## Configuration

Create a .env in the project root as needed.

    # if using Mapbox
    VITE_MAPBOX_TOKEN=your_token_here
    # if using a custom data directory
    VITE_DATA_DIR=/data

## Project structure

    src/
      components/       # UI components
      pages/            # route views
      data/             # JSON or TS data loaders
      styles/           # Tailwind and tokens
      lib/              # utilities
    public/             # static assets

## Content model, example

    {
      "id": "talco",
      "name": "Talco",
      "county": "Titus",
      "coordinates": [-95.1047, 33.3648],
      "founded": 1910,
      "incorporated": 1949,
      "population": { "1930": 312, "1950": 1045, "2020": 494 },
      "highlights": [
        "Rail, timber, and oil shaped the mid century boom",
        "School consolidation and highway shifts changed patterns after 1970"
      ],
      "sites": [
        {
          "name": "Talco Cotton Oil Mill",
          "year_built": 1936,
          "style": "Industrial",
          "use_then": "Processing",
          "use_now": "Unknown",
          "status": "Extant"
        }
      ],
      "sources": [
        { "title": "Handbook of Texas Online", "url": "https://www.tshaonline.org/" }
      ]
    }

Store one file per town in src/data/towns or adapt to your data loader.

## Design tokens

Tailwind plus CSS custom properties. Adjust in src/styles/tokens.css.

    :root {
      --brand: #7C8F82;
      --accent: #8A919A;
      --bg-paper: #E7E3D9;
      --bg-surface: #FFFFFF;
      --bg-dark: #4A4E57;
      --text-primary: #111418;
      --text-muted: #6B6760;
      --border: #A8A39B;
    }

## Scripts

    npm run dev        # local server
    npm run build      # production build
    npm run preview    # preview dist
    # optional if configured
    npm run lint
    npm run format

## Accessibility and performance

- Semantics first, ARIA only when needed
- Focus states visible at all times
- Images with alt text, captions for historic media
- Lazy load heavy assets, prefetch route data

## Contributing

Issues and pull requests are welcome. Keep PRs small, one concern per change.

## License

MIT unless noted otherwise in data attributions.

<!-- Next 2–5 min step: paste this into README.md, commit with:
git add README.md && git commit -m "docs(readme): tighten copy and add config" && git push
Then add .env.example with VITE_MAPBOX_TOKEN and VITE_DATA_DIR. -->
