import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Form, FormControl } from 'react-bootstrap';
import { Bell, Heart, X } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import yazi from '../images/yazi.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../CSS/Navbar.css"

function TopNavbar() {
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const handleClearSearch = () => {
    setSearchText('');
  };

  const navigateToAuth = (tab) => {
    console.log(`Navigating to /auth with tab: ${tab}`);
    navigate('/auth', { state: { tab } });
  };

  return (
    <Navbar bg="light" expand="lg" className="sticky-top p-0 custom-top-navbar">
      <Container fluid className="p-0" style={{ width: '100%', height: '100%' }}>
        <div className="d-flex align-items-center">
          <Navbar.Brand href="#" className="me-3 p-2 custom-navbar-brand">
            <img
              src={yazi}
              alt="Logo"
              width="150"
              height="auto"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Form className="d-flex custom-search-form" style={{ flexGrow: 1 }}>
            <FormControl
              type="search"
              placeholder="Search for"
              className="me-2"
              aria-label="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              style={{ borderRadius: '5px', width: '2000px' }}
            />
            {searchText && (
              <Button
                variant="link"
                onClick={handleClearSearch}
                style={{ marginLeft: '-40px', zIndex: 1 }}
              >
                <X size={20} color="#6a380a" />
              </Button>
            )}
          </Form>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center custom-right-nav">
            <Nav.Link href="#new" className="custom-nav-link">New</Nav.Link>
            <Nav.Link href="#about" className="custom-nav-link">About</Nav.Link>
            <Nav.Link href="#notifications" className="custom-nav-link">
              <Bell size={20} />
            </Nav.Link>
            <Nav.Link href="#favorites" className="custom-nav-link">
              <Heart class="heart-icon" size={20} />
            </Nav.Link>
            <Nav.Link onClick={() => navigateToAuth('login')} className="custom-nav-link">
              Log In
            </Nav.Link>
            <Nav.Link onClick={() => navigateToAuth('signup')} className="custom-nav-link">
              Sign In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
