import { useState } from 'react';
import { ToolOutlined } from '@ant-design/icons'; // Import the maintenance icon from Ant Design

function MaintenanceOverlay() {
    const [isVisible, setIsVisible] = useState(true);

    const handleDismiss = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null; // If not visible, render nothing

    return (
        <div 
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000,
            }}
        >
            <ToolOutlined 
                style={{ fontSize: '4rem', color: '#FFD700', marginBottom: '20px' }} 
            /> {/* Maintenance Icon */}
            <h1 style={{ fontSize: '3rem', textAlign: 'center',fontFamily: 'fixture_italiccondensed_bold,Tomorrow, sans-serif'}}>
                Website Under Maintenance
            </h1>
            <h4 style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '20px',fontFamily: 'fixture_italiccondensed_bold,Tomorrow, sans-serif'}}>
                We're still working on this website to make it amazing for you!
            </h4>
            <h5 style={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: '20px',fontFamily: 'fixture_italiccondensed_bold,Tomorrow, sans-serif'}}>
                Please check back later.
            </h5>
            <button 
                onClick={handleDismiss}
                style={{
                    padding: '10px 20px',
                    fontSize: '2rem',
                    backgroundColor: '#FFD700',
                    color: '#000',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
                className='buttons'
            >
                Continue to Site
            </button>
        </div>
    );
}

export default MaintenanceOverlay;