import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

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
import SystemFlush from '../../../assets/car-care/system-flush-removebg-preview.png';

type Coolant = { name: string; image: string; color: string };
type CoolantsData = {
  coolants: {
    Engine_Coolant_G10: Coolant[];
    Engine_Coolant_G11: Coolant[];
    Engine_Coolant_G12: Coolant[];
    Radiator_Coolant: Coolant[];
  };
};

const coolantsData: CoolantsData = {
  coolants: {
    Engine_Coolant_G10: [
      { name: 'G10-25', image:G10_25, color: 'green' },
      { name: 'G10-40', image:G10_40, color: 'green' },
      { name: 'G10-50', image:G10_50, color: 'green' },
      { name: 'G10-60', image:G10_60, color: 'green' },
      { name: 'G10-100', image:G10_100, color: 'green' }
    ],
    Engine_Coolant_G11: [
      { name: 'G11-25', image:G11_25, color: 'blue' },
      { name: 'G11-40', image:G11_40, color: 'blue' },
      { name: 'G11-50', image:G11_50, color: 'blue' },
      { name: 'G11-100', image:G11_100, color: 'blue' }
    ],
    Engine_Coolant_G12: [
      { name: 'G12-25', image:G12_25, color: 'red' },
      { name: 'G12-40', image:G12_40, color: 'red' },
      { name: 'G12-50', image:G12_50, color: 'red' },
      { name: 'G12-60', image:G12_60, color: 'red' },
      { name: 'G12-100', image:G12_100, color: 'red' }
    ],
    Radiator_Coolant: [
      { name: 'Rad-G10', image:Rad_G10, color: 'green' },
      { name: 'Rad-G11', image:Rad_G11, color: 'blue' },
      { name: 'Rad-G12', image:Rad_G12, color: 'red' },
      { name: 'System-Flush', image:SystemFlush, color: 'gold' },
    ]
  }
};

const Coolants = () => {
  const navigate = useNavigate(); // Initialize useNavigate for navigation
  
  // Function to map color to corresponding class
  const getColorClass = (color: string) => {
    switch (color) {
      case 'green':
        return 'coolant-image-wrapper-green';
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

  // Handle clicking on a coolant
  const handleCoolantClick = (coolantName: string) => {
    navigate(`/coolants-info/${coolantName}`); // Navigate to Coolants Info page with the coolant name
  };

  return (
    <>
      {/* {location.pathname === '/coolants' && <Navbar />} */}
      <div className="coolants-container" id='coolant'>
        {Object.keys(coolantsData.coolants).map(section => (
          <div key={section} className="coolant-section">
            <h2 className="coolant-section-title">{section.replace(/_/g, ' ')}</h2>
            <div className="coolant-items">
              {coolantsData.coolants[section as keyof CoolantsData['coolants']].map(coolant => (
                <div 
                  key={coolant.name} 
                  className="coolant-item" 
                  onClick={() => handleCoolantClick(coolant.name)} // Navigate to the info page on click
                  style={{ cursor: 'pointer' }} // Indicate it's clickable
                >
                  <div className={getColorClass(coolant.color)}>
                    <img src={coolant.image} alt={coolant.name} className="coolant-image" />
                  </div>
                  <p className="coolant-name">{coolant.name}</p>
                  <h5>Click For More</h5>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Coolants;
