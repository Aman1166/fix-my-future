import { useState, useContext } from 'react';
import { LanguageContext, ThemeContext } from '../App';
import { ScrollReveal } from '../components/Animations';

interface RechargePack {
  id: number;
  amount: number;
  extra: number;
  popular?: boolean;
}

const rechargePacks: RechargePack[] = [
  { id: 1, amount: 100, extra: 0 },
  { id: 2, amount: 200, extra: 20 },
  { id: 3, amount: 500, extra: 75, popular: true },
  { id: 4, amount: 1000, extra: 200 },
  { id: 5, amount: 2000, extra: 500 },
  { id: 6, amount: 5000, extra: 1500 },
];

export default function WalletPage({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { lang } = useContext(LanguageContext);
  const { isDark } = useContext(ThemeContext);
  const [balance] = useState(0);

  const history = [
    { id: 1, type: 'Recharge', amount: 500, date: '2026-05-10', status: 'Success' },
    { id: 2, type: 'Consultation', amount: -150, date: '2026-05-12', status: 'Success' },
    { id: 3, type: 'Consultation', amount: -75, date: '2026-05-14', status: 'Success' },
  ];

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-64 overflow-y-auto ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Close Button */}
      <button
        onClick={onClose}
        className={`fixed top-6 right-6 z-100 w-12 h-12 backdrop-blur-md border rounded-full flex items-center justify-center transition-all shadow-xl hover:scale-110 active:scale-95 ${isDark ? 'bg-gray-800/80 border-white/10 text-white hover:bg-gray-700' : 'bg-white/80 border-gray-200 text-gray-900 hover:bg-gray-100'}`}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Hero */}
      <div className="relative h-[30vh] md:h-[35vh] overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-indigo-900 via-purple-900 to-amber-900 opacity-80"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-5xl md:text-7xl mb-4 animate-float">💳</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-3 tracking-tight drop-shadow-xl animate-slideInUp">
            {lang === 'hi' ? 'मेरा वॉलेट' : 'My Wallet'}
          </h1>
          <div className="w-20 h-1 bg-amber-500 mt-6 rounded-full"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 -mt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Balance Card */}
          <div className="lg:col-span-1">
            <ScrollReveal>
              <div className={`p-8 rounded-3xl border shadow-2xl ${isDark ? 'glass border-white/10' : 'bg-white border-gray-100'}`}>
                <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {lang === 'hi' ? 'उपलब्ध बैलेंस' : 'Available Balance'}
                </h3>
                <div className="flex items-baseline space-x-2 mb-6">
                  <span className={`text-5xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>₹{balance}</span>
                </div>
                <div className={`p-4 rounded-xl border border-dashed ${isDark ? 'border-amber-500/30 bg-amber-500/5' : 'border-amber-200 bg-amber-50'}`}>
                   <p className={`text-xs ${isDark ? 'text-amber-400' : 'text-amber-700'}`}>
                      {lang === 'hi' ? '✦ ज्योतिषियों से बात करने के लिए रिचार्ज करें' : '✦ Recharge to talk with top astrologers'}
                   </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Recharge Packs */}
          <div className="lg:col-span-2">
            <ScrollReveal delay={100}>
              <div className={`p-8 rounded-3xl border shadow-2xl ${isDark ? 'glass border-white/10' : 'bg-white border-gray-100'}`}>
                <h3 className={`text-xl font-black mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {lang === 'hi' ? 'रिचार्ज पैक' : 'Recharge Packs'}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {rechargePacks.map(pack => (
                    <button
                      key={pack.id}
                      className={`relative p-6 rounded-2xl border text-center transition-all hover:scale-105 active:scale-95 group ${pack.popular ? 'border-amber-500 ring-2 ring-amber-500/20' : 'border-white/10 hover:border-amber-500/50'} ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`}
                    >
                      {pack.popular && (
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-gray-900 text-[10px] font-black px-3 py-1 rounded-full uppercase">
                          Popular
                        </span>
                      )}
                      <div className={`text-2xl font-black mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>₹{pack.amount}</div>
                      {pack.extra > 0 && (
                        <div className="text-[10px] font-bold text-green-500 uppercase">
                          +{pack.extra} Extra
                        </div>
                      )}
                    </button>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                   <h4 className={`text-sm font-bold mb-4 uppercase tracking-widest ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      {lang === 'hi' ? 'सुरक्षित भुगतान' : 'Secure Payment Methods'}
                   </h4>
                   <div className="flex flex-wrap gap-6 grayscale opacity-50">
                      <div className="text-2xl">💳</div>
                      <div className="text-2xl">🏦</div>
                      <div className="text-2xl">📱</div>
                      <div className="text-2xl">💵</div>
                   </div>
                </div>
              </div>
            </ScrollReveal>

            {/* History */}
            <ScrollReveal delay={200}>
              <div className={`mt-8 p-8 rounded-3xl border shadow-2xl overflow-hidden ${isDark ? 'glass border-white/10' : 'bg-white border-gray-100'}`}>
                <h3 className={`text-xl font-black mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {lang === 'hi' ? 'लेनदेन का इतिहास' : 'Transaction History'}
                </h3>
                <div className="overflow-x-auto">
                   <table className="w-full text-left">
                      <thead>
                        <tr className={`border-b ${isDark ? 'border-white/10' : 'border-gray-100'}`}>
                           <th className="pb-4 font-bold text-xs uppercase tracking-wider text-gray-500">Date</th>
                           <th className="pb-4 font-bold text-xs uppercase tracking-wider text-gray-500">Type</th>
                           <th className="pb-4 font-bold text-xs uppercase tracking-wider text-gray-500 text-right">Amount</th>
                           <th className="pb-4 font-bold text-xs uppercase tracking-wider text-gray-500 text-right">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                         {history.map(item => (
                           <tr key={item.id}>
                              <td className={`py-4 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{item.date}</td>
                              <td className={`py-4 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{item.type}</td>
                              <td className={`py-4 text-sm font-bold text-right ${item.amount > 0 ? 'text-green-500' : (isDark ? 'text-white' : 'text-gray-900')}`}>
                                 {item.amount > 0 ? `+₹${item.amount}` : `-₹${Math.abs(item.amount)}`}
                              </td>
                              <td className="py-4 text-right">
                                 <span className="text-[10px] font-bold px-2 py-1 bg-green-500/20 text-green-500 rounded-full uppercase border border-green-500/30">
                                    {item.status}
                                 </span>
                              </td>
                           </tr>
                         ))}
                      </tbody>
                   </table>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
