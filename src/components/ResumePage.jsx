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

  return (
    <div className="resume-container">
      <section className="container-left">
        {/* Navbar section */}
        <nav className="nav-bar">
          <div className="nav-left">
            <div className="logo">Resumify</div>
          </div>
          <div className="nav-right">
            <button className="clear-btn">Clear</button>
            <button className="download-btn">PDF</button>
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
        {activeDropdown === 0 && <PersonalDetails />}
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
        {activeDropdown === 1 && <Education />}
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
        {activeDropdown === 2 && <Experience />}
      </section>

      {/* Resume displayer section */}
      <section className="container-right">
        <div className="resume"></div>
      </section>
    </div>
  );
}

export default ResumePage;
