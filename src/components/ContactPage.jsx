import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import ScrollCanvas from './ScrollCanvas'
import Navbar from './Navbar'

const ContactPage = () => {
    const navigate = useNavigate()
    const { t, isArabic } = useLanguage()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div style={{ position: 'relative', minHeight: '100vh', paddingBottom: '0' }}>
            <ScrollCanvas />
            
            <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', background: 'linear-gradient(to right, rgba(27,42,74,0.9), rgba(27,42,74,0.7))', backdropFilter: 'blur(4px)', display: 'flex', flexDirection: 'column' }}>
                <Navbar onLoginClick={() => navigate('/')} />
                
                {/* Header Section */}
                <div style={{ color: 'white', padding: '160px 20px 100px', textAlign: 'left' }}>
                    <div className="container">
                        <h1 className={isArabic ? "arabic" : ""} style={{ fontSize: '3.5rem', fontWeight: 700, margin: '0 0 20px 0', letterSpacing: '-1px' }}>
                            {isArabic ? "اتصل بنا" : "Contact Us"}
                        </h1>
                        <p className={isArabic ? "arabic" : ""} style={{ fontSize: '1.15rem', maxWidth: '650px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6, margin: 0 }}>
                            {isArabic ? "اتصل بنا اليوم لمناقشة مشروعك أو معرفة المزيد عن حلولنا الكهربائية وحلول الطاقة والأتمتة. فريقنا مستعد للمساعدة." : "Contact us today to discuss your project or learn more about our electrical, automation and energy solutions. Our team is ready to help."}
                        </p>
                    </div>
                </div>

                {/* Contact Cards & Form Section Wrapper */}
                <div style={{ paddingBottom: '100px', flex: 1, textAlign: 'left' }}>
                    <div className="container" style={{ transform: 'translateY(-50px)', position: 'relative', zIndex: 10 }}>
                        
                        {/* Submit a Request Form */}
                        <div style={{ backgroundColor: '#eef6fb', borderRadius: '16px', padding: '40px 50px', maxWidth: '700px', margin: '0 auto 60px auto', boxShadow: '0 10px 40px rgba(0,0,0,0.15)' }}>
                            <h2 className={isArabic ? "arabic" : ""} style={{ fontSize: '2.2rem', fontWeight: 600, marginBottom: '30px', color: '#0a192f', letterSpacing: '-0.5px' }}>
                                {isArabic ? "إرسال طلب" : "Submit a Request"}
                            </h2>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div style={{ marginBottom: '20px' }}>
                                    <label className={isArabic ? "arabic" : ""} style={{ display: 'block', marginBottom: '8px', fontWeight: 500, fontSize: '0.95rem', color: '#0a192f' }}>
                                        {isArabic ? "الاسم *" : "Name *"}
                                    </label>
                                    <input className={isArabic ? "arabic" : ""} type="text" placeholder={isArabic ? "أدخل الاسم الكامل" : "Enter full name"} style={{ width: '100%', padding: '14px 16px', borderRadius: '4px', border: '1px solid #d1d9e0', fontSize: '1rem', outline: 'none' }} />
                                </div>
                                <div style={{ marginBottom: '20px' }}>
                                    <label className={isArabic ? "arabic" : ""} style={{ display: 'block', marginBottom: '8px', fontWeight: 500, fontSize: '0.95rem', color: '#0a192f' }}>
                                        {isArabic ? "الشركة / المؤسسة *" : "Business / Organization *"}
                                    </label>
                                    <input className={isArabic ? "arabic" : ""} type="text" placeholder={isArabic ? "أدخل اسم الشركة/المؤسسة" : "Enter business/organization name"} style={{ width: '100%', padding: '14px 16px', borderRadius: '4px', border: '1px solid #d1d9e0', fontSize: '1rem', outline: 'none' }} />
                                </div>
                                <div style={{ marginBottom: '20px' }}>
                                    <label className={isArabic ? "arabic" : ""} style={{ display: 'block', marginBottom: '8px', fontWeight: 500, fontSize: '0.95rem', color: '#0a192f' }}>
                                        {isArabic ? "البريد الإلكتروني *" : "Email *"}
                                    </label>
                                    <input className={isArabic ? "arabic" : ""} type="email" placeholder={isArabic ? "أدخل عنوان البريد الإلكتروني" : "Enter email address"} style={{ width: '100%', padding: '14px 16px', borderRadius: '4px', border: '1px solid #d1d9e0', fontSize: '1rem', outline: 'none' }} />
                                </div>
                                <div style={{ marginBottom: '20px' }}>
                                    <label className={isArabic ? "arabic" : ""} style={{ display: 'block', marginBottom: '8px', fontWeight: 500, fontSize: '0.95rem', color: '#0a192f' }}>
                                        {isArabic ? "رقم الهاتف *" : "Phone Number *"}
                                    </label>
                                    <input className={isArabic ? "arabic" : ""} type="tel" placeholder={isArabic ? "أدخل رقم الهاتف" : "Enter phone number"} style={{ width: '100%', padding: '14px 16px', borderRadius: '4px', border: '1px solid #d1d9e0', fontSize: '1rem', outline: 'none', direction: 'ltr', textAlign: isArabic ? 'right' : 'left' }} />
                                </div>
                                <div style={{ marginBottom: '30px' }}>
                                    <label className={isArabic ? "arabic" : ""} style={{ display: 'block', marginBottom: '8px', fontWeight: 500, fontSize: '0.95rem', color: '#0a192f' }}>
                                        {isArabic ? "الطلب" : "Request"}
                                    </label>
                                    <textarea className={isArabic ? "arabic" : ""} placeholder={isArabic ? "أدخل طلبك هنا" : "Enter your request"} rows="5" style={{ width: '100%', padding: '14px 16px', borderRadius: '4px', border: '1px solid #d1d9e0', fontSize: '1rem', resize: 'vertical', outline: 'none' }}></textarea>
                                </div>
                                <button type="submit" className={`btn btn-primary ${isArabic ? "arabic" : ""}`} style={{ padding: '14px 36px', fontSize: '1.05rem', borderRadius: '30px', cursor: 'pointer' }}>
                                    {isArabic ? "إرسال" : "Submit"}
                                </button>
                            </form>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                            {/* Make a Call */}
                            <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}>
                                <h3 className={isArabic ? "arabic" : ""} style={{ fontSize: '1.5rem', color: 'var(--navy)', margin: '0 0 10px 0' }}>
                                    {isArabic ? "اتصل بنا" : "Make a Call"}
                                </h3>
                                <p style={{ color: 'var(--text-on-light-muted)', margin: 0, fontSize: '0.95rem', direction: 'ltr', textAlign: isArabic ? 'right' : 'left' }}>+973 3800 1456</p>
                            </div>

                            {/* Send Email */}
                            <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}>
                                <h3 className={isArabic ? "arabic" : ""} style={{ fontSize: '1.5rem', color: 'var(--navy)', margin: '0 0 10px 0' }}>
                                    {isArabic ? "إرسال بريد إلكتروني" : "Send Email"}
                                </h3>
                                <p style={{ color: 'var(--text-on-light-muted)', margin: 0, fontSize: '0.95rem', direction: 'ltr', textAlign: isArabic ? 'right' : 'left' }}>Sales@nextera.bh</p>
                            </div>

                            {/* Visit Office */}
                            <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}>
                                <h3 className={isArabic ? "arabic" : ""} style={{ fontSize: '1.5rem', color: 'var(--navy)', margin: '0 0 10px 0' }}>
                                    {isArabic ? "زيارة المكتب" : "Visit Office"}
                                </h3>
                                <p className={isArabic ? "arabic" : ""} style={{ color: 'var(--text-on-light-muted)', margin: 0, lineHeight: 1.6, fontSize: '0.95rem' }}>
                                    {isArabic ? "مكتب 3032، مبنى 2004، طريق 1527، مجمع 0115، الحد، محافظة المحرق، مملكة البحرين" : "Office 3032, Building 2004, Road 1527, Block 0115, Hidd, Muharraq Governorate, Kingdom of Bahrain"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
