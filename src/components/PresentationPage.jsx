import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollCanvas from './ScrollCanvas';
import './PresentationPage.css';

const PresentationPage = () => {
    const navigate = useNavigate();
    const scrollContainerRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    // Number of slides to show. Assuming the user will export ~5 slides. 
    // They can add more images to public/slides/ and update this number.
    const SLIDE_COUNT = 5;

    const scrollToSlide = (index) => {
        if (!scrollContainerRef.current) return;
        const width = scrollContainerRef.current.clientWidth;
        scrollContainerRef.current.scrollTo({
            left: width * index,
            behavior: 'smooth'
        });
        setCurrentSlide(index);
    };

    const handleNext = () => {
        if (currentSlide < SLIDE_COUNT - 1) {
            scrollToSlide(currentSlide + 1);
        }
    };

    const handlePrev = () => {
        if (currentSlide > 0) {
            scrollToSlide(currentSlide - 1);
        }
    };

    // Update currentSlide based on manual scrolling
    useEffect(() => {
        const handleScroll = () => {
            if (!scrollContainerRef.current) return;
            const scrollLeft = scrollContainerRef.current.scrollLeft;
            const width = scrollContainerRef.current.clientWidth;
            const newIndex = Math.round(scrollLeft / width);
            if (newIndex !== currentSlide) {
                setCurrentSlide(newIndex);
            }
        };

        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll, { passive: true });
        }
        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, [currentSlide]);

    return (
        <>
            <ScrollCanvas />

            <div className="presentation-page">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    &larr; Back to Home
                </button>

                <div className="slides-viewport" ref={scrollContainerRef}>
                    {Array.from({ length: SLIDE_COUNT }).map((_, idx) => (
                        <div className="slide-item" key={idx}>
                            {/* Placeholder generic styled slides in case images aren't uploaded yet */}
                            <div className="slide-content glass-panel">
                                <img
                                    src={`/slides/slide${idx + 1}.jpg`}
                                    alt={`Slide ${idx + 1}`}
                                    className="slide-image"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                <div className="slide-placeholder" style={{ display: 'none' }}>
                                    <h2>Slide {idx + 1}</h2>
                                    <p>Please export your PPT presentation slides to JPEG/PNG and place them in the <code>public/slides/</code> directory as <code>slide1.jpg</code>, <code>slide2.jpg</code>, etc.</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="presentation-controls">
                    <button
                        className="control-btn"
                        onClick={handlePrev}
                        disabled={currentSlide === 0}
                    >
                        &larr; Prev
                    </button>
                    <div className="slide-indicator">
                        {currentSlide + 1} / {SLIDE_COUNT}
                    </div>
                    <button
                        className="control-btn"
                        onClick={handleNext}
                        disabled={currentSlide === SLIDE_COUNT - 1}
                    >
                        Next &rarr;
                    </button>
                </div>
            </div>
        </>
    );
};

export default PresentationPage;
