import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListingPage from './components/ProductList';
import ProductDetailPage from './components/ProductDetail';
import CheckoutPage from './components/Checkout';
import PaymentStatusPage from './components/PaymentStatus';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/payment-status" element={<PaymentStatusPage />} />
      </Routes>
    </Router>
  );
}

export default App;
