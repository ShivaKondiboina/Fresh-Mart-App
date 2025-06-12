import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './store'; // Adjust path as needed
import './veg.css'; // Reuse the same styling

function NonVeg() {
  const dispatch = useDispatch();
  const nonVegProducts = useSelector((state) => state.products.nonVeg); // ✅ corrected casing

  return (
    <div className="veg-container">
      <h1 className="veg-title">Non-Veg Dishes: Tasty and Spicy!</h1>
      <div className="veg-list">
        {nonVegProducts.map((product, index) => (
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

export default NonVeg;
