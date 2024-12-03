import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Import images
import G10_25 from '../../../assets/coolants/G10-25-removebg-preview.png';
import G10_40 from '../../../assets/coolants/G10-40-removebg-preview.png';
import G10_50 from '../../../assets/coolants/G10-50-removebg-preview.png';
import G10_60 from '../../../assets/coolants/G10-60-removebg-preview.png';
import G10_100 from '../../../assets/coolants/G10-100-removebg-preview.png';
import G11_25 from '../../../assets/coolants/G11-25-removebg-preview.png';
import G11_40 from '../../../assets/coolants/G11-40-removebg-preview.png';
import G11_50 from '../../../assets/coolants/G11-50-removebg-preview.png';
import G11_100 from '../../../assets/coolants/G11-100-removebg-preview.png';

import G12_25 from '../../../assets/coolants/G12-25-removebg-preview.png';
import G12_40 from '../../../assets/coolants/G12-40-removebg-preview.png';
import G12_50 from '../../../assets/coolants/G12-50-removebg-preview.png';
import G12_60 from '../../../assets/coolants/G12-60-removebg-preview.png';
import G12_100 from '../../../assets/coolants/G12-100-removebg-preview.png';

import Rad_G10 from '../../../assets/coolants/rad-g10-removebg-preview.png';
import Rad_G11 from '../../../assets/coolants/rad-g11-removebg-preview.png';
import Rad_G12 from '../../../assets/coolants/rad-g12-removebg-preview.png';
// Add other images similarly...

type Coolant = { name: string; image: string; description: string; color: string };

const coolantsDetails: Coolant[] = [
        { name: 'G10-25', image: G10_25 ,description: 'G10-25 coolant description...', color: 'green' },
        { name: 'G10-40', image: G10_40,description: 'G10-25 coolant description...', color: 'green' },
        { name: 'G10-50', image: G10_50,description: 'G10-25 coolant description...', color: 'green' },
        { name: 'G10-60', image: G10_60,description: 'G10-25 coolant description...', color: 'green' },
        { name: 'G10-100', image: G10_100,description: 'G10-25 coolant description...', color: 'green' },
        { name: 'G11-25', image: G11_25, description: 'G11-25 coolant description...', color: 'blue' },
        { name: 'G11-40', image: G11_40, description: 'G11-40 coolant description...', color: 'blue' },
        { name: 'G11-50', image: G11_50, description: 'G11-50 coolant description...', color: 'blue' },
        { name: 'G11-100', image: G11_100, description: 'G11-100 coolant description...', color: 'blue' },
        { name: 'G12-25', image: G12_25, description: 'G12-25 coolant description...', color: 'red' },
        { name: 'G12-40', image: G12_40, description: 'G12-40 coolant description...', color: 'red' },
        { name: 'G12-50', image: G12_50, description: 'G12-50 coolant description...', color: 'red' },
        { name: 'G12-60', image: G12_60, description: 'G12-60 coolant description...', color: 'red' },
        { name: 'G12-100', image: G12_100, description: 'G12-100 coolant description...', color: 'red' },
        { name: 'Rad-G10', image: Rad_G10, description: 'Rad-G10 coolant description...', color: 'green' },
        { name: 'Rad-G11', image: Rad_G11, description: 'Rad-G11 coolant description...', color: 'blue' },
        { name: 'Rad-G12', image: Rad_G12, description: 'Rad-G12 coolant description...', color: 'red' }
  ];

// Helper function to get the color class for styling
const getColorClass = (color: string) => {
  switch (color) {
    case 'green':
      return 'coolant-image-wrapper-green';
    case 'blue':
      return 'coolant-image-wrapper-blue';
    case 'red':
      return 'coolant-image-wrapper-red';
    default:
      return ''; // fallback if color is missing
  }
};

const CoolantsInfo = () => {
  const { coolantName } = useParams<{ coolantName: string }>(); // Get the coolant name from the URL parameter

  // Scroll to the coolant section based on the coolant name
  useEffect(() => {
    const element = document.getElementById(coolantName || '');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [coolantName]);

  return (
    <>
     <div className="care-info-container">
        {coolantsDetails.map(coolant => (
          <div 
            key={coolant.name} 
            id={coolant.name} 
            className={`care-info-item ${coolantName === coolant.name ? 'selected-care' : ''}`}> {/* Apply selected-care class if matched */}
            
            
            <div className={`care-info-item-image-wrapper ${getColorClass(coolant.color)}`}>
              <img src={coolant.image} alt={coolant.name} className="care-info-item-image" />
            </div>
            
            <div className="care-info-details">
              <h2 className=" care-info-item-title coolant-name">{coolant.name}</h2>
              <p className="coolant-name care-info-item-description">{coolant.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CoolantsInfo;
