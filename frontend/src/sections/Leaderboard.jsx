import React, { useState, useEffect } from 'react';
import { Trophy, Medal, Sparkles } from 'lucide-react';

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);

  const fallbackLeaderboard = [
    { _id: '1', rank: 1, teamName: 'Team Ares Robotics', botName: 'ARES', wins: 14, losses: 1, points: 280, tier: 'Challenger' },
    { _id: '2', rank: 2, teamName: 'Typhoon Warriors', botName: 'TYPHOON', wins: 12, losses: 3, points: 240, tier: 'Master' },
    { _id: '3', rank: 3, teamName: 'Inferno Tech', botName: 'HELLFIRE', wins: 11, losses: 4, points: 220, tier: 'Master' },
    { _id: '4', rank: 4, teamName: 'Viper Bots', botName: 'VIPER', wins: 9, losses: 5, points: 180, tier: 'Gold' },
    { _id: '5', rank: 5, teamName: 'Cyber Knights', botName: 'EXCALIBUR', wins: 8, losses: 6, points: 160, tier: 'Gold' }
  ];

  useEffect(() => {
    fetch('/api/leaderboard')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data.length > 0) {
          setLeaderboard(data.data);
        } else {
          setLeaderboard(fallbackLeaderboard);
        }
        setLoading(false);
      })
      .catch(() => {
        setLeaderboard(fallbackLeaderboard);
        setLoading(false);
      });
  }, []);

  const getTierClass = (tier) => {
    switch (tier.toLowerCase()) {
      case 'challenger': return 'tier-challenger';
      case 'master': return 'tier-master';
      case 'gold': return 'tier-gold';
      case 'silver': return 'tier-silver';
      default: return 'tier-bronze';
    }
  };

  // return (
  //   <section id="ranks" className="section ranks-leaderboard-section">
  //     <div className="spotlight-blue" />
  //     <div className="container">
  //       <div className="section-title-wrapper">
  //         <h2 className="section-title">National Rankings</h2>
  //         <p className="section-subtitle">
  //           Track the best robotic combat squads in the country. Win rates, points, and tiers update dynamically.
  //         </p>
  //       </div>

  //       {loading ? (
  //         <div className="skeleton-loader-wrapper">
  //           <div className="skeleton-table-row" />
  //           <div className="skeleton-table-row" />
  //         </div>
  //       ) : (
  //         <div className="leaderboard-container-full">
  //           {/* Top 3 Podium Card display */}
  //           <div className="podium-display-full">
  //             {leaderboard.slice(0, 3).map((team, idx) => {
  //               const orderClass = idx === 0 ? 'first' : idx === 1 ? 'second' : 'third';
  //               const medalColor = idx === 0 ? '#ffb800' : idx === 1 ? '#cbd5e1' : '#b45309';
  //               return (
  //                 <div key={team._id} className={`podium-box-full ${orderClass}`}>
  //                   <div className="medal-position">
  //                     <Medal size={30} color={medalColor} />
  //                   </div>
  //                   <div className="bot-display-avatar">
  //                     <span>{team.botName[0]}</span>
  //                   </div>
  //                   <h4>{team.botName}</h4>
  //                   <span className="team-subtitle">{team.teamName}</span>
  //                   <span className="pts-value-display">{team.points} PTS</span>
  //                   <span className={`badge-tier-label ${getTierClass(team.tier)}`}>{team.tier}</span>
  //                 </div>
  //               );
  //             })}
  //           </div>

  //           {/* Leaderboard list rows */}
  //           <div className="leaderboard-panel glow-card" style={{ background: '#1E1E1E', borderColor: 'rgba(217, 217, 217, 0.36)' }}>
  //             <div className="leaderboard-list-header">
  //               <span>Rank</span>
  //               <span>Team & Bot</span>
  //               <span className="text-right">Record (W/L)</span>
  //               <span className="text-right">Total Points</span>
  //             </div>
              
  //             {leaderboard.map((team, idx) => (
  //               <div key={team._id} className="leaderboard-row">
  //                 <div className="row-rank">#{idx + 1}</div>
  //                 <div className="row-team">
  //                   <span className="row-bot-name">{team.botName}</span>
  //                   <span className="row-team-name">{team.teamName}</span>
  //                 </div>
  //                 <div className="row-record text-right">
  //                   <span className="text-win">{team.wins}W</span>
  //                   <span className="text-divider">/</span>
  //                   <span className="text-loss">{team.losses}L</span>
  //                 </div>
  //                 <div className="row-pts text-right">
  //                   <span className="pts-value">{team.points}</span>
  //                   <span className={`tier-badge ${getTierClass(team.tier)}`}>{team.tier}</span>
  //                 </div>
  //               </div>
  //             ))}
              
  //             <div className="leaderboard-footer">
  //               <Sparkles size={14} className="text-highlight-gold" />
  //               <span>Leaderboard syncs dynamically upon official bracket match completion.</span>
  //             </div>
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //   </section>
  // );
}
