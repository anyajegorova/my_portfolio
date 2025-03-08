import React from 'react'
import './styles/ProfileCard.css'
import ProfileImage from '../assets/AnnaJegorova.png'
import CustomButton from './CustomButton'

interface ProfileCardProps {
    handleProjectScroll: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ handleProjectScroll }) => {
    return (
        <div className='profile_card_container'>

            <div className='info_container'>
                <h2>WEB</h2>
                <h2>DEVELOPER</h2>
                <p>
                    I am <span>Anna Jegorova</span> - a web developer with a passion for creating beautiful and functional websites. I have experience with both front-end and back-end technologies, and I am always looking to learn new things.
                </p>
                <div className='button_container'>
                    <CustomButton text='See Projects' onClick={handleProjectScroll} />
                </div>

            </div>
            <div className='image_container'>
                <img src={ProfileImage} alt='Anna Jegorova' />
            </div>
        </div>
    )
}

export default ProfileCard
