import { useState } from "react";
import TopTitle from "./components/Toptitle";
import InputField from "./components/InputField";
import Btn from "./components/Btn";

export default function App() {
  const [step, setStep] = useState(1);

  function handleNextStepClick() {
    setStep(step + 1);
  }

  function handlePreStepClick() {
    setStep(step - 1);
  }
  const highestDegree = [
    "High School",
    "Bachelor's Degree",
    "Master's Degree",
    "PhD",
  ];

  return (
    <div className="form-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1>Form Steps</h1>

        {/* step 1 */}
        {step === 1 && (
          <>
            <TopTitle title="Personal Information" />
            <div className="personalInfo">
              <InputField label="First Name" type="text" />
              <InputField label="Last Name" type="text" />
              <InputField label="Email Address" type="email" />
              <InputField label="Phone Number" type="tel" />
            </div>
            <Btn nameButton="Next" onClick={handleNextStepClick} />
          </>
        )}

        {/* // step 2 */}
        {step === 2 && (
          <>
            <TopTitle title="Education Information" />
            <div className="personalInfo">
              <label>Highest Degree</label>
              <select>
                {highestDegree.map((degree, index) => (
                  <option key={index}>{degree}</option>
                ))}
              </select>
              <InputField label="Graduation Year " type="date" />
              <InputField label=" Your Major" type="text" />
            </div>
            <Btn nameButton="Previous" onClick={handlePreStepClick} />
            <Btn nameButton="Next" onClick={handleNextStepClick} />
          </>
        )}
      </form>
    </div>
  );
}
