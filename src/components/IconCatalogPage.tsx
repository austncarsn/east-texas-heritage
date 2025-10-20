import { useState } from 'react';
import { Icon } from './Icon';

interface IconCatalogPageProps {
  onBack?: () => void;
}

export function IconCatalogPage({ onBack }: IconCatalogPageProps) {
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const copyToClipboard = (iconName: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedIcon(iconName);
    setTimeout(() => setCopiedIcon(null), 2000);
  };

  const iconCategories = [
    {
      category: 'Navigation & Interface',
      icons: [
        { name: 'Home', label: 'Home page' },
        { name: 'Menu', label: 'Menu' },
        { name: 'X', label: 'Close' },
        { name: 'Search', label: 'Search' },
        { name: 'ArrowLeft', label: 'Go back' },
        { name: 'ArrowRight', label: 'Go forward' },
        { name: 'ArrowUp', label: 'Move up' },
        { name: 'ArrowDown', label: 'Move down' },
        { name: 'ChevronLeft', label: 'Previous' },
        { name: 'ChevronRight', label: 'Next' },
        { name: 'ChevronUp', label: 'Collapse' },
        { name: 'ChevronDown', label: 'Expand' },
        { name: 'ChevronsLeft', label: 'First page' },
        { name: 'ChevronsRight', label: 'Last page' },
        { name: 'ExternalLink', label: 'Open in new window' },
        { name: 'Link', label: 'Link' },
        { name: 'Settings', label: 'Settings' },
        { name: 'MoreVertical', label: 'More options' },
        { name: 'MoreHorizontal', label: 'More' },
      ],
    },
    {
      category: 'Map & Location',
      icons: [
        { name: 'Map', label: 'Map view' },
        { name: 'MapPin', label: 'Location marker' },
        { name: 'MapPinned', label: 'Pinned location' },
        { name: 'Navigation', label: 'Navigation' },
        { name: 'Navigation2', label: 'Compass navigation' },
        { name: 'Compass', label: 'Compass' },
        { name: 'Route', label: 'Route' },
        { name: 'Signpost', label: 'Signpost' },
        { name: 'Milestone', label: 'Milestone' },
        { name: 'Globe', label: 'Global' },
        { name: 'Locate', label: 'Find my location' },
        { name: 'LocateFixed', label: 'Location fixed' },
      ],
    },
    {
      category: 'Time & History',
      icons: [
        { name: 'Calendar', label: 'Calendar' },
        { name: 'CalendarDays', label: 'Calendar dates' },
        { name: 'Clock', label: 'Time' },
        { name: 'History', label: 'History' },
        { name: 'Timer', label: 'Timer' },
        { name: 'Hourglass', label: 'Hourglass' },
        { name: 'CalendarClock', label: 'Schedule' },
      ],
    },
    {
      category: 'Documents & Archives',
      icons: [
        { name: 'File', label: 'File' },
        { name: 'FileText', label: 'Text document' },
        { name: 'Files', label: 'Multiple files' },
        { name: 'FolderOpen', label: 'Open folder' },
        { name: 'Folder', label: 'Folder' },
        { name: 'Archive', label: 'Archive' },
        { name: 'BookOpen', label: 'Open book' },
        { name: 'Book', label: 'Book' },
        { name: 'BookMarked', label: 'Bookmarked' },
        { name: 'Library', label: 'Library' },
        { name: 'Scroll', label: 'Scroll' },
        { name: 'Newspaper', label: 'Newspaper' },
        { name: 'FileImage', label: 'Image file' },
        { name: 'Image', label: 'Image' },
        { name: 'Images', label: 'Multiple images' },
      ],
    },
    {
      category: 'Community & Buildings',
      icons: [
        { name: 'Users', label: 'Users' },
        { name: 'User', label: 'User' },
        { name: 'UserCircle', label: 'User profile' },
        { name: 'Building', label: 'Building' },
        { name: 'Building2', label: 'Office building' },
        { name: 'Home', label: 'Home' },
        { name: 'Landmark', label: 'Landmark' },
        { name: 'Church', label: 'Church' },
        { name: 'School', label: 'School' },
        { name: 'Factory', label: 'Factory' },
        { name: 'Store', label: 'Store' },
        { name: 'Warehouse', label: 'Warehouse' },
        { name: 'Castle', label: 'Castle' },
      ],
    },
    {
      category: 'Nature & Geography',
      icons: [
        { name: 'TreePine', label: 'Pine tree' },
        { name: 'Trees', label: 'Forest' },
        { name: 'Mountain', label: 'Mountain' },
        { name: 'Mountains', label: 'Mountain range' },
        { name: 'Waves', label: 'Water waves' },
        { name: 'Sun', label: 'Sun' },
        { name: 'Moon', label: 'Moon' },
        { name: 'CloudRain', label: 'Rain' },
        { name: 'Sprout', label: 'Plant sprout' },
        { name: 'Leaf', label: 'Leaf' },
      ],
    },
    {
      category: 'Actions & Status',
      icons: [
        { name: 'Download', label: 'Download' },
        { name: 'Upload', label: 'Upload' },
        { name: 'Share', label: 'Share' },
        { name: 'Share2', label: 'Share link' },
        { name: 'Copy', label: 'Copy' },
        { name: 'Check', label: 'Confirmed' },
        { name: 'CheckCircle', label: 'Success' },
        { name: 'CheckCircle2', label: 'Verified' },
        { name: 'X', label: 'Error' },
        { name: 'XCircle', label: 'Failed' },
        { name: 'AlertCircle', label: 'Alert' },
        { name: 'AlertTriangle', label: 'Warning' },
        { name: 'Info', label: 'Information' },
        { name: 'HelpCircle', label: 'Help' },
        { name: 'Plus', label: 'Add' },
        { name: 'PlusCircle', label: 'Add new' },
        { name: 'Minus', label: 'Remove' },
        { name: 'MinusCircle', label: 'Delete' },
        { name: 'Trash2', label: 'Delete' },
        { name: 'Edit', label: 'Edit' },
        { name: 'Pencil', label: 'Edit' },
        { name: 'Save', label: 'Save' },
        { name: 'Bookmark', label: 'Bookmark' },
        { name: 'BookmarkPlus', label: 'Add bookmark' },
        { name: 'Heart', label: 'Favorite' },
        { name: 'Star', label: 'Star' },
        { name: 'Eye', label: 'View' },
        { name: 'EyeOff', label: 'Hide' },
        { name: 'Filter', label: 'Filter' },
        { name: 'SortAsc', label: 'Sort ascending' },
        { name: 'SortDesc', label: 'Sort descending' },
      ],
    },
    {
      category: 'Media & Display',
      icons: [
        { name: 'Play', label: 'Play' },
        { name: 'Pause', label: 'Pause' },
        { name: 'Volume2', label: 'Volume' },
        { name: 'VolumeX', label: 'Mute' },
        { name: 'Maximize', label: 'Maximize' },
        { name: 'Minimize', label: 'Minimize' },
        { name: 'Maximize2', label: 'Fullscreen' },
        { name: 'Minimize2', label: 'Exit fullscreen' },
        { name: 'ZoomIn', label: 'Zoom in' },
        { name: 'ZoomOut', label: 'Zoom out' },
        { name: 'Camera', label: 'Camera' },
        { name: 'Video', label: 'Video' },
      ],
    },
    {
      category: 'Transportation & Infrastructure',
      icons: [
        { name: 'Train', label: 'Train' },
        { name: 'Ship', label: 'Ship' },
        { name: 'Truck', label: 'Truck' },
        { name: 'Car', label: 'Car' },
        { name: 'Bike', label: 'Bicycle' },
        { name: 'Plane', label: 'Airplane' },
        { name: 'Anchor', label: 'Anchor' },
        { name: 'Construction', label: 'Construction' },
        { name: 'Wrench', label: 'Tool' },
        { name: 'Hammer', label: 'Hammer' },
        { name: 'Pickaxe', label: 'Mining' },
      ],
    },
  ];

  // Filter icons based on search query
  const filteredCategories = searchQuery
    ? iconCategories.map(category => ({
        ...category,
        icons: category.icons.filter(
          icon =>
            icon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            icon.label.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      })).filter(category => category.icons.length > 0)
    : iconCategories;

  return (
    <div style={{ backgroundColor: 'var(--background)', minHeight: '100vh' }}>
      {/* Header */}
      <div
        style={{
          backgroundColor: 'var(--surface)',
          borderBottom: '1px solid var(--divider)',
          position: 'sticky',
          top: 0,
          zIndex: 50,
        }}
      >
        <div className="mx-auto px-[72px] max-w-[1400px]">
          <div className="py-6">
            <button
              onClick={onBack}
              className="flex items-center gap-2 mb-4 transition-colors hover:opacity-80"
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '14px',
                color: 'var(--primary)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px 0',
              }}
            >
              <Icon name="arrow-left" decorative size={16} />
              Back to Home
            </button>

            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '36px',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--foreground)',
                marginBottom: '8px',
              }}
            >
              Icon Catalog
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                color: 'var(--foreground-muted)',
                maxWidth: '700px',
              }}
            >
              Comprehensive icon library powered by Lucide React. Over 1,000+ beautiful, consistent icons with built-in accessibility.
            </p>

            {/* Search */}
            <div className="mt-6">
              <input
                type="text"
                placeholder="Search icons by name or label..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  maxWidth: '500px',
                  padding: '12px 16px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '15px',
                  backgroundColor: 'var(--background)',
                  border: '2px solid var(--document-border)',
                  color: 'var(--foreground)',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Icon Grid */}
      <div className="mx-auto px-[72px] max-w-[1400px] py-12">
        {filteredCategories.map((category) => (
          <div key={category.category} className="mb-16">
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '24px',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--foreground)',
                marginBottom: '16px',
                paddingBottom: '8px',
                borderBottom: '2px solid var(--divider)',
              }}
            >
              {category.category}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {category.icons.map((icon) => {
                const IconComponent = Icon as any;
                const code = `<Icon name="${icon.name}" label="${icon.label}" size={24} />`;
                const isCopied = copiedIcon === icon.name;

                return (
                  <button
                    key={icon.name}
                    onClick={() => copyToClipboard(icon.name, code)}
                    className="relative group transition-all hover:scale-105"
                    style={{
                      backgroundColor: 'var(--surface)',
                      border: '2px solid var(--document-border)',
                      padding: '20px',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '12px',
                    }}
                  >
                    <IconComponent
                      name={icon.name}
                      decorative
                      size={28}
                      style={{ color: 'var(--primary)' }}
                    />
                    <div className="text-center">
                      <div
                        style={{
                          fontFamily: 'var(--font-ui)',
                          fontSize: '12px',
                          fontWeight: 'var(--font-weight-semibold)',
                          color: 'var(--foreground)',
                          marginBottom: '4px',
                        }}
                      >
                        {icon.name}
                      </div>
                      <div
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '10px',
                          color: 'var(--foreground-muted)',
                        }}
                      >
                        {icon.label}
                      </div>
                    </div>

                    {/* Copy indicator */}
                    <div
                      className="absolute top-2 right-2 transition-opacity"
                      style={{
                        opacity: isCopied ? 1 : 0,
                      }}
                    >
                      <Icon name="check" decorative size={16} style={{ color: 'var(--secondary)' }} />
                    </div>

                    {/* Hover overlay with copy icon */}
                    <div
                      className="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 group-hover:opacity-100"
                      style={{
                        backgroundColor: 'rgba(139, 69, 19, 0.9)',
                      }}
                    >
                      <div className="text-center">
                        <Icon name="copy" decorative size={20} style={{ color: '#FFFFFF', margin: '0 auto 8px' }} />
                        <div
                          style={{
                            fontFamily: 'var(--font-ui)',
                            fontSize: '11px',
                            fontWeight: 'var(--font-weight-semibold)',
                            color: '#FFFFFF',
                          }}
                        >
                          Click to Copy
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        {/* Usage Guide */}
        <div
          className="mt-16 p-8"
          style={{
            backgroundColor: 'var(--surface)',
            border: '2px solid var(--primary)',
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '20px',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--foreground)',
              marginBottom: '16px',
            }}
          >
            Usage Guide
          </h3>

          <div className="space-y-6">
            <div>
              <h4
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '14px',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--foreground)',
                  marginBottom: '8px',
                }}
              >
                Basic Usage with Accessibility
              </h4>
              <pre
                style={{
                  backgroundColor: 'var(--background)',
                  padding: '16px',
                  fontFamily: 'monospace',
                  fontSize: '13px',
                  color: 'var(--foreground)',
                  overflow: 'auto',
                  border: '1px solid var(--divider)',
                }}
              >
{`import { Icon } from './components/Icon';

// With accessibility label (recommended)
<Icon name="MapPin" label="Location marker" size={24} />

// Decorative icon (hidden from screen readers)
<Icon name="Sparkles" decorative size={16} />`}
              </pre>
            </div>

            <div>
              <h4
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '14px',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--foreground)',
                  marginBottom: '8px',
                }}
              >
                Customization Options
              </h4>
              <pre
                style={{
                  backgroundColor: 'var(--background)',
                  padding: '16px',
                  fontFamily: 'monospace',
                  fontSize: '13px',
                  color: 'var(--foreground)',
                  overflow: 'auto',
                  border: '1px solid var(--divider)',
                }}
              >
{`// Size variations
<Icon name="Calendar" label="Date" size={16} />
<Icon name="Calendar" label="Date" size={24} />
<Icon name="Calendar" label="Date" size={32} />

// Color and styling
<Icon 
  name="Heart" 
  label="Favorite"
  size={24}
  style={{ color: 'var(--secondary)' }}
  strokeWidth={2.5}
/>`}
              </pre>
            </div>

            <div>
              <h4
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '14px',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--foreground)',
                  marginBottom: '8px',
                }}
              >
                Pre-defined Icon Sets
              </h4>
              <pre
                style={{
                  backgroundColor: 'var(--background)',
                  padding: '16px',
                  fontFamily: 'monospace',
                  fontSize: '13px',
                  color: 'var(--foreground)',
                  overflow: 'auto',
                  border: '1px solid var(--divider)',
                }}
              >
{`import { NavigationIcons, MapIcons, DocumentIcons } from './components/Icon';

// Use predefined sets for consistency
<Icon name={NavigationIcons.Home} label="Home page" />
<Icon name={MapIcons.Compass} label="Navigate" />
<Icon name={DocumentIcons.Archive} label="View archives" />`}
              </pre>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div
          className="mt-8 text-center"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '14px',
            color: 'var(--foreground-muted)',
          }}
        >
          Icons provided by{' '}
          <a
            href="https://lucide.dev"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--primary)',
              textDecoration: 'underline',
            }}
          >
            Lucide React
          </a>
          {' '}• MIT Licensed • Click any icon to copy code
        </div>
      </div>
    </div>
  );
}