import React, { useEffect, useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export const productsData = [
    {
        id: 1,
        name: 'Solar LED Street Lights',
        tagline: 'High-efficiency outdoor illumination',
        description: 'High-efficiency solar street lighting systems designed for reliable outdoor illumination in roads, highways, and infrastructure projects.',
        specs: ['9W–40W Range', 'SMF/Lithium/LiFePO4', '5-Year Warranty', '4.5–9m Height'],
        badge: 'Popular',
        icon: '🔆',
        image: '/products photo/solar led street light.png',
        pdf: '/product pdf details/solar led street lights.pdf',
        features: [
            'High-efficiency LED light source',
            'Intelligent charge controller',
            'Dusk-to-dawn automatic operation',
            'Wind and corrosion-resistant housing',
            'Environment-friendly and zero electricity cost',
            'IP65 / IP66 outdoor protection',
        ],
    },
    {
        id: 2,
        name: 'Integrated Solar Street Lights',
        tagline: 'All-in-one compact design',
        description: 'Compact, all-in-one solar street lighting solution with integrated panel, battery, and LED for easy installation.',
        specs: ['7W–20W Range', 'Lithium/Li-ion Battery', '2–5 Year Warranty', '4–6m Height'],
        badge: 'Compact',
        icon: '💡',
        image: '/products photo/integrated street light.png',
        pdf: '/product pdf details/integrated solar led street lights.pdf',
        features: [
            'Integrated solar panel, LED, and battery',
            'PIR motion sensor technology',
            'Smart dimming profiles',
            'Automatic dusk-to-dawn operation',
            'Easy single-person installation',
            'Anti-theft and weather-resistant design',
        ],
    },
    {
        id: 3,
        name: 'Solar Home Systems',
        tagline: 'Residential power solutions',
        description: 'Compact solar power systems designed to provide reliable electricity for homes and small off-grid applications.',
        specs: ['15W–50W Capacity', 'Lithium-ion Battery', 'Lighting & Appliances', 'Portable Design'],
        badge: 'Residential',
        icon: '🏠',
        image: '/products photo/solar-home-system-920.png',
        pdf: '/product pdf details/solar home system.pdf',
        features: [
            'Portable and aesthetic design',
            'Plug-and-play operation',
            'Multiple DC output ports',
            'USB mobile charging',
            'LED lighting included',
            'Low maintenance and eco-friendly',
        ],
    },
    {
        id: 4,
        name: 'Solar PV Modules',
        tagline: 'Grid-scale power generation',
        description: 'High-performance photovoltaic modules suitable for on-grid and off-grid solar power installations.',
        specs: ['40W–315W Range', 'Mono/Poly Crystalline', '25-Year Warranty', 'IEC Certified'],
        badge: 'Commercial',
        icon: '⚡',
        image: '/products photo/Solar-Photovoltaic-Module.-Photoroom.png',
        pdf: '/product pdf details/Pv modules.pdf',
        features: [
            'High module efficiency',
            'Positive power tolerance',
            'Anti-reflective tempered glass',
            'Anodized aluminum frame',
            'Tested for harsh environmental conditions',
        ],
    },
    {
        id: 5,
        name: 'Solar Lanterns',
        tagline: 'Portable lighting solutions',
        description: 'Portable solar lanterns designed for emergency lighting, rural areas, and outdoor applications.',
        specs: ['3W–15W LED', 'Multitype Battery', 'Solar + USB Charging', 'Portable'],
        badge: 'Portable',
        icon: '🔋',
        image: '/products photo/solar laterns.png',
        pdf: '/product pdf details/Led latern.pdf',
        features: [
            'Compact and lightweight design',
            'Built-in solar panel',
            'USB mobile charging support',
            'Multiple brightness levels',
            'Rugged and weather-resistant body',
            'Long backup duration',
        ],
    },
    {
        id: 6,
        name: 'On-Grid Solar Systems',
        tagline: 'Grid-tied power systems',
        description: 'Grid-connected solar power systems designed to reduce electricity costs for commercial and industrial users.',
        specs: ['3kVA–50kVA Range', '250W Modules', 'Top Tier Inverter', 'GI Structure'],
        badge: 'Industrial',
        icon: '🔌',
        image: '/products photo/on grid.png',
        pdf: '/product pdf details/on grid.pdf',
        features: [
            'Grid-synchronized inverter technology',
            'Net-metering compatible',
            'Real-time energy monitoring',
            'High system efficiency',
            'Reduced electricity bills',
            'Professional installation support',
        ],
    },
    {
        id: 7,
        name: 'Solar Off-Grid Systems',
        tagline: 'Independent power generation',
        description: 'Standalone solar power systems designed for remote locations where grid electricity is unavailable or unreliable.',
        specs: ['500W–10kVA Range', '250W Modules', '850VA-10kVA PCU', 'GI Structure'],
        badge: 'Remote',
        icon: '🔋',
        image: '/products photo/off grid.png',
        pdf: '/product pdf details/off grid.pdf',
        features: [
            'Independent power generation',
            'Reliable energy for remote and rural areas',
            'Modular and expandable system design',
            'Low operating and maintenance cost',
            'Suitable for industrial and critical applications',
            'Custom system design available',
        ],
    },
]

const Products = ({ onViewDetails, onQuoteClick }) => {
    const sectionRef = useRef(null)
    const { t, isArabic } = useLanguage()

    // Inline Arabic translated data to ensure all visible text is translated
    const productsDataAr = [
        {
            ...productsData[0],
            name: 'كشافات إنارة الشوارع بالطاقة الشمسية',
            tagline: 'إضاءة خارجية عالية الكفاءة',
            description: 'أنظمة إنارة شوارع شمسية عالية الكفاءة مصممة لإضاءة خارجية موثوقة في الطرق، الطرق السريعة ومشاريع البنية التحتية.',
            specs: ['نطاق 9W–40W', 'SMF/ليثيوم/LiFePO4', 'ضمان 5 سنوات', 'ارتفاع 4.5–9m'],
            badge: 'شائع',
            features: [
                'مصدر ضوء LED عالي الكفاءة',
                'وحدة تحكم شحن ذكية',
                'تشغيل تلقائي من الغسق حتى الفجر',
                'هيكل مقاوم للرياح والتآكل',
                'صديق للبيئة وتكلفة كهرباء صفرية',
                'حماية خارجية IP65 / IP66',
            ]
        },
        {
            ...productsData[1],
            name: 'كشافات مدمجة لإنارة الشوارع',
            tagline: 'تصميم مدمج شامل',
            description: 'حل مدمج ومتكامل لإنارة الشوارع بالطاقة الشمسية مع لوح، بطارية، وإضاءة LED لسهولة التركيب.',
            specs: ['نطاق 7W–20W', 'بطارية ليثيوم', 'ضمان 2–5 سنوات', 'ارتفاع 4–6m'],
            badge: 'مدمج',
            features: [
                'لوح شمسي، إضاءة LED، وبطارية مدمجة',
                'تقنية استشعار الحركة PIR',
                'ملفات تعريف تعتيم ذكية',
                'تشغيل تلقائي من الغسق حتى الفجر',
                'تركيب سهل لشخص واحد',
                'تصميم مضاد للسرقة ومقاوم للطقس',
            ]
        },
        {
            ...productsData[2],
            name: 'الأنظمة الشمسية المنزلية',
            tagline: 'حلول طاقة سكنية',
            description: 'أنظمة طاقة شمسية مدمجة لتوفير كهرباء موثوقة للمنازل والتطبيقات الصغيرة المنفصلة عن الشبكة.',
            specs: ['قدرة 15W–50W', 'بطارية ليثيوم-أيون', 'لإضاءة وأجهزة', 'تصميم محمول'],
            badge: 'سكني',
            features: [
                'تصميم محمول وأنيق',
                'تشغيل بالتوصيل والاستخدام المباشر',
                'منافذ إخراج تيار مستمر متعددة',
                'شحن جوالات عبر USB',
                'إضاءة LED متضمنة',
                'صيانة منخفضة وصديق للبيئة',
            ]
        },
        {
            ...productsData[3],
            name: 'الألواح الشمسية (PV)',
            tagline: 'توليد طاقة على نطاق واسع',
            description: 'وحدات طاقة كهروضوئية عالية الأداء مناسبة لتطبيقات الطاقة الشمسية المتصلة والمنفصلة عن الشبكة.',
            specs: ['نطاق 40W–315W', 'أحادي/متعدد التبلور', 'ضمان 25 سنة', 'معتمدة من IEC'],
            badge: 'تجاري',
            features: [
                'كفاءة وحدة عالية',
                'تساهل طاقة إيجابي',
                'زجاج مقسى مضاد للانعكاس',
                'إطار من الألومنيوم المؤكسد',
                'مختبر للظروف البيئية القاسية',
            ]
        },
        {
            ...productsData[4],
            name: 'الفوانيس الشمسية',
            tagline: 'حلول إضاءة محمولة',
            description: 'فوانيس شمسية محمولة مصممة للإضاءة الطارئة، المناطق الريفية، والتطبيقات الخارجية.',
            specs: ['3W–15W LED', 'بطارية متعددة', 'شحن شمسي/USB', 'محمول'],
            badge: 'محمول',
            features: [
                'تصميم مدمج وخفيف الوزن',
                'لوح شمسي مدمج',
                'دعم شحن الجوالات عبر USB',
                'مستويات سطوع متعددة',
                'هيكل متين ومقاوم للطقس',
                'مدة تشغيل احتياطية طويلة',
            ]
        },
        {
            ...productsData[5],
            name: 'الأنظمة المتصلة بالشبكة',
            tagline: 'أنظمة طاقة متصلة بالشبكة',
            description: 'أنظمة طاقة شمسية متصلة بالشبكة مصممة لتقليل تكلفة استهلاك الكهرباء للقطاعين التجاري والصناعي.',
            specs: ['نطاق 3kVA–50kVA', 'وحدات 250W', 'محول عالي الأداء', 'هيكل حديدي'],
            badge: 'صناعي',
            features: [
                'تقنية محول متزامن مع الشبكة',
                'متوافق مع قياس صافي الاستهلاك',
                'مراقبة الطاقة في الوقت الفعلي',
                'كفاءة نظام عالية',
                'فواتير كهرباء مخفضة',
                'دعم تركيب احترافي',
            ]
        },
        {
            ...productsData[6],
            name: 'الأنظمة المنفصلة عن الشبكة',
            tagline: 'توليد طاقة مستقل',
            description: 'أنظمة مستقلة للطاقة الشمسية مصممة للمناطق النائية حيث شبكة الكهرباء غير متوفرة أو غير موثوقة.',
            specs: ['نطاق 500W–10kVA', 'وحدات 250W', '850VA-10kVA PCU', 'هيكل حديدي'],
            badge: 'نائي',
            features: [
                'توليد طاقة مستقل',
                'طاقة موثوقة للمناطق النائية والريفية',
                'تصميم نظام تركيبي وقابل للتوسيع',
                'تكلفة تشغيل وصيانة منخفضة',
                'مناسب للتطبيقات الصناعية والحرجة',
                'يتوفر تصميم نظام مخصص',
            ]
        }
    ]

    const activeData = isArabic ? productsDataAr : productsData;

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
        <section className="section section-transparent" id="products" ref={sectionRef}>
            <div className="container">
                <h2 className={`section-title section-title-dark animate-in ${isArabic ? "arabic rtl-text" : ""}`}>
                    {t('products.title')}<span className="highlight">{t('products.titleHighlight')}</span>
                </h2>
                <p className={`section-subtitle section-subtitle-dark animate-in ${isArabic ? "arabic rtl-text" : ""}`}>
                    {t('products.subtitle')}
                </p>

                <div className="products-grid">
                    {activeData.map((product, idx) => (
                        <div
                            className="product-card animate-in"
                            key={product.id || idx}
                            onClick={() => onViewDetails(product)}
                        >
                            <div className="product-card-image">
                                {product.image ? (
                                    <img src={product.image} alt={product.name} className="product-card-img" />
                                ) : (
                                    <span style={{ zIndex: 1, fontSize: '4rem' }}>{product.icon}</span>
                                )}
                                {product.badge && (
                                    <span className={`product-card-badge ${isArabic ? "arabic" : ""}`}>{product.badge}</span>
                                )}
                            </div>
                            <div className="product-card-body">
                                <h3 className={isArabic ? "arabic rtl-text" : ""}>{product.name}</h3>
                                <p className={isArabic ? "arabic rtl-text" : ""}>{product.description}</p>
                                <div className="product-card-specs">
                                    {product.specs.map((spec, i) => (
                                        <span className={`product-spec ${isArabic ? "arabic rtl-text" : ""}`} key={i}>✓ {spec}</span>
                                    ))}
                                </div>
                                <div className="product-card-footer" style={isArabic ? {flexDirection: 'row-reverse'}: {}}>
                                    <button className={`btn btn-primary ${isArabic ? "arabic" : ""}`} onClick={(e) => { e.stopPropagation(); onViewDetails(product); }} style={{ padding: '8px 16px', fontSize: '0.8rem' }}>
                                        {t('products.btn.details')}
                                    </button>
                                    <button className={`btn btn-primary ${isArabic ? "arabic" : ""}`} onClick={(e) => { e.stopPropagation(); onQuoteClick(product); }} style={{ padding: '8px 16px', fontSize: '0.8rem' }}>
                                        {t('products.btn.quote')}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Products
