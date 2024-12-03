import { Row, Col, Card } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faWallet, faPeopleRoof } from '@fortawesome/free-solid-svg-icons'; // Import the Font Awesome icons

const { Meta } = Card;

const WhyChooseUs = () => { 
  return (
    <div className="why-choose-us-container">
      <h1 className="title">Why Choose Us</h1>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <Card className="reason-card">
            <FontAwesomeIcon icon={faCar} className="icon" /> {/* Replaced with Font Awesome icon */}
            <Meta
              title="Car Protection"
              description="At Petroman, we prioritize the health and longevity of your vehicle. Our advanced lubricants and coolants are designed to protect engines, radiators, and mechanical components from wear, rust, and corrosion, ensuring optimal performance and reliability."
            />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card className="reason-card">
          <FontAwesomeIcon icon={faPeopleRoof} className="icon" /> 
          <Meta
              title="Needs Concentration"
              description="We focus on your specific needs by offering tailored solutions for lubricants and coolants. Whether for everyday vehicles, heavy-duty machinery, or unique environmental conditions, our products deliver the performance and protection you require."
            />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card className="reason-card">
            <FontAwesomeIcon icon={faWallet} className="icon" /> {/* Replaced with Font Awesome icon */}
            <Meta
              title="Protect Your Investment"
              description="We understand that your vehicle is a significant investment. Our high-quality products safeguard your engine and cooling system, reducing maintenance costs and extending the lifespan of your car, making every penny count."
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default WhyChooseUs;
