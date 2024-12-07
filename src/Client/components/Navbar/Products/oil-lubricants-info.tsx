import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

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



type OilLubricant = { name: string; image: string; description: string; color: string };

const OilLubricantDetails: OilLubricant[] = [

    { name: 'Motor Oil 0W-16', image: motorOil0W16,description: 'Our gasoline oils are crafted with advanced technology for superior performance and quality. Designed for both high-performance and everyday vehicles, they offer exceptional wear protection, reduce friction, and enhance fuel efficiency. These oils ensure your engine runs smoothly and efficiently for longer, providing the strength, durability, and reliability needed to perform under any condition.', color: 'gold' },
    { name: 'Motor Oil 0W-20', image: motorOil0W20,description: 'AE 0W-20 full synthetic engine oil is designed for passenger cars and light commercial vehicles, offering extended drain intervals. It provides exceptional cold start performance, improved fuel economy, reduced exhaust emissions, and maximum engine protection. It meets API SN-RC, ILSAC GF-5, and GM Dexos 1 standards. Technical specifications include a viscosity of 8.6 cSt at 100°C, a viscosity index of 220, a TBN of 8.3, and a pour point of -45°C.', color: 'gold' },
    { name: 'Motor Oil 0W-40', image: motorOil0W40,description: 'Our gasoline oils are crafted with advanced technology for superior performance and quality. Designed for both high-performance and everyday vehicles, they offer exceptional wear protection, reduce friction, and enhance fuel efficiency. These oils ensure your engine runs smoothly and efficiently for longer, providing the strength, durability, and reliability needed to perform under any condition.', color: 'gold' },
    { name: 'Motor Oil 5W-20', image: motorOil5W20,description: 'Petroman 5W-20 full synthetic gasoline oil is a high-performance motor oil designed for modern downsized and hybrid engines with stop-start technology. It provides excellent wear protection, cleaning, and overall engine efficiency, enhancing fuel economy and supporting engines with post-treatment systems. Made from 100% virgin base oil, it meets API SN/CF, ILSAC GF-5, ACEA A1/B1, Ford WSS-M2C948A/B, and ST JLR.03.5004 standards. Technical specifications include a viscosity of 8.1 cSt at 100°C, a viscosity index of 210, and a pour point of -39°C.', color: 'gold' },
    { name: 'Motor Oil 5W-30', image: motorOil5W30,description: 'Petroman 5W-30 full synthetic engine oil offers excellent wear protection, cleaning, and performance, ideal for modern downsized and hybrid engines with stop-start technology. It enhances fuel economy and supports post-treatment systems. Made from 100% virgin base oil, it ensures optimal performance across temperatures. Meets API SN, ACEA C4, MB 226.51, and Renault RN0720 standards.', color: 'gold' },
    { name: 'Motor Oil 5W-40', image: motorOil5W40,description: 'Our gasoline oils are crafted with advanced technology for superior performance and quality. Designed for both high-performance and everyday vehicles, they offer exceptional wear protection, reduce friction, and enhance fuel efficiency. These oils ensure your engine runs smoothly and efficiently for longer, providing the strength, durability, and reliability needed to perform under any condition.', color: 'gold' },
    { name: 'Motor Oil 10W-30 Synthetic', image: motorOil10W30Synthetic,description: 'Petroman 10W-30 Semi-synthetic engine oil is designed for passenger cars and light trucks, offering effective engine cleaning and strong wear protection. It reduces engine noise and lowers oil change costs. Suitable for both petrol and diesel engines, it works well in all seasons. It meets API SM/SL/SJ/CF, ACEA A3/B3, A3/B4, MB 229.3/229.5, OPEL Long Life Service Fill GM-LL-A-025, BMW Longlife Oil, VW 502 00, VW 505 00, and Porsche Special Oil List standards.', color: 'gold' },
    { name: 'Motor Oil 10W-30', image: motorOil10W30,description: 'Our gasoline oils are crafted with advanced technology for superior performance and quality. Designed for both high-performance and everyday vehicles, they offer exceptional wear protection, reduce friction, and enhance fuel efficiency. These oils ensure your engine runs smoothly and efficiently for longer, providing the strength, durability, and reliability needed to perform under any condition.', color: 'gold' },
    { name: 'Motor Oil 20W-50', image: motorOil20W50,description: 'Petroman 20W-50 motor oil offers excellent wear protection, cleaning, and performance. Made with advanced technology and high-quality synthetic base oils, it improves fuel economy and maintains optimal consistency across temperatures. It provides reliable engine protection in both cold and hot conditions. It meets API SL/CF standards.', color: 'gold' },

    { name: 'Diesel 15W-40 Synthetic Fully Premium', image: diesel15W40FullyPremium,description: 'This high-performance HDD engine oil is designed for heavy-duty trucks and off-road machinery, compatible with Euro II, III, IV, and V engines without DPF. It provides excellent oxidation resistance, anti-wear protection, and is suitable for modern heavy-duty vehicles, industrial machinery, off-road vehicles, and power generators. The 15W-40 oil meets API CI-4/SL, ACEA E7, ACEA A3/B4, MB 228.3, MACK EO-N, MAN M 3275-1, and CUMMINS CES 20076/7 standards.', color: 'gray' },
    { name: 'Diesel 15W-40 Synthetic Fully', image: diesel15W40Fully,description: 'Our diesel oils are designed for superior performance and reliability, ensuring smooth and efficient engine operation. Formulated with advanced technology, they offer exceptional wear protection to extend the life of your equipment. Whether for heavy-duty or high-performance engines, our diesel oils guarantee optimal power, fuel efficiency, and unmatched quality, meeting the toughest demands of modern machinery.', color: 'gold' },
    { name: 'Diesel 15W-40 Synthetic Premium', image: diesel15W40Premium,description: '15W-40 API CH-4 synthetic engine oil offers excellent wear protection, cleaning, and performance. Formulated with high-quality synthetic base oils, it ensures optimal protection across all temperatures, maintains consistency, and improves fuel efficiency. It guards against wear in various conditions, supporting reliable performance in both cold starts and high temperatures. It meets API CH-4/SJ, ACEA E5-02, ACEA A3/B3, MAN M 3275-1, MB 228.3, VOLVO VDS-2, and MTU Cat.2 standards.', color: 'gray' },
    { name: 'Diesel 20W-50 Synthetic Premium', image: diesel20W50Premium,description: 'This synthetic motor oil provides exceptional wear protection, cleaning power, and performance. Ideal for modern diesel engines in trucks, buses, and off-road machinery, it meets API CH-4 standards and performs well under severe conditions. Made from 100% virgin base oil, it ensures optimal engine performance across temperatures. It meets API CH-4/SJ, MB 228.30, MTU Type 2.0, MAN M3575, DEUTZ DQC-III-10, Renault VI RLD-3, Volvo VDS-3, Mack EO-O Premium Plus, CAT ECF-2, ECF-1-a, ZF TE, MB 228.1, and Allison C4 standards.', color: 'gray' },
    { name: 'Diesel 20W-50', image: diesel20W50,description: 'Our diesel oils are designed for superior performance and reliability, ensuring smooth and efficient engine operation. Formulated with advanced technology, they offer exceptional wear protection to extend the life of your equipment. Whether for heavy-duty or high-performance engines, our diesel oils guarantee optimal power, fuel efficiency, and unmatched quality, meeting the toughest demands of modern machinery.', color: 'gold' },
    { name: 'Diesel HD 50', image: dieselHD50,description: 'Our diesel oils are designed for superior performance and reliability, ensuring smooth and efficient engine operation. Formulated with advanced technology, they offer exceptional wear protection to extend the life of your equipment. Whether for heavy-duty or high-performance engines, our diesel oils guarantee optimal power, fuel efficiency, and unmatched quality, meeting the toughest demands of modern machinery.', color: 'gold' },

    { name: 'Trans-Oil ATF DVI', image: transOilATFDVI,description: 'Our transmission oils offer excellent lubrication, ensuring smooth shifting and enhanced performance. With advanced additives, they protect against wear, corrosion, and oxidation, providing durability and efficiency for both manual and automatic transmissions under varying conditions.', color: 'red' },
    { name: 'Trans-Oil ATF Type A', image: transOilATFTypeA,description: 'Fluid TYPE A meets GM TYPE A specifications, ensuring smooth shifting in automatic and semi-automatic transmissions. It is suitable for passenger cars, light trucks, torque converters, power steering, and hydraulic systems in farm and heavy equipment. The fluid provides excellent cold-weather performance, shift quality, shear stability, wear protection, extended oil drain intervals, and high-temperature oxidation stability. Meets ATF requirements and GM Type A Suffix A standards.', color: 'red' },
    { name: 'Trans-Oil ATF DIII', image: transOilATFDIII,description: 'The fluid is a high-viscosity, synthetic transmission fluid suitable for automatic transmissions, torque converters, power steering systems, industrial clutches, and more. It provides smooth performance, oxidation stability, and is compatible with passenger cars, commercial trucks, and off-road machinery. Meets standards: GM DEXRON III H, Ford Mercon, and Allison C-4.', color: 'red' },

    { name: 'Gear Oil 75W-90 Synthetic Fully', image: gearOil75W90,description: 'Our gear oils provide exceptional protection and performance, reducing friction and wear to ensure smooth operation and longevity. Suitable for both light-duty and heavy-duty applications, they maintain the integrity and efficiency of gearboxes and differential systems.', color: 'green' },
    { name: 'Gear Oil 80W-90 Synthetic', image: gearOil80W90,description: 'This fluid is designed for gearboxes, transaxles, and hypoid gears operating under high loads, offering shear resistance and excellent wear protection. It is suitable for synchronized and non-synchronized gearboxes, transfer boxes, and hypoid gear axles in all types of vehicles and construction machinery. It performs well in high-speed/low-torque and low-speed/high-torque conditions. Meets API GL-4 and MIL-L-2105 standards.', color: 'green' },
    { name: 'Gear Oil 140 Synthetic', image: gearOil140,description: 'Petroman gear oils are designed for gearboxes and differentials operating under mild load/low speed conditions. They help extend the life of gears and bearings in gear cases where OEMs recommend straight mineral oil. Suitable for various lubrication needs, particularly in gearboxes and transmissions with low requirements. Meets API GL-4 standards.', color: 'green' },
    { name: 'Gear Oil CVT Fluid Synthetic Fully', image: gearOilCVT,description: 'Our gear oils provide exceptional protection and performance, reducing friction and wear to ensure smooth operation and longevity. Suitable for both light-duty and heavy-duty applications, they maintain the integrity and efficiency of gearboxes and differential systems.', color: 'green' },

    { name: 'Hydraulic Oil AW-32', image: hydraulicOilAW32,description: 'AW 32 and HC are high-performance fluids made from wax-free hydrocarbons and a specialized additive system. They offer excellent shear stability, low-temperature pumpability, and strong anti-wear protection for high-pressure pumps. Suitable for diverse temperatures, they maintain stability and lubrication in both high-pressure and high-temperature environments. Ideal for equipment with varying operating conditions. Meets Denison HF-O, HF-1, HF-2, Vickers I-286-S, Vickers M-2950-S, and Cincinnati Milacron P-68, P-69, P-70 standards.', color: 'gray' },
    { name: 'Hydraulic Oil AW-46', image: hydraulicOilAW46,description: 'AW-46 is a high-performance hydraulic fluid made from premium virgin base oils, enhanced with anti-wear additives and rust inhibitors. It provides stability and reliability under harsh conditions in mobile and industrial applications, offering corrosion and water displacement protection for hydraulic systems. Designed for extended operation, it ensures optimal protection. Meets Denison HF-O, HF-1, HF-2, Vickers I-286-S, Vickers M-2950-S, and Cincinnati Milacron P-68, P-69, P-70 standards.', color: 'gray' },
    { name: 'Hydraulic Oil AW-68', image: hydraulicOilAW68,description: 'AW 68 is a premium hydraulic fluid made from top-grade virgin base oils, anti-wear additives, and rust inhibitors. It provides stable and exceptional performance in tough mobile and industrial applications. Designed for long-lasting efficiency, it features corrosion and water displacement inhibitors for effective protection of hydraulic systems. Meets HVLP hydraulic and general lubricating oils standards (DIN 51 524-3, ISO 6743/4, HV ISO 11158, HV) and Denison HF-O, HF-1, HF-2 standards.', color: 'gray' },

];

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

const OilAndLubricantsInfo = () => {
    const { oillubricantName } = useParams<{ oillubricantName: string }>(); // Get the coolant name from the URL parameter

    useEffect(() => {
        const element = document.getElementById(oillubricantName || '');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, [oillubricantName]);


    return (
        <>
          <div className="care-info-container">
            {OilLubricantDetails.map(item => (
              <div
                key={item.name}
                id={item.name}
                className={`care-info-item ${oillubricantName === item.name ? 'selected-care' : ''}`} // Add 'selected-care' class if this item is selected
              >
                <div className={`care-info-item-image-wrapper ${getColorClass(item.color)}`}>
                  <img src={item.image} alt={item.name} className="care-info-item-image" />
                </div>
                <div className="care-info-item-details">
                  <h2 className=" coolant-name care-info-item-title">{item.name}</h2>
                  <p className=" coolant-name care-info-item-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      );
}
export default OilAndLubricantsInfo;