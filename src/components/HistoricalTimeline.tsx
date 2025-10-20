interface TimelineEvent {
  year: string;
  event: string;
}

interface HistoricalTimelineProps {
  events: TimelineEvent[];
}

export function HistoricalTimeline({ events }: HistoricalTimelineProps) {
  return (
    <div className="relative">
      {/* Timeline Track */}
      <div 
        className="absolute left-[10px] top-4 bottom-4 hidden md:block"
        style={{
          width: '2px',
          backgroundColor: 'var(--timeline-track)',
        }}
      />
      
      {/* Timeline Events */}
      <div className="space-y-4">
        {events.map((event, index) => (
          <div key={index} className="flex gap-6 items-start">
            {/* Timeline Node */}
            <div className="hidden md:flex flex-shrink-0 mt-1">
              <div 
                className="rounded-full"
                style={{
                  width: '12px',
                  height: '12px',
                  backgroundColor: 'var(--timeline-node)',
                  border: '2px solid var(--surface)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              />
            </div>
            
            {/* Event Content */}
            <div 
              className="flex-1 pb-4"
              style={{
                borderBottom: index < events.length - 1 ? '1px solid var(--divider)' : 'none',
              }}
            >
              <div className="flex gap-6 items-baseline flex-wrap">
                <span 
                  className="flex-shrink-0"
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: '16px',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--secondary)',
                    minWidth: '100px',
                  }}
                >
                  {event.year}
                </span>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  lineHeight: 'var(--line-height-normal)',
                  color: 'var(--foreground-muted)',
                  flex: 1,
                  minWidth: '200px',
                }}>
                  {event.event}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
