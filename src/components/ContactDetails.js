import React from 'react';
import { useForm, useStep } from 'react-hooks-helper';

import BillingInfo from './stepForm/BillingInfo';
import PersonalInfo from './stepForm/PersonalInfo';
import SummaryInfo from './stepForm/SummaryInfo';
import Confirmation from './stepForm/Confirmation';

const defaultData = {
  fullName: '',
  emailAddress: '',
  address1: '',
  address2: '',
  localGovt: '',
  state: '',
  cardName: '',
  cardType: '',
  cardDetails: '',
  expiryDate: '',
  cvv: '',
};

const steps = [
  { id: 'personal-info' },
  { id: 'billing-info' },
  { id: 'summary-info' },
  { id: 'confirmation' },
];
const ContactDetails = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ steps, initialStep: 0 });

  const props = { formData, setForm, navigation };
  switch (step.id) {
    case 'personal-info':
      return <PersonalInfo {...props} />;
    case 'billing-info':
      return <BillingInfo {...props} />;
    case 'summary-info':
      return <SummaryInfo {...props} />;
    case 'confirmation':
      return <Confirmation {...props} />;
    default:
      return <h1>Heading</h1>
  }
};

export default ContactDetails;
