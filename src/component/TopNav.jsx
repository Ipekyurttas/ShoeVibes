// src/component/TopNav.jsx

import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Form, FormControl } from 'react-bootstrap';
import { Bell, Heart, X } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import yazi from '../images/yazi.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../CSS/Navbar.css";

function TopNavbar() {
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const isLoggedIn = !!localStorage.getItem('token');

  const handleClearSearch = () => {
    setSearchText('');
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const trimmed = searchText.trim();
    if (trimmed) {
      navigate(`/search?keyword=${encodeURIComponent(trimmed)}`);
    }
  };

  const navigateToAuth = (tab) => {
    navigate('/auth', { state: { tab } });
  };

  return (
    <Navbar bg="light" expand="lg" className="sticky-top p-0 custom-top-navbar">
      <Container fluid className="p-0" style={{ width: '100%', height: '100%' }}>
        <div className="d-flex align-items-center w-100">
          <Navbar.Brand
            onClick={() => navigate('/')}
            className="me-3 p-2 custom-navbar-brand"
            style={{ cursor: 'pointer' }}
          >
            <img
              src={yazi}
              alt="Logo"
              width="150"
              height="auto"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>

          <ToastContainer />

          <Form
            className="d-flex custom-search-form flex-grow-1"
            onSubmit={handleSearchSubmit}
          >
            <FormControl
              type="search"
              placeholder="Search for"
              className="me-2"
              aria-label="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              style={{ borderRadius: '5px' }}
            />
            {searchText && (
              <Button
                variant="link"
                onClick={handleClearSearch}
                className="search-clear-button"
              >
                <X size={20} color="#6a380a" />
              </Button>
            )}
          </Form>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center custom-right-nav">
            <Nav.Link onClick={() => navigate('/new')} className="custom-nav-link">
              New
            </Nav.Link>
            <Nav.Link href="#about" className="custom-nav-link">
              About
            </Nav.Link>
            <Nav.Link href="#notifications" className="custom-nav-link">
              <Bell size={20} />
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                if (isLoggedIn) {
                  navigate('/profile/favorites');
                } else {
                  toast.info('You need to log in to view your favorites!');
                  navigateToAuth('login');
                }
              }}
              className="custom-nav-link"
            >
              <Heart className="heart-icon" size={20} />
            </Nav.Link>

            <Nav.Link
              onClick={() => navigateToAuth('login')}
              className="custom-nav-link"
            >
              Log In
            </Nav.Link>
            <Nav.Link
              onClick={() => navigateToAuth('signup')}
              className="custom-nav-link"
            >
              Sign In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
