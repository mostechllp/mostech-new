import React, { useState } from 'react';
import { regionsData, pinTypes } from '../data/mapData';
import { Building2, Globe, MapPin, Phone, Mail, Sparkles } from 'lucide-react';
import './GlobalPresenceMap.css';
import mapPinImg from '../assets/map/map-pin.png'; // High-contrast solid-fill branded pin

// Multiple map pin positions per region — calibrated against each 3D map image
const regionMapPins = {
  // UAE: landmass runs left:15%→85%, top:28%→75% — 3D angled, Dubai top-right, Abu Dhabi left
  uae: [
    { pinId: 'uae-hq', top: '36%', left: '56%', title: 'Mostech Global Headquarters', city: 'Business Bay, Dubai' },
    { pinId: 'uae-abudhabi', top: '48%', left: '32%', title: 'Abu Dhabi Regional Hub', city: 'Abu Dhabi, UAE' },
    { pinId: 'uae-dhafra', top: '63%', left: '35%', title: 'Al Dhafra Regional Hub', city: 'Al Dhafra, UAE' },
    { pinId: 'uae-alain', top: '56%', left: '68%', title: 'Al Ain Regional Hub', city: 'Al Ain, UAE' },
    { pinId: 'uae-sharjah', top: '36%', left: '76%', title: 'Sharjah Regional Hub', city: 'Sharjah, UAE' },
    { pinId: 'uae-rak', top: '23%', left: '84%', title: 'Ras Al Khaimah Hub', city: 'Ras Al Khaimah, UAE' },
  ],
  // Africa: continent fills image; Cairo=NE, Lagos=W, Nairobi=E, Jo'burg=S, Casablanca=NW
  africa: [
    { pinId: 'africa-egypt', top: '20%', left: '56%', title: 'Cairo Hub', city: 'Cairo, Egypt' },
    { pinId: 'africa-kenya', top: '53%', left: '58%', title: 'Nairobi Hub', city: 'Nairobi, Kenya' },
    { pinId: 'africa-ng', top: '42%', left: '33%', title: 'Lagos Hub', city: 'Lagos, Nigeria' },
    { pinId: 'africa-sa', top: '75%', left: '50%', title: 'Johannesburg Hub', city: 'Johannesburg, South Africa' },
    { pinId: 'africa-ma', top: '17%', left: '30%', title: 'Casablanca Hub', city: 'Casablanca, Morocco' },
  ],
  // Kerala: tall diagonal strip from top-left → bottom-right
  kerala: [
    { pinId: 'india-calicut', top: '30%', left: '54%', title: 'HiLite Business Park R&D', city: 'Calicut, Kerala' },
    { pinId: 'india-kannur', top: '18%', left: '50%', title: 'KVR Tower Development Center', city: 'Kannur, Kerala' },
    { pinId: 'india-kochi', top: '55%', left: '60%', title: 'Kochi Tech Zone', city: 'Kochi, Kerala' },
    { pinId: 'india-blr', top: '43%', left: '63%', title: 'Bengaluru Tech Desk', city: 'Bengaluru, India' },
    { pinId: 'india-mumbai', top: '22%', left: '42%', title: 'Mumbai Commercial Desk', city: 'Mumbai, India' },
  ],
  // Europe: UK=left, Scandinavia=top, Germany=center-north, France=west-center, Rotterdam=NW
  europe: [
    { pinId: 'uk-london', top: '36%', left: '22%', title: 'London Client Desk', city: 'London, United Kingdom' },
    { pinId: 'europe-germany', top: '32%', left: '46%', title: 'Berlin Client Desk', city: 'Berlin, Germany' },
    { pinId: 'europe-netherlands', top: '28%', left: '40%', title: 'Amsterdam Tech Desk', city: 'Amsterdam, Netherlands' },
    { pinId: 'europe-france', top: '43%', left: '33%', title: 'Paris Client Desk', city: 'Paris, France' },
  ],
  // CIS: wide map, Russia=top, Central Asia=bottom-center, Baku=southwest
  cis: [
    { pinId: 'cis-almaty', top: '66%', left: '62%', title: 'Almaty Hub', city: 'Almaty, Kazakhstan' },
    { pinId: 'cis-tashkent', top: '70%', left: '52%', title: 'Tashkent Hub', city: 'Tashkent, Uzbekistan' },
    { pinId: 'cis-baku', top: '58%', left: '34%', title: 'Baku Hub', city: 'Baku, Azerbaijan' },
  ],
};

const GlobalPresenceMap = () => {
  const [activeRegionId, setActiveRegionId] = useState('uae');
  const [activeCardId, setActiveCardId] = useState(null);
  const [hoveredPinId, setHoveredPinId] = useState(null);

  const activeRegion = regionsData.find((r) => r.id === activeRegionId) || regionsData[0];
  const mapPins = regionMapPins[activeRegionId] || [];

  return (
    <section className="global-presence-section">
      <div className="container">
        {/* Region Tabs */}
        <div className="gp-tabs-wrapper">
          <div className="gp-tabs">
            {regionsData.map((reg) => (
              <button
                key={reg.id}
                className={`gp-tab-btn ${activeRegionId === reg.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveRegionId(reg.id);
                  setActiveCardId(null);
                }}
              >
                {reg.label}
              </button>
            ))}
          </div>
        </div>

        {/* Map Card Showcase */}
        <div className="gp-map-card">
          <div className="gp-map-meta">
            <div className="region-info-text">
              <h3>{activeRegion.label}</h3>
              <p>{activeRegion.subtitle}</p>
            </div>
          </div>

          <div className="gp-content-grid">
            {/* 3D Map Visual Display */}
            <div className="gp-visual-container">
              <div className="gp-image-card">
                <div className="gp-image-badge">
                  <Sparkles size={13} />
                  <span>{activeRegion.badge || 'Regional Presence'}</span>
                </div>

                <div className="gp-map-image-wrap" style={{ position: 'relative' }}>
                  <img
                    key={activeRegion.id}
                    src={activeRegion.image}
                    alt={`${activeRegion.label} Map`}
                    className="gp-map-3d-img"
                    loading="lazy"
                  />

                  {/* Multiple branded map pins overlay */}
                  {mapPins.map((mp, idx) => (
                    <div
                      key={mp.pinId || idx}
                      className="gp-custom-map-pin"
                      style={{
                        top: mp.top,
                        left: mp.left,
                        animationDelay: `${idx * 0.3}s`,
                      }}
                    >
                      <img src={mapPinImg} alt="Mostech Location Pin" className="gp-pin-img" />
                      <div className="gp-pin-shadow" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Regional Facilities & Offices */}
            <div className="gp-facilities-column">
              <div className="gp-facilities-header">
                <h4>Regional Facilities & Offices</h4>
                <span className="gp-facilities-count">
                  {activeRegion.facilities?.length || 0} locations
                </span>
              </div>

              <div className="gp-facilities-list">
                {activeRegion.facilities?.map((facility) => {
                  const config = pinTypes[facility.type] || pinTypes.office;
                  const isSelected = activeCardId === facility.id;

                  return (
                    <div
                      key={facility.id}
                      className={`gp-facility-card ${isSelected ? 'selected' : ''}`}
                      onClick={() => setActiveCardId(isSelected ? null : facility.id)}
                    >
                      <div className="facility-top-row">
                        <span
                          className="facility-badge"
                          style={{
                            backgroundColor: config.bg,
                            color: config.color,
                            borderColor: config.border
                          }}
                        >
                          {facility.type === 'office' ? <Building2 size={13} /> : <Globe size={13} />}
                          <span>{facility.badge || config.label}</span>
                        </span>
                        <span className="facility-city">{facility.city}</span>
                      </div>

                      <h5 className="facility-title">{facility.title}</h5>

                      <div className="facility-details">
                        {facility.address && (
                          <p className="facility-item">
                            <MapPin size={15} className="facility-icon-accent" />
                            <span>{facility.address}</span>
                          </p>
                        )}
                        {facility.phone && (
                          <p className="facility-item facility-contact">
                            <Phone size={15} className="facility-icon-accent" />
                            <a href={`tel:${facility.phone.replace(/\s+/g, '')}`} onClick={(e) => e.stopPropagation()}>
                              {facility.phone}
                            </a>
                          </p>
                        )}
                        {facility.email && (
                          <p className="facility-item facility-contact">
                            <Mail size={15} className="facility-icon-accent" />
                            <a href={`mailto:${facility.email}`} onClick={(e) => e.stopPropagation()}>
                              {facility.email}
                            </a>
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GlobalPresenceMap;
