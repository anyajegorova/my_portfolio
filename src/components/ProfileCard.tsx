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
                <Reveal><h2>WEB</h2></Reveal>
                <Reveal><h2>DEVELOPER</h2></Reveal>
                <Reveal>              <p>
                    I am <span>Anna Jegorova</span> - a web developer with a passion for creating beautiful and functional websites. I have experience with both front-end and back-end technologies, and I am always looking to learn new things.
                </p></Reveal>
                <div className='button_container'>
                    <Reveal><CustomButton text='See Projects' onClick={handleProjectScroll} /></Reveal>
                </div>

            </div>
            <div className='image_container'>
                <Reveal> <img src={ProfileImage} alt='Anna Jegorova' /></Reveal>
            </div>
        </div>
    )
}

export default ProfileCard
