import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/Address.css"; 

function ProfileEdit() {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    address: '',
    city: '',
    postalCode: '',
    phone: ''
  });

  useEffect(() => {
    axios.get('http://localhost:8080/user/profile', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then((res) => setUserData(res.data))
    .catch((err) => console.error('Veri çekilemedi:', err));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put('http://localhost:8080/user/profile', userData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      alert('Profile updated succesfuly.');
    } catch (error) {
      console.error('Error:', error);
      alert('Profile did not updated .');
    }
  };

  return (
    <div className="form-container">
      <div className="form-content">
        <form className="form" onSubmit={handleUpdate}>
          <p className="custom-font">Address</p>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="form-control"
            value={userData.firstName}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="form-control"
            value={userData.lastName}
            onChange={handleInputChange}
            required
          />
          <input
            type="country"
            name="country"
            placeholder="Country"
            className="form-control"
            value={userData.country}
            onChange={handleInputChange}
            required
          />
            <input
            type="address"
            name="address"
            placeholder="Address"
            className="form-control"
            value={userData.address}
            onChange={handleInputChange}
            required
          />
            <input
            type="city"
            name="city"
            placeholder="City"
            className="form-control"
            value={userData.city}
            onChange={handleInputChange}
            required
          />
            <input
            type="postalCode"
            name="postalCode"
            placeholder="Postal Code "
            className="form-control"
            value={userData.postalCode}
            onChange={handleInputChange}
            required
          />
           <input
            type="phone"
            name="phone"
            placeholder="Phone "
            className="form-control"
            value={userData.phone}
            onChange={handleInputChange}
            required
          />
          <button type="submit" className="btn btn-primary">Add</button>
        </form>
      </div>
    </div>
  );
}

export default ProfileEdit;
