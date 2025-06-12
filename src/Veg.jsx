import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Veg.css';
import { addToCart } from './store';

function Veg() {
  const dispatch = useDispatch();
  const vegProducts = useSelector((state) => state.products.veg); // corrected 'Veg' → 'veg'

  return (
    <div className="veg-container">
      <h1 className="veg-title">This is a Veg Products</h1>
      <div className="veg-list">
        {vegProducts.map((product, index) => (
          <div className="veg-card" key={index}>
            <img
              src={product.image}
              alt={product.name}
              className="veg-image"
            />
            <h3 className="veg-name">{product.name}</h3>
            <p className="veg-price">₹{product.price.toFixed(2)}</p>
            <button
              className="veg-button"
              onClick={() => dispatch(addToCart(product))}
            >
              ADD TO CART
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Veg;
