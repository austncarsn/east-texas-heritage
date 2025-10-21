import { Header } from './Header';
import { CommunityHero } from './CommunityHero';
import { ContentSection } from './ContentSection';
import { ArchitectureTable } from './ArchitectureTable';
import { NotablePerson } from './NotablePerson';
import { HistoricalTimeline } from './HistoricalTimeline';
import { Footer } from './Footer';

interface GilmerPageProps {
  onBack?: () => void;
  onNavigate?: (page: string) => void;
}

export function GilmerPage({ onBack, onNavigate }: GilmerPageProps) {
  const architectureData = [
    {
      name: 'Upshur County Courthouse',
      year: '1937',
      style: 'PWA Moderne',
      originalUse: 'County courthouse',
      status: 'Active courthouse',
    },
    {
      name: 'Bethesda Masonic Lodge No. 142',
      year: '1853',
      style: 'Greek Revival (uncertain)',
      originalUse: 'Masonic lodge & academy',
      status: 'Private/community use',
    },
    {
      name: 'Looney Male Academy Building',
      year: '1854',
      style: 'Vernacular Academy',
      originalUse: 'School',
      status: 'Marker only',
    },
    {
      name: 'Gilmer Mirror Building',
      year: 'c. 1915',
      style: 'Early Commercial',
      originalUse: 'Newspaper office',
      status: 'Active newspaper office',
    },
    {
      name: 'First United Methodist Church',
      year: 'c. 1880',
      style: 'Gothic Revival',
      originalUse: 'Church',
      status: 'Active congregation',
    },
    {
      name: 'Old Gilmer Site Historic Marker',
      year: '1846',
      style: 'Historical marker',
      originalUse: 'Original courthouse site',
      status: 'Marker',
    },
    {
      name: 'Fox Stephens Field Terminal',
      year: '1969',
      style: 'Mid-Century Modern',
      originalUse: 'Airport terminal',
      status: 'Aviation museum & terminal',
    },
    {
      name: 'Lake Gilmer Dam',
      year: '2001',
      style: 'Civil Engineering Vern.',
      originalUse: 'Flood control & recreation',
      status: 'Recreation area',
    },
    {
      name: 'Upshur County Library',
      year: '1960s',
      style: 'Modernist',
      originalUse: 'Public library',
      status: 'Active library',
    },
    {
      name: 'Gilmer High School Building',
      year: '1938',
      style: 'PWA Moderne',
      originalUse: 'School',
      status: 'Educational facility',
    },
    {
      name: 'East Texas Yamboree Grounds',
      year: '1935',
      style: 'Fairgrounds Vernacular',
      originalUse: 'Festival site & agriculture',
      status: 'Annual festival',
    },
    {
      name: 'Jenks House (historic private home)',
      year: 'c. 1900',
      style: 'Queen Anne (uncertain)',
      originalUse: 'Private residence',
      status: 'Private residence',
    },
  ];

  const notablePeople = [
    {
      name: 'Chilton Jennings',
      years: '1919',
      description: 'Victim of racial terror lynching in Gilmer town square by a white mob, a documented racial atrocity of the Jim Crow era.',
    },
  ];

  const timelineEvents = [
    { year: '1846 Dec 15', event: 'Temporary county seat designated in oak grove at Hart\'s residence.' },
    { year: '1847', event: 'Gilmer post office opens.' },
    { year: '1853', event: 'Bethesda Masonic Lodge chartered.' },
    { year: '1854', event: 'Looney Male Academy established.' },
    { year: '1877', event: 'Upshur County Democrat newspaper founded (later Gilmer Mirror).' },
    { year: '1919', event: 'Lynching of Chilton Jennings in town square.' },
    { year: '1935', event: 'East Texas Yamboree first held.' },
    { year: '1937', event: 'Current courthouse completed under PWA.' },
    { year: '1969', event: 'Fox Stephens Field airport opened.' },
    { year: '1980', event: 'Population peaks at 5,167.' },
    { year: '2001', event: 'Lake Gilmer opens for recreation.' },
    { year: '2020', event: 'Population 4,843; median age 37.2.' },
  ];

  const interestingFacts = [
    'Named for Thomas W. Gilmer, who died aboard USS Princeton in 1844.',
    'Arrowheads from Caddo habitation are found with minimal digging.',
    'Gilmer once had six cotton gins operating into the 1950s.',
    'The Gilmer Mirror has been published continuously since 1877.',
    'The 1919 lynching drew a mob of about 1,000 residents.',
    'The courthouse was funded by New Deal PWA grants.',
    'Lake Gilmer spans 1,010 surface acres for fishing and trails.',
    'The Yamboree grounds were initially built by WPA crews.',
    'Fox Stephens Field terminal doubles as a Flight of the Phoenix Aviation Museum.',
    "Looney Academy's building site is marked but no longer standing.",
    'Upshur County Library digitized local newspapers via the UNT Portal.',
    'Gilmer sits at the crossroads of three U.S. and state highways (271, 155, 154).',
  ];

  return (
    <div style={{ backgroundColor: 'var(--background)' }}>
      <Header 
        onHomeClick={() => onNavigate && onNavigate('home')}
        onTimelineClick={() => {
          const element = document.getElementById('timeline');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          } else {
            onNavigate && onNavigate('home');
            setTimeout(() => {
              const el = document.getElementById('timeline');
              el?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }
        }}
        onCommunitiesClick={() => {
          onNavigate && onNavigate('home');
          setTimeout(() => {
            const element = document.getElementById('communities');
            element?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }}
        onMapClick={() => {
          onNavigate && onNavigate('home');
          setTimeout(() => {
            const element = document.getElementById('map');
            element?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }}
      />
      
      <CommunityHero
        communityName="Gilmer"
        county="Upshur County"
        established="1846"
        onBack={onBack}
      />
      
      {/* Overview Section */}
      <section style={{
        paddingTop: 'var(--section-spacing)',
        paddingBottom: 'var(--section-spacing)',
      }}>
  <div className="mx-auto px-4 sm:px-6 md:px-12 lg:px-[72px] max-w-[1400px]">
          <div className="max-w-[900px]">
            <h2 className="mb-6" style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'var(--font-size-2xl)',
              fontWeight: 'var(--font-weight-bold)',
              lineHeight: 'var(--line-height-snug)',
              color: 'var(--foreground)',
            }}>
              Overview
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--font-size-base)',
              lineHeight: 'var(--line-height-normal)',
              color: 'var(--foreground-muted)',
            }}>
              Gilmer, Texas, county seat of Upshur County, began as mid-19th-century frontier settlement and evolved through cotton, timber, and sweet-potato agriculture into a railroad and courthouse town, later diversifying into manufacturing and community festivals. With a 2020 population of 4,843, it balances historic preservation, annual East Texas Yamboree celebrations, and civic services today.
            </p>
          </div>
        </div>
      </section>
      
      {/* Historical Sections */}
      <ContentSection title="Indigenous and Early Settlement" background="subtle">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            The area lies on the Old Cherokee Trace, used by the Kadohadacho band of the Caddo Nation for hunting and travel, evidenced by surface arrowheads along creeks. Anglo settlement followed the 1846 creation of Upshur County, named for Secretary of State Abel P. Upshur.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Founding and 19th Century">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            On December 15, 1846, Judge Oran M. Roberts designated a grove of oak trees at William H. Hart's residence as the temporary county seat, later moved to the surveyed five-mile-radius center and named Gilmer in honor of Secretary of the Navy Thomas W. Gilmer. The post office opened in 1847. By 1860 Gilmer hosted 25 businesses, multiple physicians, two academies, and cotton gins, anchoring a rural trading center.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="1900s–1945" background="subtle">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            Railroads arrived early: Texas & Pacific (1873), Texas Midland (1893), and Kansas City Southern (1904), spurring commercial growth along Tyler and College streets. Gilmer became the cotton-ginning capital with six gins operating into the 1950s. In 1919 a racial terror lynching occurred in the town square, reflecting Jim Crow tensions. The Gilmer Mirror newspaper, founded as <em>Upshur County Democrat</em> in 1877, chronicled local developments and remains in print.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Postwar to Late 20th Century">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            Post-WWII saw the decline of small-scale ginning and rise of timber harvesting. Population rose from 3,138 in 1940 to a mid-century peak of 5,167 in 1980, then stabilized near 4,800 as local manufacturing and services grew modestly.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="2000s–Present" background="subtle">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            As of 2020 Gilmer had 4,843 residents, median household income $38,821, and 19.4 percent living below poverty. The East Texas Yamboree, established in 1935, attracts some 100,000 visitors each October. Lake Gilmer opened in 2001, adding recreation and conservation amenities.
          </p>
        </div>
      </ContentSection>
      
      {/* Notable People */}
      <ContentSection title="Notable People and Events">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1200px]">
          {notablePeople.map((person, index) => (
            <NotablePerson key={index} {...person} />
          ))}
          
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
                <h4 className="mb-2" style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '20px',
                  fontWeight: 'var(--font-weight-bold)',
                  lineHeight: '1.3',
                  color: 'var(--foreground)',
                }}>
                  East Texas Yamboree
                </h4>
                
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  lineHeight: 'var(--line-height-normal)',
                  color: 'var(--foreground-muted)',
                }}>
                  Established in 1935, one of Texas's longest-running agricultural festivals, attracting 100,000 visitors annually.
                </p>
              </div>
            </div>
          </div>
          
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
                <h4 className="mb-2" style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '20px',
                  fontWeight: 'var(--font-weight-bold)',
                  lineHeight: '1.3',
                  color: 'var(--foreground)',
                }}>
                  Fox Stephens Field
                </h4>
                
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  lineHeight: 'var(--line-height-normal)',
                  color: 'var(--foreground-muted)',
                }}>
                  Dedicated in 1969, supports local aviation and industry recruitment with Flight of the Phoenix Aviation Museum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
      
      {/* Architecture and Landmarks */}
      <ContentSection title="Architecture and Landmarks" background="subtle">
        <ArchitectureTable entries={architectureData} />
      </ContentSection>
      
      {/* Economy and Industry */}
      <ContentSection title="Economy and Industry">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            Gilmer's economy began with cotton ginning and leather goods for the Confederacy, then timber harvests and sweet-potato farming dominated until mid-20th century. Modern employers include healthcare, education, light manufacturing, and event tourism centering on the Yamboree.
          </p>
        </div>
      </ContentSection>
      
      {/* Culture and Education */}
      <ContentSection title="Culture and Education" background="subtle">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            Education is provided by Gilmer ISD; the Gilmer Mirror archives and Upshur County Library preserve local history. Cultural life revolves around church events, the Yamboree, and community festivals at Lake Gilmer.
          </p>
        </div>
      </ContentSection>
      
      {/* Timeline */}
      <ContentSection title="Timeline">
        <HistoricalTimeline events={timelineEvents} />
      </ContentSection>
      
      {/* Interesting Facts */}
      <ContentSection title="Interesting Facts" background="subtle">
        <div className="max-w-[900px]">
          <div className="grid grid-cols-1 gap-4">
            {interestingFacts.map((fact, index) => (
              <div 
                key={index}
                className="flex gap-4 items-start"
                style={{
                  backgroundColor: 'var(--surface)',
                  borderRadius: 'var(--radius-md)',
                  padding: '16px 20px',
                  border: '1px solid var(--document-border)',
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '14px',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--secondary)',
                  flexShrink: 0,
                  minWidth: '24px',
                }}>
                  {index + 1}.
                </span>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  lineHeight: 'var(--line-height-normal)',
                  color: 'var(--foreground-muted)',
                }}>
                  {fact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>
      
      {/* Summary */}
      <ContentSection title="Summary">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            Gilmer's origins as an 1846 frontier county seat on the Old Cherokee Trace evolved through plantation-era cotton ginning, post-Civil War schooling at Looney Academy, and a long-running newspaper tradition. Railroad links cemented its commercial role while PWA projects shaped its Moderne courthouse and school buildings. The East Texas Yamboree and Lake Gilmer now anchor cultural and recreational life, even as a sobering 1919 lynching reminds of past injustices. With under 5,000 residents, Gilmer balances heritage preservation—through markers, archives, and historic structures—with modern services at Fox Stephens Field and the Upshur County Library, reflecting resilience amid East Texas's economic shifts.
          </p>
        </div>
      </ContentSection>
      
      <Footer />
    </div>
  );
}