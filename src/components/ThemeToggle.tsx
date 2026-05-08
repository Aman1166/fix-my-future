import { useContext } from 'react';
import { ThemeContext } from '../App';

export default function ThemeToggle() {
  const { isDark, setIsDark } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2.5 md:p-3 rounded-xl transition-all duration-300 hover:scale-110 text-text-muted hover:text-accent-theme hover:bg-accent-theme/15 active:scale-95 glass"
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <i className="fas fa-sun text-lg md:text-xl"></i>
      ) : (
        <i className="fas fa-moon text-lg md:text-xl"></i>
      )}
    </button>
  );
}
