import { Icon } from './Icon';

interface HeaderProps {
  onAboutClick?: () => void;
  onSearchClick?: () => void;
  onHomeClick?: () => void;
  onTimelineClick?: () => void;
  onCommunitiesClick?: () => void;
  onMapClick?: () => void;
}

export function Header({ onAboutClick, onSearchClick, onHomeClick, onTimelineClick, onCommunitiesClick, onMapClick }: HeaderProps = {}) {
  return (
    <header 
      className="sticky top-0 z-50 border-b"
      style={{
        backgroundColor: '#FAF8F5',
        borderColor: 'rgba(0, 0, 0, 0.1)',
        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
      }}
    >
      <div className="mx-auto px-[72px] max-w-[1400px]">
        {/* Main Navigation Bar */}
        <div className="flex items-center justify-between" style={{ height: '96px' }}>
          {/* Logo & Brand */}
          <div className="flex items-center gap-4">
            {/* Archive Icon */}
            <div 
              className="flex items-center justify-center"
              style={{
                width: '44px',
                height: '44px',
                backgroundColor: 'rgba(24, 45, 9, 0.08)',
                border: '1px solid rgba(24, 45, 9, 0.15)',
              }}
            >
              <Icon name="Library" label="Heritage Library" size={22} style={{ color: '#182D09' }} />
            </div>

            {/* Brand Name */}
            <div>
              <h1 
                className="tracking-tight leading-none"
                style={{
                  fontFamily: 'Satoshi, system-ui, sans-serif',
                  fontSize: '32px',
                  fontWeight: 'normal',
                  color: '#1A1A1A',
                  letterSpacing: '-0.01em',
                  textTransform: 'uppercase',
                  marginBottom: '2px',
                }}
              >
                East Texas Heritage
              </h1>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '11px',
                color: 'rgba(26, 26, 26, 0.5)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}>
                Digital Archive & Research Initiative
              </p>
            </div>
          </div>
          
          {/* Navigation Links */}
          <nav className="flex items-center" style={{ gap: '48px' }}>
            <button 
              onClick={(e) => {
                e.preventDefault();
                onHomeClick && onHomeClick();
              }}
              className="group relative transition-all duration-200"
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '15px',
                fontWeight: 'var(--font-weight-semibold)',
                color: '#1A1A1A',
                letterSpacing: '0.02em',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0',
              }}
            >
              <span className="relative">
                Home
                <span 
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-white opacity-100"
                  style={{
                    backgroundColor: '#182D09',
                  }}
                />
              </span>
            </button>

            <button 
              onClick={(e) => {
                e.preventDefault();
                onTimelineClick && onTimelineClick();
              }}
              className="group relative transition-all duration-200 hover:opacity-100"
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '15px',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'rgba(26, 26, 26, 0.6)',
                letterSpacing: '0.02em',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0',
              }}
            >
              <span className="relative">
                Timeline
                <span 
                  className="absolute -bottom-1 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-300"
                  style={{
                    backgroundColor: '#182D09',
                  }}
                />
              </span>
            </button>

            <button 
              onClick={(e) => {
                e.preventDefault();
                onCommunitiesClick && onCommunitiesClick();
              }}
              className="group relative transition-all duration-200 hover:opacity-100"
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '15px',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'rgba(26, 26, 26, 0.6)',
                letterSpacing: '0.02em',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0',
              }}
            >
              <span className="relative">
                Communities
                <span 
                  className="absolute -bottom-1 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-300"
                  style={{
                    backgroundColor: '#182D09',
                  }}
                />
              </span>
            </button>

            <button 
              onClick={(e) => {
                e.preventDefault();
                onMapClick && onMapClick();
              }}
              className="group relative transition-all duration-200 hover:opacity-100"
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '15px',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'rgba(26, 26, 26, 0.6)',
                letterSpacing: '0.02em',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0',
              }}
            >
              <span className="relative">
                Map
                <span 
                  className="absolute -bottom-1 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-300"
                  style={{
                    backgroundColor: '#182D09',
                  }}
                />
              </span>
            </button>
            
            <button 
              onClick={onAboutClick}
              className="group relative transition-all duration-200 hover:opacity-100"
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '15px',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'rgba(26, 26, 26, 0.6)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0',
                letterSpacing: '0.02em',
              }}
            >
              <span className="relative">
                About
                <span 
                  className="absolute -bottom-1 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-300"
                  style={{
                    backgroundColor: '#182D09',
                  }}
                />
              </span>
            </button>
            
            {/* Vertical Divider */}
            <div 
              style={{
                width: '1px',
                height: '32px',
                backgroundColor: 'rgba(26, 26, 26, 0.15)',
                marginLeft: '-12px',
              }}
            />

            {/* Search Button - Enhanced */}
            <button 
              onClick={onSearchClick}
              className="group flex items-center gap-2 px-4 py-2 hover:bg-black/5 transition-all duration-200"
              aria-label="Search archive"
              style={{
                border: '1px solid rgba(26, 26, 26, 0.2)',
                backgroundColor: 'transparent',
                cursor: 'pointer',
              }}
            >
              <Icon name="Search" label="Search" size={18} style={{ color: 'rgba(26, 26, 26, 0.6)' }} className="group-hover:opacity-100 transition-opacity" />
              <span 
                className="group-hover:opacity-100 transition-opacity"
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '13px',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'rgba(26, 26, 26, 0.6)',
                  letterSpacing: '0.02em',
                }}
              >
                Search
              </span>
            </button>
          </nav>
        </div>
      </div>

      {/* Subtle Bottom Border Accent */}
      <div 
        style={{
          height: '1px',
          background: 'linear-gradient(to right, transparent, rgba(61, 40, 23, 0.2) 20%, rgba(61, 40, 23, 0.2) 80%, transparent)',
        }}
      />
    </header>
  );
}