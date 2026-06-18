import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Competitions from './sections/Competitions';
import Leaderboard from './sections/Leaderboard';
import UserJourney from './sections/UserJourney';
import BotLeagueInfo from './sections/BotLeagueInfo';
import Sports from './sections/Sports';
import WhyRegister from './sections/WhyRegister';
import JoinForm from './sections/JoinForm';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'events', 'ranks', 'user-journey', 'botleague-info', 'sports', 'why-register', 'join-form'];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId === 'hero' ? 'hero' : sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      {/* 1. Navbar */}
      <Navbar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        scrollToSection={scrollToSection} 
      />

      {/* 2. Hero Section */}
      <Hero 
        onExploreClick={() => scrollToSection('events')} 
        onCreateAccountClick={() => scrollToSection('join-form')} 
      />

      {/* 3. Competition Page Component */}
      <Competitions onRegisterClick={() => scrollToSection('join-form')} />

      {/* 4. Ranks Leaderboard Section */}
      <Leaderboard />

      {/* 5. User Journey Roadmap */}
      <UserJourney onRegisterClick={() => scrollToSection('join-form')} />

      {/* 6. BotLeague Core Info */}
      <BotLeagueInfo />

      {/* 7. Sports (Robot Sport Disciplines) */}
      <Sports />

      {/* 8. Why Register Benefits Grid */}
      <WhyRegister />

      {/* 9. Registration/Join Form */}
      <JoinForm />

      {/* 10. Footer */}
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

