import { Routes, Route, Navigate } from 'react-router'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import StorePage from './pages/StorePage'
import LifestylePage from './pages/LifestylePage'
import ArtPage from './pages/ArtPage'
import FactsPage from './pages/FactsPage'
import ReportPage from './pages/ReportPage'
import RehomePage from './pages/RehomePage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <>
      <ScrollToTop />
      {/* Matt's lake photo, fixed behind everything. Content scrolls over it */}
      <div
        aria-hidden
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/matt-lake.webp')" }}
      />
      <div aria-hidden className="fixed inset-0 -z-10 bg-ink/10" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/lifestyle" element={<LifestylePage />} />
        <Route path="/art" element={<ArtPage />} />
        <Route path="/facts" element={<FactsPage />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/rehome" element={<RehomePage />} />
        {/* Old URLs that may still be bookmarked or indexed */}
        <Route path="/mission" element={<Navigate to="/about" replace />} />
        <Route path="/outdoor" element={<Navigate to="/lifestyle" replace />} />
        <Route path="/faq" element={<Navigate to="/facts" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}
