import React from 'react';

const BrochureViewer: React.FC = () => {
  return (
    <div
      style={{
        height: '120vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f4f4f9', // Light background for the page
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      {/* Header Section */}
      <div
        style={{
          marginTop: '70px',
        }}
        className='title'
      >
        Petroman Brochure
      </div>

      {/* PDF Container */}
      <div
        style={{
          flex: 1,
          border: '2px solid #004d40',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        <iframe
          src="\src\Client\assets\Petroman.pdf"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          title="Petroman Brochure"
        />
      </div>

      {/* Footer Section */}
      <div className='title' style={{
          marginTop: '20px',
        }}>
        Scroll to view the full brochure or download it for offline reading.
      </div>
    </div>
  );
};

export default BrochureViewer;
