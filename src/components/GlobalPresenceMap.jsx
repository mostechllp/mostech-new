import React, { useState } from 'react';
import { regionsData, pinTypes } from '../data/mapData';
import { Building2, Globe, MapPin, Phone, Mail, Clock } from 'lucide-react';
import './GlobalPresenceMap.css';
import mapPinImg from '../assets/map/map-pin.png'; // High-contrast solid-fill branded pin

// Map pin position per region — calibrated accurately to the user-specified office locations
const regionMapPins = {
  // UAE: Business Bay, Dubai, United Arab Emirates
  uae: [
    { pinId: 'uae-dubai', top: '29%', left: '73%', title: 'Dubai Head Office', city: 'Business Bay, Dubai' },
  ],
  // India: Hilite Business Tower, Calicut, Keralam, India
  kerala: [
    { pinId: 'india-calicut', top: '82%', left: '35%', title: 'Hilite Business Tower', city: 'Calicut, Keralam, India' },
  ],
  // Qatar: Lusail, Doha, State of Qatar
  qatar: [
    { pinId: 'qatar-lusail', top: '42%', left: '64%', title: 'Lusail Global Service Area', city: 'Lusail, Doha' },
  ],
  // Saudi: Jeddah, Meccah Province, Kingdom of Saudi Arabia
  saudi: [
    { pinId: 'saudi-jeddah', top: '60%', left: '28%', title: 'Jeddah Global Service Area', city: 'Jeddah, Meccah Province' },
  ],
  // Oman: Seeb, Muscat, Sultanate of Oman
  oman: [
    { pinId: 'oman-seeb', top: '34%', left: '76%', title: 'Muscat Global Service Area', city: 'Seeb, Muscat' },
  ],
  // UK: Tech City, East London, United Kingdom
  uk: [
    { pinId: 'uk-london', top: '75%', left: '73%', title: 'London Global Service Area', city: 'Tech City, East London' },
  ],
};

const GlobalPresenceMap = () => {
  const [activeRegionId, setActiveRegionId] = useState('uae');
  const [activeCardId, setActiveCardId] = useState(null);
  const [hoveredPinId, setHoveredPinId] = useState(null);

  const activeRegion = regionsData.find((r) => r.id === activeRegionId) || regionsData[0];
  const mapPins = regionMapPins[activeRegionId] || [];

  return (
    <div className="global-presence-showcase">
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
                <div
                  className="gp-map-image-wrap"
                  onClick={() => setActiveCardId(null)}
                >
                  <div className="gp-map-stage">
                    <img
                      key={activeRegion.id}
                      src={activeRegion.image}
                      alt={`${activeRegion.label} Map`}
                      className="gp-map-3d-img"
                      loading="lazy"
                    />

                    {/* Location map pin overlay */}
                    {mapPins.map((mp, idx) => {
                      const isPinActive = activeCardId === mp.pinId;
                      const topNum = parseFloat(mp.top) || 50;
                      const leftNum = parseFloat(mp.left) || 50;
                      const vClass = topNum < 42 ? 'pos-bottom' : 'pos-top';
                      const hClass = leftNum > 60 ? 'align-right' : leftNum < 38 ? 'align-left' : 'align-center';
                      return (
                        <div
                          key={mp.pinId || idx}
                          className={`gp-custom-map-pin ${isPinActive ? 'active-pin' : ''}`}
                          style={{
                            top: mp.top,
                            left: mp.left,
                            animationDelay: `${idx * 0.3}s`,
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveCardId(isPinActive ? null : mp.pinId);
                          }}
                        >
                          <img src={mapPinImg} alt="Mostech Location Pin" className="gp-pin-img" />
                          <div className="gp-pin-shadow" />
                          <div className={`gp-pin-tooltip ${vClass} ${hClass}`}>
                            <div className="gp-pin-tooltip-title">{mp.title}</div>
                            <div className="gp-pin-tooltip-addr">
                              <MapPin size={12} />
                              <span>{mp.city}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Regional Facilities & Offices / Global Service Areas */}
            <div className="gp-facilities-column">
              <div className="gp-facilities-header">
                <h4>
                  {['uk', 'saudi', 'oman', 'qatar'].includes(activeRegion.id)
                    ? 'Global Service Areas'
                    : (activeRegion.id === 'uae' ? 'Headquarters & Facilities' : 'Regional Facilities & Offices')}
                </h4>
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
                {/* Embedded Business Hours Card */}
                <div className="gp-extra-cards-container">
                  <div className="gp-extra-card">
                    <div className="gp-extra-card-title">
                      <Clock size={15} className="gp-extra-title-icon" />
                      <span>BUSINESS HOURS</span>
                    </div>
                    <div className="gp-extra-hours">
                      <div className="gp-hours-group">
                        <span className="gp-hours-day-label">Monday - Saturday</span>
                        <strong className="gp-hours-time-val">09:00 AM - 06:00 PM</strong>
                      </div>
                      <div className="gp-hours-sunday-line">
                        <span className="gp-hours-day-label">Sunday:</span>
                        <span className="gp-hours-closed-val">Closed</span>
                      </div>
                      <div className="gp-support-pill-row">
                        <span className="gp-pulse-dot" />
                        <span>24 x 7 Support</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    </div>
  );
};

export default GlobalPresenceMap;
