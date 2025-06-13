import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-hero">
        <img
          src="/Images/hero-banner.jpg"
          alt="Delicious Foods and Fashion"
          className="home-hero-image"
        />
        <div className="home-hero-text">
          <h1>Welcome to Our Store</h1>
          <p>Explore food, fashion, and more — all in one place!</p>
          <Link to="/veg">
            <button className="home-button">Shop Now</button>
          </Link>
        </div>
      </div>

      <h2 className="home-section-title">Explore Categories</h2>
      <div className="home-cards">
        <Link to="/veg" className="home-card">
          <img src="/images/veg.jpeg" alt="Veg" />
          <p>Veg</p>
        </Link>
         
        <Link to="/milk" className="home-card">
          <img src="/images/milk.jpeg" alt="Milk" />
          <p>Milk</p>
        </Link>
        <Link to="/chocolate" className="home-card">
          <img src="/images/chacolate.jpeg" alt="Chocolate" />
          <p>Chocolates</p>
        </Link>
        <Link to="/womendress" className="home-card">
          <img src="/images/womandress.jpeg" alt="Women Dress" />
          <p>Women Dress</p>
        </Link>
        <Link to="/mendress" className="home-card">
          <img src="/images/mendress.jpeg" alt="Men Dress" />
          <p>Men Dress</p>
        </Link>
      </div>
    </div>
  );
}

export default Home;
