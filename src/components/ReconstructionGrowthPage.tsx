import { Header } from './Header';
import { ContentSection } from './ContentSection';
import { SourcesList } from './SourcesList';
import { Footer } from './Footer';
import { ArrowLeft } from 'lucide-react';

interface ReconstructionGrowthPageProps {
  onBack?: () => void;
}

export function ReconstructionGrowthPage({ onBack }: ReconstructionGrowthPageProps) {
  const sources = [
    { number: 1, citation: 'Texas State Historical Association. "Reconstruction." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/reconstruction' },
    { number: 2, citation: 'Texas Our Texas (PBS). "Civil War and Reconstruction."', url: 'https://texasourtexas.texaspbs.org/the-eras-of-texas/civil-war-reconstruction/' },
    { number: 3, citation: 'Texas Almanac. "Reconstruction to the 20th Century (1865-1899)."', url: 'https://www.texasalmanac.com/articles/reconstruction-to-the-20th-century' },
    { number: 4, citation: 'East Texas Historical Journal. "Black Education in Reconstruction Texas: the Contributions of the Freedmen\'s Bureau and Benevolent Societies."', url: 'https://scholarworks.sfasu.edu/cgi/viewcontent.cgi?article=1456&context=ethj' },
    { number: 5, citation: 'Texapedia. "The Texas State Police Law of 1870."', url: 'https://texapedia.info/police-law-reconstruction/' },
    { number: 6, citation: 'Texas State Historical Association. "Farm Tenancy." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/farm-tenancy' },
    { number: 7, citation: 'Exploros. "Farm Tenancy."', url: 'https://www.exploros.com/summary/Farm-Tenancy' },
    { number: 8, citation: 'Wikipedia. "Crop-lien system."', url: 'https://en.wikipedia.org/wiki/Crop-lien_system' },
    { number: 9, citation: 'Texas State Historical Association. "Freedmen\'s Settlements." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/freedmens-settlements' },
    { number: 10, citation: 'Texas Freedom Colonies Project. "What Are Freedom Colonies?"', url: 'https://www.thetexasfreedomcoloniesproject.com/what-are-freedom-colonies' },
    { number: 11, citation: 'East Texas Historical Journal. "The Black Community in Reconstruction Texas: Readjustments in Religion and the Evolution of the Negro Church."', url: 'https://scholarworks.sfasu.edu/cgi/viewcontent.cgi?article=1397&context=ethj' },
    { number: 12, citation: 'Preservation Texas. "Union Missionary Baptist Church."', url: 'https://www.preservationtexas.org/mep/union-missionary-baptist-church' },
    { number: 13, citation: 'City of Nacogdoches. "Zion Hill Baptist Church."', url: 'https://www.nactx.us/882/Zion-Hill-Baptist-Church' },
    { number: 14, citation: 'Texapedia. "Black Politicians in Texas from Reconstruction to Jim Crow."', url: 'https://texapedia.info/black-politicians-reconstruction/' },
    { number: 15, citation: 'Texas State Historical Association. "African Americans and Politics." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/african-americans-and-politics' },
    { number: 16, citation: 'Texas State Historical Association. "Davis, Edmund Jackson." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/davis-edmund-jackson' },
    { number: 17, citation: 'Humanities Texas. "Edmund J. Davis."', url: 'https://www.humanitiestexas.org/programs/tx-originals/list/edmund-j-davis' },
    { number: 18, citation: 'KUT. "Why Texas\' First Attempt at a Statewide Police Force Was a Crooked, Bloody Mess."', url: 'https://www.kut.org/austin/2015-04-22/why-texas-first-attempt-at-a-statewide-police-force-was-a-crooked-bloody-mess' },
    { number: 19, citation: 'Texas State Library. "Evolution of the Texas Rangers | Reconstruction in Texas, 1865-1874."', url: 'http://www.tsl.texas.gov/lobbyexhibits/ranger-reconstruction' },
    { number: 20, citation: 'Texas Ranger Hall of Fame. "Black Texas Ranger History."', url: 'https://www.texasranger.org/Pages/History/Black-Rangers' },
    { number: 21, citation: 'Texas State Library. "War, Ruin, and Reconstruction Part 2, 1866-1876."', url: 'http://www.tsl.texas.gov/governors/war/page2.html' },
    { number: 22, citation: 'Texas State Historical Association. "Ku Klux Klan." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/ku-klux-klan' },
    { number: 23, citation: 'American Yawp. "General Reynolds Describes Lawlessness in Texas, 1868."', url: 'https://www.americanyawp.com/reader/reconstruction/general-reynolds-describes-lawlessness-in-texas-1868/' },
    { number: 24, citation: 'Texas State Library. "Houston and Texas Central Railway Schedule."', url: 'https://www.tsl.texas.gov/exhibits/suffrage/battle/railroad-schedule-map.html' },
    { number: 25, citation: 'Texas State Historical Association. "Houston and Texas Central Railway." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/houston-and-texas-central-railway' },
    { number: 26, citation: 'Texas State Historical Association. "Railroads." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/railroads' },
    { number: 27, citation: 'East Texas Historical Journal. "East Texas and the Transcontinental Railroad."', url: 'https://scholarworks.sfasu.edu/cgi/viewcontent.cgi?article=1952&context=ethj' },
    { number: 28, citation: 'Texas State Historical Association. "Texas and Pacific Railway." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/texas-and-pacific-railway' },
    { number: 29, citation: 'Wikipedia. "Texas and Pacific Railway."', url: 'https://en.wikipedia.org/wiki/Texas_and_Pacific_Railway' },
    { number: 30, citation: 'NONJOHN. "Marshall: All Aboard!"', url: 'http://nonjohn.com/Marshall All Aboard.pdf' },
    { number: 31, citation: 'Union Pacific. "Marshall, TX - Train town page."', url: 'https://www.up.com/aboutup/train_town/marshall_tx/index.htm' },
    { number: 32, citation: 'Wikipedia. "Marshall, Texas."', url: 'https://en.wikipedia.org/wiki/Marshall,_Texas' },
    { number: 33, citation: 'ISJL. "Encyclopedia of Southern Jewish Communities - Jefferson, Texas."', url: 'http://www.isjl.org/texas-jefferson-encyclopedia.html' },
    { number: 34, citation: 'Austin Ghosts. "Jefferson: The Most Haunted Town in Texas."', url: 'https://austinghosts.com/jefferson-the-most-haunted-town-in-texas/' },
    { number: 35, citation: 'Texas State Historical Association. "Jefferson, TX (Marion County)." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/jefferson-tx-marion-county' },
    { number: 36, citation: 'Texas Parks & Wildlife Magazine. "Bayou City."', url: 'https://tpwmagazine.com/archive/2015/jul/ed_1_bayou/' },
    { number: 37, citation: 'Stephen F. Austin University Heritage Center. "Early Gregg County courthouse had brief history."', url: 'https://www.sfasu.edu/heritagecenter/9906.asp' },
    { number: 38, citation: 'City of Mount Pleasant. "History."', url: 'https://mpcity.net/history' },
    { number: 39, citation: 'National Park Service. "Logging History - Big Thicket."', url: 'https://www.nps.gov/bith/learn/historyculture/logging.htm' },
    { number: 40, citation: 'Texas State Historical Association. "Lumber Industry." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/lumber-industry' },
    { number: 41, citation: 'Texas State Historical Association. "East Texas Railway." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/east-texas-railway' },
    { number: 42, citation: 'WT Block. "East Texas Mill Towns & Ghost Towns."', url: 'http://www.wtblock.com/MIlltowns.htm' },
    { number: 43, citation: 'Exploros. "Aldridge Sawmill."', url: 'https://www.exploros.com/summary/aldridge-sawmill' },
    { number: 44, citation: 'TexasTimber Archive. "Timber Resources of East Texas."', url: 'https://ttarchive.com/Library/Articles/Kirby-Lbr-Co_1902_Timber-Resources-of-East-Texas.html' },
    { number: 45, citation: 'The History Center. "Fastrill: A Texas Logging Camp."', url: 'https://www.thehistorycenteronline.com/exhibits/fastrill-a-texas-logging-camp' },
    { number: 46, citation: 'Portal to Texas History. "Southern Pine Lumber Company African-American Workers."', url: 'https://texashistory.unt.edu/ark:/67531/metapth204214/' },
    { number: 47, citation: 'Brookeland ISD. "Changes in Farming."', url: 'https://www.brookelandisd.net/page/open/3475/0/Chapter 22 Section 2 Reading.pdf' },
    { number: 48, citation: 'Texas State Historical Association. "Cotton Culture." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/cotton-culture' },
    { number: 49, citation: 'Texas State Historical Association. "Late Nineteenth-Century Texas." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/late-nineteenth-century-texas' },
    { number: 50, citation: 'AfroTexan. "Early Waterways - Marion County."', url: 'http://afrotexan.com/marion/land/waterways/early.htm' },
    { number: 51, citation: 'Texas State Historical Association. "Regulator-Moderator War." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/regulator-moderator-war' },
    { number: 52, citation: 'Wikipedia. "Regulator–Moderator War."', url: 'https://en.wikipedia.org/wiki/Regulator–Moderator_War' },
    { number: 53, citation: 'KETK. "Episode #58: Blood on the Pines."', url: 'https://www.youtube.com/watch?v=NGaEwTcoBfI' },
    { number: 54, citation: 'East Texas Historical Journal. "Dastardly Scoundrels: The State Police and the Linn Flat Affair."', url: 'https://scholarworks.sfasu.edu/cgi/viewcontent.cgi?article=2257&context=ethj' },
    { number: 55, citation: 'Texas 2036. "U.S. Census Data: How Texas earned a booming population."', url: 'https://texas2036.org/posts/u-s-census-data-texas-became-one-of-the-most-populated-states/' },
    { number: 56, citation: 'Texas State Historical Association. "Freedmen\'s Bureau." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/freedmens-bureau' },
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
                1865–1900
              </span>
            </div>
            
            <h1 className="mb-6" style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '56px',
              fontWeight: 'var(--font-weight-bold)',
              lineHeight: '1.1',
              color: 'var(--foreground)',
            }}>
              Reconstruction and Growth in East Texas
            </h1>
            
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '20px',
              lineHeight: '1.6',
              color: 'var(--foreground-muted)',
            }}>
              Post-War Recovery, Railroad Expansion, and the Rise of the Timber Industry
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
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--font-size-base)',
              lineHeight: 'var(--line-height-normal)',
              color: 'var(--foreground-muted)',
              marginBottom: '16px',
            }}>
              The period from 1865 to 1900 transformed East Texas from a war-torn region into a dynamic agricultural and industrial landscape. Following Confederate defeat, the emancipation of approximately 169,000 enslaved Texans—roughly 30 percent of the state's population—necessitated complete restructuring of the region's labor, political, and social systems. This era witnessed the painful transition from slavery to sharecropping, the brief flourishing and violent suppression of Black political participation, railroad-driven economic expansion, and the rise of the timber industry.
            </p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--font-size-base)',
              lineHeight: 'var(--line-height-normal)',
              color: 'var(--foreground-muted)',
            }}>
              When Union General Gordon Granger arrived in Galveston on June 19, 1865, to announce emancipation—an event now commemorated as Juneteenth—he initiated a profound social transformation. These decades established patterns of economic dependence, racial hierarchy, and rural development that would shape East Texas well into the twentieth century.
            </p>
          </div>
        </div>
      </section>
      
      {/* Historical Sections */}
      <ContentSection title="Post-War Social and Economic Conditions" background="subtle">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            Approximately 95 percent of Texas's Black population remained illiterate, denied education by antebellum law and practice. The immediate aftermath brought widespread confusion and violence. Between 1865 and 1868, at least 939 murders occurred across Texas, including 430 Black victims, according to the Committee on Lawlessness and Violence. The plantation economy lay in ruins, with landowners possessing little cash and freedmen possessing almost nothing.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            The most common labor arrangement that emerged was <strong>sharecropping</strong>, a system that would trap both Black and white farmers in cycles of debt for generations. A hierarchy of tenant farmers quickly developed: at the top were share and cash tenants who supplied their own mules, plows, and seed; at the bottom were sharecroppers who supplied only their labor and typically received half the crops. Many tenants mortgaged their share of the cotton crop to a merchant for food and supplies, with very high interest rates, finding themselves just breaking even or owing more than they received.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            This <strong>cotton-credit system</strong>, also known as the crop-lien system, became widely used throughout the South from the 1860s to the 1940s. Merchants held a lien on the cotton crop and were paid first from crop sales. The merchant insisted that more cotton be grown, since nothing else paid as well, and thus came to dictate what crops a farmer grew. By 1900, half of all Texas farmers were tenants.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Freedmen's Communities and Education">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            Despite overwhelming obstacles, freedpeople moved quickly to establish independent communities, churches, and schools. Black Texans founded <strong>freedom colonies</strong>—intentional communities created largely in response to political and economic repression by mainstream white society. From 1865 to 1930, African Americans established 557 historic Black settlements across Texas. These communities provided safe spaces where Black Texans could avoid the perils of debt bondage, sharecropping, and racialized violence by living largely self-sustaining and independent lives on their own property.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            The drive to sever connections with white churches represented one of the most pronounced trends of Reconstruction. The <strong>Black Texas Conference of the Methodist Episcopal Church</strong>, organized in 1871, had 7,934 members and fifty ministers. The <strong>Union Missionary Baptist Church</strong> in Jefferson, formally established in 1868, became the epicenter of Black religious and political activities in Marion County. In Nacogdoches, <strong>Zion Hill Baptist Church</strong> was founded in 1878 by Reverend Lawson Reed.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            Educational progress proved more difficult. The <strong>Freedmen's Bureau</strong> founded its first Black school in Texas at Galveston in September 1865. By June 1867, enrollment reached a peak of 5,157 pupils in fifty-five day and night schools. However, crop failures, yellow fever outbreaks, and lack of funding devastated the system. In East Texas, educational progress developed even more slowly. Violence, threats, and intimidation created an atmosphere of fear. Teachers found that no one would board them or rent space for schools. The 1870 census showed only 4,189—just 4.7 percent—of the Black school-age population attended school, while more than 150,000 Blacks aged ten or older still could not read or write.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Politics and Reconstruction Policies" background="subtle">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            Congressional Reconstruction, which began in March 1867, placed Texas in the Fifth Military District. On February 8, 1870, the Legislature elected under the new constitution convened, with its members including the first African Americans: two in the Senate and twelve in the House. During the early 1870s, African American political participation in Texas reached its peak, with Black voter turnout high and Black men holding elected positions at every level of government.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            <strong>Edmund J. Davis</strong>, a Union Army brigadier general who had opposed secession, won the controversial 1869 gubernatorial election and became the first Republican governor of Texas. The Constitution of 1869 explicitly guaranteed voting rights and made Black political officeholding legally possible for the first time. Governor Davis created the <strong>State Police</strong> in July 1870—a multi-racial force that included Black, Hispanic, and white men. In their first month, the police made 978 arrests. By 1872, the force had made 6,820 arrests and recovered $200,000 in stolen property.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            Despite its effectiveness, the State Police faced fierce opposition from Democrats, due in part to the employment of African Americans as officers. Democrats won the legislature in 1872, and Davis lost the 1873 election to Richard Coke, ending Reconstruction in Texas. Organized terrorist groups, including the <strong>Ku Klux Klan</strong>, emerged to oppose Republican policies through violence. Most Klan activities focused in Northeast Texas, with at least twenty counties experiencing Klan terror. Jefferson and Marion County witnessed particularly severe violence, with a band of vigilantes killing Republican leader George W. Smith and his Black followers in October 1868.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Railroad Expansion and New Towns">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            Railroad development transformed East Texas's economy and landscape. Texas had only 711 miles of track in 1870, but this expanded dramatically over the following decades. The <strong>Houston and Texas Central Railway</strong> reached Corsicana in 1871, Dallas in 1872, and the Red River in 1873, connecting Texas by rail to St. Louis, Chicago, and the East Coast—making it the first all-rail route from Texas to eastern markets.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            The <strong>Texas and Pacific Railway Company</strong>, created by federal charter in 1871 to build a southern transcontinental railroad from Marshall to San Diego, became the only railroad in Texas to operate under federal charter. Marshall's transformation exemplified the railroad's impact. Harrison County offered a $300,000 bond subsidy in 1871, and the City donated sixty-six acres for the T&P's manufacturing facilities. The <strong>Marshall shops</strong> became a sixty-six-acre complex employing more than 1,100 workers—at one point, nearly one-third of the city's workforce. Between 1873 and 1878, the railroad brought more than 700 new citizens to the area. By 1880, Marshall had become one of the South's largest cotton markets.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            <strong>Jefferson's</strong> experience illustrated both the promise and peril of railroad development. As the westernmost outpost for navigation on the Red River, Jefferson had developed into an important riverport. Between 1867 and 1870, trade grew from $3 million to $8 million, and the town's population peaked at about 8,000 in the early 1870s—the fourth-largest city in Texas. However, when the Army Corps of Engineers blew open the Great Red River Raft in 1873, the Big Cypress Bayou drained out, and steamboat navigation ceased. Jefferson's population dropped to around 3,000 by the decade's end, and railroads planned for the town went to Dallas instead.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Rise of Timber and Industry" background="subtle">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            The "bonanza era" of Texas lumbering, from approximately 1880 to the Great Depression, transformed East Texas's economy and landscape. Until about 1880, most of the pine forest remained untouched, with individual trees often growing to 150 feet in height and measuring more than five feet in diameter. The railroad network provided transportation that made timber exploitation economically feasible, and many investments came from the North and Midwest, where forest resources had begun to dry up.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            The lumber industry created numerous <strong>sawmill towns</strong> across East Texas during the golden era between the 1880s and 1920s. Settlements carried names like Haslam, Manning, Bessmay, Aldridge, Steep Creek, and Honey Island. The <strong>Aldridge Sawmill</strong>, which operated between 1905 and 1923, produced up to 125,000 board feet of lumber per day. When timber played out, sawmills moved on, leaving behind cutover forests and ghost towns. In 1901, the <strong>Kirby Lumber Company</strong> was chartered with an authorized capital of $10 million, becoming the largest lumber concern in the United States at that time.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            Logging camps were full-service communities with homes, schools, churches, stores, and in some cases power plants. The Southern Pine Lumber Company's camp <strong>Fastrill</strong>, founded in 1922 in Cherokee County, remained a vibrant community until 1941 and was home to as many as 600 people. An estimated 615 sawmills were operating in Texas in 1910. Most of the pristine pine forests were cut down within a few decades of intensive exploitation. African Americans played significant roles in the timber industry, with many employed in logging operations and sawmills throughout the region.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Agriculture and Market Shifts">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            Cotton production dominated East Texas agriculture throughout this period, expanding dramatically as railroads opened new markets. Texas cotton production leaped from 350,628 bales in 1869 to 805,284 bales in 1879, to 1.5 million bales in 1889, and to more than 3.5 million bales from 7,178,915 acres in 1900—more than any other state. In 1880, Texas farmers produced about $57 million worth of cotton. The introduction of barbed wire in the 1870s and the building of railroads further stimulated the industry.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            East Texas towns became important cotton markets. Marshall's transformation into one of the South's largest cotton markets by 1880 attracted new businesses, including J. Weisman and Co., which opened as Texas's first department store. When a light bulb was installed in the Texas and Pacific Depot, Marshall became the first city in Texas with electricity. Jefferson's cotton trade amounted to 88,000 and 100,000 bales for 1859 and 1860 respectively, with its population doubling between 1870 and 1873.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            However, the integration of Texas into national and international cotton markets made farmers vulnerable. National cotton production increased from 3.8 million to 10.9 million bales during this period, and cotton prices fell from 11 to 6 cents per pound. The drop in prices hit farmers hard as farming costs rose, with prices for farmland rising from $10 an acre in 1870 to more than $500 in 1900 for the best land. Between 1880 and 1900, the number of tenant farms in Texas tripled. Texas farmers also struggled to survive a lengthy drought in the 1880s.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Social Conflict and Law Enforcement" background="subtle">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            Violence and lawlessness plagued East Texas throughout the Reconstruction era and beyond. The <strong>Regulator-Moderator War</strong> of 1839-1844, a violent feud in Harrison and Shelby counties that took over forty lives, left a legacy of conflict. The conflict began over land frauds and cattle rustling, and reached a boiling point after Charles W. Jackson shot Joseph Goodbread at Shelbyville in 1840. President Sam Houston ultimately dispatched 500 militiamen to the region, and his diplomacy brought the ring leaders to the negotiating table.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            Post-Civil War lawlessness surpassed even these earlier troubles. Between 1865 and 1868, Texas witnessed at least 939 murders, including 430 Black victims. Local authorities made few arrests, and even known murderers often could act with impunity. Violence closely followed politics, with most victims being Republicans—both white and Black. The <strong>Linn Flat affair</strong> in December 1871 exemplified State Police controversies, when State Policemen murdered two local officials in Nacogdoches, striking "terror to the hearts of the people."
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            <strong>Harrison County</strong> experienced particularly severe violence. From 1877 to 1950, Harrison County had fourteen lynchings—more than any other county in Texas. At the turn of the twentieth century, the Democratic-dominated state legislature passed segregation laws and disenfranchised most Blacks and Hispanics. These minorities were essentially excluded from the political system for more than sixty years, unable to vote, excluded from juries, and suffering injustices from all-white juries.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Legacy of Reconstruction in East Texas">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            The Reconstruction period established patterns that would persist well into the twentieth century. The transition from slavery to sharecropping created a system that kept both Black and white farmers in cycles of debt. By 1900, half of all Texas farmers were tenants, and the crop-lien system gave merchants control over agricultural production. The brief period of Black political participation and the violent white reaction established patterns of racial suppression that lasted for generations. By 1900, Black officeholders had dwindled to near zero.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            Railroad expansion fundamentally transformed the region's economy and settlement patterns. Between 1880 and 1900, Texas nearly doubled in population from 1,591,749 to 3,048,710, fueled by natural growth and immigration. The development of Marshall, the decline of Jefferson, and the emergence of numerous sawmill towns demonstrated how transportation infrastructure determined which communities would prosper. The timber industry's "bonanza era" created short-term prosperity but long-term environmental devastation, with most pristine pine forests cut down within a few decades.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            The establishment of schools, churches, and community institutions—particularly in Black freedom colonies—created foundations for future civil rights struggles. Black churches became centers not only for religious life but also for political organizing and community solidarity. The economic expansion of the late nineteenth century in East Texas came at enormous human cost. The system that emerged—characterized by tenant farming, debt peonage, racial violence, political disenfranchisement, and environmental exploitation—created wealth for merchants, landowners, and railroad companies while trapping most rural people in poverty and powerlessness.
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
