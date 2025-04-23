import React from 'react';
import './styles/MobileMenu.css';
import { useTranslation } from 'react-i18next';

const MobileMenu = ({ handleAboutScroll, handleProjectScroll, handleContactScroll, closeMenu }) => {
    const { t } = useTranslation();

    const handleClick = (scrollFunction) => {
        scrollFunction();
        closeMenu();
    };

    return (
        <div className="mobile-menu-overlay">
            <div className="mobile-menu-content">
                <h3 onClick={() => handleClick(handleAboutScroll)}>{t('navbar.about')}</h3>
                <h3 onClick={() => handleClick(handleProjectScroll)}>{t('navbar.projects')}</h3>
                <h3 onClick={() => handleClick(handleContactScroll)}>{t('navbar.contact')}</h3>
                <button className="close-button" onClick={closeMenu}>✕</button>
            </div>
        </div>
    );
};

export default MobileMenu;
