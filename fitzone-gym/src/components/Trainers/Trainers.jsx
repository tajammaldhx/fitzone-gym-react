import "./Trainers.css";
import trainer1 from "../../assets/images/trainer1.jpg";
import trainer2 from "../../assets/images/trainer2.jpg";
import trainer3 from "../../assets/images/trainer4.jpg";
import trainer4 from "../../assets/images/trainer3.jpg";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

function Trainers() {
  const trainers = [
    {
      image: trainer1,
      name: "Mike Anderson",
      role: "Bodybuilding Coach",
    },
    {
      image: trainer2,
      name: "Chris Walker",
      role: "Strength Trainer",
    },
    {
      image: trainer3,
      name: "Jessica Morgan",
      role: "Fitness Coach",
    },
    {
      image: trainer4,
      name: "Daniel Brooks",
      role: "Personal Trainer",
    },
  ];

  return (
    <section className="trainers" id="trainers">
      <div className="trainer-heading">
        <h4>OUR TRAINERS</h4>
        <h2>
          Meet Our <span>Professional Team</span>
        </h2>
        <p>
          Our certified trainers are here to help you achieve your fitness goals
          with personalized coaching and motivation.
        </p>
      </div>

      <div className="trainer-container">
        {trainers.map((trainer, index) => (
          <div className="trainer-card" key={index}>
            <img src={trainer.image} alt={trainer.name} />

            <div className="trainer-info">
              <h3>{trainer.name}</h3>
              <p>{trainer.role}</p>

              <div className="social-icons">
                <FaFacebookF />
                <FaInstagram />
                <FaTwitter />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Trainers;