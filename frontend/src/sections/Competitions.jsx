import React from 'react';

export default function Competitions({ onRegisterClick }) {
  return (
    <section id="events" className="section comps-events-section">
      <div className="spotlight-red" style={{ bottom: '10%', right: '5%' }} />
      
      <div className="container">
        <div className="section-title-wrapper-left">
          <h2 className="section-title-comps">Competitions & Events</h2>
        </div>

        <div className="comps-three-columns">
          
          {/* COLUMN 1: LIVE NOW */}
          <div className="comps-column">
            <h3 className="column-header-text live-header">LIVE NOW</h3>
            
            <div className="comp-card-exact">
              <div className="card-exact-header">
                <div className="title-area">
                  <h4 className="card-exact-title">Bengaluru Regionals</h4>
                  <span className="card-exact-subtitle">Lorem Ipsum</span>
                </div>
                <span className="badge-ongoing">Ongoing</span>
              </div>
              
              <div className="card-exact-divider" />
              
              {/* Tournament Bracket Visualization */}
              <div className="bracket-wrapper">
                <div className="bracket-column-left">
                  <div className="bracket-block" />
                  <div className="bracket-block" />
                  <div className="bracket-block" />
                  <div className="bracket-block" />
                </div>
                
                {/* SVG Connecting Lines matching screenshot */}
                <div className="bracket-lines-svg">
                  <svg width="100%" height="100%" viewBox="0 0 110 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Top brackets */}
                    <path d="M 0 22 H 25 V 58 H 50" stroke="#FF3C5F" strokeWidth="1.5" />
                    <path d="M 0 94 H 25 V 58 H 50" stroke="#FF3C5F" strokeWidth="1.5" />
                    
                    {/* Bottom brackets */}
                    <path d="M 0 166 H 25 V 130 H 50" stroke="#FF3C5F" strokeWidth="1.5" />
                    <path d="M 0 238 H 25 V 130 H 50" stroke="#FF3C5F" strokeWidth="1.5" />
                    
                    {/* Semis to Finals */}
                    <path d="M 50 58 H 75 V 94 H 100" stroke="#FF3C5F" strokeWidth="1.5" />
                    <path d="M 50 130 H 75 V 94 H 100" stroke="#FF3C5F" strokeWidth="1.5" />
                  </svg>
                </div>
                
                <div className="bracket-column-mid">
                  <div className="bracket-block" />
                  <div className="bracket-block" />
                </div>
                
                <div className="bracket-column-right">
                  <div className="bracket-block" />
                </div>
              </div>
            </div>
          </div>
          
          {/* COLUMN 2: UPCOMING */}
          <div className="comps-column">
            <h3 className="column-header-text">UPCOMING</h3>
            
            <div className="upcoming-stack">
              
              {/* Event 1 */}
              <div className="comp-card-exact">
                <h4 className="card-exact-title">Event in Mumbai</h4>
                
                <div className="event-meta-grid">
                  <div className="meta-col">
                    <span className="meta-label">Date</span>
                    <span className="meta-value">11/11/25</span>
                  </div>
                  <div className="meta-col">
                    <span className="meta-label">Location</span>
                    <span className="meta-value">BKC</span>
                  </div>
                  <div className="meta-col">
                    <span className="meta-label">Category</span>
                    <span className="meta-value">Lorem</span>
                  </div>
                </div>
                
                <button className="btn-register-exact" onClick={onRegisterClick}>
                  REGISTER
                </button>
              </div>

              {/* Event 2 */}
              <div className="comp-card-exact">
                <h4 className="card-exact-title">Event in Delhi</h4>
                
                <div className="event-meta-grid">
                  <div className="meta-col">
                    <span className="meta-label">Date</span>
                    <span className="meta-value">11/11/25</span>
                  </div>
                  <div className="meta-col">
                    <span className="meta-label">Location</span>
                    <span className="meta-value">BKC</span>
                  </div>
                  <div className="meta-col">
                    <span className="meta-label">Category</span>
                    <span className="meta-value">Lorem</span>
                  </div>
                </div>
                
                <button className="btn-register-exact" onClick={onRegisterClick}>
                  REGISTER
                </button>
              </div>
              
            </div>
          </div>
          
          {/* COLUMN 3: PAST RESULTS */}
          <div className="comps-column">
            <h3 className="column-header-text">PAST RESULTS</h3>
            
            <div className="comp-card-exact past-card">
              
              {/* Item 1 */}
              <div className="past-item">
                <h5 className="past-item-title">Bengaluru Regionals</h5>
                <span className="past-item-subtitle">Lorem Ipsum</span>
              </div>
              
              <div className="card-exact-divider" />
              
              {/* Item 2 */}
              <div className="past-item">
                <h5 className="past-item-title">Bengaluru Regionals</h5>
                <span className="past-item-subtitle">Lorem Ipsum</span>
              </div>
              
              <div className="card-exact-divider" />
              
              {/* Item 3 */}
              <div className="past-item">
                <h5 className="past-item-title">Bengaluru Regionals</h5>
                <span className="past-item-subtitle">Lorem Ipsum</span>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
