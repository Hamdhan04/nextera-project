import React, { useEffect, useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const values = [
    {
        title: 'Integrity',
        description: 'Transparent and ethical business practices in every engagement.',
    },
    {
        title: 'Quality',
        description: 'International standards and strict quality control across all products.',
    },
    {
        title: 'Innovation',
        description: 'Continuous development of cutting-edge energy technologies.',
    },
    {
        title: 'Accountability',
        description: 'Reliable delivery and long-term partnerships with every client.',
    },
]

const AboutUs = () => {
    const sectionRef = useRef(null)
    const { t, isArabic } = useLanguage()

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const els = entry.target.querySelectorAll('.animate-in')
                        els.forEach((el, i) => {
                            setTimeout(() => {
                                el.classList.add('visible')
                            }, i * 150)
                        })
                    }
                })
            },
            { threshold: 0.15 }
        )

        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section className="section section-transparent" id="about" ref={sectionRef}>
            <div className="container">
                <div className="about-grid">
                    <div className="about-text">
                        <div className="animate-in">
                            <h2 className={isArabic ? "arabic rtl-text" : ""}>
                                {t('about.title')}<span className="highlight">{t('about.titleHighlight')}</span>
                            </h2>
                        </div>
                        <div className="animate-in">
                            <p className={isArabic ? "arabic rtl-text" : ""}>
                                {t('about.p1')}
                            </p>
                        </div>
                        <div className="animate-in">
                            <p className={isArabic ? "arabic rtl-text" : ""}>
                                {t('about.p2')}
                            </p>
                        </div>
                    </div>

                    <div className="about-cards">
                        {[1, 2, 3, 4].map((num, i) => (
                            <div className="about-card animate-in" key={i}>
                                <h3 className={isArabic ? "arabic rtl-text" : ""}>{t(`about.v${num}.title`)}</h3>
                                <p className={isArabic ? "arabic rtl-text" : ""}>{t(`about.v${num}.desc`)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
