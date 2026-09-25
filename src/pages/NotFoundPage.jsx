import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Home, 
  ArrowLeft, 
  Compass, 
  Search 
} from 'lucide-react';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <main className="notfound-page">
      <Helmet>
        <title>404 – Page Not Found | Mostech Business Solutions</title>
        <meta 
          name="description" 
          content="404 – Page Not Found. Return to Mostech Business Solutions homepage." 
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="prerender-status-code" content="404" />
      </Helmet>

      {/* Decorative ambient background lights */}
      <div className="notfound-ambient notfound-ambient-left" aria-hidden="true" />
      <div className="notfound-ambient notfound-ambient-right" aria-hidden="true" />

      <div className="container notfound-container">
        <div className="notfound-content">
          
          {/* Eyebrow Badge */}
          <div className="notfound-badge">
            <span className="notfound-badge-dot" />
            <Compass size={14} className="notfound-badge-icon" />
            <span>Error 404</span>
          </div>

          {/* 404 Graphic Element */}
          <div className="notfound-hero-code" aria-hidden="true">
            <span className="notfound-digit">4</span>
            <div className="notfound-radar-wrap">
              <span className="notfound-radar-pulse" />
              <Search className="notfound-radar-icon" size={48} />
            </div>
            <span className="notfound-digit">4</span>
          </div>

          {/* Main Title */}
          <h1 className="notfound-title">404 – Page Not Found</h1>

          {/* Action Buttons */}
          <div className="notfound-actions">
            <Link to="/" className="btn btn-primary notfound-btn notfound-btn-primary">
              <Home size={18} />
              <span>Back to Home</span>
            </Link>
            <button 
              type="button" 
              onClick={() => window.history.back()} 
              className="btn btn-outline notfound-btn notfound-btn-outline"
            >
              <ArrowLeft size={18} />
              <span>Go Back</span>
            </button>
          </div>

        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
