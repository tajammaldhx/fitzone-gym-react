import "./Contact.css";
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Message Sent Successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        {/* Heading */}
        <div className="section-heading">
          <span>CONTACT US</span>
          <h2>Let's Get In Touch</h2>
          <p>
            Have questions or want to join FitZone Gym? We'd love to hear from
            you.
          </p>
        </div>

        <div className="contact-container">
          {/* Contact Information */}
          <div className="contact-info">

            <div className="info-box">
              <div className="icon">
                <FaMapMarkerAlt />
              </div>

              <div className="info-text">
                <h4>Address</h4>
                <p>123 Fitness Street, Lahore, Pakistan</p>
              </div>
            </div>

            <div className="info-box">
              <div className="icon">
                <FaPhoneAlt />
              </div>

              <div className="info-text">
                <h4>Phone</h4>
                <p>+92 300 1234567</p>
              </div>
            </div>

            <div className="info-box">
              <div className="icon">
                <FaEnvelope />
              </div>

              <div className="info-text">
                <h4>Email</h4>
                <p>info@fitzone.com</p>
              </div>
            </div>

            <div className="info-box">
              <div className="icon">
                <FaClock />
              </div>

              <div className="info-text">
                <h4>Working Hours</h4>
                <p>Monday - Saturday</p>
                <p>6:00 AM - 11:00 PM</p>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <form onSubmit={handleSubmit}>

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Write Your Message..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit">
                Send Message
              </button>

            </form>
          </div>
        </div>

        {/* Google Map */}

        <div className="contact-map">
          <iframe
            title="Gym Location"
            src="https://www.google.com/maps?q=Lahore,Pakistan&output=embed"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default Contact;