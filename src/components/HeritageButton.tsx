import { ButtonHTMLAttributes } from 'react';

interface HeritageButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
}

export function HeritageButton({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}: HeritageButtonProps) {
  const baseStyles = {
    fontFamily: 'var(--font-ui)',
    fontSize: '16px',
    fontWeight: 'var(--font-weight-semibold)',
    lineHeight: '1',
    padding: '18px 32px',
    borderRadius: '0',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    border: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    whiteSpace: 'nowrap' as const,
  };

  const variants = {
    primary: {
      backgroundColor: '#182D09',
      color: '#FFFFFF',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
    },
    secondary: {
      backgroundColor: 'rgba(24, 45, 9, 0.15)',
      color: '#F5EFE6',
      border: '2px solid #182D09',
      backdropFilter: 'blur(8px)',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--foreground-muted)',
    },
  };

  const hoverStyles = variant === 'primary' 
    ? 'hover:bg-opacity-90'
    : variant === 'secondary'
    ? 'hover:bg-opacity-100'
    : 'hover:opacity-70';

  return (
    <button
      className={`${hoverStyles} ${className}`}
      style={{ ...baseStyles, ...variants[variant] }}
      {...props}
    >
      {children}
    </button>
  );
}