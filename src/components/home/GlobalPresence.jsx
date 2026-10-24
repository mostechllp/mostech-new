import React, { useState } from 'react';
import './GlobalPresence.css';
import worldMapImg from '../../assets/map/Extruded Blue 3D World Map.webp';

const HUB_COORD = { x: 932, y: 518 };

// Region Legend matching Image 2 reference
const REGION_LEGEND = [
  { id: 'hq', label: 'HQ - Dubai, UAE', isHQ: true },
  { id: 'south_asia', label: 'South Asia' },
  { id: 'middle_east', label: 'Middle East' },
  { id: 'north_america', label: 'North America' },
  { id: 'europe', label: 'Europe & UK' },
  { id: 'cis', label: 'CIS' },
  { id: 'africa', label: 'Africa' },
];

// Complete 33 Countries with calibrated single-point coordinates and orientations
const ALL_COUNTRIES = [
  {
    id: 'uae',
    country: 'Dubai, UAE',
    name: 'Dubai, UAE',
    region: 'middle_east',
    regionLabel: 'Global Headquarters',
    role: 'Global HQ & Operations Center',
    isHub: true,
    badgePos: 'right',
    px: 932,
    py: 518,
    top: '50.59%',
    left: '60.68%',
    tooltipPos: 'top-right',
  },
  {
    id: 'canada',
    country: 'Canada',
    name: 'Canada',
    region: 'north_america',
    regionLabel: 'North America',
    role: 'Enterprise Digital Solutions',
    badgePos: 'top',
    px: 330,
    py: 300,
    top: '29.30%',
    left: '21.48%',
    tooltipPos: 'top-center',
  },
  {
    id: 'usa',
    country: 'United States',
    name: 'United States',
    region: 'north_america',
    regionLabel: 'North America',
    role: 'North American Regional Market',
    badgePos: 'bottom',
    px: 310,
    py: 425,
    top: '41.50%',
    left: '20.18%',
    arch: 155,
    hasArc: true,
    tooltipPos: 'top-center',
  },
  {
    id: 'ireland',
    country: 'Ireland',
    name: 'Ireland',
    region: 'europe',
    regionLabel: 'Europe & UK',
    role: 'European Technology Gateway',
    badgePos: 'left',
    px: 655,
    py: 365,
    top: '35.64%',
    left: '42.64%',
    tooltipPos: 'top-left',
  },
  {
    id: 'uk',
    country: 'United Kingdom',
    name: 'United Kingdom',
    region: 'europe',
    regionLabel: 'Europe & UK',
    role: 'London & European Hub',
    badgePos: 'top',
    px: 718,
    py: 360,
    top: '35.16%',
    left: '46.74%',
    arch: 95,
    hasArc: true,
    tooltipPos: 'top-left',
  },
  {
    id: 'poland',
    country: 'Poland',
    name: 'Poland',
    region: 'europe',
    regionLabel: 'Europe & UK',
    role: 'Central Europe Service Network',
    badgePos: 'top',
    px: 800,
    py: 385,
    top: '37.60%',
    left: '52.08%',
    tooltipPos: 'top-left',
  },
  {
    id: 'belarus',
    country: 'Belarus',
    name: 'Belarus',
    region: 'cis',
    regionLabel: 'CIS',
    role: 'Eastern Europe Commercial Area',
    badgePos: 'top',
    px: 848,
    py: 370,
    top: '36.13%',
    left: '55.21%',
    tooltipPos: 'top-left',
  },
  {
    id: 'ukraine',
    country: 'Ukraine',
    name: 'Ukraine',
    region: 'cis',
    regionLabel: 'CIS',
    role: 'Eastern Europe Regional Market',
    badgePos: 'top',
    px: 872,
    py: 412,
    top: '40.23%',
    left: '56.77%',
    tooltipPos: 'top-left',
  },
  {
    id: 'russia',
    country: 'Russia',
    name: 'Russia',
    region: 'cis',
    regionLabel: 'CIS',
    role: 'CIS Regional Gateway',
    badgePos: 'top',
    px: 1080,
    py: 280,
    top: '27.34%',
    left: '70.31%',
    arch: 70,
    hasArc: true,
    tooltipPos: 'top-center',
  },
  {
    id: 'kazakhstan',
    country: 'Kazakhstan',
    name: 'Kazakhstan',
    region: 'cis',
    regionLabel: 'CIS',
    role: 'Central Asia & CIS Hub',
    badgePos: 'top',
    px: 1010,
    py: 375,
    top: '36.62%',
    left: '65.76%',
    tooltipPos: 'top-center',
  },
  {
    id: 'uzbekistan',
    country: 'Uzbekistan',
    name: 'Uzbekistan',
    region: 'cis',
    regionLabel: 'CIS',
    role: 'Central Asian Enterprise Market',
    badgePos: 'top',
    px: 960,
    py: 415,
    top: '40.53%',
    left: '62.50%',
    tooltipPos: 'top-center',
  },
  {
    id: 'syria',
    country: 'Syria',
    name: 'Syria',
    region: 'middle_east',
    regionLabel: 'Middle East',
    role: 'Levant Service Network',
    badgePos: 'top',
    px: 832,
    py: 442,
    top: '43.16%',
    left: '54.17%',
    tooltipPos: 'top-left',
  },
  {
    id: 'lebanon',
    country: 'Lebanon',
    name: 'Lebanon',
    region: 'middle_east',
    regionLabel: 'Middle East',
    role: 'Beirut Commercial Center',
    badgePos: 'left',
    px: 822,
    py: 448,
    top: '43.75%',
    left: '53.52%',
    tooltipPos: 'top-left',
  },
  {
    id: 'kuwait',
    country: 'Kuwait',
    name: 'Kuwait',
    region: 'middle_east',
    regionLabel: 'Middle East',
    role: 'Kuwait City GCC Operations',
    badgePos: 'top',
    px: 900,
    py: 480,
    top: '46.88%',
    left: '58.59%',
    tooltipPos: 'top-left',
  },
  {
    id: 'bahrain',
    country: 'Bahrain',
    name: 'Bahrain',
    region: 'middle_east',
    regionLabel: 'Middle East',
    role: 'Manama Financial & Tech Center',
    badgePos: 'left',
    px: 914,
    py: 498,
    top: '48.63%',
    left: '59.51%',
    tooltipPos: 'top-left',
  },
  {
    id: 'qatar',
    country: 'Qatar',
    name: 'Qatar',
    region: 'middle_east',
    regionLabel: 'Middle East',
    role: 'Doha & Lusail Global Service Area',
    badgePos: 'bottom',
    px: 924,
    py: 510,
    top: '49.80%',
    left: '60.16%',
    tooltipPos: 'top-left',
  },
  {
    id: 'ksa',
    country: 'KSA',
    name: 'Kingdom of Saudi Arabia',
    region: 'middle_east',
    regionLabel: 'Middle East',
    role: 'Riyadh & Jeddah Global Service Area',
    badgePos: 'bottom',
    px: 895,
    py: 532,
    top: '51.95%',
    left: '58.27%',
    tooltipPos: 'top-left',
  },
  {
    id: 'oman',
    country: 'Oman',
    name: 'Oman',
    region: 'middle_east',
    regionLabel: 'Middle East',
    role: 'Muscat Global Service Area',
    badgePos: 'bottom',
    px: 955,
    py: 542,
    top: '52.93%',
    left: '62.17%',
    tooltipPos: 'top-right',
  },
  {
    id: 'pakistan',
    country: 'Pakistan',
    name: 'Pakistan',
    region: 'south_asia',
    regionLabel: 'South Asia',
    role: 'South Asian Regional Network',
    badgePos: 'top',
    px: 1032,
    py: 508,
    top: '49.61%',
    left: '67.19%',
    tooltipPos: 'top-center',
  },
  {
    id: 'india',
    country: 'India',
    name: 'India',
    region: 'south_asia',
    regionLabel: 'South Asia',
    role: 'India R&D & Tech Center',
    badgePos: 'right',
    px: 1082,
    py: 596,
    top: '58.20%',
    left: '70.44%',
    arch: 50,
    hasArc: true,
    tooltipPos: 'top-center',
  },
  {
    id: 'nepal',
    country: 'Nepal',
    name: 'Nepal',
    region: 'south_asia',
    regionLabel: 'South Asia',
    role: 'Kathmandu Service Market',
    badgePos: 'top',
    px: 1102,
    py: 514,
    top: '50.20%',
    left: '71.74%',
    tooltipPos: 'top-center',
  },
  {
    id: 'sri_lanka',
    country: 'Sri Lanka',
    name: 'Sri Lanka',
    region: 'south_asia',
    regionLabel: 'South Asia',
    role: 'Colombo Commercial Market',
    badgePos: 'bottom',
    px: 1106,
    py: 612,
    top: '59.77%',
    left: '72.01%',
    tooltipPos: 'top-center',
  },
  {
    id: 'egypt',
    country: 'Egypt',
    name: 'Egypt',
    region: 'africa',
    regionLabel: 'Africa / MENA',
    role: 'North Africa Commercial Gateway',
    badgePos: 'left',
    px: 800,
    py: 495,
    top: '48.34%',
    left: '52.08%',
    tooltipPos: 'top-left',
  },
  {
    id: 'ethiopia',
    country: 'Ethiopia',
    name: 'Ethiopia',
    region: 'africa',
    regionLabel: 'Africa',
    role: 'Horn of Africa Commercial Network',
    badgePos: 'right',
    px: 890,
    py: 605,
    top: '59.08%',
    left: '57.94%',
    tooltipPos: 'top-right',
  },
  {
    id: 'kenya',
    country: 'Kenya',
    name: 'Kenya',
    region: 'africa',
    regionLabel: 'Africa',
    role: 'East Africa Digital Hub (Nairobi)',
    badgePos: 'right',
    px: 893,
    py: 658,
    top: '64.26%',
    left: '58.14%',
    tooltipPos: 'top-right',
  },
  {
    id: 'tanzania',
    country: 'Tanzania',
    name: 'Tanzania',
    region: 'africa',
    regionLabel: 'Africa',
    role: 'East Africa Coast Network',
    badgePos: 'right',
    px: 882,
    py: 704,
    top: '68.75%',
    left: '57.42%',
    tooltipPos: 'top-right',
  },
  {
    id: 'zimbabwe',
    country: 'Zimbabwe',
    name: 'Zimbabwe',
    region: 'africa',
    regionLabel: 'Africa',
    role: 'Southern Africa Market Network',
    badgePos: 'right',
    px: 858,
    py: 758,
    top: '74.02%',
    left: '55.86%',
    tooltipPos: 'top-left',
  },
  {
    id: 'south_africa',
    country: 'South Africa',
    name: 'South Africa',
    region: 'africa',
    regionLabel: 'Africa',
    role: 'Johannesburg & Cape Town Tech Hub',
    badgePos: 'bottom',
    px: 828,
    py: 825,
    top: '80.57%',
    left: '53.91%',
    arch: 75,
    hasArc: true,
    tooltipPos: 'top-center',
  },
  {
    id: 'thailand',
    country: 'Thailand',
    name: 'Thailand',
    region: 'apac',
    regionLabel: 'Southeast Asia',
    role: 'Bangkok Regional Gateway',
    badgePos: 'bottom',
    px: 1214,
    py: 608,
    top: '59.38%',
    left: '79.04%',
    arch: 65,
    hasArc: true,
    tooltipPos: 'top-center',
  },
  {
    id: 'philippines',
    country: 'Philippines',
    name: 'Philippines',
    region: 'apac',
    regionLabel: 'Southeast Asia',
    role: 'Manila Regional Commercial Market',
    badgePos: 'right',
    px: 1275,
    py: 620,
    top: '60.55%',
    left: '83.01%',
    tooltipPos: 'top-center',
  },
  {
    id: 'indonesia',
    country: 'Indonesia',
    name: 'Indonesia',
    region: 'apac',
    regionLabel: 'Southeast Asia',
    role: 'Jakarta & ASEAN Enterprise Hub',
    badgePos: 'bottom',
    px: 1235,
    py: 680,
    top: '66.41%',
    left: '80.40%',
    tooltipPos: 'top-center',
  },
  {
    id: 'australia',
    country: 'Australia',
    name: 'Australia',
    region: 'apac',
    regionLabel: 'Oceania',
    role: 'Sydney & Oceania Operations',
    badgePos: 'bottom',
    px: 1345,
    py: 780,
    top: '76.17%',
    left: '87.57%',
    arch: 90,
    hasArc: true,
    tooltipPos: 'top-center',
  },
  {
    id: 'new_zealand',
    country: 'New Zealand',
    name: 'New Zealand',
    region: 'apac',
    regionLabel: 'Oceania',
    role: 'Auckland Technology Market',
    badgePos: 'bottom',
    px: 1475,
    py: 865,
    top: '84.47%',
    left: '96.03%',
    tooltipPos: 'top-center',
  },
];

const ARC_DESTINATIONS = ALL_COUNTRIES.filter((c) => c.hasArc);

function getArcD(target) {
  const mx = (HUB_COORD.x + target.px) / 2;
  const my = (HUB_COORD.y + target.py) / 2 - target.arch;
  return `M ${HUB_COORD.x} ${HUB_COORD.y} Q ${mx} ${my} ${target.px} ${target.py}`;
}

const GlobalPresence = () => {
  const [activePin, setActivePin] = useState(null);
  const [activeRegionFilter, setActiveRegionFilter] = useState('all');

  return (
    <section className="global-presence-section">
      <div className="slide container">
        <div className="gp-columns-layout">

          {/* Left Column: Title, Description & Region Legend */}
          <div className="gp-col-content">
            <div className="gp-header">
              <div className="gp-header-bar"></div>
              <div className="gp-header-text">
                <span className="gp-eyebrow-title">Our</span>
                <span className="gp-eyebrow-title">Global Footprint</span>
              </div>
            </div>

            <p className="gp-lede">
              <b>Mostech</b> serves businesses across <b>the Middle East, Africa, South Asia, Europe, the CIS, and North America, operating from Dubai, UAE.</b>
            </p>
            <p className="gp-lede gp-lede-sub">
              With a strong regional presence and a robust marketing network, we deliver innovative digital solutions to clients in more than 25 countries, enabling sustainable growth and long-term business success across global markets.
            </p>

            {/* Region Legend matching Image 2 reference */}
            <div className="gp-region-legend">
              {REGION_LEGEND.map((item) => {
                const isActive = activeRegionFilter === item.id;
                return (
                  <div
                    key={item.id}
                    className={`gp-legend-item ${isActive ? 'is-active' : ''}`}
                    onClick={() => setActiveRegionFilter(activeRegionFilter === item.id ? 'all' : item.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setActiveRegionFilter(activeRegionFilter === item.id ? 'all' : item.id);
                      }
                    }}
                  >
                    <span className={`gp-legend-swatch ${item.isHQ ? 'swatch-hq' : ''}`} />
                    <span className="gp-legend-name">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: 3D World Map with Single-Point Country Markers */}
          <div className="gp-col-map">
            <div className="gph-map-stage">
              <img
                src={worldMapImg}
                alt="Mostech Global Footprint 3D Map"
                className="gp-map-img"
                loading="lazy"
              />

              {/* Animated Electric Blue Connection Arc Lines */}
              <svg
                className="gp-map-arcs-svg"
                viewBox="0 0 1536 1024"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                {/* Glowing Concentric Hub Rings in UAE */}
                <circle cx={HUB_COORD.x} cy={HUB_COORD.y} r={18} className="gp-hub-ring-outer" />
                <circle cx={HUB_COORD.x} cy={HUB_COORD.y} r={10} className="gp-hub-ring-mid" />
                <circle cx={HUB_COORD.x} cy={HUB_COORD.y} r={4.5} className="gp-hub-center-dot" />

                {ARC_DESTINATIONS.map((dest, index) => {
                  const isArcActive =
                    activePin === dest.id ||
                    (activeRegionFilter === 'hq' && dest.isHub) ||
                    activeRegionFilter === dest.region;
                  return (
                    <g
                      key={`arc-${dest.id}`}
                      className={`gp-arc-group ${isArcActive ? 'is-active' : ''}`}
                    >
                      {/* Underlying Electric Blue Route Track */}
                      <path
                        d={getArcD(dest)}
                        className="gp-arc-track"
                      />
                      {/* Glowing Electric Blue Light Beam */}
                      <path
                        d={getArcD(dest)}
                        pathLength="100"
                        className="gp-arc-beam"
                        style={{ animationDelay: `${(index % 4) * 0.55}s` }}
                      />
                    </g>
                  );
                })}
              </svg>

              {/* All 33 Countries Mapped - Exactly One Point Per Country */}
              {ALL_COUNTRIES.map((pin) => {
                const isSelected = activePin === pin.id;
                const matchesRegion =
                  activeRegionFilter === 'all' ||
                  (activeRegionFilter === 'hq' && pin.isHub) ||
                  (activeRegionFilter === 'middle_east' && (pin.region === 'middle_east' || pin.isHub)) ||
                  pin.region === activeRegionFilter;
                const isDimmed = !matchesRegion;
                const isHighlighted = matchesRegion && activeRegionFilter !== 'all';

                return (
                  <div
                    key={pin.id}
                    className={`gp-world-pin gp-pin-${pin.id} ${pin.isHub ? 'gp-hub-pin' : ''} ${isSelected ? 'is-active' : ''
                      } ${isDimmed ? 'is-dimmed' : ''} ${isHighlighted ? 'is-highlighted' : ''}`}
                    style={{ top: pin.top, left: pin.left }}
                    onMouseEnter={() => setActivePin(pin.id)}
                    onMouseLeave={() => setActivePin(null)}
                    onClick={() => setActivePin(isSelected ? null : pin.id)}
                    aria-label={`${pin.country} location`}
                  >
                    {/* Exactly One Single Location Point on the Map */}
                    <div className="gp-world-pin-anchor">
                      <span className={`gp-point-dot ${pin.isHub ? 'gp-hub-dot' : ''}`}></span>
                      <span className={`gp-point-pulse ${pin.isHub ? 'gp-hub-pulse' : ''}`}></span>
                    </div>

                    {/* Visible Country Name Label (No second dot) */}
                    <div className={`gp-pin-name-badge ${pin.badgePos || 'bottom'} ${pin.isHub ? 'gp-hub-badge' : ''}`}>
                      <span className="gp-badge-text">{pin.country}</span>
                    </div>


                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
