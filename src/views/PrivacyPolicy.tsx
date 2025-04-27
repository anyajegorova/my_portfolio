import React from 'react'
import { useTranslation } from 'react-i18next'
import './styles/PrivacyPolicy.css'

const PrivacyPolicy = () => {
    const { t } = useTranslation()

    return (
        <div className="privacy-policy-container">
            <h1 className="privacy-policy-title">{t('privacyPolicy.title')}</h1>
            <h3 className="privacy-policy-date">{t('privacyPolicy.lastUpdated')}</h3>
            <h2 className="privacy-policy-section-title">{t('privacyPolicy.informationWeCollect.title')}</h2>
            <p className="privacy-policy-text">{t('privacyPolicy.informationWeCollect.description')}</p>
            <ul className="privacy-policy-list">
                {(t('privacyPolicy.informationWeCollect.list', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <p className="privacy-policy-text">{t('privacyPolicy.informationWeCollect.additionalInfo')}</p>
            <h2 className="privacy-policy-section-title">{t('privacyPolicy.cookies.title')}</h2>
            <p className="privacy-policy-text">{t('privacyPolicy.cookies.description')}</p>
            <ul className="privacy-policy-list">
                {(t('privacyPolicy.cookies.list', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <p className="privacy-policy-text">{t('privacyPolicy.cookies.additionalInfo')}</p>
            <h2 className="privacy-policy-section-title">{t('privacyPolicy.yourRights.title')}</h2>
            <p className="privacy-policy-text">{t('privacyPolicy.yourRights.description')}</p>
            <ul className="privacy-policy-list">
                {(t('privacyPolicy.yourRights.list', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <p className="privacy-policy-text">{t('privacyPolicy.yourRights.additionalInfo')}</p>
            <h2 className="privacy-policy-section-title">{t('privacyPolicy.changes.title')}</h2>
            <p className="privacy-policy-text">{t('privacyPolicy.changes.description')}</p>
            <h2 className="privacy-policy-section-title">{t('privacyPolicy.contact.title')}</h2>
            <p className="privacy-policy-text">{t('privacyPolicy.contact.description')}</p>
        </div>
    )
}

export default PrivacyPolicy
