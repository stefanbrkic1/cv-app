import { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import Experience from "./Experience";
import Resume from "./Resume";

function ResumePage({ handleContent }) {
  const [personalDropdown, setPersonalDropdown] = useState(1);
  const [educationDropdown, setEducationDropdown] = useState(0);
  const [experienceDropdown, setExperienceDropdown] = useState(0);
  const [aboutText, setAboutText] = useState("");
  const [color, setColor] = useState("#5281ce");

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

  const [experienceData, setExperienceData] = useState({
    companyName: "",
    positionTitle: "",
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

  // Set all values to default example values
  function loadExample() {
    setPersonalDetailsData({
      fullName: "Stefan Brkic",
      email: "stefanbrkicdzn.contact@gmail.com",
      phoneNumber: "062/ 8724091",
      address: "Milutina Milankovica 230",
    });

    setEducationData({
      school: "Tech University",
      degree: "Bachelor of Science in Computer Science",
      location: "Silicon Valley, CA",
      startDate: "2015-01-01",
      endDate: "2018-05-23",
    });

    setExperienceData({
      companyName: "Tech Solutions",
      positionTitle: "Frontend Developer",
      location: "Belgrade, Serbia",
      startDate: "2019-05-01",
      endDate: "2023-10-23",
    });

    setAboutText(
      "Results-driven and highly motivated professional with a proven track record in [Your Industry/Field]. Possessing a unique blend of technical expertise, strategic thinking, and effective communication skills, I am dedicated to delivering outstanding results in dynamic and challenging environments. With a passion for [Key Interest or Skill], I consistently strive for excellence and thrive on tackling new challenges. Known for my collaborative approach, adaptability, and commitment to achieving organizational goals, I am confident in my ability to contribute positively to any team."
    );

    aboutTextInput.value =
      "Results-driven and highly motivated professional with a proven track record in [Your Industry/Field]. Possessing a unique blend of technical expertise, strategic thinking, and effective communication skills, I am dedicated to delivering outstanding results in dynamic and challenging environments. With a passion for [Key Interest or Skill], I consistently strive for excellence and thrive on tackling new challenges. Known for my collaborative approach, adaptability, and commitment to achieving organizational goals, I am confident in my ability to contribute positively to any team.";
  }

  // Set all values to empty
  function clearResume() {
    setPersonalDetailsData({
      fullName: "",
      email: "",
      phoneNumber: "",
      address: "",
    });

    setEducationData({
      school: "",
      degree: "",
      location: "",
      startDate: "",
      endDate: "",
    });

    setExperienceData({
      companyName: "",
      positionTitle: "",
      location: "",
      startDate: "",
      endDate: "",
    });

    setAboutText("");

    aboutTextInput.value = "Write about yourself...";
  }

  return (
    <div className="resume-container">
      <section className="container-left">
        {/* Navbar section */}
        <nav className="nav-bar">
          <div className="nav-left">
            <div className="logo" onClick={handleContent}>
              Resumify
            </div>
          </div>
          <div className="nav-right">
            <button className="load-example-btn" onClick={loadExample}>
              <div className="load-icon"></div>
              <div className="load-text">Example</div>
            </button>
            <button className="clear-btn" onClick={clearResume}>
              <div className="clear-icon"></div>
              <div className="clear-text">Clear</div>
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
          <textarea
            name="about"
            id="aboutTextInput"
            cols="30"
            rows="10"
            onInput={(e) => setAboutText(e.target.value)}
          >
            Write about yourself...
          </textarea>
        </div>

        {/*Styling Section */}
        <div className="customize">
          <div className="dropdown-left">
            <div className="brush-icon"></div>
            <div className="dropdown-text">Customize</div>
          </div>
          <div className="dropdown-right">
            <div
              className="color-container blue"
              onClick={() => setColor("#5281ce")}
            ></div>
            <div
              className="color-container green"
              onClick={() => setColor("#39c56a")}
            ></div>
            <div
              className="color-container orange"
              onClick={() => setColor("#F4832C")}
            ></div>
            <div
              className="color-container purple"
              onClick={() => setColor("#966FD6")}
            ></div>
            <div
              className="color-container pink"
              onClick={() => setColor("#FFB0B0")}
            ></div>
          </div>
        </div>
      </section>

      {/* Resume displayer section */}
      <section className="container-right">
        <Resume
          personalDetailsData={personalDetailsData}
          educationData={educationData}
          experienceData={experienceData}
          aboutText={aboutText}
          color={color}
        />
      </section>
    </div>
  );
}

export default ResumePage;
