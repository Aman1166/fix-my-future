import { useContext, useEffect } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function ThemeToggle() {
  const { isDark, setIsDark } = useContext(ThemeContext);

  useEffect(() => {
    console.log('Theme changed:', isDark ? 'Dark' : 'Light');
  }, [isDark]);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Theme toggle clicked');
        setIsDark(!isDark);
      }}
      className="p-2.5 md:p-3 rounded-xl transition-all duration-300 hover:scale-110 text-text-muted hover:text-accent-theme hover:bg-accent-theme/15 active:scale-95 glass relative z-50"
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <i className="fa-solid fa-sun text-lg md:text-xl"></i>
      ) : (
        <i className="fa-solid fa-moon text-lg md:text-xl"></i>
      )}
    </button>
  );
}
