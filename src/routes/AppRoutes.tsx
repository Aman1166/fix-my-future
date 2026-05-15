import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import { lazy, Suspense } from 'react';

// Lazy load heavy components
const FreeKundli = lazy(() => import('../pages/FreeKundli'));
const KundliMatching = lazy(() => import('../pages/KundliMatching'));
const Compatibility = lazy(() => import('../pages/Compatibility'));
const Calculators = lazy(() => import('../pages/Calculators'));
const TodaysHoroscope = lazy(() => import('../pages/TodaysHoroscope'));
const DailyHoroscope = lazy(() => import('../pages/DailyHoroscope'));
const WeeklyHoroscope = lazy(() => import('../pages/WeeklyHoroscope'));
const MonthlyHoroscope = lazy(() => import('../pages/MonthlyHoroscope'));
const YearlyHoroscope = lazy(() => import('../pages/YearlyHoroscope'));
const TomorrowHoroscope = lazy(() => import('../pages/TomorrowHoroscope'));
const YesterdayHoroscope = lazy(() => import('../pages/YesterdayHoroscope'));
const ChineseHoroscope = lazy(() => import('../pages/ChineseHoroscope'));
const BestAstrologers = lazy(() => import('../pages/BestAstrologers'));
const ChatWithAstrologer = lazy(() => import('../pages/ChatWithAstrologer'));
const TalkToAstrologer = lazy(() => import('../pages/TalkToAstrologer'));
const PanchangPage = lazy(() => import('../pages/PanchangPage'));
const ProductCategoryPage = lazy(() => import('../pages/ProductCategoryPage'));
const ShopNowPage = lazy(() => import('../pages/ShopNowPage'));
const InformationPage = lazy(() => import('../pages/InformationPage'));
const TarotPage = lazy(() => import('../pages/TarotPage'));
const WalletPage = lazy(() => import('../pages/WalletPage'));
const KundliResultPage = lazy(() => import('../pages/KundliResultPage'));

const Loading = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-amber-500 font-bold">Loading...</div>;

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          
          {/* Astrology Tools */}
          <Route path="/kundli" element={<FreeKundli isOpen={true} onClose={() => window.history.back()} />} />
          <Route path="/matching" element={<KundliMatching isOpen={true} onClose={() => window.history.back()} />} />
          <Route path="/compatibility" element={<Compatibility isOpen={true} onClose={() => window.history.back()} />} />
          <Route path="/calculators" element={<Calculators isOpen={true} onClose={() => window.history.back()} />} />
          <Route path="/panchang" element={<PanchangPage isOpen={true} onClose={() => window.history.back()} />} />

          {/* Horoscopes */}
          <Route path="/horoscope/today" element={<TodaysHoroscope isOpen={true} onClose={() => window.history.back()} />} />
          <Route path="/horoscope/daily" element={<DailyHoroscope isOpen={true} onClose={() => window.history.back()} />} />
          <Route path="/horoscope/weekly" element={<WeeklyHoroscope isOpen={true} onClose={() => window.history.back()} />} />
          <Route path="/horoscope/monthly" element={<MonthlyHoroscope isOpen={true} onClose={() => window.history.back()} />} />
          <Route path="/horoscope/yearly" element={<YearlyHoroscope isOpen={true} onClose={() => window.history.back()} />} />
          <Route path="/horoscope/tomorrow" element={<TomorrowHoroscope isOpen={true} onClose={() => window.history.back()} />} />
          <Route path="/horoscope/yesterday" element={<YesterdayHoroscope isOpen={true} onClose={() => window.history.back()} />} />
          <Route path="/horoscope/chinese" element={<ChineseHoroscope isOpen={true} onClose={() => window.history.back()} />} />

          {/* Astrologers */}
          <Route path="/astrologers" element={<BestAstrologers isOpen={true} onClose={() => window.history.back()} />} />
          <Route path="/chat" element={<ChatWithAstrologer isOpen={true} onClose={() => window.history.back()} />} />
          <Route path="/talk" element={<TalkToAstrologer isOpen={true} onClose={() => window.history.back()} />} />

          {/* Shop */}
          <Route path="/shop" element={<ShopNowPage isOpen={true} onClose={() => window.history.back()} />} />
          <Route path="/shop/gemstones" element={<ProductCategoryPage isOpen={true} onClose={() => window.history.back()} category="gemstones" categoryTitle="Gemstones" categoryIcon="💎" products={[]} />} />
          <Route path="/shop/rudraksha" element={<ProductCategoryPage isOpen={true} onClose={() => window.history.back()} category="rudraksha" categoryTitle="Rudraksha" categoryIcon="📿" products={[]} />} />
          <Route path="/shop/bracelets" element={<ProductCategoryPage isOpen={true} onClose={() => window.history.back()} category="bracelets" categoryTitle="Bracelets" categoryIcon="✨" products={[]} />} />
          
          {/* Info Pages */}
          <Route path="/about" element={<InformationPage isOpen={true} onClose={() => window.history.back()} page="about" />} />
          <Route path="/contact" element={<InformationPage isOpen={true} onClose={() => window.history.back()} page="contact" />} />
          <Route path="/faq" element={<InformationPage isOpen={true} onClose={() => window.history.back()} page="faq" />} />
          <Route path="/shipping" element={<InformationPage isOpen={true} onClose={() => window.history.back()} page="shipping" />} />
          <Route path="/returns" element={<InformationPage isOpen={true} onClose={() => window.history.back()} page="returns" />} />
          <Route path="/terms" element={<InformationPage isOpen={true} onClose={() => window.history.back()} page="terms" />} />
          <Route path="/policy" element={<InformationPage isOpen={true} onClose={() => window.history.back()} page="policy" />} />
          <Route path="/pooja" element={<InformationPage isOpen={true} onClose={() => window.history.back()} page="pooja" />} />
          <Route path="/store" element={<InformationPage isOpen={true} onClose={() => window.history.back()} page="store" />} />
          <Route path="/blogs" element={<InformationPage isOpen={true} onClose={() => window.history.back()} page="blogs" />} />
          
          {/* New Pages */}
          <Route path="/tarot" element={<TarotPage isOpen={true} onClose={() => window.history.back()} />} />
          <Route path="/wallet" element={<WalletPage isOpen={true} onClose={() => window.history.back()} />} />
          <Route path="/kundli/details" element={<KundliResultPage isOpen={true} onClose={() => window.history.back()} formData={{}} />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
