import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ activeSection, setActiveSection, scrollToSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'events', label: 'Events' },
    { id: 'sports', label: 'Programs' },
    { id: 'botleague-info', label: 'Community' },
    { id: 'ranks', label: 'Ranks' }
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    scrollToSection(sectionId);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* SVG Logo matching image2.png */}
        <div className="logo-wrapper" onClick={() => handleNavClick('hero')}>
          <svg className="botleague-logo" viewBox="0 0 420 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Left Yellow Accent Triangles */}
            <path d="M20 15 L48 15 L20 43 Z" fill="#FFC837" />
            <path d="M20 63 L48 35 L48 63 Z" fill="#FFC837" />
            
            {/* BOT Text in Blue */}
            {/* B */}
            <path d="M70 20 H92 C102 20 108 24 108 30 C108 35 104 38 98 39 C106 41 110 45 110 52 C110 59 103 63 92 63 H70 V20 Z M82 28 V36 H90 C95 36 97 34 97 32 C97 30 95 28 90 28 H82 Z M82 43 V55 H91 C96 55 99 53 99 49 C99 45 96 43 91 43 H82 Z" fill="#0072ff" />
            
            {/* O - Gear Shape */}
            <path d="M140 41.5 C140 48.4 134.4 54 127.5 54 C120.6 54 115 48.4 115 41.5 C115 34.6 120.6 29 127.5 29 C134.4 29 140 34.6 140 41.5 Z" stroke="#0072ff" strokeWidth="8" />
            {/* Gear teeth */}
            <path d="M127.5 19 V25 M127.5 58 V64 M105 41.5 H111 M144 41.5 H150 M111.5 25.5 L116 30 M139 53 L143.5 57.5 M111.5 57.5 L116 53 M139 30 L143.5 25.5" stroke="#0072ff" strokeWidth="6" strokeLinecap="round" />
            {/* Inner dot */}
            <circle cx="127.5" cy="41.5" r="4.5" fill="#0072ff" />

            {/* T */}
            <path d="M152 20 H185 V29 H174 V63 H163 V29 H152 V20 Z" fill="#0072ff" />

            {/* LEAGUE Text in Red */}
            <path d="M190 20 H201 V54 H222 V63 H190 V20 Z" fill="#FF3C5F" />
            <path d="M228 20 H252 V29 H239 V37 H250 V46 H239 V54 H252 V63 H228 V20 Z" fill="#FF3C5F" />
            <path d="M259 20 L273 63 H262 L259 53 H246 L243 63 H232 L246 20 H259 Z M257 44 L252.5 30 L248 44 H257 Z" fill="#FF3C5F" />
            <path d="M294 41.5 C294 54 286 65 273 65 C260 65 251 54 251 41.5 C251 29 261 18 274 18 C284 18 292 23 293.5 32 H282 C281 28.5 278 26.5 273.5 26.5 C267 26.5 262.5 32.5 262.5 41.5 C262.5 50.5 267 56.5 273.5 56.5 C279 56.5 282 53.5 282.5 48.5 H273 V40 H294 V41.5 Z" fill="#FF3C5F" />
            <path d="M302 20 V49 C302 58 307 64 316 64 C325 64 330 58 330 49 V20 H319 V49 C319 54 317.5 55.5 316 55.5 C314.5 55.5 313 54 313 49 V20 H302 Z" fill="#FF3C5F" />
            <path d="M336 20 H360 V29 H347 V37 H358 V46 H347 V54 H360 V63 H336 V20 Z" fill="#FF3C5F" />

            {/* Overlines and Underlines matching logo */}
            {/* Blue Underline under LEAGUE */}
            <path d="M190 73 H364" stroke="#0072ff" strokeWidth="4" />
            {/* Red Overline over BOT */}
            <path d="M76 10 H195" stroke="#FF3C5F" strokeWidth="4" />

            {/* Right Yellow Accent Triangles */}
            <path d="M380 37 L398 37 L380 49 Z" fill="#FFC837" />
            <path d="M398 63 L398 47 L380 63 Z" fill="#FFC837" />
          </svg>
        </div>

        {/* Desktop Nav Links */}
        <div className="navbar-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`nav-link-btn ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
              {activeSection === item.id && <span className="nav-link-underline" />}
            </button>
          ))}
        </div>

        {/* Navbar Action Buttons */}
        <div className="navbar-actions">
          <button className="btn-login" onClick={() => alert('Login coming soon!')}>LOGIN</button>
          <button className="btn-register" onClick={() => handleNavClick('join-form')}>REGISTER NOW</button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
          <div className="mobile-menu-actions">
            <button className="btn-login-mobile" onClick={() => { setMobileMenuOpen(false); alert('Login coming soon!'); }}>LOGIN</button>
            <button className="btn-register-mobile" onClick={() => handleNavClick('join-form')}>REGISTER NOW</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
