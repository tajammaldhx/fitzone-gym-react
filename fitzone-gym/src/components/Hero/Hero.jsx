import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <h1>
          Build Your <span>Dream Body</span>
        </h1>

        <p>
          Push your limits, stay healthy, and become the strongest version of
          yourself with our world-class trainers and modern equipment.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">Join Now</button>
          <button className="btn-secondary">Learn More</button>
        </div>

        <div className="hero-stats">

          <div>
            <h2>500+</h2>
            <span>Members</span>
          </div>

          <div>
            <h2>20+</h2>
            <span>Expert Trainers</span>
          </div>

          <div>
            <h2>10+</h2>
            <span>Years Experience</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;