interface ArchitectureEntry {
  name: string;
  year: string;
  style: string;
  originalUse: string;
  status: string;
}

interface ArchitectureTableProps {
  entries: ArchitectureEntry[];
}

export function ArchitectureTable({ entries }: ArchitectureTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full" style={{
        backgroundColor: 'var(--surface)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--document-border)',
        overflow: 'hidden',
      }}>
        <thead>
          <tr style={{
            backgroundColor: 'var(--background-subtle)',
            borderBottom: '2px solid var(--divider)',
          }}>
            <th style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '14px',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--foreground)',
              textAlign: 'left',
              padding: '16px 20px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              Name
            </th>
            <th style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '14px',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--foreground)',
              textAlign: 'left',
              padding: '16px 20px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              Year
            </th>
            <th style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '14px',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--foreground)',
              textAlign: 'left',
              padding: '16px 20px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              Style
            </th>
            <th style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '14px',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--foreground)',
              textAlign: 'left',
              padding: '16px 20px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              Original Use
            </th>
            <th style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '14px',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--foreground)',
              textAlign: 'left',
              padding: '16px 20px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr 
              key={index}
              className="transition-colors hover:bg-[var(--background-subtle)]"
              style={{
                borderBottom: index < entries.length - 1 ? '1px solid var(--divider)' : 'none',
              }}
            >
              <td style={{
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--foreground)',
                padding: '16px 20px',
              }}>
                {entry.name}
              </td>
              <td style={{
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                color: 'var(--foreground-muted)',
                padding: '16px 20px',
              }}>
                {entry.year}
              </td>
              <td style={{
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                color: 'var(--foreground-muted)',
                padding: '16px 20px',
              }}>
                {entry.style}
              </td>
              <td style={{
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                color: 'var(--foreground-muted)',
                padding: '16px 20px',
              }}>
                {entry.originalUse}
              </td>
              <td style={{
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                padding: '16px 20px',
              }}>
                <span 
                  className="inline-block px-3 py-1"
                  style={{
                    fontSize: '12px',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: entry.status.toLowerCase().includes('active') 
                      ? 'var(--primary)' 
                      : entry.status.toLowerCase().includes('demolished')
                      ? 'var(--foreground-subtle)'
                      : 'var(--secondary)',
                    backgroundColor: 'var(--background-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  {entry.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
