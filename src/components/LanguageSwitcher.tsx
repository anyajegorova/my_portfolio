import React, { useState } from 'react';
import './styles/LanguageSwitcher.css'
import i18n from "i18next";

const LanguageSwitcher = () => {
    const [activeLang, setActiveLang] = useState<"fi" | "en">(i18n.language as "fi" | "en");

    const handleSelect = (lang: "fi" | "en") => {
        i18n.changeLanguage(lang);
        setActiveLang(lang);
    };

    return (
        <div>
            <div className="language-switcher">
                <button
                    onClick={() => handleSelect("en")}
                    className={`language-link ${activeLang === "en" ? "active" : ""}`}
                >
                    EN
                </button>
                <span className="separator">|</span>
                <button
                    onClick={() => handleSelect("fi")}
                    className={`language-link ${activeLang === "fi" ? "active" : ""}`}
                >
                    FI
                </button>
            </div>
        </div>
    );
};

export default LanguageSwitcher;
