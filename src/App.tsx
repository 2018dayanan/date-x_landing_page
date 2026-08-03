import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import StreamingPolicies from './components/StreamingPolicies';
import Download from './components/Download';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import AccountDeletion from './components/AccountDeletion';
import ChildSafety from './components/ChildSafety';
import ReferralRedirect from './components/ReferralRedirect';
import BackgroundOrbs from './components/BackgroundOrbs';
import './index.css';

const Home = () => (
  <div className="app">
    <BackgroundOrbs />
    <Navbar />
    <Hero />
    <Features />
    <HowItWorks />
    <StreamingPolicies />
    <Download />
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/delete-account" element={<AccountDeletion />} />
        <Route path="/child-safety" element={<ChildSafety />} />
        <Route path="/r/:code" element={<ReferralRedirect />} />
        <Route path="/r" element={<ReferralRedirect />} />
      </Routes>
    </Router>
  );
}

export default App;