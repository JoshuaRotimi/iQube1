import React from 'react';
import image from '../../assets/success.svg';

const Confirmation = ({ navigation }) => {
  return (
    <div className="wrapper">
      <div className="form">
        <div className="card">
          <div className="card-body">
            <div className="confirmation" style={{ textAlign: 'center' }}>
              <img src={image} alt="" />
              <p className="heading">Purchase Completed</p>
              <p className="subtitle">
                Please check your email for details concerning
                <br /> this transaction
              </p>
              <p className="link">Return Home</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
