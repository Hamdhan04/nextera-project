import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

const CustomSolutions = () => {
    const navigate = useNavigate()
    const { t, isArabic } = useLanguage()

    return (
        <section className="section section-transparent" id="custom-solutions">
            <div className="container">
                <h2 className={`section-title section-title-dark ${isArabic ? "arabic rtl-text" : ""}`}>
                    {t('custom.title')}<span className="highlight">{t('custom.titleHighlight')}</span>
                </h2>

                <div className="custom-solutions-content">
                    <p className={isArabic ? "arabic rtl-text" : ""}>
                        {t('custom.p')}
                    </p>

                    <div className="custom-solutions-features">
                        <div className="custom-feature">
                            <div className="custom-feature-icon"></div>
                            <h4 className={isArabic ? "arabic rtl-text" : ""}>{t('custom.f1.title')}</h4>
                            <p className={isArabic ? "arabic rtl-text" : ""}>{t('custom.f1.p')}</p>
                        </div>
                        <div className="custom-feature">
                            <div className="custom-feature-icon"></div>
                            <h4 className={isArabic ? "arabic rtl-text" : ""}>{t('custom.f2.title')}</h4>
                            <p className={isArabic ? "arabic rtl-text" : ""}>{t('custom.f2.p')}</p>
                        </div>
                        <div className="custom-feature">
                            <div className="custom-feature-icon"></div>
                            <h4 className={isArabic ? "arabic rtl-text" : ""}>{t('custom.f3.title')}</h4>
                            <p className={isArabic ? "arabic rtl-text" : ""}>{t('custom.f3.p')}</p>
                        </div>
                    </div>

                    <button 
                        className={`btn btn-white ${isArabic ? "arabic" : ""}`} 
                        style={{ margin: '0 auto' }}
                        onClick={() => navigate('/contact')}
                    >
                        <span></span> {t('custom.btn')}
                    </button>
                </div>
            </div>
        </section>
    )
}

export default CustomSolutions
