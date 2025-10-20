import { Icon } from './Icon';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps = {}) {
  return (
    <footer 
      className="relative overflow-hidden"
      style={{
        backgroundColor: '#1A1A1A',
        color: '#FFFFFF',
      }}
    >

      {/* Main Content */}
      <div className="relative z-10">
        {/* Top Section - Editorial Grid */}
        <div className="mx-auto px-[72px] max-w-[1400px] pt-20 pb-16">
          <div className="grid grid-cols-12 gap-[24px]">
            {/* Column 1 - Archive Identity (spans 5 columns) */}
            <div className="col-span-12 lg:col-span-5">
              <div className="mb-8">
                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '32px',
                  fontWeight: 'var(--font-weight-bold)',
                  color: '#FFFFFF',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em',
                  marginBottom: '16px',
                }}>
                  East Texas Heritage Archive
                </h2>
                <div style={{
                  width: '64px',
                  height: '2px',
                  backgroundColor: '#182D09',
                  marginBottom: '24px',
                }} />
              </div>

              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#E5E5E5',
                maxWidth: '480px',
                marginBottom: '32px',
              }}>
                An independent research initiative preserving the rich tapestry of rural East Texas through meticulous archival work, oral histories, and collaborative storytelling. We honor the voices of generations past while building a foundation for future understanding.
              </p>

              {/* Mission Statement */}
              <div style={{
                borderLeft: '3px solid #182D09',
                paddingLeft: '20px',
                marginBottom: '32px',
              }}>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  lineHeight: '1.6',
                  color: '#B8B8B8',
                  fontStyle: 'italic',
                  maxWidth: '400px',
                }}>
                  "Every document tells a story. Every story preserves a legacy. Every legacy shapes our future."
                </p>
              </div>
            </div>

            {/* Column 2 - Navigation (spans 3 columns) */}
            <div className="col-span-6 lg:col-span-3 lg:col-start-7">
              <h3 style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '11px',
                fontWeight: 'var(--font-weight-semibold)',
                color: '#999999',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginBottom: '20px',
              }}>
                Explore
              </h3>
              <nav>
                <ul className="space-y-3">
                  {[
                    { label: 'Browse Collections', href: '#' },
                    { label: 'Interactive Map', href: '#' },
                    { label: 'Timeline', href: '#' },
                    { label: 'Communities', href: '#' },
                    { label: 'About the Archive', href: '#' },
                  ].map((item) => (
                    <li key={item.label}>
                      <a 
                        href={item.href}
                        className="group inline-flex items-center transition-all duration-200"
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '15px',
                          color: '#CCCCCC',
                          textDecoration: 'none',
                        }}
                      >
                        <span className="group-hover:translate-x-1 group-hover:text-white transition-all duration-200">
                          {item.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Column 3 - Resources (spans 2 columns) */}
            <div className="col-span-6 lg:col-span-2">
              <h3 style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '11px',
                fontWeight: 'var(--font-weight-semibold)',
                color: '#999999',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginBottom: '20px',
              }}>
                Resources
              </h3>
              <nav>
                <ul className="space-y-3">
                  {[
                    { label: 'Research Guide', href: '#', page: null },
                    { label: 'Icon Library', href: '#icons', page: 'icons' },
                    { label: 'Contribute', href: '#', page: null },
                    { label: 'Citation Help', href: '#', page: null },
                    { label: 'Preservation', href: '#', page: null },
                  ].map((item) => (
                    <li key={item.label}>
                      <a 
                        href={item.href}
                        onClick={(e) => {
                          if (item.page && onNavigate) {
                            e.preventDefault();
                            onNavigate(item.page);
                          }
                        }}
                        className="group inline-flex items-center transition-all duration-200"
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '15px',
                          color: '#CCCCCC',
                          textDecoration: 'none',
                          cursor: item.page ? 'pointer' : 'default',
                        }}
                      >
                        <span className="group-hover:translate-x-1 group-hover:text-white transition-all duration-200">
                          {item.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Column 4 - Contact Info (spans 2 columns) */}
            <div className="col-span-12 lg:col-span-2">
              <h3 style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '11px',
                fontWeight: 'var(--font-weight-semibold)',
                color: '#999999',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginBottom: '20px',
              }}>
                Connect
              </h3>
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start gap-3">
                  <Icon 
                    name="Mail" 
                    label="Email"
                    size={16} 
                    style={{ 
                      color: '#999999',
                      marginTop: '2px',
                      flexShrink: 0,
                    }} 
                  />
                  <a 
                    href="mailto:austncarsn@gmail.com"
                    className="hover:text-white transition-colors"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      color: '#CCCCCC',
                      textDecoration: 'none',
                      lineHeight: '1.4',
                    }}
                  >
                    austncarsn@gmail.com
                  </a>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <Icon 
                    name="MapPin" 
                    label="Location"
                    size={16} 
                    style={{ 
                      color: '#999999',
                      marginTop: '2px',
                      flexShrink: 0,
                    }} 
                  />
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    color: '#CCCCCC',
                    lineHeight: '1.4',
                  }}>
                    East Texas<br />Region
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-auto px-[72px] max-w-[1400px]">
          <div style={{
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(24, 45, 9, 0.3) 20%, rgba(24, 45, 9, 0.3) 80%, transparent)',
          }} />
        </div>

        {/* Bottom Section - Meta Information */}
        <div className="mx-auto px-[72px] max-w-[1400px] py-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Copyright */}
            <div>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                color: '#888888',
                lineHeight: '1.6',
              }}>
                © 2025 East Texas Heritage Archive
                <span style={{ margin: '0 8px', opacity: 0.5 }}>•</span>
                All rights reserved
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              {['Privacy Policy', 'Terms of Use', 'Image Attribution'].map((item, index) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-white transition-colors"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    color: '#888888',
                    textDecoration: 'none',
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Archive Tagline */}
          <div className="mt-6 pt-6" style={{
            borderTop: '1px solid rgba(24, 45, 9, 0.2)',
          }}>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              color: '#666666',
              textAlign: 'center',
              letterSpacing: '0.02em',
            }}>
              Preserving yesterday's stories for tomorrow's generations
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}