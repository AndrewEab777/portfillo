import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar      from '../components/Navbar';
import Footer      from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import PageLoader  from '../components/PageLoader';
import { useDarkMode } from '../hooks/useDarkMode';

export default function MainLayout() {
  const [dark, toggleDark] = useDarkMode();
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  // Brief loading flash on route change
  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(t);
  }, [location.pathname]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 transition-colors duration-300">
      {loading && <PageLoader />}
      <Navbar dark={dark} toggleDark={toggleDark} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
