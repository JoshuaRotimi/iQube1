import React from 'react';

import {
  formatCreditCardNumber,
  formatCVV,
  formatExpirationDate,
} from '../../utils';
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';

const BillingInfo = ({ formData, setForm, navigation }) => {
  const { cardName, cardType, cardDetails, expiryDate, cvv } = formData;
  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="header-text">Complete Your Purchase</h1>
        <Navigation billing={true} />
        <div className="form-container">
          <label htmlFor="cardName">Name On Card *</label>
          <input
            className="input-1"
            type="text"
            name="cardName"
            placeholder="Opara Linus Ahmed"
            value={cardName}
            onChange={setForm}
          />

          <label htmlFor="cardType">Card Type</label>

          <select
            className="input-1"
            id="cardType"
            value={cardType}
            onChange={setForm}
            name="cardType"
          >
            <option value="Visa" selected>
              Visa
            </option>
            <option value="MasterCard">Master Card</option>
            <option value="Verve">Verve</option>
          </select>
          <div className="side-by-side">
            <div className="first">
              <label htmlFor="cardDetails">Card Details</label>
              <input
                className="input-1"
                type="text"
                id="cardDetails"
                placeholder="4496 4496 4496 4496"
                value={formatCreditCardNumber(cardDetails)}
                onChange={setForm}
                name="cardDetails"
              />
            </div>
            <div className="first state">
              <label htmlFor="expiryDate">Expiry Date</label>

              <input
                type="text"
                id="expiryDate"
                placeholder="04 / 23"
                value={formatExpirationDate(expiryDate)}
                name="expiryDate"
                onChange={setForm}
              />
            </div>
            <div className="first cvv">
              <label htmlFor="cvv">CVV *</label>

              <input
                type="text"
                id="expiryDate"
                placeholder="923"
                value={formatCVV(cvv)}
                name="cvv"
                onChange={setForm}
              />
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

export default BillingInfo;
