import React, { useState, useRef } from 'react';
import { Navbar, Nav, Container, Button, Form, FormControl } from 'react-bootstrap';
import { Bell, Heart, X, PersonFill, Gear, BoxArrowRight } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import yazi from '../images/yazi.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'react-toastify/dist/ReactToastify.css';
import '../CSS/ProfileHomeNav.css';

function ProfileHome() {
  const [searchText, setSearchText] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  const dropdownTimeoutRef = useRef(null);
  const navigate = useNavigate();

  const handleClearSearch = () => {
    setSearchText('');
  };
  const navigateToPage = (page) => {
    setShowDropdown(false);

    if (page === 'logout') {
      toast.info('Logging out...', { autoClose: 1000 });
      setTimeout(() => navigate('/'), 1200);
    } else if (page === 'profile/account') {
      setLoading(true);
      toast.info('Loading...', { autoClose: 2000 });
      setTimeout(() => {
        setLoading(false);
        navigate(`/${page}`);
      }, 1000);
    } else if (page === 'orders') {
      navigate('/orders'); // Orders sayfasına yönlendirme
    } else {
      navigate(`/${page}`);
    }
  };

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeoutRef.current);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 200);
  };

  return (
    <>
      {loading && (
        <div className="loading-overlay">
          <div className="loading-text">Loading...</div>
        </div>
      )}
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
                <Heart size={20} />
              </Nav.Link>
              <div
                className="position-relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ cursor: 'pointer' }}
              >
                <div className="custom-nav-link" onClick={() => navigateToPage('profile/account')}>
                  <PersonFill size={20} />
                </div>
                {showDropdown && (
                  <div className="custom-dropdown-menu position-absolute end-0 mt-2">
                    <div className="dropdown-item" onClick={() => navigateToPage('profile/account')}>
                      <PersonFill size={16} /> Account
                    </div>
                    <div className="dropdown-item" onClick={() => navigateToPage('profile/favorites')}>
                      <Heart size={16} /> Favorites
                    </div>
                    <div className="dropdown-item" onClick={() => navigateToPage('orders')}>
                      <BoxArrowRight size={16} /> Orders
                    </div>
                    <div className="dropdown-item" onClick={() => navigateToPage('profile/notifications')}>
                      <Bell size={16} /> Notifications
                    </div>
                    <div className="dropdown-item" onClick={() => navigateToPage('profile/settings')}>
                      <Gear size={16} /> Settings
                    </div>
                    <div className="dropdown-item" onClick={() => navigateToPage('profile/logout')}>
                      <BoxArrowRight size={16} /> Log out
                    </div>
                  </div>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ProfileHome;
