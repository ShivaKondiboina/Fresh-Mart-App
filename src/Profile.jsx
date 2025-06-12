import React, { useState, useEffect } from "react";
import { getCurrentUser, updateUser, clearCurrentUser } from "./store";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(getCurrentUser());
  const [editable, setEditable] = useState(false);
  const [formData, setFormData] = useState({ ...user });

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleLogout = () => {
    clearCurrentUser();
    navigate("/login");
  };

  const handleEdit = () => {
    setEditable(true);
  };

  const handleSave = () => {
    updateUser(formData);
    setUser(formData);
    setEditable(false);
    alert("Profile Updated Successfully!");
  };

  const handleCancel = () => {
    setFormData({ ...user });
    setEditable(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({ ...formData, avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  if (!user) return null;

  return (
    <div className="form-container">
      <h2>User Profile</h2>

      {formData.avatar && (
        <img src={formData.avatar} alt="Avatar" width="100" height="100" />
      )}

      <div>
        <label>Name:</label>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          disabled={!editable}
        />
      </div>

      <div>
        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          disabled 
        />
      </div>

      <div>
        <label>Password:</label>
        <input 
          type="password" 
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
          disabled={!editable}
        />
      </div>

      <div>
        <label>Gender:</label>
        <select 
          name="gender" 
          value={formData.gender} 
          onChange={handleChange} 
          disabled={!editable}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label>Address:</label>
        <textarea 
          name="address" 
          value={formData.address} 
          onChange={handleChange} 
          disabled={!editable}
        ></textarea>
      </div>

      <div>
        <label>Phone:</label>
        <input 
          type="text" 
          name="phone" 
          value={formData.phone} 
          onChange={handleChange} 
          disabled={!editable}
        />
      </div>

      <div>
        <label>Age:</label>
        <input 
          type="number" 
          name="age" 
          value={formData.age} 
          onChange={handleChange} 
          disabled={!editable}
        />
      </div>

      <div>
        <label>Avatar:</label>
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleFileChange} 
          disabled={!editable}
        />
      </div>

      <div className="button-group">
        {editable ? (
          <>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <button onClick={handleEdit}>Edit</button>
        )}
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Profile;