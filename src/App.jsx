import './App.css';
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom';

import Home from './Home';
import Veg from './Veg';
import NonVeg from './NonVeg'; // ✅ Add this line to fix your issue

import Cart from './Cart';
import Order from './Order';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import NotFound from './NotFound';
import Milk from './Milk';
import Login from './Login';
import Register from './Register';
import Profile from './Profile';
import MenDress from './menDress';
import Chocolate from './Chacolate';
import WomanDress from './womenDress';

 // ✅ Corrected capitalization

function App() {
  return (
    <BrowserRouter>
      <div className="app-header">
        <div className="header-top">
          <h1 className="title"> FRESH MART</h1>
          <input type="search" placeholder="🔍 Search here..." className="search-bar" />
        </div>

        <nav className="nav-links">
          <Link to="/home">🏠 Home</Link>
          <Link to="/veg">🥦 Veg</Link>
          <Link to="/NonVeg">🍗 NonVeg</Link>
          <Link to="/milk">🥛 Milk</Link>
          <Link to="/chocolate">🍫 Chocolate</Link>
          <Link to="/womanDress">👗 Woman Dresses</Link>
          <Link to="/menDress">👔 Men Dress</Link>
          <Link to="/cart">🛒 Cart</Link>
          <Link to="/order">📦 Order</Link>
          <Link to="/contactUs">📞 Contact Us</Link>
          <Link to="/aboutUs">ℹ About Us</Link>
          <Link to="/login">🔐 Log In</Link>
          <Link to="/register">📝 Register</Link>
          <Link to="/profile">👤 Profile</Link>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/NonVeg" element={<NonVeg/>} />
        <Route path="/milk" element={<Milk />} />
        <Route path="/chocolate" element={<Chocolate/>}/>
        <Route path="/womanDress" element={<WomanDress />} />
        <Route path="/menDress" element={<MenDress/>}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
