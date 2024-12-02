import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate

type Care = { name: string; image: string; color: string };
type CareData = {
  cares: {
    Car_Care: Care[];
  };
};

const careData: CareData = {
  cares: {
    Car_Care: [
      { name: 'Diesel-Engine-Fluid', image: 'src/Client/assets/car-care/Diesel-engine-fluid-removebg-preview.png', color: 'blue' },
      { name: 'Multi-Purpose-Degreaser', image: 'src/Client/assets/car-care/multi-purpose-degreaser-removebg-preview.png', color: 'red' },
      { name: 'System-Flush', image: 'src/Client/assets/car-care/system-flush-removebg-preview.png', color: 'gold' },
      { name: 'Wash-Foam', image: 'src/Client/assets/car-care/wash-foam-removebg-preview.png', color: 'gold' },
      { name: 'Windsheild-Fluid', image: 'src/Client/assets/car-care/windsheild-fluid-removebg-preview.png', color: 'blue' }
    ],
  }
};

const CarCare = () => {
  const navigate = useNavigate(); // Use navigate to go to car-care-info page

  const getColorClass = (color: string) => {
    switch (color) {
      case 'blue':
        return 'coolant-image-wrapper-blue';
      case 'red':
        return 'coolant-image-wrapper-red';
      case 'gold':
        return 'coolant-image-wrapper-gold';
      default:
        return ''; // fallback if color is missing
    }
  };

  // Function to handle click and navigate to car-care-info
  const handleCardClick = (careName: string) => {
    navigate(`/car-care-info/${careName}`);
  };

  return (
    <>
      <div className="coolants-container" id='care'>
        {Object.keys(careData.cares).map(section => (
          <div key={section} className="coolant-section">
            <h2 className="coolant-section-title">{section}</h2>
            <div className="coolant-items">
              {careData.cares[section].map((care: Care) => (
                <div
                  key={care.name}
                  className="coolant-item"
                  onClick={() => handleCardClick(care.name)} // Handle card click
                >
                  <div className={getColorClass(care.color)}>
                    <img src={care.image} alt={care.name} className="coolant-image" />
                  </div>
                  <p className="coolant-name">{care.name}</p>
                  <h5>Click For More</h5>
                </div>
              ))}
            </div>
            <div className="coolant-section-image-wrapper"></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CarCare;
