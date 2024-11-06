import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PaymentStatusPage.css';

const PaymentStatusPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { status } = location.state || {};

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="payment-status-page">
      <h2>Payment {status === 'success' ? 'Successful' : 'Failed'}</h2>
      <p>{status === 'success' ? 'Thank you for your purchase!' : 'Please try again.'}</p>
      <button onClick={handleBackToHome}>Back to Home</button>
    </div>
  );
};

export default PaymentStatusPage;
