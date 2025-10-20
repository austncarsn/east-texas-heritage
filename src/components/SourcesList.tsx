interface Source {
  number: number;
  citation: string;
  url?: string;
}

interface SourcesListProps {
  sources: Source[];
}

export function SourcesList({ sources }: SourcesListProps) {
  return (
    <div className="max-w-[900px]">
      <div className="space-y-3">
        {sources.map((source) => (
          <div 
            key={source.number}
            className="flex gap-4 items-start text-sm"
            style={{
              paddingBottom: '12px',
              borderBottom: '1px solid var(--divider)',
            }}
          >
            <span style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '13px',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--secondary)',
              flexShrink: 0,
              minWidth: '32px',
            }}>
              [{source.number}]
            </span>
            
            <div className="flex-1">
              {source.url ? (
                <a 
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    lineHeight: '1.6',
                    color: 'var(--foreground-muted)',
                    textDecoration: 'none',
                  }}
                >
                  {source.citation}
                </a>
              ) : (
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  lineHeight: '1.6',
                  color: 'var(--foreground-muted)',
                }}>
                  {source.citation}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4" style={{
        borderTop: '2px solid var(--divider)',
      }}>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '13px',
          lineHeight: '1.5',
          color: 'var(--foreground-subtle)',
          fontStyle: 'italic',
        }}>
          All sources accessed October 18, 2025, unless otherwise noted. Digital archives and online resources consulted through the Portal to Texas History, Texas State Historical Association, and local historical societies.
        </p>
      </div>
    </div>
  );
}
