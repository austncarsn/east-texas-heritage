import { Header } from './Header';
import { CommunityHero } from './CommunityHero';
import { ContentSection } from './ContentSection';
import { ArchitectureTable } from './ArchitectureTable';
import { NotablePerson } from './NotablePerson';
import { HistoricalTimeline } from './HistoricalTimeline';
import { SourcesList } from './SourcesList';
import { Footer } from './Footer';

interface MountPleasantPageProps {
  onBack?: () => void;
  onNavigate?: (page: string) => void;
}

export function MountPleasantPage({ onBack, onNavigate }: MountPleasantPageProps) {
  const architectureData = [
    {
      name: 'Titus County Courthouse',
      year: '1895-1897',
      style: 'Moderne/Art Deco (1940 remodel of 1895 Italianate)',
      originalUse: 'County government',
      status: 'Active',
    },
    {
      name: 'First Presbyterian Church',
      year: '1883 (congregation organized 1881)',
      style: 'Late 19th century frame structure',
      originalUse: 'Church',
      status: 'Active',
    },
    {
      name: 'Dellwood Park / Red Mineral Springs',
      year: '1895 (resort); 1909-1916 (hotel); 1951 (park)',
      style: 'Natural springs; hotel demolished by fire ca. 1925',
      originalUse: 'Health resort / hotel',
      status: 'City park',
    },
    {
      name: 'Dr Pepper Mural / Jo\'s Antiques Building',
      year: '1894 (building); 2012 (mural restoration)',
      style: 'Red brick commercial',
      originalUse: 'Commercial',
      status: 'Active',
    },
    {
      name: 'Mount Pleasant Historical Museum',
      year: '2012 (new location)',
      style: 'Modern',
      originalUse: 'Museum/Library',
      status: 'Active',
    },
    {
      name: 'Nevill\'s Chapel Cemetery',
      year: '1838 (earliest burial)',
      style: 'Family cemetery',
      originalUse: 'Cemetery',
      status: 'Active',
    },
    {
      name: 'Lake Bob Sandlin State Park',
      year: '1977-1978',
      style: 'State park infrastructure',
      originalUse: 'Recreation',
      status: 'Active (639.8 acres)',
    },
    {
      name: 'Northeast Texas Community College',
      year: '1985',
      style: 'Modern campus with earth-tone brick',
      originalUse: 'Education',
      status: 'Active (serves 2,758 students)',
    },
    {
      name: 'Main Street Historic District',
      year: '1993 (Main Street designation)',
      style: 'Mixed late 19th/early 20th century commercial',
      originalUse: 'Commercial district',
      status: 'Texas Main Street City (42-block area)',
    },
  ];

  const notablePeople = [
    {
      name: 'Noble Ray Price',
      years: '1926-2013',
      description: 'Legendary country music singer and songwriter. Though born near Perryville in Wood County, closely associated with Mount Pleasant. Served in U.S. Marines during WWII in Pacific Theater. His wide-ranging baritone is regarded as among the all-time finest male voices of country music. Known for "Release Me," "Crazy Arms," "Heartaches by the Number," "For the Good Times." Elected to Country Music Hall of Fame in 1996. The "Ray Price beat" helped make country music more popular nationally.',
    },
    {
      name: 'Henry Clay Thruston',
      years: '1830-1909',
      description: 'Estimated between 7 feet 1 inch and 8 feet tall. Became known nationally and internationally for his extraordinary height in the 19th century. Born in South Carolina, married his cousin Mary B. Thruston in 1833, later settled in the Mount Pleasant area. Texas Historical Commission marker commemorates his connection to the community.',
    },
    {
      name: 'Louis Gohmert Jr.',
      years: 'Born 1953',
      description: 'U.S. Representative from Texas\'s 1st congressional district since 2005. Attorney and former judge, member of the Republican Party and associated with the Tea Party movement.',
    },
    {
      name: 'Kendall Wright',
      years: 'Born 1989',
      description: 'Former American football wide receiver who played college football at Baylor, where he became the career leader in receptions, receiving yards, and receiving touchdowns. Drafted by the Tennessee Titans in the first round of the 2012 NFL Draft.',
    },
  ];

  const timelineEvents = [
    { year: 'ca. 800-1680', event: 'Caddo Indians occupied region, building mounds and establishing villages around mineral springs and cypress creek areas.' },
    { year: '1835', event: 'Kendall Lewis, earliest Anglo settler in future Titus County, established on Swauano Creek (land patented February 1842).' },
    { year: '1846 May 11', event: 'Texas Legislature created Titus County, named for Andrew Jackson Titus; Mount Pleasant designated county seat.' },
    { year: '1847', event: 'Post office established in Mount Pleasant.' },
    { year: '1848 May 11', event: 'Mount Pleasant townsite officially founded and incorporated by John Binion Sr., Burrell Moore, Richard Moore, and L. Gilbert.' },
    { year: '1850', event: 'Population of Mount Pleasant: 227.' },
    { year: '1860', event: 'Titus County population: 9,648 (including present Franklin and Morris counties).' },
    { year: '1861', event: 'Titus County voted for secession 411 to 285; approximately 1,500 men served Confederate forces; Mount Pleasant operated Confederate transportation depot.' },
    { year: '1876-1878', event: 'Railroads arrive: East Line and Red River Railroad (1876); Tyler Tap narrow gauge extended to Mount Pleasant (1878), reorganized as Texas and St. Louis Railway (1879).' },
    { year: '1885', event: 'Mount Pleasant had bank, three churches, steam flour mills, cotton gins, weekly newspaper; population 800.' },
    { year: '1895-1897', event: 'Fifth Titus County Courthouse constructed in Italianate style by architects F.B. & W.S. Hull.' },
    { year: '1900 Sep 17', event: 'T.C. Hutchings became first Mayor; John B. Stephens Sr. became City Marshal.' },
    { year: '1908-1915', event: 'Mount Pleasant known as health resort due to red mineral springs; Dellwood Hotel operated 1909-1916.' },
    { year: '1910', event: 'Confederate Soldiers Reunion held at Dellwood Hotel; thousands attended, consuming all food in town by third day.' },
    { year: '1920', event: 'Population exceeded 4,000 for first time.' },
    { year: '1930s', event: 'Great Depression reduced population to approximately 3,500; businesses declined from 190 to 121 by 1936.' },
    { year: '1936 Feb', event: 'Oil discovered at Talco (Titus County), creating regional boom; Mount Pleasant served as headquarters for oil operations.' },
    { year: '1940', event: 'Titus County Courthouse remodeled to Art Deco/Moderne style.' },
    { year: '1961-1962', event: 'Courthouse encased in aluminum siding, earning designation as "ugliest courthouse in Texas."' },
    { year: '1977', event: 'Lake Bob Sandlin impounded; formal dedication June 25, 1978.' },
    { year: '1985', event: 'Northeast Texas Community College opened, serving Camp, Morris, and Titus counties.' },
    { year: '1991', event: 'Aluminum siding removed from courthouse, restoring 1940 Art Deco appearance.' },
    { year: '1993', event: 'Designated official Texas Main Street City.' },
    { year: '2012', event: 'Dr Pepper mural restored by artist David Freeman; Mount Pleasant Historical Museum moved to new location in Public Library.' },
    { year: '2020', event: 'Population: 16,047; 55.0% Hispanic or Latino, 27.79% White (non-Hispanic), 13.52% Black or African American.' },
  ];

  const interestingFacts = [
    'The city\'s name evolved from Caddo Indian terminology for "pleasant mound," referring to large burial mounds, which early settlers modified to "Pleasant Mount" and then inverted to "Mount Pleasant".',
    'Before 1830, Caddo Indians camped around mineral springs flowing in three colors—red, white, and blue—a remarkable natural phenomenon now preserved at Dellwood Park.',
    'Henry Clay Thruston (1830-1909), estimated between 7 feet 1 inch and 8 feet tall, lived in Mount Pleasant and gained national recognition for his extraordinary height.',
    'From 1908 to 1915, Mount Pleasant operated as a health resort centered on mineral springs, with the lavish Dellwood Hotel (1909-1916) attracting visitors seeking therapeutic waters.',
    'The 1910 Confederate Soldiers Reunion at Dellwood Hotel hosted thousands who consumed all food in town by the third day.',
    'The Titus County Courthouse underwent dramatic transformations: built 1895-1897 in Italianate style, remodeled 1940 to Art Deco, encased in aluminum siding 1961-1962 (earning "ugliest courthouse in Texas"), and restored to 1940 appearance in 1991.',
    'Following the February 1936 oil discovery at Talco, half a million dollars reportedly changed hands around Mount Pleasant\'s courthouse square in one week as oil men traded leases.',
    'The 1894 red brick building on the courthouse square features one of the largest hand-painted Dr Pepper advertisements in Texas, restored in 2012. Mount Pleasant displays the only downtown vintage Dr Pepper banners in the world during holidays.',
    'Multiple railroad lines converging in the 1870s-1880s earned Mount Pleasant the designation "Hub of Northeast Texas".',
    'Ray Price (1926-2013), who achieved national fame for innovative country music and was inducted into the Country Music Hall of Fame in 1996, was born near Mount Pleasant.',
    'Mount Pleasant claims to be the first town in Texas to welcome a Walmart in the 1970s.',
    'Northeast Texas Community College (established 1985) serves three counties. The Elizabeth Hoggatt Whatley Agriculture Complex is a Platinum-LEED certified "net-zero" building producing more energy than it consumes.',
    'Lake Bob Sandlin (1977-1978), with 9,004 acres and 75 miles of shoreline, was named for local businessman Bob Sandlin who led efforts to create the reservoir.',
    'Designated a Texas Main Street City in 1993 and nationally recognized since 2010, the 42-block historic district has successfully revitalized downtown.',
    'Population grew from 227 in 1850 to 16,047 by 2020, with dramatic demographic shifts: 55% Hispanic or Latino by 2020.',
  ];

  const sources = [
    { number: 1, citation: 'Texas State Historical Association. "Mount Pleasant, TX (Titus County)." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/mount-pleasant-tx-titus-county' },
    { number: 2, citation: 'Kids Kiddle. "Mount Pleasant, Texas for Kids."', url: 'https://kids.kiddle.co/Mount_Pleasant,_Texas' },
    { number: 3, citation: 'Wikipedia. "Mount Pleasant, Texas." Last updated October 24, 2002.', url: 'https://en.wikipedia.org/wiki/Mount_Pleasant,_Texas' },
    { number: 4, citation: 'TXGenWeb Project. "Mount Pleasant, Titus County, Texas." Last updated December 31, 2023.', url: 'https://www.txgenwebcounties.net/titus/pleasant.html' },
    { number: 5, citation: 'OpenGov. "City Profile: History of Mount Pleasant."', url: 'https://stories.opengov.com/mountpleasanttx/published/UGPAp2vd2' },
    { number: 6, citation: 'Tour Texas. "Mount Pleasant and Titus County." Last updated December 31, 2021.', url: 'https://www.tourtexas.com/destinations/mount-pleasant-titus-county' },
    { number: 7, citation: 'City of Mount Pleasant. "OUR HISTORY." Last updated October 24, 2021.', url: 'https://mpcity.net/history' },
    { number: 8, citation: 'City of Mount Pleasant. "MAIN STREET." Last updated October 6, 2025.', url: 'https://mpcity.net/main-street' },
    { number: 9, citation: 'Texas State Historical Association. "Titus County." Handbook of Texas Online. Last updated May 2, 2025.', url: 'https://www.tshaonline.org/handbook/entries/titus-county' },
    { number: 10, citation: 'Texas Almanac. "Titus County." Last updated September 30, 2022.', url: 'https://www.texasalmanac.com/places/titus-county' },
    { number: 11, citation: 'Historical Marker Database. "Historical Markers and War Memorials in Mount Pleasant, Texas."', url: 'https://www.hmdb.org/results.asp?Search=Place&Town=Mount+Pleasant&State=Texas' },
    { number: 12, citation: 'Mansfield Photo. "Mount Pleasant, Texas - The Charm and History." Last updated September 7, 2025.', url: 'https://mansfieldphoto.com/small-towns-of-texas/mount-pleasant-texas/' },
    { number: 13, citation: 'Historical Marker Database. "Dellwood Park."', url: 'https://www.hmdb.org/m.asp?m=120024' },
    { number: 14, citation: 'Texas Historical Commission Atlas. "Dellwood Park - Atlas Number 5449011173."', url: 'https://atlas.thc.texas.gov/Details/5449011173' },
    { number: 15, citation: 'Stephen F. Austin State University. "Titus County - Regional Resources Map for East Texas History."', url: 'https://www.sfasu.edu/heritagecenter/516.asp' },
    { number: 16, citation: 'Historical Marker Database. "Titus County C.S.A."', url: 'https://www.hmdb.org/m.asp?m=120025' },
    { number: 17, citation: 'Wikimedia Commons. "Titus County C.S.A., Mount Pleasant, Texas Historical Marker." March 16, 2012.', url: 'https://commons.wikimedia.org/wiki/File:Titus_County_C.S.A.,_Mount_Pleasant,_Texas_Historical_Marker_(6997904956).jpg' },
    { number: 18, citation: 'East Texas Journal. "Mount Pleasant Oil Mill." May 1, 2025.', url: 'https://www.easttexasjournal.net/2025/05/02/mount-pleasant-oil-mill/' },
    { number: 19, citation: 'Cotton Belt Rail Historical Society. "TYLER TAP Newsletter." September 2020.', url: 'http://cottonbeltdepotmuseum.com/linked/final_sept_newsletter__a.pdf' },
    { number: 20, citation: 'Texas State Historical Association. "St. Louis, Arkansas and Texas Railway." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/st-louis-arkansas-and-texas-railway' },
    { number: 21, citation: 'Wikipedia. "Texas and St. Louis Railway." Last updated October 8, 2023.', url: 'https://en.wikipedia.org/wiki/Texas_and_St._Louis_Railway' },
    { number: 22, citation: 'Texas State Historical Association. "St. Louis Southwestern Railway." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/st-louis-southwestern-railway' },
    { number: 23, citation: 'Texas Time Travel. "Mount Pleasant." Last updated March 10, 2022.', url: 'https://texastimetravel.com/cities/mount-pleasant/' },
    { number: 24, citation: 'American Courthouses. "Titus County." Last updated November 24, 2021.', url: 'https://courthouses.co/us-states/o-u/texas/titus-county/' },
    { number: 25, citation: '254 Texas Courthouses. "213 Titus County Courthouse." June 6, 2014.', url: 'http://www.254texascourthouses.net/213-titus-county.html' },
    { number: 26, citation: 'TexasCourtHouses.com. "Titus County Courthouse." Last updated July 18, 2017.', url: 'https://texascourthouses.com/project/titus-county-courthouse/' },
    { number: 27, citation: 'Historical Marker Database. "First Presbyterian Church of Mt. Pleasant."', url: 'https://www.hmdb.org/m.asp?m=120027' },
    { number: 28, citation: 'Yelp. "FIRST PRESBYTERIAN CHURCH - Mount Pleasant, TX."', url: 'https://www.yelp.com/biz/first-presbyterian-church-mount-pleasant' },
    { number: 29, citation: 'Portal to Texas History. "The Mount Pleasant Times."', url: 'https://texashistory.unt.edu/explore/titles/t02743/' },
    { number: 30, citation: 'Explore Texas. "History of Mount Pleasant Texas." August 19, 2025.', url: 'https://exploretexas.com/blog/history-of-mount-pleasant-texas/' },
    { number: 31, citation: 'Fiveable. "5.4 The Great Depression and the Dust Bowl in Texas." August 21, 2025.', url: 'https://fiveable.me/hs-texas-history/unit-5/great-depression-dust-bowl-texas/study-guide/DBCjSQl2PP8aa3FP' },
    { number: 32, citation: 'Texas Our Texas (Texas PBS). "The Great Depression and World War II." November 21, 2013.', url: 'https://texasourtexas.texaspbs.org/the-eras-of-texas/great-depression-ww2/' },
    { number: 33, citation: 'Texas Escapes. "Mount Pleasant Texas, Titus County seat." January 22, 2017.', url: 'https://www.texasescapes.com/EastTexasTowns/MountPleasantTexas.htm' },
    { number: 34, citation: 'East Texas Historical Journal. "The Social and Economic Consequences of the Discovery of Oil in Titus County, Texas." 1975.', url: 'https://scholarworks.sfasu.edu/cgi/viewcontent.cgi?article=1051&context=ethj' },
    { number: 35, citation: 'Texas State Historical Association. "Talco, TX." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/talco-tx' },
    { number: 36, citation: 'YouTube. "Riches Loom for Village Folk in Texas Oil Rush (1936)." July 29, 2020.', url: 'https://www.youtube.com/watch?v=1xYqCNuQbTs' },
    { number: 37, citation: 'Texas Historical Commission. "Spotlight on Mount Pleasant." Main Street Matters, September 2013.', url: 'https://www.thc.texas.gov/public/upload/September2013MSMattersMountPleasant.pdf' },
    { number: 38, citation: 'East-Texas.com. "Lake Bob Sandlin." Last updated December 31, 2024.', url: 'https://www.east-texas.com/lake-bob-sandlin.htm' },
    { number: 39, citation: 'Texas Parks and Wildlife Department. "Lake Bob Sandlin State Park." June 1, 2009.', url: 'https://tpwd.texas.gov/state-parks/lake-bob-sandlin' },
    { number: 40, citation: 'Yelp. "Lake Bob Sandlin - Parks."', url: 'https://www.yelp.com/biz/lake-bob-sandlin-mount-pleasant' },
    { number: 41, citation: 'Wikipedia. "Northeast Texas Community College." Last updated June 30, 2006.', url: 'https://en.wikipedia.org/wiki/Northeast_Texas_Community_College' },
    { number: 42, citation: 'U.S. News & World Report. "Northeast Texas Community College in Mount Pleasant, TX." July 25, 2024.', url: 'https://www.usnews.com/education/community-colleges/northeast-texas-community-college-CC06187' },
    { number: 43, citation: 'Niche. "Northeast Texas Community College." Last updated May 7, 2025.', url: 'https://www.niche.com/colleges/northeast-texas-community-college/' },
    { number: 44, citation: 'Catherine Sherman. "The Ugliest Courthouse in Texas." May 30, 2017.', url: 'https://catherinesherman.wordpress.com/2017/05/31/the-ugliest-courthouse-in-texas/' },
    { number: 45, citation: 'Mount Pleasant-Titus County Chamber of Commerce. "Demographics." Last updated March 16, 2020.', url: 'https://www.mtpleasanttx.com/demographics/' },
    { number: 46, citation: 'Mount Pleasant Economic Development Corporation. "Map of Main Street."', url: 'https://mpedc.org/population/small-business-entrepreneurship/main-street-map/' },
    { number: 47, citation: 'MyParisTexas. "Raise a Smile with Dr. Pepper in Downtown Paris." November 19, 2019.', url: 'https://myparistexas.com/raise-a-smile-with-dr-pepper-in-downtown-paris/' },
    { number: 48, citation: 'Portal to Texas History. "[Dr. Pepper Mural in Front of Factory Building]." March 2, 2022.', url: 'https://texashistory.unt.edu/ark:/67531/metapth1450322/' },
    { number: 49, citation: 'Visit Mount Pleasant. "Explore."', url: 'https://www.visitmountpleasanttx.com/copy-of-explore' },
    { number: 50, citation: 'City of Mount Pleasant. "Historical Main Street Continues to Thrive." September 28, 2023.', url: 'https://mpcity.net/historical-main-street-continues-to-thrive-in-the-heart-of-mount-pleasant' },
    { number: 51, citation: 'HR Ranch. "Lake Monticello - Titus, Texas."', url: 'https://hrcranch.com/property/lake-monticello-titus-texas/52628/' },
    { number: 52, citation: 'Texas Parks and Wildlife Department. "Lake Monticello Fishing Access."', url: 'https://tpwd.texas.gov/fishboat/fish/recreational/lakes/monticello/access.phtml' },
    { number: 53, citation: 'FamousFix.com. "People from Mount Pleasant, Texas."', url: 'https://www.famousfix.com/list/people-from-mount-pleasant-texas' },
    { number: 54, citation: 'Wikipedia. "Ray Price." Last updated July 9, 2005.', url: 'https://en.wikipedia.org/wiki/Ray_Price' },
    { number: 55, citation: 'Birthplace of Western Swing. "Ray Price." March 13, 2025.', url: 'https://www.birthplaceofwesternswing.com/post/ray-price' },
    { number: 56, citation: 'Texas State Historical Association. "Price, Noble Ray [Ray]." Handbook of Texas Online. March 22, 2016.', url: 'https://www.tshaonline.org/handbook/entries/price-noble-ray-ray' },
    { number: 57, citation: 'Texas Historical Commission Atlas. "First Presbyterian Church - Atlas Number 5449011175."', url: 'https://atlas.thc.texas.gov/Details/5449011175' },
    { number: 58, citation: 'Fort Tours. "Titus County Historical Markers."', url: 'https://www.forttours.com/pages/hmtitus.asp' },
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
        communityName="Mount Pleasant"
        county="Titus County"
        established="1846 (county seat); 1848 (incorporated)"
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
              Mount Pleasant, the county seat of Titus County in Northeast Texas, stands today as a community of approximately 16,000 residents whose history reflects the broader narrative of East Texas development from indigenous occupation through frontier settlement, agricultural dominance, railroad transformation, and twentieth-century diversification. Located at the junction of Interstate 30, U.S. Highway 271, and State Highway 49, approximately sixty-one miles southwest of Texarkana, the city occupies gently rolling terrain at an elevation of 390 feet in the heart of the East Texas Piney Woods. Mount Pleasant emerged from indigenous lands occupied by the Caddo people into a frontier county seat in 1846, growing through the nineteenth century as an agricultural center supported by cotton cultivation and livestock production. The city's transformation accelerated dramatically with railroad connections in the 1870s-1880s, which converted the isolated settlement into what became known as the "Hub of Northeast Texas".
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
            The region encompassing present-day Mount Pleasant sustained human habitation for millennia before European contact. During the historic period beginning around A.D. 800, the Caddo Indians—an agricultural people with sophisticated cultural development—dominated the area. The Caddo established permanent villages along major waterways including Big Cypress Creek and the Sulphur River, constructing large burial mounds and ceremonial centers. Caddo legend credits the name of Mount Pleasant to indigenous terminology for "pleasant mound," referencing large earthwork mounds in and near the original townsite.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            Before 1830, Caddo Indians maintained campgrounds around mineral springs flowing red, white, and blue waters at what would become Dellwood Park. The earliest Anglo settler in what became Titus County was Kendall Lewis, who moved into the area in 1835 with his wife, probably a Creek Indian. Lewis's land grant, patented in February 1842, is said to have been the first land surveyed in the county. During the early 1840s, settlement proceeded rapidly as pioneers from the United States—particularly from southern states—moved into the region, drawn by fertile soil, abundant timber, plentiful game, and access to water resources.
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
            The Texas Legislature established Titus County on May 11, 1846, during the First Legislature following Texas statehood. The county was named for Andrew Jackson Titus (1814-1855), an early Red River County settler and pioneer resident who opened the county's first road to the river port in Jefferson. Mount Pleasant was designated as the county seat at the time of organization. The townsite of Mount Pleasant was officially founded and incorporated on May 11, 1848, when John Binion, Sr., Richard Moore, Burrell Moore, and L. Gilbert gave the land for a forty-eight block townsite. The 1850 census recorded Mount Pleasant's population as 227, while Titus County contained 3,636 residents.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            Between 1850 and 1860, Titus County's population grew dramatically from 3,636 to 9,648. Cotton and corn were the main cash crops. In the election of 1860, Titus County voters supported states' rights candidate John C. Breckinridge, but when the Secession Convention convened, delegate Joshua F. Johnson opposed secession. Despite these efforts, Titus County voters approved secession by a vote of 411 to 285. With the outbreak of the Civil War, approximately 1,500 Titus County men served either in Confederate or state units. During the Civil War, Mount Pleasant served as the site of a Confederate transportation depot that employed blacksmiths, carpenters, harness makers, and wheelwrights.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            The town remained small until the completion of railroad connections in the 1870s-1880s. In 1876, the East Line and Red River Railroad Company laid tracks across the county. Following in 1878 was the extension to Mount Pleasant of the narrow gauge "Tyler Tap," which was reorganized into the Texas and St. Louis Railway Company on May 17, 1879. The arrival of the railroads transformed Mount Pleasant from an isolated agricultural community into a transportation hub. By 1885, Mount Pleasant had a bank, three churches, steam flour mills and cotton gins, a weekly newspaper, and a population of 800.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Early 20th Century and the Oil Boom" background="subtle">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            A unique chapter in Mount Pleasant's history occurred from 1908 to 1915 when the town became known as a health resort because of red mineral springs nearby. The Dellwood Hotel, built from 1909 to 1916 by the Red Mineral Springs Development Company, offered accommodations to visitors seeking therapeutic benefits of the mineral waters. In the summer of 1910, a Confederate Soldiers Reunion was held on the hotel grounds, with thousands attending who camped in and around the area. By the third day of the event, all available food in town had been consumed. The hotel burned around 1925, and the area remained vacant until the City of Mount Pleasant purchased 45 acres in 1951, establishing Dellwood Park.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            The Great Depression struck Mount Pleasant with devastating force. During the early 1930s, the population declined to approximately 3,500 from a mid-1920s high exceeding 4,000. The number of businesses fell dramatically from 190 to just 121 by 1936. An event of enormous significance occurred on February 7, 1936, when oil was discovered at Talco in the northern part of the county. Within twenty-four hours of the announcement, Mount Pleasant—as the county seat with hotels, banks, and superior communication facilities—became headquarters for most oil operations. Around the courthouse, Cadillacs seemed to outnumber local vehicles as oil men, lease-hounds, and speculators descended on the town. Half a million dollars reportedly changed hands on the Sunday following the discovery.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Postwar Development and Modern Era">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            The postwar period saw Mount Pleasant experience sustained growth and modernization. The population was 6,348 in 1952, demonstrating recovery from the Depression-era low. By 1960, the population had reached 8,027, continuing to 11,003 in 1980 and 12,291 in 1990. Between 1956 and 1966, the town completed significant infrastructure projects including Lake Tankersley, three school buildings, a post office building, and additions to water and sewer systems. Important industries included poultry processing, meat packing, garment manufacturing, oil refining, lumber processing, and feed milling.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            The creation of Lake Bob Sandlin in 1977 marked a major recreational development for the region. Named in honor of local businessman Bob Sandlin, the lake has a surface area of 9,004 acres and 75 miles of shoreline. In January 1984, voters of Camp, Morris, and Titus counties approved the creation of a community college district. Northeast Texas Community College opened in fall 1985, serving approximately 2,758 students. The City of Mount Pleasant was selected by the Texas Historical Commission to become an official Texas Main Street City in 1993, with the program nationally recognized since 2010. The 2020 census revealed significant demographic shifts: 55.0 percent of residents identified as Hispanic or Latino, 27.79 percent as White (non-Hispanic), and 13.52 percent as Black or African American (non-Hispanic).
          </p>
        </div>
      </ContentSection>
      
      {/* Notable People */}
      <ContentSection title="Notable People and Events" background="subtle">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1200px]">
          {notablePeople.map((person, index) => (
            <NotablePerson key={index} {...person} />
          ))}
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
            Mount Pleasant's economy evolved from subsistence agriculture to cotton dominance, railroad-facilitated commerce, industrial diversification, and modern regional service provision. The earliest settlers in the 1840s practiced mixed agriculture, raising corn, hogs, cattle, and limited cotton. Between 1850 and 1860, cotton production expanded dramatically from 314 bales to 4,953 bales (400 pounds each). Railroad connections in the 1870s-1880s transformed Mount Pleasant's economic geography. The East Line and Red River Railroad (1876), Tyler Tap narrow gauge (1878), and Texas and St. Louis Railway (1879, later the St. Louis Southwestern or "Cotton Belt") connected Mount Pleasant to regional and national markets. Mount Pleasant became recognized as the "Hub of Northeast Texas" by the close of the nineteenth century.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            Post-World War II industrialization brought sustained economic diversification. Important industries by the 1960s included poultry processing, meat packing, garment manufacturing, oil refining, lumber processing, and feed milling. Poultry processing became particularly significant, with companies like Pilgrim's Pride establishing major operations. Contemporary Mount Pleasant functions as a diversified regional center. The 2018 retail trade area encompassed 106,000 persons, significantly exceeding the city's population. Manufacturing, particularly poultry processing, remains important. Healthcare, education, retail, and services provide substantial employment. The Main Street Historic District supports local businesses including boutiques, restaurants, cafes, and specialty stores.
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
            Mount Pleasant's cultural and educational institutions evolved from frontier informality to organized civic life, religious community, public schooling, and contemporary diversity. Religious institutions formed the earliest organized cultural centers, providing worship, social gathering, education, charitable work, and community identity. The First Presbyterian Church, organized in 1881 and building its structure in 1883, exemplifies nineteenth-century denominational organization. Northeast Texas Community College, established in 1985, marked a major educational advancement. The college offers Associate of Arts, Associate of Science, and Associate of Applied Science degrees. Popular programs include General Studies, Registered Nursing, and Physical Therapy Assistant. The Mount Pleasant Historical Museum, which moved to spacious facilities in the new Public Library in March 2012, preserves and interprets local history. Main Street events create contemporary civic culture, with the Market on the Square and 2nd Saturday Food Truck gatherings bringing residents together. The Dr Pepper mural and vintage holiday banners add distinctive visual elements to the streetscape.
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
      <ContentSection title="Summary" background="subtle">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            Mount Pleasant, Texas, county seat of Titus County since 1846, evolved from Caddo Indian lands into a frontier settlement and regional center. Founded May 11, 1848, by pioneers including John Binion Sr. and Richard Moore, the town grew slowly until railroad connections in the 1870s-1880s transformed it into the "Hub of Northeast Texas." The population expanded from 227 in 1850 to 16,047 by 2020. Mount Pleasant served as a Confederate transportation depot during the Civil War, a health resort (1908-1915) centered on red mineral springs, and headquarters for the 1936 Talco oil boom. The Great Depression reduced population and businesses, but postwar industrialization—particularly poultry processing—diversified the economy. Designated a Texas Main Street City in 1993, Mount Pleasant preserves historic architecture including the transformed Titus County Courthouse while serving as a commercial, educational, and recreational hub for Northeast Texas.
          </p>
        </div>
      </ContentSection>
      
      {/* Sources */}
      <ContentSection title="Sources">
        <SourcesList sources={sources} />
      </ContentSection>
      
      <Footer />
    </div>
  );
}