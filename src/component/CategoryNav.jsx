import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'react-toastify/dist/ReactToastify.css';  
import { useNavigate } from 'react-router-dom';
import adidaslogo1 from "../images/adidaslogo1.png";
import nikelogo1 from "../images/nikelogo1.png";
import nikekategori from "../images/nikekategori.avif";
import pumaerkek from "../images/pumaerkek.jpeg";
import kremtopuklu from "../images/kremtopuklu.jpg";
import sneakerkadın from "../images/sneakerkadın.webp";
import sneakersiyah from "../images/sneakersiyah.webp";
import sneakerbeyaz from "../images/sneakerbeyaz.webp";
import kızsiyah from "../images/kızsiyah.webp";
import erkekmavi from "../images/erkekmavi.webp";
import indirim from "../images/indirim.png";
import "../CSS/Navbar.css";

const categories = {
  brands: ["Nike", "Adidas", "Puma", "Sketchers", "Vans", "Converse", "Lumberjack", "Us.Polo Assn."],
  women: ["The Newest", "Bestsellers", "Heels", "Flats", "Sneakers", "Boots", "Evening Dress"],
  men: ["The Newest", "Bestsellers", "Sneakers", "Boots", "Sandals", "Loafers"],
  kids: ["The Newest", "Bestsellers", "Sneakers", "Sandals", "Boots", "Slip-ons"],
  sneakers: ["The Newest", "Bestsellers", "Running", "Basketball", "Casual", "Skateboarding"],
  campaigns: ["50% Off", "Buy 1 Get 1 Free", "Clearance Sale"]
};

const categoryImages = {
  brands: [adidaslogo1,nikelogo1],
  men: [nikekategori,pumaerkek],
  women: [kremtopuklu,sneakerkadın],
  kids: [kızsiyah,erkekmavi],
  sneakers: [sneakerbeyaz,sneakersiyah],
  campaigns: [indirim],
};

function CategoryNav() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const navbarRef = useRef(null);
  const navigate= useNavigate();

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
    if(category === "brands" && activeCategory === "brands" ){
      navigate("/brands");
    }else if(category === "women" && activeCategory === "women" ){
      navigate("/women");
    }else if(category === "men" && activeCategory === "men" ){
      navigate("/men");
    }else if(category === "kids" && activeCategory === "kids" ){
      navigate("/kids");
    }else if(category === "sneakers" && activeCategory === "sneakers" ){
      navigate("/sneakers");
    }else{
      setActiveCategory(prevCategory => prevCategory === category ? null : category);
    }
  };

  const currentCategory = activeCategory || hoveredCategory;

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

      {currentCategory && (
        <div className="category-details-container">
          <div className="category-details-panel">
            <div className="category-items">
              <h4>{currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)}</h4>
              <ul className="category-list single-column">
                {categories[currentCategory].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="category-images">
              {categoryImages[currentCategory].map((img, idx) => (
                <img key={idx} src={img} alt={`img-${idx}`} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CategoryNav;
