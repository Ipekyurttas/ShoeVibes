import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import shoe1 from '../images/shoe1.webp';
import shoe2 from '../images/shoe2.jpg';
import shoe3 from '../images/shoe3.jpg';
import "../CSS/Navbar.css";

const categories = {
  brands: ["Nike", "Adidas", "Puma", "Sketchers", "Vans", "Converse", "Lumberjack", "Us.Polo Assn."],
  men: ["The Newest", "Bestsellers", "Sneakers", "Boots", "Sandals", "Loafers"],
  women: ["The Newest", "Bestsellers", "Heels", "Flats", "Sneakers", "Boots", "Evening Dress"],
  kids: ["The Newest", "Bestsellers", "Sneakers", "Sandals", "Boots", "Slip-ons"],
  sneakers: ["The Newest", "Bestsellers", "Running", "Basketball", "Casual", "Skateboarding"],
  campaigns: ["50% Off", "Buy 1 Get 1 Free", "Clearance Sale"]
};

const categoryImages = {
  brands: shoe1,  
  men: shoe2,    
  women: shoe3,  
  kids: shoe1,    
  sneakers: shoe2,
  campaigns: shoe3,
};

function CategoryNav() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setActiveCategory(null); 
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleCategoryClick = (category) => {
    setActiveCategory(prevCategory => prevCategory === category ? null : category);
  };

  return (
    <>
      <Navbar expand="lg" className="sticky-top p-0 custom-category-navbar" ref={navbarRef}>
        <Container fluid className="p-0">
          <Navbar.Toggle aria-controls="category-navbar-nav" />
          <Navbar.Collapse id="category-navbar-nav">
            <Nav className="mx-auto custom-category-nav">
              {Object.keys(categories).map((category, index) => (
                <Nav.Link
                  key={index}
                  href={`#${category}`}
                  onMouseEnter={() => setHoveredCategory(category)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  onClick={() => handleCategoryClick(category)}
                  className={`custom-category-link ${activeCategory === category ? 'active' : ''}`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {(activeCategory !== null || hoveredCategory !== null) && (
        <div className="category-details-container">
          <div className="category-details-panel">
            <div className="category-items">
              <h4>{(activeCategory || hoveredCategory)?.charAt(0).toUpperCase() + (activeCategory || hoveredCategory)?.slice(1)}</h4>
              <ul className="category-list">
                {(categories[activeCategory || hoveredCategory] || []).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="category-image">
              <img 
                src={categoryImages[activeCategory || hoveredCategory]} 
                alt={activeCategory || hoveredCategory} 
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryNav;
