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
      </form>
    </div>
  );
}
