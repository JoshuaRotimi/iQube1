import React from 'react';
import Button from '../Button/Button';
import Navigation from '../Navigation/Navigation';
import './form.css';

const PersonalInfo = ({ formData, setForm, navigation }) => {
  const {
    fullName,
    emailAddress,
    address1,
    address2,
    localGovt,
    state,
  } = formData;

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="header-text">Complete Your Purchase</h1>
        <Navigation personal={true} />
        <div className="form-container">
          <label htmlFor="fullName">Name</label>
          <input
            className="input-1"
            type="text"
            name="fullName"
            placeholder="Opara Linus Ahmed"
            value={fullName}
            onChange={setForm}
          />

          <label htmlFor="email">Email Address</label>
          <p>The Purchase receipt will be sent to this address</p>
          <input
            className="input-1"
            type="email"
            id="email"
            placeholder="OparaLinusAhmed@devmail.com"
            value={emailAddress}
            onChange={setForm}
            name="emailAddress"
          />

          <label htmlFor="address-1">Address 1</label>
          <input
            className="input-1"
            type="text"
            id="address-1"
            placeholder="The address of the user goes here"
            value={address1}
            onChange={setForm}
            name="address1"
          />
          <label htmlFor="address-2">Address 2</label>
          <input
            className="input-1"
            type="text"
            id="address-2"
            placeholder="and here"
            value={address2}
            onChange={setForm}
            name="address2"
          />
          <div className="side-by-side">
            <div className="first">
              <label htmlFor="localGovt">Local Government</label>

              <input
                type="text"
                id="localGovt"
                placeholder="Surulere"
                value={localGovt}
                onChange={setForm}
                name="localGovt"
              />
            </div>
            <div className="state">
              <label htmlFor="state">State</label>

              <select
                id="state"
                placeholder="Lagos"
                value={state}
              >
                <option value="Lagos" selected>
                  Lagos
                </option>
                <option value="Ibadan">Ibadan</option>
                <option value="Abuja">Abuja</option>
              </select>
            </div>
          </div>
        </div>
        <div className="bottom-container">
          <Button text="Next" onClick={() => navigation.next()} />
          <p> Cancel Payment</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
