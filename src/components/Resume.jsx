function Resume({
  personalDetailsData,
  educationData,
  experienceData,
  aboutText,
  color,
}) {
  return (
    <div className="resume" id="resumePreview">
      {/*Resume Header Section*/}
      <div className="resume-header" style={{ backgroundColor: color }}>
        <div className="resume-header-left">
          <div className="image-container" id="userImageContainer"></div>
          <div className="flex-column">
            <div className="fullname">{personalDetailsData.fullName}</div>
            <div className="position-title">{experienceData.positionTitle}</div>
          </div>
        </div>
        <div className="resume-header-right">
          <div className="icon-flex">
            <div className="email-icon"></div>
            <div className="email-resume">{personalDetailsData.email}</div>
          </div>
          <div className="icon-flex">
            <div className="address-icon"></div>
            <div className="address-resume">{personalDetailsData.address}</div>
          </div>
          <div className="icon-flex">
            <div className="phone-icon"></div>
            <div className="phone-resume">
              {personalDetailsData.phoneNumber}
            </div>
          </div>
        </div>
      </div>

      {/*Resume Body Section*/}
      <div className="resume-body">
        {/*Education Section*/}
        <div className="resume-section">
          <div className="resume-heading">
            <div
              className="heading-line"
              style={{ backgroundColor: color }}
            ></div>
            <div className="heading-title">EDUCATION</div>
          </div>
          <div className="resume-section-content">
            <div className="school-resume">
              {educationData.school} {educationData.location !== "" && ", "}
              <span className="school-location">{educationData.location}</span>
            </div>
            <div className="degree-resume">{educationData.degree}</div>
            <div className="school-date">
              {educationData.startDate}{" "}
              {educationData.startDate !== "" && " / "} {educationData.endDate}
            </div>
          </div>
        </div>

        {/*Experience Section*/}
        <div className="resume-section">
          <div className="resume-heading">
            <div
              className="heading-line"
              style={{ backgroundColor: color }}
            ></div>
            <div className="heading-title">EXPERIENCE</div>
          </div>
          <div className="resume-section-content">
            <div className="school-resume">
              {experienceData.companyName}
              <span className="school-location">
                {experienceData.location !== "" && ", "}
                {experienceData.location}
              </span>
            </div>
            <div className="degree-resume">{experienceData.positionTitle}</div>
            <div className="school-date">
              {experienceData.startDate}
              {experienceData.startDate !== "" && " / "}{" "}
              {experienceData.endDate}
            </div>
          </div>
        </div>

        {/*About Me Section*/}
        <div className="resume-section">
          <div className="resume-heading">
            <div
              className="heading-line"
              style={{ backgroundColor: color }}
            ></div>
            <div className="heading-title">ABOUT ME</div>
          </div>
          <div className="resume-section-content">{aboutText}</div>
        </div>
      </div>

      {/*Footer section */}
      <div className="resume-footer" style={{ backgroundColor: color }}>
        <div className="resume-footer-text">
          Copyright &copy; {personalDetailsData.fullName}
        </div>
      </div>
    </div>
  );
}

export default Resume;
