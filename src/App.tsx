import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TimelineNode } from './components/TimelineNode';
import { TimelineCard } from './components/TimelineCard';
import { DocumentCard } from './components/DocumentCard';
import { CommunityCard } from './components/CommunityCard';
import { HeritageButton } from './components/HeritageButton';
import { Footer } from './components/Footer';
import { InteractiveMap } from './components/InteractiveMap';
import { EnhancedTimeline } from './components/EnhancedTimeline';
import { GilmerPage } from './components/GilmerPage';
import { TalcoPage } from './components/TalcoPage';
import { DaingerfieldPage } from './components/DaingerfieldPage';
import { ParisPage } from './components/ParisPage';
import { JeffersonPage } from './components/JeffersonPage';
import { MountPleasantPage } from './components/MountPleasantPage';
import { HendersonPage } from './components/HendersonPage';
import { IndigenousPeoplesPage } from './components/IndigenousPeoplesPage';
import { EarlySettlementPage } from './components/EarlySettlementPage';
import { CivilWarEraPage } from './components/CivilWarEraPage';
import { ReconstructionGrowthPage } from './components/ReconstructionGrowthPage';
import { ModernHeritagePage } from './components/ModernHeritagePage';
import { AboutPage } from './components/AboutPage';
import { IconCatalogPage } from './components/IconCatalogPage';
import { SearchDialog } from './components/SearchDialog';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'about' | 'icons' | 'gilmer' | 'talco' | 'daingerfield' | 'paris' | 'jefferson' | 'mountpleasant' | 'henderson' | 'indigenous' | 'settlement' | 'civilwar' | 'reconstruction' | 'modern'>('home');
  const [searchOpen, setSearchOpen] = useState(false);

  // Scroll to top whenever the view changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [currentView]);

  if (currentView === 'gilmer') {
    return <GilmerPage onBack={() => setCurrentView('home')} onNavigate={(view) => setCurrentView(view as any)} />;
  }

  if (currentView === 'talco') {
    return <TalcoPage onBack={() => setCurrentView('home')} onNavigate={(view) => setCurrentView(view as any)} />;
  }

  if (currentView === 'daingerfield') {
    return <DaingerfieldPage onBack={() => setCurrentView('home')} onNavigate={(view) => setCurrentView(view as any)} />;
  }

  if (currentView === 'paris') {
    return <ParisPage onBack={() => setCurrentView('home')} onNavigate={(view) => setCurrentView(view as any)} />;
  }

  if (currentView === 'jefferson') {
    return <JeffersonPage onBack={() => setCurrentView('home')} onNavigate={(view) => setCurrentView(view as any)} />;
  }

  if (currentView === 'mountpleasant') {
    return <MountPleasantPage onBack={() => setCurrentView('home')} onNavigate={(view) => setCurrentView(view as any)} />;
  }

  if (currentView === 'henderson') {
    return <HendersonPage onBack={() => setCurrentView('home')} onNavigate={(view) => setCurrentView(view as any)} />;
  }

  if (currentView === 'indigenous') {
    return <IndigenousPeoplesPage onBack={() => setCurrentView('home')} />;
  }

  if (currentView === 'settlement') {
    return <EarlySettlementPage onBack={() => setCurrentView('home')} />;
  }

  if (currentView === 'civilwar') {
    return <CivilWarEraPage onBack={() => setCurrentView('home')} />;
  }

  if (currentView === 'reconstruction') {
    return <ReconstructionGrowthPage onBack={() => setCurrentView('home')} />;
  }

  if (currentView === 'modern') {
    return <ModernHeritagePage onBack={() => setCurrentView('home')} />;
  }

  if (currentView === 'about') {
    return <AboutPage onBack={() => setCurrentView('home')} />;
  }

  if (currentView === 'icons') {
    return <IconCatalogPage onBack={() => setCurrentView('home')} />;
  }
  
  const timelineData = [
    {
      year: 'Pre-1700s',
      title: 'Indigenous Peoples',
      description: 'The Caddo Confederacy and other indigenous nations establish thriving communities across the Piney Woods region.',
      period: 'indigenous' as const,
    },
    {
      year: '1820s-1840s',
      title: 'Early Settlement',
      description: 'European-American settlers establish homesteads, farms, and early trading posts throughout East Texas.',
      period: 'settlement' as const,
    },
    {
      year: '1861-1865',
      title: 'Civil War Era',
      description: 'East Texas communities navigate the challenges of the Civil War, providing resources and soldiers to the Confederate cause.',
      period: 'civil-war' as const,
    },
    {
      year: '1865-1900',
      title: 'Reconstruction & Growth',
      description: 'Post-war recovery brings railroad expansion, timber industry growth, and the establishment of many rural communities.',
      period: 'reconstruction' as const,
    },
    {
      year: '1900-Present',
      title: 'Modern Heritage',
      description: 'Communities adapt to changing times while preserving traditions, celebrating heritage, and honoring their deep roots.',
      period: 'modern' as const,
    },
  ];

  const documents = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1758885697486-e14fb9b6209d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwaGlzdG9yaWNhbCUyMGRvY3VtZW50JTIwYXJjaGl2ZXxlbnwxfHx8fDE3NjA4MDc0NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Historic Land Grant Document',
      date: 'March 15, 1847',
      category: 'Land Records',
      source: 'Cherokee County Archives',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1712229462134-ca2d5bc7e7ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBoYW5kd3JpdHRlbiUyMGxldHRlciUyMHNlcGlhfGVufDF8fHx8MTc2MDgwNzQ0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Correspondence from the Frontier',
      date: 'July 22, 1858',
      category: 'Letters',
      source: 'Smith County Historical Society',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1691339802304-6bcab1775d57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbnRpcXVlJTIwcGhvdG9ncmFwaCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MDgwNzQ0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Pioneer Family Portrait',
      date: 'Circa 1892',
      category: 'Photographs',
      source: 'Rusk County Museum',
    },
  ];

  return (
    <div style={{ backgroundColor: 'var(--background)' }}>
      <Header 
        onAboutClick={() => setCurrentView('about')} 
        onSearchClick={() => setSearchOpen(true)}
        onHomeClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onTimelineClick={() => {
          const element = document.getElementById('timeline');
          element?.scrollIntoView({ behavior: 'smooth' });
        }}
        onCommunitiesClick={() => {
          const element = document.getElementById('communities');
          element?.scrollIntoView({ behavior: 'smooth' });
        }}
        onMapClick={() => {
          const element = document.getElementById('map');
          element?.scrollIntoView({ behavior: 'smooth' });
        }}
      />
      
      <SearchDialog 
        open={searchOpen}
        onOpenChange={setSearchOpen}
        onNavigate={(view) => {
          setCurrentView(view as any);
        }}
      />
      
      <Hero
        onExploreCommunities={() => {
          const element = document.getElementById('communities');
          element?.scrollIntoView({ behavior: 'smooth' });
        }}
        onViewMap={() => {
          const element = document.getElementById('map');
          element?.scrollIntoView({ behavior: 'smooth' });
        }}
        onCommunityClick={(community) => {
          setCurrentView(community as any);
        }}
      />
      
      {/* Timeline Preview Section */}
      <section 
        id="timeline"
        className="scroll-animate"
        style={{
          paddingTop: 'var(--section-spacing)',
          paddingBottom: 'var(--section-spacing)',
        }}
      >
        <div className="mx-auto px-[72px] max-w-[1400px]">
          <div className="mb-12">
            <h2 className="mb-4" style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'var(--font-size-2xl)',
              fontWeight: 'var(--font-weight-bold)',
              lineHeight: 'var(--line-height-snug)',
              color: 'var(--foreground)',
            }}>
              Journey Through Time
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--font-size-lg)',
              lineHeight: 'var(--line-height-normal)',
              color: 'var(--foreground-muted)',
              maxWidth: '600px',
            }}>
              Explore the pivotal moments that shaped East Texas heritage, from indigenous roots to modern-day communities.
            </p>
          </div>
          
          <EnhancedTimeline 
            periods={[
              {
                year: 'Pre-1700s',
                title: 'Indigenous Peoples',
                description: 'The Caddo Confederacy and other indigenous nations establish thriving communities across the Piney Woods region.',
                period: 'indigenous',
                highlights: [
                  'Caddo Confederacy established complex societies',
                  'Agricultural settlements throughout Piney Woods',
                  'Extensive trade networks across the region',
                ],
                onReadMore: () => setCurrentView('indigenous'),
              },
              {
                year: '1820s-1840s',
                title: 'Early Settlement',
                description: 'European-American settlers establish homesteads, farms, and early trading posts throughout East Texas.',
                period: 'settlement',
                highlights: [
                  'First permanent settlements established',
                  'Trading posts become community centers',
                  'Cotton farming begins to take hold',
                ],
                onReadMore: () => setCurrentView('settlement'),
              },
              {
                year: '1861-1865',
                title: 'Civil War Era',
                description: 'East Texas communities navigate the challenges of the Civil War, providing resources and soldiers to the Confederate cause.',
                period: 'civil-war',
                highlights: [
                  'Iron production in Daingerfield supports war effort',
                  'Local communities provide supplies and soldiers',
                  'Significant social and economic changes',
                ],
                onReadMore: () => setCurrentView('civilwar'),
              },
              {
                year: '1865-1900',
                title: 'Reconstruction & Growth',
                description: 'Post-war recovery brings railroad expansion, timber industry growth, and the establishment of many rural communities.',
                period: 'reconstruction',
                highlights: [
                  'Railroad networks connect communities',
                  'Timber industry flourishes in Piney Woods',
                  'New towns established along rail lines',
                ],
                onReadMore: () => setCurrentView('reconstruction'),
              },
              {
                year: '1900-Present',
                title: 'Modern Heritage',
                description: 'Communities adapt to changing times while preserving traditions, celebrating heritage, and honoring their deep roots.',
                period: 'modern',
                highlights: [
                  'Oil boom transforms local economies',
                  'Historic preservation efforts begin',
                  'Heritage tourism becomes important',
                ],
                onReadMore: () => setCurrentView('modern'),
              },
            ]}
          />
        </div>
      </section>
      
      {/* Featured Communities Section */}
      <section 
        id="communities"
        className="scroll-animate-delay-1"
        style={{
          paddingTop: 'var(--section-spacing)',
          paddingBottom: 'var(--section-spacing)',
          backgroundColor: 'var(--background-subtle)',
        }}
      >
        <div className="mx-auto px-[72px] max-w-[1400px]">
          <div className="mb-12">
            <h2 className="mb-4" style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'var(--font-size-2xl)',
              fontWeight: 'var(--font-weight-bold)',
              lineHeight: 'var(--line-height-snug)',
              color: 'var(--foreground)',
            }}>
              Featured Communities
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--font-size-lg)',
              lineHeight: 'var(--line-height-normal)',
              color: 'var(--foreground-muted)',
              maxWidth: '600px',
            }}>
              Explore the towns and communities that form the heart of East Texas heritage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CommunityCard
              name="Gilmer"
              county="Upshur County"
              established="1846"
              description="From a frontier court under oak trees to a regional hub shaped by cotton, timber, oil, and agriculture. Home of the East Texas Yamboree."
              onClick={() => setCurrentView('gilmer')}
            />
            
            <CommunityCard
              name="Talco"
              county="Titus County (Franklin County line)"
              established="1856 (as Gouldsboro), 1910 (renamed)"
              description="From ranching community to relocated railroad town (1912) to explosive oil boomtown. 'Asphalt capital of the world' after the 1936 Peveto discovery well."
              onClick={() => setCurrentView('talco')}
            />
            
            <CommunityCard
              name="Daingerfield"
              county="Morris County"
              established="1841"
              description="Fourth-oldest town in Texas, from Republic of Texas county seat to Civil War iron production to massive Lone Star Steel complex. Home to Morris Sheppard, 'Father of Prohibition.'"
              onClick={() => setCurrentView('daingerfield')}
            />
            
            <CommunityCard
              name="Paris"
              county="Lamar County"
              established="1844 (incorporated 1845)"
              description="From Republic of Texas county seat to railroad hub served by five lines. Survived three devastating fires including the 1916 Great Fire that created one of America's largest 1916 architecture collections. Home to the 65-foot Eiffel Tower with red cowboy hat."
              onClick={() => setCurrentView('paris')}
            />
            
            <CommunityCard
              name="Jefferson"
              county="Marion County"
              established="1842 (incorporated 1848)"
              description="From frontier settlement to Texas's sixth-largest city (1872) as westernmost Red River steamboat port. Precipitous decline after 1873 raft removal. Now heritage tourism capital with 107-acre Historic District of 56 structures."
              onClick={() => setCurrentView('jefferson')}
            />
            
            <CommunityCard
              name="Mount Pleasant"
              county="Titus County"
              established="1846 (county seat); 1848 (incorporated)"
              description="'Hub of Northeast Texas' from Caddo 'pleasant mound' to railroad convergence. Health resort era (1908-1915) at red mineral springs. Oil boom headquarters (1936). Famous for 'ugliest courthouse in Texas' (1961-1991) and Ray Price, Country Music Hall of Fame."
              onClick={() => setCurrentView('mountpleasant')}
            />
            
            <CommunityCard
              name="Henderson"
              county="Rusk County"
              established="1843"
              description="From Caddo lands to Texas's largest county (1860) with cotton-driven wealth. 1860 fire during slave insurrection panic helped inflame secession. Dad Joiner's 1930 oil discovery transformed town from 2,000 to 10,000 overnight, creating largest U.S. oilfield. Home to Bill Moyers and Sacred Harp Convention."
              onClick={() => setCurrentView('henderson')}
            />
            
            <div 
              className="flex items-center justify-center"
              style={{
                backgroundColor: 'var(--surface)',
                borderRadius: 'var(--radius-lg)',
                padding: '32px',
                border: '1px dashed var(--divider)',
              }}
            >
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                color: 'var(--foreground-subtle)',
                textAlign: 'center',
              }}>
                More communities coming soon
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Document Gallery Section */}
      {/* <section 
        id="archives"
        style={{
          paddingTop: 'var(--section-spacing)',
          paddingBottom: 'var(--section-spacing)',
          backgroundColor: 'var(--background)',
        }}
      >
        <div className="mx-auto px-[72px] max-w-[1400px]">
          <div className="mb-12">
            <h2 className="mb-4" style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'var(--font-size-2xl)',
              fontWeight: 'var(--font-weight-bold)',
              lineHeight: 'var(--line-height-snug)',
              color: 'var(--foreground)',
            }}>
              Featured Documents
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--font-size-lg)',
              lineHeight: 'var(--line-height-normal)',
              color: 'var(--foreground-muted)',
              maxWidth: '600px',
            }}>
              Discover authentic historical records, photographs, and correspondence from our extensive archive collection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <DocumentCard key={index} {...doc} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <HeritageButton variant="secondary">
              Browse Full Archive
            </HeritageButton>
          </div>
        </div>
      </section> */}
      
      {/* Regional Map CTA Section */}
      <section 
        id="map"
        className="scroll-animate-delay-2"
        style={{
          paddingTop: 'var(--section-spacing)',
          paddingBottom: 'var(--section-spacing)',
        }}
      >
        <div className="mx-auto px-[72px] max-w-[1400px]">
          <div className="mb-12">
            <h2 className="mb-4" style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'var(--font-size-2xl)',
              fontWeight: 'var(--font-weight-bold)',
              lineHeight: 'var(--line-height-snug)',
              color: 'var(--foreground)',
            }}>
              Interactive Heritage Map
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--font-size-lg)',
              lineHeight: 'var(--line-height-normal)',
              color: 'var(--foreground-muted)',
              maxWidth: '600px',
            }}>
              Navigate through counties and communities across East Texas. Click on any location to explore its heritage and history.
            </p>
          </div>

          <InteractiveMap
            communities={[
              {
                name: 'Paris',
                county: 'Lamar County',
                x: 28,
                y: 24,
                population: '24,505',
                established: '1844',
                onClick: () => setCurrentView('paris'),
              },
              {
                name: 'Mount Pleasant',
                county: 'Titus County',
                x: 35,
                y: 50,
                population: '15,734',
                established: '1846',
                onClick: () => setCurrentView('mountpleasant'),
              },
              {
                name: 'Gilmer',
                county: 'Upshur County',
                x: 35,
                y: 75,
                population: '4,843',
                established: '1846',
                onClick: () => setCurrentView('gilmer'),
              },
              {
                name: 'Jefferson',
                county: 'Marion County',
                x: 70,
                y: 62,
                population: '1,934',
                established: '1842',
                onClick: () => setCurrentView('jefferson'),
              },
              {
                name: 'Daingerfield',
                county: 'Morris County',
                x: 48,
                y: 55,
                population: '2,316',
                established: '1841',
                onClick: () => setCurrentView('daingerfield'),
              },
              {
                name: 'Talco',
                county: 'Titus County',
                x: 43,
                y: 38,
                population: '450',
                established: '1856',
                onClick: () => setCurrentView('talco'),
              },
              {
                name: 'Henderson',
                county: 'Rusk County',
                x: 40,
                y: 88,
                population: '13,271',
                established: '1843',
                onClick: () => setCurrentView('henderson'),
              },
            ]}
          />
        </div>
      </section>
      
      <Footer onNavigate={(page) => setCurrentView(page as any)} />
    </div>
  );
}