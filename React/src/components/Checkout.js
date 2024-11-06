
import { useLocation, useNavigate } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import './Checkout.css';

const CheckoutPage = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const location = useLocation();
  const { product } = location.state || {};

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    try {
      // Create payment intent on the backend
      const { data } = await axios.post('http://localhost:5000/api/payments/create-payment-intent', { amount: product.price });

      // Confirm payment with client secret from backend
      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result.error) {
        console.error(result.error.message);
      } else {
        if (result.paymentIntent.status === 'succeeded') {
          navigate('/payment-status', { state: { status: 'success' } });
        } else {
          navigate('/payment-status', { state: { status: 'failed' } });
        }
      }
    } catch (error) {
      console.error('Payment failed:', error);
    }
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe}>
          Pay ${product.price}
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
