import { useState, useRef, useMemo, useCallback, memo, useEffect } from 'react';
import { ChevronRight, Clock, MapPin, Users, Tent, Calendar, Wheat, TreePine, Factory, School } from 'lucide-react';

interface TimelinePeriod {
  year: string;
  title: string;
  description: string;
  period: 'indigenous' | 'settlement' | 'civil-war' | 'reconstruction' | 'modern';
  highlights: string[];
  onReadMore?: () => void;
}

interface EnhancedTimelineProps {
  periods: TimelinePeriod[];
}

// Memoized Period Button Component for performance
const PeriodButton = memo(({ 
  period, 
  index, 
  isActive, 
  config,
  onClick 
}: { 
  period: TimelinePeriod; 
  index: number; 
  isActive: boolean; 
  config: any;
  onClick: () => void;
}) => {
  const Icon = config.icon;
  
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-3 transition-all duration-200 flex-shrink-0"
      style={{
        backgroundColor: isActive ? config.lightBg : 'transparent',
        border: `2px solid ${isActive ? config.color : 'var(--document-border)'}`,
        transform: isActive ? 'scale(1.02)' : 'scale(1)',
        willChange: 'transform',
        borderRadius: '0',
      }}
    >
      <div 
        className="p-1.5"
        style={{
          backgroundColor: config.color,
          borderRadius: '0',
        }}
      >
  <Icon size={16} style={{ color: 'var(--primary-foreground)' }} />
      </div>
      <div className="text-left">
        <div style={{
          fontFamily: 'var(--font-ui)',
          fontSize: '11px',
          color: 'var(--foreground-muted)',
          letterSpacing: '0.03em',
          textTransform: 'uppercase',
        }}>
          {period.year}
        </div>
        <div style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '14px',
          fontWeight: 'var(--font-weight-semibold)',
          color: isActive ? config.color : 'var(--foreground)',
        }}>
          {period.title}
        </div>
      </div>
    </button>
  );
});

PeriodButton.displayName = 'PeriodButton';

// Memoized Timeline Card for performance
const TimelineCard = memo(({ 
  period, 
  index, 
  isActive, 
  config,
  onMouseEnter,
  onReadMore,
}: { 
  period: TimelinePeriod; 
  index: number; 
  isActive: boolean; 
  config: any;
  onMouseEnter: () => void;
  onReadMore?: () => void;
}) => {
  const Icon = config.icon;
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  return (
    <div 
      className="flex gap-6 items-start"
      onMouseEnter={onMouseEnter}
    >
      {/* Timeline Node - Now Square/Boxy */}
      <button
        onClick={onMouseEnter}
        className="relative flex-shrink-0 mt-2 transition-all duration-300 z-10"
        style={{
          width: '64px',
          height: '64px',
          willChange: 'transform',
        }}
        aria-label={`Jump to ${period.title}`}
      >
        <div
          className="absolute inset-0 transition-all duration-300"
          style={{
            background: config.bgGradient,
            transform: isActive ? 'scale(1)' : 'scale(0.85)',
            boxShadow: isActive ? `0 0 20px ${config.color}40` : 'var(--shadow-sm)',
            willChange: 'transform, box-shadow',
            borderRadius: '0',
          }}
        />
        {isActive && (
          <div
            className="absolute inset-0 animate-ping"
            style={{
              backgroundColor: config.color,
              opacity: 0.3,
              borderRadius: '0',
            }}
          />
        )}
        <div className="relative flex items-center justify-center h-full">
          <Icon size={28} style={{ color: 'var(--primary-foreground)' }} />
        </div>
      </button>

      {/* Card Content */}
      <div 
        className="flex-1 p-8 transition-all duration-300"
        style={{
          backgroundColor: isActive ? config.lightBg : 'var(--surface)',
          border: `2px solid ${isActive ? config.color : 'var(--document-border)'}`,
          boxShadow: isActive ? 'var(--shadow-md)' : 'var(--shadow-sm)',
          transform: isActive ? 'translateX(8px)' : 'translateX(0)',
          willChange: 'transform, background-color, box-shadow',
          borderRadius: '0',
          minHeight: '280px',
        }}
      >
        <div className="mb-3">
          <div 
            className="inline-block px-3 py-1 mb-2"
            style={{
              backgroundColor: config.color,
              borderRadius: '0',
            }}
          >
            <span style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '12px',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--primary-foreground)',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}>
              {period.year}
            </span>
          </div>
          <h4 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '24px',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--foreground)',
            marginBottom: '8px',
          }}>
            {period.title}
          </h4>
        </div>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '16px',
          lineHeight: 'var(--line-height-normal)',
          color: 'var(--foreground-muted)',
          marginBottom: '16px',
          display: isCollapsed ? 'none' : 'block',
        }}>
          {period.description}
        </p>

        {/* Highlights */}
        {period.highlights && period.highlights.length > 0 && (
          <div className="mb-4" style={{ display: isCollapsed ? 'none' : 'block' }}>
            <div style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '12px',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--foreground-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '8px',
            }}>
              Key Highlights
            </div>
            <div className="space-y-2">
              {period.highlights.slice(0, 3).map((highlight, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div 
                    className="mt-1.5 flex-shrink-0"
                    style={{
                      width: '6px',
                      height: '6px',
                      backgroundColor: config.color,
                      borderRadius: '0',
                    }}
                  />
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    color: 'var(--foreground-muted)',
                  }}>
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Read More Button */}
        {onReadMore && (
          <button
            onClick={onReadMore}
            className="inline-flex items-center gap-2 px-4 py-2 transition-transform duration-200"
            style={{
              backgroundColor: config.color,
              fontFamily: 'var(--font-ui)',
              fontSize: '14px',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--primary-foreground)',
              willChange: 'transform',
              borderRadius: '0',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateX(4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateX(0)';
            }}
          >
            Explore Period
            <ChevronRight size={16} />
          </button>
        )}
        {/* Mobile collapse toggle */}
        <div className="sm:hidden mt-3">
          <button
            className="text-sm text-primary underline"
            onClick={(e) => { e.stopPropagation(); setIsCollapsed(!isCollapsed); }}
            aria-expanded={!isCollapsed}
          >
            {isCollapsed ? 'Show details' : 'Hide details'}
          </button>
        </div>
      </div>
    </div>
  );
});

TimelineCard.displayName = 'TimelineCard';

// Memoized Horizontal Card
const HorizontalCard = memo(({ 
  period, 
  index, 
  isActive, 
  config,
  onMouseEnter,
  onReadMore,
}: { 
  period: TimelinePeriod; 
  index: number; 
  isActive: boolean; 
  config: any;
  onMouseEnter: () => void;
  onReadMore?: () => void;
}) => {
  const Icon = config.icon;
  
  return (
    <div
      className="flex-shrink-0 snap-center w-[min(520px,92vw)] sm:w-[520px]"
      onMouseEnter={onMouseEnter}
    >
      <div
        className={`card h-full p-6 sm:p-8 transition-all duration-300 flex flex-col${isActive ? ' is-active' : ''}`}
        style={{
          backgroundColor: isActive ? config.lightBg : 'var(--surface)',
          minHeight: '450px',
        }}
      >
        {/* Header with Icon and Date Badge */}
        <div className="flex items-start justify-between mb-6">
          {/* Date Badge - Top Left */}
          <div 
            className="px-3 py-1.5"
            style={{
              backgroundColor: config.color,
              borderRadius: '0',
            }}
          >
            <span style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '11px',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--primary-foreground)',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}>
              {period.year}
            </span>
          </div>
          
          {/* Icon - Top Right */}
          <div 
            className="inline-flex p-3"
            style={{
              background: config.bgGradient,
              borderRadius: '0',
            }}
          >
            <Icon size={32} style={{ color: 'var(--primary-foreground)' }} />
          </div>
        </div>

        <h4 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '22px',
          fontWeight: 'var(--font-weight-bold)',
          color: 'var(--foreground)',
          marginBottom: '16px',
        }}>
          {period.title}
        </h4>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '15px',
          lineHeight: 'var(--line-height-normal)',
          color: 'var(--foreground-muted)',
          marginBottom: '20px',
        }}>
          {period.description}
        </p>

        {/* Highlights */}
        {period.highlights && period.highlights.length > 0 && (
          <div className="mb-6 flex-1">
            <div style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '11px',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--foreground-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '12px',
            }}>
              Key Highlights
            </div>
            <div className="space-y-3">
              {period.highlights.slice(0, 3).map((highlight, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div 
                    className="mt-1.5 flex-shrink-0"
                    style={{
                      width: '6px',
                      height: '6px',
                      backgroundColor: config.color,
                      borderRadius: '0',
                    }}
                  />
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    color: 'var(--foreground-muted)',
                    lineHeight: '1.5',
                  }}>
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Read More Button */}
        {onReadMore && (
          <button
            onClick={onReadMore}
            className="inline-flex items-center gap-2 px-5 py-3 transition-transform duration-200 w-full justify-center mt-auto"
            style={{
              backgroundColor: config.color,
              fontFamily: 'var(--font-ui)',
              fontSize: '14px',
              fontWeight: 'var(--font-weight-semibold)',
              color: '#FFFFFF',
              willChange: 'transform',
              borderRadius: '0',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Explore Period
            <ChevronRight size={16} />
          </button>
        )}
      </div>
    </div>
  );
});

HorizontalCard.displayName = 'HorizontalCard';

export function EnhancedTimeline({ periods }: EnhancedTimelineProps) {
  const [activePeriod, setActivePeriod] = useState(0);
  const [viewMode, setViewMode] = useState<'vertical' | 'horizontal'>(() => {
    try {
      const stored = localStorage.getItem('timeline:viewMode');
      return (stored === 'horizontal' || stored === 'vertical') ? stored : 'vertical';
    } catch (e) {
      return 'vertical';
    }
  });
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Memoize period configuration to avoid recreating on each render
  const periodConfig = useMemo(() => ({
    indigenous: {
      color: 'var(--period-indigenous)',
      icon: Tent,
  bgGradient: 'linear-gradient(135deg, var(--primary) 0%, #2a4a12 100%)',
      lightBg: 'rgba(24, 45, 9, 0.08)',
    },
    settlement: {
      color: 'var(--period-settlement)',
      icon: TreePine,
  bgGradient: 'linear-gradient(135deg, var(--primary) 0%, #3a5a1a 100%)',
      lightBg: 'rgba(24, 45, 9, 0.08)',
    },
    'civil-war': {
      color: 'var(--period-civil-war)',
      icon: Wheat,
      bgGradient: 'linear-gradient(135deg, #152809 0%, #2a4a12 100%)',
      lightBg: 'rgba(21, 40, 9, 0.08)',
    },
    reconstruction: {
      color: 'var(--period-reconstruction)',
      icon: Factory,
  bgGradient: 'linear-gradient(135deg, #2a4a12 0%, #3a5a1a 100%)',
      lightBg: 'rgba(42, 74, 18, 0.08)',
    },
    modern: {
      color: 'var(--period-modern)',
      icon: School,
  bgGradient: 'linear-gradient(135deg, #3a5a1a 0%, #4a6a22 100%)',
      lightBg: 'rgba(20, 35, 8, 0.08)',
    },
  }), []);

  // Memoize scroll function with useCallback
  const scrollToCard = useCallback((index: number) => {
    setActivePeriod(index);
    if (scrollContainerRef.current && viewMode === 'horizontal') {
      const card = scrollContainerRef.current.children[index] as HTMLElement;
      if (card) {
        card.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'nearest', 
          inline: 'center' 
        });
      }
    }
  }, [viewMode]);

  // Observe which horizontal card is in the center (for mobile swiping)
  useEffect(() => {
    if (!scrollContainerRef.current || viewMode !== 'horizontal') return;
    const container = scrollContainerRef.current;
    const cards = Array.from(container.children) as HTMLElement[];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = cards.indexOf(entry.target as HTMLElement);
          if (idx >= 0) setActivePeriod(idx);
        }
      });
    }, {
      root: container,
      threshold: 0.6,
    });

    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, [viewMode, periods.length]);

  // Keyboard navigation for scroller
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const handler = (e: KeyboardEvent) => {
      if (viewMode !== 'horizontal') return;
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        scrollToCard(Math.min(activePeriod + 1, periods.length - 1));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        scrollToCard(Math.max(activePeriod - 1, 0));
      }
    };
    el.addEventListener('keydown', handler);
    return () => el.removeEventListener('keydown', handler);
  }, [activePeriod, scrollToCard, viewMode, periods.length]);

  // Persist view mode to localStorage when changed
  const setViewModeAndPersist = (mode: 'vertical' | 'horizontal') => {
    setViewMode(mode);
    try {
      localStorage.setItem('timeline:viewMode', mode);
    } catch (e) {
      // ignore storage errors
    }
  };

  // Memoize active period config
  const activeConfig = useMemo(
    () => periodConfig[periods[activePeriod]?.period],
    [activePeriod, periods, periodConfig]
  );

  return (
    <div className="space-y-8">
      {/* Timeline Navigation Header */}
      <div 
        className="p-8"
        style={{
          backgroundColor: 'var(--surface)',
          border: '2px solid var(--document-border)',
          boxShadow: 'var(--shadow-sm)',
          borderRadius: '0',
        }}
      >
        {/* View Toggle */}
        <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
          <div className="flex-1 min-w-0">
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '20px',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--foreground)',
              marginBottom: '4px',
            }}>
              Historical Timeline Navigation
            </h3>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              color: 'var(--foreground-muted)',
            }}>
              Click any period to explore its story
            </p>
          </div>
          
          <div 
            className="inline-flex p-1 flex-shrink-0"
            style={{
              backgroundColor: 'var(--background-subtle)',
              border: '1px solid var(--document-border)',
              borderRadius: '0',
            }}
          >
            <button
              onClick={() => setViewModeAndPersist('vertical')}
              className="px-4 py-2 transition-all duration-200"
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '13px',
                fontWeight: 'var(--font-weight-semibold)',
                backgroundColor: viewMode === 'vertical' ? 'var(--surface)' : 'transparent',
                color: viewMode === 'vertical' ? 'var(--primary)' : 'var(--foreground-muted)',
                boxShadow: viewMode === 'vertical' ? 'var(--shadow-sm)' : 'none',
                borderRadius: '0',
              }}
              aria-pressed={viewMode === 'vertical'}
            >
              Vertical
            </button>
            <button
              onClick={() => setViewModeAndPersist('horizontal')}
              className="px-4 py-2 transition-all duration-200"
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '13px',
                fontWeight: 'var(--font-weight-semibold)',
                backgroundColor: viewMode === 'horizontal' ? 'var(--surface)' : 'transparent',
                color: viewMode === 'horizontal' ? 'var(--primary)' : 'var(--foreground-muted)',
                boxShadow: viewMode === 'horizontal' ? 'var(--shadow-sm)' : 'none',
                borderRadius: '0',
              }}
              aria-pressed={viewMode === 'horizontal'}
            >
              Horizontal
            </button>
          </div>
        </div>

        {/* Period Quick Navigation */}
        <div 
          className="flex items-center gap-3 overflow-x-auto pb-2 -mx-2 px-2" 
          style={{ 
            scrollbarWidth: 'thin',
            scrollbarColor: 'var(--secondary) transparent',
          }}
        >
          {periods.map((period, index) => {
            const config = periodConfig[period.period];
            return (
              <PeriodButton
                key={index}
                period={period}
                index={index}
                isActive={activePeriod === index}
                config={config}
                onClick={() => scrollToCard(index)}
              />
            );
          })}
        </div>

        {/* Progress Bar */}
        <div 
          className="mt-4 h-2 overflow-hidden"
          style={{
            backgroundColor: 'var(--background-subtle)',
            borderRadius: '0',
          }}
        >
          <div 
            className="h-full transition-all duration-500 ease-out"
            style={{
              width: `${((activePeriod + 1) / periods.length) * 100}%`,
              background: activeConfig?.bgGradient,
              willChange: 'width',
              borderRadius: '0',
            }}
          />
        </div>
      </div>

      {/* Timeline Cards */}
      {viewMode === 'vertical' ? (
        <div className="relative">
          {/* Vertical Timeline Track */}
          <div 
            className="absolute left-[32px] top-8 bottom-8 pointer-events-none"
            style={{
              width: '3px',
              background: 'linear-gradient(180deg, var(--timeline-track) 0%, var(--secondary) 100%)',
            }}
          />

          {/* Timeline Items */}
          <div className="space-y-8">
            {periods.map((period, index) => {
              const config = periodConfig[period.period];
              return (
                <TimelineCard
                  key={index}
                  period={period}
                  index={index}
                  isActive={activePeriod === index}
                  config={config}
                  onMouseEnter={() => setActivePeriod(index)}
                  onReadMore={period.onReadMore}
                />
              );
            })}
          </div>
        </div>
      ) : (
        // Horizontal Scrollable Timeline
        <div 
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory px-4 sm:px-8 touch-pan-x"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: 'var(--secondary) var(--background-subtle)',
            WebkitOverflowScrolling: 'touch',
          }}
          role="list"
          tabIndex={0}
          aria-label="Timeline cards"
        >
          {periods.map((period, index) => {
            const config = periodConfig[period.period];
            return (
              <HorizontalCard
                key={index}
                period={period}
                index={index}
                isActive={activePeriod === index}
                config={config}
                onMouseEnter={() => setActivePeriod(index)}
                onReadMore={period.onReadMore}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}