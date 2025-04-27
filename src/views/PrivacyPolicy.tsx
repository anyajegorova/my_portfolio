import React from 'react'
import './styles/PrivacyPolicy.css'

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy-container">
            <h1 className="privacy-policy-title">Privacy Policy</h1>
            <h3 className="privacy-policy-date">Last updated: 27.04.2025</h3>
            <h2 className="privacy-policy-section-title">Information We Collect</h2>
            <p className="privacy-policy-text">
                We use Google Analytics to collect basic information about how visitors use our website.
                This includes:
            </p>
            <ul className="privacy-policy-list">
                <li>Pages visited</li>
                <li>Time spent on pages</li>
                <li>Browser and device information</li>
                <li>Country (general, not exact location)</li>
            </ul>
            <p className="privacy-policy-text">
                We do not collect any personal data such as names, email addresses, or phone numbers through tracking.
                If you choose to contact us through the contact form, any information you provide (such as your email address or message) will only be used to respond to your inquiry and will not be shared with third parties.
            </p>
            <h2 className="privacy-policy-section-title">Cookies</h2>
            <p className="privacy-policy-text">We use cookies to:</p>
            <ul className="privacy-policy-list">
                <li>Analyze website traffic (Google Analytics)</li>
            </ul>
            <p className="privacy-policy-text">
                Cookies are small text files stored on your device to improve your experience. You can accept or decline cookies when visiting our site.
            </p>
            <h2 className="privacy-policy-section-title">Your Rights</h2>
            <p className="privacy-policy-text">Under the General Data Protection Regulation (GDPR), you have the right to:</p>
            <ul className="privacy-policy-list">
                <li>Request access to your personal data</li>
                <li>Request correction of your personal data</li>
                <li>Request deletion of your personal data</li>
                <li>Withdraw your consent at any time</li>
            </ul>
            <p className="privacy-policy-text">
                If you have any questions or concerns about your data, please contact us through the contact form.
            </p>
            <h2 className="privacy-policy-section-title">Changes to This Privacy Policy</h2>
            <p className="privacy-policy-text">
                We may update this Privacy Policy occasionally. Any changes will be posted on this page.
            </p>
            <h2 className="privacy-policy-section-title">Contact</h2>
            <p className="privacy-policy-text">
                If you have any questions about this Privacy Policy, please contact us through the contact form.
            </p>
        </div>
    )
}

export default PrivacyPolicy
