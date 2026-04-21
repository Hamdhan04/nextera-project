import React, { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const stats = [
    { icon: '🏭', number: 2010, suffix: '', label: 'Established Since' },
    { icon: '☀️', number: 14, suffix: '+', label: 'Years Experience' },
    { icon: '🏗️', number: 500, suffix: '+', label: 'Projects Delivered' },
]

const AnimatedCounter = ({ target, suffix }) => {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const hasAnimated = useRef(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true
                    const duration = 2000
                    const start = performance.now()

                    const animate = (now) => {
                        const elapsed = now - start
                        const progress = Math.min(elapsed / duration, 1)
                        const eased = 1 - Math.pow(1 - progress, 3)
                        setCount(Math.floor(eased * target))
                        if (progress < 1) requestAnimationFrame(animate)
                    }

                    requestAnimationFrame(animate)
                }
            },
            { threshold: 0.5 }
        )

        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [target])

    const formatNumber = (n) => n >= 1000 ? n.toLocaleString() : n

    return (
        <span ref={ref} className="stat-number">
            {formatNumber(count)}{suffix}
        </span>
    )
}

const Hero = ({ onExploreClick }) => {
    const { t, isArabic } = useLanguage()
    
    return (
        <section className="hero" id="hero">
            <div className="hero-overlay" />

            <div className="hero-content">
                <h1 className={isArabic ? "arabic rtl-text" : ""}>
                    {t('hero.title1')}<span className="highlight">{t('hero.titleHighlight')}</span>{t('hero.title2')}
                </h1>

                <p className={`hero-description ${isArabic ? "arabic rtl-text" : ""}`}>
                    {t('hero.desc')}
                </p>

                <div className="hero-ctas">
                    <button className={`btn btn-primary ${isArabic ? "arabic" : ""}`} onClick={onExploreClick}>
                        <span></span> {t('hero.btn')}
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero
