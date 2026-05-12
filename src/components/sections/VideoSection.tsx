import { useState, useContext } from 'react';
import { LanguageContext, ThemeContext } from '../../App';

export default function VideoSection() {
  const [activeVideo, setActiveVideo] = useState(0);
  const { t, lang } = useContext(LanguageContext);
  const { isDark } = useContext(ThemeContext);

  const videos = [
    {
      id: 0,
      title: lang === 'hi' ? 'वैदिक प्राण प्रतिष्ठा प्रक्रिया' : 'Vedic Energization Process (प्राण प्रतिष्ठा)',
      description: lang === 'hi'
        ? 'हमारे विशेषज्ञ आचार्यों को रत्नों को आपके पास भेजने से पहले प्राचीन वैदिक मंत्रों और अनुष्ठानों के माध्यम से अभिमंत्रित करते हुए देखें, जिससे आपके जीवन पर अधिकतम सकारात्मक प्रभाव पड़े।'
        : 'Watch our expert acharyas energize the gemstones through ancient Vedic mantras and rituals before they are shipped to you, ensuring maximum positive impact on your life.',
      video: '/videos/_8772257.mp4',
      duration: '2:15',
      thumbnail: '/product/rudraksha.jpg',
      type: lang === 'hi' ? 'आध्यात्मिक' : 'Spiritual'
    },
    {
      id: 1,
      title: lang === 'hi' ? 'रत्न कटिंग और शिल्प कौशल' : 'The Art of Perfect Gemstone Cutting',
      description: lang === 'hi'
        ? 'देखें कि कैसे हमारे शिल्पकार और विश्व स्तरीय ज्वैलर्स पत्थरों को पूर्ण सटीकता, जुनून और कालातीत तकनीकों के साथ तराश कर उनकी प्राकृतिक चमक को बढ़ाते हैं।'
        : 'See how our master craftsmen and world-class jewellers bring rough stones to life with absolute precision, passion, and timeless techniques to enhance their natural brilliance.',
      video: '/videos/_8842171.mp4',
      duration: '3:40',
      thumbnail: '/product/emerald.jpg',
      type: lang === 'hi' ? 'शिल्प कौशल' : 'Craftsmanship'
    },
    {
      id: 2,
      title: lang === 'hi' ? '100% पारदर्शिता: लैब सर्टिफिकेट' : '100% Transparency: Lab Certification',
      description: lang === 'hi'
        ? 'हमारे कड़े गुणवत्ता नियंत्रण और स्वतंत्र लैब प्रमाणन प्रक्रिया के बारे में जानें। सरकार द्वारा अनुमोदित शीर्ष प्रयोगशालाओं में हर रत्न की शुद्धता जांची जाती है।'
        : 'Learn about our strict quality control and independent lab certification process. Every gemstone is verified for its 4Cs and astrological viability in top government-approved labs.',
      video: '/videos/_8889707.mp4',
      duration: '1:50',
      thumbnail: '/product/yellow-sapphire.jpg',
      type: lang === 'hi' ? 'क्वालिटी चेक' : 'Quality Check'
    }
  ];

  return (
    <section className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4 gradient-text-strong">{t.sections.video.title}</h2>
          <p className="text-xl text-amber-600 font-medium">Watch, Feel & Believe</p>
          <p className="text-amber-400 font-medium">Experience the Journey of Your Gemstone</p>
          <div className="w-24 h-1 bg-amber-700 mx-auto mt-6 rounded-full animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Main Video Player */}
          <div className="lg:col-span-2 glass-strong rounded-2xl overflow-hidden shadow-2xl border border-amber-600/20 animate-fadeIn">
            <div className="relative aspect-video bg-black group">
              {/* Real Video Element */}
              <video
                key={activeVideo}
                className="w-full h-full object-cover"
                poster={videos[activeVideo].thumbnail}
                controls
                preload="metadata"
              >
                <source src={videos[activeVideo].video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-xs font-semibold text-amber-600 flex items-center space-x-1 border border-amber-600/30">
                <span className="w-2 h-2 rounded-full bg-amber-700 animate-ping"></span>
                <span>FIX MY FUTURE EXCLUSIVE</span>
              </div>
            </div>

            <div className="p-6 bg-linear-to-b from-transparent to-gray-800/50">
              <span className={`text-sm font-bold tracking-wider uppercase ${isDark ? 'text-amber-600' : 'bg-emerald-700 text-white px-3 py-1 rounded-full'}`}>{videos[activeVideo].type}</span>
              <h3 className="text-2xl font-bold mt-1 mb-3 text-gray-100">{videos[activeVideo].title}</h3>
              <p className="text-slate-300 leading-relaxed">{videos[activeVideo].description}</p>
            </div>
          </div>

          {/* Video Playlist */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-bold text-lg mb-2 text-gray-200 px-1 flex items-center justify-between">
              <span>Up Next</span>
              <span className="text-xs font-normal text-slate-400">{videos.length} Videos Available</span>
            </h4>

            {videos.map((video, index) => (
              <button
                key={video.id}
                onClick={() => setActiveVideo(index)}
                className={`w-full flex items-center p-3 rounded-xl transition-all border text-left hover-3d ${index === activeVideo ? 'glass-strong border-amber-600 shadow-lg shadow-amber-600-500/10' : 'glass border-amber-600/20 hover:border-amber-600/40'}`}
              >
                <div className="relative w-24 h-16 rounded-lg overflow-hidden shrink-0">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${index === activeVideo ? 'bg-amber-700' : 'bg-slate-400/50 backdrop-blur-sm'}`}>
                      <svg className={`w-3 h-3 fill-current ${index === activeVideo ? 'text-white' : 'text-gray-200'}`} viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <span className="absolute bottom-1 right-1 glass px-1.5 py-0.5 rounded text-[10px] font-mono font-medium text-amber-400">
                    {video.duration}
                  </span>
                </div>

                <div className="ml-4 flex-1">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${isDark ? (index === activeVideo ? 'bg-amber-700 text-white' : 'bg-slate-700 text-slate-300') : 'bg-emerald-100 text-emerald-800 border border-emerald-200'}`}>
                    {video.type}
                  </span>
                  <h4 className={`font-semibold text-sm mt-1 line-clamp-1 ${index === activeVideo ? 'text-amber-600' : 'text-gray-200'}`}>
                    {video.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </button>
            ))}

            <div className="mt-4 p-4 rounded-xl glass border border-amber-600/20 text-center">
              <p className="text-sm text-slate-300 mb-3">Want a free live consultation or see a gemstone live over video call?</p>
              <button className="w-full btn-cyan text-gray-800 font-semibold py-2.5 px-4 rounded-lg text-sm transition-all duration-300 shadow-lg hover:shadow-amber-600-500/30">
                📲 Book Video Call Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
