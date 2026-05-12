import { useContext } from 'react';
import { LanguageContext, ThemeContext } from '../../App';

export default function AboutSection() {
  const { t, lang } = useContext(LanguageContext);
  const { isDark } = useContext(ThemeContext);

  return (
    <section className={`py-16 ${isDark ? 'bg-linear-to-b from-gray-800 to-gray-800' : 'glass-strong border-t border-[#083f1d]/15'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center gradient-text-strong">{t.sections.about.title}</h2>
          <p className={`leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-emerald-900/80 font-medium'}`}>
            {lang === 'hi'
              ? `रत्नों को प्राचीन काल से ही उनकी सुंदरता और ग्रहों की ऊर्जा के साथ उनके जुड़ाव के लिए जाना जाता है। ${t.brandName} में, हम एक भरोसेमंद ऑनलाइन रत्न स्टोर प्रस्तुत करते हैं जहाँ आप रत्न आभूषण और ज्योतिषीय उद्देश्यों के लिए उपयुक्त प्राकृतिक रत्न पा सकते हैं।`
              : `Gemstones have been known since ancient times for their beauty and their association with planetary energies. At ${t.brandName}, we present a trustworthy online gemstone store where you can find natural gemstones suitable for gemstone jewelry and astrology purposes.`
            }
          </p>
          <p className={`leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-emerald-900/80 font-medium'}`}>
            {lang === 'hi'
              ? `हमारे संग्रह के हर रत्न को रत्न मानकों के अनुसार सावधानीपूर्वक चुना और सत्यापित किया जाता है। हम प्रमाणित रत्न भी प्रदान करते हैं जो आपके रत्न की वास्तविक गुणवत्ता और प्रामाणिकता की पुष्टि करने के लिए एक स्वतंत्र लैब प्रमाणपत्र के साथ आते हैं। इनका उपयोग आमतौर पर वैदिक ज्योतिष में ग्रहों की शक्तियों को सुधारने के उपाय के रूप में किया जाता है।`
              : `Every gemstone in our collection is carefully chosen and verified as per gemstone norms. We also provide certified gemstones that carry an independent lab certificate to confirm the true quality and authenticity of your gemstone, which are commonly used in Vedic Astrology as remedies to improve planetary powers.`
            }
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className={`p-6 rounded-xl shadow-xl border ${isDark ? 'glass-strong border-white/5' : 'bg-white border-emerald-100'}`}>
              <h3 className="font-bold text-lg mb-3 text-amber-600">{lang === 'hi' ? 'लोकप्रिय रत्न' : 'Popular Gemstones'}</h3>
              <ul className={`space-y-2 ${isDark ? 'text-slate-300' : 'text-emerald-950'}`}>
                <li>• <strong className={`${isDark ? 'text-amber-400' : 'text-emerald-900'}`}>{lang === 'hi' ? 'पुखराज (Yellow Sapphire)' : 'Yellow Sapphire'}</strong> - {lang === 'hi' ? 'ज्ञान और समृद्धि' : 'Wisdom & Prosperity'}</li>
                <li>• <strong className={`${isDark ? 'text-amber-400' : 'text-emerald-900'}`}>{lang === 'hi' ? 'नीलम (Blue Sapphire)' : 'Blue Sapphire'}</strong> - {lang === 'hi' ? 'स्थिरता और प्रगति' : 'Stability & Progress'}</li>
                <li>• <strong className={`${isDark ? 'text-amber-400' : 'text-emerald-900'}`}>{lang === 'hi' ? 'माणिक्य (Ruby)' : 'Ruby'}</strong> - {lang === 'hi' ? 'आत्मविश्वास और नेतृत्व' : 'Confidence & Leadership'}</li>
                <li>• <strong className={`${isDark ? 'text-amber-400' : 'text-emerald-900'}`}>{lang === 'hi' ? 'पन्ना (Emerald)' : 'Emerald'}</strong> - {lang === 'hi' ? 'बुद्धि और विकास' : 'Intelligence & Growth'}</li>
              </ul>
            </div>
            <div className={`p-6 rounded-xl shadow-xl border ${isDark ? 'glass-strong border-white/5' : 'bg-white border-emerald-100'}`}>
              <h3 className="font-bold text-lg mb-3 text-amber-600">{lang === 'hi' ? 'हमें क्यों चुनें' : 'Why Choose Us'}</h3>
              <ul className={`space-y-2 ${isDark ? 'text-slate-300' : 'text-emerald-950'}`}>
                <li>• {lang === 'hi' ? 'प्राकृतिक एवं प्रमाणित रत्न' : 'Natural & Certified Gemstones'}</li>
                <li>• {lang === 'hi' ? 'ज्योतिष आधारित मार्गदर्शन' : 'Astrology-Based Guidance'}</li>
                <li>• {lang === 'hi' ? 'विस्तृत रत्न संग्रह उपलब्ध' : 'Wide Collection Available'}</li>
                <li>• {lang === 'hi' ? 'सुरक्षित खरीदारी का अनुभव' : 'Secure Shopping Experience'}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
