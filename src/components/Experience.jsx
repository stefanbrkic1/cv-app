function Experience({ handleInputValue, experienceData }) {
  return (
    <div className="dropdown-content">
      <div className="flex pb-5">
        <div className="input-field">
          <label htmlFor="companyName" className="display-block">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            className="input-styling"
            autoComplete="off"
            value={experienceData.companyName}
            onChange={(e) =>
              handleInputValue('experience', 'companyName', e.target.value)
            }
          />
        </div>
        <div className="input-field">
          <label htmlFor="companyLocation" className="display-block">
            Location
          </label>
          <input
            type="text"
            id="companyLocation"
            className="input-styling"
            autoComplete="off"
            value={experienceData.location}
            onChange={(e) =>
              handleInputValue('experience', 'location', e.target.value)
            }
          />
        </div>
      </div>

      <div className="flex">
        <div className="input-field">
          <label htmlFor="position" className="display-block">
            Position Title
          </label>
          <input
            type="text"
            id="position"
            className="input-styling"
            autoComplete="off"
            value={experienceData.positionTitle}
            onChange={(e) =>
              handleInputValue('experience', 'positionTitle', e.target.value)
            }
          />
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
              autoComplete="off"
              value={experienceData.startDate}
              onChange={(e) =>
                handleInputValue('experience', 'startDate', e.target.value)
              }
            />
          </div>
          <div className="input-field">
            <label htmlFor="companyEndDate" className="display-block">
              End Date
            </label>
            <input
              type="date"
              id="companyEndDate"
              className="input-styling"
              autoComplete="off"
              value={experienceData.endDate}
              onChange={(e) =>
                handleInputValue('experience', 'endDate', e.target.value)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
