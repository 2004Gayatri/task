import React from 'react';
import { botLeagueInfoGraphic } from '../assets/botLeagueInfoGraphic';

const infoItems = [
  {
    number: '1.',
    title: 'Structured Events',
    text: '"From one-off events to a year-round competitive season."'
  },
  {
    number: '2.',
    title: 'Digital Identity',
    text: '"Your professional robotics legacy, tracked and verified."'
  },
  {
    number: '3.',
    title: 'National Ranking',
    text: '"Benchmark your skills against the best engineers in India."'
  },
  {
    number: '4.',
    title: 'Career Pathway',
    text: '"Turning arena victories into real-world industry opportunities."'
  }
];

export default function BotLeagueInfo() {
  return (
    <section id="botleague-info" className="botleague-info-section">
      <div className="botleague-info-container">
        <div className="botleague-info-content">
          <h2>What Is BotLeague?</h2>

          <div className="botleague-info-grid">
            {infoItems.map((item) => (
              <article className="botleague-info-item" key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="botleague-info-visual">
          <img src={botLeagueInfoGraphic} alt="BotLeague digital ecosystem" />
        </div>
      </div>
    </section>
  );
}
