import { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import Experience from "./Experience";
import Resume from "./Resume";

function ResumePage() {
  const [personalDropdown, setPersonalDropdown] = useState(1);
  const [educationDropdown, setEducationDropdown] = useState(0);
  const [experienceDropdown, setExperienceDropdown] = useState(0);

  function handleDropdownClick(caller) {
    if (caller === "personalDropdown") {
      personalDropdown === 0 ? setPersonalDropdown(1) : setPersonalDropdown(0);
    }

    if (caller === "educationDropdown") {
      educationDropdown === 0
        ? setEducationDropdown(1)
        : setEducationDropdown(0);
    }

    if (caller === "experienceDropdown") {
      experienceDropdown === 0
        ? setExperienceDropdown(1)
        : setExperienceDropdown(0);
    }
  }

  const [experienceData, setExperienceData] = useState({
    companyName: "",
    positionTitle: "",
    location: "",
    startDate: "",
    endDate: "",
  });

  const [personalDetailsData, setPersonalDetailsData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const [educationData, setEducationData] = useState({
    school: "",
    degree: "",
    location: "",
    startDate: "",
    endDate: "",
  });

  function handleInputValue(caller, property, value) {
    if (caller === "personalDetails") {
      setPersonalDetailsData({ ...personalDetailsData, [property]: value });
    }
    if (caller === "education") {
      setEducationData({ ...educationData, [property]: value });
    }
    if (caller === "experience") {
      setExperienceData({ ...experienceData, [property]: value });
    }
  }

  return (
    <div className="resume-container">
      <section className="container-left">
        {/* Navbar section */}
        <nav className="nav-bar">
          <div className="nav-left">
            <div className="logo">Resumify</div>
          </div>
          <div className="nav-right">
            <button className="clear-btn">
              Clear <div className="clear-icon"></div>
            </button>
            <button className="download-btn">
              PDF<div className="download-icon"></div>
            </button>
          </div>
        </nav>
        {/* Dropdowns section */}
        <div
          className={`dropdown ${
            personalDropdown === 1 ? "dropdown-active" : ""
          }`}
          onClick={() => handleDropdownClick("personalDropdown")}
        >
          <div className="dropdown-left">
            <div className="user-icon"></div>
            <div className="dropdown-text">Personal Details</div>
          </div>
          <div className="dropdown-right">
            <div className="caret"></div>
          </div>
        </div>
        {personalDropdown === 1 && (
          <PersonalDetails
            handleInputValue={handleInputValue}
            personalDetailsData={personalDetailsData}
          />
        )}
        <div
          className={`dropdown ${
            educationDropdown === 1 ? "dropdown-active" : ""
          }`}
          onClick={() => handleDropdownClick("educationDropdown")}
        >
          <div className="dropdown-left">
            <div className="education-icon"></div>
            <div className="dropdown-text">Education</div>
          </div>
          <div className="dropdown-right">
            <div className="caret"></div>
          </div>
        </div>
        {educationDropdown === 1 && (
          <Education
            handleInputValue={handleInputValue}
            educationData={educationData}
          />
        )}
        <div
          className={`dropdown ${
            experienceDropdown === 1 ? "dropdown-active" : ""
          }`}
          onClick={() => handleDropdownClick("experienceDropdown")}
        >
          <div className="dropdown-left">
            <div className="experience-icon"></div>
            <div className="dropdown-text">Experience</div>
          </div>
          <div className="dropdown-right">
            <div className="caret"></div>
          </div>
        </div>
        {experienceDropdown === 1 && (
          <Experience
            handleInputValue={handleInputValue}
            experienceData={experienceData}
          />
        )}
        <div className="about-section">
          <textarea name="about" id="aboutText" cols="30" rows="10">
            Write about yourself
          </textarea>
        </div>
      </section>

      {/* Resume displayer section */}
      <Resume />
    </div>
  );
}

export default ResumePage;
