import { Header } from './Header';
import { CommunityHero } from './CommunityHero';
import { ContentSection } from './ContentSection';
import { ArchitectureTable } from './ArchitectureTable';
import { NotablePerson } from './NotablePerson';
import { HistoricalTimeline } from './HistoricalTimeline';
import { Footer } from './Footer';

interface DaingerfieldPageProps {
  onBack?: () => void;
  onNavigate?: (page: string) => void;
}

export function DaingerfieldPage({ onBack, onNavigate }: DaingerfieldPageProps) {
  const architectureData = [
    {
      name: 'Old Morris County Courthouse',
      year: '1882',
      style: 'Classical Revival/Italianate',
      originalUse: 'County courthouse',
      status: 'NRHP listed; law office',
    },
    {
      name: 'Current Morris County Courthouse',
      year: '1973',
      style: 'Modern/Brutalist',
      originalUse: 'County courthouse',
      status: 'Active courthouse',
    },
    {
      name: 'Chapel Hill College Site',
      year: '1852',
      style: 'Brick (demolished)',
      originalUse: 'Cumberland Presbyterian college',
      status: 'Historical marker',
    },
    {
      name: 'Cumberland Presbyterian Church',
      year: 'circa 1849',
      style: 'Vernacular frame',
      originalUse: 'Church worship',
      status: 'Active congregation',
    },
    {
      name: 'Daingerfield State Park (CCC)',
      year: '1935-1938',
      style: 'CCC Rustic/Modern Concrete',
      originalUse: 'Public recreation park',
      status: 'Active state park',
    },
    {
      name: 'State Park Combination Building',
      year: '1935-1938',
      style: 'CCC Modern Concrete',
      originalUse: 'Bathhouse & concession',
      status: 'Recreation hall & store',
    },
    {
      name: 'State Park Bass Lodge',
      year: '1935-1938',
      style: 'CCC Rustic',
      originalUse: 'Park lodge',
      status: 'Active lodge',
    },
    {
      name: 'State Park Boat House',
      year: '1935-1938',
      style: 'CCC Modern Concrete',
      originalUse: 'Boat storage',
      status: 'Active boathouse',
    },
    {
      name: 'First Methodist Church',
      year: '1856/1928/1936',
      style: 'Brick',
      originalUse: 'Methodist worship',
      status: 'Active congregation',
    },
    {
      name: 'Snow Hill Baptist Church',
      year: '1852/1871',
      style: 'Vernacular frame',
      originalUse: 'Baptist church & school',
      status: 'Active congregation',
    },
    {
      name: 'Concord Meeting House',
      year: 'circa 1860',
      style: 'Vernacular frame',
      originalUse: 'Church, school, voting',
      status: 'Active Baptist church',
    },
    {
      name: 'Lone Star Steel Plant Complex',
      year: '1942-1947',
      style: 'Industrial',
      originalUse: 'Steel & iron production',
      status: 'Closed 2016',
    },
    {
      name: 'Johns Hopkins Applied Physics Lab',
      year: '1945-1968',
      style: 'Industrial/Military',
      originalUse: 'Secret Cold War research',
      status: 'Demolished',
    },
    {
      name: 'Daingerfield Spring Site',
      year: 'Pre-1740',
      style: 'Natural spring',
      originalUse: 'Water source & battle site',
      status: 'Unknown',
    },
    {
      name: 'Hussey & Logan Mill & Gin',
      year: 'Unknown',
      style: 'Industrial',
      originalUse: 'Mill and cotton gin',
      status: 'Historical marker',
    },
  ];

  const notablePeople = [
    {
      name: 'Morris Sheppard',
      years: '1875-1941',
      description: 'U.S. Senator and author of the 18th Amendment establishing national Prohibition, known as "the Father of Prohibition." Born in Morris County, served in Congress and Senate for 42 years.',
    },
    {
      name: 'Oscar Branch Colquitt',
      years: '1861-1940',
      description: '25th Governor of Texas (1911-1915). Though born in Georgia, he lived in Daingerfield and is associated with Morris County politics and development.',
    },
    {
      name: 'Thomas Everett',
      years: 'b. 1964',
      description: 'NFL safety who played nine seasons for the Pittsburgh Steelers, Dallas Cowboys, and Tampa Bay Buccaneers. Helped Dallas win two Super Bowls in 1992 and 1993.',
    },
    {
      name: 'Jim Gilstrap',
      years: 'b. 1946',
      description: 'Prolific session musician and singer, best known for his 1975 solo hit "Swing Your Daddy" and singing co-lead on the theme from the TV series Good Times.',
    },
  ];

  const timelineEvents = [
    { year: 'circa 1740', event: 'First documented European visitors camped near spring at present town center.' },
    { year: '1830', event: 'Capt. London Daingerfield killed in battle with Indians near spring; town named in his honor.' },
    { year: '1840', event: 'S. R. Shaddick started first school.' },
    { year: '1841', event: 'Town designated county seat of Paschal County (judicial county of Republic of Texas).' },
    { year: '1846', event: 'Post office opened; John Greene Chambers named first U.S. postmaster.' },
    { year: 'circa 1850', event: 'Sylvia Academy (private girls\' school) opened.' },
    { year: '1852 Feb', event: 'Chapel Hill College chartered and opened in brick building.' },
    { year: '1875 Mar 13', event: 'Morris County formed from Titus County.' },
    { year: '1875 May 12', event: 'Morris County organized with Daingerfield as county seat.' },
    { year: '1877', event: 'Louisiana, Arkansas and Texas Railroad laid track half mile southeast of original town.' },
    { year: '1879', event: 'Large fire destroyed most of original town; businesses relocated to railhead.' },
    { year: '1882', event: 'Morris County Courthouse built by Peterson & Stuckey for $5,500.' },
    { year: '1913', event: 'Incorporation election held; vote of 75 for, 64 against.' },
    { year: '1935', event: 'Private owners deeded land to state for Daingerfield State Park.' },
    { year: '1935-1938', event: 'CCC Company 2891 (white) and Company 1801 (black) built state park facilities.' },
    { year: '1938', event: 'Daingerfield State Park opened to public.' },
    { year: '1942', event: 'Lone Star Steel Company founded; federal defense plant construction began.' },
    { year: '1945-1968', event: 'Johns Hopkins Applied Physics Laboratory secret Cold War research facility operated.' },
    { year: '1947', event: 'Lone Star Steel produced first pig iron.' },
    { year: '1973', event: 'New Morris County Courthouse built by Pierce, Pace & Associates.' },
    { year: '2007', event: 'U.S. Steel acquired Lone Star Steel for $2.1 billion.' },
    { year: '2016', event: 'U.S. Steel permanently closed sections of Lone Star Steel facility.' },
  ];

  const interestingFacts = [
    'Fourth-oldest town in Texas with continuous settlement dating from the early 1840s.',
    'Named after Captain London Daingerfield, killed in an 1830 battle with Indians near a spring.',
    'Morris Sheppard, author of the 18th Amendment (Prohibition), was born here in 1875.',
    'A secret Cold War research facility (1945-1968) conducted supersonic wind tunnel experiments for missile guidance and Mercury space flights.',
    'The 1879 fire that destroyed most of the original town led to relocation near the railroad.',
    'Daingerfield State Park was built by segregated CCC companies—one white, one Black—between 1935 and 1938.',
    'The Lone Star Steel facility employed up to 6,000 workers during World War II expansion.',
    'The 1882 courthouse is listed on the National Register of Historic Places and now houses a law firm.',
    'Chapel Hill College (1852-1869) offered courses in ministerial training, medicine, law, and liberal arts.',
    'East Texas iron ore from the area was mined during the Civil War to create gun barrels and munitions.',
    'Morris County, at 256 square miles, is the fifth-smallest county in Texas by land area.',
    'Until 2016, Morris County was one of six entirely dry (prohibition) counties in Texas.',
    'The population peaked at 3,133 in 1960 during the height of the Lone Star Steel boom.',
    'The Cumberland Presbyterian Church was known as the "Union Church" because Baptists also worshiped there.',
    'The state park features distinctive eight-pointed star motifs in CCC Modern Concrete architecture.',
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
        communityName="Daingerfield"
        county="Morris County"
        established="1841"
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
              Daingerfield, the county seat of Morris County in northeast Texas, occupies 2.4 square miles at the intersection of State Highways 11 and 49 and U.S. Highway 259. With a 2020 population of 2,522, the town's development across nearly two centuries reflects broader transformations in Texas history—from frontier settlement through agricultural expansion, Civil War-era industry, railroad growth, and twentieth-century industrial development anchored by the massive Lone Star Steel complex. Named for Captain London Daingerfield, killed in an 1830 battle with Indians near a spring at the present town center, Daingerfield stands as the fourth-oldest town in Texas.
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
            Caddo Indians occupied the Morris County area for centuries before European contact, living in dispersed communities of grass and cane-covered houses centered around the Red River and its tributaries. The Caddo peoples developed complex trade networks, built earthen mounds for ceremonial purposes, and created distinctive pottery. Disease and conflicts forced the Caddo to leave by the late eighteenth century. The first documented European presence occurred around 1740, when visitors camped by a spring near what is now the town center. During the 1820s, bands of Shawnee, Delaware, and Kickapoo Indians inhabited the future county after the Caddo departure.
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
            marginBottom: '16px',
          }}>
            The pivotal event in Daingerfield's founding came in 1830, when Captain London Daingerfield and approximately 100 men fought a bloody battle with Indians near the spring. Daingerfield was killed in this engagement, and the town that began to develop in the early 1840s was named in his honor. By 1841, the settlement had grown sufficiently to be designated county seat of Paschal County, a judicial county established by the Republic of Texas Congress.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            A post office was established in 1846, and by the early 1850s, Daingerfield began to grow as a church and school town. Chapel Hill College, chartered in 1850 and opened in 1852, offered courses in ministerial training, medicine, law, and liberal arts until closing in 1869-1870. During the Civil War, Daingerfield served as a center for manufacturing and supply, with tanyards producing leather and foundries utilizing East Texas iron ore deposits. Morris County was formally created from Titus County on March 13, 1875, and organized on May 12, 1875, with Daingerfield as county seat.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Railroad Era and 1879 Fire" background="subtle">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            In 1877, the Louisiana, Arkansas and Texas Railroad laid track approximately half a mile southeast of the original town site, bringing the prospect of commercial growth. A pivotal disaster struck in 1879 when a large fire destroyed most of the original town. Following the conflagration, the majority of businesses relocated to the railhead, establishing the present site of Daingerfield. By 1904, Daingerfield's population had grown to 699, and the town's industries included a chair factory, tannery, hat factory, cotton gin, and flour mill. In 1882, Morris County built its first permanent courthouse for $5,500, designed by Peterson & Stuckey—a two-story Classical Revival structure that now houses a law firm.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="1900s–1945">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            At the turn of the twentieth century, Daingerfield remained a small agricultural center. The town was authorized to incorporate by the State Legislature in 1871, but an incorporation election was not held until 1913, resulting in a narrow vote of 75 for and 64 against. In 1931, Daingerfield reported a population of 818 and thirty-eight businesses, with the local economy depending on cotton, timber, and small-scale manufacturing.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            The Great Depression brought transformative New Deal infrastructure development. In 1935, private landowners deeded more than 500 acres to the State of Texas for Daingerfield State Park. The Civilian Conservation Corps built the earthen dam, 80-acre lake, cabins, and distinctive buildings in both CCC Rustic and Modern Concrete styles. CCC Company 2891 (white) began work in 1935, followed by CCC Company 1801 (all-black) which completed the park in 1938.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="World War II and Industrial Transformation" background="subtle">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            The greatest growth in Daingerfield's history came during and after World War II with the establishment of the Lone Star Steel Company. In 1942, the United States government spent approximately $30 million constructing a blast furnace and battery of coke ovens seven miles south of Daingerfield. After the war, the facility was sold to Texas investors for approximately $7 million. In 1947, the first pig iron was produced, and the company subsequently expanded to include four open hearth furnaces, cast iron pipe mills, and steel pipe manufacturing facilities.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            From 1945 to 1968, a secret military research facility operated within the Lone Star Steel compound. This Johns Hopkins University Applied Physics Laboratory facility conducted wind tunnel experiments creating airflow at supersonic speeds and testing ramjet propulsion technology. The facility contributed data to the Mercury space flights, missile guidance systems development, and early ramjet technology that enabled flight beyond the speed of sound.
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
            The Lone Star Steel operation transformed Daingerfield and the surrounding area. The plant employed as many as 6,000 workers during World War II expansion, leading many to settle in the area. Daingerfield's population surged from 1,032 in 1940 to 1,668 in 1950 (a 61.6% increase) and peaked at 3,133 in 1960 (an 87.8% increase). The town continued to prosper in the 1970s, with a new Morris County Courthouse built in 1973. However, during the 1980s, Lone Star Steel began experiencing economic difficulties due to the oil industry slump and foreign competition. The company filed bankruptcy in 1989 and emerged in 1991. Daingerfield's population declined accordingly to 2,572 in 1990.
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
            Daingerfield's population has stabilized at approximately 2,500 residents. In 2007, Lone Star Steel Company was acquired by U.S. Steel for $2.1 billion. However, in March 2016, U.S. Steel idled the plant, and in December 2016, permanently closed a section of the facility, representing the end of an era that had defined Daingerfield's economy for over seventy years. Today, Daingerfield maintains its identity as a small-town community with rich historical and natural heritage. Daingerfield State Park remains a popular destination, covering 507 acres with an 80-acre lake offering fishing, boating, camping, hiking, and nature study. The 2020 census showed a median household income of $47,697 with a poverty rate of 22.22%.
          </p>
        </div>
      </ContentSection>
      
      {/* Notable People */}
      <ContentSection title="Notable People and Events">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1200px]">
          {notablePeople.map((person, index) => (
            <NotablePerson key={index} {...person} />
          ))}
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
            marginBottom: '16px',
          }}>
            Throughout the nineteenth and early twentieth centuries, Daingerfield's economy depended primarily on agriculture, with Morris County farmers cultivating cotton as the primary cash crop, along with corn and cattle ranching. Small-scale manufacturing supported the agricultural economy, including chair factories, tanneries, hat factories, cotton gins, and flour mills.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            East Texas iron ore deposits proved crucial to Daingerfield's industrial development across multiple eras. During the Civil War, foundries in the area produced gun barrels and other munitions. World War II demand for iron and steel stimulated large-scale ore production with the federal government's $30 million investment in the Lone Star Steel facility—the largest industrial development in Morris County history. At its height, Lone Star Steel employed up to 6,000 workers and generated substantial economic activity throughout Morris County until its closure in 2016.
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
            Daingerfield has maintained a strong commitment to education since S.R. Shaddick started the first school in 1840. Chapel Hill College (1852-1869/1870) represented the community's most ambitious educational endeavor, offering ministerial training, medicine, law, and liberal arts courses. Contemporary education is provided by the Daingerfield-Lone Star Independent School District. Religious institutions have shaped community life since the 1840s, with Methodist, Cumberland Presbyterian, and Baptist congregations serving the area. Daingerfield earned a reputation as a "Church and a School" town, with religious institutions playing central roles in civic life. The town hosts community events including Daingerfield Days Fall Fest every October, and Daingerfield State Park remains a popular destination for recreation and nature study.
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
            Daingerfield, the county seat of Morris County in northeast Texas, evolved from a frontier settlement named for Captain London Daingerfield, killed in an 1830 battle with Indians, to a significant twentieth-century industrial center. Founded in the early 1840s and designated seat of the Republic of Texas's judicial Paschal County in 1841, the town developed as an agricultural and educational community, establishing schools including Chapel Hill College (1852-1869) and supporting multiple churches. After an 1879 fire destroyed the original town, businesses relocated near the Louisiana, Arkansas and Texas Railroad. World War II brought transformative change when the federal government built the Lone Star Steel facility, which produced pig iron from 1947 until closure in 2016. The town also housed a secret Cold War aerophysics research laboratory (1945-1968). With a 2020 population of 2,522, Daingerfield maintains its heritage through the National Register-listed 1882 courthouse, CCC-built Daingerfield State Park, and connections to U.S. Senator Morris Sheppard, "father of Prohibition."
          </p>
        </div>
      </ContentSection>
      
      <Footer />
    </div>
  );
}