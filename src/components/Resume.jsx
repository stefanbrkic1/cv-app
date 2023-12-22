function Resume({ personalDetailsData, educationData, experienceData }) {
  return (
    <div className="resume">
      {/*Resume Header Section*/}
      <div className="resume-header">
        <div className="resume-header-left">
          <div className="image-container"></div>
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
    </div>
  );
}

export default Resume;
