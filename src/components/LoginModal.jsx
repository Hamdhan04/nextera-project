import React, { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const LoginModal = ({ onClose }) => {
    const overlayRef = useRef(null)
    const { t, isArabic } = useLanguage()
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        requestAnimationFrame(() => {
            if (overlayRef.current) {
                overlayRef.current.classList.add('active')
            }
        })

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose()
        }
        document.addEventListener('keydown', handleKeyDown)
        document.body.style.overflow = 'hidden'

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = ''
        }
    }, [onClose])

    const handleOverlayClick = (e) => {
        if (e.target === overlayRef.current) onClose()
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle login logic
        console.log('Login submitted:', formData)
        setSubmitted(true)
    }

    const handleGoogleLogin = () => {
        // Handle Google logic
        console.log('Google login clicked')
        setSubmitted(true)
    }

    return (
        <div className="modal-overlay" ref={overlayRef} onClick={handleOverlayClick}>
            <div className="modal" style={{ maxWidth: '500px', direction: isArabic ? 'rtl' : 'ltr', textAlign: isArabic ? 'right' : 'left' }}>
                <div className="modal-header" style={{ flexDirection: isArabic ? 'row-reverse' : 'row' }}>
                    <div>
                        <h2 className={isArabic ? "arabic" : ""}>{isArabic ? "تسجيل الدخول" : "Login"}</h2>
                        <p className={isArabic ? "arabic" : ""} style={{ color: 'var(--text-on-light-muted)', fontSize: '0.95rem' }}>
                            {isArabic ? "مرحبًا بك من جديد! يرجى إدخال بياناتك." : "Welcome back! Please enter your details."}
                        </p>
                    </div>
                    <button className="modal-close" onClick={onClose}>✕</button>
                </div>

                {submitted ? (
                    <div className="success-message" style={{ textAlign: 'center', padding: '2rem 0' }}>
                        <div className="check-icon" style={{ fontSize: '3rem', color: '#10b981', marginBottom: '1rem' }}>✓</div>
                        <h3 className={isArabic ? "arabic" : ""}>{isArabic ? "تم تسجيل الدخول بنجاح!" : "Login Successful!"}</h3>
                        <p className={isArabic ? "arabic" : ""} style={{ color: 'var(--text-on-light-muted)', margin: '1rem 0' }}>
                            {isArabic ? "لقد قمت بتسجيل الدخول إلى حسابك بنجاح." : "You have successfully logged in to your account."}
                        </p>
                        <button
                            className={`btn btn-primary ${isArabic ? "arabic" : ""}`}
                            style={{ marginTop: '1.5rem', width: '100%', justifyContent: 'center' }}
                            onClick={onClose}
                        >
                            {isArabic ? "المتابعة إلى لوحة التحكم" : "Continue to Dashboard"}
                        </button>
                    </div>
                ) : (
                    <form className="quote-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className={isArabic ? "arabic" : ""} htmlFor="login-email">{isArabic ? "البريد الإلكتروني" : "Email Address"}</label>
                            <input
                                type="email"
                                id="login-email"
                                name="email"
                                placeholder={isArabic ? "البريد الإلكتروني الخاص بك" : "your@email.com"}
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className={isArabic ? "arabic" : ""}
                            />
                        </div>
                        
                        <div className="form-group">
                            <label className={isArabic ? "arabic" : ""} htmlFor="login-password">{isArabic ? "كلمة المرور" : "Password"}</label>
                            <input
                                type="password"
                                id="login-password"
                                name="password"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className={isArabic ? "arabic" : ""}
                            />
                        </div>

                        <button type="submit" className={`btn btn-primary ${isArabic ? "arabic" : ""}`} style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
                            <span></span> {isArabic ? "تسجيل الدخول" : "Login"}
                        </button>
                        
                        <div style={{ display: 'flex', alignItems: 'center', margin: '1.5rem 0', flexDirection: isArabic ? 'row-reverse' : 'row' }}>
                            <div style={{ flex: 1, height: '1px', backgroundColor: '#e2e8f0' }}></div>
                            <span className={isArabic ? "arabic" : ""} style={{ padding: '0 10px', color: '#64748b', fontSize: '0.9rem', fontWeight: '500' }}>{isArabic ? "أو" : "OR"}</span>
                            <div style={{ flex: 1, height: '1px', backgroundColor: '#e2e8f0' }}></div>
                        </div>
                        
                        <button type="button" className={`btn ${isArabic ? "arabic" : ""}`} onClick={handleGoogleLogin} style={{ 
                            width: '100%', 
                            justifyContent: 'center', 
                            backgroundColor: 'white', 
                            color: '#334155', 
                            border: '1px solid #cbd5e1',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '0.75rem 1.5rem',
                            borderRadius: '0.5rem',
                            fontWeight: '500',
                            cursor: 'pointer',
                            flexDirection: isArabic ? 'row-reverse' : 'row',
                            transition: 'background-color 0.2s'
                        }} onMouseOver={(e) => e.target.style.backgroundColor = '#f8fafc'} onMouseOut={(e) => e.target.style.backgroundColor = 'white'}>
                            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" style={{ width: '20px', height: '20px' }} />
                            {isArabic ? "الاستمرار باستخدام Google" : "Continue with Google"}
                        </button>
                    </form>
                )}
            </div>
        </div>
    )
}

export default LoginModal
