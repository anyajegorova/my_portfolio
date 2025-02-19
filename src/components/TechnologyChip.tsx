import React from 'react'
import './styles/TechnologiesChip.css'

interface TechnologyChipProps {
  image: string;
  text: string;
}

const TechnologyChip: React.FC<TechnologyChipProps> = ({ image, text }) => {
  return (
    <div className='technology_chip'>
      <img src={image} alt={text} />
      <span>{text}</span>
    </div>
  )
}

export default TechnologyChip
