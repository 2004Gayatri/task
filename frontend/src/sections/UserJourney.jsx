import React from 'react';
import {
  buildTeamIcon,
  competeIndiaIcon,
  leagueIcon,
  rankingIcon
} from '../assets/userJourneyIcons';

const journeySteps = [
  {
    step: 'Step 1',
    title: 'Build Your Team',
    icon: buildTeamIcon
  },
  {
    step: 'Step 2',
    title: 'Compete Across India',
    icon: competeIndiaIcon
  },
  {
    step: 'Step 3',
    title: 'Earn National Ranking & Value',
    icon: rankingIcon
  },
  {
    step: 'Step 4',
    title: 'Join The League',
    icon: leagueIcon
  }
];

export default function UserJourney() {
  return (
    <section id="user-journey" className="user-journey-section">
      <div className="user-journey-container">
        <div className="user-journey-heading">
          <span>User Journey</span>
          <h2>Your Path To The League</h2>
          <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
        </div>

        <div className="user-journey-timeline">
          {journeySteps.map((item) => (
            <article className="user-journey-step" key={item.step}>
              <div className="journey-icon-ring">
                <img src={item.icon} alt="" aria-hidden="true" />
              </div>
              <div className="journey-step-stem" />
              <p className="journey-step-label">{item.step}</p>
              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
