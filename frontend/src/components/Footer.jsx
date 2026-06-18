// import React from 'react';

// export default function Footer({ scrollToSection }) {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="footer">
//       <div className="container footer-container">
        
//         {/* Left column: Brand Info */}
//         <div className="footer-brand-col">
//           <div className="footer-logo" onClick={() => scrollToSection('hero')}>
//             {/* Minimal SVG Logo */}
//             <svg viewBox="0 0 420 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="footer-logo-svg">
//               <path d="M20 15 L48 15 L20 43 Z" fill="#FFC837" />
//               <path d="M20 63 L48 35 L48 63 Z" fill="#FFC837" />
//               <path d="M70 20 H92 C102 20 108 24 108 30 C108 35 104 38 98 39 C106 41 110 45 110 52 C110 59 103 63 92 63 H70 V20 Z M82 28 V36 H90 C95 36 97 34 97 32 C97 30 95 28 90 28 H82 Z M82 43 V55 H91 C96 55 99 53 99 49 C99 45 96 43 91 43 H82 Z" fill="#0072ff" />
//               <path d="M140 41.5 C140 48.4 134.4 54 127.5 54 C120.6 54 115 48.4 115 41.5 C115 34.6 120.6 29 127.5 29 C134.4 29 140 34.6 140 41.5 Z" stroke="#0072ff" strokeWidth="8" />
//               <path d="M127.5 19 V25 M127.5 58 V64 M105 41.5 H111 M144 41.5 H150" stroke="#0072ff" strokeWidth="6" strokeLinecap="round" />
//               <circle cx="127.5" cy="41.5" r="4.5" fill="#0072ff" />
//               <path d="M152 20 H185 V29 H174 V63 H163 V29 H152 V20 Z" fill="#0072ff" />
//               <path d="M190 20 H201 V54 H222 V63 H190 V20 Z" fill="#FF3C5F" />
//               <path d="M228 20 H252 V29 H239 V37 H250 V46 H239 V54 H252 V63 H228 V20 Z" fill="#FF3C5F" />
//               <path d="M190 73 H260" stroke="#0072ff" strokeWidth="4" />
//               <path d="M76 10 H150" stroke="#FF3C5F" strokeWidth="4" />
//             </svg>
//           </div>
//           <p className="footer-desc">
//             India's ultimate robotics battle ecosystem. Building the hardware sport of the future.
//           </p>
//           <div className="footer-socials">
//             <a href="https://discord.gg" target="_blank" rel="noopener noreferrer" className="social-icon discord" title="Discord">
//               D
//             </a>
//             <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon youtube" title="YouTube">
//               Y
//             </a>
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram" title="Instagram">
//               I
//             </a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter" title="Twitter">
//               X
//             </a>
//           </div>
//         </div>

//         {/* Center column: Shortcuts */}
//         <div className="footer-links-col">
//           <h4>Navigate</h4>
//           <div className="footer-links">
//             <button onClick={() => scrollToSection('hero')}>Home</button>
//             <button onClick={() => scrollToSection('events')}>Events</button>
//             <button onClick={() => scrollToSection('sports')}>Programs</button>
//             <button onClick={() => scrollToSection('botleague-info')}>Community</button>
//             <button onClick={() => scrollToSection('ranks')}>Leaderboards</button>
//             <button onClick={() => scrollToSection('join-form')}>Register Bot</button>
//           </div>
//         </div>

//         {/* Right column: Newsletter */}
//         <div className="footer-newsletter-col">
//           <h4>Newsletter</h4>
//           <p>Get event notices, rule updates, and stream bracket alerts.</p>
//           <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert('Subscribed!'); }}>
//             <input 
//               type="email" 
//               placeholder="e.g. pilot@teamares.com" 
//               required 
//             />
//             <button type="submit" className="btn btn-primary btn-sm">JOIN</button>
//           </form>
//         </div>

//       </div>

//       {/* Bottom bar */}
//       <div className="footer-bottom">
//         <div className="container footer-bottom-container">
//           <span>&copy; {currentYear} BotLeague India. All rights reserved.</span>
//           <div className="footer-legal-links">
//             <a href="#privacy">Privacy Policy</a>
//             <span className="dot-divider" />
//             <a href="#rules">Rulebook v4.2</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
import React from "react";
import {
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer({ scrollToSection }) {
  const sponsors = [
    {
      name: "NIT DELHI",
      logo: "https://via.placeholder.com/90x90",
    },
    {
      name: "INDIAN BIT",
      logo: "https://via.placeholder.com/90x90",
    },
    {
      name: "NIT SILCHAR",
      logo: "https://via.placeholder.com/90x90",
    },
    {
      name: "ROBO COMPANY",
      logo: "https://via.placeholder.com/120x50",
    },
    {
      name: "IIT BOMBAY",
      logo: "https://via.placeholder.com/90x90",
    },
    {
      name: "ROBO COMPANY",
      logo: "https://via.placeholder.com/120x50",
    },
  ];

  return (
    <footer className="footer">
      <div className="container">

        {/* Sponsors */}
        <div className="footer-sponsors">
          <h2>SPONSORS</h2>

          <div className="sponsors-grid">
            {sponsors.map((item, index) => (
              <div className="sponsor-item" key={index}>
                <img src={item.logo} alt={item.name} />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-divider"></div>

        {/* Bottom Footer */}
        <div className="footer-main">

          <div className="footer-links-section">
            <h3>QUICK LINKS</h3>

            <div className="footer-links-grid">
              <div>
                <button onClick={() => scrollToSection("hero")}>
                  The Arena
                </button>

                <button onClick={() => scrollToSection("events")}>
                  Episodes
                </button>

                <button onClick={() => scrollToSection("ranks")}>
                  National Rankings
                </button>

                <button onClick={() => scrollToSection("sports")}>
                  Programs
                </button>

                <button>Rulebooks</button>
              </div>

              <div>
                <button>Join the Team</button>
                <button>Sponsorships</button>
                <button>Help Center</button>
                <button>Contact Us</button>
                <button>Legal</button>
              </div>
            </div>
          </div>

          <div className="footer-social-section">
            <h3>SOCIAL MEDIA</h3>

            <div className="footer-socials">
              <a href="/">
                <FaYoutube />
              </a>

              <a href="/">
                <FaInstagram />
              </a>

              <a href="/">
                <FaFacebookF />
              </a>

              <a href="/">
                <FaXTwitter />
              </a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} BotLeague India. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}