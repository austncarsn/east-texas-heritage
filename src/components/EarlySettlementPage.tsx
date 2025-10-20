import { Header } from './Header';
import { ContentSection } from './ContentSection';
import { SourcesList } from './SourcesList';
import { Footer } from './Footer';
import { ArrowLeft } from 'lucide-react';

interface EarlySettlementPageProps {
  onBack?: () => void;
}

export function EarlySettlementPage({ onBack }: EarlySettlementPageProps) {
  const sources = [
    { number: 1, citation: 'Texas State Historical Association. "Mexican Colonization Laws." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/mexican-colonization-laws' },
    { number: 2, citation: 'The Story of Texas. "Frontier Folk."', url: 'https://www.thestoryoftexas.com/discover/campfire-stories/frontier-folk' },
    { number: 3, citation: 'Texas State Historical Association. "Anglo-American Colonization." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/anglo-american-colonization' },
    { number: 4, citation: 'Texas State Historical Association. "Slavery." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/slavery' },
    { number: 5, citation: 'Brookeland ISD. "Chapter 9 Section 1 Reading."', url: 'https://www.brookelandisd.net/page/open/3469/0/Chapter 9 Section 1 Reading.pdf' },
    { number: 6, citation: 'FamilySearch. "United States Migration to Texas 1820 to 1845."', url: 'https://www.familysearch.org/en/wiki/United_States_Migration_to_Texas_1820_to_1845_-_International_Institute' },
    { number: 7, citation: 'Wikipedia. "Texas–Indian wars."', url: 'https://en.wikipedia.org/wiki/Texas–Indian_wars' },
    { number: 8, citation: 'Access Genealogy. "The Texas Cherokee 1820-1830."', url: 'https://accessgenealogy.com/native/the-texas-cherokee-1820-1830.htm' },
    { number: 9, citation: 'The Story of Texas. "American Indians."', url: 'https://www.thestoryoftexas.com/discover/campfire-stories/american-indians' },
    { number: 10, citation: 'Lumen Learning. "American Settlers in Texas."', url: 'https://courses.lumenlearning.com/wm-ushistory1/chapter/american-settlers-in-texas/' },
    { number: 11, citation: 'Texas General Land Office. "History of Texas Public Lands." 2022.', url: 'https://www.glo.texas.gov/sites/default/files/2025-01/history-of-texas-public-lands 2022.pdf' },
    { number: 12, citation: 'Texas General Land Office. "Headright and Military Land Grants." 2022.', url: 'https://www.glo.texas.gov/sites/default/files/2025-01/GLO Headright and Military Land Grants 2022.pdf' },
    { number: 13, citation: 'Texas State Historical Association. "Republic of Texas." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/republic-of-texas' },
    { number: 14, citation: 'Lone Star Genealogy. "Texas Migration."', url: 'http://www.lonestargenealogy.com/courses/texas/migration.html' },
    { number: 15, citation: 'University of Virginia Library. "Slavery in Texas."', url: 'https://libraetd.lib.virginia.edu/public_view/3x816m74g' },
    { number: 16, citation: 'Wikipedia. "History of slavery in Texas."', url: 'https://en.wikipedia.org/wiki/History_of_slavery_in_Texas' },
    { number: 17, citation: 'Texas State Historical Association. "Cotton Culture." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/cotton-culture' },
    { number: 18, citation: 'National Park Service. "El Camino Real Stories."', url: 'https://www.nps.gov/elte/learn/historyculture/stories.htm' },
    { number: 19, citation: 'NPS History. "El Camino Real Brochure."', url: 'https://npshistory.com/publications/elte/brochures/tx.pdf' },
    { number: 20, citation: 'Texas Almanac. "Origins of the Camino Real in Texas."', url: 'https://www.texasalmanac.com/articles/origins-of-the-camino-real-in-texas' },
    { number: 21, citation: 'Texas Historical Commission. "El Camino Real Lesson Plan."', url: 'https://thc.texas.gov/public/upload/publications/Education/7th-Grade-Lesson-Plan-El-Camino-Real-de-los-Tejas.pdf' },
    { number: 22, citation: 'Texas State Historical Association. "Old San Antonio Road." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/old-san-antonio-road' },
    { number: 23, citation: 'Trammel\'s Trace. "About."', url: 'http://trammelstrace.com/about' },
    { number: 24, citation: 'Trammel\'s Trace. "Losing the Trail."', url: 'http://trammelstrace.com/trammelstraceblog/2019/11/9/losing-the-trail-trammels-trace-and-williams-settlement' },
    { number: 25, citation: 'YouTube. "Trammel\'s Trace Documentary."', url: 'https://www.youtube.com/watch?v=h4F6DthgCFw' },
    { number: 26, citation: 'Texas Escapes. "Trammel\'s Trace."', url: 'https://www.texasescapes.com/ClayCoppedge/Trammels-Trace.htm' },
    { number: 27, citation: 'Encyclopedia of Arkansas. "Trammel\'s Trace."', url: 'https://encyclopediaofarkansas.net/entries/trammels-trace-3793/' },
    { number: 28, citation: 'Jefferson Texas. "History."', url: 'https://www.jeffersontexas.us/history/' },
    { number: 29, citation: 'Texas State Historical Association. "Jefferson, TX." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/jefferson-tx-marion-county' },
    { number: 30, citation: 'Visit Jefferson Texas. "History."', url: 'https://visitjeffersontexas.com/history' },
    { number: 31, citation: 'Texas State Historical Association. "Fredonian Rebellion." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/fredonian-rebellion' },
    { number: 32, citation: 'Wikipedia. "Fredonian Rebellion."', url: 'https://en.wikipedia.org/wiki/Fredonian_Rebellion' },
    { number: 33, citation: 'Texas State Historical Association. "Edwards Colony." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/edwards-colony' },
    { number: 34, citation: 'Sons of DeWitt Colony. "Fredonian Rebellion."', url: 'https://www.sonsofdewittcolony.org/fredonian.htm' },
    { number: 35, citation: 'Stephen F. Austin State University Heritage Center. "Fredonian Rebellion."', url: 'https://www.sfasu.edu/heritagecenter/7042.asp' },
    { number: 36, citation: 'Exploros. "Short History of Fredonia."', url: 'https://www.exploros.com/summary/short-history-of-fredonia' },
    { number: 37, citation: 'Texas State Historical Association. "Law of April 6, 1830." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/law-of-april-6-1830' },
    { number: 38, citation: 'Fiveable. "Law of April 6, 1830."', url: 'https://fiveable.me/key-terms/hs-texas-history/law-of-april-6-1830' },
    { number: 39, citation: 'Texas State Historical Association. "Texas Day by Day - April 6."', url: 'https://www.tshaonline.org/texas-day-by-day/entry/569' },
    { number: 40, citation: 'UNT Texas History. "Road to Texas Revolution."', url: 'https://education.texashistory.unt.edu/downloads/documents/7/units/texas-revolution/lessons/road-to-texas-revolution/accommodations/slideshow.pdf' },
    { number: 41, citation: 'Exploros. "Law of April 6, 1830."', url: 'https://www.exploros.com/summary/Law-of-April-6-1830-1' },
    { number: 42, citation: 'East Texas Historical Association. "Law of April 6, 1830."', url: 'https://www.easttexashistorical.org/ath/the-law-of-april-6-1830-apr-28-2024' },
    { number: 43, citation: 'City of Nacogdoches. "History."', url: 'https://www.nactx.us/601/History-of-Nacogdoches' },
    { number: 44, citation: 'Texas State Historical Association. "Nacogdoches, Battle of." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/nacogdoches-battle-of' },
    { number: 45, citation: 'FamilySearch. "Texas Land and Property."', url: 'https://www.familysearch.org/en/wiki/Texas_Land_and_Property' },
    { number: 46, citation: 'UNT Texas History. "Between the Creeks."', url: 'https://texashistory.unt.edu/ark:/67531/metapth752794/m2/1/high_res_d/Between%20_the_Creeks_by_Gwen_Pettit_compiled_by_Melinda_Fisher.pdf' },
    { number: 47, citation: 'Texas State Historical Association. "Indians." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/indians' },
    { number: 48, citation: 'National Park Service. "Trail of Tears."', url: 'https://www.nps.gov/articles/the-trail-of-tears-and-the-forced-relocation-of-the-cherokee-nation-teaching-with-historic-places.htm' },
    { number: 49, citation: 'Wikipedia. "Texas Revolution."', url: 'https://en.wikipedia.org/wiki/Texas_Revolution' },
    { number: 50, citation: 'Texapedia. "Cordova Rebellion."', url: 'https://texapedia.info/cordova-rebellion/' },
    { number: 51, citation: 'Stephen F. Austin State University. "Frontier Towns in Antebellum East Texas: Jasper County."', url: 'https://scholarworks.sfasu.edu/context/ethj/article/1384/viewcontent/1_FRONTIER_TOWNS_IN_ANTEBELLUM_EAST_TEXAS__JASPER_COUNTY.pdf' },
    { number: 52, citation: 'Stephen F. Austin State University Heritage Center. "San Augustine."', url: 'https://www.sfasu.edu/heritagecenter/3905.asp' },
    { number: 53, citation: 'Texas Historical Commission. "Historic Road Trip: Nacogdoches and San Augustine."', url: 'https://thc.texas.gov/blog/historic-road-trip-nacogdoches-and-san-augustine' },
    { number: 54, citation: 'Texas State Historical Association. "Nacogdoches County." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/nacogdoches-county' },
    { number: 55, citation: 'Texas State Historical Association. "Education." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/education' },
    { number: 56, citation: 'Texas Almanac. "Religion in Early Texas."', url: 'https://www.texasalmanac.com/articles/religion-in-early-texas' },
    { number: 57, citation: 'Brookeland ISD. "Chapter 9 Section 2 Reading."', url: 'https://www.brookelandisd.net/page/open/3469/0/Chapter 9 Section 2 Reading.pdf' },
    { number: 58, citation: 'Texas State Historical Association. "San Augustine County." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/san-augustine-county' },
    { number: 59, citation: 'Texas Highways. "Tracing General Sam\'s Piney Woods."', url: 'https://texashighways.com/culture/history/tracing-general-sam-s-piney-woods/' },
    { number: 60, citation: 'Texas State Historical Association. "Regulator-Moderator War." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/regulator-moderator-war' },
    { number: 61, citation: 'Legends of America. "Shelby County Regulators."', url: 'https://www.legendsofamerica.com/shelby-county-regulators/' },
    { number: 62, citation: 'True West Magazine. "The Bloodiest Feud."', url: 'https://truewestmagazine.com/article/the-bloodiest-feud-2/' },
    { number: 63, citation: 'Barnes & Noble. "War in East Texas by Bill O\'Neal."', url: 'https://www.barnesandnoble.com/w/war-in-east-texas-bill-oneal/1111789952' },
    { number: 64, citation: 'Texas Beyond History. "Logging at Aldridge Sawmill."', url: 'https://www.texasbeyondhistory.net/aldridge/logging.html' },
    { number: 65, citation: 'Farmers Branch. "Log Culture."', url: 'https://www.farmersbranchtx.gov/251/Log-Culture' },
    { number: 66, citation: 'Log Cabin Village. "Structures."', url: 'https://www.logcabinvillage.org/structures' },
    { number: 67, citation: 'The Active Historian. "Log Cabin Pioneers - Dallas, TX."', url: 'https://theactivehistorian.com/2025/04/10/log-cabin-pioneers-dallas-tx/' },
    { number: 68, citation: 'Texas State Library. "Law Enforcement in Texas."', url: 'http://www.tsl.texas.gov/treasures/law/index.html' },
    { number: 69, citation: 'Lumen Learning. "General Reynolds Describes Lawlessness in Texas, 1868."', url: 'https://courses.lumenlearning.com/wm-ushistory1/chapter/primary-source-general-reynolds-describes-lawlessness-in-texas-1868/' },
    { number: 70, citation: 'UNT Digital Library. "Regulator-Moderator War Research."', url: 'https://digital.library.unt.edu/ark:/67531/metadc1442713/' },
    { number: 71, citation: 'YouTube. "Regulator-Moderator War Documentary."', url: 'https://www.youtube.com/watch?v=NGaEwTcoBfI' },
    { number: 72, citation: 'Texapedia. "Wild West History."', url: 'https://texapedia.info/wild-west-history/' },
    { number: 73, citation: 'Facebook. "Texas Settlement History Discussion."', url: 'https://www.facebook.com/groups/517159596512158/posts/1327360292158747/' },
    { number: 74, citation: 'Wikipedia. "History of Texas forests."', url: 'https://en.wikipedia.org/wiki/History_of_Texas_forests' },
    { number: 75, citation: 'UNC Press Scholarship. "Slavery and Cotton in Texas."', url: 'https://northcarolina.universitypressscholarship.com/view/10.5149/northcarolina/9781469624242.001.0001/upso-9781469624242-chapter-4' },
    { number: 76, citation: 'JSTOR. "Early Texas Religion."', url: 'https://www.jstor.org/stable/30236651' },
    { number: 77, citation: 'Ad Fontes Journal. "No Cowboy Religion."', url: 'https://adfontesjournal.com/print-edition/no-cowboy-religion-remapping-protestantism-on-the-american-frontier/' },
    { number: 78, citation: 'Texas State Historical Association. "Religion." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/religion' },
    { number: 79, citation: 'University of Houston Digital Library. "Texas Land Grants."', url: 'https://uh-ir.tdl.org/bitstreams/93490ac3-ea74-49f3-96d3-4d15d40b7033/download' },
    { number: 80, citation: 'Courthouse Direct. "Understanding Texas Land Grants."', url: 'https://info.courthousedirect.com/blog/bid/405607/understanding-texas-land-grants' },
  ];

  return (
    <div style={{ backgroundColor: 'var(--background)' }}>
      <Header />
      
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        paddingTop: '120px',
        paddingBottom: '80px',
        backgroundColor: 'var(--surface)',
        borderBottom: '1px solid var(--divider)',
      }}>
        <div className="mx-auto px-[72px] max-w-[1400px]">
          {onBack && (
            <button
              onClick={onBack}
              className="group mb-8 inline-flex items-center gap-2 transition-all hover:-translate-x-1"
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '14px',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--foreground-muted)',
              }}
            >
              <ArrowLeft size={16} />
              <span className="group-hover:underline">Back to Home</span>
            </button>
          )}
          
          <div className="max-w-[900px]">
            <div className="mb-4">
              <span style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '14px',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--secondary)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}>
                1820s–1840s
              </span>
            </div>
            
            <h1 className="mb-6" style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '56px',
              fontWeight: 'var(--font-weight-bold)',
              lineHeight: '1.1',
              color: 'var(--foreground)',
            }}>
              Early Settlement in East Texas
            </h1>
            
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '20px',
              lineHeight: '1.6',
              color: 'var(--foreground-muted)',
            }}>
              The Formation of an American Frontier
            </p>
          </div>
        </div>
      </section>
      
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
              marginBottom: '16px',
            }}>
              The transformation of East Texas from Indigenous homelands to an American frontier settlement zone between 1820 and 1845 represents a pivotal chapter in Texas history. This period witnessed a dramatic demographic shift, the collision of Mexican and Anglo-American legal systems, violent conflicts over land and power, and the emergence of frontier institutions that would shape the region for generations.
            </p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--font-size-base)',
              lineHeight: 'var(--line-height-normal)',
              color: 'var(--foreground-muted)',
            }}>
              In 1820, East Texas remained sparsely populated by Europeans and Mexicans, with only about 3,000 Tejanos residing in the entire province. Within two decades, tens of thousands of Anglo-American settlers flooded into the region through legal empresario grants and illegal squatter settlements. By 1834, Anglo-Americans outnumbered Mexican citizens approximately 24,000 to 3,000, fundamentally altering the political, economic, and cultural character of the territory. This massive migration occurred in stages, shaped by changing political circumstances including Mexican independence (1821), the empresario system, restrictive policies following the Law of April 6, 1830, and the Republic of Texas era (1836-1845) which featured the most liberal land distribution policies.
            </p>
          </div>
        </div>
      </section>
      
      {/* Historical Sections */}
      <ContentSection title="Migration and Settlement Patterns" background="subtle">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            Anglo-American migrants to East Texas during the 1820s-1840s came predominantly from the American South, particularly from Tennessee, Kentucky, Missouri, Arkansas, Alabama, Mississippi, and Louisiana. The push factors driving this massive migration were numerous: the Panic of 1819 devastated the American economy, land in the United States sold for $1.25 per acre with immediate cash payment required, and legal troubles motivated many to seek fresh starts. "G.T.T." (Gone to Texas) became shorthand in debt record books—tax collectors immediately understood that pursuit was futile once a debtor had crossed into Mexican territory.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            Pull factors proved equally compelling. Mexican colonization laws offered dramatically better terms: heads of families could receive 4,605 acres at costs of less than 1.5 cents per acre with six years to complete payment. The prospect of establishing cotton plantations using slave labor attracted wealthy Southern planters. Stephen F. Austin explicitly recognized this reality in 1824: "The principal product that will elevate us from poverty is cotton, and we cannot do this without the help of slaves."
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            Settlers reached East Texas via several well-established routes. <strong>El Camino Real de los Tejas</strong> (Royal Road of the Tejas, also called the Old San Antonio Road) served as the primary overland route, stretching from Natchitoches, Louisiana, through Nacogdoches and San Augustine to San Antonio. <strong>Trammel's Trace</strong> emerged as the first major route from the north, connecting the Red River settlements with Nacogdoches. Named after Nicholas Trammell, a Tennessee trader whom Stephen F. Austin condemned as among "criminals and bad men," the trace began as an Indian path and smugglers' trail. The <strong>Red River water route</strong> provided access for those traveling by flatboat and steamboat from ports such as New Orleans and Shreveport, with Jefferson, Texas (founded in the early 1840s) developing as the westernmost navigable point.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Empresario Grants and Land Policies">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            The empresario system became the primary mechanism for organized Anglo-American colonization of Texas under Mexican rule. Empresarios served as immigration agents who contracted with the Mexican government to bring specified numbers of families to designated territories. In exchange for fulfilling their contracts, empresarios received premium lands at no cost—typically five leagues and five labors (approximately 23,000 acres) for every 100 families settled.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            Stephen F. Austin's enterprise established the template for successful empresario colonies. Arriving in 1821 as heir to his deceased father Moses Austin's Spanish permit, Stephen F. Austin negotiated new terms with Mexican officials and carefully selected land along the Brazos and Colorado rivers. Austin distinguished his colony through meticulous advance surveying, which avoided the boundary disputes and litigation that plagued other frontier regions. His systematic approach made his colony remarkably successful.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            The <strong>Haden Edwards colony</strong> in East Texas demonstrated both the potential and perils of the empresario system. Edwards received his grant on April 14, 1825, entitling him to settle as many as 800 families in a broad area around Nacogdoches. This grant encompassed some of the most contested territory in Texas—the former Neutral Ground between Spanish and American territories, inhabited by fugitives, squatters, and people with conflicting land claims. Edwards's heavy-handed demand that all previous landowners present evidence of their claims or forfeit their land to new settlers naturally offended long-established residents, leading to the <strong>Fredonian Rebellion</strong> of December 1826-January 1827, when Edwards supporters seized control of Nacogdoches and proclaimed the independent "Republic of Fredonia." The rebellion collapsed when Mexican forces and Stephen F. Austin's militia marched on Nacogdoches, but it convinced Mexican authorities that American immigrants posed a grave threat.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="The Law of April 6, 1830" background="subtle">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            This legislation, often compared to the Stamp Act as a catalyst for revolution, emerged directly from General Manuel de Mier y Terán's 1828 inspection of Texas. Terán reported that Anglo-Americans outnumbered Mexicans 10 to 1, most colonists spoke no Spanish, many disregarded Mexican laws, and American cultural and economic influence far exceeded that of Mexico. He recommended urgent counter-measures to prevent Texas from slipping entirely from Mexican control.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            The law, passed April 6, 1830, authorized financing for transporting Mexican and European colonists to Texas, opened coastal trade to foreigners, appointed a federal commissioner of colonization, forbade further introduction of slaves into Mexico, and most controversially, Article 11 was intended to prohibit or severely limit immigration from the United States. Texas colonists reacted with outrage. The law's enforcement led directly to the Anahuac Disturbances of 1832, the Battle of Velasco, and contributed to the accumulation of grievances that fueled the Texas Revolution. The Battle of Nacogdoches on August 2, 1832, sometimes called "the opening gun of the Texas Revolution," occurred when Texas settlers fought Mexican forces house-to-house until the Mexican garrison retreated, effectively ending Mexican military control of East Texas.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Republic of Texas Land Policy">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            After achieving independence in April 1836, the Republic of Texas adopted the most generous land distribution policy in American history. The Constitution of 1836 established a class system of headright grants based on arrival date:
          </p>
          <ul style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
            paddingLeft: '24px',
          }}>
            <li><strong>First Class Headrights:</strong> Settlers present before March 2, 1836 who had not received Mexican grants could claim 4,605.5 acres for heads of families, or 1,476.1 acres for single men</li>
            <li><strong>Second Class Headrights:</strong> Arrivals between March 2, 1836 and October 1, 1837 received 1,280 acres for heads of families and 640 acres for single men</li>
            <li><strong>Third Class Headrights:</strong> Arrivals between October 1, 1837 and January 1, 1840 received 640 acres for heads of families and 320 acres for single men</li>
            <li><strong>Fourth Class Headrights:</strong> Arrivals between January 1, 1840 and January 1, 1842 received the same amounts as Third Class</li>
          </ul>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            Veterans of the Texas Revolution received additional grants varying from 320 acres for three months' service to 1,280 acres for twelve months' service. This liberal policy stimulated enormous immigration. From 1836 to 1845, approximately 135,000 settlers migrated to Texas. Significantly, Black persons and American Indians were excluded from headright grants.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Relations with Indigenous Nations" background="subtle">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            The Cherokee began migrating to East Texas around 1819-1820, with approximately sixty families led by Chief Bowl (also called Duwali) crossing from Arkansas into Spanish territory north of Nacogdoches. They believed they had been promised land by Spanish representatives and sought to escape the pressures of American expansion. During the Texas Revolution, Cherokee leaders maintained careful neutrality. Sam Houston, who had lived among Cherokee in Tennessee, negotiated a treaty vowing that Texas would recognize Cherokee land claims if they refrained from attacking settlements or assisting Mexico.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            However, this promise went unfulfilled. When Mirabeau B. Lamar succeeded Houston as President of the Republic in 1838, policy shifted dramatically. Lamar demanded that the Cherokee voluntarily relinquish all their lands and remove to the Indian Territory, despite Houston's previous guarantees. When tribal leaders refused, Lamar used force. On July 15-16, 1839, a combined militia force attacked Cherokee, Delaware, and Shawnee forces at the <strong>Battle of the Neches</strong>. Approximately 100 Indians died, including Chief Bowl (killed while carrying a sword given him by Houston), compared to only three militia casualties. The Cherokee fled to the Choctaw Nation and northern Mexico, effectively clearing East Texas of organized Indigenous communities and opening their treaty-guaranteed lands to Anglo-American settlers.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="The Regulator-Moderator War">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            The most sustained and bloody conflict of the era raged from 1839 to 1844 in Harrison and Shelby counties. More than thirty men died in this feud—exceeding casualties in the more famous Hatfield-McCoy feud (about 12 dead), Arizona's Pleasant Valley War (about 25 dead), and New Mexico's Lincoln County War (about 15 dead including Billy the Kid).
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            The conflict originated in the frauds and land swindling rampant in the former Neutral Ground. Joseph Goodbread, a prominent land pirate who dealt in fake property titles, gained cooperation from the Shelby County Board of Commissioners. Charles W. Jackson, a former Mississippi steamboat captain and fugitive from Louisiana justice, emerged as Goodbread's principal antagonist. On April 20, 1841, Jackson rode into Shelbyville and shot the unarmed Goodbread in the chest, killing him instantly. Jackson then organized the <strong>Regulators</strong> ostensibly to prevent cattle rustling. In response, Edward Merchant and others organized the <strong>Moderators</strong> to "moderate" the Regulators' increasingly extreme actions.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            The violence escalated rapidly. Regulators burned homes, ambushed opponents, and conducted revenge killings. Moderators responded in kind. Sam Houston reportedly stated: "I think it advisable to declare Shelby County, Tenaha, and Terrapin Neck free and independent governments, and let them fight it out." The war finally ended in fall 1844 when President Houston deployed militia forces to restore order. Both factions agreed to a truce. However, scars remained—descendants of participants in some East Texas communities still do not associate with descendants of the opposing faction over 150 years later.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Early Settlement Towns" background="subtle">
        <div className="max-w-[900px]">
          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '20px',
            fontWeight: 'var(--font-weight-bold)',
            lineHeight: '1.3',
            color: 'var(--foreground)',
            marginBottom: '12px',
          }}>Nacogdoches</h3>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            Founded in 1779 by Don Antonio Gil Y'Barbo on the site of a former Caddo Indian village, Nacogdoches ranks as the oldest town in Texas. By 1800, with 660 inhabitants, it was the second-largest settlement in the Texas province. The town's location on the El Camino Real and at the junction with Trammel's Trace made it the primary entry point for American immigrants—truly "the gateway to Texas."
          </p>
          
          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '20px',
            fontWeight: 'var(--font-weight-bold)',
            lineHeight: '1.3',
            color: 'var(--foreground)',
            marginBottom: '12px',
          }}>San Augustine</h3>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            San Augustine developed in the early 1820s from the earlier Ayish Bayou District settlements, often called "the first settlement of consequence along El Camino Real." In 1832, a committee selected a town site on the east bank of Ayish Bayou, with surveyor Thomas McFarland laying out San Augustine as possibly "the first town in Texas on the purely American Plan"—356 lots on forty-eight city blocks with two central lots reserved for a courthouse square. Sam Houston maintained a law office and frequently visited the community.
          </p>
          
          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '20px',
            fontWeight: 'var(--font-weight-bold)',
            lineHeight: '1.3',
            color: 'var(--foreground)',
            marginBottom: '12px',
          }}>Jefferson</h3>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            Jefferson's founding in the early 1840s represented the last major town establishment of the settlement period. Allen Urquhart and Daniel Alley, credited as co-founders, recognized the site's advantages at the bend in Big Cypress Bayou. The first steamboat arrived in late 1843 or early 1844, a post office was established in 1846, and the town incorporated in 1848. Jefferson's growth exemplified frontier dynamism, with churches organizing in 1844-1855 and newspapers beginning in 1847-1848.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Economy and Frontier Life">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            Most settlers initially practiced <strong>subsistence farming</strong>—growing food for family consumption rather than market sale. Farmers cleared small plots from the dense forests, a backbreaking task accomplished with axes, fire, and sheer persistence. Crops included corn, beans, squash, pumpkins, and other vegetables. Farmers raised hogs (which could forage in the woods), cattle for beef and dairy products, and chickens for eggs and meat. Wild game supplemented diets, with Alexander Horton recalling that around San Augustine in 1824, wild game was "so plentiful he could sit on his front porch and shoot turkey, bear, and deer."
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            <strong>Cotton cultivation</strong> transformed portions of East Texas from wilderness to plantation country. Anglo-American colonists began growing cotton in 1821. The crop required large acreage, intensive labor, and access to markets—conditions that favored wealthy planters with capital and enslaved workforces. The first census in Austin's colony in 1825 showed 443 enslaved people in a total population of 1,800. By 1860, slavery had spread over the eastern two-fifths of Texas. Slavery became a contentious issue between Anglo settlers and Mexican authorities. The 1829 Guerrero decree conditionally abolished slavery throughout Mexican territories, increasing tensions. The Constitution of the Republic of Texas (1836) made slavery legal, forbade owners from freeing enslaved people without congressional consent, and forbade Congress from restricting the slave trade.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Social and Cultural Life" background="subtle">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            Despite frontier hardships, settlers created institutions that provided social cohesion. <strong>Education</strong> developed slowly and unevenly. Small private schools opened wherever populations reached sufficient size and someone possessed teaching skills. By 1836, Texas had more than 20 schools teaching reading, writing, arithmetic, and other subjects. Protestant denominations established schools alongside churches, viewing education as essential to religious instruction.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            Mexican law required Catholic conversion as a condition of land grants, but enforcement proved lax. Many Anglo settlers never converted or did so nominally while maintaining Protestant beliefs. Settlers maintained religious heritage through Bible reading, informal prayer meetings, and storytelling. Circuit-riding preachers traveled the frontier, holding services in homes, under brush arbors, or wherever people gathered. After independence, formal church organization accelerated, with Methodist, Presbyterian, and Baptist churches establishing congregations throughout the region.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            Despite hard work, settlers found time for entertainment. Horse racing remained a favorite pastime. Music and dancing provided popular recreation—one settler remembered a dance lasting almost 15 hours. Weddings and balls served as major social occasions. At home, families gathered for Bible reading and storytelling. Quilting bees, barn raisings, corn huskings, and similar work parties combined labor with socializing, enabling scattered frontier families to maintain social connections despite distances between homesteads.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Legacy of the Settlement Era">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            The 1820s-1840s settlement period fundamentally transformed East Texas from Indigenous homeland and sparsely populated Mexican frontier to a thoroughly American region characterized by Anglo-American demographic dominance, Southern cultural institutions (including slavery), cotton-based commercial agriculture, and English-language political and social structures. This transformation came at tremendous cost to displaced peoples. Indigenous tribes who had occupied the region for centuries or sought refuge from American expansion elsewhere found themselves expelled through military force and broken treaties. The settlement patterns and institutions established during this era shaped East Texas for generations. Town locations, property boundaries, transportation routes, and county organizations created during the 1820s-1840s persist into the present. Land titles arising from Spanish, Mexican, and Republic-era grants remain legally recognized in Texas. The towns established during this era—Nacogdoches, San Augustine, Jefferson, and others—preserve their history through historic districts, museums, and restored buildings.
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
