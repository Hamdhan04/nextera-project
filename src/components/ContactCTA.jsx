import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const ContactCTA = ({ onQuoteClick, onContactClick }) => {
    const { t, isArabic } = useLanguage()

    return (
        <section className="section section-transparent" id="contact-cta">
            <div className="container">
                <div className="contact-cta-content">
                    <h2 className={`section-title section-title-light ${isArabic ? "arabic rtl-text" : ""}`}>
                        {t('cta.title') || "Ready to Get Started?"}
                    </h2>
                    <p className={isArabic ? "arabic rtl-text" : ""}>
                        {t('cta.p') || "Looking for a reliable solar or electrical solution for your project? Our team is ready to assist with technical consultation and quotations."}
                    </p>
                    <div className={`contact-cta-buttons ${isArabic ? "arabic" : ""}`} style={{ flexDirection: isArabic ? 'row-reverse' : 'row' }}>
                        <button className="btn btn-white" onClick={onQuoteClick}>
                            <span></span> {t('cta.btn1')}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactCTA
