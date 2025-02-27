import React from 'react'
import './styles/CustomButton.css'

interface CustomButtonProps {
    text: string
}

const CustomButton: React.FC<CustomButtonProps> = ({ text }) => {
    return (
        <button className='custom_button' style={{ borderRadius: '16px' }}>
            <svg width="160px" height="40px" viewBox="0 0 160 40" className="border">
                <rect x="1.1" y="1,39" width="159.1" height="38" rx="16" ry="16" className="bg-line" />
                <rect x="1.1" y="1,39" width="159.1" height="38" rx="16" ry="16" className="hl-line" />
            </svg>
            <span>{text}</span>
        </button>
    )
}

export default CustomButton

// 159,1 159,39 1,39 1,1 159,1