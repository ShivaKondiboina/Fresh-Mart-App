import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './store';
import './veg.css';

function NonVeg() {
  const dispatch = useDispatch();
  const nonVegProducts = useSelector((state) => state.products.nonVeg || []);

  return (
    <div className="veg-container">
      <h1 className="veg-title">🍗 Non-Veg Dishes: Tasty and Spicy!</h1>
      <div className="veg-list">
        {nonVegProducts.length > 0 ? (
          nonVegProducts.map((product, index) => (
            <div className="veg-card" key={index}>
              <img src={product.image} alt={product.name} className="veg-image" />
              <h3 className="veg-name">{product.name}</h3>
              <p className="veg-price">₹{product.price.toFixed(2)}</p>
              <button className="veg-button" onClick={() => dispatch(addToCart(product))}>
                ADD TO CART
              </button>
            </div>
          ))
        ) : (
          <p className="veg-empty">No non-veg items available.</p>
        )}
      </div>
    </div>
  );
}

export default NonVeg;
