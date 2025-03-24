import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const categories = {
  brands: ["Nike", "Adidas", "Puma", "Sketchers"],
  men: ["Sneakers", "Boots", "Sandals", "Loafers"],
  women: ["Heels", "Flats", "Sneakers", "Boots"],
  kids: ["Sneakers", "Sandals", "Boots", "Slip-ons"],
  sneakers: ["Running", "Basketball", "Casual", "Skateboarding"],
  campaigns: ["50% Off", "Buy 1 Get 1 Free", "Clearance Sale"]
};

function CategoryNav(){
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <>
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
          <div className="category-details">
            <h4>{hoveredCategory.charAt(0).toUpperCase() + hoveredCategory.slice(1)}</h4>
            <ul className="category-list">
              {categories[hoveredCategory].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryNav;
