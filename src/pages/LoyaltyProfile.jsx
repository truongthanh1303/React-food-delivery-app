import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common-section/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import './LoyaltyProfile.css';

const dummyProfile = {
  level: 12,
  xp: 786,
  xpMax: 1000,
  claimed: [
    {
      id: 1,
      icon: 'https://img.icons8.com/ios-filled/50/000000/medal2.png',
      level: 1,
      reward: '$400 + 150 FS',
      xp: 150,
    },
    {
      id: 2,
      icon: 'https://img.icons8.com/ios-filled/50/26e07f/medal2.png',
      level: 2,
      reward: '$400 + 150 FS',
      xp: 250,
    },
    {
      id: 3,
      icon: 'https://img.icons8.com/ios-filled/50/ffc107/medal2.png',
      level: 3,
      reward: '$400 + 150 FS',
      xp: 350,
    },
  ],
  locked: [
    { id: 13, icon: '', level: 13, reward: '$400 + 150 FS', xp: 1000 },
    { id: 14, icon: '', level: 14, reward: '$800 + 250 FS', xp: 1250 },
    { id: 15, icon: '', level: 15, reward: '$400 + 150 FS', xp: 1500 },
  ],
};

const LoyaltyProfile = () => {
  return (
    <Helmet title='Loyalty Profile'>
      <CommonSection title='Loyalty Profile' />
      <section className='loyalty-section'>
        <div className='loyalty-card'>
          <button className='loyalty-close'>×</button>
          <h2 className='loyalty-title'>Loyalty program</h2>
          <div className='loyalty-level-row'>
            <img
              src='https://img.icons8.com/ios-filled/50/000000/medal2.png'
              alt='level'
              className='loyalty-level-icon'
            />
            <div className='loyalty-level-info'>
              <div className='loyalty-level-label'>
                Level {dummyProfile.level}
              </div>
              <div className='loyalty-progress-bar'>
                <div
                  className='loyalty-progress'
                  style={{
                    width: `${(dummyProfile.xp / dummyProfile.xpMax) * 100}%`,
                  }}
                />
              </div>
              <div className='loyalty-xp'>
                {dummyProfile.xp} / {dummyProfile.xpMax} XP
              </div>
            </div>
          </div>

          <div className='loyalty-section-block'>
            <h3 className='loyalty-subtitle'>Claimed</h3>
            <div className='loyalty-grid'>
              {dummyProfile.claimed.map((item) => (
                <div className='loyalty-reward-card' key={item.id}>
                  <img
                    src={item.icon}
                    alt='claimed'
                    className='loyalty-reward-icon'
                  />
                  <div className='loyalty-reward-level'>Level {item.level}</div>
                  <div className='loyalty-reward-reward'>{item.reward}</div>
                  <div className='loyalty-reward-xp'>{item.xp} XP</div>
                </div>
              ))}
            </div>
          </div>

          <div className='loyalty-section-block'>
            <h3 className='loyalty-subtitle'>Locked</h3>
            <div className='loyalty-grid'>
              {dummyProfile.locked.map((item) => (
                <div
                  className='loyalty-reward-card loyalty-locked'
                  key={item.id}
                >
                  <div className='loyalty-locked-blur'>
                    <span className='loyalty-lock-icon'>🔒</span>
                  </div>
                  <div className='loyalty-reward-level'>Level {item.level}</div>
                  <div className='loyalty-reward-reward'>{item.reward}</div>
                  <div className='loyalty-reward-xp'>{item.xp} XP</div>
                </div>
              ))}
            </div>
          </div>

          <div className='loyalty-section-block'>
            <h3 className='loyalty-subtitle'>About</h3>
            <div className='loyalty-about'>
              Play your favorite games, get rewards, unlock new levels and win
              more! When playing slots, you'll accumulate experience points and
              unlock new rewards as you progress.
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default LoyaltyProfile;
