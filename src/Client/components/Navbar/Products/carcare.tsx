import { useNavigate } from 'react-router-dom'; // Import useNavigate


import DieselEngineFluid from '../../../assets/car-care/Diesel-engine-fluid-removebg-preview.png';
import MultiPurposeDegreaser from '../../../assets/car-care/multi-purpose-degreaser-removebg-preview.png';
import WashFoam from '../../../assets/car-care/wash-foam-removebg-preview.png';
import WindsheildFluid from '../../../assets/car-care/windsheild-fluid-removebg-preview.png';

type Care = { name: string; image: string; color: string };

const careData = {
  cares: {
    Car_Care: [
      { name: 'Diesel-Engine-Fluid', image:DieselEngineFluid, color: 'blue' },
      { name: 'Multi-Purpose-Degreaser', image:MultiPurposeDegreaser, color: 'red' },
      { name: 'Wash-Foam', image:WashFoam, color: 'gold' },
      { name: 'Windsheild-Fluid', image:WindsheildFluid, color: 'blue' }
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
        {(Object.keys(careData.cares) as (keyof typeof careData.cares)[]).map(section => (
          <div key={section} className="coolant-section">
            <h2 className="coolant-section-title">{section.replace('_', ' ')}</h2>
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
