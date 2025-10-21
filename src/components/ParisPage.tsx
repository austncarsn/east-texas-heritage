import { Header } from './Header';
import { CommunityHero } from './CommunityHero';
import { ContentSection } from './ContentSection';
import { ArchitectureTable } from './ArchitectureTable';
import { NotablePerson } from './NotablePerson';
import { HistoricalTimeline } from './HistoricalTimeline';
import { SourcesList } from './SourcesList';
import { Footer } from './Footer';

interface ParisPageProps {
  onBack?: () => void;
  onNavigate?: (page: string) => void;
}

export function ParisPage({ onBack, onNavigate }: ParisPageProps) {
  const architectureData = [
    {
      name: 'Sam Bell Maxey House State Historic Site',
      year: '1868',
      style: 'High Victorian Italianate',
      originalUse: 'Private residence',
      status: 'State historic site/museum',
    },
    {
      name: 'Lamar County Courthouse',
      year: '1917',
      style: 'Classical Revival/Romanesque',
      originalUse: 'County courthouse',
      status: 'Active courthouse',
    },
    {
      name: 'Culbertson Fountain',
      year: '1924-1927',
      style: 'Italian marble fountain',
      originalUse: 'Public fountain/monument',
      status: 'Active downtown centerpiece',
    },
    {
      name: 'Corinthian Peristyle (Bywaters Park)',
      year: '1932',
      style: 'Classical Corinthian',
      originalUse: 'Park structure',
      status: 'Active park feature',
    },
    {
      name: 'Paris Union Station',
      year: '1912',
      style: 'Railroad depot',
      originalUse: 'Railroad passenger station',
      status: 'Chamber of Commerce/genealogy library',
    },
    {
      name: 'First National Bank Building',
      year: '1916',
      style: 'Commercial brick',
      originalUse: 'Bank',
      status: 'Survived 1916 fire',
    },
    {
      name: 'Griener-Mohr Building',
      year: '1916',
      style: 'Post-fire commercial',
      originalUse: 'Commercial building',
      status: 'Arts center',
    },
    {
      name: 'Texas and Pacific Depot',
      year: '1876 era',
      style: 'Railroad depot',
      originalUse: 'Railroad depot',
      status: 'Restaurant',
    },
    {
      name: 'Wise House',
      year: '1886',
      style: 'Victorian',
      originalUse: 'Private residence',
      status: 'Event venue',
    },
    {
      name: 'Evergreen Cemetery',
      year: '1866',
      style: 'Cemetery',
      originalUse: 'Cemetery',
      status: 'Active (40,000 graves)',
    },
    {
      name: 'Grand Theatre',
      year: '1937',
      style: 'Unknown',
      originalUse: 'Movie theater',
      status: 'Unknown',
    },
    {
      name: 'Eiffel Tower Replica',
      year: '1993',
      style: 'Steel replica',
      originalUse: 'Tourist attraction',
      status: 'Active with red cowboy hat (added 1998)',
    },
  ];

  const notablePeople = [
    {
      name: 'Sam Bell Maxey',
      years: '1825-1895',
      description: 'Prominent attorney, Confederate major general, and two-term U.S. Senator. Built the 1868 High Victorian Italianate house in Paris that is now a Texas state historic site. Mexican War veteran who served in the Texas legislature before the Civil War.',
    },
    {
      name: 'William Johnson McDonald',
      years: '1844-1926',
      description: 'Lawyer, banker, and philanthropist who left over $800,000 to the University of Texas to establish McDonald Observatory near Fort Davis. Moved to Paris in 1887 and lived modestly despite increasing wealth. Never married. Studied botany at Harvard in 1895-1896.',
    },
    {
      name: 'Gordon McLendon',
      years: 'Unknown-circa 1990s',
      description: 'Businessperson, intelligence officer, and investor, considered the most famous person born in Paris. Zodiac sign Gemini.',
    },
    {
      name: 'D.J. "Shangela" Pierce',
      years: 'Born 1981',
      description: 'Drag queen and reality star, among the best-known contemporary celebrities from Paris.',
    },
    {
      name: 'Arjumand Hashmi',
      years: 'Served 2011-2012',
      description: 'Renowned cardiologist and Pakistani-born Muslim who served as mayor of Paris in 2011-2012. Worked to end nepotistic practices and welcomed recognition as an outsider bringing reform.',
    },
  ];

  const timelineEvents = [
    { year: 'A.D. 500+', event: 'Caddo Indians, particularly the Kadohadacho group, occupied the Red River valley region.' },
    { year: '1600s', event: 'Europeans began exploring the Red River valley; Caddoes caught between French and Spanish colonial interests.' },
    { year: '1720', event: 'French established friendly relations with Caddoes along Red River.' },
    { year: '1763', event: 'France ceded region to Spain as part of Seven Years\' War settlement.' },
    { year: '1815', event: 'First Americans believed to have settled in the Red River valley area.' },
    { year: '1824-1826', event: 'First recorded settlements in vicinity of Paris.' },
    { year: '1840 Dec 17', event: 'Fifth Congress of Republic of Texas established Lamar County from Red River County.' },
    { year: '1844 Feb', event: 'George W. Wright donated fifty acres; community designated county seat by voters.' },
    { year: '1845 Feb 3', event: 'Town incorporated by Congress of Republic of Texas; named Paris by Thomas Poteet.' },
    { year: '1861 Feb 23', event: 'Lamar County voted against secession (one of only 18 Texas counties).' },
    { year: '1873', event: 'Texas and Pacific Railway built to within nine miles of Paris.' },
    { year: '1875', event: 'Second Empire style courthouse completed (destroyed 1896).' },
    { year: '1876', event: 'Texas and Pacific Railway completed service to Paris; line reached Fort Worth.' },
    { year: '1877', event: 'Major fire forced considerable rebuilding in Paris.' },
    { year: '1887', event: 'Gulf, Colorado and Santa Fe Railway and St. Louis and San Francisco (Frisco) reached Paris.' },
    { year: '1893-1894', event: 'Texas Midland Railroad (later Southern Pacific) arrived.' },
    { year: '1896', event: 'Major fire destroyed Second Empire courthouse; Richardsonian Romanesque courthouse built with Texas granite.' },
    { year: '1910', event: 'Paris and Mount Pleasant Railway (Pa-Ma Line) opened.' },
    { year: '1912', event: 'Paris Union Station built; served Frisco, Santa Fe, and Texas Midland trains until 1956.' },
    { year: '1916 Mar 21', event: 'Great Fire of 1916 destroyed ~1,400 buildings across 260 acres; $11 million damage.' },
    { year: '1916 Mar 22', event: '"Smile" campaign launched to rebuild city.' },
    { year: '1917 Nov', event: 'New Lamar County Courthouse completed in Classical Revival/Romanesque style.' },
    { year: '1924 Jun 16', event: 'Paris Junior College established by Paris Independent School District.' },
    { year: '1927', event: 'Culbertson Fountain completed after three years of assembly.' },
    { year: '1932', event: 'Corinthian Peristyle designed by J.L. Wees in Bywaters Park.' },
    { year: '1940', event: 'Paris Junior College moved to present fifty-four-acre campus.' },
    { year: '1982 Apr 2', event: 'F4 tornado destroyed 1,500+ homes, killed 10, injured 170, left 3,000 homeless; $50 million damage.' },
    { year: '1984-1990s', event: 'Local businesses invested nearly $7 million renovating downtown.' },
    { year: '1993', event: '65-foot Eiffel Tower replica installed at Love Civic Center site.' },
    { year: '1998', event: 'Giant red Stetson cowboy hat (3.5 feet tall) added atop Eiffel Tower replica.' },
    { year: '2005-2006', event: 'Lamar County Courthouse restored with state grants.' },
    { year: '2020', event: 'Population 24,505; median household income $45,439; poverty rate 25.81%.' },
  ];

  const interestingFacts = [
    'Named for Paris, France by one of George W. Wright\'s employees, Thomas Poteet.',
    'One of only 18 Texas counties that voted against secession on February 23, 1861.',
    'Endured three major fires: 1877, 1896, and the catastrophic Great Fire of 1916 that destroyed ~1,400 buildings.',
    'The "Smile" campaign launched the day after the 1916 fire encouraged rebuilding, and the city reconstructed itself within twelve months.',
    'Home to one of the largest collections of 1916 architecture found in the United States.',
    'By 1912, five major railroads crisscrossed Paris, making it a significant transportation hub.',
    'Paris Junior College, established in 1924, is one of the oldest junior colleges in Texas.',
    'An F4 tornado on April 2, 1982 destroyed over 1,500 homes, killed 10 people, and caused $50 million in damage.',
    'Paris, Texas and Paris, Tennessee both built Eiffel Tower replicas in 1993. When Tennessee later claimed superiority, Texas added a 3.5-foot red cowboy hat in 1998.',
    'The Eiffel Tower replica\'s LED lights can be programmed pink or blue for expectant parents\' gender reveals.',
    'Evergreen Cemetery contains a famous 12-foot statue of Jesus wearing cowboy boots, created when the sculptor allegedly didn\'t know how to sculpt sandals.',
    'The Paris Community Band is the longest performing municipal band in Texas, offering free summer concerts.',
    'William Johnson McDonald, a Paris banker who never married, left over $800,000 to establish the McDonald Observatory near Fort Davis.',
    'Among 23 U.S. cities named Paris, Paris, Texas promotes itself as the "Second Largest Paris in the World".',
    'Arjumand Hashmi, a renowned cardiologist and Pakistani-born Muslim, served as mayor in 2011-2012, working to end nepotistic practices.',
  ];

  const sources = [
    { number: 1, citation: 'Texas State Historical Association. "Paris, TX." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/paris-tx' },
    { number: 2, citation: 'Britannica. "Paris | Texas, Lamar County, Facts, & Map." July 19, 1998.', url: 'https://www.britannica.com/place/Paris-Texas' },
    { number: 3, citation: 'US Census Bureau. "Paris city, Texas - Census Bureau Profile."', url: 'https://data.census.gov/profile/Paris_city,_Texas?g=160XX00US4855080' },
    { number: 4, citation: 'Wikipedia. "Eiffel Tower (Paris, Texas)." April 18, 2016.', url: 'https://en.wikipedia.org/wiki/Eiffel_Tower_(Paris,_Texas)' },
    { number: 5, citation: 'Texas Time Travel. "Eiffel Tower, Paris Texas."', url: 'https://texastimetravel.com/directory/eiffel-tower-paris-texas/' },
    { number: 6, citation: 'Texas Lodging. "Paris, Texas – A Unique Blend of Charm, History, & Vibrant Culture." August 26, 2024.', url: 'https://texaslodging.com/paris-texas-a-unique-blend-of-charm-history-vibrant-culture/' },
    { number: 7, citation: 'Texas State Historical Association. "Lamar County." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/lamar-county' },
    { number: 8, citation: 'Wikipedia. "Paris, Texas."', url: 'https://en.wikipedia.org/wiki/Paris,_Texas' },
    { number: 9, citation: 'Wikipedia. "Lamar County, Texas."', url: 'https://en.wikipedia.org/wiki/Lamar_County,_Texas' },
    { number: 10, citation: 'Texas Time Travel. "Lamar County Courthouse." September 2, 2005.', url: 'https://texastimetravel.com/directory/lamar-county-courthouse/' },
    { number: 11, citation: 'World Population Review. "Paris, Texas Population 2025."', url: 'https://worldpopulationreview.com/us-cities/texas/paris' },
    { number: 12, citation: 'Stephen F. Austin State University. "Lamar County - Regional Resources Map for East Texas History."', url: 'https://www.sfasu.edu/heritagecenter/489.asp' },
    { number: 13, citation: 'Texas State Historical Association. "Franklin County." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/franklin-county' },
    { number: 14, citation: 'Visit Paris, Texas. "History."', url: 'https://visitparis-tx.com/history' },
    { number: 15, citation: 'Franklin County Genealogical Society. "Franklin County History."', url: 'https://www.fcgensociety.org/about-franklin-county/franklin-county-history/' },
    { number: 16, citation: 'Franklin County Genealogical Society. "About Franklin County."', url: 'https://www.fcgensociety.org/about-franklin-county/' },
    { number: 17, citation: 'Combs Families. "Combs &c. Families of Franklin County, Texas." November 4, 1998.', url: 'http://combs-families.org/combs/records/tx/frank.htm' },
    { number: 18, citation: 'Visit Paris Texas. "Downtown History." December 15, 2024.', url: 'https://visitparistexas.com/downtown-history/' },
    { number: 19, citation: 'MyParisTexas. "ABOUT PARIS." February 24, 2021.', url: 'https://myparistexas.com/about/' },
    { number: 20, citation: 'Texas Railroad History. "Tower 79 - Paris." October 9, 2021.', url: 'http://txrrhistory.com/towers/079/079.htm' },
    { number: 21, citation: 'Classic Trains Magazine. "Remembering the Texas & Pacific Railway." November 3, 2020.', url: 'https://www.trains.com/ctr/railroads/fallen-flags/remembering-the-texas-pacific-railway/' },
    { number: 22, citation: 'Facebook/Fort Worth Library. "The Texas & Pacific Railway reached Fort Worth 149 years ago." July 17, 2025.', url: 'https://www.facebook.com/ftworthlibrary/posts/1117486097093753/' },
    { number: 23, citation: 'Paris Economic Development Corporation. "Our History." October 2, 2023.', url: 'https://selectparistexas.com/live-in-paris/our-history/' },
    { number: 24, citation: 'Texas State Historical Association. "Paris and Mount Pleasant Railroad." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/paris-and-mount-pleasant-railroad' },
    { number: 25, citation: 'Visit Paris Texas. "Lamar County Historical Society Museum." April 16, 2025.', url: 'https://visitparistexas.com/lamar-county-museum/' },
    { number: 26, citation: '254 Texas Courthouses. "191 Lamar County." August 2, 2013.', url: 'http://www.254texascourthouses.net/191-lamar-county.html' },
    { number: 27, citation: 'MyParisTexas. "Remembering the 1916 Paris Fire." March 18, 2021.', url: 'https://myparistexas.com/1916-paris-fire/' },
    { number: 28, citation: 'Lamar County. "Paris TX Fire of 1916." July 3, 2000.', url: 'http://www.lamarcountytx.org/fire1916.htm' },
    { number: 29, citation: 'County Progress. "Monuments of Justice: Lamar County Courthouse." March 4, 2020.', url: 'https://countyprogress.com/monuments-of-justice-lamar-county-courthouse/' },
    { number: 30, citation: 'Advisory Council on Historic Preservation. "Paris, Texas." January 31, 2004.', url: 'https://www.achp.gov/preserve-america/community/paris-texas' },
    { number: 31, citation: 'Paris Junior College. "History of Paris Junior College." May 10, 2024.', url: 'https://www.parisjc.edu/main/pjc-history/' },
    { number: 32, citation: 'Texas State Historical Association. "Paris Junior College." Handbook of Texas Online. April 23, 2019.', url: 'https://www.tshaonline.org/handbook/entries/paris-junior-college' },
    { number: 33, citation: 'Wikipedia. "Paris Junior College." April 4, 2005.', url: 'https://en.wikipedia.org/wiki/Paris_Junior_College' },
    { number: 34, citation: 'MyParisTexas. "Paris remembers 1982 deadly tornado." March 31, 2024.', url: 'https://myparistexas.com/paris-remembers-1982-deadly-tornado/' },
    { number: 35, citation: 'Texas Water Development Board. "1982: When a Tornado Hit Paris." December 1983.', url: 'https://www.twdb.texas.gov/publications/reports/limited_printing/doc/LP-195.pdf' },
    { number: 36, citation: 'National Weather Service. "Paris Tornado April 2, 1982."', url: 'https://www.weather.gov/fwd/paris1982' },
    { number: 37, citation: 'Texas Demographics. "Paris Demographics."', url: 'https://www.texas-demographics.com/paris-demographics' },
    { number: 38, citation: 'Data USA. "Talco, TX."', url: 'https://datausa.io/profile/geo/talco-tx' },
    { number: 39, citation: 'Visit Paris Texas. "Eiffel Tower." February 24, 2025.', url: 'https://visitparistexas.com/eiffel-tower/' },
    { number: 40, citation: 'Lamar County Chamber of Commerce. "Landmarks." March 12, 2021.', url: 'https://www.paristexas.com/landmarks/' },
    { number: 41, citation: 'Lamar County Chamber of Commerce. "Texas Eiffel Tower." March 10, 2021.', url: 'https://www.paristexas.com/eiffel-tower/' },
    { number: 42, citation: 'Texas Monthly. "The Most Interesting Man in Paris, Texas." July 30, 2012.', url: 'https://www.texasmonthly.com/news-politics/the-most-interesting-man-in-paris-texas/' },
    { number: 43, citation: 'Wikipedia. "Sam Bell Maxey House." June 15, 2006.', url: 'https://en.wikipedia.org/wiki/Sam_Bell_Maxey_House' },
    { number: 44, citation: 'Visit Paris Texas. "Sam Bell Maxey House." February 6, 2025.', url: 'https://visitparistexas.com/sam-bell-maxey-house/' },
    { number: 45, citation: 'TripAdvisor. "Sam Bell Maxey State Historic Site."', url: 'https://www.tripadvisor.com/Attraction_Review-g56424-d3373443-Reviews-Sam_Bell_Maxey_State_Historic_Site-Paris_Texas.html' },
    { number: 46, citation: 'Texas Time Travel. "Sam Bell Maxey House State Historic Site."', url: 'https://texastimetravel.com/directory/sam-bell-maxey-house-state-historic-site/' },
    { number: 47, citation: 'Visit Paris, Texas. "McDonald Observatory, Gary B.B Coleman." September 13, 2010.', url: 'https://visitparis-tx.com/celebrities-1' },
    { number: 48, citation: 'Playback. "Famous People From Paris, Texas - #1 is Gordon McLendon."', url: 'https://playback.fm/born-in-city/paris-tx' },
    { number: 49, citation: 'Famous Birthdays. "Celebrities Born In Paris, Texas."', url: 'https://www.famousbirthdays.com/city/paris-tx.html' },
    { number: 50, citation: 'FamousFix. "People from Paris, Texas."', url: 'https://www.famousfix.com/list/people-from-paris-texas' },
    { number: 51, citation: 'Texas Historical Commission. "Lamar County Courthouse."', url: 'https://atlas.thc.texas.gov/Details/5277012313' },
    { number: 52, citation: 'YouTube/Texas Country Reporter. "Lamar County Historical Museum." December 30, 2023.', url: 'https://www.youtube.com/watch?v=RGISUebEv1Q' },
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
        communityName="Paris"
        county="Lamar County"
        established="1844 (incorporated 1845)"
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
              Paris, the county seat of Lamar County, is located on U.S. highways 271 and 82 in the central part of the county, approximately 105 miles northeast of Dallas. The 2020 census recorded a population of 24,505. The city has endured three major fires, survived a devastating tornado, and evolved from an agricultural center into a regional medical and educational hub serving northeast Texas and southeast Oklahoma. Paris is perhaps best known for its 65-foot Eiffel Tower replica topped with a red cowboy hat. The city maintains one of the largest collections of 1916 post-fire architecture in the United States. Occupying approximately 33.9 square miles, the terrain is gently rolling, with elevation ranging from 400 to 635 feet above sea level.
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
            The Red River valley region was home to the Caddo Indians, particularly the Kadohadacho group, who are believed to have occupied the valley shortly after A.D. 500. The Caddoes were primarily an agricultural people who developed sophisticated techniques based on corn and pumpkins, settled in permanent villages, created distinctive pottery, and participated in extensive trade networks spanning the Mississippi River valley. When Europeans began exploring the valley during the 1600s, the Caddoes found themselves caught between French and Spanish colonial interests.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            Settlement began in the Red River valley well before the Texas Revolution. The first Americans are believed to have settled in the area in 1815, with the first recorded settlement in the vicinity of Paris in 1826. Most early settlers came from the upper South, particularly Tennessee, Virginia, North Carolina, South Carolina, Alabama, and Mississippi. The Cherokee Trace, part of the Trail of Tears, ran along the county's eastern border—a Caddo Indian highway connecting tribes in Texas to those in Oklahoma.
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
            By 1840, population growth necessitated organization of a new county from Red River County. The Fifth Congress established Lamar County on December 17, 1840, named for Mirabeau B. Lamar, first vice president and second president of the Republic of Texas. The town was founded by merchant George W. Wright, who donated fifty acres of land in February 1844, when the community was also designated the county seat by voters. The community was incorporated by the Congress of the Republic of Texas on February 3, 1845. The town was named for Paris, France, by one of Wright's employees, Thomas Poteet.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            Paris was located on the Central National Road of the Republic of Texas, which ran from San Antonio north through Paris to cross the Red River. By the eve of the Civil War, Paris had 700 residents and had become a cattle and farming center. Lamar County was one of only eighteen Texas counties that voted against secession on February 23, 1861, though many county inhabitants later served in the Confederacy, including General Sam Bell Maxey's Lamar Rifles.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Railroad Expansion (1873-1912)" background="subtle">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            In 1873, the Texas and Pacific Railway built fifty-four miles east from Sherman to within nine miles of Paris. Two years later, in 1876, the remaining nine miles were completed and Paris had its first rail service. The Texas and Pacific reached Fort Worth in July 1876, completing a critical transportation corridor. The railroad transformed Paris from a modest agricultural town into a regional transportation hub. Additional railroads reached Paris in 1887: the Gulf, Colorado and Santa Fe Railway and the St. Louis and San Francisco (Frisco). The Texas Midland Railroad (later Southern Pacific) arrived in 1893 or 1894. The Paris and Mount Pleasant Railway opened in 1910. Paris Union Station, built in 1912, served Frisco, Santa Fe, and Texas Midland passenger trains until 1956. The city became a crossing point for five major railroads, creating extensive switching yards and repair facilities.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="The Great Fire of 1916 and Rebuilding">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            On March 21, 1916, beginning around 5:00 p.m., the most devastating fire in Paris history ignited. The exact cause was never determined. Paris was experiencing a long dry spell, and winds estimated at 50 miles per hour fanned the flames. Insurance experts investigating the fire said the strong wind held superheated air close to the ground and created a wave of "radiant heat" that fired buildings before real flames reached them. The flames were visible from up to forty miles away.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            The fire destroyed almost half the town: approximately 1,400 buildings across 260 acres. Property damage was estimated at $11 million in 1916 dollars. Destroyed structures included the Federal Building and Post Office, the Lamar County Courthouse and Jail, City Hall, most commercial buildings, and several churches. Firefighters from Paris and surrounding areas fought the blaze through the night. The fire was finally brought under control on the morning of March 22.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            The day after the fire, the Lamar County Chamber of Commerce President launched the "Smile" campaign, which encouraged citizens to overcome the destruction and rebuild the city. In the next twelve months, people joined together to rebuild, resulting in a more modern and vibrant downtown. The new courthouse was completed in November 1917, built of fireproof concrete covered by rough pink granite salvaged from the 1897 building. The rebuild created what is now recognized as one of the largest collections of 1916 architecture found in the United States.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="20th Century Development" background="subtle">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            Paris Junior College was established by the Paris Independent School District on June 16, 1924, in response to the community's need for an institution of higher learning. The college opened its downtown campus in the high school building in September 1924 with seven faculty members and ninety-one students. In 1937, the board voted to establish the Paris Junior College District, independent of yet coterminous with the Paris Independent School District. The campus was moved to its present fifty-four-acre site in 1940. By 2024, the college operates three campuses in East Texas: Paris, Greenville, and Sulphur Springs, enrolling nearly 5,000 students.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            On April 2, 1982, Paris was struck by an F4 tornado that destroyed more than 1,500 homes and buildings, left ten people dead, 170 injured, and 3,000 homeless. The damage toll was estimated at $50 million in 1982 dollars. The tornado was part of a severe weather outbreak across northeast Texas and southeast Oklahoma. The community responded with characteristic resilience, rebuilding damaged areas and improving emergency warning systems. From 1984 through the early 1990s, local businesses invested nearly $7 million in renovating and revitalizing the downtown area.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Contemporary Paris">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            The 2020 census recorded Paris's population at 24,505, with the 2025 estimated population at 25,278. The median household income in 2023 was $45,439, with a poverty rate of 25.81%. Paris serves as a regional medical center for northeast Texas and southeast Oklahoma, with light manufacturing and continuing as a shipping point for cotton, grain, and livestock. Following a tradition of American cities named "Paris," the city commissioned a 65-foot-tall replica of the Eiffel Tower in 1993 and installed it on the site of the Love Civic Center. In 1998, the city placed a giant red Stetson cowboy hat atop its tower, making it 65 feet total. The tower has become Paris's most iconic tourist attraction, accessible to the public twenty-four hours a day. In 2011-2012, Arjumand Hashmi, a renowned cardiologist and Pakistani-born Muslim, served as mayor of Paris, working to end nepotistic practices and bring reform to city government.
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
                  Other Notable Residents
                </h4>
                
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  lineHeight: 'var(--line-height-normal)',
                  color: 'var(--foreground-muted)',
                }}>
                  Model Elle Evans, voice actress Tia Ballard, pop singer Merideth Grace Puckett, war hero James O. Richardson (1878-1974), soul singer Harold Thomas, and reggae singer Cas Haley.
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
            Paris developed as a cattle and farming center, with a population of 700 by the eve of the Civil War. The Central National Road of the Republic of Texas facilitated agricultural trade. Flatboats and small steam-driven paddle wheelers on the Red River provided early access, allowing farmers and trappers to ship products to markets in Louisiana. The Blacklands Belt surrounding Paris provided fertile soil for cotton, grain, and livestock production. By 1900, Lamar County's population of 48,627 reflected substantial agricultural prosperity.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            The arrival of the Texas and Pacific Railway in 1876 transformed Paris into a regional transportation and commercial hub. The city became a crossing point for five major railroads by 1912, creating extensive switching yards, repair facilities, and freight handling operations. Paris served as a shipping point for cotton, grain, and livestock throughout northeast Texas and southern Oklahoma. The city developed light manufacturing to supplement its agricultural economy and has become a regional medical center serving northeast Texas and southeast Oklahoma. Tourism centered on the Eiffel Tower replica and historic downtown contributes to the local economy.
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
            Paris Junior College, established in 1924, serves as the primary institution of higher learning for the region. As of 2024, the college operates three campuses (Paris, Greenville, Sulphur Springs) and enrolls nearly 5,000 students. The college hosts the Texas Institute of Jewelry Technology, a well-respected school of gemology, horology, and jewelry. The Paris Community Band is the longest performing municipal band in Texas, offering free summer concerts. Downtown Paris hosts concerts, wine walks, holiday experiences including Winter Wonderland at Bywaters Park, Movies in the Park, and a local farmers market. The Lamar County Historical Society Museum preserves and displays local history with over 7,000 square feet of exhibits. The Paris Public Library serves residents, while the Lamar County Genealogical Society Library, housed in the historic Paris Union Station, provides research facilities. Various historic sites and walking tours interpret the city's architectural and cultural heritage, including the Sam Bell Maxey House State Historic Site, which maintains over 10,000 artifacts interpreting upper-middle-class life in the late nineteenth and twentieth centuries.
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
            Paris, Texas, the county seat of Lamar County, was founded in 1844 when merchant George W. Wright donated fifty acres and voters designated it county seat. Named for Paris, France, by employee Thomas Poteet, the town was incorporated by the Republic of Texas Congress on February 3, 1845. The Texas and Pacific Railway reached Paris in 1876, transforming it into a regional transportation hub eventually served by five railroads. Three major fires struck in 1877, 1896, and catastrophically in 1916, when approximately 1,400 buildings burned causing $11 million damage. The community's resilient "Smile" campaign rebuilt downtown within twelve months, creating one of America's largest collections of 1916 architecture. An F4 tornado in 1982 destroyed 1,500 homes. Today, Paris (population 24,505 in 2020) is known for its 65-foot Eiffel Tower replica topped with a red cowboy hat, serving as a regional medical and educational center.
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