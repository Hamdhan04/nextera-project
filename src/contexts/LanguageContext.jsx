import React, { createContext, useContext, useState, useEffect } from 'react';
import en from '../translations/en.json';
import ar from '../translations/ar.json';

const LanguageContext = createContext();

export const translations = { en, ar };

export const LanguageProvider = ({ children }) => {
    // Check localStorage first, default to 'en'
    const [language, setLanguage] = useState(() => {
        const saved = localStorage.getItem('language');
        return saved ? saved : 'en';
    });

    const isArabic = language === 'ar';

    useEffect(() => {
        localStorage.setItem('language', language);
        document.documentElement.lang = language;
        // NOTE: We keep layout direction LTR globally as requested to prevent alignment breaks
        // and only apply RTL directly to the text elements.
    }, [language]);

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'ar' : 'en');
    };

    const t = (key) => {
        const val = translations[language][key];
        return val !== undefined ? val : key;
    };

    return (
        <LanguageContext.Provider value={{ language, isArabic, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
