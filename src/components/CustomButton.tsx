import React from 'react'
import './styles/CustomButton.css'

interface CustomButtonProps {
    text: string,
    onClick?: () => void
}
const CustomButton: React.FC<CustomButtonProps> = ({ text, onClick }) => {
    return (
        <div id="container">
            <button className="learn-more" onClick={onClick}>
                <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                </span>
                <span className="button-text">{text}</span>
            </button>
        </div>
    );
};

export default CustomButton;
