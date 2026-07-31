import "./Programs.css";
import {
  FaDumbbell,
  FaRunning,
  FaHeartbeat,
  FaFire,
  FaAppleAlt,
  FaUserNinja,
} from "react-icons/fa";

function Programs() {
  const programs = [
    {
      icon: <FaDumbbell />,
      title: "Strength Training",
      desc: "Build muscle and increase your overall strength with expert guidance.",
    },
    {
      icon: <FaRunning />,
      title: "Cardio Fitness",
      desc: "Improve endurance and burn calories with effective cardio sessions.",
    },
    {
      icon: <FaHeartbeat />,
      title: "Health & Wellness",
      desc: "Maintain a healthy lifestyle with personalized fitness programs.",
    },
    {
      icon: <FaFire />,
      title: "Fat Loss",
      desc: "High-intensity workouts designed to help you lose body fat faster.",
    },
    {
      icon: <FaAppleAlt />,
      title: "Nutrition Plan",
      desc: "Customized diet plans to maximize your fitness results.",
    },
    {
      icon: <FaUserNinja />,
      title: "Personal Coaching",
      desc: "One-on-one coaching with certified professional trainers.",
    },
  ];

  return (
    <section className="programs" id="programs">

      <div className="section-title">
        <h4>OUR PROGRAMS</h4>
        <h2>
          Choose Your <span>Fitness Program</span>
        </h2>
      </div>

      <div className="program-container">

        {programs.map((item, index) => (
          <div className="program-card" key={index}>

            <div className="program-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

            <button>Explore</button>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Programs;