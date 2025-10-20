# East Texas Heritage Archive

A comprehensive digital heritage archive system showcasing the rich history and culture of rural East Texas communities.

## Design System

### Color Tokens
- **Background**: #F9F6EF (warm paper)
- **Primary**: #1E5128 (forest green)
- **Secondary**: #A1723D (bronze/leather)
- **Heritage Brown**: #3D2817 (footer)

### Typography
- **Headings**: Satoshi (Black, Bold)
- **Body**: Inter (Regular, Semibold)
- **UI/Labels**: Work Sans (Semibold)

### Layout
- 12-column responsive grid
- 72px margins, 24px gutters
- 64px section spacing
- Max content width: 1400px

## Structure

### Pages
- **Homepage** (`/App.tsx`): Main landing page with hero, timeline, communities, documents, and map sections
- **Gilmer Community Page** (`/components/GilmerPage.tsx`): Detailed historical profile of Gilmer, Texas
- **Talco Community Page** (`/components/TalcoPage.tsx`): Detailed historical profile of Talco, Texas

### Components

#### Layout Components
- `Header.tsx`: Sticky navigation header
- `Hero.tsx`: Hero section with background image and CTAs
- `Footer.tsx`: Site footer with links and information
- `ContentSection.tsx`: Reusable section wrapper

#### Heritage Components
- `TimelineNode.tsx`: Timeline marker node
- `TimelineCard.tsx`: Period-based timeline card with era colors
- `HistoricalTimeline.tsx`: Compact timeline for community pages
- `DocumentCard.tsx`: Archival document display card
- `CommunityCard.tsx`: Community preview card
- `CommunityHero.tsx`: Community page hero
- `NotablePerson.tsx`: Notable person profile card
- `ArchitectureTable.tsx`: Responsive table for landmarks

#### UI Components
- `HeritageButton.tsx`: Primary, Secondary, and Ghost button variants

## Features

### Homepage
- Cinematic hero with warm archival aesthetic
- Journey Through Time: Interactive timeline with period-coded cards
- Featured Communities: Browse community profiles
- Featured Documents: Historical archive gallery with hover effects
- Interactive Map CTA: Call-to-action for regional exploration

### Community Pages (Gilmer & Talco)
- Comprehensive historical overview
- Period-by-period historical narrative
- Notable people and events
- Architecture and landmarks table
- Economic and cultural history
- Detailed chronological timeline
- Interesting facts section (Talco)
- Summary section

## Navigation

- Click "Explore Communities" in hero to scroll to communities section
- Click "View Historical Map" to scroll to map section
- Click community cards to view detailed profiles
- Use "Back to Archive" button to return from community pages

## Period Color Swatches

- **Indigenous**: #8B6F47
- **Settlement**: #A1723D
- **Civil War**: #5C4033
- **Reconstruction**: #7A5C3D
- **Modern**: #8C6236

## Design Principles

- Clean, editorial layout
- Respectful, timeless tone
- Balanced whitespace
- Responsive across devices
- Handcrafted typography
- Archival storytelling aesthetic
