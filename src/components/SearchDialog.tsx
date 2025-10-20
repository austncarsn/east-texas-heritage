import { useState, useMemo } from 'react';
import { Icon } from './Icon';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';

interface SearchResult {
  id: string;
  title: string;
  type: 'community' | 'period';
  description: string;
  view: string;
}

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onNavigate: (view: string) => void;
}

export function SearchDialog({ open, onOpenChange, onNavigate }: SearchDialogProps) {
  const [query, setQuery] = useState('');

  // All searchable content
  const allResults: SearchResult[] = [
    // Communities
    {
      id: 'gilmer',
      title: 'Gilmer',
      type: 'community',
      description: 'County seat of Upshur County, established in the 1840s',
      view: 'gilmer',
    },
    {
      id: 'talco',
      title: 'Talco',
      type: 'community',
      description: 'Historic mining community in Titus County',
      view: 'talco',
    },
    {
      id: 'daingerfield',
      title: 'Daingerfield',
      type: 'community',
      description: 'Morris County seat with rich industrial heritage',
      view: 'daingerfield',
    },
    {
      id: 'paris',
      title: 'Paris',
      type: 'community',
      description: 'Major commercial center and county seat of Lamar County',
      view: 'paris',
    },
    {
      id: 'jefferson',
      title: 'Jefferson',
      type: 'community',
      description: 'Historic riverport town in Marion County',
      view: 'jefferson',
    },
    {
      id: 'mountpleasant',
      title: 'Mount Pleasant',
      type: 'community',
      description: 'Titus County seat and agricultural hub',
      view: 'mountpleasant',
    },
    {
      id: 'henderson',
      title: 'Henderson',
      type: 'community',
      description: 'Rusk County seat in the heart of the Piney Woods',
      view: 'henderson',
    },
    // Historical Periods
    {
      id: 'indigenous',
      title: 'Indigenous Peoples',
      type: 'period',
      description: 'Pre-1700s - The Caddo Confederacy and indigenous nations',
      view: 'indigenous',
    },
    {
      id: 'settlement',
      title: 'Early Settlement',
      type: 'period',
      description: '1820s-1840s - European-American settlers establish homesteads',
      view: 'settlement',
    },
    {
      id: 'civilwar',
      title: 'Civil War Era',
      type: 'period',
      description: '1861-1865 - East Texas during the Civil War',
      view: 'civilwar',
    },
    {
      id: 'reconstruction',
      title: 'Reconstruction & Growth',
      type: 'period',
      description: '1865-1900 - Rebuilding and railroad expansion',
      view: 'reconstruction',
    },
    {
      id: 'modern',
      title: 'Modern Heritage',
      type: 'period',
      description: '1900-Present - Industrial growth and cultural preservation',
      view: 'modern',
    },
  ];

  // Filter results based on query
  const filteredResults = useMemo(() => {
    if (!query.trim()) {
      return allResults;
    }

    const lowerQuery = query.toLowerCase();
    return allResults.filter(
      (result) =>
        result.title.toLowerCase().includes(lowerQuery) ||
        result.description.toLowerCase().includes(lowerQuery)
    );
  }, [query]);

  // Group results by type
  const communityResults = filteredResults.filter((r) => r.type === 'community');
  const periodResults = filteredResults.filter((r) => r.type === 'period');

  const handleResultClick = (view: string) => {
    onNavigate(view);
    onOpenChange(false);
    setQuery('');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="max-w-2xl p-0 gap-0"
        style={{
          backgroundColor: 'var(--surface)',
          border: '2px solid var(--document-border)',
          boxShadow: 'var(--shadow-lg)',
          borderRadius: '0',
        }}
      >
        {/* Accessibility - Visually Hidden */}
        <DialogTitle className="sr-only">Search East Texas Heritage Archive</DialogTitle>
        <DialogDescription className="sr-only">
          Search for communities and historical periods in the East Texas Heritage Archive
        </DialogDescription>

        {/* Search Input */}
        <div 
          className="flex items-center gap-3 p-6 border-b"
          style={{
            borderColor: 'var(--document-border)',
          }}
        >
          <Icon name="Search" decorative size={24} style={{ color: 'var(--foreground-muted)' }} />
          <input
            type="text"
            placeholder="Search communities, historical periods..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="flex-1 bg-transparent border-none outline-none"
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '18px',
              color: 'var(--foreground)',
            }}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 hover:opacity-70 transition-opacity"
              aria-label="Clear search"
            >
              <Icon name="X" decorative size={20} style={{ color: 'var(--foreground-muted)' }} />
            </button>
          )}
        </div>

        {/* Results */}
        <div 
          className="max-h-[500px] overflow-y-auto"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: 'var(--secondary) transparent',
          }}
        >
          {filteredResults.length === 0 ? (
            <div className="p-12 text-center">
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  color: 'var(--foreground-muted)',
                }}
              >
                No results found for "{query}"
              </p>
            </div>
          ) : (
            <div className="p-4">
              {/* Communities Section */}
              {communityResults.length > 0 && (
                <div className="mb-6">
                  <div
                    className="flex items-center gap-2 px-3 py-2 mb-2"
                    style={{
                      fontFamily: 'var(--font-ui)',
                      fontSize: '12px',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--foreground-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    <Icon name="MapPin" decorative size={14} />
                    Communities
                  </div>
                  <div className="space-y-1">
                    {communityResults.map((result) => (
                      <button
                        key={result.id}
                        onClick={() => handleResultClick(result.view)}
                        className="w-full text-left p-4 transition-all duration-200 hover:scale-[1.01]"
                        style={{
                          backgroundColor: 'var(--background-subtle)',
                          border: '1px solid var(--document-border)',
                          borderRadius: '0',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--surface)';
                          e.currentTarget.style.borderColor = 'var(--primary)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--background-subtle)';
                          e.currentTarget.style.borderColor = 'var(--document-border)';
                        }}
                      >
                        <div
                          style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '16px',
                            fontWeight: 'var(--font-weight-semibold)',
                            color: 'var(--foreground)',
                            marginBottom: '4px',
                          }}
                        >
                          {result.title}
                        </div>
                        <div
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '14px',
                            color: 'var(--foreground-muted)',
                          }}
                        >
                          {result.description}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Historical Periods Section */}
              {periodResults.length > 0 && (
                <div>
                  <div
                    className="flex items-center gap-2 px-3 py-2 mb-2"
                    style={{
                      fontFamily: 'var(--font-ui)',
                      fontSize: '12px',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--foreground-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    <Icon name="Clock" decorative size={14} />
                    Historical Periods
                  </div>
                  <div className="space-y-1">
                    {periodResults.map((result) => (
                      <button
                        key={result.id}
                        onClick={() => handleResultClick(result.view)}
                        className="w-full text-left p-4 transition-all duration-200 hover:scale-[1.01]"
                        style={{
                          backgroundColor: 'var(--background-subtle)',
                          border: '1px solid var(--document-border)',
                          borderRadius: '0',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--surface)';
                          e.currentTarget.style.borderColor = 'var(--secondary)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--background-subtle)';
                          e.currentTarget.style.borderColor = 'var(--document-border)';
                        }}
                      >
                        <div
                          style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '16px',
                            fontWeight: 'var(--font-weight-semibold)',
                            color: 'var(--foreground)',
                            marginBottom: '4px',
                          }}
                        >
                          {result.title}
                        </div>
                        <div
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '14px',
                            color: 'var(--foreground-muted)',
                          }}
                        >
                          {result.description}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Hint */}
        <div
          className="p-4 border-t text-center"
          style={{
            backgroundColor: 'var(--background-subtle)',
            borderColor: 'var(--document-border)',
            fontFamily: 'var(--font-ui)',
            fontSize: '12px',
            color: 'var(--foreground-muted)',
          }}
        >
          Press <kbd className="px-2 py-1 mx-1" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--document-border)' }}>ESC</kbd> to close
        </div>
      </DialogContent>
    </Dialog>
  );
}