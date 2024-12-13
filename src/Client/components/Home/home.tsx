import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the navigation hook
import Engine from './engine';
import Searcher from './searcher';
import Teaser from './teaser-picture';
import WhyChooseUs from './why';

function Home() {
    const [isMobile, setIsMobile] = useState(false);
    const [showAd, setShowAd] = useState(true);
    const navigate = useNavigate(); // Initialize navigate

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1200); // Adjust breakpoint as needed
        };

        handleResize(); // Set initial state
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className='home-container'>
                <div className='q1'>
                    {showAd && (
                        <div
                            className='ad-banner'
                            onClick={() => navigate('/events')} // Navigate to /events on click
                        >
                            <span>
                                Check Our Latest Events!
                            </span>
                            <button
                                className='close-ad'
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevent triggering navigation
                                    setShowAd(false);
                                }}
                            >
                                &times;
                            </button>
                        </div>
                    )}
                    {!isMobile && <Searcher />} {/* Show Searcher only on desktop */}
                </div>
                <div className='q2'>
                    <Teaser />
                </div>
                <div className='q3'>
                    <WhyChooseUs />
                </div>
                <div className='q4'>
                    <Engine />
                </div>
            </div>
        </>
    );
}

export default Home;
