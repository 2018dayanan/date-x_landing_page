import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Download from './components/Download';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Download />
      <Footer />
    </div>
  );
}

export default App;