import { Header } from './Header';
import { ContentSection } from './ContentSection';
import { SourcesList } from './SourcesList';
import { Footer } from './Footer';
import { ArrowLeft } from 'lucide-react';

interface CivilWarEraPageProps {
  onBack?: () => void;
}

export function CivilWarEraPage({ onBack }: CivilWarEraPageProps) {
  const sources = [
    { number: 1, citation: 'Texas State Library. "Civil War in Texas - 1862."', url: 'http://www.tsl.texas.gov/exhibits/civilwar/1862_2.html' },
    { number: 2, citation: 'UNT Texas History. "Civil War and Reconstruction in Texas."', url: 'https://texashistory.unt.edu/ark:/67531/metapth415075/m1/14/' },
    { number: 3, citation: 'Texas Our Texas (PBS). "Civil War & Reconstruction."', url: 'https://texasourtexas.texaspbs.org/the-eras-of-texas/civil-war-reconstruction/' },
    { number: 4, citation: 'Texas Historical Commission. "Texas in the Civil War."', url: 'https://thc.texas.gov/public/upload/publications/tx-in-civil-war.pdf' },
    { number: 5, citation: 'Stephen F. Austin State University. "Civil War Industry in East Texas."', url: 'https://scholarworks.sfasu.edu/ita/vol1996/iss1/16/' },
    { number: 6, citation: 'ETX Life. "Marshall, Texas."', url: 'https://etxlife.com/marshall-texas/' },
    { number: 7, citation: 'Wikipedia. "Marshall, Texas."', url: 'https://en.wikipedia.org/wiki/Marshall,_Texas' },
    { number: 8, citation: 'Texas State Historical Association. "Secession." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/secession' },
    { number: 9, citation: 'Texas State Historical Association. "Secession Convention." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/secession-convention' },
    { number: 10, citation: 'Texas Tribune. "Sam Houston, Texas Secession and Robert E. Lee." February 1, 2011.', url: 'https://www.texastribune.org/2011/02/01/sam-houston-texas-secession-and-robert-e-lee/' },
    { number: 11, citation: 'Texas State Historical Association. "African Americans." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/african-americans' },
    { number: 12, citation: 'Genealogy Trails. "Cherokee County Civil War History."', url: 'http://genealogytrails.com/tex/pineywoods/cherokee/mil_civil.html' },
    { number: 13, citation: 'Politico. "Texas Secedes from the Union, Feb. 1, 1861." February 1, 2018.', url: 'https://www.politico.com/story/2018/02/01/texas-secedes-from-the-union-feb-1-1861-374091' },
    { number: 14, citation: 'Cherokee County TXGenWeb. "Civil War History and Military."', url: 'https://www.txgenwebcounties.com/cherokee/1/cwhm.htm' },
    { number: 15, citation: 'Texas State Historical Association. "Cherokee County." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/cherokee-county' },
    { number: 16, citation: 'Vote Archive. "Texas Secession Referendum 1861."', url: 'https://votearchive.com/tx-sec-ref-1861/' },
    { number: 17, citation: 'Texas Almanac. "Secession."', url: 'https://www.texasalmanac.com/articles/secession' },
    { number: 18, citation: 'Wikipedia. "List of Confederate units from Texas."', url: 'https://en.wikipedia.org/wiki/List_of_Confederate_units_from_Texas_in_the_American_Civil_War' },
    { number: 19, citation: 'USGenWeb Archives. "Rusk County Civil War Rosters."', url: 'http://files.usgwarchives.net/tx/rusk/military/civilrost.txt' },
    { number: 20, citation: 'National Park Service. "1st Texas Infantry - Hood\'s Brigade."', url: 'https://www.nps.gov/civilwar/search-battle-units-detail.htm?battleUnitCode=CTX0001RI01' },
    { number: 21, citation: 'Texas State Historical Association. "Hood\'s Texas Brigade." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/hoods-texas-brigade' },
    { number: 22, citation: 'Hood\'s Texas Brigade Association. "About."', url: 'https://www.hoodstexasbrigade.org/about.html' },
    { number: 23, citation: 'University of Southern Mississippi. "Hood\'s Texas Brigade."', url: 'https://aquila.usm.edu/faculty_books/9/' },
    { number: 24, citation: 'Liberty University. "Hood\'s Texas Brigade at Gettysburg."', url: 'https://digitalcommons.liberty.edu/cgi/viewcontent.cgi?article=1131&context=ljh' },
    { number: 25, citation: 'War History Online. "Hood\'s Texas Brigade."', url: 'https://www.warhistoryonline.com/american-civil-war/hoods-texas-brigade.html' },
    { number: 26, citation: 'Stephen F. Austin University Archives. "3rd Texas Cavalry."', url: 'https://archives.sfasu.edu/repositories/2/archival_objects/75647' },
    { number: 27, citation: 'UNT Texas History. "9th Texas Cavalry Records."', url: 'https://texashistory.unt.edu/ark:/67531/metapth11921/' },
    { number: 28, citation: 'Texas State Historical Association. "Sabine Pass, Battle of." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/sabine-pass-battle-of' },
    { number: 29, citation: 'American Battlefield Trust. "Sabine Pass."', url: 'https://www.battlefields.org/learn/civil-war/battles/sabine-pass' },
    { number: 30, citation: 'National Park Service. "Battle of Sabine Pass."', url: 'https://www.nps.gov/civilwar/search-battles-detail.htm?battleCode=tx006' },
    { number: 31, citation: 'Wikipedia. "Richard W. Dowling."', url: 'https://en.wikipedia.org/wiki/Richard_W._Dowling' },
    { number: 32, citation: 'American Battlefield Trust. "Battle of Valverde."', url: 'https://www.battlefields.org/learn/civil-war/battles/valverde' },
    { number: 33, citation: 'Wikipedia. "Battle of Valverde."', url: 'https://en.wikipedia.org/wiki/Battle_of_Valverde' },
    { number: 34, citation: 'We\'re History. "The Battle of Valverde, New Mexico."', url: 'https://werehistory.org/the-battle-of-valverde-new-mexico-february-21-1862/' },
    { number: 35, citation: 'Texas State Historical Association. "Val Verde Battery." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/val-verde-battery' },
    { number: 36, citation: 'Texas State Historical Association. "Sibley Campaign." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/sibley-campaign' },
    { number: 37, citation: 'Rice University Wiki. "Texas Iron Works."', url: 'http://wiki.wcaleb.rice.edu/Texas Iron Works' },
    { number: 38, citation: 'Texas State Historical Association. "Nash\'s Iron Foundry." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/nashs-iron-foundry' },
    { number: 39, citation: 'Texas Almanac. "Texas Iron Works."', url: 'https://www.texasalmanac.com/places/texas-iron-works' },
    { number: 40, citation: 'Providence Journal. "Civil War Hardships on the Homefront." November 15, 2014.', url: 'https://www.providencejournal.com/article/20141115/News/311159986' },
    { number: 41, citation: 'The Texas Insider. "Grand Saline, Texas: A Historical Hub of Salt Production."', url: 'https://thetexasinsider.com/grand-saline-texas-a-historical-hub-of-salt-production/' },
    { number: 42, citation: 'Rice University Wiki. "Salt Works."', url: 'http://wiki.wcaleb.rice.edu/Salt Works' },
    { number: 43, citation: 'Texas Historical Commission Atlas. "Jordan\'s Saline."', url: 'https://atlas.thc.texas.gov/Details/5467011416' },
    { number: 44, citation: 'Van Zandt County TXGenWeb. "Tradition - Salt Works."', url: 'https://www.txgenwebcounties.org/vanzandt/tradition.htm' },
    { number: 45, citation: 'Texas State Historical Association. "Grand Saline, TX." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/grand-saline-tx' },
    { number: 46, citation: 'Texas CHL Forum. "Grand Saline History Discussion."', url: 'https://www.texaschlforum.com/viewtopic.php?t=96287' },
    { number: 47, citation: 'Texas Historical Commission Atlas. "Marshall Powder Mill."', url: 'https://atlas.thc.texas.gov/Details/5203010147' },
    { number: 48, citation: 'Stephen F. Austin State University. "Marshall as Confederate Center."', url: 'https://scholarworks.sfasu.edu/cgi/viewcontent.cgi?article=2181&context=ita' },
    { number: 49, citation: 'Marshall Texas. "History."', url: 'https://www.marshalltexas.net/362/History' },
    { number: 50, citation: 'Historical Marker Database. "Marshall Powder Mill Marker."', url: 'https://www.hmdb.org/m.asp?m=110899' },
    { number: 51, citation: 'Civil War Talk. "Jefferson Album - Texas Civil War Town."', url: 'https://civilwartalk.com/threads/jefferson-album-texas-civil-war-town.119905/' },
    { number: 52, citation: 'Red River Historian. "Jefferson Devolution."', url: 'https://www.redriverhistorian.com/post/jefferson-devolution' },
    { number: 53, citation: 'KPEL 965. "Jefferson, Texas: Baghdad on the Bayou."', url: 'https://kpel965.com/jefferson-texas-east-texass-hidden-baghdad-on-the-bayou-where-steamboats-once-ruled-and-ghosts-now-roam/' },
    { number: 54, citation: 'Visit Jefferson Texas. "History."', url: 'https://visitjeffersontexas.com/history' },
    { number: 55, citation: 'Texas State Historical Association. "Jefferson, TX." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/jefferson-tx-marion-county' },
    { number: 56, citation: 'Texas State Historical Association. "Civil War." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/civil-war' },
    { number: 57, citation: 'Wikipedia. "Battle of Galveston."', url: 'https://en.wikipedia.org/wiki/Battle_of_Galveston' },
    { number: 58, citation: 'Texas State Historical Association. "Galveston, Battle of." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/galveston-battle-of' },
    { number: 59, citation: 'National Park Service. "Battle of Galveston."', url: 'https://www.nps.gov/civilwar/search-battles-detail.htm?battleCode=tx002' },
    { number: 60, citation: 'Historical Conquest. "Lesson Plans - Civil War Home Front."', url: 'https://www.historicalconquest.com/single-post/lesson-plans-for-the-u-s-civil-war-the-home-front-and-women-in-the-war' },
    { number: 61, citation: 'American Battlefield Trust. "Total War: The Civil War\'s Effect on the Home Front."', url: 'https://www.battlefields.org/learn/articles/total-war-civil-wars-effect-home-front' },
    { number: 62, citation: 'Rice University Wiki. "Refugeed Slaves."', url: 'http://wiki.wcaleb.rice.edu/Refugeed Slaves' },
    { number: 63, citation: 'Civil War Talk. "Refugees - Gone to Texas."', url: 'https://civilwartalk.com/threads/refugees-gone-to-texas.129125/' },
    { number: 64, citation: 'University of Texas Arlington. "Refugees and Reconstruction." PDF.', url: 'https://core.ac.uk/download/pdf/72737234.pdf' },
    { number: 65, citation: 'Caleb McDaniel. "Refugeed Slaves - OAH."', url: 'http://wcaleb.org/blog/refugeed-slaves-oah' },
    { number: 66, citation: 'Wikipedia. "U.S. Military Telegraph Corps."', url: 'https://en.wikipedia.org/wiki/U.S._Military_Telegraph_Corps' },
    { number: 67, citation: 'Texas State Historical Association. "Telegraph Service." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/telegraph-service' },
    { number: 68, citation: 'JSTOR. "Telegraph in Texas History."', url: 'https://www.jstor.org/stable/30236163' },
    { number: 69, citation: 'Texas Time Travel. "North Central Texas During the Civil War."', url: 'https://texastimetravel.com/blog/north-central-texas-during-the-civil-war/' },
    { number: 70, citation: 'Dead Confederates. "Tracking Confederate Deserters in East Texas."', url: 'https://deadconfederates.com/2016/06/25/tracking-confederate-deserters-in-east-texas-2/' },
    { number: 71, citation: 'Wikipedia. "Red River Campaign."', url: 'https://en.wikipedia.org/wiki/Red_River_campaign' },
    { number: 72, citation: 'Britannica. "Red River Campaign."', url: 'https://www.britannica.com/event/Red-River-Campaign' },
    { number: 73, citation: 'Emerging Civil War. "A Union Catastrophe by the Name of Red River."', url: 'https://emergingcivilwar.com/2014/08/02/a-union-catastrophe-by-the-name-of-red-river/' },
    { number: 74, citation: 'Wikipedia. "History of Slavery in Texas."', url: 'https://en.wikipedia.org/wiki/History_of_slavery_in_Texas' },
    { number: 75, citation: 'Texas State Historical Association. "Slavery." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/slavery' },
    { number: 76, citation: 'Texas Historical Commission. "Plantations Past."', url: 'https://thc.texas.gov/blog/plantations-past' },
    { number: 77, citation: 'Equal Justice Initiative Calendar. "Juneteenth - June 19."', url: 'https://calendar.eji.org/racial-injustice/jun/19' },
    { number: 78, citation: 'Galveston History. "Juneteenth and General Order No. 3."', url: 'https://www.galvestonhistory.org/news/juneteenth-and-general-order-no-3' },
    { number: 79, citation: 'Texas State Historical Association. "Juneteenth." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/juneteenth' },
    { number: 80, citation: 'The Story of Texas. "Battle of Galveston Barricade."', url: 'https://www.thestoryoftexas.com/discover/artifacts/battle-galveston-barricade' },
    { number: 81, citation: 'Galveston Unscripted. "Battle of Galveston."', url: 'https://www.galvestonunscripted.com/battle-of-galveston' },
    { number: 82, citation: 'Rosenberg Library Museum. "The Battle of Galveston."', url: 'https://www.rosenberg-library-museum.org/treasures/the-battle-of-galveston' },
    { number: 83, citation: 'Texas Historical Commission. "Sabine Pass Battleground."', url: 'https://thc.texas.gov/historic-sites/sabine-pass-battleground' },
    { number: 84, citation: 'DTIC. "Red River Campaign Analysis." PDF.', url: 'https://apps.dtic.mil/sti/tr/pdf/ADA283527.pdf' },
    { number: 85, citation: 'Wikipedia. "Action of 26-27 April 1864."', url: 'https://en.wikipedia.org/wiki/Action_of_26%E2%80%9327_April_1864' },
    { number: 86, citation: 'Wikipedia. "Camp Ford."', url: 'https://en.wikipedia.org/wiki/Camp_Ford' },
    { number: 87, citation: 'The Story of Texas. "Joseph Spiegel - Camp Ford."', url: 'https://www.thestoryoftexas.com/discover/texas-story-project/joseph-spiegel' },
    { number: 88, citation: 'Camp Ford Tyler. "About Camp Ford."', url: 'https://campfordtyler.com' },
    { number: 89, citation: 'American Battlefield Trust. "Camp Ford Historic Site."', url: 'https://www.battlefields.org/visit/heritage-sites/camp-ford-historic-site-and-park' },
    { number: 90, citation: 'Historical Marker Database. "Camp Rusk."', url: 'https://www.hmdb.org/m.asp?m=232136' },
    { number: 91, citation: 'USF St. Petersburg. "Juneteenth: Complicated History."', url: 'https://www.stpetersburg.usf.edu/news/2023/juneteenth-complicated-history-significance-celebration-around-struggle-for-freedom.aspx' },
    { number: 92, citation: 'Smithsonian NMAAHC. "Juneteenth."', url: 'https://nmaahc.si.edu/explore/moments/juneteenth' },
    { number: 93, citation: 'Emerging Civil War. "Echoes of Reconstruction: The Spread of Juneteenth."', url: 'https://emergingcivilwar.com/2022/06/18/echoes-of-reconstruction-the-spread-of-juneteenth-celebrations-throughout-texas/' },
    { number: 94, citation: 'Texas State Historical Association. "Freedmen\'s Bureau." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/freedmens-bureau' },
    { number: 95, citation: 'National Archives. "Freedmen\'s Bureau Records - Texas."', url: 'https://www.archives.gov/files/research/microfilm/m1912.pdf' },
    { number: 96, citation: 'Houston History Magazine. "Free Men." PDF.', url: 'https://houstonhistorymagazine.org/wp-content/uploads/2012/10/Free-Men.pdf' },
    { number: 97, citation: 'FamilySearch. "Freedmen\'s Bureau Collection."', url: 'https://www.familysearch.org/en/search/collection/1989155' },
    { number: 98, citation: 'Texas State Library. "Governor Hamilton - Freedmen 1865."', url: 'https://www.tsl.texas.gov/governors/war/hamilton-freedmen-1.html' },
    { number: 99, citation: 'National Archives. "Freedmen\'s Bureau Research."', url: 'https://www.archives.gov/research/african-americans/freedmens-bureau' },
    { number: 100, citation: 'UNT Texas History. "Challenges of Reunification - Slideshow."', url: 'https://education.texashistory.unt.edu/downloads/documents/7/units/reconstruction/lessons/challenges-of-reunification/english/slideshow.pdf' },
    { number: 101, citation: 'Texas Our Texas (PBS). "Cotton, Cattle & Railroads."', url: 'https://texasourtexas.texaspbs.org/the-eras-of-texas/cotton-cattle-railroads/' },
    { number: 102, citation: 'Texas State Historical Association. "Reconstruction." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/reconstruction' },
    { number: 103, citation: 'UNT Texas History. "Hood\'s Texas Brigade."', url: 'https://texashistory.unt.edu/ark:/67531/metapth6647/' },
    { number: 104, citation: 'RootsWeb. "Cherokee County History."', url: 'http://sites.rootsweb.com/~txcherok/history.htm' },
    { number: 105, citation: 'Texas Politics. "Cotton Economy."', url: 'https://texaspolitics.utexas.edu/archive/html/cult/features/0400_01/slide4.html' },
    { number: 106, citation: 'Texas State Historical Association. "Cotton Culture." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/cotton-culture' },
    { number: 107, citation: 'Fiveable. "Cotton Economy - Texas History."', url: 'https://fiveable.me/key-terms/hs-texas-history/cotton-economy' },
    { number: 108, citation: 'Texas State Historical Association. "Salt Industry." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/salt-industry' },
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
                1861–1865
              </span>
            </div>
            
            <h1 className="mb-6" style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '56px',
              fontWeight: 'var(--font-weight-bold)',
              lineHeight: '1.1',
              color: 'var(--foreground)',
            }}>
              The Civil War Era in East Texas
            </h1>
            
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '20px',
              lineHeight: '1.6',
              color: 'var(--foreground-muted)',
            }}>
              A Critical Supply Base and Military Staging Area for the Confederacy
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
              The American Civil War transformed East Texas from a frontier cotton-producing region into a critical supply base and military staging area for the Confederacy. Between 1861 and 1865, the piney woods counties of northeastern Texas contributed thousands of soldiers to Confederate service, established vital war industries, sheltered refugee populations fleeing Union advances elsewhere in the South, and maintained plantation agriculture through enslaved labor even as the institution crumbled across much of the Confederacy.
            </p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--font-size-base)',
              lineHeight: 'var(--line-height-normal)',
              color: 'var(--foreground-muted)',
            }}>
              East Texas occupied a unique strategic position within the Confederacy. Geographically distant from major battlefronts in Virginia and Tennessee, the region nevertheless served as the Trans-Mississippi Department's primary source of foodstuffs, livestock, and manufactured goods. Major towns including Marshall, Jefferson, Tyler, and Nacogdoches evolved into Confederate administrative and supply centers. Unlike much of the South, East Texas escaped direct invasion until the war's final months, allowing continuous production of war materiel and agricultural goods. By 1860, East Texas counties contained approximately 30 percent of Texas's 169,000 enslaved African Americans, concentrated along river valleys where cotton plantations flourished.
            </p>
          </div>
        </div>
      </section>
      
      {/* Historical Sections */}
      <ContentSection title="Political Climate and Secession" background="subtle">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            East Texas's path to secession began well before Abraham Lincoln's November 1860 presidential election. Throughout the 1850s, the region's economic and social ties to the Deep South—particularly Louisiana, Arkansas, and Mississippi—created strong proslavery sentiment. In July and August 1860, a series of mysterious fires swept through East Texas towns. Rumors—never substantiated—of an abolitionist-instigated slave insurrection created widespread panic. Vigilance committees and slave patrols increased throughout the region, and suspected abolitionists faced expulsion or execution.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            When South Carolina seceded in December 1860, pressure mounted for Texas to follow. Governor Sam Houston, the aging hero of Texas independence, opposed secession and refused to convene the legislature. Frustrated secessionists, led by Texas Supreme Court Chief Justice Oran M. Roberts, circumvented Houston by organizing an extralegal convention. The secession convention convened in Austin on January 28, 1861. Delegates voted 166-8 on February 1, 1861, to approve an ordinance of secession. The ordinance declared that the federal government had become "a weapon with which to strike down the interests and prosperity of the people of Texas and her Sister slaveholding States."
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            On February 23, 1861, Texas voters ratified secession by a margin of 44,317 to 13,020—approximately 76 percent in favor. East Texas counties delivered some of the highest pro-secession majorities. Harrison County, home to Marshall and the state's wealthiest slaveholding county, voted overwhelmingly for secession. Texas officially joined the Confederate States of America on March 2, 1861. When Houston refused to take an oath of allegiance to the Confederacy on March 16, the convention removed him from office and installed Lieutenant Governor Edward Clark—a Marshall resident—as governor.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Military Contributions and Key Units">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            East Texas provided a disproportionate number of Confederate soldiers relative to its population. Rusk County alone contributed more men to Confederate service than any other Texas county, while Cherokee County sent approximately 2,000 soldiers. The most celebrated East Texas contribution was to <strong>Hood's Texas Brigade</strong>, the only Texas unit to serve in the Eastern Theater with Robert E. Lee's Army of Northern Virginia. The brigade's First Texas Infantry included companies from Marion, Cass, Polk, Houston, Harrison, Tyler, Anderson, Cherokee, Sabine, San Augustine, Newton, and Nacogdoches counties.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            Hood's Texas Brigade fought in virtually every major battle in Virginia from the Peninsula Campaign through Appomattox, gaining a reputation as Lee's shock troops. At Gettysburg in July 1863, the Texas Brigade suffered devastating casualties in the assault on Little Round Top. At Chickamauga in September 1863, the brigade played a crucial role in the Confederate victory. Robert E. Lee famously declared of the Texans at the Battle of the Wilderness in 1864: "Texans always move them." The brigade suffered appalling casualties, losing 82 percent of 226 men engaged at Sharpsburg and surrendering at Appomattox with just 16 officers and 133 men remaining from units that once numbered thousands.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            Special mention must be made of the <strong>Davis Guards</strong>, Company F of the First Texas Heavy Artillery, who achieved immortality at the <strong>Battle of Sabine Pass</strong> on September 8, 1863. Under Lieutenant Richard W. Dowling, an Irish immigrant saloon keeper from Houston, the 46-man garrison at Fort Griffin repulsed a Union invasion force of approximately 5,000 troops and four gunboats. The Confederate gunners fired 107 rounds in 35 minutes of devastating accuracy, disabling two gunboats, capturing approximately 200 prisoners, and forcing the entire Union flotilla to retreat. The Davis Guards suffered zero casualties in what became known as one of the most lopsided Confederate victories of the war.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="War Industry and Supply Operations" background="subtle">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            East Texas's industrial contributions proved as vital as its military manpower. The region's iron ore deposits, timber resources, and relative safety from Union invasion made it the Confederacy's primary manufacturing zone west of the Mississippi River. The most important industrial site was the <strong>Texas Iron Works</strong> in Marion County near Mims Chapel. This facility stood as "the only factory in the Confederate Southwest capable of mass-producing a respectable amount of good-quality pig iron." By 1863, most output shipped to foundries in Houston, Austin, Shreveport, Marshall, Tyler, San Antonio, and other cities where it was processed into weapons, tools, and equipment.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            <strong>Salt production</strong> became critically important as the war progressed. Salt was the only effective means of preserving meat before refrigeration, making it essential for feeding armies and civilian populations. The most productive was <strong>Jordan's Saline</strong> (later Grand Saline) in Van Zandt County, owned by Samuel Q. Richardson. During the war, the Confederate government operated this facility, producing over 10,000 pounds of salt daily—more than ten times the output of any other Texas salt operation. Workers pumped brine from wells using mule-powered equipment, channeled it through hollowed gum logs to huge iron evaporating kettles, then sacked the finished salt for distribution. The Steen Saline in Smith County employed 3,000 men at its peak, operating twenty furnaces and producing 12,000 sacks daily.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            <strong>Marshall</strong> in Harrison County emerged as a major Confederate manufacturing and administrative center. The city hosted a powder mill that manufactured gunpowder, small arms, and cannon while also refurbishing captured weaponry. Marshall also contained a hat factory and other enterprises producing military supplies. The city became so important that it served as the temporary capital of Missouri's Confederate government-in-exile, earning Marshall the nickname "City of Seven Flags." After Vicksburg fell in July 1863, Marshall became the seat of Confederate civil authority and headquarters of the Trans-Mississippi Postal Department.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Life on the Homefront">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            The Civil War fundamentally altered daily life for East Texas civilians. With tens of thousands of men serving in military units, women assumed new responsibilities managing farms, plantations, and businesses. Many Texas women ran large plantations and family farms, worked in manufacturing plants, made uniforms, crafted clothing from homespun cotton, and served as nurses, spies, and even (in disguise) soldiers.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            Food shortages and inflation plagued East Texas communities throughout the war. The Union naval blockade of Texas ports prevented importation of coffee, tea, sugar, and other goods. Housewives developed substitutes: dried okra seeds or parched sweet potatoes replaced coffee, while yaupon holly leaves brewed a caffeinated "Texas Tea." Salt shortages became critical by 1863-1864. Although East Texas salt works produced substantial quantities, prices soared from 65 cents per sack at the war's beginning to $20—more than a Confederate private's monthly pay of $11-13.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            The influx of refugees from Louisiana, Arkansas, and Missouri strained East Texas resources. As Union forces captured Vicksburg, occupied New Orleans, and advanced through Arkansas, thousands of white Southerners fled westward to Texas with their enslaved workers. Contemporary observers described roads "alive with negroes" being "refugeed" to Texas. Estimates of enslaved people forcibly moved to Texas during the war range from 50,000 to 150,000, with most coming from Louisiana and Mississippi after the fall of Vicksburg in July 1863. These refugees crowded into East Texas towns and countryside, creating housing shortages and straining food supplies.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Enslaved Labor and Wartime Conditions" background="subtle">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            Slavery remained the foundation of East Texas's economy and society throughout the Civil War. By 1860, approximately 169,000 enslaved African Americans lived in Texas—30 percent of the state's population—with heavy concentrations in the cotton-producing river valleys of East Texas. Counties such as Harrison (Marshall's home county) held the highest enslaved populations in the state. The institution of slavery in Texas exhibited all the brutality characteristic of the Deep South, with enslaved people subjected to violence, family separation, and dehumanizing labor systems.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            The Civil War did not substantially alter slavery's operation in East Texas. Unlike other Confederate regions where Union armies liberated enslaved people as they advanced, Texas's isolation meant slavery continued largely uninterrupted through war's end. The Emancipation Proclamation, issued by President Abraham Lincoln on September 22, 1862, and effective January 1, 1863, had almost no effect in Texas, which remained under Confederate control with minimal Union military presence to enforce emancipation.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            Indeed, the number of enslaved people in Texas increased during the war as masters from Louisiana, Arkansas, and Mississippi "refugeed" their human property westward to prevent their liberation by advancing Union forces. These refugeed enslaved workers provided labor for wartime industries. Cherokee County iron works employed approximately 100 enslaved Louisiana refugees. Enslaved Texans were aware of the war and rumors of emancipation despite masters' efforts to conceal such information. Nevertheless, the vast majority of Texas's enslaved population remained in bondage until summer 1865, making Texas "the last stronghold of de facto slavery."
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Regional Conflicts and Military Events">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            The <strong>Battle of Galveston</strong> on January 1, 1863, represented the Confederacy's most significant victory in Texas. Major General John Bankhead Magruder's plan called for a two-pronged assault: infantry and cavalry with twenty cannons would cross the railroad bridge onto Galveston Island, while two river steamers—the <em>Bayou City</em> and <em>Neptune</em>—protected with cotton bales ("cottonclads") would attack the Union squadron from the water. The attack succeeded spectacularly. Confederate forces captured six Union ships, sank one, and took 300-400 prisoners while suffering 26 killed and 117 wounded. Galveston remained in Confederate hands until June 1865, serving as the only major Confederate port open at war's end.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            The <strong>Red River Campaign</strong> of spring 1864 posed the most serious Union threat to East Texas during the war. Union Major General Nathaniel P. Banks led approximately 30,000 troops up the Red River from Louisiana, supported by Admiral David Dixon Porter's gunboat fleet, intending to capture Shreveport and invade East Texas. At the Battle of Mansfield, Louisiana, on April 8, 1864, Confederate General Richard Taylor's troops decisively defeated Banks's army. Over 2,000 Union prisoners captured at Mansfield and Pleasant Hill were marched to Camp Ford prisoner-of-war camp near Tyler.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            <strong>Camp Ford</strong>, established in spring 1862 as a training camp for Confederate recruits and named for Colonel John Salmon Ford, became the largest Confederate POW camp west of the Mississippi River. At its peak in July 1864, Camp Ford held approximately 5,000 prisoners from every Union state except Delaware and Vermont. Conditions were relatively good compared to notorious camps such as Andersonville; prisoners built shelters, organized recreational activities, and received adequate rations most of the time. Nevertheless, over 350 men died from disease, exposure, and starvation during the camp's operation. The last 1,761 prisoners were exchanged on May 22, 1865, in one of the final official acts of the Confederate States.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="End of War and Local Impact" background="subtle">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            The Confederacy's collapse came slowly to East Texas. Although General Robert E. Lee surrendered the Army of Northern Virginia at Appomattox on April 9, 1865, Confederate forces west of the Mississippi continued operating for weeks. The last Confederate army, commanded by General E. Kirby Smith in the Trans-Mississippi Department, did not surrender until May 26, 1865.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            For enslaved African Americans in Texas, emancipation came on <strong>June 19, 1865</strong>—a date commemorated ever since as <strong>Juneteenth</strong>. On that day, Union Major General Gordon Granger arrived in Galveston with more than 2,000 federal troops and issued General Orders No. 3: "The people of Texas are informed that, in accordance with a proclamation from the Executive of the United States, all slaves are free. This involves an absolute equality of personal rights and rights of property between former masters and slaves." News of freedom spread gradually as individual plantation owners informed enslaved people over subsequent months. Approximately 250,000 enslaved African Americans in Texas received notification of their emancipation.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            Reconstruction brought federal military occupation and the establishment of the <strong>Freedmen's Bureau</strong> in Texas. Operating from September 1865 to July 1870, the Bureau attempted to provide relief to refugees, supervise labor contracts between planters and freedpeople, administer justice, and establish schools. Violence against freed people reached epidemic proportions. From 1865 to 1868, white Texans committed over 1,500 acts of violence against African Americans, murdering over 370. The Bureau's most lasting achievement was establishing schools. Wiley College, founded by the Methodist Episcopal Church in Marshall in 1873, and Bishop College, founded in 1881, became important institutions for African American higher education.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Conclusion">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            The Civil War fundamentally reshaped East Texas. From overwhelming support for secession in 1861 to reluctant acceptance of Confederate defeat in 1865, the region committed its resources and manpower to a cause that ultimately failed. East Texas contributed disproportionately to Confederate military forces, with units such as Hood's Texas Brigade and the Davis Guards at Sabine Pass achieving lasting fame. The region served as the Trans-Mississippi Confederacy's industrial backbone, producing iron, salt, gunpowder, weapons, and equipment essential to sustaining Confederate operations west of the Mississippi. Yet the institution of slavery—the reason Texas seceded—persisted in East Texas longer than anywhere else in the former Confederacy, denying freedom to a quarter-million African Americans until federal troops arrived in summer 1865. Juneteenth, born in Galveston on June 19, 1865, remains a powerful symbol of freedom delayed but finally achieved—and of the ongoing struggle for equality that began on that day.
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
