import { Header } from './Header';
import { CommunityHero } from './CommunityHero';
import { ContentSection } from './ContentSection';
import { ArchitectureTable } from './ArchitectureTable';
import { NotablePerson } from './NotablePerson';
import { HistoricalTimeline } from './HistoricalTimeline';
import { SourcesList } from './SourcesList';
import { Footer } from './Footer';

interface HendersonPageProps {
  onBack?: () => void;
  onNavigate?: (page: string) => void;
}

export function HendersonPage({ onBack, onNavigate }: HendersonPageProps) {
  const architectureData = [
    {
      name: 'Rusk County Courthouse',
      year: '1927-1928',
      style: 'Texas Renaissance / Art Deco',
      originalUse: 'County government',
      status: 'Active',
    },
    {
      name: 'Howard-Dickinson House',
      year: '1855',
      style: 'Greek Revival / Italianate',
      originalUse: 'Residence',
      status: 'Museum and community center',
    },
    {
      name: 'Henderson Commercial Historic District',
      year: '1885-1940 (buildings); 1995 (NRHP)',
      style: 'One and Two Part Commercial Blocks',
      originalUse: 'Commercial district',
      status: 'National Register (25 acres, 39 buildings)',
    },
    {
      name: 'T. J. Walling Log Cabin',
      year: '1841',
      style: 'Vernacular log construction',
      originalUse: 'Residence',
      status: 'Relocated to Depot Museum Complex',
    },
    {
      name: 'Arnold Outhouse',
      year: '1908',
      style: 'Victorian three-holer',
      originalUse: 'Outhouse',
      status: 'Only outhouse in Texas with historical marker',
    },
    {
      name: 'Depot Museum (Missouri-Pacific Depot)',
      year: '1901',
      style: 'Railroad depot vernacular',
      originalUse: 'Railroad depot',
      status: "Children's Discovery Center",
    },
    {
      name: 'Beall-Ross Dogtrot House',
      year: '1880',
      style: 'Dogtrot vernacular',
      originalUse: 'Residence',
      status: 'Relocated to Depot Museum Complex',
    },
    {
      name: 'Kangerga Building',
      year: '1931',
      style: 'Art Deco',
      originalUse: 'Oil leasing, cotton brokerage',
      status: 'Active in Downtown Historic District',
    },
    {
      name: 'Heritage Square',
      year: '1990',
      style: 'Public plaza',
      originalUse: 'Public gathering space',
      status: 'Active downtown focal point',
    },
  ];

  const notablePeople = [
    {
      name: 'Bill Moyers',
      years: '1934-2025',
      description: 'Legendary broadcast journalist, Baptist minister, and aide to President Lyndon B. Johnson. Born Billy Don Moyers, grew up in nearby Marshall. Began journalism career at age 16. Worked for Senator LBJ, became deputy director of Peace Corps, served as LBJ\'s special assistant and press secretary. After leaving White House in 1967, became publisher of Newsday (two Pulitzer Prizes). Television career at CBS and PBS produced groundbreaking series. Received more than 35 Emmys, nine Alfred I. Dupont-Columbia University Awards, four Peabodys, and three George Polk Awards. Died in Manhattan on June 26, 2025, at age 91.',
    },
    {
      name: 'Daisy Miller Bradford',
      years: '1868-1934',
      description: 'Owner of the farm where the East Texas Oil Field discovery occurred. Born to farmer and physician Henry L. Miller in Rusk County, approximately eight miles west of Henderson. Her grandfather John Cherry Miller was one of five commissioners who founded Rusk County in 1843. Married physician William Marion Bradford in 1901; he died in 1904. Between 1925 and 1930, she granted Dad Joiner several time extensions, provided financial support including lending $5,000, cooked for drilling crews, nursed injured workers, and offered lodging—keeping spirits up through two failures before the October 3, 1930, success of Daisy Bradford No. 3. Died August 18, 1934, having become a wealthy woman.',
    },
    {
      name: 'Columbus Marion "Dad" Joiner',
      years: '1860-1947',
      description: 'Seventy-year-old wildcatter who transformed Henderson\'s destiny. Born near Center Star, Alabama, practiced law in Tennessee, served in state legislature 1889-1891. Made and lost two fortunes in Oklahoma oil before moving to Texas in 1926. Despite geologists\' contrary opinions, persisted with substandard, secondhand equipment and borrowed funds to drill the Daisy Bradford No. 3 discovery well, opening the largest oilfield in the world at that time. Sold well and leases for $1 million to Haroldson L. Hunt in 1931. The town of Joinerville was named for him.',
    },
  ];

  const timelineEvents = [
    { year: 'ca. 800-1680', event: 'Caddo Indians inhabited region, including villages of Aynais and Nacogdoches Village near present Minden community.' },
    { year: '1829', event: 'First Anglo-American settlers arrived; William Elliott received first land grant on March 22, 1829.' },
    { year: '1843 Jan 16', event: 'Texas Legislature created Rusk County from Nacogdoches County; Henderson designated county seat.' },
    { year: '1843', event: 'Henderson founded by W.B. Ochiltree and James Smith; named for James Pinckney Henderson, first governor of Texas.' },
    { year: '1846', event: 'Post office established in Henderson.' },
    { year: '1849', event: 'First wooden courthouse completed in center of town square.' },
    { year: '1850', event: 'Rusk County population: 8,148 (second largest in Texas).' },
    { year: '1855', event: 'Howard-Dickinson House built by brothers James and David Howard; first brick structure in Rusk County.' },
    { year: '1860 Aug 5', event: 'Devastating fire destroyed most of Henderson\'s commercial district during Texas slave insurrection panic.' },
    { year: '1860', event: 'Rusk County population: 15,803 (largest in Texas); wealth ranked fifth among counties.' },
    { year: '1871 Apr 5', event: 'Henderson Male and Female College established.' },
    { year: '1874', event: 'Henderson and Overton Branch Railroad connected Henderson to I&GN main line at Overton.' },
    { year: '1878', event: 'Fire destroyed second courthouse; third courthouse built in brick, designed by F.E. Ruffini.' },
    { year: '1890', event: 'Henderson population: 2,000 (estimated).' },
    { year: '1928', event: 'Fourth and present Rusk County Courthouse completed in Texas Renaissance style; architects Curtis & Thomas.' },
    { year: '1930 Oct 3', event: 'Daisy Bradford No. 3 discovery well came in, opening East Texas Oil Field; Henderson population grew from 2,000 to 10,000 within months.' },
    { year: '1936', event: 'Thomas J. Rusk commemorative statue erected in front of courthouse.' },
    { year: '1940', event: 'Henderson incorporated with mayor-council form of government.' },
    { year: '1995', event: 'Henderson Commercial Historic District (25 acres, 39 contributing buildings) listed on National Register of Historic Places.' },
    { year: '2020', event: 'Henderson population: 13,271.' },
  ];

  const interestingFacts = [
    'Named for James Pinckney Henderson in 1843, three years before he became Texas\'s first state governor in 1846.',
    'The August 5, 1860, fire during the Texas slave insurrection panic destroyed Henderson\'s commercial district and helped inflame secessionist sentiment, explaining why Texas voted three-to-one for secession after electing a unionist governor.',
    'The Arnold Outhouse, built in 1908, is the only outhouse in Texas with its own Texas Historical Marker. The Victorian three-holer features louvered windows and was built to match prominent lawyer John Arnold\'s home.',
    'The site of the Daisy Bradford No. 3 discovery well was chosen by accident when a steel cable broke while moving the rig, and Dad Joiner couldn\'t afford the $10 to repair it. The crew decided to drill where it sat—and struck the largest oilfield in the United States.',
    'Bill Moyers started his journalism career at age 16 as a cub reporter, launching a career that earned him more than 35 Emmys and established him as one of America\'s most respected broadcast journalists.',
    'The East Texas Sacred Harp Singing Convention, organized in 1855 and meeting continuously since 1868 (except Civil War years), is the oldest Sacred Harp convention in Texas and second oldest in the United States.',
    'During World War II, British Royal Air Force cadets flying from Terrell used Henderson as a stand-in for Dunkirk, France, on training flights—the distance matching the distance from London to Dunkirk.',
    'The Howard-Dickinson House, built in 1855, was the first brick home in Rusk County. Sam Houston, cousin to Martha Howard, was a frequent visitor.',
    'Henderson\'s population quintupled from 2,000 to 10,000 within months when the Daisy Bradford No. 3 well came in on October 3, 1930.',
    'The Heritage Syrup Festival, held the second Saturday of November for over 35 years, is the only folk life festival in East Texas, featuring demonstrations of ribbon cane syrup making using antique mule-powered equipment.',
    'Most buildings in Henderson\'s 25-acre National Register Historic District were built during the 1931-1933 oil boom construction frenzy, creating a concentrated snapshot of Art Deco and commercial architecture.',
    'Rusk County reached its antebellum zenith in 1860 with a population of 15,803—the largest in Texas—and combined wealth of $6,494,175, ranked fifth among counties.',
    'John Cherry Miller, Daisy Bradford\'s grandfather, was one of the five commissioners who founded Rusk County in 1843 and became its first district clerk.',
    'The T.J. Walling Log Cabin, built in 1841, is considered one of the oldest and best-documented log structures in Texas.',
    'The East Texas Oil Field, opened by the Daisy Bradford No. 3 well, eventually produced more than 30,000 wells yielding 5.2 billion barrels of oil.',
  ];

  const sources = [
    { number: 1, citation: 'Texas State Historical Association. "Henderson, TX." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/henderson-tx' },
    { number: 2, citation: 'Visit Henderson Texas. "History of Henderson." March 31, 2024.', url: 'https://www.visithendersontx.com/history-of-henderson/' },
    { number: 3, citation: 'Rusk County Depot Museum. "A Short History of Rusk County."', url: 'https://www.ruskcountyhistory.org/about-county' },
    { number: 4, citation: 'Texas State Historical Association. "Rusk County." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/rusk-county' },
    { number: 5, citation: 'Wikipedia. "Henderson, Texas." Last updated October 24, 2002.', url: 'https://en.wikipedia.org/wiki/Henderson,_Texas' },
    { number: 6, citation: 'Census Dots. "Henderson, TX Demographics."', url: 'https://www.censusdots.com/race/henderson-tx-demographics' },
    { number: 7, citation: 'Mansfield Photo. "Henderson, Texas - A Town that Ignited History." February 18, 2025.', url: 'https://mansfieldphoto.com/small-towns-of-texas/henderson-ignited-history/' },
    { number: 8, citation: 'Rusk County TXGenWeb. "Henderson | Historical Markers."', url: 'https://www.txrusk.com/marker/markhend.htm' },
    { number: 9, citation: 'City of Henderson Official Website. "About Henderson."', url: 'https://www.hendersontx.us/324/About-Henderson' },
    { number: 10, citation: 'Rusk County TXGenWeb. "A Condensed History of Rusk County, Texas." December 31, 1999.', url: 'https://www.txrusk.com/article/history.htm' },
    { number: 11, citation: 'Texas State Historical Association. "Bradford, Daisy Miller." Handbook of Texas Online. January 27, 2022.', url: 'https://www.tshaonline.org/handbook/entries/bradford-daisy-miller' },
    { number: 12, citation: 'Wikipedia. "Texas slave insurrection panic of 1860." Last updated June 7, 2022.', url: 'https://en.wikipedia.org/wiki/Texas_slave_insurrection_panic_of_1860' },
    { number: 13, citation: 'Texas State Historical Association. "Texas Troubles." Handbook of Texas Online. October 31, 1995.', url: 'https://www.tshaonline.org/handbook/entries/texas-troubles' },
    { number: 14, citation: 'Texas State Historical Association. "Joiner, Columbus Marion [Dad]." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/joiner-columbus-marion-dad' },
    { number: 15, citation: 'City of Henderson. "Heritage Syrup Festival."', url: 'https://www.hendersontx.us/14/Heritage-Syrup-Festival' },
    { number: 16, citation: 'Wikipedia. "East Texas Musical Convention." Last updated July 19, 2004.', url: 'https://en.wikipedia.org/wiki/East_Texas_Musical_Convention' },
    { number: 17, citation: 'Stephen F. Austin State University Heritage Center. "Rusk County."', url: 'https://www.sfasu.edu/heritagecenter/511.asp' },
    { number: 18, citation: 'Archaeology Magazine. "Caddo Mounds, Texas." May/June 2014.', url: 'https://archaeology.org/issues/may-june-2014/off-the-grid/off-the-grid-texas-caddo-mounds/' },
    { number: 19, citation: 'Wikipedia. "Caddo Mounds State Historic Site." Last updated November 17, 2011.', url: 'https://en.wikipedia.org/wiki/Caddo_Mounds_State_Historic_Site' },
    { number: 20, citation: 'National Park Service. "Caddo Mounds State Historic Site."', url: 'https://www.nps.gov/places/caddo-mounds-state-historic-site.htm' },
    { number: 21, citation: 'Texas Beyond History. "Tejas > Caddo Ancestors > Early Historic." August 5, 2003.', url: 'https://www.texasbeyondhistory.net/tejas/ancestors/historic.html' },
    { number: 22, citation: '254 Texas Courthouses. "133 Rusk County Courthouse, Henderson, Texas." March 23, 2012.', url: 'http://www.254texascourthouses.net/133-rusk-county.html' },
    { number: 23, citation: 'American Courthouses. "Rusk County." November 24, 2021.', url: 'https://courthouses.co/us-states/o-u/texas/rusk-county/' },
    { number: 24, citation: 'Texas Almanac. "Henderson, Texas." July 31, 2021.', url: 'https://www.texasalmanac.com/places/henderson' },
    { number: 25, citation: 'Visit Henderson Texas. "HISTORICAL MARKERS." May 31, 2019.', url: 'https://www.visithendersontx.com/historical-markers/' },
    { number: 26, citation: 'Texas State Historical Association. "Henderson Male and Female College." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/online/articles/kch05' },
    { number: 27, citation: 'Texas Woman\'s University. "The Hidden Importance of Dallas."', url: 'https://twu.edu/media/documents/history-government/Queen---The-Hidden-Importance-of-Dallas.pdf' },
    { number: 28, citation: 'Scholar Works at UT Tyler. "Marshall Texas Republican, 1860."', url: 'https://scholarworks.uttyler.edu/cgi/viewcontent.cgi?article=1073&context=cw_newstitles' },
    { number: 29, citation: 'Texas Courthouses. "Rusk County Courthouse." July 17, 2017.', url: 'https://texascourthouses.com/project/rusk-county-courthouse/' },
    { number: 30, citation: 'Wikipedia. "Henderson Commercial Historic District." February 25, 2010.', url: 'https://en.wikipedia.org/wiki/Henderson_Commercial_Historic_District_(Henderson,_Texas)' },
    { number: 31, citation: 'City of Henderson. "Walking Tour Brochure."', url: 'https://www.hendersontx.us/DocumentView.asp?DID=213' },
    { number: 32, citation: 'PhotoDave. "Rusk County Courthouse." November 23, 2017.', url: 'http://www.photodave.net/Collections/courthouses/rusk.htm' },
    { number: 33, citation: 'YouTube. "Daisy Bradford No. 3 Discovery Well." July 1, 2015.', url: 'https://www.youtube.com/watch?v=dU0qvw64l_o' },
    { number: 34, citation: 'Mainly Museums. "East Texas Museums Tell the Story of the 1930s Oil Boom."', url: 'https://mainlymuseums.com/post/1209/east-texas-museums-tell-the-story-of-the-1930s-oil-boom/' },
    { number: 35, citation: 'East-Texas.com. "Joinerville Texas & Daisy Bradford Discovery Well." February 2, 2021.', url: 'https://www.east-texas.com/joinerville-texas-daisy-bradford.htm' },
    { number: 36, citation: 'Historical Marker Database. "Henderson."', url: 'https://www.hmdb.org/m.asp?m=221476' },
    { number: 37, citation: 'TxDOT. "Not just a place to go, a place to remember." July 18, 2025.', url: 'https://www.txdot.gov/about/newsroom/stories/not-just-a-place-to-go-a-place-to-remember.html' },
    { number: 38, citation: 'Texas Time Travel. "Depot Museum."', url: 'https://texastimetravel.com/directory/depot-museum/' },
    { number: 39, citation: 'Rusk County Depot Museum & History Center. "Rusk County Depot Museum." January 5, 2025.', url: 'https://www.ruskcountyhistory.org' },
    { number: 40, citation: 'Rusk County Depot Museum. "Our Museum."', url: 'https://www.ruskcountyhistory.org/our-museum' },
    { number: 41, citation: 'SAH ARCHIPEDIA. "Howard-Dickinson House." February 1, 2023.', url: 'https://sah-archipedia.org/buildings/TX-02-TK45' },
    { number: 42, citation: 'Wikipedia. "Howard-Dickinson House." March 4, 2018.', url: 'https://en.wikipedia.org/wiki/Howard-Dickinson_House' },
    { number: 43, citation: 'The Howard-Dickinson House. "History."', url: 'https://www.howardhousehenderson.org/history' },
    { number: 44, citation: 'Texas Time Travel. "Howard-Dickinson House."', url: 'https://texastimetravel.com/directory/howard-dickinson-house/' },
    { number: 45, citation: 'Sacred Harp North Texas. "East Texas Sacred Harp Singing Convention." August 12, 2022.', url: 'https://sacredharpnorthtexas.org/event/4665106/598101535/east-texas-sacred-harp-singing-convention' },
    { number: 46, citation: 'Texas State Historical Association. "Gospel singing convention established." April 27, 2025.', url: 'https://www.tshaonline.org/texas-day-by-day/entry/163' },
    { number: 47, citation: 'Sacred Harp North Texas. "East Texas Sacred Harp Convention @ Henderson Civic Center." August 9, 2024.', url: 'https://sacredharpnorthtexas.org/event/5675253/688402287/east-texas-sacred-harp-convention' },
    { number: 48, citation: 'World Population Review. "Henderson, Texas Population 2025."', url: 'https://worldpopulationreview.com/us-cities/texas/henderson' },
    { number: 49, citation: 'Texas Demographics. "Henderson Demographics."', url: 'https://www.texas-demographics.com/henderson-demographics' },
    { number: 50, citation: 'U.S. Census Bureau. "Henderson city, Texas - QuickFacts."', url: 'https://www.census.gov/quickfacts/fact/table/hendersoncitytexas/HSG495223' },
    { number: 51, citation: 'Wikipedia. "National Register of Historic Places listings in Rusk County, Texas." April 4, 2013.', url: 'https://en.wikipedia.org/wiki/National_Register_of_Historic_Places_listings_in_Rusk_County,_Texas' },
    { number: 52, citation: 'Rusk County Depot Museum. "Events."', url: 'https://www.ruskcountyhistory.org/events' },
    { number: 53, citation: 'MapQuest. "Depot Museum, Waskom St, Henderson, TX." February 9, 2019.', url: 'https://www.mapquest.com/us/texas/depot-museum-437818464' },
    { number: 54, citation: 'Tour Texas. "Events in Henderson."', url: 'https://www.tourtexas.com/destinations/henderson-events' },
    { number: 55, citation: 'Rusk County, Texas. "Rusk County Historical Commission."', url: 'https://www.ruskcountytx.gov/page/rusk.RuskCountyHistoricalCommission' },
    { number: 56, citation: 'The Week. "Bill Moyers: the journalist who was the face of PBS." July 14, 2025.', url: 'https://theweek.com/media/bill-moyers-obituary' },
    { number: 57, citation: 'University of Texas. "Remembering Bill Moyers, a UT Legend and National Treasure." June 30, 2025.', url: 'https://news.utexas.edu/2025/07/01/remembering-bill-moyers-a-ut-legend-and-national-treasure/' },
    { number: 58, citation: 'PBS NewsHour. "Bill Moyers dies at 91." June 26, 2025.', url: 'https://www.pbs.org/newshour/nation/bill-moyers-former-white-house-press-secretary-turned-acclaimed-public-tv-journalist-dies-at-91' },
    { number: 59, citation: 'American Archive of Public Broadcasting. "Bill Moyers Collection." April 30, 2002.', url: 'https://americanarchive.org/special_collections/bill-moyers' },
    { number: 60, citation: 'East Texas Oil Museum. "History." November 30, 2023.', url: 'https://easttexasoilmuseum.kilgore.edu/history/' },
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
        communityName="Henderson"
        county="Rusk County"
        established="1843"
        onBack={onBack}
      />
      
      {/* Overview Section */}
      <section style={{
        paddingTop: 'var(--section-spacing)',
        paddingBottom: 'var(--section-spacing)',
      }}>
        <div className="mx-auto px-[72px] max-w-[1400px]">
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
              Henderson, the county seat of Rusk County in East Texas, represents a community whose identity has been repeatedly reshaped by economic transformation while maintaining continuity as a regional administrative and commercial center. Located on U.S. Highway 259 approximately 138 miles east of Dallas, the city occupies land in the Piney Woods region where Caddo Indians established villages centuries before European contact. Founded in 1843 and named for James Pinckney Henderson (who became Texas's first governor in 1846), the town grew steadily through the 1850s as an agricultural center. By 1860, Rusk County had become the largest in Texas with 15,803 residents. The devastating fire of August 5, 1860, which destroyed most of the commercial district amid Texas slave insurrection panic, helped inflame secessionist sentiment across the state. The October 3, 1930, discovery of the Daisy Bradford No. 3 well six miles northwest of Henderson transformed the town overnight from 2,000 to 10,000 residents, opening the East Texas Oil Field. Today's Henderson, with 13,271 residents (2020 census), functions as a heritage tourism destination and regional center.
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
            marginBottom: '16px',
          }}>
            Archaeological evidence documents human habitation in the Rusk County area extending back approximately 2,000-3,000 years. The Caddo Indians, a sophisticated agricultural people of the Caddoan Mississippian culture, dominated the region from approximately A.D. 800 to European contact in the late seventeenth century. The Caddo established permanent villages featuring earthwork mounds, ceremonial centers, and organized agricultural communities in the fertile river valleys. Two documented Tejas Caddo villages existed in present Rusk County: Aynais in the southwestern corner and Nacogdoches Village near the present site of Minden community.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            The first Anglo-American settlers arrived in the Rusk County area as early as 1829. William Elliott received the first land grant on March 22, 1829. Between May 2 and November 23, 1834, the Mexican government issued forty-three land grants in the area, the majority to recent American immigrants. Most new colonists came from the Old South, particularly Tennessee, Georgia, North Carolina, and South Carolina, attracted by abundant cheap land suitable for cotton cultivation. Cherokee and Shawnee Indians under Chief Bowl occupied the western part of the county during the 1820s and 1830s. Their removal after the Cherokee War in 1839 opened the way for accelerated White settlement.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Founding and the Antebellum Era">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            The Republic of Texas Congress created Rusk County by act on January 16, 1843, carving it from Nacogdoches County and naming it for Thomas Jefferson Rusk (1803-1857), who had served as secretary of war under President Sam Houston. General James Smith donated the original townsite of 65.5 acres and later sold an additional 69.5 acres to the town. William B. Ochiltree donated five acres north of the town square and in the deed named the town for his friend James Pinckney Henderson, a prominent attorney who would become Texas's first state governor in 1846.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            By 1850, Rusk County's population had grown to 8,148, making it the second-largest county in Texas. The economy centered on agriculture, with corn as the primary crop initially and cotton becoming the cash crop. By 1860, Rusk County reached its antebellum zenith with a population of 15,803 (including present Franklin and Morris counties), the largest in Texas, and combined wealth of $6,494,175, ranked fifth among counties. The county's 6,132 enslaved persons represented one of the largest slave populations in Texas.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            The catastrophic fire of August 5, 1860, destroyed nearly the entire business district of Henderson. This fire occurred during the Texas slave insurrection panic of 1860, often called "the Texas Troubles," when vigilantes killed an estimated 30 to 100 people across North and East Texas based on imaginary conspiracy claims. The Henderson fire and broader panic are considered significant factors explaining why Texas voted three-to-one for secession in March 1861 after electing Sam Houston on a unionist platform in 1859.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="The Oil Discovery" background="subtle">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            The transformative event of Henderson's modern history occurred on October 3, 1930, when Columbus Marion "Dad" Joiner's Daisy Bradford No. 3 well came in six miles northwest of Henderson, opening the East Texas Oil Field. Joiner, a seventy-year-old wildcatter, had convinced widow Daisy Miller Bradford to lease a portion of her 975.5-acre farm in 1925. After two failed attempts, Joiner and driller Ed C. Laster began operations on the third well in May 1929. Using substandard, secondhand equipment and operating on credit and borrowed funds, Joiner persisted despite geologists' contrary opinions. The production test on October 3, 1930, resulted in a gusher flowing 6,000 barrels per day.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            The discovery proved historic. The Daisy Bradford No. 3 sat on the edge of the East Texas Oil Field, an enormous reservoir stretching forty-five miles north to south and five to twelve miles east to west. Within three years, the petroleum industry declared it the largest oilfield in the world. The oil discovery came one year after the 1929 stock market crash and at the beginning of the Great Depression. Henderson's population exploded from approximately 2,000 to 10,000 within a matter of months as workers seeking steady paychecks flooded the oilfields. The brief yet intense construction boom of the early 1930s produced most of the buildings in what would become the Henderson Commercial Historic District, listed on the National Register in 1995.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Modern Henderson">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            The post-oil boom decades witnessed Henderson's stabilization as a diversified regional center. Heritage tourism emerged as an economic development strategy. The Rusk County Depot Museum Complex, formed in 1978, occupies five acres with twelve restored structures including the famous Arnold Outhouse—the only outhouse in Texas with its own historical marker. The annual Heritage Syrup Festival, held the second Saturday of November for over 35 years, is the only folk life festival in East Texas, featuring demonstrations of ribbon cane syrup making using antique mule-powered equipment. The East Texas Sacred Harp Singing Convention, organized in 1855 and meeting continuously since 1868 (except Civil War years), is the oldest Sacred Harp convention in Texas and second oldest in the United States. The 2020 census counted 13,271 residents, with demographic composition showing 49.3% White, 23.0% Black, and 23.8% Hispanic. The median household income reached $54,179 with a poverty rate of 14.23%.
          </p>
        </div>
      </ContentSection>
      
      {/* Notable People */}
      <ContentSection title="Notable People and Events" background="subtle">
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
                  The 1860 Henderson Fire
                </h4>
                
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  lineHeight: 'var(--line-height-normal)',
                  color: 'var(--foreground-muted)',
                }}>
                  The August 5, 1860, fire during the Texas slave insurrection panic destroyed Henderson's commercial district and became a pivotal event in Texas secession, helping explain why Texas voted three-to-one for secession after electing a unionist governor the previous year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
      
      {/* Architecture and Landmarks */}
      <ContentSection title="Architecture and Landmarks">
        <ArchitectureTable entries={architectureData} />
      </ContentSection>
      
      {/* Economy and Industry */}
      <ContentSection title="Economy and Industry" background="subtle">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            Henderson's economic history divides into distinct eras: agricultural dominance (1843-1930), oil boom transformation (1930-1945), and diversified modern economy (1945-present). The antebellum economy centered on cotton and corn cultivation supported by enslaved labor. By 1860, the county's 6,132 enslaved persons represented one of the largest slave populations in Texas and a considerable proportion of the county's $6,494,175 total wealth. Railroad connection in 1874 transformed the town into one of the region's leading commercial centers during the 1870s and early 1880s.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            The October 3, 1930, discovery of the Daisy Bradford No. 3 well fundamentally transformed Henderson's economy. The East Texas Oil Field, eventually covering 140,000 acres and producing more than 30,000 wells yielding 5.2 billion barrels of oil, became the largest oilfield in the contiguous United States. The boom ended in the early 1940s, but a legacy of twenty-eight manufacturing and service industries remained, providing economic stability. Post-1945 Henderson developed a diversified economy combining continued oil and gas production, manufacturing (particularly brick and tile), retail trade, government services, education, and tourism. Heritage tourism emerged as a deliberate economic development strategy, with the 1995 National Register designation supporting preservation-based development.
          </p>
        </div>
      </ContentSection>
      
      {/* Culture and Education */}
      <ContentSection title="Culture and Education">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            Henderson's cultural and educational institutions evolved from frontier informality through antebellum academy tradition to modern public education and heritage preservation. Religious institutions formed the earliest organized cultural centers, with First Methodist and First Baptist churches established in 1842 and 1845 respectively. Education received early emphasis with institutions including Henderson Female College (1849-1866), Fowler Institute (1850-ca. 1861), and Henderson Male and Female College (1871-1890). The Rusk County Depot Museum & History Center, formed in 1978, became a focal point for historical consciousness. The Heritage Syrup Festival, celebrating over 35 years, commemorates traditional folk life practices. The East Texas Sacred Harp Singing Convention, organized in 1855 and meeting continuously since 1868, represents Henderson's most distinctive cultural tradition—the oldest Sacred Harp convention in Texas and second oldest in the United States. The tradition's persistence for nearly 170 years demonstrates cultural continuity rare in rapidly changing communities.
          </p>
        </div>
      </ContentSection>
      
      {/* Timeline */}
      <ContentSection title="Timeline" background="subtle">
        <HistoricalTimeline events={timelineEvents} />
      </ContentSection>
      
      {/* Interesting Facts */}
      <ContentSection title="Interesting Facts">
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
            Henderson, Texas, county seat of Rusk County since 1843, evolved from Caddo Indian lands into a frontier settlement founded by W.B. Ochiltree and James Smith, named for Texas's first governor. The town grew through cotton agriculture supported by enslaved labor, reaching peak antebellum prosperity in 1860 when Rusk County was Texas's largest. The August 5, 1860, fire during the Texas slave insurrection panic destroyed the commercial district and helped inflame secessionist sentiment statewide. Railroad connection in 1874 established Henderson as a regional commercial center. The October 3, 1930, Daisy Bradford No. 3 oil discovery transformed Henderson from 2,000 to 10,000 residents within months, creating boom-era architecture now preserved in a National Register Historic District. Post-boom Henderson diversified into manufacturing, education, and heritage tourism, hosting the Heritage Syrup Festival and East Texas Sacred Harp Convention while maintaining 13,271 residents (2020 census) as a regional hub.
          </p>
        </div>
      </ContentSection>
      
      {/* Sources */}
      <ContentSection title="Sources" background="subtle">
        <SourcesList sources={sources} />
      </ContentSection>
      
      <Footer />
    </div>
  );
}