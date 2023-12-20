function Education() {
  return (
    <div className="personal-details">
      <div className="flex pb-5">
        <div className="input-field">
          <label htmlFor="school" className="display-block">
            School
          </label>
          <input type="text" id="school" className="input-styling" />
        </div>
        <div className="input-field">
          <label htmlFor="degree" className="display-block">
            Degree
          </label>
          <input type="text" id="degree" className="input-styling" />
        </div>
      </div>

      <div className="flex">
        <div className="input-field">
          <label htmlFor="location" className="display-block">
            Location
          </label>
          <input type="tel" id="location" className="input-styling" />
        </div>
        <div className="flex">
          <div className="input-field">
            <label htmlFor="startDate" className="display-block">
              Start Date
            </label>
            <input type="date" id="startDate" className="input-styling" />
          </div>
          <div className="input-field">
            <label htmlFor="endDate" className="display-block">
              End Date
            </label>
            <input type="date" id="endDate" className="input-styling" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
