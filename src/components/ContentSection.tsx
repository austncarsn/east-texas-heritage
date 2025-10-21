interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
  background?: 'default' | 'subtle';
}

export function ContentSection({ title, children, background = 'default' }: ContentSectionProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-[var(--section-spacing)]" style={{
      backgroundColor: background === 'subtle' ? 'var(--background-subtle)' : 'var(--background)',
    }}>
      <div className="mx-auto px-4 sm:px-6 md:px-12 lg:px-[72px] max-w-[1400px]">
        <h2 className="mb-6 sm:mb-8" style={{
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
