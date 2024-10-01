import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import './FooterComponent.css'
const FooterComponent = () => {
  return (
    <footer className="footer bg-primary">
      <div className="footer-container">
        <div className="footer-columns">

          <div className="footer-column">
            <h4>About Us</h4>
            <p>We bring best stays in your city!!</p>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/Rooms">Rooms</a>
              </li>
              
              <li>
                <a href="/terms">Terms of Service</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a target="_blank" href="https://facebook.com">
                <FaFacebook />
              </a>
              <a target="_blank" href="https://twitter.com">
                <FaTwitter />
              </a>
              <a target="_blank" href="https://instagram.com">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Contact Us</h4>
            <p>
              Email:&nbsp;
              <a href="" style={{color:"white"}}>
                hotelbooking@gmail.com
              </a>{" "}
            </p>
            <p>Phone: +91 8160455926</p>
          </div>
        </div>
        {/* Footer Bottom Section */}
        <div className="footer-bottom">
          <p>&copy; 2024 Hotel Booking. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;