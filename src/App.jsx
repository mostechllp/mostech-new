import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from './components/home/Header';
import Footer from './components/home/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MobileAppDevPage from './pages/MobileAppDevPage';
import WebDevPage from './pages/WebDevPage';
import DigitalMarketingPage from './pages/DigitalMarketingPage';
import EcommercePage from './pages/EcommercePage';
import ErpPage from './pages/ErpPage';
import ErpProductPage from './pages/ErpProductPage';
import SeoPage from './pages/SeoPage';
import HrmsPage from './pages/HrmsPage';
import WhatsappChatbotPage from './pages/WhatsappChatbotPage';
import ProjectManagementPage from './pages/ProjectManagementPage';
import TaskManagementPage from './pages/TaskManagementPage';
import OurTeamPage from './pages/OurTeamPage';
import AccountingPage from './pages/AccountingPage';
import PosMachinePage from './pages/PosMachinePage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function DynamicCanonical() {
  const { pathname } = useLocation();
  const canonicalPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
  const canonicalUrl = `https://mostech.ae${canonicalPath}`;
  
  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
}

function DynamicBreadcrumb() {
  const { pathname } = useLocation();
  
  if (pathname === '/') return null;

  const breadcrumbNames = {
    '/about': 'About Mostech',
    '/services/mobile-app-development': 'MOBILE APP DEVELOPMENT EXPERTS',
    '/services/web-design-development': 'WEB SOLUTIONS THAT DRIVE BUSINESS',
    '/services-digital-marketing': 'DRIVE GROWTH ONLINE',
    '/services/ecommerce': 'SMART COMMERCE. LIMITLESS GROWTH.',
    '/services-erp-solution': 'Smarter Operations. Stronger Growth.',
    '/services/search-engine-optimization': 'What We Offer at Mostech Business Solutions SEO',
    '/prodcuts/erp': 'Switch to Smarter ERP.',
    '/products/accounting-software': 'SMART ACCOUNTING',
    '/products/whatsapp-chatbot': 'Turn Every WhatsApp Message Into a Business Conversation.',
    '/products/project-management': 'Smart Projects. Stronger Results.',
    '/products/task-management': 'Turn Every Task Into Progress.',
    '/products/pro-solutions': 'STREAMLINE • ORGANIZE • STAY AHEAD',
    '/contact': 'CONTACT US'
  };

  const pageName = breadcrumbNames[pathname];
  if (!pageName) return null;

  const canonicalPath = pathname.replace(/\/$/, '');
  const itemUrl = `https://mostech.ae${canonicalPath}`;

  const schema = {
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 1, 
      "name": "Home",
      "item": "https://mostech.ae/"  
    },{
      "@type": "ListItem", 
      "position": 2, 
      "name": pageName,
      "item": itemUrl  
    }]
  };

  return (
    <Helmet>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </Helmet>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <DynamicCanonical />
        <DynamicBreadcrumb />
        <div className="app-container">
          <Helmet>
            <title>Leading software company in dubai</title>
            <meta name="description" content="Mostech is a leading Dubai software company delivering web development, mobile apps, and digital marketing across the UAE & GCC. Trusted by 500+ clients." />
            <meta name="keywords" content="Mostech Business Solutions | The Best Software Company in Dubai, Digital Marketing Agency in Dubai, UAE." />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "WebSite",
              "name": "MOSTECH",
              "url": "https://mostech.ae/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "{search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }) }} />
          </Helmet>
          
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services/mobile-app-development" element={<MobileAppDevPage />} />
            <Route path="/services/web-design-development" element={<WebDevPage />} />
            <Route path="/services-digital-marketing" element={<DigitalMarketingPage />} />
            <Route path="/services/ecommerce" element={<EcommercePage />} />
            <Route path="/services-erp-solution" element={<ErpPage />} />
            <Route path="/prodcuts/erp" element={<ErpProductPage />} />
            <Route path="/products/erp" element={<ErpProductPage />} />
            <Route path="/services/search-engine-optimization" element={<SeoPage />} />
            <Route path="/products/hrms" element={<HrmsPage />} />
            <Route path="/products/whatsapp-chatbot" element={<WhatsappChatbotPage />} />
            <Route path="/products/project-management" element={<ProjectManagementPage />} />
            <Route path="/products/task-management" element={<TaskManagementPage />} />
            <Route path="/products/accounting-software" element={<AccountingPage />} />
            <Route path="/products/pro-solutions" element={<PosMachinePage />} />
            <Route path="/our-team" element={<OurTeamPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Redirects from short/old URLs to the new exact URLs */}
            <Route path="/mobile-app-development" element={<Navigate to="/services/mobile-app-development" replace />} />
            <Route path="/web-development" element={<Navigate to="/services/web-design-development" replace />} />
            <Route path="/digital-marketing" element={<Navigate to="/services-digital-marketing" replace />} />
            <Route path="/services/digital-marketing" element={<Navigate to="/services-digital-marketing" replace />} />
            <Route path="/ecommerce" element={<Navigate to="/services/ecommerce" replace />} />
            <Route path="/services/ecommerce-development" element={<Navigate to="/services/ecommerce" replace />} />
            <Route path="/erp-solution" element={<Navigate to="/services-erp-solution" replace />} />
            <Route path="/services/erp-solutions" element={<Navigate to="/services-erp-solution" replace />} />
            <Route path="/seo" element={<Navigate to="/services/search-engine-optimization" replace />} />
            <Route path="/erp-product" element={<Navigate to="/prodcuts/erp" replace />} />
            <Route path="/hrms" element={<Navigate to="/products/hrms" replace />} />
            <Route path="/accounting-software" element={<Navigate to="/products/accounting-software" replace />} />
            <Route path="/whatsapp-chatbot" element={<Navigate to="/products/whatsapp-chatbot" replace />} />
            <Route path="/project-management" element={<Navigate to="/products/project-management" replace />} />
            <Route path="/task-management" element={<Navigate to="/products/task-management" replace />} />
            <Route path="/pro-solutions" element={<Navigate to="/products/pro-solutions" replace />} />
            <Route path="/index.php" element={<Navigate to="/" replace />} />
            
            {/* Legacy redirects */}
            <Route path="/about.php" element={<Navigate to="/about" replace />} />
            <Route path="/hybrid-application-development.php" element={<Navigate to="/services/mobile-app-development" replace />} />
            <Route path="/services/web-development" element={<Navigate to="/services/web-design-development" replace />} />
            <Route path="/digital-marketing.php" element={<Navigate to="/services-digital-marketing" replace />} />
            <Route path="/contact.php" element={<Navigate to="/contact" replace />} />
            <Route path="/ecommerce development.php" element={<Navigate to="/services/ecommerce" replace />} />
            <Route path="/ecommerce-development.php" element={<Navigate to="/services/ecommerce" replace />} />
            <Route path="/ecommerce%20development.php" element={<Navigate to="/services/ecommerce" replace />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;

