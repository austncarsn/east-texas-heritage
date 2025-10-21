import { Header } from './Header';
import { ContentSection } from './ContentSection';
import { SourcesList } from './SourcesList';
import { Footer } from './Footer';
import { ArrowLeft } from 'lucide-react';

interface IndigenousPeoplesPageProps {
  onBack?: () => void;
}

export function IndigenousPeoplesPage({ onBack }: IndigenousPeoplesPageProps) {
  const sources = [
    { number: 1, citation: 'TxDOT. "African American Heritage Toolkit." 2021.', url: 'https://ftp.txdot.gov/pub/txdot-info/env/toolkit/415-02-rpt.pdf' },
    { number: 2, citation: 'Texas Beyond History. "Two Worlds: Caddo and Spanish Colonial."', url: 'https://www.texasbeyondhistory.net/adaes/worlds.html' },
    { number: 3, citation: 'National Park Service. "Caddo - Early History."', url: 'https://www.nps.gov/elte/learn/historyculture/caddo-early-history.htm' },
    { number: 4, citation: 'Texas State Historical Association. "Caddo Indians." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/caddo-indians' },
    { number: 5, citation: 'Texas State Historical Association. "Caddo Mounds State Historic Site." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/caddo-mounds-state-historic-site' },
    { number: 6, citation: 'University of Arkansas. "The Caddo Indians."', url: 'https://archeology.uark.edu/indiansofarkansas/index.html?pageName=The+Caddo+Indians' },
    { number: 7, citation: 'Texas State Historical Association. "Tinhioüen." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/tinhiouen' },
    { number: 8, citation: 'Texas Beyond History. "Caddo Fundamentals: Homeland."', url: 'https://www.texasbeyondhistory.net/tejas/fundamentals/homeland.html' },
    { number: 9, citation: 'The Story of Texas. "American Indians."', url: 'https://www.thestoryoftexas.com/discover/campfire-stories/american-indians' },
    { number: 10, citation: 'Archaeology Magazine. "Caddo Mounds, Texas." May/June 2014.', url: 'https://archaeology.org/issues/may-june-2014/off-the-grid/off-the-grid-texas-caddo-mounds/' },
    { number: 11, citation: 'Wikipedia. "Caddoan Mississippian culture."', url: 'https://en.wikipedia.org/wiki/Caddoan_Mississippian_culture' },
    { number: 12, citation: 'Sam Noble Museum. "The Art of Prehistoric Caddo Potters."', url: 'https://samnoblemuseum.ou.edu/collections-and-research/archaeology/the-art-of-prehistoric-caddo-potters/caddo-pottery-introduction/' },
    { number: 13, citation: '64 Parishes. "Caddo Nation."', url: 'https://64parishes.org/entry/caddo-nation' },
    { number: 14, citation: 'Texas Parks and Wildlife. "Ecological Regions of Texas." 2010.', url: 'https://tpwd.texas.gov/publications/pwdpubs/media/pwd_br_w7000_0255_10_02.pdf' },
    { number: 15, citation: 'National Park Service. "Caddo Trade."', url: 'https://www.nps.gov/elte/learn/historyculture/caddo-trade.htm' },
    { number: 16, citation: 'Texas Historical Commission. "Caddo Mounds Visitors Guide."', url: 'https://www.thc.texas.gov/public/upload/publications/caddomounds-visitorsguide.pdf' },
    { number: 17, citation: '64 Parishes. "Caddo Culture."', url: 'https://64parishes.org/entry/caddo-culture' },
    { number: 18, citation: 'Texas Beyond History. "Caddo Fundamentals: Life."', url: 'https://www.texasbeyondhistory.net/tejas/fundamentals/life.html' },
    { number: 19, citation: 'National Park Service. "Caddo Social Structure."', url: 'https://www.nps.gov/elte/learn/historyculture/caddo-social-structure.htm' },
    { number: 20, citation: 'Texas Beyond History. "Caddo Fundamentals: Mississippian."', url: 'https://www.texasbeyondhistory.net/tejas/fundamentals/miss.html' },
    { number: 21, citation: 'Measure Journal. "Caddo Social Organization." SHSU.', url: 'https://measure-ojs-shsu.tdl.org/measure/article/download/138/112' },
    { number: 22, citation: 'Natchitoches Tribe. "History."', url: 'https://ntl-tribe.org/history/' },
    { number: 23, citation: 'City of Austin. "Angelina and the Caddo Influence on Early Spanish Missionaries."', url: 'https://austintexas.gov/sites/default/files/files/ANGELINA AND THE CADDO INFLUENCE ON EARLY SPANISH MISSIONARIES.pdf' },
    { number: 24, citation: 'Texas Beyond History. "Tejas Ancestors: Early."', url: 'https://www.texasbeyondhistory.net/tejas/ancestors/early.html' },
    { number: 25, citation: 'University of Texas. "The Looting of Prehistoric Caddo Indian Cemeteries." 2022.', url: 'https://sites.utexas.edu/tjclcr/files/2022/11/Perttula-Nelson_The-Looting-of-Prehistoric-Caddo-Indian-Cemeteries-in-Northeast-Texas.pdf' },
    { number: 26, citation: 'YouTube. "Caddo Mounds Documentary."', url: 'https://www.youtube.com/watch?v=uPNOZYNvZec' },
    { number: 27, citation: 'Texas Historical Commission. "Caddo Mounds: Center of Culture - Lesson Plan."', url: 'https://www.thc.texas.gov/public/upload/publications/Education/5th-6th-7th-8th-High-Lesson-Plan-Caddo-Mounds-Center-Culture.pdf' },
    { number: 28, citation: 'Wikipedia. "Mississippian culture pottery."', url: 'https://en.wikipedia.org/wiki/Mississippian_culture_pottery' },
    { number: 29, citation: 'Stephen F. Austin State University. "Index of Texas Archaeology: Open Access Gray Literature." Vol. 2016, Article 57.', url: 'https://scholarworks.sfasu.edu/ita/vol2016/iss1/57/' },
    { number: 30, citation: 'Caddo Pottery. "Culture."', url: 'https://www.caddopottery.com/culture' },
    { number: 31, citation: 'Texas Beyond History. "Pineywoods: Ceramics."', url: 'https://www.texasbeyondhistory.net/pine/ceramics.html' },
    { number: 32, citation: 'Texas Beyond History. "Pineywoods: Investigations."', url: 'https://www.texasbeyondhistory.net/pine/investigations.html' },
    { number: 33, citation: 'Texas Beyond History. "Tejas Fundamentals: Graves."', url: 'https://www.texasbeyondhistory.net/tejas/fundamentals/graves.html' },
    { number: 34, citation: 'Wikipedia. "Caddo Mounds State Historic Site."', url: 'https://en.wikipedia.org/wiki/Caddo_Mounds_State_Historic_Site' },
    { number: 35, citation: 'Authentic Texas. "Preserving a Culture."', url: 'https://authentictexas.com/preserving-a-culture/' },
    { number: 36, citation: 'Texas Beyond History. "Tejas Clay: Tradition."', url: 'https://www.texasbeyondhistory.net/tejas/clay/tradition.html' },
    { number: 37, citation: 'University of Arkansas Archeology. "Caddo Mounds Research."', url: 'https://archeology.uark.edu/learn-discover/current-research/2caddomounds/' },
    { number: 38, citation: 'Texas State University Digital Library. "Caddo Archaeology."', url: 'https://digital.library.txst.edu/bitstreams/5ed02c91-efe4-4e9b-b79e-38993bcf89d4/download' },
    { number: 39, citation: 'Texas Beyond History. "Tejas Ancestors: Woodland."', url: 'https://www.texasbeyondhistory.net/tejas/ancestors/woodland.html' },
    { number: 40, citation: 'Stephen F. Austin University. "Index of Texas Archaeology." Article 1780.', url: 'https://scholarworks.sfasu.edu/cgi/viewcontent.cgi?article=1780&context=ita' },
    { number: 41, citation: 'University of Arkansas. "Disease and Depopulation in the Caddo Homeland." 2016.', url: 'https://scholarworks.uark.edu/etd/3173/' },
    { number: 42, citation: 'UNT Texas History. "Age of Contact."', url: 'https://education.texashistory.unt.edu/units/7/age-of-contact/' },
    { number: 43, citation: 'Texas State Historical Association. "La Salle Expedition." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/la-salle-expedition' },
    { number: 44, citation: 'Texas State Historical Association. "La Salle\'s Texas Settlement." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/la-salles-texas-settlement' },
    { number: 45, citation: 'Stephen F. Austin University. "East Texas Historical Journal." Spanish Missions article.', url: 'https://scholarworks.sfasu.edu/cgi/viewcontent.cgi?article=2210&context=ethj' },
    { number: 46, citation: 'Texas State Historical Association. "San Francisco de los Tejas Mission." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/san-francisco-de-los-tejas-mission' },
    { number: 47, citation: 'National Park Service. "Caddo Timeline: European Influence and Interaction."', url: 'https://www.nps.gov/elte/learn/historyculture/caddo-timeline-european-influence-and-interaction.htm' },
    { number: 48, citation: 'Wikipedia. "Atakapa."', url: 'https://en.wikipedia.org/wiki/Atakapa' },
    { number: 49, citation: 'Texas State Historical Association. "Atakapa Indians." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/atakapa-indians' },
    { number: 50, citation: 'Texas State Historical Association. "Indian Relations." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/indian-relations' },
    { number: 51, citation: 'Texas State Historical Association. "Tonkawa Indians." Handbook of Texas Online.', url: 'https://www.tshaonline.org/handbook/entries/tonkawa-indians' },
    { number: 52, citation: 'TxDOT. "Texas Indigenous Tribes Toolkit." 2009.', url: 'https://ftp.txdot.gov/pub/txdot-info/env/toolkit/415-09-rpt.pdf' },
    { number: 53, citation: 'FamilySearch. "Texas Indigenous Tribes."', url: 'https://www.familysearch.org/en/wiki/Texas_Indigenous_Tribes' },
    { number: 54, citation: 'Oklahoma Historical Society. "Tonkawa."', url: 'https://www.okhistory.org/publications/enc/entry?entry=TO003' },
    { number: 55, citation: 'Wikipedia. "Wichita people."', url: 'https://en.wikipedia.org/wiki/Wichita_people' },
    { number: 56, citation: 'Oklahoma Historical Society. "Wichita."', url: 'https://www.okhistory.org/publications/enc/entry?entry=WI001' },
    { number: 57, citation: 'Nebraska Studies. "First Contact & Expanding Trade (1500-1799)."', url: 'https://www.nebraskastudies.org/1500-1799/first-contact-expanding-trade/' },
    { number: 58, citation: 'University of Cincinnati. "Native Americans Handout - Adena and Hopewell." Fall 2022.', url: 'https://www.uc.edu/content/dam/refresh/cont-ed-62/olli/fall22/class-handouts/native americans 3.pdf' },
    { number: 59, citation: 'Wikipedia. "Adena culture."', url: 'https://en.wikipedia.org/wiki/Adena_culture' },
    { number: 60, citation: 'Leonidie Martin. "Adena and Hopewell: Advanced Indigenous Cultures of North America." November 27, 2020.', url: 'https://leonidemartin.com/2020/11/27/adena-and-hopewell-advanced-indigenous-cultures-of-north-america/' },
    { number: 61, citation: 'Wikipedia. "Hopewell tradition."', url: 'https://en.wikipedia.org/wiki/Hopewell_tradition' },
    { number: 62, citation: 'Encyclopedia of Arkansas. "Prehistoric Caddo."', url: 'https://encyclopediaofarkansas.net/entries/prehistoric-caddo-548/' },
    { number: 63, citation: 'Red River Historian. "The Original Homeland of the Caddos."', url: 'https://www.redriverhistorian.com/post/the-original-homeland-of-the-caddos' },
    { number: 64, citation: 'Texas Historical Commission. "Caddo Mounds."', url: 'https://thc.texas.gov/historic-sites/caddo-mounds' },
    { number: 65, citation: 'Texas Historical Commission. "Caddo Mounds Visitors Guide." 2025.', url: 'https://thc.texas.gov/sites/default/files/2025-06/Caddo_Mounds_Visitors_Guide.pdf' },
    { number: 66, citation: 'Texas Historical Commission. "Plan Your Visit - Caddo Mounds."', url: 'https://thc.texas.gov/state-historic-sites/caddo-mounds/plan-your-visit-caddo-mounds' },
    { number: 67, citation: 'Texas Beyond History. "Tejas Ancestors: Historic."', url: 'https://www.texasbeyondhistory.net/tejas/ancestors/historic.html' },
    { number: 68, citation: 'Texas Beyond History. "Tejas Ancestors: Tracing."', url: 'https://www.texasbeyondhistory.net/tejas/ancestors/tracing.html' },
    { number: 69, citation: 'Texas Beyond History. "Tejas Ancestors: Credits."', url: 'http://www.texasbeyondhistory.net/tejas/ancestors/credits.html' },
    { number: 70, citation: 'Texas Beyond History Kids. "Caddo: Searching."', url: 'http://www.texasbeyondhistory.net/kids/caddo/searching.html' },
    { number: 71, citation: 'Caddo Nation. "History."', url: 'https://mycaddonation.com/history-1' },
    { number: 72, citation: 'Wikipedia. "Caddo."', url: 'https://en.wikipedia.org/wiki/Caddo' },
    { number: 73, citation: 'Caddo Pottery. "About."', url: 'https://www.caddopottery.com/about' },
  ];

  return (
    <div style={{ backgroundColor: 'var(--background)' }}>
      <Header />
      
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        paddingTop: 'var(--section-spacing)',
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
                Cultural Heritage
              </span>
            </div>
            
            <h1 className="mb-6" style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '56px',
              fontWeight: 'var(--font-weight-bold)',
              lineHeight: '1.1',
              color: 'var(--foreground)',
            }}>
              Indigenous Peoples of East Texas Before 1700
            </h1>
            
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '20px',
              lineHeight: '1.6',
              color: 'var(--foreground-muted)',
            }}>
              The Caddo Confederacy and Related Cultures
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
              The Indigenous peoples of East Texas developed one of the most sophisticated and enduring cultures in North America before European contact. At the heart of this cultural landscape stood the Caddo Confederacy, a network of allied communities whose ancestors shaped the Piney Woods region for over three millennia.
            </p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--font-size-base)',
              lineHeight: 'var(--line-height-normal)',
              color: 'var(--foreground-muted)',
            }}>
              The Caddo peoples inhabited a vast territory encompassing present-day northeastern Texas, northwestern Louisiana, southwestern Arkansas, and southeastern Oklahoma from approximately 800 CE to the historic period, with ancestral roots extending back 3,000 to 4,000 years. Unlike many Indigenous groups whose territories shifted dramatically over time, the Caddo demonstrated remarkable territorial stability, living and sustaining themselves in the same forested and well-watered landscape for over a millennium. By the time Spanish and French explorers arrived in the sixteenth and seventeenth centuries, the Caddo had developed a complex sociopolitical system organized into three primary confederacies: the Hasinai in East Texas, the Kadohadacho along the Great Bend of the Red River, and the Natchitoches in northwestern Louisiana.
            </p>
          </div>
        </div>
      </section>
      
      {/* Historical Sections */}
      <ContentSection title="Geography and Cultural Landscape" background="subtle">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            The Caddo homeland encompassed approximately 51,830 square miles, stretching roughly 300 miles north-south and 220 miles east-west across the transitional zone where the Eastern Woodlands met the Southern Plains. This vast territory was defined by major river systems that served as the arteries of Caddo life: the Red River and its tributaries, the Ouachita River, and in East Texas, the Neches, Angelina, Sabine, and Sulphur rivers.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            The region's biotic communities supported Caddo lifeways through remarkable diversity. The Piney Woods of East Texas featured dense forests of shortleaf and loblolly pine mixed with hardwood bottomlands of oak, hickory, sweetgum, and magnolia. These forests provided construction materials for homes and temples, fuel for fires, and habitat for game animals. River valleys offered rich alluvial soils ideal for agriculture. The geographic position of the Caddo homeland at the intersection of multiple ecological zones proved crucial to their success as traders and cultural intermediaries, positioning them between the Mississippian chiefdoms of the Southeast, the agricultural villages of the Plains, and the hunter-gatherers of the Gulf Coast.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Caddo Confederacy Structure">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            The political organization of the Caddo peoples reflected a sophisticated balance between local autonomy and confederated alliance. The three primary divisions—Hasinai, Kadohadacho, and Natchitoches—were not unified "tribes" in the European sense but rather kin-based affiliated groups of communities that shared language, customs, and ceremonial practices. Each confederacy comprised multiple independent communities, with at least 25 distinct groups identified by early European observers. The Hasinai confederacy, occupying the Neches and Angelina river valleys of East Texas, included nine to twelve communities and was sometimes called "Tejas" (meaning "friends" or "allies") by the Spanish, a term that eventually gave Texas its name.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            Political authority within Caddo society rested in a hierarchy of inherited positions. At the community level, each village had a caddi (civil chief) whose position passed from father to son. Supporting the caddi were the canahas, a council of village elders, and the tammas, subordinate officials who enforced decisions. Above the community level, the Hasinai groups recognized a paramount religious leader called the xinesi (pronounced chenesi, meaning "Mr. Moon"), who held immense influence as the mediator between the Caddo people and their principal deity, the Caddi Ayo. The xinesi was responsible for leading major ceremonies and lived in a special precinct that included the fire temple, a large grass-thatched structure housing a perpetual fire fed by four logs oriented to the cardinal directions.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Economy and Trade Networks" background="subtle">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            The Caddo economy rested on a foundation of intensive agriculture supplemented by hunting, fishing, and gathering. Caddo women cultivated extensive fields of maize (corn), beans, squash, pumpkins, sunflowers, and other crops in the rich bottomland soils. Spanish priest Fray Casañas, who lived among the Hasinai in 1691, documented five or six varieties of beans and noted the Caddo's skill in preparing various dishes including tamales. Maize agriculture became established in the region by approximately 700-800 CE, stimulating population growth and the development of more complex social organization.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            The Caddo developed extensive trade networks that positioned them as crucial intermediaries in continental exchange systems. Their strategic location enabled them to trade agricultural surpluses, processed salt, elaborately decorated pottery vessels, cane mats and baskets, bows made from bois d'arc (Osage orange) wood, bear oil, animal skins, and other goods across vast distances. Bois d'arc bows, prized for their strength and flexibility, were particularly valuable trade items that reached communities throughout the Southeast and Southern Plains. Archaeological evidence from sites like the George C. Davis Site demonstrates the reach of Caddo trade networks, with excavations recovering marine shells from the Gulf Coast, copper from the Great Lakes region, and high-quality flint from the Ouachita Mountains.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Society, Beliefs, and Governance">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            Caddo society exhibited clear social stratification based on hereditary rank and kinship affiliation. At the apex stood religious and political leaders whose inherited positions conferred authority and privilege. Below the leadership class were common people who lived in farmsteads and small hamlets, cultivating crops, hunting, and producing goods. While most leadership positions were held by men, some high-status prehistoric tombs contain principal individuals identified as women, and historic accounts mention occasional female leaders.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            The fundamental organizing principle of Caddo society was matrilineal descent—individuals traced their heritage through the maternal line and children belonged to their mother's clan. Clans were ranked kinship groups that claimed descent from common ancestors, with names derived from animals (bison, bear, raccoon) or celestial phenomena (sun, thunder). Caddo cosmology and religious beliefs permeated every aspect of daily life. The perpetual fire maintained in the temple symbolized the sacred center of the Caddo world and the connection between earth and sky. Burial practices reflected social hierarchy and spiritual beliefs, with elites receiving elaborate mortuary treatment in burial mounds accompanied by exotic grave goods including copper ornaments, marine shell beads, high-quality stone tools, and elaborately decorated pottery vessels.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Archaeology and Material Culture" background="subtle">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            The George C. Davis Site (also known as Caddo Mounds State Historic Site) stands as the premier archaeological window into early Caddo culture. Located near present-day Alto, Texas, this 110-acre site represents the southwesternmost ceremonial center of the Mound Builder culture tradition. The Hasinai groups who founded the settlement around 850-900 CE selected the location for its ideal combination of good soil, abundant food resources, and permanent water sources flowing into the Neches River.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            The site features three major earthen mounds arranged around an open plaza. Mound A, the largest, served as a platform for temples and elite residences, measuring approximately 180 feet long, 145 feet wide, and originally standing about 10 feet high. Mound B hosted ceremonial activities and public gatherings. Mound C functioned as a burial mound reserved for community leaders and high-status individuals. Surrounding the ceremonial precinct, the village area extended over more than 110 acres and contained numerous residential compounds with beehive-shaped houses constructed with pole and thatch, approximately 25 feet in diameter.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            Caddo pottery represents one of the most sophisticated ceramic traditions in prehistoric North America. Early Caddo potters developed distinctive vessel forms including bottles with long, slender necks and carinated bowls with sharply angled profiles. Surfaces were meticulously smoothed and burnished to a high gloss finish, with some vessels exhibiting such thinness and symmetry that Spanish explorers compared them favorably to European ceramics. Decorative techniques included engraving, incising, and trailing, with designs featuring geometric patterns, scrolls, and symbolic motifs related to Caddo cosmology.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Early European Contact (Pre-1700)">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            The first documented encounter between Europeans and Caddo peoples occurred in 1542 when the Spanish entrada led by Luis de Moscoso Alvarado (following Hernando de Soto's death) traveled through Caddo territory. Moscoso described Caddo villages as "scattered settlements of dense populations and abundant food reserves of maize," an observation that suggests the population had not yet experienced catastrophic decline from disease. The entrada proved devastating despite its brief duration, with Spanish forces consuming Caddo food stores and introducing European diseases to which Indigenous populations had no immunity.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            In 1690, Spanish authorities established the first mission in East Texas, San Francisco de los Tejas, among the Hasinai near the Neches River. Initial Hasinai hospitality quickly deteriorated as severe epidemics, which the Indigenous people correctly attributed to Spanish presence, killed numerous community members. Combined with Caddo anger over missionary interference in their religious practices and social customs, the tensions forced Spanish abandonment of the mission in 1693, only three years after its founding.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            The impact of European diseases cannot be overstated. While precise population figures remain debated, scholars estimate the Caddo population declined by approximately 95 percent between 1520 and 1700. The Caddo population at the time of early European contact has been estimated at approximately 8,000 individuals across all confederacies. By 1803, fewer than 2,000 Caddo remained, reflecting the catastrophic demographic collapse that accompanied sustained European contact.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Related Indigenous Nations" background="subtle">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            While the Caddo dominated the Piney Woods region of East Texas, several other Indigenous groups influenced or occupied adjacent territories. The <strong>Atakapa</strong> (meaning "eaters of men" in Choctaw) inhabited the coastal and bayou areas of southwestern Louisiana and southeastern Texas. Speaking a language isolate unrelated to surrounding groups, the Atakapa lived in loose bands that moved seasonally within set territories, hunting, gathering, and fishing. The alligator held particular importance in Atakapa culture. European diseases and subsequent absorption into neighboring groups, particularly the Caddo, led to their disappearance as a distinct people by the late eighteenth century.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            The <strong>Tonkawa</strong>, whose name derives from a Waco term meaning "they all stay together," occupied Central Texas and may have migrated from the Southern Plains as late as the seventeenth century. Unlike the sedentary agricultural Caddo, the Tonkawa maintained a nomadic lifestyle focused on hunting and gathering without significant reliance on agriculture until the late seventeenth century. Their language was unique and unrelated to surrounding groups, suggesting distinct origins. Tonkawa society was organized around matrilineal clans forming two moieties.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            The <strong>Wichita people</strong>, linguistically related to the Caddo through the Caddoan language family, occupied territories ranging from present-day Kansas south into Texas. Spanish explorer Francisco Vásquez de Coronado encountered Wichita communities in Kansas in 1541, describing them as "large people of very good build" living in distinctive conical grass lodges and cultivating abundant crops. The Wichita practiced a mixed economy based on horticulture (maize, beans, squash), seasonal bison hunting, and extensive trade. While primarily occupying lands north of the main Caddo territory, the Wichita maintained trade relationships and occasional conflicts with Caddo groups throughout the pre-1700 period.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Legacy and Preservation">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            The Caddo legacy endures through both archaeological preservation and the continuity of the modern Caddo Nation. The George C. Davis Site gained protection in 1974 when the Texas Parks and Wildlife Department acquired seventy acres and established Caddo Mounds State Historic Site. Operational control transferred to the Texas Historical Commission in 2008, which has developed interpretive exhibits, a reconstructed Caddo dwelling built using traditional techniques, and guided trails through the mounds and village area.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
            marginBottom: '16px',
          }}>
            The modern Caddo Nation of Oklahoma, federally recognized and headquartered in Binger, Oklahoma, represents the consolidated descendants of the Kadohadacho, Natchitoches, and Hasinai confederacies. Following forced removals in the nineteenth century, including the devastating 1835 land cession east of the Sabine River and the final 1859 removal to Indian Territory, the Caddo people maintained their cultural identity despite tremendous adversity. Today, approximately 6,000 individuals are enrolled in the Caddo Nation, with 3,044 living in Oklahoma.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            Cultural revitalization efforts have gained momentum in recent decades. The Caddo Nation sponsors a summer culture camp for children to learn traditional practices, songs, and dances. Perhaps most significantly, contemporary Caddo artists like Jeri Redcorn and Chase Kahwinhut Earles have led the revival of traditional pottery-making, researching ancient techniques and designs to reconnect modern Caddo with ancestral artistic traditions. Their work ensures that knowledge of clay preparation, vessel construction, and symbolic decoration continues to be passed to future generations, honoring the sophisticated ceramic tradition that distinguished Caddo culture for over a millennium.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Conclusion" background="subtle">
        <div className="max-w-[900px]">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--foreground-muted)',
          }}>
            The Caddo peoples of East Texas created a sophisticated civilization that thrived for over a millennium before European contact fundamentally disrupted their world. Through intensive agriculture, extensive trade networks, hierarchical social organization, and impressive ceremonial architecture, the Caddo developed one of the most complex societies in North America north of Mexico. The confederated structure of Caddo society—balancing local autonomy with broader political and ceremonial alliances—enabled the Caddo to exert influence far beyond their demographic numbers. The catastrophic population decline that accompanied European disease introduction—reducing Caddo numbers by perhaps 95 percent between 1520 and 1700—stands as one of the great demographic tragedies in North American history. Yet despite this devastation, the Caddo people persisted, maintaining their identity through subsequent centuries of forced removals, cultural suppression, and ongoing challenges. Today's Caddo Nation continues the legacy of those ancient communities that built the mounds, carved the pottery, and cultivated the fields of the Piney Woods.
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
