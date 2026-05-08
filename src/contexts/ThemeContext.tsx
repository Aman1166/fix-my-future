import { createContext } from 'react';

export const ThemeContext = createContext<{
  isDark: boolean;
  setIsDark: (v: boolean) => void;
}>({
  isDark: true,
  setIsDark: () => {}
});
