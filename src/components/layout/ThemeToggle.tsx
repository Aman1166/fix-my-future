import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

export default function ThemeToggle() {
  const { isDark, setIsDark } = useContext(ThemeContext);

  const lastTheme = React.useRef(isDark);

  useEffect(() => {
    // Only log if the theme has actually changed since mount/last update
    // This prevents double-logging in React StrictMode
    if (lastTheme.current !== isDark) {
      console.log('Theme changed:', isDark ? 'Dark' : 'Light');
      lastTheme.current = isDark;
    }
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
        <span className="material-symbols-outlined text-lg md:text-xl">light_mode</span>
      ) : (
        <span className="material-symbols-outlined text-lg md:text-xl">dark_mode</span>
      )}
    </button>
  );
}
