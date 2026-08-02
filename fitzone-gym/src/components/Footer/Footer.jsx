import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Left */}
        <div className="footer-box">
          <h2 className="footer-logo">
            Fit<span>Zone</span>
          </h2>

          <p>
            Transform your body, improve your health, and build confidence
            with our professional trainers and world-class fitness programs.
          </p>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#classes">Classes</a></li>
            <li><a href="#trainers">Trainers</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div className="footer-box">
          <h3>Opening Hours</h3>

          <ul>
            <li>Mon - Fri : 6 AM - 10 PM</li>
            <li>Saturday : 7 AM - 9 PM</li>
            <li>Sunday : 8 AM - 6 PM</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-box">
          <h3>Contact</h3>

          <p>
            <FaMapMarkerAlt /> Lahore, Pakistan
          </p>

          <p>
            <FaPhoneAlt /> +92 300 1234567
          </p>

          <p>
            <FaEnvelope /> info@fitzone.com
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 FitZone Gym. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;