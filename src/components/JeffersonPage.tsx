import { Header } from './Header';
import { CommunityHero } from './CommunityHero';
import { ContentSection } from './ContentSection';
import { ArchitectureTable } from './ArchitectureTable';
import { NotablePerson } from './NotablePerson';
import { HistoricalTimeline } from './HistoricalTimeline';
import { SourcesList } from './SourcesList';
import { Footer } from './Footer';

interface JeffersonPageProps {
  onBack?: () => void;
  onNavigate?: (page: string) => void;
}

export function JeffersonPage({ onBack, onNavigate }: JeffersonPageProps) {
  const architectureData = [
    {
      name: 'Excelsior House Hotel',
      year: '1858',
      style: 'Greek Revival with Victorian elements',
      originalUse: 'Hotel',
      status: 'Active (oldest continuously operating hotel in Texas)',
    },
    {
      name: 'Marion County Courthouse',
      year: '1912-1913',
      style: 'Classical Revival/Texas Renaissance',
      originalUse: 'Courthouse',
      status: 'Active (restored 2016-2018)',
    },
    {
      name: 'Jefferson Carnegie Library',
      year: '1907',
      style: 'Neoclassical',
      originalUse: 'Public library',
      status: 'Active (one of four original Carnegie libraries in Texas)',
    },
    {
      name: 'Freeman Plantation House',
      year: '1850',
      style: 'Greek Revival raised cottage (Louisiana influence)',
      originalUse: 'Plantation house',
      status: 'Restored',
    },
    {
      name: 'House of the Seasons',
      year: '1872',
      style: 'Transitional Greek Revival to Victorian/Italianate',
      originalUse: 'Private residence',
      status: 'Active',
    },
    {
      name: 'Murphy Building',
      year: '1850s',
      style: 'Classical Revival',
      originalUse: 'Warehouse; courthouse 1884-1912',
      status: 'Active',
    },
    {
      name: 'Old Federal Court and Post Office',
      year: '1890',
      style: 'Federal architecture',
      originalUse: 'Federal courthouse and post office',
      status: 'Jefferson Historical Society Museum',
    },
    {
      name: 'Jay Gould Railroad Car "Atalanta"',
      year: '1888',
      style: 'Gilded Age luxury rail car',
      originalUse: 'Private railroad car',
      status: 'Restored (open for tours)',
    },
    {
      name: 'Alley-Carlson House',
      year: 'Unknown',
      style: 'Victorian',
      originalUse: 'Private residence',
      status: 'Restored',
    },
    {
      name: 'Birge-Beard House',
      year: 'Unknown',
      style: 'Victorian',
      originalUse: 'Private residence',
      status: 'Restored',
    },
    {
      name: 'Humble Oil Service Station',
      year: '1929',
      style: 'Art Deco',
      originalUse: 'Service station',
      status: 'Relocated and restored (circa 2020)',
    },
    {
      name: 'Sterne Fountain',
      year: '1913',
      style: 'Bronze fountain with Hebe statue',
      originalUse: 'Public fountain',
      status: 'Active',
    },
  ];

  const notablePeople = [
    {
      name: 'Diamond Bessie Moore (Annie Stone)',
      years: '1854-1877',
      description: 'Born in Syracuse, New York, worked as a prostitute in Cincinnati, New Orleans, and Hot Springs. Murdered in Jefferson on January 21, 1877, with all her diamond jewelry removed. Her consort Abraham Rothschild was tried and acquitted in one of the most sensational criminal cases in 19th-century Texas. The case has never been solved. Jefferson citizens paid for her burial, and the Jessie Allen Wise Garden Club has maintained her grave for decades. The Diamond Bessie Murder Trial has been reenacted annually since 1955.',
    },
    {
      name: 'Benjamin H. Epperson',
      years: '1826-1878',
      description: 'Distinguished lawyer, political leader, and entrepreneur who served many terms in the Texas Legislature and was elected to U.S. Congress in 1866 (though never seated due to Reconstruction). A confidant of Sam Houston, he was listed as one of the wealthiest men in Texas when he built the House of the Seasons in 1872.',
    },
    {
      name: 'Williamson Freeman',
      years: 'Active 1850s',
      description: 'Arrived in Jefferson via steamboat from Georgia in 1850 and developed warehouses on the city\'s waterfront, founding a company manufacturing fabric goods and spinning thread. Built the Greek Revival Freeman Plantation House on 1,000 acres west of town.',
    },
    {
      name: 'Lady Bird Johnson (Claudia Alta Taylor)',
      years: '1912-2007',
      description: 'First Lady of the United States (1963-1969), born in nearby Karnack, Harrison County. Her father owned the Andrews Plantation house and became one of Harrison County\'s largest landowners. She stayed at the Excelsior House during visits to the region and received the Pugsley Medal in 2005 for leadership in park development and beautification advocacy.',
    },
    {
      name: 'Jacob and Ernestine Sterne',
      years: 'Pre-Civil War era',
      description: 'Jewish couple who settled in Jefferson before the Civil War and became prominent citizens. Jacob managed the post office and the couple was involved in civic affairs. The bronze Sterne Fountain was donated to the city in 1913 in their honor.',
    },
    {
      name: 'Allen Urquhart',
      years: 'Active 1840s',
      description: 'Immigrated to Texas from North Carolina in the late 1830s, received a headright on Big Cypress Creek, and laid out Jefferson\'s original townsite around 1842. As a professional land surveyor and ferry owner, he had the foresight to recognize the commercial potential of the location.',
    },
  ];

  const timelineEvents = [
    { year: '700-800 AD', event: 'Caddo peoples settle the region between Arkansas River and Red, Sabine, Angelina, and Neches rivers, adopting agriculture.' },
    { year: '1542', event: 'De Soto expedition provides first European description of Caddo peoples in region.' },
    { year: '1800-1840', event: 'Kadohadacho Caddo occupy Sha\'chahdínnih (Timber Hill) village on James Bayou near future Jefferson site.' },
    { year: '1842', event: 'Allen Urquhart lays out townsite on Big Cypress Creek bend; Daniel Alley adds adjacent 586-acre parcel creating V-shaped street plan.' },
    { year: '1843-1844', event: 'Steamboat Llama becomes first vessel to reach Jefferson.' },
    { year: '1846', event: 'Jefferson post office established; becomes county seat of Cass County.' },
    { year: '1848 Mar 20', event: 'Town incorporated; city charter adopted 1850.' },
    { year: '1858', event: 'Excelsior House Hotel opens (oldest continuously operating hotel in Texas).' },
    { year: '1859', event: 'Caddo peoples forcibly removed from Texas to Indian Territory in Oklahoma.' },
    { year: '1860 Feb 8', event: 'Marion County formed from Cass County; Jefferson becomes county seat.' },
    { year: '1861', event: 'Marion County voters unanimously approve secession ordinance.' },
    { year: '1866', event: 'Fire destroys most of business district; rebuilt within few years.' },
    { year: '1867', event: 'Jefferson becomes first Texas town to use natural gas for artificial lighting.' },
    { year: '1868', event: 'Ice first manufactured commercially in Jefferson.' },
    { year: '1872', event: 'Jefferson reaches peak population of 7,297; second only to Galveston in commerce volume; 226 steamboat arrivals recorded.' },
    { year: '1873 Nov', event: 'Army Corps of Engineers removes Great Red River Raft using nitroglycerin; Texas & Pacific Railway bypasses Jefferson.' },
    { year: '1877 Jan', event: 'Diamond Bessie Moore murdered; Abraham Rothschild tried and acquitted in celebrated case.' },
    { year: '1888', event: 'Jay Gould\'s private railroad car "Atalanta" built.' },
    { year: '1907', event: 'Carnegie Library completed with $7,500 Andrew Carnegie grant.' },
    { year: '1912-1913', event: 'Marion County Courthouse built in Classical Revival style, architect Elmer George Withers.' },
    { year: '1913', event: 'Sterne Fountain donated to honor Jacob and Ernestine Sterne.' },
    { year: '1929', event: 'Humble Oil Art Deco service station built by architect John Staub.' },
    { year: '1938', event: 'Jessie Allen Wise Garden Club founded to preserve Jefferson landmarks.' },
    { year: '1955', event: 'Diamond Bessie Murder Trial reenactment becomes part of Historic Pilgrimage.' },
    { year: '1959', event: 'Jessie Allen Wise Garden Club purchases Excelsior House Hotel.' },
    { year: '1961-1963', event: 'Excelsior Hotel restored; club receives state award 1962.' },
    { year: '1971 Mar 31', event: 'Jefferson Historic District (107 acres, 56 significant structures) listed on National Register of Historic Places.' },
    { year: '2016-2018', event: 'Marion County Courthouse undergoes comprehensive restoration with $4.6 million in grants.' },
    { year: '2020', event: 'Population 1,880; Humble Oil service station relocated and restored.' },
  ];

  const interestingFacts = [
    'Jefferson became the first town in Texas to use natural gas for artificial lighting in 1867, and ice was first manufactured commercially there in 1868.',
    'The town\'s distinctive V-shaped street layout resulted from two different planning philosophies: Allen Urquhart oriented streets perpendicular to Big Cypress Creek for waterfront access, while Daniel Alley laid out streets following compass directions.',
    'The Great Red River Raft, which made Jefferson\'s prosperity possible, was described by Caddo peoples as having "always existed". The massive log jam extended more than 100 miles and required nitroglycerin to remove in November 1873.',
    'At its 1872 peak, Jefferson was the sixth-largest city in Texas with 7,297 residents, recording 226 steamboat arrivals that year. Within two decades, population had fallen to approximately 3,500.',
    'The legend that railroad magnate Jay Gould cursed Jefferson is entirely unfounded: Gould didn\'t acquire the Texas and Pacific until the early 1880s. Nevertheless, his luxurious private railroad car, the Atalanta, ironically came to rest permanently in Jefferson.',
    'Diamond Bessie Moore\'s 1877 murder and the subsequent trials of Abraham Rothschild became one of the most sensational criminal cases of 19th-century America. The case was never solved despite two trials. Jefferson citizens took up a collection to bury Bessie.',
    'The Excelsior House Hotel has operated continuously since 1858, making it the oldest continuously operating hotel in Texas. Famous guests have included Presidents Ulysses S. Grant and Rutherford B. Hayes, Oscar Wilde, Lady Bird Johnson, and Steven Spielberg.',
    'The Jefferson Carnegie Library is one of only four of the original 34 Carnegie libraries built in Texas that still operate in their original capacity. Andrew Carnegie donated $7,500 in 1907.',
    'The House of the Seasons derives its name from stained glass windows in the cupola that create illusions of the four seasons. Built in 1872 for Benjamin H. Epperson, a confidant of Sam Houston.',
    'Jefferson\'s population peaked at 7,297 in 1872 but had fallen to 1,880 by the 2020 census, representing a 74 percent decline over 148 years.',
    'The Jefferson Historic District, listed on the National Register in 1971, preserves "the integrity of the city as it was in about 1880" with minimal modern intrusions, containing 56 buildings of state significance within its 107 acres.',
    'Between 1800 and 1840, the Kadohadacho Caddo occupied Sha\'chahdínnih (Timber Hill), the last Caddo village in their native Texas homeland, near the future site of Jefferson.',
    'In 1872, Jefferson recorded trade volumes exceeded only by Galveston, with more than 75,000 bales of cotton shipped annually and commerce reaching $8 million.',
    'The Jessie Allen Wise Garden Club, founded in 1938, transformed from a social organization into the primary force behind architectural preservation, receiving state recognition in 1962 for restoring the Excelsior House Hotel.',
    'The Diamond Bessie Murder Trial has been reenacted annually since 1955, playing to sold-out audiences for more than seven decades.',
  ];

  const sources = [
    { number: 1, citation: 'Texas State Historical Association. "Jefferson, TX (Marion County)." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/jefferson-tx-marion-county' },
    { number: 2, citation: 'Wikipedia. "Jefferson Historic District (Jefferson, Texas)." Updated January 7, 2025.', url: 'https://en.wikipedia.org/wiki/Jefferson_Historic_District_(Jefferson,_Texas)' },
    { number: 3, citation: 'Texas State Historical Association. "Marion County." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/marion-county' },
    { number: 4, citation: 'Red River Historian. "Steam Boats." Published May 22, 2022.', url: 'https://www.redriverhistorian.com/red-river-steam' },
    { number: 5, citation: 'Neilsberg. "Jefferson, TX Population by Year - 2024 Update." Published July 29, 2024.', url: 'https://www.neilsberg.com/insights/jefferson-tx-population-by-year/' },
    { number: 6, citation: 'World Population Review. "Jefferson, Texas Population 2025."', url: 'https://worldpopulationreview.com/us-cities/texas/jefferson' },
    { number: 7, citation: 'National Park Service. "Early Caddo History." El Camino Real de los Tejas National Historic Trail. Updated April 23, 2025.', url: 'https://www.nps.gov/elte/learn/historyculture/caddo-early-history.htm' },
    { number: 8, citation: 'Texas State Historical Association. "Caddo Indians." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/caddo-indians' },
    { number: 9, citation: 'Texas Beyond History. "Sha\'chahdínnih Main." Published April 7, 2003.', url: 'http://www.texasbeyondhistory.net/timberhill/' },
    { number: 10, citation: 'Stephen F. Austin State University. "Archaeological Investigations Along James Bayou in Marion County." Published January 22, 2019.', url: 'https://scholarworks.sfasu.edu/ita/vol2010/iss1/29/' },
    { number: 11, citation: 'Caddo Nation. "History."', url: 'https://mycaddonation.com/history-1' },
    { number: 12, citation: 'City of Jefferson, Texas. "History." Published February 2, 2017.', url: 'https://www.jeffersontexas.us/history/' },
    { number: 13, citation: 'Texas DAR. "Martha McCraw Chapter."', url: 'https://www.texasdar.org/chapters/MarthaMcCraw/history.htm' },
    { number: 14, citation: 'Wikipedia. "Jefferson, Texas." Updated October 24, 2002.', url: 'https://en.wikipedia.org/wiki/Jefferson,_Texas' },
    { number: 15, citation: 'KPEL 965. "Jefferson, TX: Hidden Ghost Town That Was America\'s Largest Port." Published June 4, 2025.', url: 'https://kpel965.com/jefferson-texas-east-texass-hidden-baghdad-on-the-bayou-where-steamboats-once-ruled-and-ghosts-now-roam/' },
    { number: 16, citation: 'Texas Almanac. "Marion County." Published September 30, 2022.', url: 'https://www.texasalmanac.com/places/marion-county' },
    { number: 17, citation: 'Marion County TX GenWeb. "Marion County TX History."', url: 'https://www.txgenwebcounties.com/marion/resources/MarionCountyHistory.html' },
    { number: 18, citation: 'Civil War Talk. "Jefferson Album - Texas\' Civil War Town." Published February 15, 2016.', url: 'https://civilwartalk.com/threads/jefferson-album-texas-civil-war-town.119905/' },
    { number: 19, citation: 'Texas Railroad History. "Towers 61 and 123 - Jefferson." Published January 26, 2011.', url: 'http://txrrhistory.com/towers/061/061.htm' },
    { number: 20, citation: 'Tie Dye Travels. "Jefferson, Texas Has The Last Laugh." Published February 5, 2008.', url: 'https://www.tiedyetravels.com/2008/02/jefferson-has-last-laugh.html' },
    { number: 21, citation: 'Marion County Herald. "Jay Gould put Texas on path to 20th Century." Published April 5, 2023.', url: 'https://marioncoherald.com/2023/04/06/jay-gould-put-texas-on-path-to-20th-century/' },
    { number: 22, citation: 'Texas Time Travel. "Jay Gould\'s Private Railroad Car, \'Atalanta\'."', url: 'https://texastimetravel.com/directory/atalanta-jay-goulds-private-railroad-car/' },
    { number: 23, citation: 'The Excelsior Hotel. "Jay Gould Railcar." Published August 18, 2024.', url: 'https://theexcelsiorhouse.com/jay-gould-railcar/' },
    { number: 24, citation: 'Diamond Bessie Play. "The Diamond Bessie Murder Trial."', url: 'http://www.diamondbessieplay.com/legend.htm' },
    { number: 25, citation: 'Texas Highways. "Jefferson\'s \'Diamond Bessie Murder Trial\' Plumbs 19th-Century Mystery." Published May 1, 2019.', url: 'https://texashighways.com/culture/history/jeffersons-diamond-bessie-murder-trial-plumbs-19th-century-mystery/' },
    { number: 26, citation: 'Murder by Gaslight. "The Shooting of Diamond Bessie." Published December 11, 2009.', url: 'http://www.murderbygaslight.com/2009/12/diamond-bessie.html' },
    { number: 27, citation: 'Biography Writer. "The First Case of Double Jeopardy."', url: 'https://biographywriter.com/1855-1923-infamy-abe-rothschild-accused-murderer-of-diamond-bessie-and-19th-century-con/' },
    { number: 28, citation: 'Jefferson Pilgrimage. "Diamond Bessie Murder Trial." Published November 30, 2024.', url: 'https://jefferson-pilgrimage.com/pilgrimage-events/diamond-bessie-murder-trial/' },
    { number: 29, citation: 'Texas State Historical Association. "Diamond Bessie Murder Trial." Published August 31, 1995.', url: 'https://www.tshaonline.org/handbook/entries/diamond-bessie-murder-trial' },
    { number: 30, citation: 'Texas Time Travel. "Carnegie Library." Published December 31, 1999.', url: 'https://texastimetravel.com/directory/carnegie-library/' },
    { number: 31, citation: 'Wikipedia. "Jefferson Carnegie Library." Updated August 18, 2010.', url: 'https://en.wikipedia.org/wiki/Jefferson_Carnegie_Library' },
    { number: 32, citation: 'Jefferson Carnegie Library. "A History of the Jefferson Carnegie Library."', url: 'http://www.jeffersoncarnegielibrary.org/history/index.htm' },
    { number: 33, citation: 'American Courthouses. "Marion County." Published June 4, 2022.', url: 'https://courthouses.co/us-states/o-u/texas/marion-county/' },
    { number: 34, citation: 'Texas Time Travel. "Marion County Courthouse."', url: 'https://texastimetravel.com/directory/marion-county-courthouse/' },
    { number: 35, citation: '254 Texas Courthouses. "209 Marion County." Published June 5, 2014.', url: 'http://www.254texascourthouses.net/209-marion-county.html' },
    { number: 36, citation: 'Texas Time Travel. "Jefferson." Published July 6, 2023.', url: 'https://texastimetravel.com/cities/jefferson/' },
    { number: 37, citation: 'Marion County Herald. "New Beginning for Humble Oil Station." Published October 15, 2020.', url: 'https://marioncoherald.com/2020/10/16/new-beginning-for-humble-oil-station/' },
    { number: 38, citation: 'Texas Almanac. "Oil and Texas: A Cultural History." Published June 6, 2021.', url: 'https://www.texasalmanac.com/articles/oil-and-texas-a-cultural-history' },
    { number: 39, citation: 'East Texas Oil Museum. "History." Published November 30, 2023.', url: 'https://easttexasoilmuseum.kilgore.edu/history/' },
    { number: 40, citation: 'Saving Places. "How a Ladies\' Garden Club in Texas Helped Its Old Town Blossom." Published February 5, 2015.', url: 'https://savingplaces.org/stories/how-a-ladies-garden-club-texas-helped-its-old-town-blossom/' },
    { number: 41, citation: 'The Excelsior Hotel. "The Excelsior Hotel: Your Premier Destination in Jefferson, Texas." Published October 23, 2024.', url: 'https://theexcelsiorhouse.com' },
    { number: 42, citation: 'Historical Marker Database. "Excelsior House."', url: 'https://www.hmdb.org/m.asp?m=110989' },
    { number: 43, citation: 'Creators. "Take a Historic Walk Through Jefferson, Texas." Published October 27, 2023.', url: 'https://www.creators.com/read/travel-and-adventure/10/23/take-a-historic-walk-through-jefferson-texas' },
    { number: 44, citation: 'Texas Highways. "Jefferson is hauntingly inviting to ghost hunters." Published May 18, 2025.', url: 'https://texashighways.com/travel-news/ghost-hunters-find-jefferson-hauntingly-inviting/' },
    { number: 45, citation: 'The Excelsior Foundation. "The Excelsior Foundation." Published July 28, 2024.', url: 'https://theexcelsiorhouse.com/the-excelsior-foundation/' },
    { number: 46, citation: 'SAH Archipedia. "Freeman Plantation House."', url: 'https://sah-archipedia.org/buildings/TX-02-LT27' },
    { number: 47, citation: 'Texas Historical Commission. "Freeman Plantation House." National Register nomination.', url: 'https://atlas.thc.texas.gov/NR/pdfs/69000209/69000209.pdf' },
    { number: 48, citation: 'Afrotexan. "House of Seasons."', url: 'http://afrotexan.com/mar_build/house_of_seasons.htm' },
    { number: 49, citation: 'TripAdvisor. "The House of the Seasons." Updated December 31, 2024.', url: 'https://www.tripadvisor.com/Hotel_Review-g56043-d114963-Reviews-The_House_of_the_Seasons-Jefferson_Texas.html' },
    { number: 50, citation: 'Wikipedia. "National Register of Historic Places listings in Marion County, Texas." Updated March 27, 2010.', url: 'https://en.wikipedia.org/wiki/National_Register_of_Historic_Places_listings_in_Marion_County,_Texas' },
    { number: 51, citation: 'National Park Service. "Jefferson Historic District National Register Nomination." March 31, 1971.', url: 'https://atlas.thc.texas.gov/NR/pdfs/71000949/71000949.pdf' },
    { number: 52, citation: 'Real Travel Adventures. "Historic Walk through Jefferson, Texas." Published October 23, 2023.', url: 'https://realtraveladventures.com/2023/10/24/historic-walk-through-jefferson-texas/' },
    { number: 53, citation: 'AAPRA. "Lady Bird Johnson - Recipient Biography." Published December 31, 2006.', url: 'https://aapra.org/Awards/Pugsley-Medal/Recipient-Biography/Id/4' },
    { number: 54, citation: 'Texas State Historical Association. "Taylor, Thomas Jefferson II."', url: 'https://www.tshaonline.org/handbook/entries/taylor-thomas-jefferson-ii' },
    { number: 55, citation: 'Stephen F. Austin State University. "Andrews-Taylor Plantation/Lady \'Bird\' Johnson\'s Birthplace."', url: 'https://www.sfasu.edu/heritagecenter/4818.asp' },
    { number: 56, citation: 'Visit Jefferson Texas. "History." Updated December 31, 2023.', url: 'https://visitjeffersontexas.com/history' },
    { number: 57, citation: 'Historical Marker Database. "Historical Markers and War Memorials in Jefferson, Texas."', url: 'https://www.hmdb.org/results.asp?Search=Place&Town=Jefferson&State=Texas' },
    { number: 58, citation: 'Only In Your State. "Jefferson Is One Of The Most Historic Small Towns In Texas." Published March 30, 2022.', url: 'https://www.onlyinyourstate.com/state-pride/texas/historic-small-town-jefferson-tx' },
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
        communityName="Jefferson"
        county="Marion County"
        established="1842 (incorporated 1848)"
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
              Jefferson, situated at the junction of U.S. Highway 59 and State Highway 49 on Big Cypress Creek in south-central Marion County, Texas, stands as a testament to the dramatic cycles of American frontier commerce and historic preservation. Founded in the early 1840s and named for President Thomas Jefferson, the town rose to become Texas's sixth-largest city and second-most important commercial center by 1872, with a population of 7,297 and commerce volumes exceeded only by Galveston. The town's prosperity derived from its strategic position as the westernmost navigable riverport on the Red River system, where steamboats from New Orleans and Shreveport delivered goods and carried away cotton from the surrounding region. However, the removal of the Great Red River Raft in November 1873 and the concurrent bypass of Jefferson by the Texas and Pacific Railway precipitated a swift economic decline from which the town never recovered commercially. Today, Jefferson's population of 1,880 (2020 census) preserves an extraordinary architectural legacy, with 107 acres containing 56 historically significant structures listed on the National Register of Historic Places since 1971.
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
            The region surrounding present-day Jefferson was inhabited by Caddo peoples for more than a millennium before European contact. Between approximately 700 and 800 AD, Caddo groups migrated from the lower Mississippi Valley and settled the area between the Arkansas River and the middle reaches of the Red, Sabine, Angelina, and Neches rivers, adopting agriculture as their primary subsistence strategy. The first European description of Caddo peoples came in 1542 from chroniclers traveling with the De Soto expedition. Spanish accounts described several Caddo groups as having dense populations living in scattered settlements with abundant food reserves of corn.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            Between 1800 and approximately 1840, the Kadohadacho Caddo occupied Sha'chahdínnih, known in English as Timber Hill, a village situated on James Bayou at the upper end of what was then Caddo Lake, near the future site of Jefferson. This settlement represented the last Caddo village in their native Texas homeland. The village was occupied for approximately four decades before being abandoned as part of the broader displacement of Caddo peoples from East Texas. Texas Historical Commission archaeologists located the site in the 1990s, finding pottery fragments, glass, beads, buttons, and other artifacts dating to the early 19th century. The Caddo were forcibly removed from Texas in 1859, relocated to Indian Territory in present-day Oklahoma.
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
            Jefferson's founding occurred in the early 1840s through the efforts of two key figures: Allen Urquhart and Daniel Alley. Urquhart, who had immigrated to Texas from North Carolina in the late 1830s, received a headright grant on a bend in Big Cypress Creek and laid out a townsite there around 1842. Simultaneously, Alley obtained an adjacent 586-acre parcel and platted additional streets known as Alley's Addition. The intersection of these two planning schemes created Jefferson's distinctive V-shaped layout: Urquhart oriented his streets perpendicular to Big Cypress Creek to facilitate waterfront commerce, while Alley's streets followed the cardinal directions.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            The natural geography that made Jefferson viable as an inland port resulted from the Great Red River Raft, an immense log jam extending more than 100 miles on the Red River north of Natchitoches, Louisiana. Caddo oral tradition held that this raft "had always existed," and it functioned as a natural dam that raised water levels in Caddo Lake and Big Cypress Bayou by several feet, making them navigable for commercial steamboats. The first steamboat to reach Jefferson was the Llama, which arrived in late 1843 or early 1844.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            By 1872, Jefferson reached its demographic and commercial apex, when a supplementary census reported 7,297 inhabitants. Only Galveston surpassed Jefferson in commerce volume, with more than 75,000 bales of cotton being shipped annually and trade reaching $8 million. However, the dual catastrophes of 1873 ended Jefferson's golden age: the U.S. Army Corps of Engineers used nitroglycerin charges to destroy the Great Red River Raft, dramatically lowering water levels and making navigation to Jefferson difficult or impossible. The Texas and Pacific Railway completed its line deliberately bypassing Jefferson that same year. Although another Texas and Pacific line reached Jefferson the following year, the development of rail commerce had already doomed Jefferson's role as a major commercial center.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Early 20th Century Development" background="subtle">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            The early 20th century witnessed Jefferson's transformation from a struggling former boomtown into a stable small community. In 1907, the Jefferson Carnegie Library was completed with a $7,500 grant from industrialist Andrew Carnegie, designed by the architectural firm Hallett & Rawson of Des Moines. The library represents one of only five Carnegie libraries in Texas that continue to operate in their original capacity. The most significant public building of this era was the Marion County Courthouse, constructed between 1912 and 1913, designed by architect Elmer George Withers in Classical Revival and Texas Renaissance style.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            In 1913, the bronze Sterne Fountain was donated to the city, honoring Jacob and Ernestine Sterne, a Jewish couple who settled in Jefferson before the Civil War and became prominent citizens. The petroleum industry briefly revived Jefferson's economy in the late 1930s following oil discoveries in Marion County. An Art Deco Humble Oil Company service station built in Jefferson around 1929, designed by prominent Houston architect John Staub, represented this era of petroleum-driven development.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Historic Preservation Era">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            The pivotal organization in Jefferson's preservation story was the Jessie Allen Wise Garden Club, founded in 1938 and named in memory of a civic-minded resident who had died the previous year at age 79. In 1959, the club made its most consequential preservation decision by purchasing the dilapidated Excelsior House Hotel. Built in 1858, the hotel had welcomed illustrious guests including Ulysses S. Grant, Rutherford B. Hayes, Oscar Wilde, and Lady Bird Johnson. The restoration process, which continued from 1961 to 1963, was meticulous. In 1962, the club received recognition for conducting the most outstanding historical restoration project in the state.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            On March 31, 1971, the Jefferson Historic District was listed on the National Register of Historic Places. The district encompasses 107 acres in the southeastern portion of central Jefferson. At the time of nomination, the district contained 56 buildings of state significance. The National Register nomination described Jefferson as preserving "the integrity of the city as it was in about 1880" with minimal modern intrusions. By the 1990s, Jefferson had established itself as the "Bed and Breakfast Capital of East Texas," with more than 40 properties offering accommodations in historic structures.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Contemporary Jefferson" background="subtle">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            The 21st century has seen Jefferson stabilize as a heritage tourism destination with a slowly declining population. The 2020 census counted 1,880 residents, representing a 74 percent decline from the 1872 peak of 7,297. The median household income stood at $40,865 as of recent data, with a poverty rate of 23.23 percent. Despite population decline, Jefferson's historic preservation infrastructure has continued to expand and professionalize. The Marion County Courthouse underwent major restoration from 2016 to 2018, with work including more than $4.6 million in grants from the Texas Historical Commission. Jefferson's tourism economy relies heavily on its architectural heritage, preserving more than 100 state and nationally recognized historical structures. The three-day spring Historic Pilgrimage remains a central annual event, featuring home tours, the Diamond Bessie Murder Trial reenactment (now in its 71st year as of 2025), and various heritage activities.
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
            Jefferson's economic history divides into three distinct phases: the antebellum and early postbellum riverport boom (1840s–1873), the long decline (1873–1930s), and the modern heritage tourism economy (1960s–present). Jefferson's prosperity during the mid-19th century derived entirely from its strategic position as the westernmost navigable point on the Red River system. The Great Red River Raft functioned as a natural dam that raised water levels in Caddo Lake and Big Cypress Bayou, making them navigable for commercial steamboats. By the late 1860s, more than 75,000 bales of cotton were shipped annually. Trade volume grew from $3 million in 1867 to $8 million in 1870. In 1872, Jefferson recorded 226 steamboat arrivals.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            The removal of the Red River Raft in November 1873 and the bypass by the Texas and Pacific Railway ended the boom virtually overnight. Population and economic decline were precipitous: by 1885, population had fallen from 7,297 to approximately 3,500. Jefferson's transformation into a heritage tourism destination began with the Jessie Allen Wise Garden Club's 1959 purchase and restoration of the Excelsior House Hotel. By the 1990s, Jefferson marketed itself as the "Bed and Breakfast Capital of East Texas" with more than 40 properties offering accommodations. The 1971 listing of the Jefferson Historic District on the National Register formalized the town's architectural significance.
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
            Jefferson's cultural life has evolved from 19th-century frontier society to 20th and 21st-century heritage preservation and tourism. Early institutional development proceeded rapidly during the boom years. Religious congregations organized early: Methodist (1844), Presbyterian (1846-1850), and Baptist (1855). The town's first newspaper, the Jefferson Democrat, appeared in 1847, followed by the Jimplecute in 1848. The Jefferson Carnegie Library, completed in 1907, has served educational and cultural functions continuously for more than a century. Jefferson's most distinctive cultural tradition is the annual Historic Pilgrimage, organized by the Jessie Allen Wise Garden Club since the mid-20th century. Since 1955, the Diamond Bessie Murder Trial reenactment has been a central pilgrimage attraction, written by Jefferson resident Lawton Riley using actual trial transcripts. The Jefferson Historical Society Museum, housed in the former federal courthouse and post office (1890), displays materials documenting the town's riverport era, prominent citizens, working-class life, and transportation history.
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
            Jefferson, Texas, founded in the early 1840s on Big Cypress Creek in Marion County, rose from frontier settlement to become Texas's sixth-largest city and second-most important commercial center by 1872, with 7,297 residents and commerce volumes exceeded only by Galveston. The town's prosperity derived from its position as the westernmost navigable riverport on the Red River system, enabled by the Great Red River Raft, a natural log jam that raised water levels sufficiently for steamboat traffic. The removal of the raft in November 1873 and the concurrent bypass by the Texas and Pacific Railway ended Jefferson's golden age within months. Population declined to 1,880 by 2020. However, preservation efforts beginning in the 1930s with the Jessie Allen Wise Garden Club transformed Jefferson into a heritage tourism destination. The 1971 National Register listing of the 107-acre Jefferson Historic District, containing 56 significant structures, formalized the town's architectural importance.
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