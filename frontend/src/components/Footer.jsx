// // import React from 'react';

// // export default function Footer({ scrollToSection }) {
// //   const currentYear = new Date().getFullYear();

// //   return (
// //     <footer className="footer">
// //       <div className="container footer-container">
        
// //         {/* Left column: Brand Info */}
// //         <div className="footer-brand-col">
// //           <div className="footer-logo" onClick={() => scrollToSection('hero')}>
// //             {/* Minimal SVG Logo */}
// //             <svg viewBox="0 0 420 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="footer-logo-svg">
// //               <path d="M20 15 L48 15 L20 43 Z" fill="#FFC837" />
// //               <path d="M20 63 L48 35 L48 63 Z" fill="#FFC837" />
// //               <path d="M70 20 H92 C102 20 108 24 108 30 C108 35 104 38 98 39 C106 41 110 45 110 52 C110 59 103 63 92 63 H70 V20 Z M82 28 V36 H90 C95 36 97 34 97 32 C97 30 95 28 90 28 H82 Z M82 43 V55 H91 C96 55 99 53 99 49 C99 45 96 43 91 43 H82 Z" fill="#0072ff" />
// //               <path d="M140 41.5 C140 48.4 134.4 54 127.5 54 C120.6 54 115 48.4 115 41.5 C115 34.6 120.6 29 127.5 29 C134.4 29 140 34.6 140 41.5 Z" stroke="#0072ff" strokeWidth="8" />
// //               <path d="M127.5 19 V25 M127.5 58 V64 M105 41.5 H111 M144 41.5 H150" stroke="#0072ff" strokeWidth="6" strokeLinecap="round" />
// //               <circle cx="127.5" cy="41.5" r="4.5" fill="#0072ff" />
// //               <path d="M152 20 H185 V29 H174 V63 H163 V29 H152 V20 Z" fill="#0072ff" />
// //               <path d="M190 20 H201 V54 H222 V63 H190 V20 Z" fill="#FF3C5F" />
// //               <path d="M228 20 H252 V29 H239 V37 H250 V46 H239 V54 H252 V63 H228 V20 Z" fill="#FF3C5F" />
// //               <path d="M190 73 H260" stroke="#0072ff" strokeWidth="4" />
// //               <path d="M76 10 H150" stroke="#FF3C5F" strokeWidth="4" />
// //             </svg>
// //           </div>
// //           <p className="footer-desc">
// //             India's ultimate robotics battle ecosystem. Building the hardware sport of the future.
// //           </p>
// //           <div className="footer-socials">
// //             <a href="https://discord.gg" target="_blank" rel="noopener noreferrer" className="social-icon discord" title="Discord">
// //               D
// //             </a>
// //             <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon youtube" title="YouTube">
// //               Y
// //             </a>
// //             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram" title="Instagram">
// //               I
// //             </a>
// //             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter" title="Twitter">
// //               X
// //             </a>
// //           </div>
// //         </div>

// //         {/* Center column: Shortcuts */}
// //         <div className="footer-links-col">
// //           <h4>Navigate</h4>
// //           <div className="footer-links">
// //             <button onClick={() => scrollToSection('hero')}>Home</button>
// //             <button onClick={() => scrollToSection('events')}>Events</button>
// //             <button onClick={() => scrollToSection('sports')}>Programs</button>
// //             <button onClick={() => scrollToSection('botleague-info')}>Community</button>
// //             <button onClick={() => scrollToSection('ranks')}>Leaderboards</button>
// //             <button onClick={() => scrollToSection('join-form')}>Register Bot</button>
// //           </div>
// //         </div>

// //         {/* Right column: Newsletter */}
// //         <div className="footer-newsletter-col">
// //           <h4>Newsletter</h4>
// //           <p>Get event notices, rule updates, and stream bracket alerts.</p>
// //           <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert('Subscribed!'); }}>
// //             <input 
// //               type="email" 
// //               placeholder="e.g. pilot@teamares.com" 
// //               required 
// //             />
// //             <button type="submit" className="btn btn-primary btn-sm">JOIN</button>
// //           </form>
// //         </div>

// //       </div>

// //       {/* Bottom bar */}
// //       <div className="footer-bottom">
// //         <div className="container footer-bottom-container">
// //           <span>&copy; {currentYear} BotLeague India. All rights reserved.</span>
// //           <div className="footer-legal-links">
// //             <a href="#privacy">Privacy Policy</a>
// //             <span className="dot-divider" />
// //             <a href="#rules">Rulebook v4.2</a>
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }
// import React from "react";
// import {
//   FaYoutube,
//   FaInstagram,
//   FaFacebookF,
//   FaXTwitter,
// } from "react-icons/fa6";

// export default function Footer({ scrollToSection }) {
//   const sponsors = [
//     {
//       name: "NIT DELHI",
//       logo: "https://via.placeholder.com/90x90",
//     },
//     {
//       name: "INDIAN BIT",
//       logo: "https://via.placeholder.com/90x90",
//     },
//     {
//       name: "NIT SILCHAR",
//       logo: "https://via.placeholder.com/90x90",
//     },
//     {
//       name: "ROBO COMPANY",
//       logo: "https://via.placeholder.com/120x50",
//     },
//     {
//       name: "IIT BOMBAY",
//       logo: "https://via.placeholder.com/90x90",
//     },
//     {
//       name: "ROBO COMPANY",
//       logo: "https://via.placeholder.com/120x50",
//     },
//   ];

//   return (
//     <footer className="footer">
//       <div className="container">

//         {/* Sponsors */}
//         <div className="footer-sponsors">
//           <h2>SPONSORS</h2>

//           <div className="sponsors-grid">
//             {sponsors.map((item, index) => (
//               <div className="sponsor-item" key={index}>
//                 <img src={item.logo} alt={item.name} />
//                 <span>{item.name}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="footer-divider"></div>

//         {/* Bottom Footer */}
//         <div className="footer-main">

//           <div className="footer-links-section">
//             <h3>QUICK LINKS</h3>

//             <div className="footer-links-grid">
//               <div>
//                 <button onClick={() => scrollToSection("hero")}>
//                   The Arena
//                 </button>

//                 <button onClick={() => scrollToSection("events")}>
//                   Episodes
//                 </button>

//                 <button onClick={() => scrollToSection("ranks")}>
//                   National Rankings
//                 </button>

//                 <button onClick={() => scrollToSection("sports")}>
//                   Programs
//                 </button>

//                 <button>Rulebooks</button>
//               </div>

//               <div>
//                 <button>Join the Team</button>
//                 <button>Sponsorships</button>
//                 <button>Help Center</button>
//                 <button>Contact Us</button>
//                 <button>Legal</button>
//               </div>
//             </div>
//           </div>

//           <div className="footer-social-section">
//             <h3>SOCIAL MEDIA</h3>

//             <div className="footer-socials">
//               <a href="/">
//                 <FaYoutube />
//               </a>

//               <a href="/">
//                 <FaInstagram />
//               </a>

//               <a href="/">
//                 <FaFacebookF />
//               </a>

//               <a href="/">
//                 <FaXTwitter />
//               </a>
//             </div>
//           </div>

//         </div>

//         <div className="footer-bottom">
//           © {new Date().getFullYear()} BotLeague India. All Rights Reserved.
//         </div>

//       </div>
//     </footer>
//   );
// }
import React from "react";
import indianBitLogo from "../assets/60c7b8dab737b0fb205fb5b0015442b472a94218 (1).png";
import indianBitLogo1 from "../assets/44812c3e2f5b1082bb41af1e5a346e5e1e1995a7 (1).png";
import indianBitLogo2 from "../assets/0b313f713b5fd3b54528834182d4322275661ece (1).png";
import indianBitLogo3 from "../assets/1fa5abc8959eb870e4b8c138d0cc75922e54202b.png";
import indianBitLogo4 from "../assets/2ed5bad4bcf29d909899df964770b6b2adc71b91.png";
import indianBitLogo5 from "../assets/821b20485c728e14612f1c4e0c3ee68daa2d4de9.png";



import {
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer({ scrollToSection }) {
  const sponsors = [
    { name: "NIT DELHI",    logo: indianBitLogo1 },
    { name: "INDIAN BIT",   logo: indianBitLogo },
    { name: "NIT SILCHAR",  logo: indianBitLogo2 },
    { name: "ROBO COMPANY", logo: indianBitLogo3 },
    { name: "IIT BOMBAY",   logo: indianBitLogo4 },
    { name: "ROBO COMPANY", logo: indianBitLogo5 },
  ];

  const quickLinksLeft = [
    { label: "The Arena",        section: "hero" },
    { label: "Episodes",         section: "events" },
    { label: "National Rankings",section: "ranks" },
    { label: "Programs",         section: "sports" },
    { label: "Rulebooks",        section: null },
  ];

  const quickLinksRight = [
    { label: "Join the Team",  section: null },
    { label: "Sponsorships",   section: null },
    { label: "Help Center",    section: null },
    { label: "Contact Us",     section: null },
    { label: "Legal",          section: null },
  ];

  return (
    <>
      <style>{`
        .bl-footer {
          background: #0d0d0d;
          color: #fff;
          font-family: 'Barlow', 'Rajdhani', 'Inter', sans-serif;
          padding: 60px 0 0;
        }

        .bl-footer .bl-container {
          max-width: 1040px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ── SPONSORS ── */
        .bl-sponsors-heading {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: #fff;
          margin: 0 0 36px;
          text-transform: uppercase;
        }

        .bl-sponsors-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          row-gap: 40px;
          column-gap: 0;
          margin-bottom: 52px;
        }

        .bl-sponsor-item {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .bl-sponsor-item img {
          width: 100px;
          height: 100px;
          object-fit: contain;
          filter: grayscale(1) brightness(0.75);
          flex-shrink: 0;
        }

        .bl-sponsor-item span {
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #ccc;
          text-transform: uppercase;
          line-height: 1.25;
        }

        /* ── DIVIDER ── */
        .bl-footer-divider {
          border: none;
          border-top: 1px solid #2a2a2a;
          margin: 0 0 48px;
        }

        /* ── MAIN ROW ── */
        .bl-footer-main {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 40px;
          padding-bottom: 48px;
        }

        /* ── QUICK LINKS ── */
        .bl-ql-heading {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: #fff;
          text-transform: uppercase;
          margin: 0 0 24px;
        }

        .bl-ql-grid {
          display: grid;
          grid-template-columns: repeat(2, 160px);
          gap: 0;
        }

        .bl-ql-col {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .bl-ql-col button {
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          text-align: left;
          font-size: 15px;
          color: #aaa;
          font-family: inherit;
          transition: color 0.2s;
        }

        .bl-ql-col button:hover {
          color: #fff;
        }

        /* ── SOCIAL MEDIA ── */
        .bl-social-section {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .bl-social-heading {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: #fff;
          text-transform: uppercase;
          margin: 0 0 24px;
        }

        .bl-socials {
          display: flex;
          gap: 16px;
        }

        .bl-socials a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 1.5px solid #333;
          color: #aaa;
          font-size: 20px;
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s;
        }

        .bl-socials a:hover {
          border-color: #777;
          color: #fff;
        }

        /* ── BOTTOM BAR ── */
        .bl-footer-bottom {
          border-top: 1px solid #1e1e1e;
          padding: 18px 24px;
          text-align: center;
          font-size: 13px;
          color: #555;
          letter-spacing: 0.04em;
        }

        @media (max-width: 680px) {
          .bl-sponsors-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .bl-footer-main {
            flex-direction: column;
          }

          .bl-social-section {
            align-items: flex-start;
          }
        }
      `}</style>

      <footer className="bl-footer">
        <div className="bl-container">

          {/* Sponsors */}
          <h2 className="bl-sponsors-heading">SPONSORS</h2>
          <div className="bl-sponsors-grid">
            {sponsors.map((s, i) => (
              <div className="bl-sponsor-item" key={i}>
                <img src={s.logo} alt={s.name} />
                <span>{s.name}</span>
              </div>
            ))}
          </div>

          <hr className="bl-footer-divider" />

          {/* Main row */}
          <div className="bl-footer-main">

            {/* Quick Links */}
            <div>
              <h3 className="bl-ql-heading">QUICK LINKS</h3>
              <div className="bl-ql-grid">
                <div className="bl-ql-col">
                  {quickLinksLeft.map((link, i) => (
                    <button
                      key={i}
                      onClick={() => link.section && scrollToSection(link.section)}
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
                <div className="bl-ql-col">
                  {quickLinksRight.map((link, i) => (
                    <button
                      key={i}
                      onClick={() => link.section && scrollToSection(link.section)}
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bl-social-section">
              <h3 className="bl-social-heading">SOCIAL MEDIA</h3>
              <div className="bl-socials">
                <a href="/" aria-label="YouTube"><FaYoutube /></a>
                <a href="/" aria-label="Instagram"><FaInstagram /></a>
                <a href="/" aria-label="Facebook"><FaFacebookF /></a>
                <a href="/" aria-label="Twitter/X"><FaXTwitter /></a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="bl-footer-bottom">
          © {new Date().getFullYear()} BotLeague India. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}
