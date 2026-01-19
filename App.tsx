
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { FeatureShowcase } from './components/FeatureShowcase';
import { WhyPchela } from './components/WhyPchela';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { ContactPage } from './components/ContactPage';
import { CaseStudyPage } from './components/CaseStudyPage';
import { AboutUsPage } from './components/AboutUsPage';

type Page = 'home' | 'case-study' | 'about' | 'contact';

const App: React.FC = () => {
  const [page, setPage] = useState<Page>('home');

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace('/', '');
      if (path === 'case-study' || path === 'about' || path === 'contact') {
        setPage(path as Page);
      } else {
        setPage('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (href: string) => {
    // Scroll logic for sections on home page
    if (href.startsWith('#')) {
      if (page !== 'home') {
        setPage('home');
        window.history.pushState({}, '', '/');
        // Wait for render before scrolling
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    // Page logic
    const newPage = href.replace('/', '') as Page || 'home';
    if (newPage !== page) {
      setPage(newPage);
      window.history.pushState({}, '', href === '/' ? '/' : href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans text-white selection:bg-[#f5a623] selection:text-black">
      <Header onNavigate={handleNavigate} currentPage={page} />
      <main>
        {page === 'home' && (
          <>
            <Hero onNavigate={handleNavigate} />
            <ProblemSolution />
            <FeatureShowcase />
            <WhyPchela />
            <Pricing onContact={() => handleNavigate('/contact')} />
          </>
        )}
        {page === 'case-study' && <CaseStudyPage onContact={() => handleNavigate('/contact')} />}
        {page === 'about' && <AboutUsPage />}
        {page === 'contact' && <ContactPage />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
