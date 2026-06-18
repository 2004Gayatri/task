import React from 'react';
import { Award, DollarSign, Radio, Wrench } from 'lucide-react';

export default function WhyRegister() {
  const benefits = [
    {
      icon: <Award size={28} className="text-highlight-gold" />,
      title: "National Standing & Ranks",
      desc: "Get listed on India's official robotics database. Accumulate points with every match and prove your squad is the top build team in the nation."
    },
    {
      icon: <DollarSign size={28} className="text-highlight-red" />,
      title: "Massive Prize Pools",
      desc: "Compete for regional and national prize pots exceeding ₹10,000,000 annually, with additional special hardware and sponsor-backed design grants."
    },
    {
      icon: <Radio size={28} className="text-highlight-blue" />,
      title: "Live Stream Coverage",
      desc: "Have your combat matches broadcasted live with professional commentary, slow-motion replays, post-match team interviews, and highlights reels."
    },
    {
      icon: <Wrench size={28} style={{ color: '#a855f7' }} />,
      title: "Tech Support & Fabrication",
      desc: "Get subsidized access to CNC machining, laser cutting, titanium fabrication facilities, and special discounts on motors, speed controllers, and batteries."
    }
  ];

  return (
    <section id="why-register" className="section why-register-section">
      <div className="spotlight-blue" />
      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="section-title">Why Register for BotLeague?</h2>
          <p className="section-subtitle">
            Whether you are a university engineering squad or a backyard mechanic, BotLeague elevates your robotics project to the national stage.
          </p>
        </div>

        <div className="benefits-grid grid">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="benefit-card glow-card">
              <div className="benefit-icon-wrapper">
                {benefit.icon}
              </div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-desc">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
