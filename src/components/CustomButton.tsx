import React from 'react'
import './styles/CustomButton.css'

interface CustomButtonProps {
    text: string
}

const CustomButton: React.FC<CustomButtonProps> = ({ text }) => {
    return (
        <button>
            {text}
        </button>
    )
}

export default CustomButton
