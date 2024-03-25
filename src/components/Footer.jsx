import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div>
      <footer>
        <h3>
          57<span style={{ color: 'rgb(137,219,123)' }}>D</span>entcare
        </h3>

        <div className='footer-text-container'>
          <div className='footer-columns'>
            <h3>Company</h3>
            <p>Home</p>
            <p>Services</p>
            <p>About Us</p>
            <p>Why Choose Us</p>
            <p>Testimonials</p>
            <p>Contact Us</p>
          </div>

          <div className='footer-columns'>
            <h3>Company</h3>
            <p>Home</p>
            <p>Services</p>
            <p>About Us</p>
            <p>Why Choose Us</p>
            <p>Testimonials</p>
            <p>Contact Us</p>
          </div>

          <div className='footer-columns'>
            <h3>Address</h3>
            <p>123 Dental Avenue City ville, State 12345 United States</p>
            <p>View on Maps</p>
            <h3>Inquiries</h3>
            <p>(123) 456-7890</p>
            <p>info@57dentcare.com</p>
          </div>

          <div className='footer-columns'>
            <h3>Newsletter</h3>
            <p>Stay updated with our Latest News</p>
            <div style={{ position: 'relative', width: 'fit-content' }}>
              <input type="text" placeholder='Your Email' style={{ paddingRight: '40px', color: 'black' }} />
              <button className='newsletter-btn' type="button" style={{ position: 'absolute', right: '5px', top: '50%', transform: 'translateY(-50%)' }}> <img src="strVector.png" alt="" /></button>
            </div>
            <div style={{ marginTop: '20px' }}>
              <img src="footer-icons.png" alt="" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
