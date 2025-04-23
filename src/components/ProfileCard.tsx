import React from 'react'
import './styles/ProfileCard.css'
import CustomButton from './CustomButton'
import Reveal from '../reveal_components/Reveal'
import { useTranslation } from 'react-i18next'

interface ProfileCardProps {
    handleProjectScroll: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ handleProjectScroll }) => {
    const { t } = useTranslation();

    return (
        <div className='profile_card_container'>
            <div className='info_container'>
                <Reveal delayOrder={0}><h2>{t('profileCard.title')}</h2></Reveal>
                <Reveal delayOrder={2}>
                    <p>{t('profileCard.description')}</p>
                </Reveal>
                <div className='button_container'>
                    <Reveal delayOrder={3}>
                        <CustomButton text={t('profileCard.buttonText')} onClick={handleProjectScroll} />
                    </Reveal>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard
