import React, { useEffect, useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const ProductModal = ({ product, onClose, onQuoteClick }) => {
    const overlayRef = useRef(null)
    const { t, isArabic } = useLanguage()

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

    if (!product) return null

    return (
        <div className="modal-overlay" ref={overlayRef} onClick={handleOverlayClick}>
            <div className="modal" style={{ direction: isArabic ? 'rtl' : 'ltr', textAlign: isArabic ? 'right' : 'left' }}>
                {product.image && (
                    <div className="modal-product-image">
                        <img src={product.image} alt={product.name} />
                    </div>
                )}
                <div className="modal-header" style={{ flexDirection: isArabic ? 'row-reverse' : 'row' }}>
                    <div>
                        <h2 className={isArabic ? "arabic" : ""}>{product.name}</h2>
                        <p className={isArabic ? "arabic" : ""} style={{ color: 'var(--text-on-light-muted)', fontSize: '0.95rem' }}>{product.tagline}</p>
                    </div>
                    <button className="modal-close" onClick={onClose}>✕</button>
                </div>

                <div className="modal-specs">
                    {product.specs.map((spec, i) => (
                        <div className="modal-spec" key={i}>
                            <div className={`modal-spec-label ${isArabic ? "arabic" : ""}`}>{t('modal.spec')}</div>
                            <div className={`modal-spec-value ${isArabic ? "arabic" : ""}`} style={{ fontSize: 'var(--font-base)' }}>{spec}</div>
                        </div>
                    ))}
                </div>

                <div className="modal-features">
                    <h3 className={isArabic ? "arabic" : ""}>{t('modal.features')}</h3>
                    <ul>
                        {product.features.map((feature, i) => (
                            <li key={i} className={isArabic ? "arabic" : ""}>{feature}</li>
                        ))}
                    </ul>
                </div>

                {product.pdf && (
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'var(--space-md)' }}>
                        <button className={`btn btn-primary ${isArabic ? "arabic" : ""}`} onClick={() => window.open(product.pdf, '_blank', 'noopener,noreferrer')} style={{ padding: '12px 40px', justifyContent: 'center' }}>
                            <span></span> {t('modal.pdf')}
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductModal
