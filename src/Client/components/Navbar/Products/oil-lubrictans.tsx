import { useNavigate } from 'react-router-dom'; // Import useNavigate


type OilLubricant = { name: string; image: string;color: string };
type OilLubricantsData = {
  Diesel_oil: OilLubricant[];
  Gear_oil: OilLubricant[];
  Hydraulic_oil: OilLubricant[];
  Motor_oil: OilLubricant[];
  Transmission_oil: OilLubricant[];
};
import motorOil0W16 from '../../../assets/OilandLubricants/motor_oil_0W-16_-removebg-preview.png';
import motorOil0W20 from '../../../assets/OilandLubricants/motor_oil_0W-20-removebg-preview.png';
import motorOil0W40 from '../../../assets/OilandLubricants/motor_oil_0W-40-removebg-preview.png';
import motorOil5W20 from '../../../assets/OilandLubricants/motor_oil_5W-20-removebg-preview.png';
import motorOil5W30 from '../../../assets/OilandLubricants/motor_oil_5W-30-removebg-preview.png';
import motorOil5W40 from '../../../assets/OilandLubricants/motor_oil_5W-40-removebg-preview.png';
import motorOil10W30Synthetic from '../../../assets/OilandLubricants/motor_oil_10W-30_synthetic-removebg-preview.png';
import motorOil10W30 from '../../../assets/OilandLubricants/motor_oil_10W-30-removebg-preview.png';
import motorOil20W50 from '../../../assets/OilandLubricants/motor_oil_20W-50-removebg-preview.png';

import diesel15W40FullyPremium from '../../../assets/OilandLubricants/Diesel_15W-40_Synthetic_Fully_Premium-removebg-preview.png';
import diesel15W40Fully from '../../../assets/OilandLubricants/Diesel_15W-40_Synthetic_Fully-removebg-preview.png';
import diesel15W40Premium from '../../../assets/OilandLubricants/Diesel_15W-40_Synthetic_Premium-removebg-preview.png';
import diesel20W50Premium from '../../../assets/OilandLubricants/Diesel_20W-50_Synthetic_Premium-removebg-preview.png';
import diesel20W50 from '../../../assets/OilandLubricants/Diesel_20W-50-removebg-preview.png';
import dieselHD50 from '../../../assets/OilandLubricants/Diesel_HD_50-removebg-preview.png';

import transOilATFDVI from '../../../assets/OilandLubricants/trans-oil-ATF_DVI-removebg-preview.png';
import transOilATFTypeA from '../../../assets/OilandLubricants/trans-oil-ATF_TypeA-removebg-preview.png';
import transOilATFDIII from '../../../assets/OilandLubricants/trans-oil-ATF_DIII-removebg-preview.png';

import gearOil75W90 from '../../../assets/OilandLubricants/Gear_Oil_75W-90_Synthetic_Fully-removebg-preview.png';
import gearOil80W90 from '../../../assets/OilandLubricants/Gear_Oil_80W-90_Synthetic_-removebg-preview.png';
import gearOil140 from '../../../assets/OilandLubricants/Gear_Oil_140_Synthetic_-removebg-preview.png';
import gearOilCVT from '../../../assets/OilandLubricants/Gear_Oil_CVT_FLUID_Synthetic_Fully-removebg-preview.png';

import hydraulicOilAW32 from '../../../assets/OilandLubricants/Hydraulic_Oil_AW-32-removebg-preview.png';
import hydraulicOilAW46 from '../../../assets/OilandLubricants/Hydraulic_Oil_AW-46-removebg-preview.png';
import hydraulicOilAW68 from '../../../assets/OilandLubricants/Hydraulic_Oil_AW-68-removebg-preview.png';

// Define oilLubricantsData
const oilLubricantsData: OilLubricantsData = {
  Motor_oil: [
    { name: 'Motor Oil 0W-16', image: motorOil0W16, color: 'gold' },
    { name: 'Motor Oil 0W-20', image: motorOil0W20, color: 'gold' },
    { name: 'Motor Oil 0W-40', image: motorOil0W40, color: 'gold' },
    { name: 'Motor Oil 5W-20', image: motorOil5W20, color: 'gold' },
    { name: 'Motor Oil 5W-30', image: motorOil5W30, color: 'gold' },
    { name: 'Motor Oil 5W-40', image: motorOil5W40, color: 'gold' },
    { name: 'Motor Oil 10W-30 Synthetic', image: motorOil10W30Synthetic, color: 'gold' },
    { name: 'Motor Oil 10W-30', image: motorOil10W30, color: 'gold' },
    { name: 'Motor Oil 20W-50', image: motorOil20W50, color: 'gold' },
  ],
  Diesel_oil: [
    { name: 'Diesel 15W-40 Synthetic Fully Premium', image: diesel15W40FullyPremium, color: 'gray' },
    { name: 'Diesel 15W-40 Synthetic Fully', image: diesel15W40Fully, color: 'gold' },
    { name: 'Diesel 15W-40 Synthetic Premium', image: diesel15W40Premium, color: 'gray' },
    { name: 'Diesel 20W-50 Synthetic Premium', image: diesel20W50Premium, color: 'gray' },
    { name: 'Diesel 20W-50', image: diesel20W50, color: 'gold' },
    { name: 'Diesel HD 50', image: dieselHD50, color: 'gold' },
  ],
  Transmission_oil: [
    { name: 'Trans-Oil ATF DVI', image: transOilATFDVI, color: 'red' },
    { name: 'Trans-Oil ATF Type A', image: transOilATFTypeA, color: 'red' },
    { name: 'Trans-Oil ATF DIII', image: transOilATFDIII, color: 'red' },
  ],
  Gear_oil: [
    { name: 'Gear Oil 75W-90 Synthetic Fully', image: gearOil75W90, color: 'green' },
    { name: 'Gear Oil 80W-90 Synthetic', image: gearOil80W90, color: 'green' },
    { name: 'Gear Oil 140 Synthetic', image: gearOil140, color: 'green' },
    { name: 'Gear Oil CVT Fluid Synthetic Fully', image: gearOilCVT, color: 'green' },
  ],
  Hydraulic_oil: [
    { name: 'Hydraulic Oil AW-32', image: hydraulicOilAW32, color: 'gray' },
    { name: 'Hydraulic Oil AW-46', image: hydraulicOilAW46, color: 'gray' },
    { name: 'Hydraulic Oil AW-68', image: hydraulicOilAW68, color: 'gray' },
  ],
};


const OilAndLubricants = () => {
  const navigate = useNavigate(); // Use navigate to go to oil-lubricants-info page

    const getColorClass = (color: string) => {
      switch (color) {
        case 'green':
          return 'coolant-image-wrapper-green';
        case 'gold':
          return 'coolant-image-wrapper-gold';
        case 'red':
          return 'coolant-image-wrapper-red';
        case 'gray':
          return 'coolant-image-wrapper-gray';
        default:
          return ''; // fallback if color is missing
      }
    };

    const handleCardClick = (oillubricantName: string) => {
      navigate(`/oil-lubricants-info/${oillubricantName}`);
    };

  return (
    <>
      {/* {location.pathname === '/oil-lubricants' && <Navbar />} */}
      <div className="coolants-container" id='oil'>
        {Object.keys(oilLubricantsData).map(section => (
          <div key={section} className="coolant-section">
            <h2 className="coolant-section-title">{section.replace(/_/g, ' ')}</h2>
            <div className="coolant-items">
              {oilLubricantsData[section as keyof OilLubricantsData].map(item => (
                <div key={item.name} 
                className="coolant-item"
                onClick={() => handleCardClick(item.name)}
                style={{ cursor: 'pointer' }} // Indicate it's clickable
                >
                  <div className={getColorClass(item.color)}>
                    <img src={item.image} alt={item.name} className="coolant-image" />
                  </div>
                  <p className="coolant-name">{item.name}</p>
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

export default OilAndLubricants;
