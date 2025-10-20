import { ArrowRight, MapPin, Calendar, Landmark } from 'lucide-react';

interface CommunityCardProps {
  name: string;
  county: string;
  established: string;
  description: string;
  onClick?: () => void;
}

export function CommunityCard({ name, county, established, description, onClick }: CommunityCardProps) {
  return (
    <article 
      onClick={onClick}
      className="group cursor-pointer transition-all duration-500 hover:-translate-y-2"
      style={{
        background: 'linear-gradient(to bottom, #FFFEF9 0%, #F8F6F0 100%)',
        border: '1px solid rgba(24, 45, 9, 0.15)',
        boxShadow: '0 2px 8px rgba(61, 40, 23, 0.08), 0 1px 3px rgba(61, 40, 23, 0.06)',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 12px 32px rgba(61, 40, 23, 0.12), 0 4px 12px rgba(61, 40, 23, 0.08)';
        e.currentTarget.style.borderColor = 'rgba(24, 45, 9, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(61, 40, 23, 0.08), 0 1px 3px rgba(61, 40, 23, 0.06)';
        e.currentTarget.style.borderColor = 'rgba(24, 45, 9, 0.15)';
      }}
    >
      {/* Heritage Accent Bar - Top */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(to right, #182D09 0%, #4a6a22 50%, #182D09 100%)',
          opacity: 0.6,
        }}
      />

      {/* Subtle Leather Texture Overlay */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.95' numOctaves='5' seed='2' /%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.012 0'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          opacity: 0.35,
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, padding: '36px' }}>
        {/* Header Section */}
        <div className="mb-6">
          {/* Meta Information Row */}
          <div className="flex items-center gap-4 mb-4">
            {/* County Badge */}
            <div 
              className="inline-flex items-center gap-2 px-3 py-1.5"
              style={{
                backgroundColor: 'rgba(61, 40, 23, 0.06)',
                border: '1px solid rgba(61, 40, 23, 0.12)',
              }}
            >
              <MapPin 
                size={12} 
                strokeWidth={2}
                style={{ color: '#182D09' }} 
              />
              <span style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '11px',
                fontWeight: 'var(--font-weight-semibold)',
                color: '#182D09',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}>
                {county}
              </span>
            </div>

            {/* Established Badge */}
            <div 
              className="inline-flex items-center gap-2 px-3 py-1.5"
              style={{
                backgroundColor: 'rgba(34, 55, 14, 0.15)',
                border: '1px solid rgba(34, 55, 14, 0.3)',
              }}
            >
              <Calendar 
                size={12} 
                strokeWidth={2}
                style={{ color: '#182D09' }} 
              />
              <span style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '11px',
                fontWeight: 'var(--font-weight-semibold)',
                color: '#182D09',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}>
                Est. {established}
              </span>
            </div>
          </div>

          {/* Community Name */}
          <h3 
            className="group-hover:opacity-90 transition-opacity duration-300"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '32px',
              fontWeight: 'var(--font-weight-bold)',
              lineHeight: '1.2',
              color: '#182D09',
              marginBottom: '8px',
              letterSpacing: '-0.01em',
            }}
          >
            {name}
          </h3>

          {/* Architectural Ornament */}
          <div className="flex items-center gap-2 mb-4">
            <div 
              style={{
                width: '40px',
                height: '1px',
                backgroundColor: '#182D09',
                opacity: 0.4,
              }}
            />
            <Landmark 
              size={14} 
              strokeWidth={1.5}
              style={{ color: '#182D09', opacity: 0.5 }} 
            />
            <div 
              style={{
                flex: 1,
                height: '1px',
                background: 'linear-gradient(to right, rgba(24, 45, 9, 0.4) 0%, transparent 100%)',
              }}
            />
          </div>
        </div>

        {/* Description Section */}
        <p 
          className="mb-8"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '16px',
            lineHeight: '1.7',
            color: '#3a5a1a',
            letterSpacing: '0.01em',
          }}
        >
          {description}
        </p>

        {/* Footer with CTA */}
        <div 
          style={{
            paddingTop: '20px',
            borderTop: '1px solid rgba(24, 45, 9, 0.12)',
          }}
        >
          <div 
            className="inline-flex items-center gap-3 group/cta transition-all duration-300"
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '14px',
              fontWeight: 'var(--font-weight-semibold)',
              color: '#182D09',
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
            }}
          >
            <span className="relative">
              View Community Profile
              <span 
                className="absolute bottom-0 left-0 w-0 h-[1px] bg-current group-hover/cta:w-full transition-all duration-300"
              />
            </span>
            <div 
              className="flex items-center justify-center transition-all duration-300 group-hover/cta:translate-x-1"
              style={{
                width: '24px',
                height: '24px',
                backgroundColor: 'rgba(61, 40, 23, 0.08)',
                border: '1px solid rgba(61, 40, 23, 0.15)',
              }}
            >
              <ArrowRight 
                size={14} 
                strokeWidth={2.5}
                style={{ color: '#182D09' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Corner Flourish - Bottom Right */}
      <div 
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '80px',
          height: '80px',
          background: 'linear-gradient(135deg, transparent 0%, transparent 50%, rgba(34, 55, 14, 0.03) 50%, rgba(34, 55, 14, 0.06) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Side Accent - Left Edge */}
      <div 
        className="group-hover:opacity-100 transition-opacity duration-500"
        style={{
          position: 'absolute',
          top: '64px',
          left: 0,
          width: '2px',
          height: '60px',
          background: 'linear-gradient(to bottom, transparent, #4a6a22, transparent)',
          opacity: 0,
        }}
      />
    </article>
  );
}
