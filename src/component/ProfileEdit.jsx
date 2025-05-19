import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/ProfileEdit.css"; 


function ProfileEdit() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  useEffect(() => {
    // Admin bilgilerini çek
    axios.get('http://localhost:8080/auth/me', {
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
      await axios.put('http://localhost:8080/auth/update', userData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      alert('Profil başarıyla güncellendi.');
      navigate('/admin');
    } catch (error) {
      console.error('Güncelleme hatası:', error);
      alert('Profil güncellenemedi.');
    }
  };

  return (
    <div className="form-container">
      <div className="form-content">
        <form className="form" onSubmit={handleUpdate}>
          <p className="custom-font">Profile</p>
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
            type="email"
            name="email"
            placeholder="Email"
            className="form-control"
            value={userData.email}
            onChange={handleInputChange}
            required
          />
          <button type="submit" className="btn btn-primary">Update Profile</button>
        </form>
      </div>
    </div>
  );
}

export default ProfileEdit;
