import React, { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import ScrollCanvas from './components/ScrollCanvas'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Solutions from './components/Solutions'
import Products from './components/Products'
import ProductModal from './components/ProductModal'
import CustomSolutions from './components/CustomSolutions'
import ContactCTA from './components/ContactCTA'
import QuoteModal from './components/QuoteModal'
import LoginModal from './components/LoginModal'
import Footer from './components/Footer'
import PresentationPage from './components/PresentationPage'
import ContactPage from './components/ContactPage'

function Home() {
    const navigate = useNavigate()
    const [showQuoteModal, setShowQuoteModal] = useState(false)
    const [showLoginModal, setShowLoginModal] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [quoteProduct, setQuoteProduct] = useState(null)

    const scrollToSolutions = () => {
        const el = document.getElementById('solutions')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <ScrollCanvas />

            <Navbar onLoginClick={() => setShowLoginModal(true)} />

            <Hero
                onExploreClick={scrollToSolutions}
            />

            <AboutUs />
            <Solutions />
            <Products
                onViewDetails={(product) => setSelectedProduct(product)}
                onQuoteClick={(product) => {
                    setQuoteProduct(product)
                    setShowQuoteModal(true)
                }}
            />
            <CustomSolutions />
            <ContactCTA 
                onQuoteClick={() => setShowQuoteModal(true)} 
                onContactClick={() => navigate('/contact')} 
            />
            <Footer />

            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                    onQuoteClick={() => {
                        setQuoteProduct(selectedProduct)
                        setShowQuoteModal(true)
                        setSelectedProduct(null)
                    }}
                />
            )}

            {showQuoteModal && (
                <QuoteModal
                    product={quoteProduct}
                    onClose={() => {
                        setShowQuoteModal(false)
                        setQuoteProduct(null)
                    }}
                />
            )}
            
            {showLoginModal && (
                <LoginModal onClose={() => setShowLoginModal(false)} />
            )}
        </>
    )
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<PresentationPage />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
    )
}

export default App
