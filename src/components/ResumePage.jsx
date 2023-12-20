import { useState } from "react";
import PersonalDetails from "./PersonalDetails";

function ResumePage() {
  const [activeDropdown, setActiveDropdown] = useState(0);

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
            <button className="example-btn">Load Example</button>
          </div>
        </nav>
        {/* Dropdowns section */}
        <div className="dropdown">
          <div className="dropdown-left">
            <div className="user-icon"></div>
            <div className="dropdown-text">Personal Details</div>
          </div>
          <div className="dropdown-right">
            <div className="caret"></div>
          </div>
        </div>
        {activeDropdown === 0 && <PersonalDetails />}
        <div className="dropdown">
          <div className="dropdown-left">
            <div className="education-icon"></div>
            <div className="dropdown-text">Education</div>
          </div>
          <div className="dropdown-right">
            <div className="caret"></div>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropdown-left">
            <div className="experience-icon"></div>
            <div className="dropdown-text">Experience</div>
          </div>
          <div className="dropdown-right">
            <div className="caret"></div>
          </div>
        </div>
      </section>

      {/* Resume displayer section */}
      <section className="container-right">
        <div className="resume"></div>
      </section>
    </div>
  );
}

export default ResumePage;
