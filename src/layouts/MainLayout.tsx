import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { FloatingElements, MarqueeBanner } from '../components/Animations';
import AIChat from '../components/modals/AIChat';
import AuthModal from '../components/modals/AuthModal';
import SearchOverlay from '../components/modals/SearchOverlay';
import CartDrawer from '../components/modals/CartDrawer';
import { useState, useEffect } from 'react';
import { gemstoneProducts, rudrakshaProducts, braceletProducts } from '../constants/data';

export default function MainLayout() {
  const { isDark } = useContext(ThemeContext);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  useEffect(() => {
    const handleOpenSearch = () => setIsSearchOpen(true);
    const handleOpenAuth = () => setIsAuthOpen(true);
    
    window.addEventListener('openSearch', handleOpenSearch);
    window.addEventListener('openAuth', handleOpenAuth);
    
    return () => {
      window.removeEventListener('openSearch', handleOpenSearch);
      window.removeEventListener('openAuth', handleOpenAuth);
    };
  }, []);

  const allProducts = [...gemstoneProducts, ...rudrakshaProducts, ...braceletProducts];

  return (
    <div className="min-h-screen bg-dark-gradient relative">
      {isDark && <FloatingElements />}
      <MarqueeBanner />
      <Header />
      <main id="home" className="pt-20">
        <Outlet />
      </main>
      <Footer />
      
      {/* Global Modals */}
      <AIChat />
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} allProducts={allProducts} />
      <CartDrawer />
    </div>
  );
}
