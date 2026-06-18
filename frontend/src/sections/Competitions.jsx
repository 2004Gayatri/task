// import React from 'react';

// export default function Competitions({ onRegisterClick }) {
//   return (
//     <section id="events" className="section comps-events-section">
//       <div className="spotlight-red" style={{ bottom: '10%', right: '5%' }} />
      
//       <div className="container">
//         <div className="section-title-wrapper-left">
//           <h2 className="section-title-comps">Competitions & Events</h2>
//         </div>

//         <div className="comps-three-columns">
          
//           {/* COLUMN 1: LIVE NOW */}
//           <div className="comps-column">
//             <h3 className="column-header-text live-header">LIVE NOW</h3>
            
//             <div className="comp-card-exact">
//               <div className="card-exact-header">
//                 <div className="title-area">
//                   <h4 className="card-exact-title">Bengaluru Regionals</h4>
//                   <span className="card-exact-subtitle">Lorem Ipsum</span>
//                 </div>
//                 <span className="badge-ongoing">Ongoing</span>
//               </div>
              
//               <div className="card-exact-divider" />
              
//               {/* Tournament Bracket Visualization */}
//               <div className="bracket-wrapper">
//                 <div className="bracket-column-left">
//                   <div className="bracket-block" />
//                   <div className="bracket-block" />
//                   <div className="bracket-block" />
//                   <div className="bracket-block" />
//                 </div>
                
//                 {/* SVG Connecting Lines matching screenshot */}
//                 <div className="bracket-lines-svg">
//                   <svg width="100%" height="100%" viewBox="0 0 110 180" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     {/* Top brackets */}
//                     <path d="M 0 22 H 25 V 58 H 50" stroke="#FF3C5F" strokeWidth="1.5" />
//                     <path d="M 0 94 H 25 V 58 H 50" stroke="#FF3C5F" strokeWidth="1.5" />
                    
//                     {/* Bottom brackets */}
//                     <path d="M 0 166 H 25 V 130 H 50" stroke="#FF3C5F" strokeWidth="1.5" />
//                     <path d="M 0 238 H 25 V 130 H 50" stroke="#FF3C5F" strokeWidth="1.5" />
                    
//                     {/* Semis to Finals */}
//                     <path d="M 50 58 H 75 V 94 H 100" stroke="#FF3C5F" strokeWidth="1.5" />
//                     <path d="M 50 130 H 75 V 94 H 100" stroke="#FF3C5F" strokeWidth="1.5" />
//                   </svg>
//                 </div>
                
//                 <div className="bracket-column-mid">
//                   <div className="bracket-block" />
//                   <div className="bracket-block" />
//                 </div>
                
//                 <div className="bracket-column-right">
//                   <div className="bracket-block" />
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* COLUMN 2: UPCOMING */}
//           <div className="comps-column">
//             <h3 className="column-header-text">UPCOMING</h3>
            
//             <div className="upcoming-stack">
              
//               {/* Event 1 */}
//               <div className="comp-card-exact">
//                 <h4 className="card-exact-title">Event in Mumbai</h4>
                
//                 <div className="event-meta-grid">
//                   <div className="meta-col">
//                     <span className="meta-label">Date</span>
//                     <span className="meta-value">11/11/25</span>
//                   </div>
//                   <div className="meta-col">
//                     <span className="meta-label">Location</span>
//                     <span className="meta-value">BKC</span>
//                   </div>
//                   <div className="meta-col">
//                     <span className="meta-label">Category</span>
//                     <span className="meta-value">Lorem</span>
//                   </div>
//                 </div>
                
//                 <button className="btn-register-exact" onClick={onRegisterClick}>
//                   REGISTER
//                 </button>
//               </div>

//               {/* Event 2 */}
//               <div className="comp-card-exact">
//                 <h4 className="card-exact-title">Event in Delhi</h4>
                
//                 <div className="event-meta-grid">
//                   <div className="meta-col">
//                     <span className="meta-label">Date</span>
//                     <span className="meta-value">11/11/25</span>
//                   </div>
//                   <div className="meta-col">
//                     <span className="meta-label">Location</span>
//                     <span className="meta-value">BKC</span>
//                   </div>
//                   <div className="meta-col">
//                     <span className="meta-label">Category</span>
//                     <span className="meta-value">Lorem</span>
//                   </div>
//                 </div>
                
//                 <button className="btn-register-exact" onClick={onRegisterClick}>
//                   REGISTER
//                 </button>
//               </div>
              
//             </div>
//           </div>
          
//           {/* COLUMN 3: PAST RESULTS */}
//           <div className="comps-column">
//             <h3 className="column-header-text">PAST RESULTS</h3>
            
//             <div className="comp-card-exact past-card">
              
//               {/* Item 1 */}
//               <div className="past-item">
//                 <h5 className="past-item-title">Bengaluru Regionals</h5>
//                 <span className="past-item-subtitle">Lorem Ipsum</span>
//               </div>
              
//               <div className="card-exact-divider" />
              
//               {/* Item 2 */}
//               <div className="past-item">
//                 <h5 className="past-item-title">Bengaluru Regionals</h5>
//                 <span className="past-item-subtitle">Lorem Ipsum</span>
//               </div>
              
//               <div className="card-exact-divider" />
              
//               {/* Item 3 */}
//               <div className="past-item">
//                 <h5 className="past-item-title">Bengaluru Regionals</h5>
//                 <span className="past-item-subtitle">Lorem Ipsum</span>
//               </div>
              
//             </div>
//           </div>
          
//         </div>
//       </div>
//     </section>
//   );
// }
import React from 'react';

export default function Competitions({ onRegisterClick }) {
  return (
    <>
      <style>{`
        /* ── SECTION ── */
        .ce-section {
          background: #0d0d0d;
          position: relative;
          overflow: hidden;
          padding: 64px 0 80px;
          font-family: 'Barlow', 'Rajdhani', 'Inter', sans-serif;
        }

        /* red radial glow bottom-right */
        .ce-glow {
          position: absolute;
          bottom: -10%;
          right: -5%;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(180,20,30,0.35) 0%, transparent 70%);
          pointer-events: none;
        }

        /* red radial glow top-left (subtle) */
        .ce-glow-tl {
          position: absolute;
          top: -5%;
          left: -8%;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(150,15,25,0.25) 0%, transparent 65%);
          pointer-events: none;
        }

        .ce-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 28px;
          position: relative;
          z-index: 1;
        }

        /* ── TITLE ── */
        .ce-title {
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 900;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #fff;
          margin: 0 0 40px;
          line-height: 1;
        }

        /* ── 3-COLUMN GRID ── */
        .ce-columns {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 24px;
          align-items: start;
        }

        /* ── COLUMN HEADER ── */
        .ce-col-label {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #bbb;
          margin: 0 0 16px;
        }
        .ce-col-label.live {
          color: #ff3c5f;
        }

        /* ── CARD BASE ── */
        .ce-card {
          background: #161616;
          border: 1px solid #2a2a2a;
          border-radius: 10px;
          padding: 20px 20px 20px;
        }

        /* ── LIVE CARD ── */
        .ce-card-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 6px;
        }

        .ce-card-title {
          font-size: 20px;
          font-weight: 800;
          color: #fff;
          margin: 0;
          line-height: 1.2;
        }

        .ce-card-subtitle {
          font-size: 13px;
          color: #666;
          margin: 2px 0 0;
        }

        .badge-ongoing {
          background: #ff3c5f;
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;
          padding: 3px 10px;
          border-radius: 4px;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .ce-divider {
          border: none;
          border-top: 1px solid #2a2a2a;
          margin: 14px 0;
        }

        /* ── BRACKET ── */
        .bracket-container {
          display: flex;
          align-items: center;
          gap: 0;
          padding: 8px 0 4px;
          height: 220px;
          position: relative;
        }

        .bracket-col {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          height: 100%;
        }

        .bracket-col.col-q { width: 72px; }
        .bracket-col.col-s { width: 72px; }
        .bracket-col.col-f { width: 72px; }

        .b-block {
          width: 68px;
          height: 28px;
          background: #3a3a3a;
          border-radius: 4px;
        }

        .bracket-lines {
          flex: 1;
          height: 100%;
          position: relative;
        }

        .bracket-lines svg {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          overflow: visible;
        }

        /* ── UPCOMING STACK ── */
        .upcoming-stack {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .meta-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4px;
          margin: 14px 0 18px;
        }

        .meta-label {
          font-size: 11px;
          color: #888;
          display: block;
          margin-bottom: 2px;
          text-transform: capitalize;
        }

        .meta-value {
          font-size: 13px;
          font-weight: 600;
          color: #ddd;
          display: block;
        }

        .btn-register {
          width: 100%;
          background: #ff3c5f;
          border: none;
          color: #fff;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 13px;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.2s;
          font-family: inherit;
        }

        .btn-register:hover {
          background: #e02a4f;
        }

        /* ── PAST RESULTS ── */
        .past-item {
          padding: 4px 0;
        }

        .past-item-title {
          font-size: 18px;
          font-weight: 800;
          color: #fff;
          margin: 0 0 3px;
        }

        .past-item-sub {
          font-size: 13px;
          color: #666;
        }

        @media (max-width: 800px) {
          .ce-columns {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="ce-section" id="events">
        <div className="ce-glow" />
        <div className="ce-glow-tl" />

        <div className="ce-container">
          <h2 className="ce-title">Competitions &amp; Events</h2>

          <div className="ce-columns">

            {/* ── COL 1: LIVE NOW ── */}
            <div>
              <p className="ce-col-label live">LIVE NOW</p>
              <div className="ce-card">
                <div className="ce-card-header">
                  <div>
                    <h4 className="ce-card-title">Bengaluru Regionals</h4>
                    <p className="ce-card-subtitle">Lorem Ipsum</p>
                  </div>
                  <span className="badge-ongoing">Ongoing</span>
                </div>

                <hr className="ce-divider" />

                {/* Tournament Bracket */}
                <div className="bracket-container">
                  {/* Quarter-final blocks */}
                  <div className="bracket-col col-q">
                    <div className="b-block" />
                    <div className="b-block" />
                    <div className="b-block" />
                    <div className="b-block" />
                  </div>

                  {/* Connecting lines Q→S */}
                  <div className="bracket-lines">
                    <svg viewBox="0 0 60 220" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Top pair → semi top */}
                      <path d="M 0 27 H 20 V 82 H 60" stroke="#ff3c5f" strokeWidth="1.5" />
                      <path d="M 0 82 H 20 V 82 H 60" stroke="#ff3c5f" strokeWidth="1.5" />
                      {/* Bottom pair → semi bottom */}
                      <path d="M 0 138 H 20 V 138 H 60" stroke="#ff3c5f" strokeWidth="1.5" />
                      <path d="M 0 193 H 20 V 138 H 60" stroke="#ff3c5f" strokeWidth="1.5" />
                    </svg>
                  </div>

                  {/* Semi-final blocks */}
                  <div className="bracket-col col-s">
                    <div className="b-block" style={{ marginTop: '44px' }} />
                    <div className="b-block" style={{ marginTop: '44px' }} />
                  </div>

                  {/* Connecting lines S→F */}
                  <div className="bracket-lines">
                    <svg viewBox="0 0 60 220" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M 0 82 H 20 V 110 H 60" stroke="#ff3c5f" strokeWidth="1.5" />
                      <path d="M 0 138 H 20 V 110 H 60" stroke="#ff3c5f" strokeWidth="1.5" />
                    </svg>
                  </div>

                  {/* Final block */}
                  <div className="bracket-col col-f" style={{ justifyContent: 'center' }}>
                    <div className="b-block" />
                  </div>
                </div>
              </div>
            </div>

            {/* ── COL 2: UPCOMING ── */}
            <div>
              <p className="ce-col-label">UPCOMING</p>
              <div className="upcoming-stack">

                <div className="ce-card">
                  <h4 className="ce-card-title">Event in Mumbai</h4>
                  <div className="meta-grid">
                    <div>
                      <span className="meta-label">Date</span>
                      <span className="meta-value">11/11/25</span>
                    </div>
                    <div>
                      <span className="meta-label">Location</span>
                      <span className="meta-value">BKC</span>
                    </div>
                    <div>
                      <span className="meta-label">Category</span>
                      <span className="meta-value">Lorem</span>
                    </div>
                  </div>
                  <button className="btn-register" onClick={onRegisterClick}>REGISTER</button>
                </div>

                <div className="ce-card">
                  <h4 className="ce-card-title">Event in Delhi</h4>
                  <div className="meta-grid">
                    <div>
                      <span className="meta-label">Date</span>
                      <span className="meta-value">11/11/25</span>
                    </div>
                    <div>
                      <span className="meta-label">Location</span>
                      <span className="meta-value">BKC</span>
                    </div>
                    <div>
                      <span className="meta-label">Category</span>
                      <span className="meta-value">Lorem</span>
                    </div>
                  </div>
                  <button className="btn-register" onClick={onRegisterClick}>REGISTER</button>
                </div>

              </div>
            </div>

            {/* ── COL 3: PAST RESULTS ── */}
            <div>
              <p className="ce-col-label">PAST RESULTS</p>
              <div className="ce-card">

                <div className="past-item">
                  <h5 className="past-item-title">Bengaluru Regionals</h5>
                  <span className="past-item-sub">Lorem Ipsum</span>
                </div>

                <hr className="ce-divider" />

                <div className="past-item">
                  <h5 className="past-item-title">Bengaluru Regionals</h5>
                  <span className="past-item-sub">Lorem Ipsum</span>
                </div>

                <hr className="ce-divider" />

                <div className="past-item">
                  <h5 className="past-item-title">Bengaluru Regionals</h5>
                  <span className="past-item-sub">Lorem Ipsum</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
