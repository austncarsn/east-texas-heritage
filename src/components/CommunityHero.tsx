import { ArrowLeft } from 'lucide-react';

interface CommunityHeroProps {
  communityName: string;
  county: string;
  established: string;
  onBack?: () => void;
}

export function CommunityHero({ communityName, county, established, onBack }: CommunityHeroProps) {
  return (
    <section style={{
      backgroundColor: 'var(--background-subtle)',
      paddingTop: '48px',
      paddingBottom: '48px',
      borderBottom: '1px solid var(--divider)',
    }}>
      <div className="mx-auto px-[72px] max-w-[1400px]">
        {onBack && (
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 mb-8 transition-opacity hover:opacity-70"
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '16px',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--primary)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
            }}
          >
            <ArrowLeft size={20} />
            Back to Archive
          </button>
        )}
        
        <div className="flex items-end justify-between gap-8 flex-wrap">
          <div>
            <div className="mb-3">
              <span 
                className="inline-block px-4 py-2"
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '14px',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--secondary)',
                  backgroundColor: 'var(--surface)',
                  borderRadius: 'var(--radius-sm)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  border: '1px solid var(--document-border)',
                }}
              >
                Community Profile
              </span>
            </div>
            
            <h1 className="mb-3" style={{
              fontFamily: 'Satoshi, system-ui, sans-serif',
              fontSize: 'clamp(38px, 5vw, 64px)',
              fontWeight: 'normal',
              lineHeight: 'var(--line-height-snug)',
              color: 'var(--foreground)',
              letterSpacing: '0.01em',
            }}>
              {communityName}
            </h1>
            
            <div className="flex items-center gap-6">
              <div>
                <span style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '14px',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--foreground-subtle)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}>
                  County
                </span>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '18px',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--foreground)',
                  marginTop: '4px',
                }}>
                  {county}
                </p>
              </div>
              
              <div style={{
                width: '1px',
                height: '40px',
                backgroundColor: 'var(--divider)',
              }} />
              
              <div>
                <span style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '14px',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--foreground-subtle)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}>
                  Established
                </span>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '18px',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--foreground)',
                  marginTop: '4px',
                }}>
                  {established}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}