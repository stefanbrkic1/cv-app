function Experience() {
  return (
    <div className="dropdown-content">
      <div className="flex pb-5">
        <div className="input-field">
          <label htmlFor="companyName" className="display-block">
            Company Name
          </label>
          <input type="text" id="companyName" className="input-styling" />
        </div>
        <div className="input-field">
          <label htmlFor="position" className="display-block">
            Position Title
          </label>
          <input type="text" id="position" className="input-styling" />
        </div>
      </div>

      <div className="flex">
        <div className="input-field">
          <label htmlFor="companyLocation" className="display-block">
            Location
          </label>
          <input type="tel" id="companyLocation" className="input-styling" />
        </div>
        <div className="flex">
          <div className="input-field">
            <label htmlFor="companyStartDate" className="display-block">
              Start Date
            </label>
            <input
              type="date"
              id="companyStartDate"
              className="input-styling"
            />
          </div>
          <div className="input-field">
            <label htmlFor="companyEndDate" className="display-block">
              End Date
            </label>
            <input type="date" id="companyEndDate" className="input-styling" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
