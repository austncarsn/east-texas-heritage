import { Header } from './Header';
import { CommunityHero } from './CommunityHero';
import { ContentSection } from './ContentSection';
import { ArchitectureTable } from './ArchitectureTable';
import { NotablePerson } from './NotablePerson';
import { HistoricalTimeline } from './HistoricalTimeline';
import { Footer } from './Footer';
import { TimelineNavigator } from './TimelineNavigator';

interface TalcoPageProps {
  onBack?: () => void;
  onNavigate?: (view: string) => void;
}

export function TalcoPage({ onBack, onNavigate }: TalcoPageProps) {
  const architectureData = [
    {
      name: 'Talco High School Building (now Talco Historical Museum)',
      year: '1939',
      style: 'Unknown',
      originalUse: 'High school',
      status: 'Active as museum',
    },
    {
      name: 'Paris and Mount Pleasant Railroad Depot (Talco)',
      year: '1912-1913',
      style: 'Unknown',
      originalUse: 'Railroad depot',
      status: 'Unknown',
    },
    {
      name: 'Talco State Bank',
      year: '1914',
      style: 'Unknown',
      originalUse: 'Bank',
      status: 'Unknown',
    },
    {
      name: 'Quinton S. Loveless Store',
      year: '1912',
      style: 'Unknown',
      originalUse: 'General store and post office',
      status: 'Unknown',
    },
    {
      name: 'Talco City Hall',
      year: '1936-1937',
      style: 'Unknown',
      originalUse: 'Municipal building',
      status: 'Unknown',
    },
    {
      name: 'Talco Post Office Building',
      year: 'ca. 1936-1937',
      style: 'Unknown',
      originalUse: 'Post office',
      status: 'Unknown',
    },
    {
      name: 'Magnolia Oil Company Camp',
      year: '1936-1937',
      style: 'Residential camp',
      originalUse: 'Company housing for oil workers',
      status: 'Unknown',
    },
    {
      name: 'Humble Oil Company Camp',
      year: '1936-1937',
      style: 'Residential camp',
      originalUse: 'Company housing for oil workers',
      status: 'Unknown',
    },
    {
      name: 'C.M. Carr No. 1 (Discovery Well Site)',
      year: '1936',
      style: 'Oil well/industrial',
      originalUse: 'Oil production',
      status: 'Unknown',
    },
    {
      name: 'Caddo Indian Communities Sites',
      year: 'AD 800-1680',
      style: 'Archaeological',
      originalUse: 'Native American settlement',
      status: 'Archaeological site',
    },
    {
      name: 'Kendall Lewis Land Grant Site',
      year: '1838 (surveyed), 1842 (patented)',
      style: 'Agricultural',
      originalUse: 'Farm/ranch',
      status: 'Unknown',
    },
    {
      name: 'Jefferson Hotel',
      year: 'pre-1936',
      style: 'Unknown',
      originalUse: 'Hotel',
      status: 'Unknown',
    },
  ];

  const notablePeople = [
    {
      name: 'Andrew Jackson Titus',
      years: '1814-1855',
      description: 'For whom Titus County was named. Served in Mexican-American War, represented Denton County in 4th Texas Legislature, and opened the road through Mount Pleasant connecting Port of Jefferson to Red River ports.',
    },
    {
      name: 'Kendall Lewis',
      years: 'before 1800-after 1859',
      description: 'Earliest Anglo settler in Titus County (1835). Owned first land surveyed in county (1838). Married to a Choctaw woman, forced to leave Texas in 1846 following hostilities after the Ripley massacre.',
    },
    {
      name: 'R.L. Peveto and Jno. B. Stephens',
      years: '1935-1936',
      description: 'Wildcatters who discovered the Talco oilfield in 1936, transforming Titus County\'s economy. Their well drilled to 4,305 feet reached the previously non-productive Paluxy formation.',
    },
    {
      name: 'Quinton S. Loveless',
      years: '1912',
      description: 'Local merchant who relocated his store and post office to new townsite in 1912 when the Paris and Mount Pleasant Railroad bypassed original Talco, establishing footprint of modern town.',
    },
  ];

  const timelineEvents = [
    { year: 'ca. 5000 BC - AD 500', event: 'Archaic Period artifacts recovered in area of Titus County.' },
    { year: 'ca. AD 800 - 1680', event: 'Caddo Indians occupied Cypress Creek drainage area in Titus County with complex hierarchical societies.' },
    { year: '1542', event: 'Moscoso expedition possibly passed through or near Titus County (route interpretation uncertain).' },
    { year: '1719', event: 'French founded Le Poste des Cadodaquious in Bowie County; likely explored southwest to Titus County.' },
    { year: '1835', event: 'Kendall Lewis settled on Swauano Creek, possibly first Anglo settler in Titus County.' },
    { year: '1838 March 30', event: 'First tract of land surveyed in Titus County (Kendall Lewis).' },
    { year: '1841 April 10', event: 'Ambrose Ripley\'s wife and seven children massacred by Choctaw Indians on Ripley Creek.' },
    { year: '1842 February', event: 'Lewis land grant patented (first in county).' },
    { year: '1846', event: 'Kendall Lewis family forced to leave Texas due to hostility after Ripley massacre.' },
    { year: '1846 May 11', event: 'Titus County created by Texas Legislature; named for Andrew Jackson Titus (1814-1855).' },
    { year: '1848 May 11', event: 'Mount Pleasant founded as county seat by John Binion Sr., Richard Moore, and L. Gilbert.' },
    { year: '1856', event: 'Post office named Gouldsboro opened with Nehemiah C. Gould as postmaster (near site of future Talco).' },
    { year: '1860', event: 'Gouldsboro post office closed.' },
    { year: '1878', event: 'Post office named Goolesboro opened 1½ miles east of present Talco site.' },
    { year: '1884', event: 'Goolesboro community population 30.' },
    { year: '1910', event: 'Postal officials requested name change for Goolesboro; renamed Talco (Texas, Arkansas, and Louisiana Candy Company initials).' },
    { year: '1910 October', event: 'Paris-Bogata section of P&MP Railroad opened (24 miles).' },
    { year: '1912', event: 'Talco relocated closer to railroad; Quinton S. Loveless moved store and post office to new site.' },
    { year: '1912 May', event: 'Construction began on Bogata-Mount Pleasant section of P&MP Railroad (27 miles).' },
    { year: '1913 June', event: 'Bogata-Mount Pleasant railroad section opened.' },
    { year: '1914', event: 'Talco had a bank, several stores, telephone company; population estimated 300.' },
    { year: '1920', event: 'Titus County population 18,128.' },
    { year: '1930', event: 'Titus County population 16,003.' },
    { year: '1933', event: 'Talco population estimated 350.' },
    { year: '1936 February 7', event: 'Oil discovered in Carr well near Talco; 760 feet of oil standing in drill stem.' },
    { year: '1936 February 14', event: 'Talco Times newspaper established (one week after oil discovery).' },
    { year: '1936 March 12', event: 'Carr discovery well began flowing oil; producing 552 barrels per day.' },
    { year: '1936 May 25', event: 'Talco voted to incorporate (44 to 33); elected first city officials.' },
    { year: '1937', event: 'Pure water well drilled 3½ miles northeast of Talco in Red River County (408 feet depth, 500 gal/min).' },
    { year: '1938', event: 'Talco school district assessed valuation $7.5 million; Titus County oil production 7,342,497 barrels.' },
    { year: '1939', event: 'New Talco school building completed ($185,000 cost); one of finest in Texas.' },
    { year: '1940', event: 'Talco population 912; Titus County population 19,228.' },
    { year: '1950', event: 'Talco population 917; Titus County population 17,302.' },
    { year: '1956', event: 'Paris and Mount Pleasant Railroad abandoned.' },
    { year: '1960', event: 'Talco population 1,024; Titus County population 16,785.' },
    { year: '1963 December', event: 'Humble Oil Company donated $87,000 water system to City of Talco.' },
    { year: '1967', event: 'Talco High School building ceased use as school (later became Talco Historical Museum).' },
    { year: '1985', event: 'Talco field produced more than 266 million barrels of oil.' },
    { year: '2020', event: 'Talco population 494.' },
  ];

  const interestingFacts = [
    "Talco's name comes from the Texas, Arkansas, and Louisiana Candy Company initials on candy wrappers, suggested by local merchant J. H. Brown in 1910.",
    'Residents physically moved the town in 1912 when the Paris and Mount Pleasant Railroad bypassed the original site, with merchant Quinton S. Loveless leading the relocation.',
    'The February 7, 1936 oil discovery was 60 miles from any other production and the first in the Paluxy formation, with 760 feet of oil standing in the drill stem.',
    "Population exploded from 350 in 1933 to an estimated 3,000-5,000 by 1938—one of the most dramatic demographic changes in Texas history.",
    'The Talco oilfield produced over 300 million barrels total, 66% above geologist estimates of 160 million barrels.',
    'The $185,000 Talco High School building (1939) was paid off in just 10 years thanks to oil wealth—the 32-square-mile school district had assessed valuation greater than entire pre-oil Titus County.',
    "The school featured an inter-communications system allowing the superintendent to monitor any classroom without leaving his office—a first for the era.",
    'Talco State Bank abandoned regular hours during the oil boom, with "more money on hand than it had ever dreamed of seeing" and long lines after closing time.',
    "The Talco Times newspaper was established February 14, 1936—just one week after the oil discovery announcement.",
    'Titus County had plentiful ground water but it was foul-tasting; pure water required drilling 3½ miles into Red River County for a well pumping 500 gallons per minute.',
    'In December 1963, Humble Oil Company donated its entire $87,000 water system (three wells, 65-acre reservoir) to the City of Talco.',
    'Talco called itself the "Asphalt capital of the world" due to heavy crude particularly suitable for asphalt manufacture.',
    'The 1841 Ripley massacre of a woman and seven children by Choctaw Indians caused such hostility that the Kendall Lewis family was forced to leave Texas in 1846 despite no connection to the attack.',
    'Contaminated oil with no commercial value was mixed with dirt roads throughout Titus County to create low-quality pavement, eliminating dust and mud.',
    'One broker reportedly reaped over $75,000 in commissions during the oil boom, and half a million dollars changed hands the Sunday following discovery.',
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
        communityName="Talco"
        county="Titus County"
        established="1910"
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
              Talco is located on U.S. Highway 271 and Farm Road 71, sixteen miles northwest of Mount Pleasant in northwestern Titus County, Texas. The community's recorded history spans from mid-19th-century post offices through a dramatic 20th-century oil boom to its present status as a small city of 494 residents (2020 census). The area's human occupation extends much further back, with Archaic Period artifacts (ca. 5000 BC-AD 500) recovered throughout Titus County and extensive Caddo Indian settlements documented from approximately AD 800 to 1680 in the Cypress Creek drainage. The town's defining moment came on February 7, 1936, when oil was discovered in the C.M. Carr No. 1 well approximately one mile east of Talco, a wildcat well drilled 60 miles from any other production that struck oil in the previously non-productive Paluxy formation at 4,305 feet depth. This discovery transformed Talco from a village of 350 residents into a boomtown whose population multiplied to an estimated 3,000-5,000 within two years, making it one of the most dramatic demographic changes in Texas history.
            </p>
          </div>
        </div>
      </section>
      
      {/* Historical Sections */}
      <ContentSection title="Indigenous and Early Settlement" background="subtle">
        <div className="max-w-[900px]">
          <p className="mb-4" style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            The area encompassing present-day Titus County supported human habitation for several millennia, although perhaps not continuously. Archaic Period artifacts dating from approximately 5000 BC to AD 500 have been recovered throughout the county, providing evidence of prehistoric occupation. During historic times, the earliest occupants were the Caddo Indians, an agricultural people with a highly developed culture characterized by complex hierarchical societies, civic and ceremonial centers, and advanced agricultural practices.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            The Caddo people occupied a region including parts of present-day Louisiana, Arkansas, Oklahoma, and Texas as early as AD 800, with extensive communities documented in the Cypress Creek drainage area of Titus County from approximately AD 800 to 1680. Early Spanish and French accounts provided historic records of the Caddo and their customs, with the possibility that the 1542 Moscoso expedition passed through or very near Titus County. French exploration became more certain after 1719, when France established Le Poste des Cadodaquious in what is now Bowie County.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Founding and 19th Century">
        <div className="max-w-[900px]">
          <p className="mb-4" style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            The earliest Anglo settler in what is now Titus County is said to have been Kendall Lewis, who moved into the county in 1835 with his wife, probably a Creek Indian. Lewis, born in western Virginia before 1800, grew up in Choctaw Indian country and married a Choctaw woman with whom he had six children. Lewis's land grant, patented in February 1842, is said to have been the first land surveyed in the county, with the survey conducted on March 30, 1838. The family remained in the county until problems with Indians caused the Lewises to leave the state in 1846, following the April 10, 1841 massacre of Ambrose Ripley's wife Rachel and seven of his children by Choctaw Indians.
          </p>
          <p className="mb-4" style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            During the early 1840s, settlement of the area proceeded rapidly, and in 1846 the First Legislature of the state of Texas established Titus County, named for Andrew Jackson Titus (March 12, 1814 - April 9, 1855), an early Red River County settler, politician, soldier, and planter who is credited with opening the road through Mount Pleasant connecting the Port of Jefferson on Big Cypress to ports on the Red River north of Clarksville. Mount Pleasant was established as the county seat on May 11, 1848.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            The area that would become Talco had two early post offices near its present site. A post office named Gouldsboro was opened in 1856 with Nehemiah C. Gould as postmaster and may have been located near the site of present Talco. It was closed in 1860, but another post office, this one named Goolesboro, was opened in 1878 about 1½ miles east of what is now the site of Talco. This office was in the community that would become Talco, located at the edge of an open prairie that extended through Franklin County. The prairie was the site of several open-range ranching operations in the post-Civil War era. In 1884, the population was thirty.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="1900s–1945" background="subtle">
        <div className="max-w-[900px]">
          <p className="mb-4" style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            The early 20th century brought transformative railroad development to the Talco area. The Paris and Mount Pleasant Railroad Company was chartered on January 29, 1909, by citizens of Paris to build approximately fifty miles southeast from Paris to Mount Pleasant. The railroad was constructed in two sections, with the line from Paris to Bogata opened in October 1910, and the stretch from Bogata to Mount Pleasant opening in June 1913.
          </p>
          <p className="mb-4" style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            In 1910, postal officials asked that the name of the Goolesboro post office be changed, since other offices in Texas had similar names. The new name, Talco, was suggested by local merchant J. H. Brown, taken from the initials appearing on the wrapper of a candy bar marketed by the Texas, Arkansas, and Louisiana Candy Company. As construction on the Paris and Mount Pleasant Railroad began, it became obvious that the original Talco site would be bypassed, so its residents laid out a new townsite closer to the railroad. Quinton S. Loveless moved his store and the post office to the new site in 1912, and other businesses followed. By 1914 it had a bank, several stores, a telephone company, and an estimated population of 300.
          </p>
          <p className="mb-4" style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            The discovery that would define Talco's history began in the summer of 1935, when wildcat oilmen R.L. Peveto and Jno. B. Stephens teamed up to drill on the Charles M. Carr property about a mile east of Talco. By the first of March 1936, drilling veteran Mike Langley announced that there was 760 feet of oil standing in the drill stem with the hole punched to 4,305 feet. On February 7, 1936, word spread of the discovery in what was then a rank wildcat well, 60 miles from any production. As one resident recalled, "People went crazy. There was no place for them to sleep, no place for them to eat, but still they came to Talco".
          </p>
          <p className="mb-4" style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            The boom transformed Talco at a fantastic rate. From a village of about 350 people before the strike, Talco grew into a town of 3,000 to 5,000 within less than two years. On May 25, 1936, Talco voted to incorporate, choosing its city officials on the same date. The new administration immediately set about securing infrastructure, expending $200,000 for water and sewage, $125,000 for paving streets, and $25,000 for a city hall.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            The Talco Independent School District completed a new school building in 1939 at a cost of $185,000, one of the finest and most modern in the state, featuring an inter-communications system that permitted the superintendent to monitor any classroom without leaving his office. The district, only 32 square miles with an assessed valuation of $7.5 million in 1938, paid off the building completely in just ten years. The 1940 census recorded Talco's population as 912.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Postwar to Late 20th Century">
        <div className="max-w-[900px]">
          <p className="mb-4" style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            The postwar period brought gradual decline and stabilization. Talco's 1950 population was 917, showing very little change from 1940. The city's financial troubles deepened as two small refineries closed and fewer personnel were required to operate pumping equipment than had been needed for drilling. The Paris and Mount Pleasant Railroad, which had been crucial to Talco's pre-oil development, ceased operations in 1956.
          </p>
          <p className="mb-4" style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            The 1960 census showed Talco's population at 1,024, a fairly substantial gain attributed to discovery of new oil fields in the vicinity and renewed activity in the Talco field. In December 1963, the Humble Oil Company presented its $87,000 water system to the City of Talco, consisting of three wells and a 65-acre reservoir.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            The Talco field continued producing long after initial estimates suggested depletion. Geologists initially estimated the field contained approximately 160,000,000 barrels of oil, but by 1985, the field had yielded a total of more than 266,000,000 barrels—far exceeding original projections. The Talco High School building, which had served students since 1939, ceased use as a school in 1967 and later became the Talco Historical Museum.
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
            The 2020 census recorded Talco's population as 494, a significant decline from the 1960 peak of 1,024 and far below the boom-era estimates of 3,000-5,000 residents. The city covers a total area of 0.8 square mile. The Talco Oil Company, LLC, an independent oil company based in Talco, continues operations with approximately 100 to 200 million barrels of recoverable oil reserves remaining in the Talco field. The city is served by the Rivercrest Independent School District. The Talco Historical Museum, housed in the 1939 school building, remains a popular attraction for locals and tourists, preserving artifacts and exhibits that document the transformation from agricultural community to oil boomtown.
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
                  The Ripley Massacre
                </h4>
                
                <p className="mb-1" style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  color: 'var(--secondary)',
                }}>
                  April 10, 1841
                </p>
                
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  lineHeight: 'var(--line-height-normal)',
                  color: 'var(--foreground-muted)',
                }}>
                  Choctaw Indians massacred Ambrose Ripley's wife Rachel and seven children at their home on Ripley Creek, causing such hostility that the Kendall Lewis family was forced to leave Texas in 1846.
                </p>
              </div>
            </div>
          </div>
          
          <div 
            className="group transition-all hover:translate-x-1"
            style={{
              backgroundColor: 'var(--surface)',
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
                  February 1936 Oil Discovery
                </h4>
                
                <p className="mb-1" style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  color: 'var(--secondary)',
                }}>
                  February 7, 1936
                </p>
                
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  lineHeight: 'var(--line-height-normal)',
                  color: 'var(--foreground-muted)',
                }}>
                  Talco's defining event. Discovery of oil 60 miles from any other production transformed the village of 350 into a boomtown of 3,000-5,000 within two years. "People went crazy," one resident recalled.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
      
      {/* Architecture and Landmarks */}
      <ContentSection title="Architecture and Landmarks" background="subtle">
        <div className="mb-6 max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            Documentation of Talco's built environment faces significant limitations due to the town's small size, the temporary nature of oil boom construction, and lack of formal architectural surveys or preservation efforts. No properties in Talco appear on the National Register of Historic Places, and architectural styles for most buildings remain undocumented in available sources.
          </p>
        </div>
        <ArchitectureTable entries={architectureData} />
      </ContentSection>
      
      {/* Economy and Industry */}
      <ContentSection title="Economy and Industry">
        <div className="max-w-[900px]">
          <p className="mb-4" style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            Talco's economy underwent perhaps the most dramatic transformation of any Texas community in the 20th century, shifting from subsistence agriculture serving open-range ranching to oil-dominated industry within months. The pre-oil economy centered on services for ranching operations, with the 1878 Goolesboro community providing a post office, general store, physician's office, and blacksmith shop. By 1914, the relocated Talco had expanded to include a bank, several stores, and a telephone company.
          </p>
          <p className="mb-4" style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            The February 1936 oil discovery revolutionized the county economy almost overnight. By 1938, Titus County oil production reached 7,342,497 barrels, which at approximately one dollar per barrel meant more than $7,000,000, dwarfing the $1,179,453 value of all farm products in 1939. In 1958, the mineral industry payroll in Titus County amounted to $1,359,000. In 1960, the value of mineral industry shipments and receipts ($9,059,000) far outstripped the value added by manufactures ($6,682,000) or the value of all farm products in 1959 ($1,963,000).
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            The long-term nature of oil production distinguished Talco from typical boom-bust cycles. The Talco field, which geologists initially estimated contained approximately 160,000,000 barrels, by 1985 had yielded over 266,000,000 barrels—66% above initial estimates—with production still continuing. The Talco Oil Company states that approximately 100 to 200 million barrels of recoverable oil reserves remain in the field, with the field having produced over 300,000,000 barrels total.
          </p>
        </div>
      </ContentSection>
      
      {/* Culture and Education */}
      <ContentSection title="Culture and Education" background="subtle">
        <div className="max-w-[900px]">
          <p className="mb-4" style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            Educational development in Talco provides one of the oil boom's most dramatic success stories. The oil boom enabled unprecedented educational investment. The Talco Independent School District constructed a new school building completed in 1939 at a cost of $185,000, one of the finest and most modern school buildings in Texas. The facility featured innovative technology including an inter-communications system that permitted the superintendent to monitor proceedings in any classroom without leaving his office, a first for the era.
          </p>
          <p className="mb-4" style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            The school district, encompassing only 32 square miles, achieved an assessed valuation of $7.5 million in 1938, greater than the entire county of Titus before oil discovery, enabling the district to pay off the school plant completely in just ten years. The building served as Talco High School until 1967, when it ceased educational use.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            The Talco Times was established on February 14, 1936, just one week after the oil discovery announcement. Cultural preservation efforts in the modern era center on the Talco Historical Museum, housed in the 1939 school building, with exhibits on early settlers, agriculture, town development, local businesses, vintage photographs, antique farm equipment, and the Civil War's impact on the region.
          </p>
        </div>
      </ContentSection>
      
      {/* Timeline */}
      <ContentSection title="Timeline">
        <HistoricalTimeline events={timelineEvents} />
      </ContentSection>
      
      {/* Timeline Navigator - Explore Historical Periods */}
      <TimelineNavigator onPeriodClick={(periodId) => onNavigate && onNavigate(periodId)} />
      
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
            Talco, a city in northwestern Titus County, Texas, transformed from a prairie community of 350 residents into one of the Southwest's most dramatic oil boomtowns when wildcatters discovered petroleum in the Paluxy formation on February 7, 1936. The town's origins trace to mid-19th-century post offices serving open-range ranching operations, with relocation in 1912 to accommodate the Paris and Mount Pleasant Railroad. The oil discovery, occurring 60 miles from any other production, catapulted Talco's population to an estimated 3,000-5,000 within two years. The Talco oilfield ultimately produced over 300 million barrels, far exceeding geologist estimates. Oil wealth enabled construction of one of Texas's finest school buildings in 1939 ($185,000, paid off in ten years) and comprehensive infrastructure development. Population declined to 912 by 1940 and 494 by 2020, though petroleum operations continue with approximately 100-200 million barrels of recoverable reserves remaining.
          </p>
        </div>
      </ContentSection>
      
      <Footer />
    </div>
  );
}