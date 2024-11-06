const dotenv = require('dotenv');
dotenv.config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Confirm the API key is loaded
if (!process.env.STRIPE_SECRET_KEY) {
  console.error("Stripe API key not found. Make sure STRIPE_SECRET_KEY is set in your .env file.");
  process.exit(1); // Exit if the API key is missing
}

console.log("Stripe API Key Loaded:", process.env.STRIPE_SECRET_KEY ? 'Yes' : 'No');

// Endpoint for creating a payment intent
exports.createPaymentIntent = async (req, res) => {
  try {
    const { amount } = req.body;

    // Validate the amount
    if (!amount || isNaN(amount) || amount <= 0) {
      return res.status(400).json({ error: 'Invalid amount. Amount must be a positive number.' });
    }

    // Convert the amount to cents as an integer if it's in dollars
    const amountInCents = Math.round(parseFloat(amount) * 100);
    console.log('Creating PaymentIntent with amount (in cents):', amountInCents);

    // Create a PaymentIntent with the calculated amount
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents,
      currency: 'usd',
      payment_method_types: ['card'],
    });

    // Respond with the client secret to complete the payment on the client side
    res.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    // Log the error and send a 500 response
    console.error('Error creating PaymentIntent:', error);
    res.status(500).json({ error: 'Failed to create payment intent', details: error.message });
  }
};
