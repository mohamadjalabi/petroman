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
import SystemFlush from '../../../assets/car-care/system-flush-removebg-preview.png';
// Add other images similarly...

type Coolant = { name: string; image: string; description: string; color: string };

const coolantsDetails: Coolant[] = [
        { name: 'G10-25', image: G10_25 ,description: 'With a 25% antifreeze and 75% water concentration. It has a boiling point of 106°C (222.8°F) and a freezing point of -18°C (5°F), making it ideal for moderate climates. This formula offers balanced protection, ensuring reliable anti-corrosion and anti-rust properties, making it suitable for regions with moderate temperatures.', color: 'green' },
        { name: 'G10-40', image: G10_40,description: 'Contains 40% antifreeze and 60% water, with a boiling point of 110°C (230°F) and a freezing point of -26°C (-14.8°F). It is designed to provide enhanced protection for a wider range of temperatures, ensuring optimal engine performance, especially in areas with extreme cold or varying climates. This formula offers superior protection against freezing and boiling temperatures.', color: 'green' },
        { name: 'G10-50', image: G10_50,description: 'Has an equal 50% antifreeze and 50% water concentration. With a boiling point of 132°C (269.6°F) and a freezing point of -36°C (-32.8°F), it delivers ideal year-round protection. This antifreeze balances performance in both high and low temperatures and provides excellent anti-corrosion properties, making it a great option for regions with fluctuating weather conditions.', color: 'green' },
        { name: 'G10-60', image: G10_60,description: 'Offers a higher concentration of 60% antifreeze and 40% water, with a boiling point of 116°C (241°F) and a freezing point of -40°C (-40°F). This premium formula is designed for the most demanding conditions, offering the highest level of protection against both boiling and freezing. It ensures superior anti-corrosion and anti-rust properties, making it ideal for extreme environments and challenging weather conditions.', color: 'green' },
        { name: 'G10-100', image: G10_100,description: 'A full-strength coolant with 100% antifreeze. It has an impressive boiling point of 182°C (359.6°F) and a freezing point of -73°C (-99.4°F), providing maximum protection in the harshest environments. This formula offers the highest level of protection against both boiling and freezing, with excellent anti-corrosion and anti-rust properties, making it perfect for extreme temperatures and severe conditions.', color: 'green' },
        { name: 'G11-25', image: G11_25, description: 'With a 25% antifreeze and 75% water concentration. It has a boiling point of 106°C (222.8°F) and a freezing point of -18°C (5°F), making it ideal for moderate climates. This formula offers balanced protection, ensuring reliable anti-corrosion and anti-rust properties, making it suitable for regions with moderate temperatures.', color: 'blue' },
        { name: 'G11-40', image: G11_40, description: 'Contains 40% antifreeze and 60% water, with a boiling point of 110°C (230°F) and a freezing point of -26°C (-14.8°F). It is designed to provide enhanced protection for a wider range of temperatures, ensuring optimal engine performance, especially in areas with extreme cold or varying climates. This formula offers superior protection against freezing and boiling temperatures.', color: 'blue' },
        { name: 'G11-50', image: G11_50, description: 'Has an equal 50% antifreeze and 50% water concentration. With a boiling point of 132°C (269.6°F) and a freezing point of -36°C (-32.8°F), it delivers ideal year-round protection. This antifreeze balances performance in both high and low temperatures and provides excellent anti-corrosion properties, making it a great option for regions with fluctuating weather conditions.', color: 'blue' },
        { name: 'G11-100', image: G11_100, description: 'A full-strength coolant with 100% antifreeze. It has an impressive boiling point of 182°C (359.6°F) and a freezing point of -73°C (-99.4°F), providing maximum protection in the harshest environments. This formula offers the highest level of protection against both boiling and freezing, with excellent anti-corrosion and anti-rust properties, making it perfect for extreme temperatures and severe conditions.', color: 'blue' },
        { name: 'G12-25', image: G12_25, description: 'With a 25% antifreeze and 75% water concentration. It has a boiling point of 106°C (222.8°F) and a freezing point of -18°C (5°F), making it ideal for moderate climates. This formula offers balanced protection, ensuring reliable anti-corrosion and anti-rust properties, making it suitable for regions with moderate temperatures.', color: 'red' },
        { name: 'G12-40', image: G12_40, description: 'Contains 40% antifreeze and 60% water, with a boiling point of 110°C (230°F) and a freezing point of -26°C (-14.8°F). It is designed to provide enhanced protection for a wider range of temperatures, ensuring optimal engine performance, especially in areas with extreme cold or varying climates. This formula offers superior protection against freezing and boiling temperatures.', color: 'red' },
        { name: 'G12-50', image: G12_50, description: 'Has an equal 50% antifreeze and 50% water concentration. With a boiling point of 132°C (269.6°F) and a freezing point of -36°C (-32.8°F), it delivers ideal year-round protection. This antifreeze balances performance in both high and low temperatures and provides excellent anti-corrosion properties, making it a great option for regions with fluctuating weather conditions.', color: 'red' },
        { name: 'G12-60', image: G12_60, description: 'Offers a higher concentration of 60% antifreeze and 40% water, with a boiling point of 116°C (241°F) and a freezing point of -40°C (-40°F). This premium formula is designed for the most demanding conditions, offering the highest level of protection against both boiling and freezing. It ensures superior anti-corrosion and anti-rust properties, making it ideal for extreme environments and challenging weather conditions.', color: 'red' },
        { name: 'G12-100', image: G12_100, description: 'A full-strength coolant with 100% antifreeze. It has an impressive boiling point of 182°C (359.6°F) and a freezing point of -73°C (-99.4°F), providing maximum protection in the harshest environments. This formula offers the highest level of protection against both boiling and freezing, with excellent anti-corrosion and anti-rust properties, making it perfect for extreme temperatures and severe conditions.', color: 'red' },
        { name: 'Rad-G10', image: Rad_G10, description: 'Identified by its green color, uses Inorganic Acid Technology (IAT) to provide robust rust and corrosion protection for older vehicles. This coolant is designed to last for 2-3 years, offering reliable protection for classic and older model vehicles such as early Ford, GM, and Honda cars. It is well-suited for older domestic and import cars, ensuring their cooling systems remain efficient by preventing rust and corrosion.', color: 'green' },
        { name: 'Rad-G11', image: Rad_G11, description: 'In blue, typically features Organic Acid Technology (OAT) or Hybrid Organic Acid Technology (HOAT), making it ideal for modern engines. It offers extended protection against corrosion and rust, with a lifespan of up to 5 years. This coolant is compatible with modern vehicles, including European and Asian models like BMW, Audi, Toyota, and Subaru. It is designed to meet the needs of newer cars that require advanced cooling system protection.', color: 'blue' },
        { name: 'Rad-G12', image: Rad_G12, description: 'Known for its red color, is an Extended Life Coolant (ELC) or HOAT that delivers superior long-term protection for modern vehicles. With a lifespan of up to 5 years, it provides excellent protection against corrosion and rust. This coolant is compatible with a wide range of vehicles, including models from Ford, Chrysler, and various Japanese brands, making it a versatile choice for newer vehicles with extended service intervals.', color: 'red' },
        { name: 'System-Flush', image: SystemFlush, description: 'Formulated to clean and restore the efficiency of your vehicle’s cooling system. It effectively removes rust, scale, and sludge buildup, which can hinder performance and lead to overheating. This flush is compatible with all cooling systems, including those with aluminum components, and features an easy application process for maximum results. It ensures your vehicle’s engine operates at peak performance by keeping the cooling system clean and efficient.', color: 'gold' },

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
    case 'gold':
      return 'coolant-image-wrapper-gold';
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
