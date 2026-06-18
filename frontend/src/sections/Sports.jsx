import React from 'react';

const disciplines = [
  {
    title: 'Robo Race',
    image: '/assets/sports/robo-race.png'
  },
  {
    title: 'Line Follower',
    image: '/assets/sports/line-follower.png'
  },
  {
    title: 'RC Racing',
    image: '/assets/sports/rc-racing.png'
  },
  {
    title: 'FPV Drone Racing & Aeromodelling',
    image: '/assets/sports/fpv-drone-racing.png',
    compact: true
  },
  {
    title: 'Robo Hockey',
    image: '/assets/sports/robo-hockey.png'
  },
  {
    title: 'Robo War',
    image: '/assets/sports/robo-war.png'
  }
];

export default function Sports() {
  return (
    <section id="sports" className="sports-section">
      <div className="sports-container">
        <div className="sports-heading">
          <span>Sports</span>
          <h2>Competition Disciplines</h2>
        </div>

        <div className="sports-discipline-grid">
          {disciplines.map((discipline) => (
            <article className="discipline-card" key={discipline.title}>
              <img src={discipline.image} alt={discipline.title} />
              <h3 className={discipline.compact ? 'compact-title' : ''}>
                {discipline.title}
              </h3>
            </article>
          ))}

          <div className="sports-circuit-panel" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
