import React from 'react'
import { Nav } from 'react-bootstrap';
import { PersonFill, Gear, BoxArrowRight, Box, Grid, Bell, CardChecklist } from 'react-bootstrap-icons';
import '../CSS/ProfileSideBar.css';
import { useNavigate } from 'react-router-dom';


function AdminSideBar() {
    const navigate = useNavigate();
    
      const handleNavigation = (path) => {
        if (path === 'logout') {
          setTimeout(() => navigate('/'), 1200); 
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
                    <Nav.Link onClick={() => handleNavigation('admin/category')} className="d-flex align-items-center fs-6 fw-semibold">
                        <Grid className="me-3" style={{ fontSize: '1.25rem' }} /> Category Management
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-2">
                    <Nav.Link onClick={() => handleNavigation('profile/orders')} className="d-flex align-items-center fs-6 fw-semibold">
                        <Bell className="me-3" style={{ fontSize: '1.25rem' }} /> Notification
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-2">
                    <Nav.Link onClick={() => handleNavigation('profile/orders')} className="d-flex align-items-center fs-6 fw-semibold">
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
    )
}

export default AdminSideBar;