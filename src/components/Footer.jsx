import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Footer = () => {
    const { t, isArabic } = useLanguage()

    return (
        <footer className="footer" id="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <a className="nav-logo" href="#" style={{ backgroundColor: 'white', padding: '15px 25px', borderRadius: '12px', display: 'inline-block', marginBottom: '15px' }}>
                            <img src="/nextera-logo.svg" alt="Nextera Electricals" style={{ display: 'block', height: '40px' }} />
                        </a>
                        <div className="footer-contact-info">
                            <a href="tel:+97317000000">📞 +973 1700 0000</a>
                            <a href="mailto:info@nexteraelectricals.com">📧 info@nexteraelectricals.com</a>
                            <a href="#" className={`contact-address ${isArabic ? "arabic rtl-text" : ""}`}>
                                📍 {isArabic ? "المملكة العربية السعودية، البحرين إلى الشرق الأوسط وأفريقيا" : "KSA, Bahrain to Middle East and Africa"}
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom" style={{ justifyContent: 'center' }}>
                    <p className={`copyright ${isArabic ? "arabic rtl-text" : ""}`}>
                        © {new Date().getFullYear()} {isArabic ? "نكستيرا للكهربائيات (ذ.م.م)." : "Nextera Electricals Co. W.L.L."} {t('footer.rights')} {isArabic ? "صمم الموقع بواسطة Aiconik." : "Website created by Aiconik."}
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
