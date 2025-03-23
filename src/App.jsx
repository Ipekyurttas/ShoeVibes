import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Form, FormControl } from 'react-bootstrap';
import { Bell, Heart, X } from 'react-bootstrap-icons'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import yazi from './assets/yazi.png';

const App = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [searchText, setSearchText] = useState('');

  const categories = {
    brands: ["Nike", "Adidas", "Puma", "Sketchers"],
    men: ["Sneakers", "Boots", "Sandals", "Loafers"],
    women: ["Heels", "Flats", "Sneakers", "Boots"],
    kids: ["Sneakers", "Sandals", "Boots", "Slip-ons"],
    sneakers: ["Running", "Basketball", "Casual", "Skateboarding"],
    campaigns: ["50% Off", "Buy 1 Get 1 Free", "Clearance Sale"]
  };

  const renderCategoryDetails = () => {
    if (!hoveredCategory) return null;

    return (
      <div className="category-details">
        <h4>{hoveredCategory.charAt(0).toUpperCase() + hoveredCategory.slice(1)}</h4>
        <ul className="category-list">
          {categories[hoveredCategory].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };
  const handleClearSearch = () => {
    setSearchText('');
  };

  return (
    <div style={{ width: '100%', height: '100%', overflowX: 'hidden' }}>
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
            <Form className="d-flex custom-search-form">
              <FormControl
                type="search"
                placeholder="Search for"
                className="me-2"
                aria-label="Search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)} 
                style={{ borderRadius: '5px', width: '400px' }}
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
              <Button variant="outline-success" size="sm" style={{ borderRadius: '5px' }}>Search</Button>
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
              <Nav.Link href="#login" className="custom-nav-link">Log In</Nav.Link>
              <Nav.Link href="#signin" className="custom-nav-link">Sign In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar expand="lg" className="sticky-top p-0 custom-category-navbar">
        <Container fluid className="p-0" style={{ width: '100%', height: '100%' }}>
          <Navbar.Toggle aria-controls="category-navbar-nav" />
          <Navbar.Collapse id="category-navbar-nav">
            <Nav className="mx-auto custom-category-nav">
              {Object.keys(categories).map((category, index) => (
                <Nav.Link
                  key={index}
                  href={`#${category}`}
                  onMouseEnter={() => setHoveredCategory(category)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  className="custom-category-link"
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {hoveredCategory && (
        <div className="category-details-container">
          {renderCategoryDetails()}
        </div>
      )}
    </div>
  );
};

export default App;