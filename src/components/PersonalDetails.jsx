function PersonalDetails() {
  return (
    <div className="personal-details">
      <div className="flex pb-5">
        <div className="input-field">
          <label htmlFor="fullname" className="display-block">
            Full Name
          </label>
          <input type="text" id="fullname" className="input-styling" />
        </div>
        <div className="input-field">
          <label htmlFor="email" className="display-block">
            Email
          </label>
          <input type="email" id="email" className="input-styling" />
        </div>
      </div>

      <div className="flex">
        <div className="input-field">
          <label htmlFor="phone" className="display-block">
            Phone Number
          </label>
          <input type="tel" id="phone" className="input-styling" />
        </div>
        <div className="input-field">
          <label htmlFor="address" className="display-block">
            Address
          </label>
          <input type="text" id="address" className="input-styling" />
        </div>
      </div>
    </div>
  );
}

export default PersonalDetails;
