import "./About.css";
import { FaDumbbell, FaHeartbeat, FaAppleAlt, FaUsers } from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80"
          alt="Gym"
        />
      </div>

      <div className="about-content">

        <h4>ABOUT US</h4>

        <h2>
          Transform Your <span>Body & Mind</span>
        </h2>

        <p>
          At FitZone Gym, we believe fitness is more than just lifting weights.
          We provide professional coaching, personalized nutrition plans,
          modern equipment, and a motivating environment to help you achieve
          your dream physique.
        </p>

        <div className="about-cards">

          <div className="card">
            <FaDumbbell className="icon" />
            <h3>Modern Equipment</h3>
            <p>Train with the latest gym machines and premium facilities.</p>
          </div>

          <div className="card">
            <FaHeartbeat className="icon" />
            <h3>Healthy Lifestyle</h3>
            <p>Improve your fitness with customized workout plans.</p>
          </div>

          <div className="card">
            <FaAppleAlt className="icon" />
            <h3>Nutrition Plans</h3>
            <p>Professional diet plans designed for your fitness goals.</p>
          </div>

          <div className="card">
            <FaUsers className="icon" />
            <h3>Expert Trainers</h3>
            <p>Certified trainers available to guide you every day.</p>
          </div>

        </div>

        <button className="about-btn">
          Read More
        </button>

      </div>

    </section>
  );
}

export default About;