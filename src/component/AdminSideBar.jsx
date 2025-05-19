import React from 'react';
import { Nav } from 'react-bootstrap';
import {
  PersonFill, Gear, BoxArrowRight, Box, Grid, Bell, CardChecklist
} from 'react-bootstrap-icons';
import '../CSS/ProfileSideBar.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AdminSideBar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/auth');
        return;
      }

      // Make logout request to backend
      await axios.post('http://localhost:8080/auth/logout', {}, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      // Clear local storage and redirect
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      navigate('/auth');
      
    } catch (error) {
      console.error('Logout failed:', error);
      // Still clear local storage and redirect even if logout request fails
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      navigate('/auth');
    }
  };

  const handleNavigation = (path) => {
    if (path === 'logout') {
      handleLogout();
    } else {
      navigate(`/${path}`);
    }
  };

  return (
    <div className='admin-sidebar'>
      <Nav className="flex-column profile-sidebar bg-white p-3">
        <Nav.Item className="mb-2 mt-2">
          <Nav.Link onClick={() => handleNavigation('admin/account')} className="d-flex align-items-center fs-6 fw-semibold">
            <PersonFill className="me-3" style={{ fontSize: '1.25rem' }} /> Account
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="mb-2">
          <Nav.Link onClick={() => handleNavigation('admin/product')} className="d-flex align-items-center fs-6 fw-semibold">
            <Box className="me-3" style={{ fontSize: '1.25rem' }} /> Product Management
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="mb-2">
          <Nav.Link onClick={() => handleNavigation('admin/notification')} className="d-flex align-items-center fs-6 fw-semibold">
            <Bell className="me-3" style={{ fontSize: '1.25rem' }} /> Notification
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="mb-2">
          <Nav.Link onClick={() => handleNavigation('admin/order')} className="d-flex align-items-center fs-6 fw-semibold">
            <CardChecklist className="me-3" style={{ fontSize: '1.25rem' }} /> Order Status
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="mb-2">
          <Nav.Link onClick={() => handleNavigation('logout')} className="d-flex align-items-center fs-6 fw-semibold">
            <BoxArrowRight className="me-3" style={{ fontSize: '1.25rem' }} /> Log out
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default AdminSideBar;