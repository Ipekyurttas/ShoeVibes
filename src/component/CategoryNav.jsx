import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'react-toastify/dist/ReactToastify.css';
import "../CSS/Navbar.css";

// Görseller
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

// Kategoriler ve alt kategoriler
const categories = {
  Brands: ["Nike", "Adidas", "Puma", "Sketchers", "Vans", "Converse", "Lumberjack", "Us.Polo Assn."],
  Women: ["The Newest", "Bestsellers", "Heels", "Flats", "Sneakers", "Boots", "Evening Dress"],
  Men: ["The Newest", "Bestsellers", "Sneakers", "Boots", "Sandals", "Loafers"],
  Kids: ["The Newest", "Bestsellers", "Sneakers", "Sandals", "Boots", "Slip-ons"],
  Sneakers: ["The Newest", "Bestsellers", "Running", "Basketball", "Casual", "Skateboarding"],
  Campaigns: ["50% Off", "Buy 1 Get 1 Free", "Clearance Sale"]
};

// Görsel eşlemesi
const categoryImages = {
  brands: [adidaslogo1, nikelogo1],
  men: [nikekategori, pumaerkek],
  women: [kremtopuklu, sneakerkadın],
  kids: [kızsiyah, erkekmavi],
  sneakers: [sneakerbeyaz, sneakersiyah],
  campaigns: [indirim],
};

function CategoryNav() {
  const [openedCategory, setOpenedCategory] = useState(null);
  const navbarRef = useRef(null);
  const navigate = useNavigate();

  // Kategori dışına tıklanınca kapanması
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setOpenedCategory(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Ana kategoriye tıklama
  const handleCategoryClick = (category) => {
    if (openedCategory === category) {
      // Zaten açıksa: direkt sadece kategoriyle yönlendir
      navigate(`/brands?category=${encodeURIComponent(category)}`);
    } else {
      setOpenedCategory(category);
    }
  };

  // Alt kategoriye tıklama (örneğin Nike)
  const handleSubCategoryClick = (category, subCategory) => {
    navigate(`/brands?category=${encodeURIComponent(category)}&subCategory=${encodeURIComponent(subCategory)}`);
  };

  const displayCategory = openedCategory;

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
                  onClick={(e) => {
                    e.preventDefault();
                    handleCategoryClick(category);
                  }}
                  className="custom-category-link"
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {displayCategory && (
        <div className="category-details-container">
          <div className="category-details-panel">
            <div className="category-items">
              <h4>{displayCategory.charAt(0).toUpperCase() + displayCategory.slice(1)}</h4>
              <ul className="category-list single-column">
                {categories[displayCategory].map((item, index) => (
                  <li key={index} onClick={() => handleSubCategoryClick(displayCategory, item)}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="category-images">
              {categoryImages[displayCategory.toLowerCase()]?.map((img, idx) => (
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
