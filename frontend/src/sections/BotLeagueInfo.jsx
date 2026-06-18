// import React from 'react';
// import { botLeagueInfoGraphic } from '../assets/botLeagueInfoGraphic';

// const infoItems = [
//   {
//     number: '1.',
//     title: 'Structured Events',
//     text: '"From one-off events to a year-round competitive season."'
//   },
//   {
//     number: '2.',
//     title: 'Digital Identity',
//     text: '"Your professional robotics legacy, tracked and verified."'
//   },
//   {
//     number: '3.',
//     title: 'National Ranking',
//     text: '"Benchmark your skills against the best engineers in India."'
//   },
//   {
//     number: '4.',
//     title: 'Career Pathway',
//     text: '"Turning arena victories into real-world industry opportunities."'
//   }
// ];

// export default function BotLeagueInfo() {
//   return (
//     <section id="botleague-info" className="botleague-info-section">
//       <div className="botleague-info-container">
//         <div className="botleague-info-content">
//           <h2>What Is BotLeague?</h2>

//           <div className="botleague-info-grid">
//             {infoItems.map((item) => (
//               <article className="botleague-info-item" key={item.number}>
//                 <span>{item.number}</span>
//                 <h3>{item.title}</h3>
//                 <p>{item.text}</p>
//               </article>
//             ))}
//           </div>
//         </div>

//         <div className="botleague-info-visual">
//           <img src={botLeagueInfoGraphic} alt="BotLeague digital ecosystem" />
//         </div>
//       </div>
//     </section>
//   );
// }
import React from 'react';

const infoItems = [
  {
    number: '1.',
    title: 'Structured Events',
    text: '"From one-off events to a year-round competitive season."',
  },
  {
    number: '2.',
    title: 'Digital Identity',
    text: '"Your professional robotics legacy, tracked and verified."',
  },
  {
    number: '3.',
    title: 'National Ranking',
    text: '"Benchmark your skills against the best engineers in India."',
  },
  {
    number: '4.',
    title: 'Career Pathway',
    text: '"Turning arena victories into real-world industry opportunities."',
  },
];

/* ── Inline SVG icons (yellow filled) ── */
const IconMiniMakers = () => (
  <svg viewBox="0 0 64 64" width="60" height="60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="26" stroke="#FFC107" strokeWidth="4" />
    <circle cx="32" cy="32" r="14" stroke="#FFC107" strokeWidth="3.5" />
    <rect x="22" y="22" width="20" height="20" rx="3" stroke="#FFC107" strokeWidth="3" />
  </svg>
);

const IconJuniorInnovators = () => (
  <svg viewBox="0 0 64 64" width="60" height="60" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Bulb outline */}
    <path d="M32 10 C22 10 16 18 16 25 C16 31 20 36 24 39 L24 46 L40 46 L40 39 C44 36 48 31 48 25 C48 18 42 10 32 10 Z" stroke="#FFC107" strokeWidth="3" strokeLinejoin="round" />
    <line x1="26" y1="50" x2="38" y2="50" stroke="#FFC107" strokeWidth="3" strokeLinecap="round" />
    <line x1="28" y1="54" x2="36" y2="54" stroke="#FFC107" strokeWidth="3" strokeLinecap="round" />
    {/* rays */}
    <line x1="32" y1="4" x2="32" y2="8" stroke="#FFC107" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="10" y1="25" x2="14" y2="25" stroke="#FFC107" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="50" y1="25" x2="54" y2="25" stroke="#FFC107" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="15" y1="11" x2="18" y2="14" stroke="#FFC107" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="49" y1="11" x2="46" y2="14" stroke="#FFC107" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const IconYoungEngineers = () => (
  <svg viewBox="0 0 64 64" width="60" height="60" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Person */}
    <circle cx="28" cy="18" r="8" stroke="#FFC107" strokeWidth="3" />
    <path d="M14 46 C14 36 42 36 42 46" stroke="#FFC107" strokeWidth="3" strokeLinecap="round" />
    {/* Gear badge */}
    <circle cx="46" cy="22" r="8" stroke="#FFC107" strokeWidth="2.5" />
    <circle cx="46" cy="22" r="3.5" stroke="#FFC107" strokeWidth="2" />
    <line x1="46" y1="12" x2="46" y2="15" stroke="#FFC107" strokeWidth="2" strokeLinecap="round" />
    <line x1="46" y1="29" x2="46" y2="32" stroke="#FFC107" strokeWidth="2" strokeLinecap="round" />
    <line x1="36" y1="22" x2="39" y2="22" stroke="#FFC107" strokeWidth="2" strokeLinecap="round" />
    <line x1="53" y1="22" x2="56" y2="22" stroke="#FFC107" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconRoboMinds = () => (
  <svg viewBox="0 0 64 64" width="60" height="60" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Head outline */}
    <path d="M18 28 C18 18 46 18 46 28 L46 44 C46 50 18 50 18 44 Z" stroke="#FFC107" strokeWidth="3" strokeLinejoin="round" />
    {/* Eyes */}
    <circle cx="26" cy="34" r="3" stroke="#FFC107" strokeWidth="2" />
    <circle cx="38" cy="34" r="3" stroke="#FFC107" strokeWidth="2" />
    {/* Antenna */}
    <line x1="32" y1="18" x2="32" y2="12" stroke="#FFC107" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="32" cy="10" r="2.5" stroke="#FFC107" strokeWidth="2" />
    {/* Bitcoin symbol inside */}
    <text x="28" y="44" fontSize="9" fill="#FFC107" fontWeight="bold" fontFamily="sans-serif">₿</text>
  </svg>
);

const categories = [
  {
    title: 'MINI\nMAKERS',
    desc: 'Where Creativity Meets Logic.',
    highlighted: true,
    Icon: IconMiniMakers,
  },
  {
    title: 'JUNIOR\nINNOVATORS',
    desc: 'Engineering & Strategy Fundamentals.',
    highlighted: false,
    Icon: IconJuniorInnovators,
  },
  {
    title: 'YOUNG\nENGINEERS',
    desc: 'Advanced Wireless & Autonomous Control.',
    highlighted: false,
    Icon: IconYoungEngineers,
  },
  {
    title: 'ROBO\nMINDS',
    desc: 'Elite Professional Sports & Robotics.',
    highlighted: false,
    Icon: IconRoboMinds,
  },
];

export default function BotLeagueInfo() {
  return (
    <>
      <style>{`
        /* ── SECTION ── */
        .bli-section {
          background: #111111;
          font-family: 'Barlow', 'Rajdhani', 'Inter', sans-serif;
          padding: 0 0 64px;
        }

        .bli-wrap {
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ── TOP BOX (What is BotLeague) ── */
        .bli-top-box {
          border: 1px solid #2a2a2a;
          border-radius: 0;
          padding: 28px 28px 36px;
          margin-bottom: 48px;
        }

        .bli-section-title {
          font-size: clamp(22px, 4vw, 38px);
          font-weight: 900;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-style: italic;
          margin: 0 0 32px;
          padding-left: 14px;
          border-left: 4px solid #ffffff;
          line-height: 1;
        }

        .bli-body-row {
          display: grid;
          grid-template-columns: 1fr 1fr 200px;
          gap: 0 24px;
          align-items: start;
        }

        /* info grid spans 2 cols */
        .bli-info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px 32px;
          grid-column: span 2;
        }

        .bli-info-item {}

        .bli-num {
          font-size: 20px;
          font-weight: 900;
          color: #FFC107;
          display: inline-block;
          margin-bottom: 4px;
          font-style: italic;
          border-bottom: 2px solid #FFC107;
          line-height: 1;
          padding-bottom: 1px;
        }

        .bli-item-title {
          font-size: 15px;
          font-weight: 900;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          margin: 4px 0 7px;
        }

        .bli-item-text {
          font-size: 13px;
          color: #777;
          line-height: 1.55;
          margin: 0;
        }

        /* ── TECH GRAPHIC (right col) ── */
        .bli-graphic {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: 4px;
          opacity: 0.75;
        }

        /* ── CATEGORIES ── */
        .bli-cat-title {
          font-size: clamp(22px, 4vw, 38px);
          font-weight: 900;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          font-style: italic;
          margin: 0 0 24px;
          padding-left: 14px;
          border-left: 4px solid #ffffff;
          line-height: 1;
        }

        .bli-cat-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }

        .bli-cat-card {
          background: #1c1c1c;
          border: 1px solid #2e2e2e;
          border-radius: 10px;
          padding: 22px 18px 18px;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          transition: border-color 0.2s;
        }

        .bli-cat-card:hover {
          border-color: #FFC107;
        }

        .bli-cat-card.hl {
          border-color: #FFC107;
        }

        .bli-cat-icon {
          margin-bottom: 14px;
        }

        .bli-cat-name {
          font-size: 18px;
          font-weight: 900;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          white-space: pre-line;
          line-height: 1.1;
          margin: 0 0 10px;
        }

        .bli-cat-desc {
          font-size: 12px;
          color: #777;
          line-height: 1.55;
          margin: 0 0 22px;
          flex: 1;
        }

        .bli-learn-more {
          font-size: 12px;
          font-weight: 800;
          color: #FFC107;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          font-family: inherit;
          display: flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
          transition: gap 0.18s;
        }

        .bli-learn-more:hover { gap: 10px; }

        /* ── RESPONSIVE ── */
        @media (max-width: 860px) {
          .bli-body-row {
            grid-template-columns: 1fr 1fr;
          }
          .bli-graphic { display: none; }
          .bli-info-grid { grid-column: span 2; }
          .bli-cat-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 540px) {
          .bli-top-box { padding: 20px 16px 28px; }
          .bli-body-row { grid-template-columns: 1fr; }
          .bli-info-grid {
            grid-template-columns: 1fr;
            grid-column: span 1;
          }
          .bli-cat-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
          .bli-cat-card { padding: 16px 14px 14px; }
          .bli-cat-name { font-size: 15px; }
        }

        @media (max-width: 360px) {
          .bli-cat-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section id="botleague-info" className="bli-section">
        <div className="bli-wrap">

          {/* ── WHAT IS BOTLEAGUE ── */}
          <div className="bli-top-box">
            <h2 className="bli-section-title">What Is BotLeague?</h2>

            <div className="bli-body-row">
              <div className="bli-info-grid">
                {infoItems.map((item) => (
                  <article className="bli-info-item" key={item.number}>
                    <span className="bli-num">{item.number}</span>
                    <h3 className="bli-item-title">{item.title}</h3>
                    <p className="bli-item-text">{item.text}</p>
                  </article>
                ))}
              </div>

              {/* Tech illustration */}
              <div className="bli-graphic">
                <svg viewBox="0 0 200 210" width="190" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Laptop */}
                  <rect x="18" y="30" width="100" height="72" rx="5" stroke="#555" strokeWidth="2" />
                  <rect x="24" y="36" width="88" height="60" rx="3" fill="#1a1a1a" />
                  <rect x="10" y="102" width="116" height="9" rx="4" stroke="#555" strokeWidth="1.5" />
                  {/* Screen lines */}
                  <line x1="30" y1="50" x2="72" y2="50" stroke="#666" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="30" y1="58" x2="95" y2="58" stroke="#444" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="30" y1="66" x2="80" y2="66" stroke="#444" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="30" y1="74" x2="60" y2="74" stroke="#444" strokeWidth="1.5" strokeLinecap="round"/>
                  {/* Gear top-right */}
                  <circle cx="162" cy="46" r="20" stroke="#555" strokeWidth="2.5"/>
                  <circle cx="162" cy="46" r="9" stroke="#555" strokeWidth="2"/>
                  <line x1="162" y1="24" x2="162" y2="29" stroke="#555" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="162" y1="63" x2="162" y2="68" stroke="#555" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="140" y1="46" x2="145" y2="46" stroke="#555" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="179" y1="46" x2="184" y2="46" stroke="#555" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="147" y1="31" x2="150" y2="34" stroke="#555" strokeWidth="2.5" strokeLinecap="round"/>
                  <line x1="177" y1="31" x2="174" y2="34" stroke="#555" strokeWidth="2.5" strokeLinecap="round"/>
                  <line x1="147" y1="61" x2="150" y2="58" stroke="#555" strokeWidth="2.5" strokeLinecap="round"/>
                  <line x1="177" y1="61" x2="174" y2="58" stroke="#555" strokeWidth="2.5" strokeLinecap="round"/>
                  {/* Gear bottom-right */}
                  <circle cx="158" cy="148" r="24" stroke="#444" strokeWidth="2.5"/>
                  <circle cx="158" cy="148" r="11" stroke="#444" strokeWidth="2"/>
                  <line x1="158" y1="122" x2="158" y2="128" stroke="#444" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="158" y1="168" x2="158" y2="174" stroke="#444" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="132" y1="148" x2="138" y2="148" stroke="#444" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="178" y1="148" x2="184" y2="148" stroke="#444" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="140" y1="130" x2="144" y2="134" stroke="#444" strokeWidth="2.5" strokeLinecap="round"/>
                  <line x1="176" y1="130" x2="172" y2="134" stroke="#444" strokeWidth="2.5" strokeLinecap="round"/>
                  <line x1="140" y1="166" x2="144" y2="162" stroke="#444" strokeWidth="2.5" strokeLinecap="round"/>
                  <line x1="176" y1="166" x2="172" y2="162" stroke="#444" strokeWidth="2.5" strokeLinecap="round"/>
                  {/* Dashed connector */}
                  <path d="M 118 80 Q 140 110 142 126" stroke="#444" strokeWidth="1.5" strokeDasharray="5 4"/>
                  {/* Circle badge */}
                  <circle cx="52" cy="162" r="28" stroke="#555" strokeWidth="2"/>
                  <circle cx="52" cy="162" r="15" stroke="#555" strokeWidth="1.5"/>
                  <text x="43" y="168" fontSize="14" fill="#666" fontWeight="bold" fontFamily="sans-serif">A↑</text>
                  {/* Briefcase */}
                  <rect x="14" y="158" width="26" height="20" rx="3" stroke="#555" strokeWidth="1.5"/>
                  <path d="M20 158 V153 H34 V158" stroke="#555" strokeWidth="1.5"/>
                </svg>
              </div>
            </div>
          </div>

          {/* ── CATEGORIES ── */}
          <h2 className="bli-cat-title">Categories</h2>

          <div className="bli-cat-grid">
            {categories.map((cat, i) => {
              const { Icon } = cat;
              return (
                <div className={`bli-cat-card${cat.highlighted ? ' hl' : ''}`} key={i}>
                  <div className="bli-cat-icon"><Icon /></div>
                  <h3 className="bli-cat-name">{cat.title}</h3>
                  <p className="bli-cat-desc">{cat.desc}</p>
                  <a className="bli-learn-more" href="#">LEARN MORE &nbsp;→</a>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}
