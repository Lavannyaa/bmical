
import { useState } from "react";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [result, setResult] = useState("");

  function calculateBMI() {
    if (weight <= 0 || height <= 0 || weight === "" || height === "") {
      alert("Enter valid height and weight");
      return;
    }

    let h = height / 100;
    let value = weight / (h * h);

    setBmi(value.toFixed(2));

    if (value < 18.5) {
      setResult("Underweight");
    } else if (value < 25) {
      setResult("Normal Weight");
    } else if (value < 30) {
      setResult("Overweight");
    } else {
      setResult("Obese");
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>BMI Calculator</h1>

      <input
        type="number"
        placeholder="Weight in kg"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Height in cm"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <br /><br />

      <button onClick={calculateBMI}>
        Calculate BMI
      </button>

      {bmi !== null && (
        <div>
          <h2>Your BMI: {bmi}</h2>
          <h3>Result: {result}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
