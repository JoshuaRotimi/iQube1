import React from 'react';
import './Navigation.css';

const Navigation = ({ personal, billing, confirmPay }) => {
  return (
    <div className="head">
      <p className={personal ? 'active' : ''}>Personal Info</p>
      <p className={billing ? 'active' : ''}>Billing Info</p>
      <p className={confirmPay ? 'active' : ''}>Confirm Payment</p>
    </div>
  );
};

export default Navigation;
