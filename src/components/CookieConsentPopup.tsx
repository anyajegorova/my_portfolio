import React, { useEffect } from 'react'
import CookieConsent, { Cookies } from 'react-cookie-consent'

const CookieConsentPopup = () => {
    useEffect(() => {
        const consent = Cookies.get('CookieConsent');
        if (consent === "true") {
            // User accepted cookies
            const script1 = document.createElement('script');
            script1.src = `https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`; // <-- Your GA ID here
            script1.async = true;
            document.head.appendChild(script1);

            const script2 = document.createElement('script');
            script2.innerHTML = `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `;
            document.head.appendChild(script2);
        }
    }, []);

    return (
        <CookieConsent
            location="bottom"
            buttonText="Accept"
            declineButtonText="Decline"
            cookieName="CookieConsent"
            style={{
                background: "#1C1C1E",
                fontSize: "14px",
                padding: "10px",
                textAlign: "center",
                justifyContent: "center",
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
            We use cookies to improve your browsing experience and analyze website traffic through Google Analytics.{" "}
            By clicking "Accept", you consent to the use of cookies.{" "}
            <a href="/privacy-policy" style={{ color: "#00c3ff", textDecoration: "underline" }}>
                See our Privacy Policy
            </a>{" "}
            for more details.
        </CookieConsent>
    );
}

export default CookieConsentPopup;