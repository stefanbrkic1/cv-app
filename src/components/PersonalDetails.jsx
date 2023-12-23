function PersonalDetails({ handleInputValue, personalDetailsData }) {
  return (
    <div className="dropdown-content">
      <div className="flex pb-5">
        <div className="input-field">
          <label htmlFor="fullname" className="display-block">
            Full Name
          </label>
          <input
            type="text"
            id="fullname"
            className="input-styling"
            value={personalDetailsData.fullName}
            autoComplete="off"
            onChange={(e) =>
              handleInputValue("personalDetails", "fullName", e.target.value)
            }
          />
        </div>
        <div className="input-field">
          <label htmlFor="email" className="display-block">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="input-styling"
            autoComplete="off"
            value={personalDetailsData.email}
            onChange={(e) =>
              handleInputValue("personalDetails", "email", e.target.value)
            }
          />
        </div>
      </div>

      <div className="flex">
        <div className="input-field">
          <label htmlFor="address" className="display-block">
            Address
          </label>
          <input
            type="text"
            id="address"
            className="input-styling"
            autoComplete="off"
            value={personalDetailsData.address}
            onChange={(e) =>
              handleInputValue("personalDetails", "address", e.target.value)
            }
          />
        </div>
        <div className="input-field">
          <label htmlFor="phone" className="display-block">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="input-styling"
            autoComplete="off"
            value={personalDetailsData.phoneNumber}
            onChange={(e) =>
              handleInputValue("personalDetails", "phoneNumber", e.target.value)
            }
          />
        </div>
      </div>
    </div>
  );
}

export default PersonalDetails;
