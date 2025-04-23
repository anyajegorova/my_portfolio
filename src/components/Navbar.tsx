import React, { useContext } from 'react';
import './styles/Navbar.css';
import { ActiveSectionContext } from '../context/ActiveSectionContext';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next'

const Navbar = ({ handleAboutScroll, handleProjectScroll, handleContactScroll }) => {
    const { activeSection } = useContext(ActiveSectionContext);
    const { t } = useTranslation();

    return (
        <nav className='navigation'>
            <span className={`logo ${activeSection === 'about' ? 'active' : ''}`} onClick={handleAboutScroll}>
                {t('navbar.logo')}
            </span>
            <h3 className={`nav-item ${activeSection === 'about' ? 'active' : ''}`} onClick={handleAboutScroll}>
                {t('navbar.about')}
            </h3>
            <h3 className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`} onClick={handleProjectScroll}>
                {t('navbar.projects')}
            </h3>
            <h3 className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`} onClick={handleContactScroll}>
                {t('navbar.contact')}
            </h3>
            <LanguageSwitcher />
        </nav>
    )
}

export default Navbar;