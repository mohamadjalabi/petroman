import { Row, Col, Divider } from 'antd';

const Contact = () => {
  return (
    <div className="contact-us" id='contact-us-section'>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={25} md={8}>
          <img src="src\Client\assets\qr-code (2).png" alt="QR Code" className="qr-code" />
        </Col>
        <Col xs={24} sm={12} md={16}>
          <div className="contact-info">
            <h2>Contact Us</h2>
            <p>
              <strong>Email:</strong> <a href="mailto:info@petroman.net">info@petroman.net</a><br />
              <strong>Phone:</strong> <a>+96877217402</a>
            </p>
          </div>
          <Divider className='divider' />
          <div className="more-info">
            <h2>For More Info View Our Catalouge</h2>
            <p>
             <strong>Catalouge:</strong> <a href="src\Client\assets\Petroman Catalogue.pdf" target="_blank" rel="noopener noreferrer">Prestone Catalouge</a>
            </p>
          </div>
          <Divider className='divider' />
          <div className="manufacture-info">
            <strong>
              <p>
                Manufactured by Petroman Sultanate of Oman<br />
                <br />
                Al Buraimi Industrial Area - P.O. Box 947, Plot No. 322
              </p>
            </strong>
            <img src="src\Client\assets\made-in-oman.png" alt="Made in Oman" className="made-in-oman" />
          </div>
        </Col>
      </Row>
      {/* Copyright Statement */}
      <Divider className='divider' />
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} <u>Petroman</u>. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Contact;
