type OilLubricant = { name: string; image: string;color: string };
type OilLubricantsData = {
  Diesel_oil: OilLubricant[];
  Gear_oil: OilLubricant[];
  Hydraulic_oil: OilLubricant[];
  Motor_oil: OilLubricant[];
  Transmission_oil: OilLubricant[];
};

const oilLubricantsData: OilLubricantsData = {
  Diesel_oil: [
    { name: 'Diesel 15W-40 Synthetic Fully Premium', image: 'src/Client/assets/OilandLubricants/Diesel_15W-40_Synthetic_Fully_Premium-removebg-preview.png', color: 'gray' },
    { name: 'Diesel 15W-40 Synthetic Fully', image: 'src/Client/assets/OilandLubricants/Diesel_15W-40_Synthetic_Fully-removebg-preview.png' , color: 'gold' },
    { name: 'Diesel 15W-40 Synthetic Premium', image: 'src/Client/assets/OilandLubricants/Diesel_15W-40_Synthetic_Premium-removebg-preview.png', color: 'gray' },
    { name: 'Diesel 20W-50 Synthetic Premium', image: 'src/Client/assets/OilandLubricants/Diesel_20W-50_Synthetic_Premium-removebg-preview.png', color: 'gray' },
    { name: 'Diesel 20W-50', image: 'src/Client/assets/OilandLubricants/Diesel_20W-50-removebg-preview.png' , color: 'gold' },
    { name: 'Diesel HD 50', image: 'src/Client/assets/OilandLubricants/Diesel_HD_50-removebg-preview.png' , color: 'gold' }
  ],
  Gear_oil: [
    { name: 'Gear Oil 75W-90 Synthetic Fully', image: 'src/Client/assets/OilandLubricants/Gear_Oil_75W-90_Synthetic_Fully-removebg-preview.png' , color: 'green'},
    { name: 'Gear Oil 80W-90 Synthetic', image: 'src/Client/assets/OilandLubricants/Gear_Oil_80W-90_Synthetic_-removebg-preview.png', color: 'green' },
    { name: 'Gear Oil 140 Synthetic', image: 'src/Client/assets/OilandLubricants/Gear_Oil_140_Synthetic_-removebg-preview.png', color: 'green' },
    { name: 'Gear Oil CVT Fluid Synthetic Fully', image: 'src/Client/assets/OilandLubricants/Gear_Oil_CVT_FLUID_Synthetic_Fully-removebg-preview.png' , color: 'green'}
  ],
  Hydraulic_oil: [
    { name: 'Hydraulic Oil AW-32', image: 'src/Client/assets/OilandLubricants/Hydraulic_Oil_AW-32-removebg-preview.png' , color: 'gray' },
    { name: 'Hydraulic Oil AW-46', image: 'src/Client/assets/OilandLubricants/Hydraulic_Oil_AW-46-removebg-preview.png', color: 'gray' },
    { name: 'Hydraulic Oil AW-68', image: 'src/Client/assets/OilandLubricants/Hydraulic_Oil_AW-68-removebg-preview.png', color: 'gray' }
  ],
  Motor_oil: [
    { name: 'Motor Oil 0W-16', image: 'src/Client/assets/OilandLubricants/motor_oil_0W-16_-removebg-preview.png', color: 'gold' },
    { name: 'Motor Oil 0W-20', image: 'src/Client/assets/OilandLubricants/motor_oil_0W-20-removebg-preview.png' , color: 'gold'},
    { name: 'Motor Oil 0W-40', image: 'src/Client/assets/OilandLubricants/motor_oil_0W-40-removebg-preview.png' , color: 'gold'},
    { name: 'Motor Oil 5W-20', image: 'src/Client/assets/OilandLubricants/motor_oil_5W-20-removebg-preview.png' , color: 'gold'},
    { name: 'Motor Oil 5W-30', image: 'src/Client/assets/OilandLubricants/motor_oil_5W-30-removebg-preview.png' , color: 'gold'},
    { name: 'Motor Oil 5W-40', image: 'src/Client/assets/OilandLubricants/motor_oil_5W-40-removebg-preview.png' , color: 'gold'},
    { name: 'Motor Oil 10W-30 Synthetic', image: 'src/Client/assets/OilandLubricants/motor_oil_10W-30_synthetic-removebg-preview.png', color: 'gold' },
    { name: 'Motor Oil 10W-30', image: 'src/Client/assets/OilandLubricants/motor_oil_10W-30-removebg-preview.png' , color: 'gold'},
    { name: 'Motor Oil 20W-50', image: 'src/Client/assets/OilandLubricants/motor_oil_20W-50-removebg-preview.png' , color: 'gold'}
  ],
  Transmission_oil: [
    { name: 'Trans-Oil ATF DVI', image: 'src/Client/assets/OilandLubricants/trans-oil-ATF_DVI-removebg-preview.png', color: 'red' },
    { name: 'Trans-Oil ATF Type A', image: 'src/Client/assets/OilandLubricants/trans-oil-ATF_TypeA-removebg-preview.png', color: 'red' },
    { name: 'Trans-Oil ATF DIII', image: 'src/Client/assets/OilandLubricants/trans-oil-ATF_DIII-removebg-preview.png', color: 'red' }
  ]
};

const OilAndLubricants = () => {
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
  return (
    <>
      {/* {location.pathname === '/oil-lubricants' && <Navbar />} */}
      <div className="coolants-container" id='oil'>
        {Object.keys(oilLubricantsData).map(section => (
          <div key={section} className="coolant-section">
            <h2 className="coolant-section-title">{section.replace('_', ' ')}</h2>
            <div className="coolant-items">
              {oilLubricantsData[section as keyof OilLubricantsData].map(item => (
                <div key={item.name} className="coolant-item">
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
