import React from 'react'
import './styles/TechnologiesChip.css'

interface TechnologyChipProps {
  image: string;
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

const TechnologyChip: React.FC<TechnologyChipProps> = ({ image, text, className, style }) => {
  return (
    <div className={`technology_chip ${className}`} style={style}>
      <img src={image} alt={text} />
      <span className='technology_chip_text'>{text}</span>
    </div>
  )
}

export default TechnologyChip
