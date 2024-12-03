import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Import the images
import DieselEngineFluid from '../../../assets/car-care/Diesel-engine-fluid-removebg-preview.png';
import MultiPurposeDegreaser from '../../../assets/car-care/multi-purpose-degreaser-removebg-preview.png';
import SystemFlush from '../../../assets/car-care/system-flush-removebg-preview.png';
import WashFoam from '../../../assets/car-care/wash-foam-removebg-preview.png';
import WindsheildFluid from '../../../assets/car-care/windsheild-fluid-removebg-preview.png';

type Care = { name: string; image: string; description: string; color: string };

const careDetails: Care[] = [
  { name: 'Diesel-Engine-Fluid', image: DieselEngineFluid, description: 'Diesel Engine Fluid improves engine performance and protects against corrosion.', color: 'blue' },
  { name: 'Multi-Purpose-Degreaser', image: MultiPurposeDegreaser, description: 'Multi-Purpose Degreaser removes stubborn grease and grime effectively.', color: 'red' },
  { name: 'System-Flush', image: SystemFlush, description: 'System Flush helps clear internal deposits and improve system efficiency.', color: 'gold' },
  { name: 'Wash-Foam', image: WashFoam, description: 'Wash Foam provides a foamy wash that cleans vehicles thoroughly.', color: 'gold' },
  { name: 'Windsheild-Fluid', image: WindsheildFluid, description: 'Windshield Fluid keeps your windshield clean and clear.', color: 'blue' }
];

// Helper function to get the color class for styling
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

const CarCareInfo = () => {
  const { careName } = useParams(); // Get the care name from the URL parameter

  // Scroll to the selected care section based on the care name
  useEffect(() => {
    const element = document.getElementById(careName || '');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [careName]);

  return (
    <>
      <div className="care-info-container">
        {careDetails.map(care => (
          <div
            key={care.name}
            id={care.name}
            className={`care-info-item ${careName === care.name ? 'selected-care' : ''}`} // Add 'selected-care' class if this item is selected
          >
            <div className={`care-info-item-image-wrapper ${getColorClass(care.color)}`}>
              <img src={care.image} alt={care.name} className="care-info-item-image" />
            </div>
            <div className="care-info-item-details">
              <h2 className=" coolant-name care-info-item-title">{care.name}</h2>
              <p className=" coolant-name care-info-item-description">{care.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CarCareInfo;
