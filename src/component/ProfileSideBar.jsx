import React from 'react';
import { Nav } from 'react-bootstrap';
import { PersonFill, Cart, ListCheck, Gear, BoxArrowRight, Chat } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import '../CSS/ProfileSideBar.css';

function ProfileSideBar() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    if (path === 'logout') {
      setTimeout(() => navigate('/'), 1200);
    } else if (path === 'orders') {
      navigate('/orders'); 
    } else {
      navigate(`/${path}`);
    }
  };

  return (
    <Nav className="flex-column profile-sidebar bg-white p-3">
      <Nav.Item>
        <Nav.Link onClick={() => handleNavigation('profile/account')} className="d-flex align-items-center active">
          <PersonFill className="me-2" /> Account
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={() => handleNavigation('profile/cart')} className="d-flex align-items-center">
          <Cart className="me-2" /> Cart
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link onClick={() => handleNavigation('profile/review')} className="d-flex align-items-center">
          <Chat className="me-2" /> Review
        </Nav.Link>
      </Nav.Item>

       <Nav.Item>
        <Nav.Link onClick={() => handleNavigation('profile/orders')} className="d-flex align-items-center">
          <ListCheck className="me-2" /> Orders
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link onClick={() => handleNavigation('profile/settings')} className="d-flex align-items-center">
          <Gear className="me-2" /> Settings
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link onClick={() => handleNavigation('logout')} className="d-flex align-items-center">
          <BoxArrowRight className="me-2" /> Log out
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default ProfileSideBar;
