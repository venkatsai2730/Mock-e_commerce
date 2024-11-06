import React from 'react';
import ReactDOM from 'react-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import App from './App';

// Load Stripe with your publishable key
const stripePromise = loadStripe('pk_test_51QHjgdFVvr3tXMqAWG7rFF1poLF0RAFOWkGjIB23ZeOUd5jyr3KVIjgQofeHpZSpqt5tmcTwjWOH67Ju6aGtj8Wy00QN02XF9V');

ReactDOM.render(
  <Elements stripe={stripePromise}>
    <App />
  </Elements>,
  document.getElementById('root')
);
