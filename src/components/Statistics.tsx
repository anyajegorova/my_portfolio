import React from 'react'
import './styles/Statistics.css'
import Reveal from '../reveal_components/Reveal';
import NumberCounter from '../reveal_components/NumberCounter';

const Statistics = () => {
  const stats = [
    { percentage: '75', description: "Percent of users assess a company's credibility on its website design" },
    { percentage: '53', description: 'Percent of mobile users abandon sites that take longer than 3 seconds to load' },
    { percentage: '88', description: 'Percent of online consumers are less likely to return after a bad user experience' },
  ];

  return (
    <div style={{padding: '1em'}}>
    <div className='statistics_container'>
      {stats.map((stat, index) => (
        <div key={index} className='statistics_card'>
          <Reveal delayOrder={0}>
            <h1>
              <NumberCounter from={0} to={parseInt(stat.percentage)} duration={1.5} />
            </h1>
          </Reveal>

          <Reveal delayOrder={1}> <h3>{stat.description}</h3></Reveal>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Statistics
