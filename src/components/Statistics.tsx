import React from 'react'
import './styles/Statistics.css'
import Reveal from '../reveal_components/Reveal';
import NumberCounter from '../reveal_components/NumberCounter';
import { useTranslation } from 'react-i18next';

const Statistics = () => {
  const { t } = useTranslation();

  const stats = [
    { percentage: '75', description: t('statistics.credibility') },
    { percentage: '53', description: t('statistics.abandonment') },
    { percentage: '88', description: t('statistics.userExperience') },
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
