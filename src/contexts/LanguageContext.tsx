import { createContext } from 'react';
import { translations } from '../translations';

export const LanguageContext = createContext<{
  lang: 'en' | 'hi';
  setLang: (lang: 'en' | 'hi') => void;
  t: typeof translations.en;
}>({
  lang: 'en',
  setLang: () => {},
  t: translations.en
});
