import React from 'react';
import { Nav } from 'react-bootstrap';
import { PersonFill, Heart, Cart, ListCheck, Gear, BoxArrowRight } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../CSS/ProfileSideBar.css';

function ProfileSideBar() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    if (path === 'logout') {
      toast.info('Logging out...', { autoClose: 1000 });
      setTimeout(() => navigate('/'), 1200);
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
        <Nav.Link onClick={() => handleNavigation('profile/favorites')} className="d-flex align-items-center">
          <Heart className="me-2" /> Favorites
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link onClick={() => handleNavigation('profile/cart')} className="d-flex align-items-center">
          <Cart className="me-2" /> Cart
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
