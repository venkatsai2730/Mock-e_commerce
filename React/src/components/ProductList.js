import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const ProductListingPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Mock API call
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="product-listing-page">
      <h1>Products</h1>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <Link to={`/products/${product.id}`}>
              <button className="btn-details">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
