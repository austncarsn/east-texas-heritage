import { Library, Users, BookOpen, Heart, ArrowLeft } from 'lucide-react';

interface AboutPageProps {
  onBack: () => void;
}

export function AboutPage({ onBack }: AboutPageProps) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      {/* Hero Section */}
      <div 
        className="relative overflow-hidden"
        style={{
          backgroundColor: 'var(--primary)',
          borderBottom: '3px solid var(--secondary)',
        }}
      >
        {/* Back Button */}
        <button
          onClick={onBack}
          className="absolute top-6 left-6 z-10 p-3 transition-all duration-200 hover:scale-105"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            cursor: 'pointer',
          }}
          aria-label="Back to home"
        >
          <ArrowLeft size={24} style={{ color: '#FFFFFF' }} />
        </button>

        <div className="absolute inset-0 opacity-10">
          <div 
            style={{
              backgroundImage: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(255,255,255,0.03) 2px,
                rgba(255,255,255,0.03) 4px
              )`,
              height: '100%',
              width: '100%',
            }}
          />
        </div>
        
        <div 
          className="relative"
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '120px 72px 80px',
          }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div 
              className="p-3"
              style={{
                backgroundColor: 'var(--secondary)',
              }}
            >
              <Library size={32} style={{ color: '#FFFFFF' }} />
            </div>
            <div 
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '12px',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'rgba(255, 255, 255, 0.9)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              About This Project
            </div>
          </div>

          <h1 
            style={{
              fontFamily: 'Satoshi, system-ui, sans-serif',
              fontSize: '56px',
              fontWeight: 'normal',
              color: '#FFFFFF',
              marginBottom: '24px',
              lineHeight: '1.1',
              letterSpacing: '0.01em',
            }}
          >
            Documenting the Stories of East Texas
          </h1>

          <p 
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '20px',
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '800px',
              lineHeight: '1.6',
            }}
          >
            A personal research effort to preserve the history, memory, and cultural identity of rural communities across East Texas.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div 
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '80px 72px',
        }}
      >
        {/* Mission Statement */}
        <div 
          className="mb-16 p-12"
          style={{
            backgroundColor: 'var(--surface)',
            border: '2px solid var(--document-border)',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <div className="flex items-start gap-6 mb-6">
            <div 
              className="p-3 flex-shrink-0"
              style={{
                backgroundColor: 'var(--primary)',
              }}
            >
              <Heart size={28} style={{ color: '#FFFFFF' }} />
            </div>
            <div>
              <h2 
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '28px',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--foreground)',
                  marginBottom: '16px',
                }}
              >
                Our Mission
              </h2>
              <p 
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '18px',
                  color: 'var(--foreground-muted)',
                  lineHeight: '1.7',
                }}
              >
                East Texas Heritage exists to document, preserve, and share the layered history of communities that shaped this region. Through careful research and archival work, we gather family records, local newspapers, photographs, oral histories, and material culture to create a lasting record of the people and places that define rural East Texas. This project is a labor of care—built to honor memory, strengthen community identity, and ensure that these stories remain accessible to future generations.
              </p>
            </div>
          </div>
        </div>

        {/* Three Column Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div 
            className="p-8"
            style={{
              backgroundColor: 'var(--surface)',
              border: '2px solid var(--document-border)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div 
              className="inline-flex p-3 mb-4"
              style={{
                backgroundColor: 'var(--period-settlement)',
              }}
            >
              <Library size={24} style={{ color: '#FFFFFF' }} />
            </div>
            <h3 
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '20px',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--foreground)',
                marginBottom: '12px',
              }}
            >
              Preservation
            </h3>
            <p 
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                color: 'var(--foreground-muted)',
                lineHeight: '1.6',
              }}
            >
              We collect and digitize historical materials—photographs, newspapers, documents, and oral traditions—to ensure their survival for generations to come.
            </p>
          </div>

          <div 
            className="p-8"
            style={{
              backgroundColor: 'var(--surface)',
              border: '2px solid var(--document-border)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div 
              className="inline-flex p-3 mb-4"
              style={{
                backgroundColor: 'var(--period-reconstruction)',
              }}
            >
              <Users size={24} style={{ color: '#FFFFFF' }} />
            </div>
            <h3 
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '20px',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--foreground)',
                marginBottom: '12px',
              }}
            >
              Community
            </h3>
            <p 
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                color: 'var(--foreground-muted)',
                lineHeight: '1.6',
              }}
            >
              Every town in East Texas has a story. We document the lives, events, and places that shaped local identity, honoring the people who built these communities.
            </p>
          </div>

          <div 
            className="p-8"
            style={{
              backgroundColor: 'var(--surface)',
              border: '2px solid var(--document-border)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div 
              className="inline-flex p-3 mb-4"
              style={{
                backgroundColor: 'var(--period-modern)',
              }}
            >
              <BookOpen size={24} style={{ color: '#FFFFFF' }} />
            </div>
            <h3 
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '20px',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--foreground)',
                marginBottom: '12px',
              }}
            >
              Access
            </h3>
            <p 
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                color: 'var(--foreground-muted)',
                lineHeight: '1.6',
              }}
            >
              History should be available to everyone. We make archival materials freely accessible, organized, and searchable for researchers, families, and curious minds.
            </p>
          </div>
        </div>

        {/* Context Section */}
        <div 
          className="mb-16 p-12"
          style={{
            backgroundColor: 'var(--background-subtle)',
            border: '2px solid var(--document-border)',
          }}
        >
          <h2 
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '32px',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--foreground)',
              marginBottom: '24px',
            }}
          >
            What This Project Is
          </h2>

          <div className="space-y-6">
            <p 
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '17px',
                color: 'var(--foreground-muted)',
                lineHeight: '1.7',
              }}
            >
              East Texas Heritage is an independently developed research project, built over time through archival work, field research, and community collaboration. It is not affiliated with any government agency, tourism board, or commercial entity. This is a personal effort—driven by curiosity about place, respect for memory, and a belief that local history matters.
            </p>

            <p 
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '17px',
                color: 'var(--foreground-muted)',
                lineHeight: '1.7',
              }}
            >
              The region documented here encompasses small towns, rural crossroads, farmland, forests, and river valleys across East Texas. These communities were shaped by Indigenous peoples, European and American settlers, enslaved African Americans and their descendants, immigrant families, farmers, laborers, merchants, and countless others whose names may not appear in official records but whose presence shaped the land.
            </p>

            <p 
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '17px',
                color: 'var(--foreground-muted)',
                lineHeight: '1.7',
              }}
            >
              This project seeks to gather what remains: census records, probate files, newspaper clippings, family Bibles, land deeds, school yearbooks, church records, photographs, and the stories people still remember. It is an ongoing effort—incomplete, evolving, and built with care. The goal is not to romanticize the past, but to document it honestly and make it accessible.
            </p>

            <p 
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '17px',
                color: 'var(--foreground-muted)',
                lineHeight: '1.7',
              }}
            >
              We recognize that history is complex. It includes moments of resilience and community, but also violence, displacement, and systemic injustice. We strive to tell these stories with honesty and context, acknowledging that the past is not simple and that different communities experienced it differently.
            </p>
          </div>
        </div>

        {/* Call to Contribute */}
        <div 
          className="p-12 text-center"
          style={{
            backgroundColor: 'var(--surface)',
            border: '3px solid var(--secondary)',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <div 
            className="inline-flex p-4 mb-6"
            style={{
              backgroundColor: 'var(--secondary)',
            }}
          >
            <Library size={36} style={{ color: '#FFFFFF' }} />
          </div>

          <h2 
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '32px',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--foreground)',
              marginBottom: '16px',
            }}
          >
            Help Preserve Local History
          </h2>

          <p 
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '18px',
              color: 'var(--foreground-muted)',
              lineHeight: '1.7',
              maxWidth: '700px',
              margin: '0 auto 24px',
            }}
          >
            If you have photographs, documents, family records, or stories related to East Texas communities, we would be honored to help preserve them. Local knowledge strengthens this archive, and every contribution adds depth to our shared understanding of the region.
          </p>

          <div 
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '14px',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--foreground-muted)',
              letterSpacing: '0.03em',
            }}
          >
            Contact information and contribution guidelines available upon request.
          </div>
        </div>
      </div>
    </div>
  );
}