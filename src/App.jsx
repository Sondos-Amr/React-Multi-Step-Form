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

  const [skillInput, setSkillInput] = useState([]);

  const [nextID, setNextId] = useState(1);

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
    setSkillInput([...skillInput, { id: nextID, skillName: formInpts.skills }]);
    setNextId(nextID + 1);
    setFormInputs({ ...formInpts, skills: "" });
  }

  function handleDeleteClick(id) {
    setSkillInput(skillInput.filter((skill) => skill.id !== id));
  }

  return (
    <div className="form-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="steps">
          <div className={step >= 1 ? "active" : ""}>1</div>
          <div className={step >= 2 ? "active" : ""}>2</div>
          <div className={step >= 3 ? "active" : ""}>3</div>
        </div>
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
              <div className="checkbox-container">
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
            <div className="pre-next-btn">
              <Btn nameButton="Previous" onClick={handlePreStepClick} />
              <Btn nameButton="Next" onClick={handleNextStepClick} />
            </div>
          </>
        )}

        {/* step 3 */}
        {step === 3 && (
          <>
            <TopTitle title="Previous Experiences " />
            <div className="radio-container">
              <label>Do You Have Pre Experience ?!</label>

              <div className="radio-contant">
                <div className="radio-contant-1">
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
                </div>
                <div className="radio-contant-2">
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
              </div>
            </div>
            <div className="personalInfo">
              <label>Enter Your skills : </label>

              <div className="skills-container">
                <input
                  type="text"
                  value={formInpts.skills}
                  onChange={(e) => {
                    setFormInputs({ ...formInpts, skills: e.target.value });
                  }}
                />
                <Btn nameButton="ADD" onClick={handleAddClick} />
              </div>
              <ul>
                {skillInput.map((skill) => (
                  <div className="li-container">
                    <li key={skill.id}>{skill.skillName}</li>
                    <Btn
                      nameButton="Delete"
                      onClick={() => {
                        handleDeleteClick(skill.id);
                      }}
                    />
                  </div>
                ))}
              </ul>
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
            <div className="pre-next-btn">
              <Btn nameButton="Previous" onClick={handlePreStepClick} />
              <Btn nameButton="Submit" onClick={handleSubmitClick} />
            </div>
          </>
        )}
      </form>
    </div>
  );
}
