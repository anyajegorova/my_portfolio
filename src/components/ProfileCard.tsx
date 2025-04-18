import React from 'react'
import './styles/ProfileCard.css'
import ProfileImage from '../assets/AnnaJegorova.png'
import CustomButton from './CustomButton'
import Reveal from '../reveal_components/Reveal'

interface ProfileCardProps {
    handleProjectScroll: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ handleProjectScroll }) => {
    return (
        <div className='profile_card_container'>

            <div className='info_container'>
                <Reveal><h2>Web Solutions That Help Your Business Grow </h2></Reveal>
                <Reveal>              <p>
                Need a fast, modern website that actually converts visitors into customers?
                I build custom websites and web applications that are not just beautiful — but strategic, user-friendly, and built to grow your business.
                </p></Reveal>
                <div className='button_container'>
                    <Reveal><CustomButton text='See Projects' onClick={handleProjectScroll} /></Reveal>
                </div>

            </div>
        </div>
    )
}

export default ProfileCard
