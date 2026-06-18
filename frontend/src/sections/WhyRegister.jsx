// import React from 'react';
// import { Award, DollarSign, Radio, Wrench } from 'lucide-react';

// export default function WhyRegister() {
//   const benefits = [
//     {
//       icon: <Award size={28} className="text-highlight-gold" />,
//       title: "National Standing & Ranks",
//       desc: "Get listed on India's official robotics database. Accumulate points with every match and prove your squad is the top build team in the nation."
//     },
//     {
//       icon: <DollarSign size={28} className="text-highlight-red" />,
//       title: "Massive Prize Pools",
//       desc: "Compete for regional and national prize pots exceeding ₹10,000,000 annually, with additional special hardware and sponsor-backed design grants."
//     },
//     {
//       icon: <Radio size={28} className="text-highlight-blue" />,
//       title: "Live Stream Coverage",
//       desc: "Have your combat matches broadcasted live with professional commentary, slow-motion replays, post-match team interviews, and highlights reels."
//     },
//     {
//       icon: <Wrench size={28} style={{ color: '#a855f7' }} />,
//       title: "Tech Support & Fabrication",
//       desc: "Get subsidized access to CNC machining, laser cutting, titanium fabrication facilities, and special discounts on motors, speed controllers, and batteries."
//     }
//   ];

//   return (
//     <section id="why-register" className="section why-register-section">
//       <div className="spotlight-blue" />
//       <div className="container">
//         <div className="section-title-wrapper">
//           <h2 className="section-title">Why Register for BotLeague?</h2>
//           <p className="section-subtitle">
//             Whether you are a university engineering squad or a backyard mechanic, BotLeague elevates your robotics project to the national stage.
//           </p>
//         </div>

//         <div className="benefits-grid grid">
//           {benefits.map((benefit, idx) => (
//             <div key={idx} className="benefit-card glow-card">
//               <div className="benefit-icon-wrapper">
//                 {benefit.icon}
//               </div>
//               <h3 className="benefit-title">{benefit.title}</h3>
//               <p className="benefit-desc">{benefit.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import React from 'react';

/* ── SVG Icons (red, matching screenshot) ── */
const IconMedal = () => (
  <svg viewBox="0 0 48 48" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 4 L28 14 H40 L30 22 L34 34 L24 27 L14 34 L18 22 L8 14 H20 Z" fill="#ff3c3c" />
    <circle cx="24" cy="22" r="6" fill="#111" />
    <text x="20.5" y="26" fontSize="8" fill="#ff3c3c" fontWeight="bold" fontFamily="sans-serif">★</text>
  </svg>
);

const IconGavel = () => (
  <svg viewBox="0 0 48 48" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="28" width="30" height="8" rx="2" fill="#ff3c3c" transform="rotate(-40 8 28)" />
    <rect x="22" y="6" width="16" height="10" rx="2" fill="#ff3c3c" transform="rotate(-40 22 6)" />
    <line x1="6" y1="42" x2="26" y2="42" stroke="#ff3c3c" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const IconBriefcase = () => (
  <svg viewBox="0 0 48 48" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="18" width="36" height="24" rx="3" fill="#ff3c3c" />
    <path d="M16 18 V13 C16 11 18 10 20 10 H28 C30 10 32 11 32 13 V18" stroke="#111" strokeWidth="2.5" />
    <line x1="6" y1="28" x2="42" y2="28" stroke="#111" strokeWidth="2" />
    <rect x="20" y="25" width="8" height="6" rx="1" fill="#111" />
  </svg>
);

const IconBolt = () => (
  <svg viewBox="0 0 48 48" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28 4 L12 26 H22 L20 44 L36 22 H26 Z" fill="#ff3c3c" />
  </svg>
);

const benefits = [
  {
    Icon: IconMedal,
    title: 'NATIONAL RECOGNITION',
    desc: '"Benchmark your skills on India\'s official robotics leaderboard."',
  },
  {
    Icon: IconGavel,
    title: 'FAIR JUDGING',
    desc: '"Compete with confidence under standardized, expert-led evaluation."',
  },
  {
    Icon: IconBriefcase,
    title: 'CAREER OPS',
    desc: '"Bridge the gap between arena victories and top-tier tech placements."',
  },
  {
    Icon: IconBolt,
    title: 'HIGH - ENERGY ECO',
    desc: '"Join a nationwide community of elite innovators and robotics athletes."',
  },
];

/* ── Leaderboard data ── */
const leaderRows = [
  { rank: '02', score: 22000, color: '#4fc3f7' },
  { rank: '03', score: 20030, color: '#4fc3f7' },
  { rank: '04', score: 19500, color: '#f06292' },
  { rank: '05', score: 15060, color: '#f06292' },
  { rank: '06', score: 13865, color: '#f06292' },
  { rank: '07', score: 10954, color: '#f06292' },
  { rank: '08', score: 9057,  color: '#f06292' },
];

/* ── Avatar SVG ── */
const Avatar = ({ color, size = 28 }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="6" fill={color} opacity="0.25" />
    <circle cx="16" cy="12" r="5" fill={color} />
    <path d="M6 28 C6 20 26 20 26 28" fill={color} />
  </svg>
);

/* ── Shield SVG ── */
const Shield = ({ color }) => (
  <svg viewBox="0 0 32 36" width="26" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 2 L28 7 V18 C28 26 16 34 16 34 C16 34 4 26 4 18 V7 Z" stroke={color} strokeWidth="2" fill="none" />
    <text x="10" y="22" fontSize="10" fill={color} fontWeight="bold" fontFamily="sans-serif">★</text>
  </svg>
);

/* ── Leaderboard card ── */
function LeaderboardCard() {
  return (
    <div className="lb-card">
      {/* circuit dots decoration */}
      <div className="lb-dots lb-dots-tl" />
      <div className="lb-dots lb-dots-tr" />
      <div className="lb-dots lb-dots-bl" />
      <div className="lb-dots lb-dots-br" />

      <h3 className="lb-title">LEADERBOARD</h3>

      {/* #1 featured */}
      <div className="lb-first">
        <div className="lb-first-avatar">
          <svg viewBox="0 0 80 80" width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="80" height="80" rx="10" fill="#FFC107" />
            <circle cx="40" cy="30" r="14" fill="#111" />
            <path d="M14 72 C14 52 66 52 66 72" fill="#111" />
          </svg>
          {/* shield badge */}
          <div className="lb-first-badge">
            <svg viewBox="0 0 36 42" width="30" height="34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 2 L32 8 V22 C32 32 18 40 18 40 C18 40 4 32 4 22 V8 Z" fill="#1a2a4a" stroke="#4a6fa5" strokeWidth="1.5" />
              <text x="11" y="26" fontSize="12" fill="#FFC107" fontWeight="bold" fontFamily="sans-serif">★</text>
            </svg>
          </div>
        </div>
        <div className="lb-first-label">#01 - Player Name</div>
        <div className="lb-first-score">508754</div>
      </div>

      {/* rows 02-08 */}
      <div className="lb-rows">
        {leaderRows.map((row) => (
          <div className="lb-row" key={row.rank}>
            <span className="lb-row-rank">{row.rank}</span>
            <Avatar color={row.color} size={26} />
            <span className="lb-row-name">Player Name</span>
            <span className="lb-row-score">{row.score.toLocaleString()}</span>
            <Shield color={row.color} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WhyRegister() {
  return (
    <>
      <style>{`
        /* ── SECTION ── */
        .wr-section {
          background: #111111;
          font-family: 'Barlow', 'Rajdhani', 'Inter', sans-serif;
          padding: 64px 0 72px;
          position: relative;
          overflow: hidden;
        }

        /* subtle blue spotlight */
        .wr-glow {
          position: absolute;
          top: 10%;
          left: -10%;
          width: 480px;
          height: 480px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(20,60,140,0.22) 0%, transparent 70%);
          pointer-events: none;
        }

        .wr-wrap {
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 28px;
          position: relative;
          z-index: 1;
        }

        /* ── LAYOUT ── */
        .wr-layout {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 40px 56px;
          align-items: start;
        }

        /* ── LEFT: heading + benefits ── */
        .wr-left {}

        .wr-eyebrow {
          font-size: 18px;
          font-weight: 800;
          color: #ff3c3c;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin: 0 0 4px;
          font-style: italic;
        }

        .wr-main-title {
          font-size: clamp(26px, 4vw, 42px);
          font-weight: 900;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin: 0 0 40px;
          line-height: 1.05;
        }

        /* benefit item */
        .wr-benefit {
          display: flex;
          gap: 20px;
          align-items: flex-start;
          margin-bottom: 32px;
        }

        .wr-benefit-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .wr-benefit-title {
          font-size: 16px;
          font-weight: 900;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          margin: 0 0 6px;
        }

        .wr-benefit-desc {
          font-size: 13px;
          color: #888;
          line-height: 1.55;
          margin: 0;
          max-width: 340px;
        }

        /* ── RIGHT: Leaderboard card ── */
        .lb-card {
          width: 300px;
          flex-shrink: 0;
          background: #1a1c22;
          border: 1px solid #2a2d38;
          border-radius: 14px;
          padding: 24px 20px 20px;
          position: relative;
          overflow: hidden;

          /* circuit texture via repeating gradient */
          background-image:
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 38px,
              rgba(255,255,255,0.02) 38px,
              rgba(255,255,255,0.02) 40px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 38px,
              rgba(255,255,255,0.02) 38px,
              rgba(255,255,255,0.02) 40px
            );
          background-color: #181b22;
        }

        /* corner glow dots */
        .lb-dots {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #4fc3f7;
          box-shadow: 0 0 8px 3px rgba(79,195,247,0.6);
        }
        .lb-dots-tl { top: 18px; left: 18px; }
        .lb-dots-tr { top: 18px; right: 18px; }
        .lb-dots-bl { bottom: 18px; left: 18px; }
        .lb-dots-br { bottom: 18px; right: 18px; }

        .lb-title {
          text-align: center;
          font-size: 18px;
          font-weight: 900;
          color: #ffffff;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin: 0 0 20px;
        }

        /* #1 featured */
        .lb-first {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 18px;
        }

        .lb-first-avatar {
          position: relative;
          margin-bottom: 10px;
        }

        .lb-first-badge {
          position: absolute;
          top: -6px;
          right: -10px;
        }

        .lb-first-label {
          font-size: 12px;
          color: #aaa;
          letter-spacing: 0.05em;
          margin-bottom: 2px;
        }

        .lb-first-score {
          font-size: 28px;
          font-weight: 900;
          color: #ffffff;
          letter-spacing: 0.04em;
        }

        /* rows */
        .lb-rows {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .lb-row {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          padding: 7px 10px;
        }

        .lb-row-rank {
          font-size: 13px;
          font-weight: 700;
          color: #888;
          width: 20px;
          flex-shrink: 0;
        }

        .lb-row-name {
          font-size: 13px;
          color: #ddd;
          flex: 1;
        }

        .lb-row-score {
          font-size: 13px;
          font-weight: 700;
          color: #ccc;
          margin-right: 4px;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 860px) {
          .wr-layout {
            grid-template-columns: 1fr;
          }

          .lb-card {
            width: 100%;
            max-width: 380px;
            margin: 0 auto;
          }
        }

        @media (max-width: 480px) {
          .wr-benefit { gap: 14px; }
          .wr-benefit-desc { max-width: 100%; }
        }
      `}</style>

      <section id="why-register" className="wr-section">
        <div className="wr-glow" />
        <div className="wr-wrap">
          <div className="wr-layout">

            {/* LEFT */}
            <div className="wr-left">
              <p className="wr-eyebrow">Why Register ?</p>
              <h2 className="wr-main-title">The League Advantage</h2>

              {benefits.map((b, i) => {
                const { Icon } = b;
                return (
                  <div className="wr-benefit" key={i}>
                    <div className="wr-benefit-icon"><Icon /></div>
                    <div>
                      <h3 className="wr-benefit-title">{b.title}</h3>
                      <p className="wr-benefit-desc">{b.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* RIGHT: Leaderboard */}
            <LeaderboardCard />

          </div>
        </div>
      </section>
    </>
  );
}
