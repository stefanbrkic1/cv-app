import { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import Experience from "./Experience";

function ResumePage() {
  const [activeDropdown, setActiveDropdown] = useState(0);

  function handleDropdownClick(dropdown) {
    if (dropdown === activeDropdown) {
      setActiveDropdown(null);
    } else {
      switch (dropdown) {
        case 0:
          setActiveDropdown(0);
          break;
        case 1:
          setActiveDropdown(1);
          break;
        case 2:
          setActiveDropdown(2);
          break;
      }
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
            activeDropdown === 0 ? "dropdown-active" : ""
          }`}
          onClick={() => handleDropdownClick(0)}
        >
          <div className="dropdown-left">
            <div className="user-icon"></div>
            <div className="dropdown-text">Personal Details</div>
          </div>
          <div className="dropdown-right">
            <div className="caret"></div>
          </div>
        </div>
        {activeDropdown === 0 && (
          <PersonalDetails
            handleInputValue={handleInputValue}
            personalDetailsData={personalDetailsData}
          />
        )}
        <div
          className={`dropdown ${
            activeDropdown === 1 ? "dropdown-active" : ""
          }`}
          onClick={() => handleDropdownClick(1)}
        >
          <div className="dropdown-left">
            <div className="education-icon"></div>
            <div className="dropdown-text">Education</div>
          </div>
          <div className="dropdown-right">
            <div className="caret"></div>
          </div>
        </div>
        {activeDropdown === 1 && (
          <Education
            handleInputValue={handleInputValue}
            educationData={educationData}
          />
        )}
        <div
          className={`dropdown ${
            activeDropdown === 2 ? "dropdown-active" : ""
          }`}
          onClick={() => handleDropdownClick(2)}
        >
          <div className="dropdown-left">
            <div className="experience-icon"></div>
            <div className="dropdown-text">Experience</div>
          </div>
          <div className="dropdown-right">
            <div className="caret"></div>
          </div>
        </div>
        {activeDropdown === 2 && (
          <Experience
            handleInputValue={handleInputValue}
            experienceData={experienceData}
          />
        )}
      </section>

      {/* Resume displayer section */}
      <section className="container-right">
        <div className="resume"></div>
      </section>
    </div>
  );
}

export default ResumePage;
