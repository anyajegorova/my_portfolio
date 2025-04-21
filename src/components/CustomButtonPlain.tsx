import React from 'react'
import './styles/CustomButtonPlain.css'

interface CustomButtonPlainProps {
    text: string,
    onClick?: () => void
}
const CustomButtonPlain: React.FC<CustomButtonPlainProps> = ({ text, onClick }) => {
    return (
        <div className='custom-button-plain-container'>
            <button className='custom-button-plain' onClick={onClick}>
                <span className='button-text'>{text}</span>
            </button>
        </div>
    )
}

export default CustomButtonPlain
