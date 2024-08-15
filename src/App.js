import React , { useState } from 'react';
import IntroScreen from './components/IntroScreen';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';


function App() {
    const [nameVisible, setNameVisible] = useState(false);
    const [heroVisible, setHeroVisible] = useState(false);
  
    const handleAnimationEnd = () => {
      setNameVisible(true);
      setHeroVisible(true);
    };
  return (
    <div className="App">
      {!nameVisible && <IntroScreen onAnimationEnd={handleAnimationEnd} />}
      <Navbar nameVisible={nameVisible} />
      <HeroSection heroVisible={heroVisible}/>
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
