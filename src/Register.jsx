import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { saveUser } from "./store";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    address: "",
    phone: "",
    age: "",
    avatar: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword, gender, address, phone, age } = formData;

    if (!name || !email || !password || !confirmPassword || !gender || !address || !phone || !age) {
      alert("All fields are required!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    saveUser(formData);
    alert("Registration Successful!");
    navigate("/login");
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Name" 
          value={formData.name} 
          onChange={handleChange} 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={handleChange} 
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          value={formData.password} 
          onChange={handleChange} 
        />
        <input 
          type="password" 
          name="confirmPassword" 
          placeholder="Confirm Password" 
          value={formData.confirmPassword} 
          onChange={handleChange} 
        />

        <select 
          name="gender" 
          value={formData.gender} 
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <textarea 
          name="address" 
          placeholder="Address" 
          value={formData.address} 
          onChange={handleChange}
        ></textarea>

        <input 
          type="text" 
          name="phone" 
          placeholder="Phone" 
          value={formData.phone} 
          onChange={handleChange} 
        />

        <input 
          type="number" 
          name="age" 
          placeholder="Age" 
          value={formData.age} 
          onChange={handleChange} 
        />

        <input 
          type="file" 
          accept="image/*" 
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onload = () => {
                setFormData({ ...formData, avatar: reader.result });
              };
              reader.readAsDataURL(file);
            }
          }} 
        />

        <button type="submit">Register</button>
      </form>

      <p>
        Already have an account?{" "}
        <Link to="/login" className="link-btn">Login Here</Link>
      </p>
    </div>
  );
};

export default Register;