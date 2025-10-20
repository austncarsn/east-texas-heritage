interface NotablePersonProps {
  name: string;
  years: string;
  description: string;
}

export function NotablePerson({ name, years, description }: NotablePersonProps) {
  return (
    <div 
      className="group transition-all hover:translate-x-1"
      style={{
        backgroundColor: 'var(--surface)',
        borderRadius: 'var(--radius-lg)',
        padding: '24px',
        border: '1px solid var(--document-border)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      <div className="flex items-start gap-4">
        <div 
          className="flex-shrink-0 mt-1"
          style={{
            width: '4px',
            height: '40px',
            backgroundColor: 'var(--secondary)',
            borderRadius: '2px',
          }}
        />
        
        <div className="flex-1">
          <div className="mb-2">
            <h4 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '20px',
              fontWeight: 'var(--font-weight-bold)',
              lineHeight: '1.3',
              color: 'var(--foreground)',
              display: 'inline',
            }}>
              {name}
            </h4>
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              color: 'var(--foreground-subtle)',
              marginLeft: '8px',
            }}>
              {years}
            </span>
          </div>
          
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '16px',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
