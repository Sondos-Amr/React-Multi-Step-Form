import { useState } from "react";
import TopTitle from "./components/Toptitle";
import InputField from "./components/InputField";
import Btn from "./components/Btn";

export default function App() {
  const [step, setStep] = useState(1);
  const [formInpts, setFormInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    isStudent: false,
    question: "",
    degree: "",
    status: "",
    major: "",
    skills: "",
  });

  const [skillInput, setSkillInput] = useState(["HTML"]);

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

  function handleSubmitClick() {
    alert("Thank you! Your submission is complete.");
  }

  function handleCheckBoxChange(e) {
    setFormInputs({ ...formInpts, isStudent: e.target.checked });
  }
  function handleAddClick() {
    setSkillInput([...skillInput, formInpts.skills]);
  }

  return (
    <div className="form-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <header>Form Steps</header>

        {/* step 1 */}
        {step === 1 && (
          <>
            <TopTitle title="Personal Information" />
            <div className="personalInfo">
              <InputField
                label="First Name"
                type="text"
                value={formInpts.firstName}
                onChange={(e) => {
                  setFormInputs({ ...formInpts, firstName: e.target.value });
                }}
              />
              <InputField
                label="Last Name"
                type="text"
                value={formInpts.lastName}
                onChange={(e) => {
                  setFormInputs({ ...formInpts, lastName: e.target.value });
                }}
              />
              <InputField
                label="Email Address"
                type="email"
                value={formInpts.email}
                onChange={(e) => {
                  setFormInputs({ ...formInpts, email: e.target.value });
                }}
              />
              <InputField
                label="Phone Number"
                type="tel"
                value={formInpts.phoneNumber}
                onChange={(e) => {
                  setFormInputs({ ...formInpts, phoneNumber: e.target.value });
                }}
              />
            </div>
            <div className="nextBtn-1">
              <Btn nameButton="Next" onClick={handleNextStepClick} />
            </div>
          </>
        )}

        {/* // step 2 */}
        {step === 2 && (
          <>
            <TopTitle title="Education Information" />
            <div className="personalInfo">
              <div>
                <label>Are u student !? </label>
                <InputField
                  type="checkBox"
                  checked={formInpts.isStudent}
                  onChange={handleCheckBoxChange}
                />
              </div>
              <label>Highest Degree</label>
              <select
                value={formInpts.degree}
                onChange={(e) => {
                  setFormInputs({ ...formInpts, degree: e.target.value });
                }}
              >
                {highestDegree.map((degree, index) => (
                  <option key={index}>{degree}</option>
                ))}
              </select>
              <InputField
                label=" Your Major"
                type="text"
                value={formInpts.major}
                onChange={(e) => {
                  setFormInputs({ ...formInpts, major: e.target.value });
                }}
              />
            </div>
            <Btn nameButton="Previous" onClick={handlePreStepClick} />
            <Btn nameButton="Next" onClick={handleNextStepClick} />
          </>
        )}

        {/* step 3 */}
        {step === 3 && (
          <>
            <TopTitle title="Previous Experiences " />
            <div>
              <label>Do you have previous experience in programming ?!</label>
              <InputField
                value="Yes"
                type="radio"
                name="status"
                checked={formInpts.status == "Yes"}
                onChange={(e) => {
                  setFormInputs({ ...formInpts, status: e.target.value });
                }}
              />
              Yes
              <InputField
                value="No"
                type="radio"
                name="status"
                checked={formInpts.status == "No"}
                onChange={(e) => {
                  setFormInputs({ ...formInpts, status: e.target.value });
                }}
              />
              No
            </div>
            <div className="personalInfo">
              <div>
                <InputField
                  label="Enter Your skills"
                  type="text"
                  value={formInpts.skills}
                  onChange={(e) => {
                    setFormInputs({ ...formInpts, skills: e.target.value });
                  }}
                />
                <Btn nameButton="ADD" onClick={handleAddClick} />
                <ul>
                  {skillInput.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <InputField
                label="Any Question .. ! "
                type="textarea"
                value={formInpts.question}
                onChange={(e) => {
                  setFormInputs({ ...formInpts, question: e.target.value });
                }}
              />
            </div>
            <Btn nameButton="Previous" onClick={handlePreStepClick} />
            <Btn nameButton="Submit" onClick={handleSubmitClick} />
          </>
        )}
      </form>
    </div>
  );
}
