import "./Testimonials.css";
import { FaStar } from "react-icons/fa";

function Testimonials() {
  const reviews = [
    {
      name: "John Carter",
      role: "Fitness Enthusiast",
      review:
        "FitZone completely transformed my lifestyle. The trainers are supportive and the environment keeps me motivated every day.",
    },
    {
      name: "Sarah Wilson",
      role: "Member",
      review:
        "I lost 15kg in just 5 months. The workout plans and nutrition guidance were exactly what I needed.",
    },
    {
      name: "David Smith",
      role: "Athlete",
      review:
        "Excellent equipment, experienced coaches, and a friendly atmosphere. I highly recommend FitZone Gym.",
    },
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonial-heading">
        <h4>TESTIMONIALS</h4>
        <h2>
          What Our <span>Clients Say</span>
        </h2>
        <p>
          Hear from our members who have transformed their lives through
          dedication and expert guidance at FitZone Gym.
        </p>
      </div>

      <div className="testimonial-container">
        {reviews.map((review, index) => (
          <div className="testimonial-card" key={index}>
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p className="review">"{review.review}"</p>

            <h3>{review.name}</h3>
            <span>{review.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;