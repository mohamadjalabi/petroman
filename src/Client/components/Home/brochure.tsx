import React from 'react';

import pdf from "../../assets/Petroman.pdf"

const BrochureViewer: React.FC = () => {
  return (
    <div
      style={{
        marginTop: '70px',
        width: '100%',
        display: 'flex',
        height: '30vh',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f4f4f9',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      {/* Title Section */}
      <div
        style={{
          fontFamily: 'Tomorrow, sans-serif',
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '20px',
          textAlign: 'center',
        }}
      >
        Petroman Catalog Actions
      </div>

      {/* Buttons Section */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
        {/* View PDF Button */}
        <a
                className='buttons'

          href={pdf}  // Make sure the path is correct
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '12px 20px',
            fontFamily: 'Tomorrow, sans-serif',
            fontSize: '16px',
            textDecoration: 'none',
            borderRadius: '5px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
        >
          View PDF
        </a>

        {/* Download PDF Button */}
        <a
        className='buttons'
          href={pdf}  // Make sure the path is correct
          download="Petroman_Catalog.pdf"
          style={{
            padding: '12px 20px',
            fontSize: '16px',
            fontFamily: 'Tomorrow, sans-serif',
            textDecoration: 'none',
            borderRadius: '5px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
        >
          Download PDF
        </a>
      </div>
    </div>
  );
};

export default BrochureViewer;



