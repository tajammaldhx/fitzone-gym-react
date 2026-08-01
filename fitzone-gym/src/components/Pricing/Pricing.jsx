import "./Pricing.css";
import { FaCheck, FaTimes } from "react-icons/fa";

function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$29",
      duration: "/Month",
      features: [
        { text: "Gym Access", available: true },
        { text: "Cardio Area", available: true },
        { text: "Locker", available: true },
        { text: "Personal Trainer", available: false },
        { text: "Diet Plan", available: false },
      ],
    },
    {
      name: "Standard",
      price: "$49",
      duration: "/Month",
      features: [
        { text: "Gym Access", available: true },
        { text: "Cardio Area", available: true },
        { text: "Locker", available: true },
        { text: "Personal Trainer", available: true },
        { text: "Diet Plan", available: false },
      ],
    },
    {
      name: "Premium",
      price: "$79",
      duration: "/Month",
      features: [
        { text: "Gym Access", available: true },
        { text: "Cardio Area", available: true },
        { text: "Locker", available: true },
        { text: "Personal Trainer", available: true },
        { text: "Diet Plan", available: true },
      ],
    },
  ];

  return (
    <section className="pricing" id="pricing">
      <div className="pricing-heading">
        <h4>OUR PRICING</h4>
        <h2>
          Choose Your <span>Membership</span>
        </h2>
        <p>
          Select the perfect membership plan according to your fitness goals and
          enjoy premium facilities with expert trainers.
        </p>
      </div>

      <div className="pricing-container">
        {plans.map((plan, index) => (
          <div className="pricing-card" key={index}>
            <h3>{plan.name}</h3>

            <div className="price">
              <span>{plan.price}</span>
              <small>{plan.duration}</small>
            </div>

            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>
                  {feature.available ? (
                    <FaCheck className="check" />
                  ) : (
                    <FaTimes className="cross" />
                  )}
                  {feature.text}
                </li>
              ))}
            </ul>

            <button>Join Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;