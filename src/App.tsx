import { useState, useEffect } from 'react';
import { translations } from './translations';
import { CartProvider } from './store';
import { ThemeContext } from './contexts/ThemeContext';
import { LanguageContext } from './contexts/LanguageContext';
import AppRoutes from './routes/AppRoutes';

// Re-export contexts for backward compatibility with moved components
export { LanguageContext, ThemeContext };

function App() {
  const [lang, setLang] = useState<'en' | 'hi'>('en');
  const [isDark, setIsDark] = useState(() => {
    return document.documentElement.classList.contains('dark');
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Global Error Handling & Resource Guard
  useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      console.warn('Caught runtime exception:', error.message);
    };

    const handleResourceError = (event: ErrorEvent) => {
      const target = event.target as HTMLElement;
      if (target && (target.tagName === 'IMG' || target.tagName === 'VIDEO')) {
        console.warn(`Resource failed to load: ${(target as any).src}`);
      }
    };

    window.addEventListener('error', handleError);
    window.addEventListener('error', handleResourceError, true);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('error', handleResourceError, true);
    };
  }, []);

  const t = translations[lang];

  return (
    <CartProvider>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <LanguageContext.Provider value={{ lang, setLang, t }}>
          <AppRoutes />
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    </CartProvider>
  );
}

export default App;
