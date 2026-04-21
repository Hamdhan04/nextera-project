import React, { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const QuoteModal = ({ product, onClose }) => {
    const overlayRef = useRef(null)
    const { t, isArabic } = useLanguage()
    const [submitted, setSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: product ? product.name : 'solar-lighting',
        message: product ? `I am interested in requesting a quote for: ${product.name}.\n\nAdditional details:` : '',
    })

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
        setSubmitted(true)
    }

    return (
        <div className="modal-overlay" ref={overlayRef} onClick={handleOverlayClick}>
            <div className="modal" style={{ direction: isArabic ? 'rtl' : 'ltr', textAlign: isArabic ? 'right' : 'left' }}>
                <div className="modal-header" style={{ flexDirection: isArabic ? 'row-reverse' : 'row' }}>
                    <div>
                        <h2 className={isArabic ? "arabic" : ""}>{t('quote.title')}</h2>
                        <p className={isArabic ? "arabic" : ""} style={{ color: 'var(--text-on-light-muted)', fontSize: '0.95rem' }}>
                            {t('quote.p')}
                        </p>
                    </div>
                    <button className="modal-close" onClick={onClose}>✕</button>
                </div>

                {submitted ? (
                    <div className="success-message">
                        <div className="check-icon">✓</div>
                        <h3 className={isArabic ? "arabic" : ""}>{t('quote.success')}</h3>
                        <p className={isArabic ? "arabic" : ""}>{t('quote.successP')}</p>
                        <button
                            className={`btn btn-primary ${isArabic ? "arabic" : ""}`}
                            style={{ marginTop: '1.5rem', justifyContent: 'center' }}
                            onClick={onClose}
                        >
                            {t('quote.close')}
                        </button>
                    </div>
                ) : (
                    <form className="quote-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label className={isArabic ? "arabic" : ""} htmlFor="quote-name">{t('quote.name')}</label>
                                <input
                                    type="text"
                                    id="quote-name"
                                    name="name"
                                    placeholder={t('quote.placeholder.name')}
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className={isArabic ? "arabic" : ""}
                                />
                            </div>
                            <div className="form-group">
                                <label className={isArabic ? "arabic" : ""} htmlFor="quote-email">{t('quote.email')}</label>
                                <input
                                    type="email"
                                    id="quote-email"
                                    name="email"
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label className={isArabic ? "arabic" : ""} htmlFor="quote-phone">{t('quote.phone')}</label>
                                <input
                                    type="tel"
                                    id="quote-phone"
                                    name="phone"
                                    placeholder="+973 0000 0000"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className={isArabic ? "arabic" : ""} htmlFor="quote-service">{t('quote.service')}</label>
                            <select
                                id="quote-service"
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className={isArabic ? "arabic" : ""}
                            >
                                {product && <option value={product.name}>{product.name}</option>}
                                <option value="solar-lighting">{t('quote.opt.solar')}</option>
                                <option value="pv-modules">{t('quote.opt.pv')}</option>
                                <option value="solar-home">{t('quote.opt.home')}</option>
                                <option value="on-grid">{t('quote.opt.on')}</option>
                                <option value="off-grid">{t('quote.opt.off')}</option>
                                <option value="custom">{t('quote.opt.custom')}</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label className={isArabic ? "arabic" : ""} htmlFor="quote-message">{t('quote.details')}</label>
                            <textarea
                                id="quote-message"
                                name="message"
                                placeholder={t('quote.placeholder.details')}
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className={isArabic ? "arabic" : ""}
                            />
                        </div>

                        <button type="submit" className={`btn btn-primary ${isArabic ? "arabic" : ""}`} style={{ width: '100%', justifyContent: 'center' }}>
                            <span></span> {t('quote.submit')}
                        </button>
                    </form>
                )}
            </div>
        </div>
    )
}

export default QuoteModal
