import React, { useState } from 'react';
import './GlobalPresence.css';
import worldMapImg from '../../assets/map/Extruded Blue 3D World Map.webp';

const HUB_COORD = { x: 983, y: 510 };

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
  // --- HQ (Dubai, UAE) ---
  {
    id: 'uae',
    country: 'Dubai, UAE',
    name: 'Dubai, UAE',
    region: 'middle_east',
    regionLabel: 'Global Headquarters',
    role: 'Global HQ & Operations Center',
    isHub: true,
    badgePos: 'right',
    px: 983,
    py: 510,
    top: '49.80%',
    left: '64.00%',
    tooltipPos: 'top-right',
  },

  // --- North America ---
  {
    id: 'canada',
    country: 'Canada',
    name: 'Canada',
    region: 'north_america',
    regionLabel: 'North America',
    role: 'Enterprise Digital Solutions',
    badgePos: 'top',
    px: 322,
    py: 292,
    top: '28.50%',
    left: '21.00%',
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
    px: 300,
    py: 420,
    top: '41.00%',
    left: '19.50%',
    arch: 155,
    hasArc: true,
    tooltipPos: 'top-center',
  },

  // --- Europe & UK ---
  {
    id: 'ireland',
    country: 'Ireland',
    name: 'Ireland',
    region: 'europe',
    regionLabel: 'Europe & UK',
    role: 'European Technology Gateway',
    badgePos: 'left',
    px: 627,
    py: 336,
    top: '32.80%',
    left: '40.80%',
    tooltipPos: 'top-left',
  },
  {
    id: 'uk',
    country: 'United Kingdom',
    name: 'United Kingdom',
    region: 'europe',
    regionLabel: 'Europe & UK',
    role: 'London & European Hub',
    badgePos: 'bottom',
    px: 740,
    py: 353,
    top: '34.50%',
    left: '48.20%',
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
    px: 806,
    py: 322,
    top: '31.50%',
    left: '52.50%',
    tooltipPos: 'top-left',
  },

  // --- CIS ---
  {
    id: 'belarus',
    country: 'Belarus',
    name: 'Belarus',
    region: 'cis',
    regionLabel: 'CIS',
    role: 'Eastern Europe Commercial Area',
    badgePos: 'top',
    px: 868,
    py: 307,
    top: '30.00%',
    left: '56.50%',
    tooltipPos: 'top-left',
  },
  {
    id: 'ukraine',
    country: 'Ukraine',
    name: 'Ukraine',
    region: 'cis',
    regionLabel: 'CIS',
    role: 'Eastern Europe Regional Market',
    badgePos: 'left',
    px: 852,
    py: 364,
    top: '35.50%',
    left: '55.50%',
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
    px: 968,
    py: 241,
    top: '23.50%',
    left: '63.00%',
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
    px: 1041,
    py: 333,
    top: '32.50%',
    left: '67.80%',
    tooltipPos: 'top-center',
  },
  {
    id: 'uzbekistan',
    country: 'Uzbekistan',
    name: 'Uzbekistan',
    region: 'cis',
    regionLabel: 'CIS',
    role: 'Central Asian Enterprise Market',
    badgePos: 'right',
    px: 1001,
    py: 389,
    top: '38.00%',
    left: '65.20%',
    tooltipPos: 'top-center',
  },

  // --- Middle East ---
  {
    id: 'syria',
    country: 'Syria',
    name: 'Syria',
    region: 'middle_east',
    regionLabel: 'Middle East',
    role: 'Levant Service Network',
    badgePos: 'top',
    px: 899,
    py: 422,
    top: '41.20%',
    left: '58.50%',
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
    px: 863,
    py: 442,
    top: '43.20%',
    left: '56.20%',
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
    px: 934,
    py: 469,
    top: '45.80%',
    left: '60.80%',
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
    px: 943,
    py: 497,
    top: '48.50%',
    left: '61.40%',
    tooltipPos: 'top-left',
  },
  {
    id: 'qatar',
    country: 'Qatar',
    name: 'Qatar',
    region: 'middle_east',
    regionLabel: 'Middle East',
    role: 'Doha & Lusail Global Service Area',
    badgePos: 'left',
    px: 952,
    py: 524,
    top: '51.20%',
    left: '62.00%',
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
    px: 898,
    py: 548,
    top: '53.50%',
    left: '58.50%',
    tooltipPos: 'top-left',
  },
  {
    id: 'oman',
    country: 'Oman',
    name: 'Oman',
    region: 'middle_east',
    regionLabel: 'Middle East',
    role: 'Muscat Global Service Area',
    badgePos: 'right',
    px: 1011,
    py: 563,
    top: '55.00%',
    left: '65.80%',
    tooltipPos: 'top-right',
  },

  // --- South Asia ---
  {
    id: 'pakistan',
    country: 'Pakistan',
    name: 'Pakistan',
    region: 'south_asia',
    regionLabel: 'South Asia',
    role: 'South Asian Regional Network',
    badgePos: 'top',
    px: 1052,
    py: 486,
    top: '47.50%',
    left: '68.50%',
    tooltipPos: 'top-center',
  },
  {
    id: 'india',
    country: 'India',
    name: 'India',
    region: 'south_asia',
    regionLabel: 'South Asia',
    role: 'India R&D & Tech Center',
    badgePos: 'bottom',
    px: 1090,
    py: 558,
    top: '54.50%',
    left: '71.00%',
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
    px: 1133,
    py: 486,
    top: '47.50%',
    left: '73.80%',
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
    px: 1103,
    py: 645,
    top: '63.00%',
    left: '71.80%',
    tooltipPos: 'top-center',
  },

  // --- Africa ---
  {
    id: 'egypt',
    country: 'Egypt',
    name: 'Egypt',
    region: 'africa',
    regionLabel: 'Africa / MENA',
    role: 'North Africa Commercial Gateway',
    badgePos: 'left',
    px: 845,
    py: 486,
    top: '47.50%',
    left: '55.00%',
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
    px: 945,
    py: 594,
    top: '58.00%',
    left: '61.50%',
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
    px: 949,
    py: 655,
    top: '64.00%',
    left: '61.80%',
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
    px: 945,
    py: 712,
    top: '69.50%',
    left: '61.50%',
    tooltipPos: 'top-right',
  },
  {
    id: 'zimbabwe',
    country: 'Zimbabwe',
    name: 'Zimbabwe',
    region: 'africa',
    regionLabel: 'Africa',
    role: 'Southern Africa Market Network',
    badgePos: 'left',
    px: 878,
    py: 763,
    top: '74.50%',
    left: '57.20%',
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
    px: 837,
    py: 819,
    top: '80.00%',
    left: '54.50%',
    arch: 75,
    hasArc: true,
    tooltipPos: 'top-center',
  },

  // --- Southeast Asia & Oceania ---
  {
    id: 'thailand',
    country: 'Thailand',
    name: 'Thailand',
    region: 'apac',
    regionLabel: 'Southeast Asia',
    role: 'Bangkok Regional Gateway',
    badgePos: 'right',
    px: 1216,
    py: 568,
    top: '55.50%',
    left: '79.20%',
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
    px: 1321,
    py: 584,
    top: '57.00%',
    left: '86.00%',
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
    px: 1259,
    py: 686,
    top: '67.00%',
    left: '82.00%',
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
    px: 1344,
    py: 778,
    top: '76.00%',
    left: '87.50%',
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
    px: 1444,
    py: 865,
    top: '84.50%',
    left: '94.00%',
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
