import { useContext } from 'react';
import { LanguageContext, ThemeContext } from '../App';
import { ScrollReveal } from './Animations';

const animals = [
  { name: 'Rat', pin: 'Shu', image: '/astro/chinese/rat.png', desc: 'People born in the Year of the Rat are intuitive, versatile, and quick-witted. They have strong curiosity and are good at dealing with difficulties. They are often successful in their careers due to their hardworking nature and positive attitude.', years: '1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020' },
  { name: 'Ox', pin: 'Niu', image: '/astro/chinese/ox.png', desc: 'Known for diligence, dependability, strength and determination. Having an honest nature, Oxen are strongly patriotic, have ideals and ambitions for life, and attach importance to family and work.', years: '1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021' },
  { name: 'Tiger', pin: 'Hu', image: '/astro/chinese/tiger.png', desc: 'Tigers are courageous and active people who love a good challenge and adventure in life. They are kind and benevolent, with a rich emotional life. Sometimes they make impetuous decisions and are hard to control.', years: '1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022' },
  { name: 'Rabbit', pin: 'Tu', image: '/astro/chinese/rabbit.png', desc: 'Rabbits tend to be gentle, quiet, elegant, and alert as well as quick, skillful, kind, patient, and very responsible. They are faithful to those around them and possess a pure heart.', years: '1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023' },
  { name: 'Dragon', pin: 'Long', image: '/astro/chinese/dragon.png', desc: 'The Dragon is the most powerful and fascinating sign. Dragons are gifted with innate courage, tenacity, and intelligence. They are enthusiastic and confident, not afraid of challenges, and willing to take risks.', years: '1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024' },
  { name: 'Snake', pin: 'She', image: '/astro/chinese/snake.png', desc: 'Snakes are the most enigmatic animals in the Chinese zodiac. They are intuitive and act according to their own judgment while remaining private and reticent. They are very goal-oriented.', years: '1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025' },
  { name: 'Horse', pin: 'Ma', image: '/astro/chinese/horse.png', desc: 'People born in the Year of the Horse are extremely animated, active and energetic. Horses love to be in a crowd, and they can usually be seen on such occasions as concerts, theater performances, meetings, sporting events, and parties.', years: '1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026' },
  { name: 'Goat', pin: 'Yang', image: '/astro/chinese/goat.png', desc: 'Goats are generally believed to be gentle, mild-mannered, shy, stable, sympathetic, amicable, and brimming with a strong sense of kindheartedness and justice. They have very delicate thoughts.', years: '1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027' },
  { name: 'Monkey', pin: 'Hou', image: '/astro/chinese/monkey.png', desc: 'Monkeys are magnetic personalities and are very witty and intelligent. Personality traits like mischievousness, curiosity, and cleverness make them very naughty. They are masters of practical jokes.', years: '1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028' },
  { name: 'Rooster', pin: 'Ji', image: '/astro/chinese/rooster.png', desc: 'Roosters are very observant. Hardworking, resourceful, courageous, and talented, Roosters are very confident in themselves. They are always active, amusing, and popular within a crowd.', years: '1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029' },
  { name: 'Dog', pin: 'Gou', image: '/astro/chinese/dog.png', desc: 'Dogs are loyal and honest, amiable and kind, cautious and prudent. Due to having a strong sense of loyalty and sincerity, Dogs will do everything for the person who they think is most important.', years: '1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030' },
  { name: 'Pig', pin: 'Zhu', image: '/astro/chinese/pig.png', desc: 'Pigs are diligent, compassionate, and generous. They have great concentration: once they set a goal, they will devote all their energy to achieving it. They seldom seek help from others.', years: '1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031' },
];

export default function ChineseHoroscope({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { lang } = useContext(LanguageContext);
  const { isDark } = useContext(ThemeContext);

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-64 overflow-y-auto ${isDark ? 'bg-gray-800 text-white' : 'bg-[#fffcf5] text-[#0a4f23]'}`}>
      {/* Close Button */}
      <button
        onClick={onClose}
        className={`fixed top-6 right-6 z-70 w-12 h-12 backdrop-blur-md border rounded-full flex items-center justify-center transition-all shadow-xl hover:scale-110 active:scale-95 ${
          isDark ? 'bg-gray-800/80 border-white/10 text-white hover:bg-gray-700' : 'bg-white/80 border-[#0a4f23]/10 text-[#0a4f23] hover:bg-[#eef5f0]'
        }`}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Hero Section */}
      <div className="relative py-20 px-4 text-center">
        <ScrollReveal>
          <h1 className={`text-4xl md:text-7xl font-black mb-6 tracking-tight drop-shadow-xl ${isDark ? 'text-white' : 'text-[#0a4f23]'}`}>
            {lang === 'hi' ? 'चीनी राशि चक्र' : 'Chinese Zodiac Animals'}
          </h1>
          <p className={`text-lg md:text-2xl max-w-3xl mx-auto font-medium opacity-80 ${isDark ? 'text-amber-500' : 'text-amber-700'}`}>
            Do you know the secret personality traits of your Chinese sign?
          </p>
          <div className={`w-24 h-1.5 mx-auto mt-8 rounded-full ${isDark ? 'bg-amber-600' : 'bg-[#0a4f23]'}`}></div>
        </ScrollReveal>
      </div>

      {/* Intro Text */}
      <div className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-[#0a4f23]/70'}`}>
          The Chinese Zodiac, known as Shengxiao, is based on a twelve-year cycle, with each year in that cycle related to an animal sign. These signs are the Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Sheep, Monkey, Rooster, Dog and Pig. It is calculated according to the Chinese lunar calendar.
        </p>
      </div>

      {/* Animal Grid (Icons) */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-4">
          {animals.map((animal, i) => (
            <div key={i} className="text-center group cursor-pointer" onClick={() => document.getElementById(`animal-${animal.name}`)?.scrollIntoView({ behavior: 'smooth' })}>
              <div className={`w-full aspect-square rounded-full border-2 p-2 mb-2 transition-all group-hover:scale-110 group-hover:border-amber-500 ${isDark ? 'bg-gray-700/50 border-white/10' : 'bg-white border-[#0a4f23]/10'}`}>
                <div className="w-full h-full rounded-full bg-amber-500/20 flex items-center justify-center text-2xl">
                  <span className="grayscale group-hover:grayscale-0 transition-all">🏮</span>
                </div>
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest opacity-60 group-hover:opacity-100 group-hover:text-amber-500">{animal.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Sections */}
      <div className="max-w-7xl mx-auto px-6 space-y-32 mb-32">
        {animals.map((animal, i) => (
          <div key={i} id={`animal-${animal.name}`} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}>
            <div className="w-full md:w-1/2">
              <ScrollReveal>
                <div className={`relative aspect-square max-w-[400px] mx-auto rounded-3xl overflow-hidden border-4 ${isDark ? 'bg-gray-700/50 border-white/10' : 'bg-white border-amber-200'}`}>
                  <div className="absolute inset-0 bg-amber-500/5 flex items-center justify-center">
                    <span className="text-[120px] opacity-20">⛩️</span>
                  </div>
                  <div className="absolute inset-4 rounded-2xl border-2 border-dashed border-amber-500/30 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl md:text-8xl mb-4">🧧</div>
                      <h3 className="text-2xl font-black uppercase tracking-[0.2em]">{animal.name}</h3>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            <div className="w-full md:w-1/2 text-left">
              <ScrollReveal>
                <div className="flex items-baseline gap-4 mb-4">
                  <h2 className="text-4xl md:text-6xl font-black tracking-tight">{animal.name}</h2>
                  <span className="text-xl md:text-2xl font-bold text-amber-500 italic">({animal.pin})</span>
                </div>
                <div className={`h-1 w-20 mb-8 rounded-full ${isDark ? 'bg-amber-600' : 'bg-[#0a4f23]'}`}></div>
                <p className={`text-lg md:text-xl leading-relaxed mb-8 ${isDark ? 'text-gray-300' : 'text-[#0a4f23]/80'}`}>
                  {animal.desc}
                </p>
                <div className={`p-6 rounded-2xl border ${isDark ? 'bg-gray-900/50 border-white/10 text-amber-500' : 'bg-[#fff9e6] border-amber-200 text-amber-800'}`}>
                  <h4 className="font-black uppercase tracking-widest text-xs mb-2 opacity-60">Birth Years</h4>
                  <p className="font-bold">{animal.years}</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        ))}
      </div>

      {/* Services Section */}
      <div className={`py-24 ${isDark ? 'bg-gray-900/50' : 'bg-[#0a4f23]/5'}`}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase tracking-tight">Complimentary Astrology Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Free Kundli', 'Kundli Matching', 'Chat with Astrologer', 'Talk to Astrologer'].map((service, i) => (
              <div key={i} className={`p-8 rounded-3xl border transition-all hover:scale-105 hover:shadow-2xl cursor-pointer ${isDark ? 'bg-gray-800 border-white/10 hover:border-amber-500/50' : 'bg-white border-[#0a4f23]/10 hover:border-amber-500'}`}>
                <div className="text-4xl mb-4">✨</div>
                <h3 className="font-black text-sm uppercase tracking-wider">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Today's Horoscope Quick Links */}
      <div className="py-24 text-center">
        <h2 className="text-2xl font-black mb-12 uppercase tracking-[0.2em]">Today's Horoscope</h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {['Aries', 'Taurus', 'Gemini', 'Cancer'].map((sign, i) => (
            <div key={i} className="group cursor-pointer">
              <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full border-2 flex items-center justify-center text-3xl mb-4 transition-all group-hover:scale-110 group-hover:border-amber-500 ${isDark ? 'bg-gray-800 border-white/10' : 'bg-white border-[#0a4f23]/10'}`}>
                ♈
              </div>
              <span className="font-black uppercase text-xs tracking-widest opacity-60 group-hover:opacity-100 group-hover:text-amber-500">{sign}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
