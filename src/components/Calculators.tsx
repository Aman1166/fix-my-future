import { useContext, useState } from 'react';
import { LanguageContext } from '../App';
import NameNumerologyCalculator from './calculators/NameNumerologyCalculator';
import SunSignCalculator from './calculators/SunSignCalculator';
import MoonSignCalculator from './calculators/MoonSignCalculator';
import RisingCalculator from './calculators/RisingCalculator';
import BirthChartCalculator from './calculators/BirthChartCalculator';
import MangalDoshaCalculator from './calculators/MangalDoshaCalculator';
import ShaniSadeSatiCalculator from './calculators/ShaniSadeSatiCalculator';
import IshtaDevataCalculator from './calculators/IshtaDevataCalculator';
import NakshatraCalculator from './calculators/NakshatraCalculator';
import MoonPhaseCalculator from './calculators/MoonPhaseCalculator';
import AtmakarakaCalculator from './calculators/AtmakarakaCalculator';
import FlamesCalculator from './calculators/FlamesCalculator';
import LuckyVehicleCalculator from './calculators/LuckyVehicleCalculator';
import LoShuGridCalculator from './calculators/LoShuGridCalculator';
import FriendshipCalculator from './calculators/FriendshipCalculator';
import KaalSarpDoshCalculator from './calculators/KaalSarpDoshCalculator';
import DashaCalculator from './calculators/DashaCalculator';
import TransitChartCalculator from './calculators/TransitChartCalculator';
import LoveCalculator from './calculators/LoveCalculator';

export default function Calculators({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { lang } = useContext(LanguageContext);
  const [activeCalculator, setActiveCalculator] = useState<string | null>(null);

  const calculators = [
    { id: 'love', icon: '❤️', title: lang === 'hi' ? 'लव कैल्कुलेटर' : 'Love Calculator', component: LoveCalculator },
    { id: 'name-numerology', icon: '🔢', title: lang === 'hi' ? 'नाम न्यूमेरोलॉजी कैल्कुलेटर' : 'Name Numerology Calculator', component: NameNumerologyCalculator },
    { id: 'sun-sign', icon: '☀️', title: lang === 'hi' ? 'सूर्य राशि कैल्कुलेटर' : 'Sun Sign Calculator', component: SunSignCalculator },
    { id: 'moon-sign', icon: '🌙', title: lang === 'hi' ? 'राशि/चंद्र राशि कैल्कुलेटर' : 'Rashi/Moon Sign Calculator', component: MoonSignCalculator },
    { id: 'rising', icon: '⬆️', title: lang === 'hi' ? 'उदय/आरोही कैल्कुलेटर' : 'Rising/Ascendant Calculator', component: RisingCalculator },
    { id: 'birth-chart', icon: '🔮', title: lang === 'hi' ? 'जन्म कुंडली/नैटल चार्ट कैल्कुलेटर' : 'Birth Chart/Natal Chart Calculator', component: BirthChartCalculator },
    { id: 'mangal-dosha', icon: '🔥', title: lang === 'hi' ? 'मंगल दोष कैल्कुलेटर' : 'Mangal Dosha Calculator', component: MangalDoshaCalculator },
    { id: 'shani-sade-sati', icon: '🪐', title: lang === 'hi' ? 'शनि साडे साती कैल्कुलेटर' : 'Shani Sade Sati Calculator', component: ShaniSadeSatiCalculator },
    { id: 'ishta-devata', icon: '🙏', title: lang === 'hi' ? 'इष्ट देवता कैल्कुलेटर' : 'Ishta Devata Calculator', component: IshtaDevataCalculator },
    { id: 'nakshatra', icon: '🌟', title: lang === 'hi' ? 'नक्षत्र कैल्कुलेटर' : 'Nakshatra Calculator', component: NakshatraCalculator },
    { id: 'moon-phase', icon: '🌑', title: lang === 'hi' ? 'चंद्र चरण कैल्कुलेटर' : 'Moon Phase Calculator', component: MoonPhaseCalculator },
    { id: 'atmakaraka', icon: '🧭', title: lang === 'hi' ? 'आत्मकरक और दाराकरक कैल्कुलेटर' : 'Atmakaraka & Darakaraka Calculator', component: AtmakarakaCalculator },
    { id: 'flames', icon: '🔥', title: lang === 'hi' ? 'फ्लेम्स कैल्कुलेटर' : 'Flames Calculator', component: FlamesCalculator },
    { id: 'lucky-vehicle', icon: '🚗', title: lang === 'hi' ? 'लकी व्हीकल नंबर कैल्कुलेटर' : 'Lucky Vehicle Number Calculator', component: LuckyVehicleCalculator },
    { id: 'lo-shu-grid', icon: '🧮', title: lang === 'hi' ? 'लो शू ग्रिड कैल्कुलेटर' : 'Lo Shu Grid Calculator', component: LoShuGridCalculator },
    { id: 'friendship', icon: '👫', title: lang === 'hi' ? 'फ्रेंडशिप कैल्कुलेटर' : 'Friendship Calculator', component: FriendshipCalculator },
    { id: 'kaal-sarp-dosh', icon: '🐍', title: lang === 'hi' ? 'काल सर्प दोष कैल्कुलेटर' : 'Kaal Sarp Dosh Calculator', component: KaalSarpDoshCalculator },
    { id: 'dasha', icon: '🕉️', title: lang === 'hi' ? 'दशा कैल्कुलेटर' : 'Dasha Calculator', component: DashaCalculator },
    { id: 'transit-chart', icon: '🛰️', title: lang === 'hi' ? 'ट्रांजिट चार्ट कैल्कुलेटर' : 'Transit Chart Calculator', component: TransitChartCalculator },
  ];

  const handleCalculatorClick = (id: string) => {
    setActiveCalculator(id);
  };

  const handleBackToMain = () => {
    setActiveCalculator(null);
  };

  const getActiveComponent = () => {
    const calculator = calculators.find(calc => calc.id === activeCalculator);
    if (!calculator) return null;

    const Component = calculator.component;
    return <Component isOpen={true} onClose={handleBackToMain} />;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[64] overflow-y-auto bg-gray-800">
      <button
        onClick={onClose}
        className="fixed top-6 right-6 z-30 w-12 h-12 bg-gray-800/80 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-all shadow-xl hover:scale-110 active:scale-95"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {activeCalculator ? (
        getActiveComponent()
      ) : (
        <>
          <div className="relative h-[32vh] md:h-[40vh] overflow-hidden">
            <div className="absolute inset-0 bg-[url('/astro/g.jpeg')] bg-cover bg-center">
              <div className="absolute inset-0 bg-gradient-to-b from-gray-800/60 via-gray-950/40 to-gray-900"></div>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <span className="text-5xl md:text-7xl mb-4 animate-float">🧮</span>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-3 tracking-tight drop-shadow-xl animate-slideInUp">
                {lang === 'hi' ? 'ज्योतिष कैल्कुलेटर' : 'Astrology Calculators'}
              </h1>
              <div className="w-20 h-1 bg-amber-700 mt-6 rounded-full"></div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
            {/* Description */}
            <div className="bg-gray-800/80 backdrop-blur-md rounded-2xl border border-white/10 p-6 mb-8">
              <p className="text-gray-300 text-lg leading-relaxed text-center">
                {lang === 'hi'
                  ? 'हमारे ज्योतिष कैल्कुलेटरों के संग्रह के साथ अपने भाग्य के रहस्यों को अनलॉक करें। व्यक्तित्व, रिश्तों और जीवन पथ में अंतर्दृष्टि प्राप्त करें।'
                  : 'Unlock the secrets of your destiny with our astrology calculators. Get insights into personality, relationships, and life path.'}
              </p>
            </div>

            {/* Calculators Grid */}
            <div className="bg-gray-800/80 backdrop-blur-md rounded-2xl border border-white/10 p-8">
              <h3 className="text-white font-black text-2xl mb-8 text-center">
                {lang === 'hi' ? 'अपना कैल्कुलेटर चुनें' : 'Choose Your Calculator'}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {calculators.map((calc, index) => (
                  <div
                    key={index}
                    className="bg-gray-700/50 backdrop-blur-md rounded-2xl border border-white/10 hover:border-amber-600/50 p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-600-500/20 group"
                  >
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                        {calc.icon}
                      </div>
                      <h4 className="text-white font-bold text-lg mb-2 group-hover:text-amber-600-300 transition-colors">
                        {calc.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {lang === 'hi' ? 'अपना कैल्कुलेशन प्राप्त करें' : 'Get your calculation'}
                      </p>
                    </div>

                    <button
                      onClick={() => handleCalculatorClick(calc.id)}
                      className="w-full bg-gradient-to-r from-amber-600-500 to-blue-500 hover:from-amber-600-600 hover:to-blue-600 text-gray-800 font-bold py-3 px-4 rounded-xl transition-all shadow-lg hover:shadow-amber-600-500/30 text-sm tracking-wider uppercase"
                    >
                      {lang === 'hi' ? 'अभी कैल्कुलेट करें' : 'Calculate Now'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}