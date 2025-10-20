import { ExternalLink } from 'lucide-react';

interface DocumentCardProps {
  imageUrl: string;
  title: string;
  date: string;
  category: string;
  source: string;
}

export function DocumentCard({ imageUrl, title, date, category, source }: DocumentCardProps) {
  return (
    <div 
      className="group relative overflow-hidden transition-all hover:-translate-y-1"
      style={{
        backgroundColor: 'var(--surface)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-sm)',
        border: '1px solid var(--document-border)',
      }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden" style={{
        height: '280px',
        backgroundColor: 'var(--background-subtle)',
      }}>
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
        />
        
        {/* Sepia Overlay on Hover */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(24, 45, 9, 0.15), rgba(20, 35, 8, 0.25))',
            mixBlendMode: 'multiply',
          }}
        />
      </div>
      
      {/* Content */}
      <div style={{ padding: '20px' }}>
        <div className="mb-3">
          <span 
            className="inline-block px-3 py-1"
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '12px',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--secondary)',
              backgroundColor: 'var(--background-subtle)',
              borderRadius: 'var(--radius-sm)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            {category}
          </span>
        </div>
        
        <h3 className="mb-2" style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '20px',
          fontWeight: 'var(--font-weight-bold)',
          lineHeight: 'var(--line-height-normal)',
          color: 'var(--foreground)',
        }}>
          {title}
        </h3>
        
        <p className="mb-4" style={{
          fontFamily: 'var(--font-body)',
          fontSize: '14px',
          color: 'var(--foreground-subtle)',
        }}>
          {date}
        </p>
        
        {/* Metadata Row */}
        <div className="flex items-center justify-between pt-4" style={{
          borderTop: '1px solid var(--divider)',
        }}>
          <span style={{
            fontFamily: 'var(--font-ui)',
            fontSize: '14px',
            color: 'var(--foreground-subtle)',
          }}>
            {source}
          </span>
          
          <a 
            href="#"
            className="inline-flex items-center gap-1 hover:opacity-70 transition-opacity"
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '14px',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--primary)',
              textDecoration: 'none',
            }}
          >
            Source
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
