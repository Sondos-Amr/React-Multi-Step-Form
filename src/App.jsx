import { useState } from "react";
import TopTitle from "./component/Toptitle";
import InputField from "./component/InputField";
import Btn from "./component/Btn";

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
      </form>
    </div>
  );
}
