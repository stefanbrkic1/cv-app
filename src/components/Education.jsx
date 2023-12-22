function Education({ handleInputValue, educationData }) {
  return (
    <div className="dropdown-content">
      <div className="flex pb-5">
        <div className="input-field">
          <label htmlFor="school" className="display-block">
            School
          </label>
          <input
            type="text"
            id="school"
            className="input-styling"
            value={educationData.school}
            onChange={(e) =>
              handleInputValue("education", "school", e.target.value)
            }
          />
        </div>
        <div className="input-field">
          <label htmlFor="location" className="display-block">
            Location
          </label>
          <input
            type="text"
            id="location"
            className="input-styling"
            value={educationData.location}
            onChange={(e) =>
              handleInputValue("education", "location", e.target.value)
            }
          />
        </div>
      </div>

      <div className="flex">
        <div className="input-field">
          <label htmlFor="degree" className="display-block">
            Degree
          </label>
          <input
            type="text"
            id="degree"
            className="input-styling"
            value={educationData.degree}
            onChange={(e) =>
              handleInputValue("education", "degree", e.target.value)
            }
          />
        </div>
        <div className="flex">
          <div className="input-field">
            <label htmlFor="startDate" className="display-block">
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              className="input-styling"
              value={educationData.startDate}
              onChange={(e) =>
                handleInputValue("education", "startDate", e.target.value)
              }
            />
          </div>
          <div className="input-field">
            <label htmlFor="endDate" className="display-block">
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              className="input-styling"
              value={educationData.endDate}
              onChange={(e) =>
                handleInputValue("education", "endDate", e.target.value)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
