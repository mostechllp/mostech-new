import React, { useState } from 'react';
import './GlobalPresence.css';
import worldMapImg from '../../assets/map/Embossed Navy World Map.png';
import mapPinImg from '../../assets/map/map-pin.png';

const HUB_COORD = { x: 973, y: 508 };

// Destination pins matching reference layout (radiating from UAE Hub)
const DESTINATIONS = [
  {
    id: 'north_america',
    name: 'North America',
    country: 'United States',
    label: 'United States & Canada',
    badgePos: 'bottom',
    px: 330,
    py: 420,
    arch: 150,
    top: '41.02%',
    left: '21.48%',
    tooltipPos: 'top-center',
  },
  {
    id: 'south_america',
    name: 'South America',
    country: 'Brazil',
    label: 'Latin America Network',
    badgePos: 'bottom',
    px: 500,
    py: 710,
    arch: 110,
    top: '69.34%',
    left: '32.55%',
    tooltipPos: 'top-left',
  },
  {
    id: 'europe',
    name: 'Europe & UK',
    country: 'United Kingdom',
    label: 'London & European Hub',
    badgePos: 'top',
    px: 728,
    py: 345,
    arch: 100,
    top: '33.69%',
    left: '47.40%',
    tooltipPos: 'top-left',
  },
  {
    id: 'africa',
    name: 'Africa',
    country: 'South Africa',
    label: 'South Africa & Kenya',
    badgePos: 'bottom',
    px: 840,
    py: 800,
    arch: 80,
    top: '78.13%',
    left: '54.69%',
    tooltipPos: 'top-center',
  },
  {
    id: 'south_asia',
    name: 'South Asia',
    country: 'India',
    label: 'India (R&D & Tech Center)',
    badgePos: 'bottom',
    px: 1082,
    py: 540,
    arch: 55,
    top: '52.73%',
    left: '70.44%',
    tooltipPos: 'top-center',
  },
  {
    id: 'east_asia',
    name: 'East Asia & APAC',
    country: 'Japan',
    label: 'Asia-Pacific Regional Market',
    badgePos: 'top',
    px: 1330,
    py: 450,
    arch: 120,
    top: '43.95%',
    left: '86.59%',
    tooltipPos: 'top-left',
  },
  {
    id: 'australia',
    name: 'Australia',
    country: 'Australia',
    label: 'Sydney & Oceania',
    badgePos: 'bottom',
    px: 1340,
    py: 775,
    arch: 95,
    top: '75.68%',
    left: '87.24%',
    tooltipPos: 'top-center',
  },
];

// Central Global Hub Pin
const HUB_PIN = {
  id: 'uae',
  name: 'Dubai, UAE',
  country: 'Dubai, UAE',
  label: 'Global HQ & Operations',
  badgePos: 'top',
  px: 973,
  py: 508,
  top: '49.61%',
  left: '63.35%',
  tooltipPos: 'top-right',
  isHub: true,
};

const ALL_PINS = [HUB_PIN, ...DESTINATIONS];

function getArcD(target) {
  const mx = (HUB_COORD.x + target.px) / 2;
  const my = (HUB_COORD.y + target.py) / 2 - target.arch;
  return `M ${HUB_COORD.x} ${HUB_COORD.y} Q ${mx} ${my} ${target.px} ${target.py}`;
}

const GlobalPresence = () => {
  const [activePin, setActivePin] = useState(null);

  return (
    <section className="global-presence-section">
      <div className="slide container">
        <div className="gp-columns-layout">

          {/* Left Column: Title & Description */}
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
          </div>

          {/* Right Column: World Map */}
          <div className="gp-col-map">
            <div className="gp-map-stage">
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

                {DESTINATIONS.map((dest, index) => (
                  <g
                    key={`arc-${dest.id}`}
                    className={`gp-arc-group ${activePin === dest.id ? 'is-active' : ''}`}
                  >
                    {/* Underlying Electric Blue Route Track */}
                    <path
                      d={getArcD(dest)}
                      className="gp-arc-track"
                    />
                    {/* Glowing Electric Blue Light Beam (Ease-in Ease-out Come-and-Go) */}
                    <path
                      d={getArcD(dest)}
                      pathLength="100"
                      className="gp-arc-beam"
                      style={{ animationDelay: `${(index % 4) * 0.55}s` }}
                    />
                  </g>
                ))}
              </svg>

              {ALL_PINS.map((pin) => (
                <div
                  key={pin.id}
                  className={`gp-world-pin gp-pin-${pin.id} ${pin.isHub ? 'gp-hub-pin' : ''} ${activePin === pin.id ? 'is-active' : ''}`}
                  style={{ top: pin.top, left: pin.left }}
                  onMouseEnter={() => setActivePin(pin.id)}
                  onMouseLeave={() => setActivePin(null)}
                  onClick={() => setActivePin(activePin === pin.id ? null : pin.id)}
                  aria-label={`${pin.country} location`}
                >
                  <div className="gp-world-pin-anchor">
                    <img src={mapPinImg} alt={`${pin.name} pin`} className="gp-world-pin-img" />
                    <span className="gp-world-pin-aura"></span>
                  </div>

                  {/* Visible Country Name Label */}
                  <div className={`gp-pin-name-badge ${pin.badgePos || 'bottom'}`}>
                    <span className="gp-badge-dot"></span>
                    <span className="gp-badge-text">{pin.country}</span>
                  </div>

                  <div className={`gp-world-pin-tooltip ${pin.tooltipPos}`}>
                    <strong className="gp-world-pin-country">{pin.name}</strong>
                    <span className="gp-world-pin-city">{pin.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
