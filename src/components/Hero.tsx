import { HeritageButton } from "./HeritageButton";
import { Library, MapPin, ChevronRight, ArrowRight, Landmark, TreePine } from "lucide-react";
import blackWhiteCowhide from "../assets/black_white_cowhide.png";

interface HeroProps {
  onExploreCommunities?: () => void;
  onViewMap?: () => void;
  onCommunityClick?: (community: string) => void;
}

export function Hero({
  onExploreCommunities,
  onViewMap,
  onCommunityClick,
}: HeroProps) {
  const communities = [
    { id: 'gilmer', name: 'Gilmer', county: 'Upshur County' },
    { id: 'talco', name: 'Talco', county: 'Titus County' },
    { id: 'daingerfield', name: 'Daingerfield', county: 'Morris County' },
    { id: 'paris', name: 'Paris', county: 'Lamar County' },
    { id: 'jefferson', name: 'Jefferson', county: 'Marion County' },
    { id: 'mountpleasant', name: 'Mount Pleasant', county: 'Titus County' },
    { id: 'henderson', name: 'Henderson', county: 'Rusk County' },
  ];

  return (
    <section
      className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-[var(--section-spacing)]"
      style={{
        backgroundColor: "var(--background-subtle)",
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          alt="Black and white cowhide texture" 
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
          src={blackWhiteCowhide}
          style={{
            objectPosition: '50% 50%',
          }}
        />
        {/* Sophisticated gradient overlay for text readability */}
        <div 
          className="absolute inset-0" 
          style={{
            background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.65) 0%, rgba(20, 20, 20, 0.50) 50%, rgba(20, 20, 20, 0.60) 100%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto px-4 sm:px-6 md:px-12 lg:px-[72px] max-w-[1400px]">
        {/* Badge/Tagline */}
        <div 
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 mb-8 sm:mb-12"
          style={{
            backgroundColor: 'rgba(34, 55, 14, 0.25)',
            border: '1px solid rgba(34, 55, 14, 0.6)',
            borderRadius: '0',
            backdropFilter: 'blur(8px)',
          }}
        >
    <Library size={16} style={{ color: 'var(--accent-foreground)' }} />
          <span style={{
            fontFamily: 'var(--font-ui)',
            fontSize: '12px',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--accent-foreground)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}>
            Digital Heritage Archive
          </span>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column - Main Content (8 columns) */}
          <div className="lg:col-span-8">
            {/* Main Headline */}
            <h1
              className="mb-8"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: "clamp(32px, 6.5vw, 68px)",
                fontWeight: "normal",
                lineHeight: "1.1",
                color: "var(--primary-foreground)",
                letterSpacing: "0.01em",
                textShadow: "2px 2px 12px rgba(0, 0, 0, 0.5)",
                maxWidth: 'min(92vw, 680px)',
              }}
            >
              Preserving the Stories of Rural East Texas
            </h1>

            {/* Decorative Accent Line */}
            <div 
              className="mb-8"
              style={{
                width: '120px',
                height: '4px',
                background: 'linear-gradient(90deg, var(--primary) 0%, rgba(24, 45, 9, 0.4) 100%)',
                borderRadius: '0',
              }}
            />

            {/* Description */}
            <p
              className="mb-10"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "19px",
                lineHeight: "1.7",
                color: "rgba(245, 245, 245, 0.95)",
                textShadow: "1px 1px 4px rgba(0, 0, 0, 0.6)",
                maxWidth: 'min(92vw, 580px)',
              }}
            >
              Discover the rich tapestry of communities, families, and heritage that shaped the landscape and culture of East Texas through centuries of resilience and tradition.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4 flex-wrap mb-12">
              <HeritageButton
                variant="primary"
                onClick={onExploreCommunities}
              >
                Explore Communities
                <ArrowRight size={16} />
              </HeritageButton>
              <HeritageButton
                variant="secondary"
                onClick={onViewMap}
              >
                View Historical Map
              </HeritageButton>
            </div>

            {/* Stats Section */}
            <div 
              className="pt-6 sm:pt-8 border-t grid grid-cols-3 gap-4 sm:gap-8 max-w-[500px]"
              style={{
                borderColor: 'rgba(255, 255, 255, 0.15)',
              }}
            >
              <div>
                <div className="text-2xl sm:text-3xl lg:text-[40px]" style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 'var(--font-weight-black)',
                  color: 'var(--primary-foreground)',
                  marginBottom: '6px',
                  letterSpacing: '-0.02em',
                  lineHeight: '1',
                }}>
                  7
                </div>
                <div className="text-[10px] sm:text-xs" style={{
                  fontFamily: 'var(--font-ui)',
                  color: 'rgba(255, 255, 255, 0.7)',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}>
                  Communities
                </div>
              </div>
              
              <div>
                <div className="text-2xl sm:text-3xl lg:text-[40px]" style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 'var(--font-weight-black)',
                  color: 'var(--primary-foreground)',
                  marginBottom: '6px',
                  letterSpacing: '-0.02em',
                  lineHeight: '1',
                }}>
                  5
                </div>
                <div className="text-[10px] sm:text-xs" style={{
                  fontFamily: 'var(--font-ui)',
                  color: 'rgba(255, 255, 255, 0.7)',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}>
                  Time Periods
                </div>
              </div>
              
              <div>
                <div className="text-2xl sm:text-3xl lg:text-[40px]" style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 'var(--font-weight-black)',
                  color: 'var(--primary-foreground)',
                  marginBottom: '6px',
                  letterSpacing: '-0.02em',
                  lineHeight: '1',
                }}>
                  47+
                </div>
                <div className="text-[10px] sm:text-xs" style={{
                  fontFamily: 'var(--font-ui)',
                  color: 'rgba(255, 255, 255, 0.7)',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}>
                  Documents
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Communities Panel (4 columns) */}
          <div className="lg:col-span-4">
            <div 
              className="p-6 sm:p-8 h-full"
              style={{
                backgroundColor: 'rgba(135, 135, 135, 0.23)',
                border: '1px solid rgba(34, 55, 14, 0.3)',
                borderRadius: '0',
                backdropFilter: 'blur(12px)',
              }}
            >
              {/* Header */}
              <div className="mb-6 pb-6" style={{
                borderBottom: '1px solid rgba(255, 255, 255, 0.4)',
              }}>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={18} style={{ color: 'var(--primary-foreground)' }} />
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '13px',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--muted-foreground)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}>
                    Featured Communities
                  </h3>
                </div>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.75)',
                  lineHeight: '1.5',
                  marginTop: '8px',
                }}>
                  Explore seven historic towns across East Texas
                </p>
              </div>

              {/* Communities List */}
              <div className="space-y-1">
                {communities.map((community, index) => (
                  <button
                    key={community.id}
                    onClick={() => onCommunityClick?.(community.id)}
                    className="w-full text-left px-4 py-3 transition-all duration-200 group relative"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(24, 45, 9, 0.2)',
                      borderRadius: '0',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(24, 45, 9, 0.2)';
                      e.currentTarget.style.borderColor = 'rgba(24, 45, 9, 0.5)';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.borderColor = 'rgba(24, 45, 9, 0.2)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '15px',
                          fontWeight: 'var(--font-weight-semibold)',
                          color: 'var(--primary-foreground)',
                          marginBottom: '2px',
                          letterSpacing: '0.01em',
                        }}>
                          {community.name}
                        </div>
                        <div style={{
                          fontFamily: 'var(--font-ui)',
                          fontSize: '11px',
                          color: 'rgba(255, 255, 255, 0.6)',
                          letterSpacing: '0.02em',
                        }}>
                          {community.county}
                        </div>
                      </div>
                      <ChevronRight 
                        size={16} 
                        className="opacity-0 group-hover:opacity-100 transition-opacity" 
                        style={{ color: 'var(--primary)' }} 
                      />
                    </div>
                  </button>
                ))}
              </div>

              {/* View All Link */}
              <button
                onClick={onViewMap}
                className="w-full mt-6 pt-6 text-center transition-all duration-200"
                style={{
                  borderTop: '1px solid rgba(24, 45, 9, 0.3)',
                  fontFamily: 'var(--font-ui)',
                  fontSize: '13px',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--primary)',
                  letterSpacing: '0.03em',
                  textTransform: 'uppercase',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--primary-foreground)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--primary)';
                }}
              >
                View on Map →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}