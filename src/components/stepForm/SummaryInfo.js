import React from 'react';
import Button from '../Button/Button';
import Navigation from '../Navigation/Navigation';

const SummaryInfo = ({ navigation }) => {
  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="header-text">Complete Your Purchase</h1>
        <Navigation billing={true} />
        <div className="card">
          <div className="card-header">
            <div className="text-container">
              <p>Item Name</p>
              <p>Price</p>
            </div>
          </div>
          <div className="card-body">
            <div className="text-container">
              <p>Data Science and Usability</p>
              <p>50,000.00</p>
            </div>
          </div>
          <div className="card-body">
            <div className="text-container">
              <p>Shipping</p>
              <p>0.00</p>
            </div>
          </div>
          <hr style={{ width: '656px' }} />
          <div className="card-body total-section">
            <div className="text-container total">
              <p>Total</p>
              <p>50,000.00</p>
            </div>
          </div>
        </div>
        <div className="bottom-container">
          <Button text="Pay" onClick={() => navigation.next()} />
          <p> Cancel Payment</p>
        </div>
      </div>
    </div>
  );
};

export default SummaryInfo;
