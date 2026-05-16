import { useContext, useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { LanguageContext, ThemeContext } from '../App';
import { ScrollReveal } from '../components/Animations';

const zodiacSigns = [
  { name: 'Aries', slug: 'aries', dates: 'Mar 21 - Apr 19', planet: 'Mars', element: 'Fire', icon: '♈' },
  { name: 'Taurus', slug: 'taurus', dates: 'Apr 20 - May 20', planet: 'Venus', element: 'Earth', icon: '♉' },
  { name: 'Gemini', slug: 'gemini', dates: 'May 21 - Jun 20', planet: 'Mercury', element: 'Air', icon: '♊' },
  { name: 'Cancer', slug: 'cancer', dates: 'Jun 21 - Jul 22', planet: 'Moon', element: 'Water', icon: '♋' },
  { name: 'Leo', slug: 'leo', dates: 'Jul 23 - Aug 22', planet: 'Sun', element: 'Fire', icon: '♌' },
  { name: 'Virgo', slug: 'virgo', dates: 'Aug 23 - Sep 22', planet: 'Mercury', element: 'Earth', icon: '♍' },
  { name: 'Libra', slug: 'libra', dates: 'Sep 23 - Oct 22', planet: 'Venus', element: 'Air', icon: '♎' },
  { name: 'Scorpio', slug: 'scorpio', dates: 'Oct 23 - Nov 21', planet: 'Mars', element: 'Water', icon: '♏' },
  { name: 'Sagittarius', slug: 'sagittarius', dates: 'Nov 22 - Dec 21', planet: 'Jupiter', element: 'Fire', icon: '♐' },
  { name: 'Capricorn', slug: 'capricorn', dates: 'Dec 22 - Jan 19', planet: 'Saturn', element: 'Earth', icon: '♑' },
  { name: 'Aquarius', slug: 'aquarius', dates: 'Jan 20 - Feb 18', planet: 'Uranius', element: 'Air', icon: '♒' },
  { name: 'Pisces', slug: 'pisces', dates: 'Feb 19 - Mar 20', planet: 'Neptune', element: 'Water', icon: '♓' },
];

const signCelebrities: Record<string, any[]> = {
  libra: [
    { name: 'Amitabh Bachchan', date: 'October 11, 1942', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf_1v9v9v9v9v9v9v9v9v9v9v9v9v9v9v9v&s' },
    { name: 'Parineeti Chopra', date: 'October 22, 1988', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf_2v9v9v9v9v9v9v9v9v9v9v9v9v9v9v9v&s' },
    { name: 'Mallika Sherawat', date: 'October 24, 1981', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf_3v9v9v9v9v9v9v9v9v9v9v9v9v9v9v9v&s' },
    { name: 'Asin', date: 'October 26, 1985', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf_4v9v9v9v9v9v9v9v9v9v9v9v9v9v9v9v&s' },
  ],
  aries: [
    { name: 'Ajay Devgn', date: 'April 2, 1969', img: '' },
    { name: 'Rashmika Mandanna', date: 'April 5, 1996', img: '' },
    { name: 'Akshaye Khanna', date: 'March 28, 1975', img: '' },
    { name: 'Lara Dutta', date: 'April 16, 1978', img: '' },
  ]
  // Fallback celebrities can be added for other signs
};

const horoscopeTypes = [
  { name: "Today's Horoscope", slug: 'today' },
  { name: 'Daily Horoscope', slug: 'daily' },
  { name: "Tomorrow's Horoscope", slug: 'tomorrow' },
  { name: "Yesterday's Horoscope", slug: 'yesterday' },
  { name: 'Weekly Horoscope', slug: 'weekly' },
  { name: 'Monthly Horoscope', slug: 'monthly' },
  { name: 'Annual Horoscope', slug: 'yearly' },
];

export default function HoroscopeDetailsPage() {
  const { type, sign } = useParams();
  const navigate = useNavigate();
  const { lang } = useContext(LanguageContext);
  const { isDark } = useContext(ThemeContext);

  const currentSign = zodiacSigns.find(s => s.slug === sign?.toLowerCase()) || zodiacSigns[6]; // Default Libra
  const currentType = horoscopeTypes.find(t => t.slug === type?.toLowerCase()) || horoscopeTypes[0];

  const today = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type, sign]);

  const sections = [
    {
      title: 'Overview',
      content: `${currentSign.name}, ruled by ${currentSign.planet}, embodies the ${currentSign.element.toLowerCase()} element's intellectual grace combined with beauty-seeking nature. Your cardinal quality drives you toward initiating harmony, diplomatic solutions, and aesthetic perfection. As the scales of the zodiac, you naturally weigh all perspectives before making balanced decisions.`
    },
    {
      title: 'Love & Relationships',
      content: 'Singles encounter potential connections through intellectual conversations or artistic venues today. Existing relationships deepen when you share financial goals or future home plans. Physical affection takes precedence over words—a meaningful touch communicates more than lengthy discussions. Couples benefit from creating beauty together, perhaps redecorating a shared space or cooking an elaborate meal.'
    },
    {
      title: 'Personal Life',
      content: "Saturday's Saturn energy calls for mature self-assessment today. The waxing gibbous moon illuminates areas where you've compromised too much of your authentic self. May's springtime renewal invites you to redefine personal boundaries without guilt. A decision about your living space or personal appearance seeks resolution now."
    },
    {
      title: 'Career & Finance',
      content: 'Professional recognition comes through collaborative achievements rather than solo efforts. Your diplomatic skills resolve a workplace tension that others have avoided addressing. Documentation and written agreements deserve extra attention today. Creative projects benefit from constructive criticism—invite feedback from trusted colleagues before final presentations.'
    },
    {
      title: 'Health & Wellness',
      content: 'Your lower back and kidneys need gentle care this Saturday. Incorporate stretching exercises focusing on spinal flexibility, particularly cat-cow poses or gentle twists. Hydration is crucial—aim for warm herbal teas throughout the day. Balance vigorous activity with restorative practices. Evening yoga or tai chi harmonizes your energy beautifully.'
    },
    {
      title: 'Emotions & Mind',
      content: 'Relationships challenge you to express difficult truths with grace today. The waxing moon in your sector of transformation asks: what emotional patterns are you ready to release? Family conversations may require you to mediate fairly without taking sides. Journaling about recent disappointments brings unexpected clarity and emotional closure.'
    },
    {
      title: 'Lucky Insights',
      content: 'Your fortunate numbers today are 4, 13, 22, 31, 38, and 45. Luck surfaces in partnerships and collaborative ventures rather than solo pursuits. Financial fortune appears through negotiation skills and finding win-win solutions. Romantic luck peaks during evening hours when Venus\'s influence strengthens your magnetic charm.'
    },
    {
      title: 'Travel & Movement',
      content: 'Local journeys within your community offer unexpected social connections this Saturday. Consider visiting art galleries, botanical gardens, or cultural centers nearby. Evening hours between 6-8 PM favor short drives for pleasure. Postpone long-distance planning for midweek when Mercury\'s influence strengthens your itinerary decisions.'
    },
    {
      title: 'Remedies',
      content: 'Wear sage green or dusty rose today to attract Saturn\'s stabilizing wisdom. Carry a piece of jade or green aventurine to support balanced decision-making. Burn sandalwood incense at sunset while meditating on equilibrium. Consume pears or green apples to align with Venus\'s harmony. Face west during important conversations.'
    }
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header Section */}
      <div className={`py-12 border-b ${isDark ? 'bg-gray-900 border-white/5' : 'bg-white border-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h1 className={`text-3xl md:text-5xl font-black mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {currentSign.name} {currentType.name}
            </h1>
            <p className={`text-lg font-bold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{today}</p>
            <div className="mt-6 flex justify-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-3xl shadow-xl shadow-yellow-400/20">
                {currentSign.icon}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-80 shrink-0 space-y-8">
            {/* Sign Dropdown */}
            <div className={`p-6 rounded-3xl border ${isDark ? 'bg-gray-800/50 border-white/5' : 'bg-white border-gray-100 shadow-sm'}`}>
              <h3 className={`text-sm font-black uppercase tracking-widest mb-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Select Other Sign</h3>
              <select 
                value={currentSign.slug}
                onChange={(e) => navigate(`/horoscope/${currentType.slug}/${e.target.value}`)}
                className={`w-full p-3 rounded-xl border font-bold focus:ring-2 focus:ring-amber-500 outline-none transition-all ${isDark ? 'bg-gray-900 border-white/10 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'}`}
              >
                {zodiacSigns.map(s => (
                  <option key={s.slug} value={s.slug}>{s.name}</option>
                ))}
              </select>
            </div>

            {/* Type Navigation */}
            <div className={`p-6 rounded-3xl border ${isDark ? 'bg-gray-800/50 border-white/5' : 'bg-white border-gray-100 shadow-sm'}`}>
              <h3 className={`text-sm font-black uppercase tracking-widest mb-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Horoscopes:</h3>
              <div className="space-y-1">
                {horoscopeTypes.map(t => (
                  <Link
                    key={t.slug}
                    to={`/horoscope/${t.slug}/${currentSign.slug}`}
                    className={`block px-4 py-3 rounded-xl font-bold transition-all ${currentType.slug === t.slug 
                      ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/20 translate-x-2' 
                      : `${isDark ? 'text-gray-400 hover:text-white hover:bg-white/5' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}`}
                  >
                    {t.name}
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 space-y-12">
            <ScrollReveal>
              <div className={`p-8 rounded-[40px] border transition-all ${isDark ? 'bg-gray-800/30 border-white/5' : 'bg-white border-gray-100 shadow-sm'}`}>
                <h2 className={`text-2xl font-black mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{currentSign.name} {currentType.name}</h2>
                <p className="text-amber-500 font-bold italic mb-8">({currentSign.dates})</p>

                <div className="space-y-10">
                  {sections.map(section => (
                    <div key={section.title}>
                      <h3 className={`text-lg font-black mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{section.title}</h3>
                      <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{section.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* CTA Banner */}
            <ScrollReveal>
              <div className="bg-yellow-400 rounded-[40px] p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10 max-w-lg text-center md:text-left">
                  <p className="text-gray-900 text-xl md:text-2xl font-bold leading-tight">
                    Connect with an Astrologer on Call or Chat for more personalised detailed predictions.
                  </p>
                </div>
                <div className="relative z-10 flex flex-col gap-4 w-full md:w-auto">
                  <button className="px-8 py-4 bg-gray-900 text-white rounded-full font-black text-sm uppercase tracking-widest shadow-xl flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all">
                    <span>📞</span> Talk to Astrologer
                  </button>
                  <button className="px-8 py-4 bg-gray-900 text-white rounded-full font-black text-sm uppercase tracking-widest shadow-xl flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all">
                    <span>💬</span> Chat with Astrologer
                  </button>
                </div>
              </div>
            </ScrollReveal>

            {/* Read for other signs */}
            <section className="space-y-8">
              <h2 className={`text-3xl font-black text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>Read for other signs</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {zodiacSigns.map(s => (
                  <Link 
                    key={s.slug}
                    to={`/horoscope/${currentType.slug}/${s.slug}`}
                    className="flex flex-col items-center group"
                  >
                    <div className={`w-24 h-24 md:w-32 md:h-32 rounded-full border-[6px] flex items-center justify-center text-4xl md:text-5xl transition-all mb-4 group-hover:scale-110 ${isDark ? 'bg-gray-800 border-yellow-400' : 'bg-gray-50 border-yellow-400 shadow-xl'}`}>
                      {s.icon}
                    </div>
                    <span className={`font-black uppercase tracking-widest text-sm transition-colors ${isDark ? 'text-gray-400 group-hover:text-amber-500' : 'text-gray-600 group-hover:text-amber-600'}`}>
                      {s.name}
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            {/* In-depth Insights Section */}
            <ScrollReveal>
              <div className="space-y-12">
                <section className="space-y-6">
                  <h2 className={`text-3xl font-black text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>{currentSign.name.toUpperCase()} CHARACTERISTICS</h2>
                  <div className="space-y-8">
                    <div>
                      <h3 className={`text-lg font-black mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Diplomatic</h3>
                      <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        The {currentSign.name.toLowerCase()} horoscope today notes that the natives will seek harmony and peace at every point of their life. Love to be in balance at all times, the natives know what's wrong and what's right and try to bring their point to attention without hurting anyone's feelings. They usually are the peacemakers of the group or relationship and their diplomatic nature is often appreciated by everyone around them.
                      </p>
                    </div>
                    <div>
                      <h3 className={`text-lg font-black mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Fair</h3>
                      <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        The scale that is a symbol for the {currentSign.name.toLowerCase()} is a giveaway of the strong personality of the {currentSign.name}s as they are very passionate about being equal and cannot fathom anyone being left out or not treated equally. Today's horoscope for {currentSign.name.toLowerCase()} highlights that they want justice to be served at all costs no matter the consequences.
                      </p>
                    </div>
                    <div>
                      <h3 className={`text-lg font-black mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Idealist</h3>
                      <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        The natives of {currentSign.name} are known to be the most idealistic people and no matter what the situation is, they will always find the bright side even in the darkest of times. This makes them extremely likeable as they bring hope to those going through hard times.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="space-y-6">
                  <h2 className={`text-3xl font-black text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>WHAT {currentSign.name.toUpperCase()} LIKE THE MOST?</h2>
                  <div className="space-y-8">
                    <div>
                      <h3 className={`text-lg font-black mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Social</h3>
                      <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Today's {currentSign.name.toLowerCase()} horoscope hints at a very common personality trait of a {currentSign.name.toLowerCase()} native which is socialising and connecting with people. They hate being alone and sulking at their home and want to be out and about with their group and partner.
                      </p>
                    </div>
                    <div>
                      <h3 className={`text-lg font-black mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Meditating</h3>
                      <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {currentSign.name} horoscope for today indicates that {currentSign.name.toLowerCase()} natives tend to interfere in people's business quite a bit. They love to meditate a lot to find solutions for those in need of help, but will only interfere if things do not hurt them.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Celebrities Section */}
                <section className="space-y-12 py-12 border-y border-gray-200 dark:border-white/5">
                  <h2 className={`text-3xl font-black text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>{currentSign.name.toUpperCase()} CELEBRITIES</h2>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {(signCelebrities[currentSign.slug] || signCelebrities.aries).map((celeb, idx) => (
                      <div key={idx} className="flex flex-col items-center text-center">
                        <div className="w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-[6px] border-yellow-400 shadow-2xl mb-6 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105">
                          {celeb.img ? (
                             <img src={celeb.img} alt={celeb.name} className="w-full h-full object-cover" />
                          ) : (
                             <div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-4xl">🎭</div>
                          )}
                        </div>
                        <h4 className={`text-lg font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>{celeb.name}</h4>
                        <p className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-gray-500' : 'text-gray-400'} mt-1`}>{celeb.date}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="space-y-12">
                   <h2 className={`text-3xl font-black text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>{currentSign.name.toUpperCase()} {currentType.name.toUpperCase()}</h2>
                   <div className="space-y-8">
                      <div>
                         <h3 className={`text-lg font-black mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{currentSign.name} career horoscope</h3>
                         <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            A very important aspect of life, {currentSign.name}s put their careers above everything. Today's {currentSign.name.toLowerCase()} horoscope highlights how these natives usually have a good fortune in terms of career and profession. Opportunities knock at their door so they should be ready to grab them and not miss the chance.
                         </p>
                      </div>
                      <div>
                         <h3 className={`text-lg font-black mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{currentSign.name} love horoscope</h3>
                         <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            Everyone knows about {currentSign.name}s and their love for being in love and that applies to {currentSign.name.toLowerCase()} {currentType.name.toLowerCase()}. They will get the opportunity to do many different things with their loved ones.
                         </p>
                      </div>
                      <div>
                         <h3 className={`text-lg font-black mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{currentSign.name} health horoscope</h3>
                         <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            Health is a nagging concern for everyone and this is something one just cannot avoid. Taking good care of health is important if one wants to move forward with their dreams and goals. {currentSign.name}'s horoscope today is for the one who is a fitness freak and would like to keep a track of their health what-so-ever.
                         </p>
                      </div>
                      <div>
                         <h3 className={`text-lg font-black mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{currentSign.name} compatibility horoscope</h3>
                         <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            {currentSign.name}s are highly intellectual people and someone who is a great company. They like socialising and being in big groups. This is exactly what they look for in a partner, someone who has similar intelligence and with whom they can discuss their thoughts and ideas.
                         </p>
                      </div>
                      <div>
                         <h3 className={`text-lg font-black mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{currentSign.name} finance horoscope</h3>
                         <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            Because of your creative ways of thinking, you will find out many different ways to make money in life. Making a stable foundation is very important for your business, highlights today's horoscope for {currentSign.name.toLowerCase()}.
                         </p>
                      </div>
                   </div>
                </section>

                {/* FAQ Section */}
                <section className="space-y-12">
                   <h2 className={`text-3xl font-black text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>{currentSign.name.toUpperCase()} TODAY'S HOROSCOPE - FAQS</h2>
                   <div className="space-y-10">
                      <div>
                         <h4 className={`text-lg font-black mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>What are {currentSign.name.toLowerCase()} characteristics?</h4>
                         <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            Those born between the dates of {currentSign.dates} are known to have the {currentSign.name.toLowerCase()} as their zodiac sign. These people tend to be extremely creative and intelligent and their way of thinking impresses everyone.
                         </p>
                      </div>
                      <div>
                         <h4 className={`text-lg font-black mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{currentSign.name} represents which animal?</h4>
                         <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            {currentSign.name}s are well known for their qualities of being peacemakers and love to keep harmony among the people around them. This is why the animal, or more like the bird that resonates the most with them is the raven or the grey wolf.
                         </p>
                      </div>
                      <div>
                         <h4 className={`text-lg font-black mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>What is {currentSign.name}'s personality like?</h4>
                         <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            One of the most sociable people among all the zodiac signs, {currentSign.name}s love hanging out with people and getting to know their personalities. Highly intuitive, they can easily get out of a tricky situation just by turning on their charm.
                         </p>
                      </div>
                      <div>
                         <h4 className={`text-lg font-black mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{currentSign.name} dates?</h4>
                         <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            People born on or between {currentSign.dates} are {currentSign.name.toLowerCase()}.
                         </p>
                      </div>
                      <div>
                         <h4 className={`text-lg font-black mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>What are {currentSign.name}'s weaknesses?</h4>
                         <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            {currentSign.name}s are obsessed with keeping everything in balance and prefer things to be perfect most of the time. The love for aesthetics sometimes gets in their way as they spend a lot of time calculating the pros and cons of every decision.
                         </p>
                      </div>
                      <div>
                         <h4 className={`text-lg font-black mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>What planet rules {currentSign.name}?</h4>
                         <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            {currentSign.name} is ruled by the planet {currentSign.planet}.
                         </p>
                      </div>
                   </div>
                </section>
              </div>
            </ScrollReveal>

            {/* Compatibility Section */}
            <section className="bg-yellow-400 rounded-[40px] p-8 md:p-12 space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-black text-gray-900 uppercase">
                  {currentSign.name} Compatibility With Other Signs
                </h2>
                <p className="text-gray-800 font-bold mt-2">Check your relationship compatibility</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {zodiacSigns.slice(0, 4).map(s => (
                  <Link 
                    key={s.slug}
                    to="/compatibility"
                    className="bg-white p-4 rounded-full flex items-center justify-center gap-3 shadow-lg hover:scale-105 transition-all"
                  >
                    <div className="flex -space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gray-50 border-2 border-yellow-400 flex items-center justify-center text-xl">{currentSign.icon}</div>
                      <div className="w-12 h-12 rounded-full bg-gray-50 border-2 border-yellow-400 flex items-center justify-center text-xl">{s.icon}</div>
                    </div>
                    <span className="font-black text-gray-900 text-xs uppercase tracking-tighter">
                      {currentSign.name} & {s.name}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
