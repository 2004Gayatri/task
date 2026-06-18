import React from 'react';
import { Shield, Play } from 'lucide-react';

export default function Hero({ onExploreClick, onCreateAccountClick }) {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-background">
        <div className="hero-overlay" />
        <img 
          src="/robot_battle_arena.png" 
          alt="BotLeague Battle Arena" 
          className="hero-image" 
        />
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* Pulsating Live Status Badge */}
          <div className="live-status-badge">
            <span className="live-dot" />
            <span className="live-text">
              <span className="live-label">LIVE :</span> Episode 14 . Bengaluru Regionals
            </span>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="watch-live-btn">
              WATCH LIVE <Play size={12} fill="currentColor" style={{ marginLeft: '4px' }} />
            </a>
          </div>

          {/* Core Branding Header */}
          <div className="hero-title-box">
            <h1 className="hero-main-title">
              India's Ultimate
              <span className="text-highlight"> Robotics Arena</span>
            </h1>
          </div>

          <p className="hero-subtitle">
            Build. Compete. Rank. The National Ecosystem for Robotics Arena.
          </p>

          {/* Action CTAs */}
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={onCreateAccountClick}>
             
              CREATE ACCOUNT
            </button>
            <button className="btn btn-secondary" onClick={onExploreClick}>
              EXPLORE EVENTS
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Arena Grid */}
      <div className="arena-grid-lines" />
    </section>
  );
}


