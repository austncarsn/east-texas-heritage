interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
  background?: 'default' | 'subtle';
}

export function ContentSection({ title, children, background = 'default' }: ContentSectionProps) {
  return (
    <section style={{
      paddingTop: 'var(--section-spacing)',
      paddingBottom: 'var(--section-spacing)',
      backgroundColor: background === 'subtle' ? 'var(--background-subtle)' : 'var(--background)',
    }}>
      <div className="mx-auto px-[72px] max-w-[1400px]">
        <h2 className="mb-8" style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'var(--font-size-2xl)',
          fontWeight: 'var(--font-weight-bold)',
          lineHeight: 'var(--line-height-snug)',
          color: 'var(--foreground)',
        }}>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
