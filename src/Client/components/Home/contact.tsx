import { Row, Col, Divider } from 'antd';
import { ContactsOutlined, FilePdfOutlined } from '@ant-design/icons';

import qrcode from '../../assets/qr-code (2).png';
import made from '../../assets/made-in-oman.png';

const Contact = () => {
  return (
    <div className="contact-us" id='contact-us-section'>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={25} md={8}>
          <img src={qrcode} alt="QR Code" className="qr-code" />
        </Col>
        <Col xs={24} sm={12} md={16}>
          <div className="contact-info">
            <h2>Contact Us <ContactsOutlined /> </h2>
            
            <p>
              <strong>Email:</strong> <a href="mailto:info@petroman.net">info@petroman.net</a><br />
              <strong>Phone:</strong> <a>+96877217402</a>
            </p>
          </div>
          <Divider className='divider' />
          <div className="more-info">
            <h2>For More Info View Our Catalog <FilePdfOutlined /></h2>
            <p>
             <strong>Catalog:</strong> <a href="/catalog" rel="noopener noreferrer">Petroman Catalog</a>
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
            <img src={made} alt="Made in Oman" className="made-in-oman" />
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
