import { Icon } from './Icon';
import { useState, useRef, useEffect } from 'react';

interface Community {
  name: string;
  county: string;
  x: number;
  y: number;
  onClick: () => void;
  population?: string;
  established?: string;
}

interface InteractiveMapProps {
  communities: Community[];
}

// Real geographic coordinates for East Texas towns
const TOWN_COORDINATES = {
  'Paris': { lat: 33.6609, lon: -95.5555 },
  'Mount Pleasant': { lat: 33.1568, lon: -94.9682 },
  'Gilmer': { lat: 32.7282, lon: -94.9413 },
  'Jefferson': { lat: 32.7571, lon: -94.3451 },
  'Daingerfield': { lat: 33.0293, lon: -94.7218 },
  'Talco': { lat: 33.3584, lon: -95.0971 },
  'Henderson': { lat: 32.1532, lon: -94.7994 },
};

// SVG viewport dimensions - balanced for clarity
const SVG_WIDTH = 1000;
const SVG_HEIGHT = 700;
const MAP_PADDING = 80;

// Calculate bounds for the region with optimal coverage
const lats = Object.values(TOWN_COORDINATES).map(c => c.lat);
const lons = Object.values(TOWN_COORDINATES).map(c => c.lon);
const MIN_LAT = Math.min(...lats) - 0.3;
const MAX_LAT = Math.max(...lats) + 0.3;
const MIN_LON = Math.min(...lons) - 0.3;
const MAX_LON = Math.max(...lons) + 0.3;

// Simplified projection for East Texas
function latLonToSVG(lat: number, lon: number): { x: number, y: number } {
  const x = MAP_PADDING + ((lon - MIN_LON) / (MAX_LON - MIN_LON)) * (SVG_WIDTH - 2 * MAP_PADDING);
  const y = SVG_HEIGHT - MAP_PADDING - ((lat - MIN_LAT) / (MAX_LAT - MIN_LAT)) * (SVG_HEIGHT - 2 * MAP_PADDING);
  
  return { x, y };
}

export function InteractiveMap({ communities }: InteractiveMapProps) {
  const [hoveredCommunity, setHoveredCommunity] = useState<string | null>(null);
  const [selectedCommunity, setSelectedCommunity] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const mapRef = useRef<HTMLDivElement | null>(null);
  const draggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const panStartRef = useRef({ x: 0, y: 0 });
  const pinchStartDistRef = useRef<number | null>(null);
  const initialZoomRef = useRef(1);
  const [isSmall, setIsSmall] = useState(false);

  const handleCommunityClick = (community: Community) => {
    setSelectedCommunity(community.name);
    community.onClick();
  };

  // Convert community positions to geographic coordinates
  const communityGeoPositions = communities.map(community => {
    const coords = TOWN_COORDINATES[community.name as keyof typeof TOWN_COORDINATES];
    if (!coords) return null;
    const svgPos = latLonToSVG(coords.lat, coords.lon);
    return {
      ...community,
      svgX: svgPos.x,
      svgY: svgPos.y,
    };
  }).filter(Boolean) as Array<Community & { svgX: number, svgY: number }>;

  // Accurate county boundary polygons based on real geography
  // These are approximations of actual county boundaries
  const countyBoundaries = [
    // Lamar County (NW corner - contains Paris at 33.6609, -95.5555)
    {
      name: 'Lamar',
      points: [
        [-95.857741002537125, 33.46172005902406],
        [-95.857126958496266, 33.495898060295005],
        [-95.856605837591999, 33.597543161876224],
        [-95.856894512511758, 33.625101474049153],
        [-95.855876513537069, 33.625101473795276],
        [-95.855085391161055, 33.766564333787443],
        [-95.854481393869889, 33.823729329823415],
        [-95.314431108416343, 33.881630413687681],
        [-95.31040873825458, 33.877366947771719],
        [-95.311038231017577, 33.750098493242341],
        [-95.310683230468612, 33.743230492547987],
        [-95.310676213989225, 33.663152480930194],
        [-95.310388209228179, 33.637096477128495],
        [-95.310538443338785, 33.531788099041101],
        [-95.309881467041706, 33.500104077364846],
        [-95.309288478219827, 33.495110085886608],
        [-95.308640716983845, 33.380660287039639],
      ].map(([lon, lat]) => latLonToSVG(lat, lon)),
      fill: '#DEB887',
      labelPos: latLonToSVG(33.67, -95.55),
    },
    // Red River County (NE corner - north of Mount Pleasant/Talco area)
    {
      name: 'Red River',
      points: [
        [-95.311038231017577, 33.750098493242341],
        [-95.31040873825458, 33.877366947771719],
        [-95.289305158184732, 33.873101427610564],
        [-95.265230164427848, 33.905564413312632],
        [-95.250174151422783, 33.938495393187189],
        [-95.230380136916779, 33.955766375140442],
        [-95.122041260402568, 33.904793331657736],
        [-95.085978254050005, 33.916944314131683],
        [-95.082390245181841, 33.921756314899994],
        [-95.058246336580197, 33.887546275041984],
        [-95.050575365896037, 33.877495260324068],
        [-95.037210418704646, 33.860248232008779],
        [-94.957679419163, 33.835002132306812],
        [-94.746269497313421, 33.526880175454671],
        [-94.746895522103387, 33.456484307846125],
        [-94.74663350934371, 33.441920335238841],
        [-94.746928412936597, 33.328936542379338],
        [-94.808786492474098, 33.363634475734962],
        [-95.308640716983845, 33.380660287039639],
        [-95.309288478219827, 33.495110085886608],
        [-95.309881467041706, 33.500104077364846],
        [-95.310538443338785, 33.531788099041101],
        [-95.310388209228179, 33.637096477128495],
        [-95.310676213989225, 33.663152480930194],
        [-95.310683230468612, 33.743230492547987],
        [-95.311038231017577, 33.750098493242341],
      ].map(([lon, lat]) => latLonToSVG(lat, lon)),
      fill: '#D2B48C',
      labelPos: latLonToSVG(33.67, -94.84),
    },
    // Titus County (W-Central - contains Mount Pleasant at 33.1568, -94.9682 and Talco at 33.3584, -95.0971)
    {
      name: 'Titus',
      points: [
        [-95.126133780564842, 33.034579964785237],
        [-95.125548814297701, 33.123694854444125],
        [-95.124942827756712, 33.160951808679378],
        [-95.124534853921901, 33.257149681547304],
        [-95.125454719028411, 33.389452348728689],
        [-95.070745685938348, 33.389466371991396],
        [-95.000749643677779, 33.391352396034229],
        [-94.939600600900675, 33.389258408385516],
        [-94.899851573287137, 33.389801410688371],
        [-94.861030541025329, 33.379239439760617],
        [-94.839248528401967, 33.38517742711646],
        [-94.824232514153891, 33.379363441165786],
        [-94.810448433939754, 33.272169673369007],
        [-94.810755432455764, 33.269389679520536],
        [-94.812618422717676, 33.210443744125357],
        [-94.814789426855086, 33.125276791636587],
        [-94.815209427388496, 33.122288793444007],
        [-94.81627942913903, 33.094072809221466],
        [-94.817712431827914, 33.037200840579636],
        [-94.819831434789492, 32.98288482278155],
        [-95.308960913848495, 32.962570917292226],
        [-95.30807590099937, 33.078204824581427],
        [-95.126133780564842, 33.034579964785237],
      ].map(([lon, lat]) => latLonToSVG(lat, lon)),
      fill: '#C9B896',
      labelPos: latLonToSVG(33.15, -95.10),
    },
    // Franklin County (Central - between Titus and Morris)
    {
      name: 'Franklin',
      points: [
        [-95.308960913848495, 32.962570917292226],
        [-95.30807590099937, 33.078204824581427],
        [-95.307719885356804, 33.300332428864955],
        [-95.308222839195992, 33.322154390122655],
        [-95.30859672426746, 33.377188293160991],
        [-95.308640716983845, 33.380660287039639],
        [-94.808786492474098, 33.363634475734962],
        [-94.746928412936597, 33.328936542379338],
        [-94.819831434789492, 32.98288482278155],
        [-95.308960913848495, 32.962570917292226],
      ].map(([lon, lat]) => latLonToSVG(lat, lon)),
      fill: '#D4C5A9',
      labelPos: latLonToSVG(33.15, -94.60),
    },
    // Morris County (E-Central - contains Daingerfield at 33.0293, -94.7218)
    {
      name: 'Morris',
      points: [
        [-94.817712431827914, 33.037200840579636],
        [-94.816847430122934, 33.076007819244104],
        [-94.815209427388496, 33.122288793444007],
        [-94.814789426855086, 33.125276791636587],
        [-94.812618422717676, 33.210443744125357],
        [-94.810755432455764, 33.269389679520536],
        [-94.810448433939754, 33.272169673369007],
        [-94.808786492474098, 33.363634475734962],
        [-94.746928412936597, 33.328936542379338],
        [-94.653997234834563, 32.879504474265502],
        [-94.705881297559273, 32.879175521417629],
        [-94.819831434789492, 32.98288482278155],
        [-94.817712431827914, 33.037200840579636],
      ].map(([lon, lat]) => latLonToSVG(lat, lon)),
      fill: '#D1C0A5',
      labelPos: latLonToSVG(33.10, -94.68),
    },
    // Marion County (E - contains Jefferson at 32.7571, -94.3451)
    {
      name: 'Marion',
      points: [
        [-94.709449301488377, 32.871306506988603],
        [-94.707624299391398, 32.873532510331081],
        [-94.70799129991309, 32.875130514262679],
        [-94.705881297559273, 32.879175521417629],
        [-94.499070048539181, 32.880037333103438],
        [-94.042886209595451, 32.881088062138687],
        [-94.043026814874779, 32.797475155576997],
        [-94.042747857222736, 32.786972110452481],
        [-94.043027894593124, 32.776862070051983],
        [-94.043148131247079, 32.693028796109935],
        [-94.507326048965254, 32.69373600245239],
        [-94.702143288873017, 32.793086324910384],
        [-94.702141290197915, 32.82051338641498],
        [-94.709449301488377, 32.871306506988603],
      ].map(([lon, lat]) => latLonToSVG(lat, lon)),
      fill: '#C8B696',
      labelPos: latLonToSVG(32.80, -94.28),
    },
    // Upshur County (SW - contains Gilmer at 32.7282, -94.9413)
    {
      name: 'Upshur',
      points: [
        [-95.152967821388486, 32.607119079839634],
        [-95.152113838039796, 32.902639805026354],
        [-94.962592602384618, 32.902615694535989],
        [-94.954461592790054, 32.902891692132506],
        [-94.900415529194305, 32.902595671563752],
        [-94.758568362277217, 32.9038676221776],
        [-94.757315360793029, 32.903650621217785],
        [-94.719945315827445, 32.904500591768965],
        [-94.705881297559273, 32.879175521417629],
        [-94.653997234834563, 32.879504474265502],
        [-94.702168285165385, 32.716758167192282],
        [-94.701793281501978, 32.652207048317884],
        [-94.820016414679571, 32.590877967897619],
        [-94.854968451444122, 32.578955948991137],
        [-94.972210567699861, 32.537426870806812],
        [-95.15341379952784, 32.570112982017108],
        [-95.152967821388486, 32.607119079839634],
      ].map(([lon, lat]) => latLonToSVG(lat, lon)),
      fill: '#CFBE9D',
      labelPos: latLonToSVG(32.68, -95.05),
    },
    // Rusk County (S - contains Henderson at 32.1532, -94.7994) - not in GeoJSON, keeping approximation
    {
      name: 'Rusk',
      points: [
        latLonToSVG(32.48, -95.35),
        latLonToSVG(32.48, -94.48),
        latLonToSVG(31.88, -94.48),
        latLonToSVG(31.88, -95.35),
      ],
      fill: '#D6C4A8',
      labelPos: latLonToSVG(32.18, -94.92),
    },
  ];

  // Simplified highways - only major routes
  const highways = [
    // I-30 corridor (simplified)
    { 
      id: 'i30', 
      label: 'I-30', 
      points: [
        latLonToSVG(33.16, -95.7),
        latLonToSVG(33.15, -94.3),
      ],
  color: 'var(--destructive)', 
      width: 3.5,
      type: 'interstate'
    },
    // US 271 (main north-south route)
    { 
      id: 'us271', 
      label: 'US 271', 
      points: [
        latLonToSVG(33.66, -95.555),
        latLonToSVG(33.157, -95.2),
        latLonToSVG(32.728, -94.941),
      ],
  color: 'var(--destructive)',
      width: 2.5,
      type: 'us'
    },
    // I-20 corridor (southern)
    { 
      id: 'i20', 
      label: 'I-20', 
      points: [
        latLonToSVG(32.15, -95.5),
        latLonToSVG(32.15, -94.3),
      ],
  color: 'var(--destructive)', 
      width: 3.5,
      type: 'interstate'
    },
    // US 59 (eastern route)
    { 
      id: 'us59', 
      label: 'US 59', 
      points: [
        latLonToSVG(33.3, -94.345),
        latLonToSVG(32.757, -94.345),
      ],
  color: 'var(--destructive)',
      width: 2.5,
      type: 'us'
    },
  ];

  // Simplified rivers - only major waterways
  const rivers = [
    // Red River (northern boundary)
    {
      name: 'Red River',
      points: [
        latLonToSVG(33.90, -95.7),
        latLonToSVG(33.92, -95.0),
        latLonToSVG(33.90, -94.5),
        latLonToSVG(33.85, -94.2),
      ],
      width: 2.5,
    },
    // Sabine River (eastern boundary)
    {
      name: 'Sabine River',
      points: [
        latLonToSVG(33.3, -94.0),
        latLonToSVG(33.0, -93.95),
        latLonToSVG(32.7, -93.9),
        latLonToSVG(32.5, -93.86),
      ],
      width: 2.5,
    },
  ];

  // Update water features to use geographic coordinates
  const waterFeatures = [
    { 
      name: "Lake O' the Pines", 
      cx: latLonToSVG(32.83, -94.53).x,
      cy: latLonToSVG(32.83, -94.53).y,
      r: 20 
    },
    { 
      name: 'Caddo Lake', 
      cx: latLonToSVG(32.72, -94.11).x,
      cy: latLonToSVG(32.72, -94.11).y,
      r: 18 
    },
    { 
      name: 'Lake Bob Sandlin', 
      cx: latLonToSVG(33.1, -95.35).x,
      cy: latLonToSVG(33.1, -95.35).y,
      r: 18 
    },
    { 
      name: 'Lake Cypress Springs', 
      cx: latLonToSVG(33.05, -95.25).x,
      cy: latLonToSVG(33.05, -95.25).y,
      r: 15 
    },
  ];

  // Responsive map height -- slightly taller on small screens
  useEffect(() => {
    const check = () => setIsSmall(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Helpers for touch/pinch
  const distanceBetweenTouches = (t1: any, t2: any) => {
    const dx = t2.clientX - t1.clientX;
    const dy = t2.clientY - t1.clientY;
    return Math.hypot(dx, dy);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      const t = e.touches[0];
      draggingRef.current = true;
      dragStartRef.current = { x: t.clientX, y: t.clientY };
      panStartRef.current = { ...pan };
    } else if (e.touches.length === 2) {
      pinchStartDistRef.current = distanceBetweenTouches(e.touches[0] as any, e.touches[1] as any);
      initialZoomRef.current = zoomLevel;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 1 && draggingRef.current) {
      const t = e.touches[0];
      const dx = t.clientX - dragStartRef.current.x;
      const dy = t.clientY - dragStartRef.current.y;
      setPan({ x: panStartRef.current.x + dx, y: panStartRef.current.y + dy });
    } else if (e.touches.length === 2 && pinchStartDistRef.current) {
      const newDist = distanceBetweenTouches(e.touches[0] as any, e.touches[1] as any);
      const scale = newDist / pinchStartDistRef.current;
      const newZoom = Math.max(0.5, Math.min(2, initialZoomRef.current * scale));
      setZoomLevel(newZoom);
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (e.touches.length === 0) {
      draggingRef.current = false;
      pinchStartDistRef.current = null;
    }
  };

  // Mouse drag support
  const handleMouseDown = (e: React.MouseEvent) => {
    draggingRef.current = true;
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    panStartRef.current = { ...pan };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!draggingRef.current) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    setPan({ x: panStartRef.current.x + dx, y: panStartRef.current.y + dy });
  };

  const handleMouseUp = () => {
    draggingRef.current = false;
  };

  return (
    <div 
      className="relative w-full"
      style={{
        backgroundColor: 'var(--background-subtle)',
        border: '1px solid var(--document-border)',
        overflow: 'hidden',
      }}
    >
      {/* Map Header with Controls */}
      <div 
        className="px-8 py-5 border-b"
        style={{
          backgroundColor: 'var(--surface)',
          borderColor: 'var(--divider)',
        }}
      >
        <div className="flex items-start justify-between">
          <div>
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '24px',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--foreground)',
              marginBottom: '6px',
            }}>
              East Texas Heritage Region
            </h3>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              color: 'var(--foreground-muted)',
              marginBottom: '8px',
            }}>
              Seven historic communities across the Piney Woods and Blackland Prairie
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <div 
                  style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: 'var(--primary)',
                  }}
                />
                <span style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '13px',
                  color: 'var(--foreground-muted)',
                }}>
                  {communities.length} Communities
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div 
                  style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: 'var(--color-accent-map)',
                  }}
                />
                <span style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '13px',
                  color: 'var(--foreground-muted)',
                }}>
                  4 Major Lakes
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div 
                  style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: 'var(--destructive)',
                  }}
                />
                <span style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '13px',
                  color: 'var(--foreground-muted)',
                }}>
                  Highway Network
                </span>
              </div>
            </div>
          </div>
          
          {/* Zoom Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setZoomLevel(Math.max(0.5, zoomLevel - 0.25))}
              className="transition-all hover:bg-opacity-80"
              style={{
                padding: '8px',
                backgroundColor: 'var(--background-subtle)',
                border: '1px solid var(--document-border)',
                cursor: 'pointer',
              }}
            >
              <Icon name="Minus" label="Zoom out" size={16} style={{ color: 'var(--foreground-muted)' }} />
            </button>
            <div
              style={{
                padding: '8px 12px',
                backgroundColor: 'var(--background-subtle)',
                border: '1px solid var(--document-border)',
                fontFamily: 'var(--font-ui)',
                fontSize: '13px',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--foreground)',
                minWidth: '60px',
                textAlign: 'center',
              }}
            >
              {Math.round(zoomLevel * 100)}%
            </div>
            <button
              onClick={() => setZoomLevel(Math.min(2, zoomLevel + 0.25))}
              className="transition-all hover:bg-opacity-80"
              style={{
                padding: '8px',
                backgroundColor: 'var(--background-subtle)',
                border: '1px solid var(--document-border)',
                cursor: 'pointer',
              }}
            >
              <Icon name="Plus" label="Zoom in" size={16} style={{ color: 'var(--foreground-muted)' }} />
            </button>
            <button
              onClick={() => setZoomLevel(1)}
              className="transition-all hover:bg-opacity-80"
              style={{
                padding: '8px',
                backgroundColor: 'var(--background-subtle)',
                border: '1px solid var(--document-border)',
                cursor: 'pointer',
              }}
            >
              <Icon name="Maximize2" label="Reset zoom" size={16} style={{ color: 'var(--foreground-muted)' }} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Map Container */}
  <div className={`relative bg-white`} style={{ overflow: 'hidden', paddingTop: isSmall ? '85%' : '60%' }}>
        <div 
          ref={mapRef}
          className="absolute inset-0 transition-transform duration-0"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoomLevel})`,
            transformOrigin: 'center center',
            touchAction: 'none',
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <svg
            viewBox="0 0 1000 700"
            className="absolute inset-0 w-full h-full"
            style={{ opacity: 1 }}
          >
            {/* Clean base background */}
            <rect width="1000" height="700" fill="var(--color-background-base)" />
            
            {/* Subtle grid pattern for context */}
            <defs>
              <pattern id="simple-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path 
                  d="M 50 0 L 0 0 0 50" 
                  fill="none" 
                  stroke="var(--color-border)" 
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="1000" height="700" fill="url(#simple-grid)" opacity="0.2" />

            {/* Connecting lines between communities (historical routes) */}
            <g stroke="var(--color-critical)" strokeWidth="1" strokeDasharray="3,3" opacity="0.3">
              {communityGeoPositions.map((from, i) => 
                communityGeoPositions.slice(i + 1).map((to, j) => {
                  // Only draw lines for neighboring towns
                  const shouldConnect = (
                    (from.name === 'Paris' && to.name === 'Mount Pleasant') ||
                    (from.name === 'Mount Pleasant' && to.name === 'Talco') ||
                    (from.name === 'Mount Pleasant' && to.name === 'Daingerfield') ||
                    (from.name === 'Daingerfield' && to.name === 'Jefferson') ||
                    (from.name === 'Mount Pleasant' && to.name === 'Gilmer') ||
                    (from.name === 'Gilmer' && to.name === 'Henderson')
                  );
                  
                  if (!shouldConnect) return null;
                  
                  return (
                    <line 
                      key={`${from.name}-${to.name}`}
                      x1={from.svgX} 
                      y1={from.svgY} 
                      x2={to.svgX} 
                      y2={to.svgY} 
                    />
                  );
                })
              )}
            </g>
            {/* Decorative features should be ignored by assistive tech */}
            <rect width="1000" height="700" fill="none" aria-hidden="true" />
          </svg>

          {/* Interactive Community Markers - Overlaid on SVG */}
          <div className="absolute inset-0">
            {communityGeoPositions.map((community) => {
              const isHovered = hoveredCommunity === community.name;
              const isSelected = selectedCommunity === community.name;
              
              return (
                <div
                  key={community.name}
                  className="absolute cursor-pointer transition-all duration-300"
                  style={{
                    left: `${community.svgX}px`,
                    top: `${community.svgY}px`,
                    transform: isHovered || isSelected 
                      ? 'translate(-50%, -50%) scale(1.2)' 
                      : 'translate(-50%, -50%)',
                    zIndex: isHovered || isSelected ? 20 : 10,
                  }}
                  onMouseEnter={() => setHoveredCommunity(community.name)}
                  onMouseLeave={() => setHoveredCommunity(null)}
                  onClick={() => handleCommunityClick(community)}
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleCommunityClick(community); } }}
                >
                  {/* Marker container with glow effect */}
                  <div className="relative">
                    {/* Glow ring for selected/hovered */}
                    {(isHovered || isSelected) && (
                      <div
                        className="absolute inset-0"
                        style={{
                          width: '56px',
                          height: '56px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--primary)',
                          opacity: 0.2,
                          transform: 'translate(-50%, -50%)',
                          top: '50%',
                          left: '50%',
                          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        }}
                      />
                    )}

                    {/* Main marker pin */}
                    <div
                      className="relative transition-all duration-300"
                      style={{
                        width: isHovered || isSelected ? '52px' : '44px',
                        height: isHovered || isSelected ? '52px' : '44px',
                        backgroundColor: isSelected 
                          ? 'var(--primary)' 
                          : isHovered 
                            ? 'var(--secondary)' 
                            : 'var(--surface)',
                        border: `3px solid ${isSelected || isHovered ? 'var(--primary)' : 'var(--document-border)'}`,
                        boxShadow: isHovered || isSelected 
                          ? '0 8px 24px rgba(0,0,0,0.2), 0 0 0 2px rgba(139,69,19,0.1)' 
                          : '0 4px 12px rgba(0,0,0,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon
                        name="MapPin"
                        label="Community location"
                        size={isHovered || isSelected ? 28 : 24}
                        style={{
                          color: isSelected 
                            ? '#FFFFFF' 
                            : isHovered 
                              ? 'var(--primary)' 
                              : 'var(--foreground-muted)',
                        }}
                      />
                    </div>

                    {/* Marker shadow/anchor point */}
                    <div
                      className="absolute"
                      style={{
                        bottom: '-4px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: isHovered || isSelected ? '20px' : '16px',
                        height: '4px',
                        backgroundColor: '#000000',
                        opacity: 0.2,
                        borderRadius: '50%',
                        filter: 'blur(2px)',
                      }}
                    />
                  </div>

                  {/* Enhanced Tooltip */}
                  {isHovered && (
                    <div
                      className="absolute whitespace-nowrap"
                      style={{
                        top: '-90px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: 'var(--surface)',
                        padding: '12px 16px',
                        border: '2px solid var(--primary)',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                        zIndex: 30,
                        minWidth: '180px',
                      }}
                    >
                      <div style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '16px',
                        fontWeight: 'var(--font-weight-bold)',
                        color: 'var(--foreground)',
                        marginBottom: '4px',
                      }}>
                        {community.name}
                      </div>
                      <div style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '13px',
                        color: 'var(--foreground-muted)',
                        marginBottom: community.population ? '6px' : '0',
                      }}>
                        {community.county}
                      </div>
                      {community.population && (
                        <div className="flex items-center justify-between gap-3 pt-2 border-t" style={{ borderColor: 'var(--divider)' }}>
                          <span style={{
                            fontFamily: 'var(--font-ui)',
                            fontSize: '11px',
                            color: 'var(--foreground-subtle)',
                          }}>
                            Population
                          </span>
                          <span style={{
                            fontFamily: 'var(--font-ui)',
                            fontSize: '12px',
                            fontWeight: 'var(--font-weight-semibold)',
                            color: 'var(--primary)',
                          }}>
                            {community.population}
                          </span>
                        </div>
                      )}
                      {community.established && (
                        <div className="flex items-center justify-between gap-3 pt-1">
                          <span style={{
                            fontFamily: 'var(--font-ui)',
                            fontSize: '11px',
                            color: 'var(--foreground-subtle)',
                          }}>
                            Est.
                          </span>
                          <span style={{
                            fontFamily: 'var(--font-ui)',
                            fontSize: '12px',
                            fontWeight: 'var(--font-weight-semibold)',
                            color: 'var(--secondary)',
                          }}>
                            {community.established}
                          </span>
                        </div>
                      )}
                      
                      {/* Tooltip arrow */}
                      <div
                        className="absolute"
                        style={{
                          bottom: '-8px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '0',
                          height: '0',
                          borderLeft: '8px solid transparent',
                          borderRight: '8px solid transparent',
                          borderTop: '8px solid var(--primary)',
                        }}
                      />
                    </div>
                  )}

                  {/* Permanent label below marker */}
                  <div
                    className="absolute whitespace-nowrap"
                    style={{
                      top: isHovered || isSelected ? '38px' : '34px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      fontFamily: 'var(--font-ui)',
                      fontSize: isHovered || isSelected ? '13px' : '12px',
                      fontWeight: 'var(--font-weight-bold)',
                      color: isSelected ? 'var(--primary)' : 'var(--foreground)',
                      textShadow: '0 1px 3px rgba(255,255,255,0.9), 0 0 8px rgba(255,255,255,0.8)',
                      transition: 'all 0.3s',
                    }}
                  >
                    {community.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Zoom & Reset Controls (overlay) */}
        <div className="absolute right-3 top-3 flex flex-col gap-2 z-40">
          <button
            onClick={() => setZoomLevel(Math.min(2, zoomLevel + 0.25))}
            aria-label="Zoom in"
            className="rounded bg-surface p-2 border"
          >
            <Icon name="Plus" label="Zoom in" size={16} style={{ color: 'var(--foreground-muted)' }} />
          </button>
          <button
            onClick={() => setZoomLevel(Math.max(0.5, zoomLevel - 0.25))}
            aria-label="Zoom out"
            className="rounded bg-surface p-2 border"
          >
            <Icon name="Minus" label="Zoom out" size={16} style={{ color: 'var(--foreground-muted)' }} />
          </button>
          <button
            onClick={() => { setZoomLevel(1); setPan({ x: 0, y: 0 }); }}
            aria-label="Reset map"
            className="rounded bg-surface p-2 border"
          >
            <Icon name="Maximize2" label="Reset map" size={16} style={{ color: 'var(--foreground-muted)' }} />
          </button>
        </div>
      </div>

      {/* Comprehensive Map Legend */}
      <div 
        className="px-8 py-6 border-t"
        style={{
          backgroundColor: 'var(--surface)',
          borderColor: 'var(--divider)',
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1: Locations */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '13px',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--foreground)',
              marginBottom: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}>
              Locations
            </h4>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    backgroundColor: 'var(--surface)',
                    border: '2px solid var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon name="MapPin" decorative size={16} style={{ color: 'var(--primary)' }} />
                </div>
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  color: 'var(--foreground-muted)',
                }}>
                  Heritage Community
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div
                  style={{
                    width: '16px',
                    height: '16px',
                    backgroundColor: '#5DADE2',
                    opacity: 0.4,
                    border: '1.5px solid #3498DB',
                  }}
                />
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  color: 'var(--foreground-muted)',
                }}>
                  Lakes & Reservoirs
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Infrastructure */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '13px',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--foreground)',
              marginBottom: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}>
              Infrastructure
            </h4>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div
                  style={{
                    width: '28px',
                    height: '3px',
                    backgroundColor: 'var(--destructive)',
                  }}
                />
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  color: 'var(--foreground-muted)',
                }}>
                  Interstate Highway
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div
                  style={{
                    width: '28px',
                    height: '2.5px',
                    backgroundColor: 'var(--destructive)',
                  }}
                />
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  color: 'var(--foreground-muted)',
                }}>
                  US & State Highway
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div
                  style={{
                    width: '28px',
                    height: '1.5px',
                    backgroundColor: 'var(--destructive)',
                    borderTop: '1px dashed var(--destructive)',
                  }}
                />
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  color: 'var(--foreground-muted)',
                }}>
                  Historic Routes
                </span>
              </div>
            </div>
          </div>

          {/* Column 3: Geographic Features */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '13px',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--foreground)',
              marginBottom: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}>
              Geography
            </h4>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div
                  style={{
                    width: '16px',
                    height: '16px',
                    backgroundColor: '#D2B48C',
                    border: '1.5px solid var(--primary)',
                  }}
                />
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  color: 'var(--foreground-muted)',
                }}>
                  County Boundaries
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div
                  style={{
                    width: '16px',
                    height: '16px',
                    backgroundColor: '#228B22',
                    opacity: 0.3,
                  }}
                />
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  color: 'var(--foreground-muted)',
                }}>
                  Piney Woods Region
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Map Scale and Compass */}
        <div className="flex items-center justify-between mt-6 pt-6 border-t" style={{ borderColor: 'var(--divider)' }}>
          {/* Scale bar */}
          <div className="flex items-center gap-3">
            <span style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '12px',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--foreground-muted)',
            }}>
              Scale:
            </span>
            <div className="flex items-end gap-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  style={{
                    width: '20px',
                    height: '8px',
                    backgroundColor: i % 2 === 0 ? 'var(--foreground)' : 'var(--surface)',
                    border: '1px solid var(--foreground)',
                  }}
                />
              ))}
            </div>
            <span style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '11px',
              color: 'var(--foreground-muted)',
            }}>
              ≈ 50 miles
            </span>
          </div>

          {/* Compass rose */}
          <div className="flex items-center gap-3">
            <div className="relative" style={{ width: '40px', height: '40px' }}>
              <Icon 
                name="Navigation" 
                label="North compass direction"
                size={24} 
                style={{ 
                  color: 'var(--primary)',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }} 
              />
              <span style={{
                position: 'absolute',
                top: '-4px',
                left: '50%',
                transform: 'translateX(-50%)',
                fontFamily: 'var(--font-ui)',
                fontSize: '10px',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--primary)',
              }}>
                N
              </span>
            </div>
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: '11px',
              color: 'var(--foreground-subtle)',
              fontStyle: 'italic',
            }}>
              Cartographic representation • Click communities to explore
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}