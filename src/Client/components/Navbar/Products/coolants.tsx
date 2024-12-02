import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

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
      { name: 'G10-25', image: '/src/Client/assets/coolants/G10-25-removebg-preview.png', color: 'green' },
      { name: 'G10-40', image: '/src/Client/assets/coolants/G10-40-removebg-preview.png', color: 'green' },
      { name: 'G10-50', image: '/src/Client/assets/coolants/G10-50-removebg-preview.png', color: 'green' },
      { name: 'G10-60', image: '/src/Client/assets/coolants/G10-60-removebg-preview.png', color: 'green' },
      { name: 'G10-100', image: '/src/Client/assets/coolants/G10-100-removebg-preview.png', color: 'green' }
    ],
    Engine_Coolant_G11: [
      { name: 'G11-25', image: '/src/Client/assets/coolants/G11-25-removebg-preview.png', color: 'blue' },
      { name: 'G11-40', image: '/src/Client/assets/coolants/G11-40-removebg-preview.png', color: 'blue' },
      { name: 'G11-50', image: '/src/Client/assets/coolants/G11-50-removebg-preview.png', color: 'blue' },
      { name: 'G11-100', image: '/src/Client/assets/coolants/G11-100-removebg-preview.png', color: 'blue' }
    ],
    Engine_Coolant_G12: [
      { name: 'G12-25', image: '/src/Client/assets/coolants/G12-25-removebg-preview.png', color: 'red' },
      { name: 'G12-40', image: '/src/Client/assets/coolants/G12-40-removebg-preview.png', color: 'red' },
      { name: 'G12-50', image: '/src/Client/assets/coolants/G12-50-removebg-preview.png', color: 'red' },
      { name: 'G12-60', image: '/src/Client/assets/coolants/G12-60-removebg-preview.png', color: 'red' },
      { name: 'G12-100', image: '/src/Client/assets/coolants/G12-100-removebg-preview.png', color: 'red' }
    ],
    Radiator_Coolant: [
      { name: 'Rad-G10', image: '/src/Client/assets/coolants/rad-g10-removebg-preview.png', color: 'green' },
      { name: 'Rad-G11', image: 'src/Client/assets/coolants/rad-g11-removebg-preview.png', color: 'blue' },
      { name: 'Rad-G12', image: 'src/Client/assets/coolants/rad-g12-removebg-preview.png', color: 'red' }
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
            <h2 className="coolant-section-title">{section}</h2>
            <div className="coolant-items">
              {coolantsData.coolants[section].map(coolant => (
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
