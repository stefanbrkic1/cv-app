function PersonalDetails({ handleInputValue, personalDetailsData }) {
  function handleFileUpload() {
    var input = document.getElementById('userImage');
    var userImageContainer = document.getElementById('userImageContainer');

    // Make sure a file is selected
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        // Display the selected image
        userImageContainer.innerHTML =
          '<img src="' +
          e.target.result +
          '" alt="Image Preview" style="width: 100%; height: 100%;" />';
      };

      // Read the selected file as a data URL
      reader.readAsDataURL(input.files[0]);
    }
  }
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
              handleInputValue('personalDetails', 'fullName', e.target.value)
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
              handleInputValue('personalDetails', 'email', e.target.value)
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
              handleInputValue('personalDetails', 'address', e.target.value)
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
              handleInputValue('personalDetails', 'phoneNumber', e.target.value)
            }
          />
        </div>
      </div>

      {/*Add image section */}
      <div className="add-img">
        <label htmlFor="userImage" className="label-image">
          <div className="image-icon"></div>
          <div className="image-text">Add Image</div>
        </label>
        <input
          type="file"
          id="userImage"
          accept="image/*"
          onChange={handleFileUpload}
        />
      </div>
    </div>
  );
}

export default PersonalDetails;
