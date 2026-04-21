import React, { useEffect, useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const solutions = [
    {
        title: 'Urban & Infrastructure Lighting',
        description: 'Reliable solar lighting systems designed for roads, highways, smart cities, and public infrastructure.',
        includes: [
            'Solar LED Street Lights',
            'Integrated Solar Street Lights',
            'All-in-One Solar Lighting Systems',
        ],
        highlights: [
            'Long operational life',
            'Low maintenance',
            'Designed for harsh outdoor environments'
        ]
    },
    {
        title: 'Public & Community Spaces',
        description: 'Efficient and aesthetic solar lighting solutions for parks, walkways, gardens, and residential communities.',
        includes: [
            'All-in-One Solar Lights',
            'Smart motion-sensor lighting'
        ],
    },
    {
        title: 'Residential & Rural Solutions',
        description: 'Practical solar energy systems designed for homes and off-grid locations.',
        includes: [
            'Solar Home Lighting Systems',
            'Solar Lanterns',
            'Portable solar solutions'
        ],
    },
    {
        title: 'Industrial & Commercial Power Systems',
        description: 'High-capacity solar systems engineered for commercial and industrial energy needs.',
        includes: [
            'Solar On-Grid Systems',
            'Solar Off-Grid Systems',
            'Customized power solutions'
        ],
    },
]

const solutionsAr = [
    {
        title: 'الإضاءة الحضرية والبنية التحتية',
        description: 'أنظمة إضاءة شمسية موثوقة مصممة للطرق، الطرق السريعة، المدن الذكية، والبنية التحتية العامة.',
        includes: [
            'كشافات إنارة الشوارع بالطاقة الشمسية',
            'كشافات إنارة شوارع شمسية مدمجة',
            'أنظمة إنارة شمسية شاملة (All-in-One)'
        ],
        highlights: [
            'عمر تشغيلي طويل',
            'صيانة منخفضة',
            'مصممة للبيئات الخارجية القاسية'
        ]
    },
    {
        title: 'الأماكن العامة والمجتمعية',
        description: 'حلول إضاءة شمسية فعالة وجمالية للحدائق، الممرات، المجمعات السكنية، والأماكن العامة.',
        includes: [
            'إضاءة شمسية مدمجة بالكامل',
            'إضاءة ذكية بمستشعر حركة'
        ]
    },
    {
        title: 'الحلول السكنية والريفية',
        description: 'أنظمة طاقة شمسية عملية مصممة للمنازل والمواقع المنفصلة عن الشبكة.',
        includes: [
            'أنظمة إنارة منزلية شمسية',
            'فوانيس شمسية',
            'حلول شمسية محمولة'
        ]
    },
    {
        title: 'أنظمة الطاقة الصناعية والتجارية',
        description: 'أنظمة شمسية عالية القدرة مصممة لتلبية احتياجات الطاقة التجارية والصناعية.',
        includes: [
            'أنظمة شمسية متصلة بالشبكة (On-Grid)',
            'أنظمة شمسية منفصلة عن الشبكة (Off-Grid)',
            'حلول طاقة مخصصة'
        ]
    }
]

const Solutions = () => {
    const sectionRef = useRef(null)
    const { t, isArabic } = useLanguage()
    const activeSolutions = isArabic ? solutionsAr : solutions

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const els = entry.target.querySelectorAll('.animate-in')
                        els.forEach((el, i) => {
                            setTimeout(() => {
                                el.classList.add('visible')
                            }, i * 120)
                        })
                    }
                })
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section className="section section-transparent" id="solutions" ref={sectionRef}>
            <div className="container">
                <h2 className={`section-title section-title-light animate-in ${isArabic ? "arabic rtl-text" : ""}`}>
                    {t('solutions.title')}<span className="highlight">{t('solutions.titleHighlight')}</span>
                </h2>
                <p className={`section-subtitle section-subtitle-light animate-in ${isArabic ? "arabic rtl-text" : ""}`}>
                    {t('solutions.subtitle')}
                </p>

                <div className="solutions-grid">
                    {[1, 2, 3, 4].map((num, i) => (
                        <div className="solution-card animate-in" key={i}>
                            <h3 className={isArabic ? "arabic rtl-text" : ""}>{t(`solutions.s${num}.title`)}</h3>
                            <p className={isArabic ? "arabic rtl-text" : ""}>{t(`solutions.s${num}.desc`)}</p>
                            
                            <div className="solution-includes">
                                <h4 className={isArabic ? "arabic rtl-text" : ""}>{t('solutions.includes')}</h4>
                                <ul>
                                    {activeSolutions[i].includes.map((item, j) => (
                                        <li key={j} className={isArabic ? "arabic rtl-text" : ""} style={{ justifyContent: isArabic ? 'flex-end' : 'flex-start' }}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            {activeSolutions[i].highlights && (
                                <div className="solution-includes" style={{ marginTop: '1rem' }}>
                                    <h4 className={isArabic ? "arabic rtl-text" : ""}>{t('solutions.highlights')}</h4>
                                    <ul>
                                        {activeSolutions[i].highlights.map((item, j) => (
                                            <li key={j} className={isArabic ? "arabic rtl-text" : ""} style={{ justifyContent: isArabic ? 'flex-end' : 'flex-start' }}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Solutions
