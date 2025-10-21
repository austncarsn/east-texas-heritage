import { Clock } from 'lucide-react';

interface TimelinePeriod {
  id: string;
  title: string;
  years: string;
  description: string;
}

interface TimelineNavigatorProps {
  onPeriodClick: (periodId: string) => void;
}

export function TimelineNavigator({ onPeriodClick }: TimelineNavigatorProps) {
  const periods: TimelinePeriod[] = [
    {
      id: 'indigenous',
      title: 'Indigenous Peoples',
      years: 'Pre-1700s',
      description: 'Caddo Confederacy and indigenous nations',
    },
    {
      id: 'settlement',
      title: 'Early Settlement',
      years: '1820s-1840s',
      description: 'European-American homesteads and trading posts',
    },
    {
      id: 'civilwar',
      title: 'Civil War Era',
      years: '1850s-1870s',
      description: 'Conflict and transformation',
    },
    {
      id: 'reconstruction',
      title: 'Reconstruction & Growth',
      years: '1870s-1900s',
      description: 'Railroad expansion and economic development',
    },
    {
      id: 'modern',
      title: 'Modern Heritage',
      years: '1900s-Present',
      description: 'Oil boom and contemporary preservation',
    },
  ];

  return (
    <div
      style={{
        backgroundColor: 'var(--heritage-brown)',
        borderTop: '1px solid rgba(0, 0, 0, 0.3)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
      }}
    >
  <div className="mx-auto px-4 sm:px-6 md:px-12 lg:px-[72px] max-w-[1400px] py-6 sm:py-8">
        <div className="flex items-center gap-3 mb-6">
          <Clock size={20} style={{ color: '#4a6a22' }} />
          <h3
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '14px',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'rgba(255, 255, 255, 0.7)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Explore Historical Periods
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {periods.map((period) => (
            <button
              key={period.id}
              onClick={() => onPeriodClick(period.id)}
              className="group text-left transition-all duration-200 hover:translate-y-[-2px]"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '16px',
                cursor: 'pointer',
              }}
            >
              <div
                className="mb-1"
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '11px',
                  color: '#4a6a22',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                {period.years}
              </div>
              <div
                className="mb-2 group-hover:text-white transition-colors"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '16px',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'rgba(255, 255, 255, 0.9)',
                  lineHeight: '1.3',
                }}
              >
                {period.title}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  color: 'rgba(255, 255, 255, 0.5)',
                  lineHeight: '1.4',
                }}
              >
                {period.description}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
