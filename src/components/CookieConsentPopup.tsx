import React, { useEffect } from 'react'
import CookieConsent, { Cookies } from 'react-cookie-consent'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const CookieConsentPopup: React.FC = () => { // Added React.FC type
    const GA_ID: string | undefined = import.meta.env.VITE_GA_MEASUREMENT_ID;
    const { t } = useTranslation()

    useEffect(() => {
        const consent: string | undefined = Cookies.get('CookieConsent') 
        if (consent === "true") {
            // User accepted cookies
            const script1: HTMLScriptElement = document.createElement('script') 
            script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
            script1.async = true
            document.head.appendChild(script1)

            const script2: HTMLScriptElement = document.createElement('script')
            script2.innerHTML = `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `
            document.head.appendChild(script2)
        }
    }, [GA_ID])

    return (
        <CookieConsent
            location="bottom"
            buttonText={t('cookieConsent.accept')}
            declineButtonText={t('cookieConsent.decline')}
            cookieName="CookieConsent"
            style={{
                background: "#1C1C1E",
                fontSize: "14px",
                padding: "10px",
                textAlign: "center",
                justifyContent: "center",
                flexWrap: "wrap"
            }}
            buttonStyle={{
                background: "#fff",
                color: "#1C1C1E",
                fontSize: "13px",
                borderRadius: "5px",
                padding: "8px 16px",
                margin: "5px",
            }}
            declineButtonStyle={{
                background: "#1C1C1E",
                color: "#fff",
                fontSize: "13px",
                borderRadius: "5px",
                borderColor: "#fff",
                borderWidth: "1px",
                borderStyle: "solid",
                padding: "8px 16px",
                margin: "5px"
            }}
            enableDeclineButton
            expires={150}
        >
            {t('cookieConsent.message')}{" "}
            <Link to="/privacy-policy" style={{ color: "#00c3ff", textDecoration: "underline" }}>
                {t('cookieConsent.privacyPolicyLink')}
            </Link>{" "}
            {t('cookieConsent.moreDetails')}
        </CookieConsent>
    )
}

export default CookieConsentPopup