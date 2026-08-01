import "./BMI.css";
import { useState } from "react";

function BMI() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    if (!height || !weight) {
      setResult("Please enter height and weight.");
      setStatus("");
      return;
    }

    const h = height / 100;
    const bmi = (weight / (h * h)).toFixed(1);

    let category = "";

    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi < 25) {
      category = "Normal";
    } else if (bmi < 30) {
      category = "Overweight";
    } else {
      category = "Obese";
    }

    setResult(bmi);
    setStatus(category);
  };

  return (
    <section className="bmi" id="bmi">
      <div className="bmi-content">

        <div className="bmi-text">
          <h4>BMI CALCULATOR</h4>
          <h2>
            Calculate Your <span>Body Mass Index</span>
          </h2>

          <p>
            Enter your height and weight to know your BMI and
            understand your fitness level.
          </p>
        </div>

        <div className="bmi-card">

          <input
            type="number"
            placeholder="Height (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />

          <input
            type="number"
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />

          <button onClick={calculateBMI}>
            Calculate BMI
          </button>

          {result && (
            <div className="result">
              <h3>BMI: {result}</h3>
              <p>{status}</p>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

export default BMI;