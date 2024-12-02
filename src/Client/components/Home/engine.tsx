import { Row, Col } from 'antd';
import { CheckCircleFilled, WarningFilled } from '@ant-design/icons';
import 'swiper/css';
import 'swiper/css/navigation';

const Engine = () => {
  return (
    <div className="engine-container">
      <Row gutter={0}>
        <Col xs={24} md={12} className="problems-column">
          <div className="solutions-description">
            <h2>Popular Problems</h2>
            <section id="chat-segment">
        <div className="chat-header">
          {/* <p>Car Troubleshooting Chat</p> */}
          <WarningFilled />
        </div>
        <div className="chat-container">
          <div className="chat-message incoming">
            <p className="message-text">"Engine Wear and Tear."</p>
            <span className="timestamp">Problem</span>
          </div>
      
          <div className="chat-message outgoing">
            <p className="message-text">"Poor-quality or degraded engine oil fails to provide adequate lubrication, leading to increased friction and wear of engine components."</p>
            <span className="timestamp">Cause</span>
          </div>
      
          <div className="chat-message incoming">
            <p className="message-text">"Overheating Engines."</p>
            <span className="timestamp">Problem</span>
          </div>
          <div className="chat-message outgoing">
            <p className="message-text">"Insufficient or low-quality coolant/antifreeze fails to regulate engine temperature, especially in extreme conditions."</p>
            <span className="timestamp">Cause</span>
          </div>
          <div className="chat-message incoming">
            <p className="message-text">"Corrosion and Rust in Cooling Systems."</p>
            <span className="timestamp">Problem</span>
          </div>
          <div className="chat-message outgoing">
            <p className="message-text">"Using impure or ineffective coolants can lead to rust and corrosion in the radiator and cooling system."</p>
            <span className="timestamp">Cause</span>
          </div>
          <div className="chat-message incoming">
            <p className="message-text">"Oil Sludge Buildup."</p>
            <span className="timestamp">Problem</span>
          </div>
          <div className="chat-message outgoing">
            <p className="message-text">"Low-quality or incorrect oil type can break down under heat, creating sludge that clogs the engine."</p>
            <span className="timestamp">Cause</span>
          </div>
        </div>
      </section>
          </div>
          <div className="engine-image-container">
            <img src="src/Client/assets/engine (2).png" alt="Engine" className="engine-image" />
          </div>
        </Col>

        {/* Right Side: Engine Image and Solutions */}
        <Col xs={24} md={12} className="solutions-column">
          <div className="engine-image-container">
            <img src="src/Client/assets/Engine.png" alt="Engine" className="engine-image" />
          </div>
          <div className="solutions-description">
            <h2>Our <br></br> Solutions</h2>
            <section id="chat-segment">
        <div className="chat-header">
          {/* <p>Car Troubleshooting Chat</p> */}
          <CheckCircleFilled />
        </div>
        <div className="chat-container">
          <div className="chat-message incoming">
            <p className="message-text">"Engine Wear and Tear."</p>
            <span className="timestamp">Problem</span>
          </div>
      
          <div className="chat-message outgoing">
            <p className="message-text">"Petroman’s high-performance engine oils ensure optimal lubrication, reducing friction and wear to extend engine life."</p>
            <span className="timestamp">Solution</span>
          </div>
      
          <div className="chat-message incoming">
            <p className="message-text">"Overheating Engines."</p>
            <span className="timestamp">Problem</span>
          </div>
          <div className="chat-message outgoing">
            <p className="message-text">"Petroman’s advanced coolant and antifreeze solutions maintain optimal engine temperatures, preventing overheating in all weather conditions."</p>
            <span className="timestamp">Solution</span>
          </div>
          <div className="chat-message incoming">
            <p className="message-text">"Corrosion and Rust in Cooling Systems."</p>
            <span className="timestamp">Problem</span>
          </div>
          <div className="chat-message outgoing">
            <p className="message-text">"Petroman’s anti-corrosion coolant formulations protect radiators and cooling systems from rust and corrosion, ensuring long-lasting performance."</p>
            <span className="timestamp">Solution</span>
          </div>
          <div className="chat-message incoming">
            <p className="message-text">"Oil Sludge Buildup."</p>
            <span className="timestamp">Problem</span>
          </div>
          <div className="chat-message outgoing">
            <p className="message-text">"Petroman’s premium synthetic oils resist thermal breakdown, keeping the engine clean and free from harmful sludge."</p>
            <span className="timestamp">Solution</span>
          </div>
        </div>
      </section>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Engine;
