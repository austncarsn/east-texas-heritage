import { Header } from './Header';
import { ContentSection } from './ContentSection';
import { SourcesList } from './SourcesList';
import { Footer } from './Footer';
import { ArrowLeft } from 'lucide-react';

interface ModernHeritagePageProps {
  onBack?: () => void;
}

export function ModernHeritagePage({ onBack }: ModernHeritagePageProps) {
  const sources = [
    { number: 1, citation: 'East Texas Oil Museum. "History." Kilgore College.', url: 'https://easttexasoilmuseum.kilgore.edu/history/' },
    { number: 2, citation: 'We Are East Texas. "Hello Electricity: Welcome To The Farm." 2019.', url: 'https://www.weareeasttexas.com/hello-electricity-welcome-to-the-farm/' },
    { number: 3, citation: 'Fannin County Historical Commission. "Telephone." 2018.', url: 'https://www.fannincountyhistory.org/telephone' },
    { number: 4, citation: 'SFA ScholarWorks. "East Texas in World War II."', url: 'https://scholarworks.sfasu.edu/cgi/viewcontent.cgi?article=2517&context=ethj' },
    { number: 5, citation: 'Texas Our Texas PBS. "The Great Depression and World War II." 2013.', url: 'https://texasourtexas.texaspbs.org/the-eras-of-texas/great-depression-ww2/' },
    { number: 6, citation: 'Texas State Historical Association. "Texas in the 1920s." Handbook of Texas Online. 1995.', url: 'https://www.tshaonline.org/handbook/entries/texas-in-the-1920s' },
    { number: 7, citation: 'Services Austin Texas. "A Short History of the Cotton Industry in Travis County."', url: 'https://services.austintexas.gov/edims/document.cfm?id=307020' },
    { number: 8, citation: 'Texas Beyond History. "Osborn - World of the Tenant Farmer." 2002.', url: 'https://www.texasbeyondhistory.net/osborn/world.html' },
    { number: 9, citation: 'Texas State Historical Association. "Farm Tenancy." Handbook of Texas Online. 1995.', url: 'https://www.tshaonline.org/handbook/entries/farm-tenancy' },
    { number: 10, citation: 'Texas State Historical Association. "Eustace, TX." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/eustace-tx' },
    { number: 11, citation: 'Texas State Historical Association. "Lumber Industry." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/lumber-industry' },
    { number: 12, citation: 'Tyler County Historical Commission. "Tyler County Communities." 2011.', url: 'https://www.tylercountyhc.org/communities' },
    { number: 13, citation: 'County Progress. "Monuments of Justice: Harrison County Courthouse." 2022.', url: 'https://countyprogress.com/monuments-of-justice-harrison-county-courthouse/' },
    { number: 14, citation: 'SFA ScholarWorks. "Rural Schools in East Texas."', url: 'https://scholarworks.sfasu.edu/cgi/viewcontent.cgi?article=1972&context=ethj' },
    { number: 15, citation: 'Authentic Texas. "East Texas Oil Boom." 2025.', url: 'https://authentictexas.com/east-texas-oil-boom/' },
    { number: 16, citation: 'Mainly Museums. "East Texas Museums Tell the Story of the 1930s Oil Boom." 2023.', url: 'https://mainlymuseums.com/post/1209/east-texas-museums-tell-the-story-of-the-1930s-oil-boom/' },
    { number: 17, citation: 'SFA ScholarWorks. "Oil in the Pea Patch: the East Texas Oil Boom."', url: 'https://scholarworks.sfasu.edu/cgi/viewcontent.cgi?article=1316&context=ethj' },
    { number: 18, citation: 'Texas Monthly. "The Oil Boom\'s Roots in East Texas Cotton Farming." 2017.', url: 'https://www.texasmonthly.com/news-politics/oil-booms-roots-east-texas-cotton-farming/' },
    { number: 19, citation: 'IPL. "Oil Boom: Impact On Texas\'s Culture And Culture." 2024.', url: 'https://www.ipl.org/essay/Oil-Boom-Impact-On-Texass-Culture-And-77383180D2A9395A' },
    { number: 20, citation: 'Texas State Historical Association. "Great Depression." Handbook of Texas Online. 1995.', url: 'https://www.tshaonline.org/handbook/entries/great-depression' },
    { number: 21, citation: 'Texas Almanac. "Civilian Conservation Corps in Texas." 2021.', url: 'https://www.texasalmanac.com/articles/civilian-conservation-corps-in-texas' },
    { number: 22, citation: 'KETR. "Many CCC And WPA Projects Still Stand In Texas." 2019.', url: 'https://www.ketr.org/news/2019-10-10/many-ccc-and-wpa-projects-still-stand-in-texas' },
    { number: 23, citation: 'Texas Highways. "Hail to the Boys of the CCC." 2018.', url: 'https://texashighways.com/outdoors/parks/hail-to-the-boys-of-the-civilian-conservation-corps-texas-state-parks/' },
    { number: 24, citation: 'East Texas Journal. "Archived CCC photo pegs location of Depression-era work camp on Edwards." 2021.', url: 'https://www.easttexasjournal.net/2021/02/19/archived-ccc-photo-pegs-location-of-depression-era-work-camp-on-edwards/' },
    { number: 25, citation: 'Texas Time Travel. "New Deal Projects." 2024.', url: 'https://texastimetravel.com/blog/new-deal-projects/' },
    { number: 26, citation: 'Texas Historical Commission. "East Texas Highway (SH 8) – US 59." 2010.', url: 'https://www.thc.texas.gov/public/upload/preserve/survey/highway/East Texas Hwy Historic Context.pdf' },
    { number: 27, citation: 'Historic Schools. "Education Reform from Gilmer-Aikin to Today."', url: 'https://historicschools.org/assets/documents/tps_gilmer_aikin.pdf' },
    { number: 28, citation: 'Fiveable. "Texas during World War II." 2025.', url: 'https://fiveable.me/hs-texas-history/unit-6/texas-world-war-ii/study-guide/LnRkGkJlgjdm9nrA' },
    { number: 29, citation: 'Texas State Historical Association. "World War II." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/world-war-ii' },
    { number: 30, citation: 'Humanities Texas. "When the Afrika Korps Came to Texas: World War II POWs in the Lone Star State." 2014.', url: 'https://www.humanitiestexas.org/news/articles/when-afrika-korps-came-texas-world-war-ii-pows-lone-star-state' },
    { number: 31, citation: 'Texas A&M AgriLife. "1936–1945 - Texas Farmers Fight: Depression and War."', url: 'https://agrilife.org/wp-content/uploads/1936-1945.pdf' },
    { number: 32, citation: 'Texas Historical Commission. "Fundamentals of Military Oral History: Texas in World War II."', url: 'https://www.thc.texas.gov/public/upload/publications/txww2_fndmtlsorlahistroy_09.pdf' },
    { number: 33, citation: 'Texas State Historical Association. "Gilmer-Aikin Laws." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/gilmer-aikin-laws' },
    { number: 34, citation: 'Baylor University Impact. "Firmly Rooted: 1940s–1970s." 2019.', url: 'https://impact.soe.baylor.edu/news/story/2019/firmly-rooted-1940s-1970s' },
    { number: 35, citation: 'Facebook Groups. "A Brief History of Harmony." 2014.', url: 'https://www.facebook.com/groups/dwcook44/posts/580514615376840/' },
    { number: 36, citation: 'Texas State Library. "House Concurrent Resolution No. 48, August, 1947." 2011.', url: 'http://www.tsl.texas.gov/governors/personality/jester-gilmer-1.html' },
    { number: 37, citation: 'Prairie View A&M University. "L.C. Anderson High School as an Equalization School." 2021.', url: 'https://www.pvamu.edu/tiphc/research-projects/l-c-anderson-high-school-as-an-equalization-school/' },
    { number: 38, citation: 'Texas State Historical Association. "United States v. Texas." Handbook of Texas Online. 1996.', url: 'https://www.tshaonline.org/handbook/entries/united-states-v-texas' },
    { number: 39, citation: 'U.S. Commission on Civil Rights. "Public Schools Southern States 1963 Texas." 1963.', url: 'https://www.usccr.gov/files/historical/1963/63-006.pdf' },
    { number: 40, citation: 'Texas Tribune. "It took this Texas school district 48 years to desegregate." 2018.', url: 'https://www.texastribune.org/2018/11/29/texas-longview-school-segregation-disintegration/' },
    { number: 41, citation: 'Texas Sized Opportunities. "Poultry and Food Processing." 2017.', url: 'https://texassizedopportunities.co/core-industries/poultry-and-food-processing' },
    { number: 42, citation: 'Wikipedia. "Pilgrim\'s Pride." 2004.', url: 'https://en.wikipedia.org/wiki/Pilgrim\'s_Pride' },
    { number: 43, citation: 'Reuters. "Pilgrim\'s Pride in $100 million settlement over chicken farmers\' pay." 2024.', url: 'https://www.reuters.com/legal/pilgrims-pride-100-million-settlement-over-chicken-farmers-pay-2024-08-19/' },
    { number: 44, citation: 'Agriculture Dive. "Pilgrim\'s Pride to pay chicken farmers $100M in record price-fixing settlement." 2024.', url: 'https://www.agriculturedive.com/news/pilgrims-pride-jbs-poultry-price-fixing-settlement-100m/724818/' },
    { number: 45, citation: 'Site Selection. "I-20 Corridor: Development Opportunities." 2016.', url: 'https://siteselection.com/i-20-corridor-development-opportunities-along-i-20-in-this-eastern-corner-of-texas/' },
    { number: 46, citation: 'TxDOT. "I-20 East Texas Corridor Study." 2023.', url: 'https://www.txdot.gov/projects/projects-studies/statewide/i20-east-texas-corridor.html' },
    { number: 47, citation: 'East Texas I-20 Corridor. "Economic Overview."', url: 'https://i20corridor.com/images/uploads/economic-overview---east-texas-i-20-corridor.pdf' },
    { number: 48, citation: 'Texas Tribune. "Texas\' uneven population boom is creating ghost towns in many rural counties." 2024.', url: 'https://www.texastribune.org/2024/11/14/texas-population-changes-rural-urban/' },
    { number: 49, citation: 'Texas Time Travel. "About the Texas Heritage Trails Program." 2004.', url: 'https://texastimetravel.com/about-us/' },
    { number: 50, citation: 'Texas Historical Commission. "Texas Heritage Travel Guide."', url: 'https://www.thc.texas.gov/public/upload/publications/texas-heritage-travel-guide.pdf' },
    { number: 51, citation: 'Texas Historical Commission. "The Texas Forest Trail Region."', url: 'https://www.thc.texas.gov/public/upload/publications/forest.pdf' },
    { number: 52, citation: 'TxDOT. "Texas Travel Trails (Texas Heritage Trails Program)." 2022.', url: 'https://www.txdot.gov/manuals/trf/smk/guide_signs/special_route_markers-ceghedgb/texas_travel_trails_texas_heritage_trails_program-.html' },
    { number: 53, citation: 'Texas Heritage Trails. 2020.', url: 'https://texasheritagetrails.org' },
    { number: 54, citation: 'Texas Historical Commission. "Heritage Tourism Guidebook."', url: 'https://www.thc.texas.gov/public/upload/publications/heritage-tourism-guide.pdf' },
    { number: 55, citation: 'Advisory Council on Historic Preservation. "Texas Historic Courthouse Preservation Program." 2008.', url: 'https://www.achp.gov/sites/default/files/2017-01/texas.pdf' },
    { number: 56, citation: 'Texas Time Travel. "Texas Historic Courthouse Preservation Program." 2022.', url: 'https://texastimetravel.com/blog/texas-historic-courthouse-preservation-program/' },
    { number: 57, citation: 'County Progress. "Courthouse Trails." 2022.', url: 'https://countyprogress.com/courthouse-trails-6/' },
    { number: 58, citation: 'Mill Creek Ranch Resort. "A Checklist of the Best Museums in East Texas." 2022.', url: 'https://millcreekranchresort.com/blog/a-checklist-of-the-best-museums-in-east-texas/' },
    { number: 59, citation: 'Heritage Park Museum of East Texas. 2025.', url: 'https://heritageparkmuseumofetx.org' },
    { number: 60, citation: 'We Are East Texas. "East Texas Historical Sites." 2019.', url: 'https://www.weareeasttexas.com/east-texas-historical-sites/' },
    { number: 61, citation: 'Ravintola Aleksis. "Exploring the Rich History of East Texas Through Historic Sites and Landmarks." 2019.', url: 'https://ravintola-aleksis.fi/exploring-the-rich-history-of-east-texas-through-historic-sites-and-landmarks/' },
    { number: 62, citation: 'Texas Time Travel. "Exploring the Rich Cultural Legacy of East Texas." 2018.', url: 'https://texastimetravel.com/blog/exploring-the-rich-cultural-legacy-of-east-texas/' },
    { number: 63, citation: 'Stephen F. Austin State University. "Center for Regional Heritage Research." 2006.', url: 'https://www.sfasu.edu/academics/colleges/liberal-applied-arts/history/historical-resources/center-regional-heritage-research' },
    { number: 64, citation: 'Portal to Texas History. "Explore 878 Collections."', url: 'https://texashistory.unt.edu/explore/collections/' },
    { number: 65, citation: 'Portal to Texas History. "UNT Historical Photograph Collection."', url: 'https://texashistory.unt.edu/explore/collections/UNTHPC/' },
    { number: 66, citation: 'Portal to Texas History. 2024.', url: 'https://texashistory.unt.edu' },
    { number: 67, citation: 'TLL Temple Foundation. "Rural East Texas Economic Opportunity Analysis." 2024.', url: 'https://tlltemple.foundation/rural-east-texas-economic-opportunity-analysis/' },
    { number: 68, citation: 'East Texas Economic Development District. 2023.', url: 'https://www.etedd.org' },
    { number: 69, citation: 'Texas State News. "TXST research identifies real solutions to improve rural healthcare in East Texas." 2025.', url: 'https://news.txst.edu/research-and-innovation/2025/txst-research-identifies-real-solutions-to-improve-rural-healthcare-in-texas.html' },
    { number: 70, citation: 'UT Tyler. "East Texas Health Project." 2025.', url: 'https://www.uttyler.edu/academics/colleges-schools/medicine/departments/epidemiology-and-biostatistics/east-texas-health-project/' },
    { number: 71, citation: 'Communities Unlimited. "CU Launches Housing Survey for Rural Communities." 2025.', url: 'https://communitiesu.org/blog/2025/02/19/cu-launches-housing-survey/' },
    { number: 72, citation: 'Texas Time Travel. "We Pine For East Texas." 2025.', url: 'https://texastimetravel.com/regions/texas-forest-trail/partners/' },
    { number: 73, citation: 'East Texas Oil Museum. 2023.', url: 'https://easttexasoilmuseum.kilgore.edu' },
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
  <div className="mx-auto px-4 sm:px-6 md:px-12 lg:px-[72px] max-w-[1400px]">
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
                1900–Present
              </span>
            </div>
            
            <h1 className="mb-6" style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '56px',
              fontWeight: 'var(--font-weight-bold)',
              lineHeight: '1.1',
              color: 'var(--foreground)',
            }}>
              Modern Heritage in East Texas
            </h1>
            
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '20px',
              lineHeight: '1.6',
              color: 'var(--foreground-muted)',
            }}>
              Oil Booms, Industrialization, Social Change, and Contemporary Challenges
            </p>
          </div>
        </div>
      </section>
      
      {/* Overview Section */}
      <section style={{
        paddingTop: 'var(--section-spacing)',
        paddingBottom: 'var(--section-spacing)',
      }}>
  <div className="mx-auto px-4 sm:px-6 md:px-12 lg:px-[72px] max-w-[1400px]">
          <div className="max-w-[900px]">
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--font-size-base)',
              lineHeight: 'var(--line-height-normal)',
              color: 'var(--foreground-muted)',
              marginBottom: '16px',
            }}>
              East Texas experienced profound transformation throughout the twentieth and early twenty-first centuries, evolving from an agrarian economy dependent on cotton and timber into a diversified region shaped by oil discovery, industrialization, social change, and modern economic shifts. At the dawn of the twentieth century, East Texas remained predominantly rural and agricultural, with most residents living on farms or in small towns. The region's economy rested on cotton cultivation, timber extraction, and subsistence farming.
            </p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--font-size-base)',
              lineHeight: 'var(--line-height-normal)',
              color: 'var(--foreground-muted)',
            }}>
              The discovery of oil in 1930 would dramatically alter this landscape. This comprehensive journey traces the region's development through industrialization, oil booms, depression, war, civil rights struggles, and contemporary challenges while highlighting the preservation of its unique cultural heritage.
            </p>
          </div>
        </div>
      </section>
      
      {/* Historical Sections */}
      <ContentSection title="Early 20th Century Development (1900-1929)" background="subtle">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            Cotton dominated East Texas agriculture in the early 1900s, though the region's sandy loam soils never matched the productivity of the Blackland Prairie to the west. <strong>Tenant farming and sharecropping</strong> became increasingly prevalent as land ownership remained out of reach for many rural families. By 1900, half of all Texas farmers were tenants, a figure that would climb to 60.9 percent by 1930. This system trapped families—particularly African Americans and poor whites—in cycles of debt, with many ending harvest seasons owing more to landlords than they had earned.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            The farm economy struggled throughout the 1920s. Cotton prices collapsed from forty-two cents per pound in April 1920 to just 9.8 cents by March 1921. East Texas farmers faced the "cotton cycle" of overproduction, price collapses, and mounting debt. The early twentieth century brought gradual modernization to East Texas communities through telephone service, improved roads, and the beginnings of rural electrification, though electric service would not reach most rural homes until later decades.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            The <strong>lumber industry</strong> dominated East Texas economics from the 1880s through the 1920s. Railroad construction in the 1880s transformed the region's economy by facilitating timber extraction and shipment. Tyler County witnessed explosive growth, with population nearly doubling between 1880 and 1890 as nineteen sawmills opened. Company towns like Doucette grew to 1,800 residents. However, the lumber industry began declining in the postwar decade of the 1920s as companies exhausted old-growth pine forests and relocated operations.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Oil Boom and Industrialization (1930-1941)">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            On <strong>October 3, 1930</strong>, seventy-year-old wildcatter Columbus Marion "Dad" Joiner struck oil on the Daisy Bradford No. 3 well in Rusk County, producing 6,000 barrels per day. This discovery, which came just one year after the 1929 stock market crash, would prove to be the southwestern edge of the <strong>largest oil field discovered in the contiguous United States</strong> to that time. Two months later, the Lou Della Crim No. 1 well came in at 22,000 barrels per day. The East Texas Oil Field ultimately covered more than 140,000 acres across five counties—Rusk, Gregg, Smith, Upshur, and Cherokee—stretching 45 miles north to south. More than 30,000 wells would eventually be drilled, producing over 5.2 billion barrels of oil by the early twenty-first century.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            The oil discovery transformed sleepy East Texas communities into bustling boomtowns virtually overnight. <strong>Kilgore</strong> swelled from around 500 residents to more than 12,000 during the boom era; some accounts claim the city went from 800 to 8,000 people in a twenty-four-hour period. Henderson, Longview, Gladewater, and Joinerville experienced similar explosive growth. Lawlessness and crime accompanied the influx of thousands of transient workers. In August 1931, National Guardsmen were ordered into the area to maintain peace among roughnecks, lease hounds, and camp followers.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            Despite the prosperity oil brought, the benefits were distributed extremely unevenly. Most East Texas farmers received no windfall because the majority worked as tenants and did not own the land. Racial violence played a clearly defined role in determining who benefited. One white oilman recalled failing to sign a lease with a Black landowner because a competing oilman had threatened this landowner's life. African Americans and Mexican Americans could not obtain jobs on oil rigs but found "spin-off jobs"—carrying luggage, cleaning houses, clearing land—that offered higher wages than agricultural work but reinforced existing racial hierarchies.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Great Depression and New Deal (1930-1941)" background="subtle">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            While the oil boom insulated parts of East Texas from the worst Depression impacts, the broader region suffered from agricultural collapse and unemployment. The New Deal brought crucial federal programs to East Texas. The <strong>Civilian Conservation Corps (CCC)</strong> established camps across the region, employing young men aged 17-28 for conservation and construction work. One of the first all-African American CCC camps rebuilt Fort Parker between 1936 and 1938. CCC workers in East Texas planted pine trees "by the thousands" to restore forests denuded by the timber industry. All told, the CCC planted three million trees on private and public lands in East Texas and developed four national forests totaling more than 600,000 acres.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            The <strong>Works Progress Administration (WPA)</strong> funded infrastructure projects throughout East Texas. A CCC camp in Mount Pleasant, established in August 1937, housed 141 workers who built roads, water systems, and storm sewers, and worked with the Soil Conservation Service to terrace farmland. Caddo Lake State Park was established between 1933 and 1937, with much of the land donated by T.J. Taylor, father of Claudia "Lady Bird" Johnson.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            Roosevelt forbade discrimination in CCC enrollment, but in practice many local agencies discriminated. African Americans were never enrolled in the numbers FDR envisioned, and starting in 1935, camps became fully segregated. After Fort Parker's completion, African Americans were ironically barred from entry until the 1960s under Jim Crow laws. Low cotton prices led to federal programs like the Agricultural Adjustment Act, though many farmers resented government interference. Sharecroppers and tenant farmers began moving away in droves during the 1930s to search for work in towns and cities.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="World War II and Postwar Change (1941-1960)">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            World War II transformed Texas—and East Texas—from an agricultural state to an industrial powerhouse. In 1940, over half of Texas oil (nearly 270 million barrels) was produced in East Texas. Oil production increased dramatically during the war, rising from 1.4 million barrels per day in 1940 to 2.6 million in 1945. More than 1.2 million troops trained at Texas bases during the war. About 750,000 Texans served in the military—seven percent of American forces—and more than 22,000 were killed or died of wounds. East Texas contributed significantly to this service.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            Labor shortages during the war resulted in increased opportunities for women and minorities. Women's workforce participation rose by 57 percent between 1940 and 1945, while African American employment in skilled trades increased by 35 percent. German prisoners of war were brought to Texas to address agricultural labor shortages, with tens of thousands working in factories, hospitals, and especially agriculture—chopping cotton, harvesting fruit, cutting sugar cane, and tending fields.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            In 1947, the Fiftieth Texas Legislature established the <strong>Gilmer-Aikin Committee</strong> after Representative Claud Gilmer and Senator A.M. Aikin, Jr.. In 1949, the Legislature passed the landmark Gilmer-Aikin Laws, which consolidated school districts from 4,500 to 2,900, provided funding equalization, raised teacher salaries, and established the Texas Education Agency. The legislation also brought equity in the first teachers' salary schedule that paid "Black" teachers the same as "White" teachers. Senator Aikin once said: "I came here thinking a child ought to get an equal educational opportunity whether he was born in the middle of an oil field or in the middle of a cotton field."
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Civil Rights and Social Change (1954-1980)" background="subtle">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            The landmark 1954 <strong>Brown v. Board of Education</strong> Supreme Court decision mandated desegregation of public schools, but Texas—particularly East Texas—resisted implementation for decades. El Paso became the first large Texas city to desegregate when its school board voted 6 to 1 in June 1955 to integrate its schools beginning September 1955. Governor Allan Shivers notified schools in June 1955 that he saw no need to hurry into desegregation. By summer 1956, 73 of 1,650 districts had initiated desegregation programs. All of these districts were in areas of relatively sparse Black population in west, south, and central Texas; none were in East Texas.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            In November 1970, <strong>William Wayne Justice</strong>, chief judge of the United States District Court for the Eastern District of Texas, ordered the Texas Education Agency to assume responsibility for desegregating Texas public schools. The decision in <em>United States v. Texas</em> (Civil Order 5281) applied to the entire Texas public school system and is one of the most extensive desegregation orders in legal history. The case originated with investigations in the late 1960s into alleged discriminatory practices in small Texas public school districts, most in East Texas.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            <strong>Longview, Texas</strong>, took 48 years to fully desegregate, and even after 48 years of court supervision, Black students were much more likely to be suspended, and just over half of teachers were minorities. In the 1950s, states and school districts across the South scrambled to construct new African American schools to prove they truly provided "separate but equal" segregated schools, though strong African American community centers were ultimately lost to continued discrimination during integration attempts.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Economic Shifts and Infrastructure (1960-2000)">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            The latter decades of the twentieth century witnessed significant economic shifts in East Texas. The timber industry, while remaining important, no longer dominated the regional economy. Oil production continued but at reduced levels. Cotton cultivation steadily decreased as mechanization reduced labor needs and farmers diversified. The <strong>poultry industry</strong> emerged as a major economic force. Center, Texas, became home to a large Tyson poultry processing plant employing nearly 1,600 people. Pilgrim's Pride, which traced its origins to a feed store opened in 1946 in Pittsburg, grew into one of the largest chicken producers in the United States.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            <strong>Interstate Highway 20</strong> became vital to East Texas economic development. The I-20 corridor spans 155 miles from Dallas to the Texas-Louisiana state line, serving as an integral east-west connection for both travel and trade. Marshall, with a population of 24,000, positioned itself along I-20 about 45 minutes west of Shreveport. The East Texas I-20 Corridor region saw manufacturing contribute the largest portion of GDP in 2020 ($3.96 billion), followed by Health Care and Social Assistance ($3.15 billion), Mining and Oil and Gas Extraction ($2.52 billion), and Retail Trade ($1.94 billion).
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            The late twentieth and early twenty-first centuries witnessed significant <strong>rural population decline</strong> across much of East Texas. Economic opportunities became increasingly limited in rural parts of the state, and as populations declined, communities lost capability to operate retail businesses and healthcare facilities. Anchor cities like Tyler, Longview, Marshall, Nacogdoches, and Lufkin inadvertently pulled people and resources from nearby towns, creating ghost towns in many rural counties while urban areas experienced population booms.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Cultural Identity and Preservation (1970-Present)" background="subtle">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            The <strong>Texas Heritage Trails Program</strong>, based around ten scenic driving trails created in 1968 by Governor John Connally, became the Texas Historical Commission's award-winning heritage tourism initiative in 1997. The Texas Forest Trail Region, spanning 35 East Texas counties, celebrates the area as the "Gateway to Texas" for Caddo Indians, Spanish and French explorers, Anglo pioneers, European immigrants, and enslaved and freed African Americans. Heritage tourists tend to stay longer (4.7 nights vs. 3.4 nights) and spend more per trip ($623 vs. $457) than other tourists.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            The <strong>Texas Historic Courthouse Preservation Program</strong>, established in 1999 with funds appropriated by the Texas Legislature, became one of the largest initiatives ever conceived by a state government. Using matching grants, the program has fully restored 39 courthouses and helped restore 27 additional structures. The program has provided $145 million to 64 counties, matched by more than $64 million in county contributions. These revitalized county courthouses became catalysts for economic development in business districts surrounding them. Harrison County's 1901 courthouse, designed by James Riely Gordon, received grant money for a $9 million restoration project completed between 2005 and 2009.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            East Texas developed an extensive network of museums preserving regional history. The <strong>East Texas Oil Museum</strong> at Kilgore College chronicles the area's transformation from quiet depression-era villages to bustling cities. The Heritage Park Museum of East Texas in Edgewood encompasses more than 20 authentically restored structures representing rural life from the 1800s to the 1920s. State historic sites preserve crucial aspects of regional history, including Caddo Mounds near Alto and Mission Dolores. Stephen F. Austin State University's Center for Regional Heritage Research facilitates research and preservation of East Texas heritage.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Modern East Texas (2000-Present)">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            Contemporary East Texas faces significant economic challenges balanced by emerging opportunities. The <strong>East Texas Economic Development District (ETEDD)</strong>, administered by the East Texas Council of Governments, strives to promote economic development throughout the fourteen-county region. The Rural East Texas Economic Opportunity Analysis defines three economic sub-regions: Northeast Texas centered on Texarkana, Deep East Texas centered on Lufkin and Nacogdoches, and Southeast Texas centered on Beaumont and Port Arthur.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            <strong>Healthcare access</strong> remains a critical challenge. Northeast Texas suffers from alarming health and mental health disparities, with some of the highest rates of chronic health conditions such as obesity, diabetes, and cancer. Treatment remains challenging due to a chronic shortage of mental health providers, long waitlists, and increased travel time and costs. Research by Texas State University surveyed more than 400 residents across 22 rural counties, finding that provider shortages, long distances, and high costs affect residents across demographics, with nearly half struggling to pay for care even with insurance.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            Contemporary East Texas balances preservation of its rich heritage with the need for economic development and adaptation to twenty-first-century realities. The region's identity remains deeply rooted in its forests, oil heritage, agricultural traditions, and small-town culture, even as it confronts rural population decline, healthcare challenges, and economic transformation. Towns like Nacogdoches and Marshall showcase the past through preserved historic sites while working to attract new economic development. Throughout the region, communities work to honor their history while creating sustainable economic futures.
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
