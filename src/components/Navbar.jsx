import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

const Navbar = ({ onLoginClick }) => {
    const [mobileOpen, setMobileOpen] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    const { t, isArabic, language, toggleLanguage } = useLanguage()

    // Handle initial hash routing when coming from another page
    useEffect(() => {
        if (location.pathname === '/' && location.hash) {
            setTimeout(() => {
                const el = document.getElementById(location.hash.substring(1))
                if (el) el.scrollIntoView({ behavior: 'smooth' })
            }, 300)
        }
    }, [location])

    const handleHomeClick = (e) => {
        e.preventDefault()
        if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
            navigate('/')
            setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)
        }
        setMobileOpen(false)
    }

    const scrollTo = (id) => {
        if (location.pathname !== '/') {
            navigate(`/#${id}`)
            setMobileOpen(false)
            return
        }

        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
            setMobileOpen(false)
        }
    }

    return (
        <nav className="navbar" id="navbar">
            <div className="container">
                <a className="nav-logo" href="/" onClick={handleHomeClick}>
                    <img src="/nextera-logo.svg" alt="Nextera Electricals" />
                </a>

                <div className={`nav-links ${mobileOpen ? 'open' : ''}`}>
                    <a href="/" onClick={handleHomeClick} className={isArabic ? "arabic rtl-text" : ""}>{t('nav.home')}</a>
                    <a href="/about-us" onClick={(e) => { e.preventDefault(); navigate('/about-us'); setMobileOpen(false); }} className={isArabic ? "arabic rtl-text" : ""}>{t('nav.about')}</a>
                    <a href="/#solutions" onClick={(e) => { e.preventDefault(); scrollTo('solutions') }} className={isArabic ? "arabic rtl-text" : ""}>{t('nav.solutions')}</a>
                    <a href="/#products" onClick={(e) => { e.preventDefault(); scrollTo('products') }} className={isArabic ? "arabic rtl-text" : ""}>{t('nav.products')}</a>
                    <a href="/contact" onClick={(e) => { e.preventDefault(); navigate('/contact'); setMobileOpen(false); }} className={isArabic ? "arabic rtl-text" : ""}>{t('nav.contact')}</a>
                    
                    <div className="nav-lang-toggle" onClick={toggleLanguage}>
                        <span className={language === 'en' ? 'active' : ''}>EN</span>
                        <span className="separator">|</span>
                        <span className={`arabic ${language === 'ar' ? 'active' : ''}`}>AR</span>
                    </div>

                    <button className={`nav-cta-btn ${isArabic ? "arabic rtl-text" : ""}`} onClick={() => { if(onLoginClick) onLoginClick(); setMobileOpen(false); }}>
                        {t('nav.login')}
                    </button>
                </div>

                <button className="nav-mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
                    <span style={mobileOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
                    <span style={mobileOpen ? { opacity: 0 } : {}} />
                    <span style={mobileOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
                </button>
            </div>
        </nav>
    )
}

export default Navbar
