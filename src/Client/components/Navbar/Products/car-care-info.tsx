import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Import the images
import DieselEngineFluid from '../../../assets/car-care/Diesel-engine-fluid-removebg-preview.png';
import MultiPurposeDegreaser from '../../../assets/car-care/multi-purpose-degreaser-removebg-preview.png';
import WashFoam from '../../../assets/car-care/wash-foam-removebg-preview.png';
import WindsheildFluid from '../../../assets/car-care/windsheild-fluid-removebg-preview.png';

type Care = { name: string; image: string; description: string; color: string };

const careDetails: Care[] = [
  { name: 'Diesel-Engine-Fluid', image: DieselEngineFluid, description: 'AdBlue DEF is a high-purity urea solution designed to reduce nitrogen oxide (NOx) emissions in diesel engines. Injected into the exhaust stream from a dedicated tank, it decomposes into ammonia (NH3) and carbon dioxide (CO2) under high temperatures. The ammonia reacts with NOx in the SCR catalyst, converting it into harmless nitrogen (N2) and water (H2O). This process lowers NOx emissions, ensuring compliance with environmental regulations and promoting cleaner air.', color: 'blue' },
  { name: 'Multi-Purpose-Degreaser', image: MultiPurposeDegreaser, description: 'DH-80 is an eco-friendly oil, grease, and dirt remover suitable for all types of equipment. It effectively cleans and degreases surfaces without leaving residue, penetrating grime and greasy deposits quickly for thorough cleaning. Ideal for use on engines, machinery, tools, electronics, plastics, metals, and industrial equipment. To use, spray on a cool surface, let it penetrate, and rinse with water; multiple applications may be needed for heavy grime.', color: 'red' },
  { name: 'Wash-Foam', image: WashFoam, description: 'This shampoo generates rich, thick foam for a superior clean, ideal for both wash buckets and foam cannons. It effectively lifts dirt and grime, leaving your car spotless and shiny while minimizing scratches. Safe for all vehicle finishes, it protects wax and sealants and rinses off easily, reducing drying time and preventing water spots. Perfect for versatile use, it delivers a luxurious lather for a thorough and gentle clean.', color: 'gold' },
  { name: 'Windsheild-Fluid', image: WindsheildFluid, description: 'Windshield washer fluid is an essential automotive product that enhances driving safety by keeping windshields clean and clear, especially in bad weather. Safe for all windshield types, it is dispensed through the vehicles wiper system from the washer reservoir, improving visibility and ensuring easier, safer driving.', color: 'blue' }
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
