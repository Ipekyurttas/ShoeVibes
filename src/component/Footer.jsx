import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Instagram,  Truck, ArrowCounterclockwise, ShieldCheck, Headset, Twitter, Tiktok
} from 'react-bootstrap-icons';
import logo1 from '../images/logo1.png';
import payments from '../images/payments.png';
import "../CSS/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="logo-row">
          <Col>
            <img 
              src={logo1} 
              alt="ShoeVibes Logo" 
              className="logo-img"
              width="120"
              height="auto"
              loading="lazy"
            />
          </Col>
        </Row>
        <Row className="main-content">
          <Col md={4} className="links-col">
            <nav className="footer-nav">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
          </Col>
          <Col md={4} className="features-col">
            <ul className="features-list">
              <li className="feature-item">
                <Truck className="feature-icon" />
                <span>Fast Delivery</span>
              </li>
              <li className="feature-item">
                <ArrowCounterclockwise className="feature-icon" />
                <span>Easy Refund</span>
              </li>
              <li className="feature-item">
                <ShieldCheck className="feature-icon" />
                <span>Safe Shopping</span>
              </li>
              <li className="feature-item">
                <Headset className="feature-icon" />
                <span>7/24 Call Center</span>
              </li>
            </ul>
          </Col>
          <Col md={4} className="social-col">
            <h3 className="footer-heading">Get to know us</h3>
            <ul className="social-list">
              <li className="social-item">
                <Instagram className="social-icon" />
                <span>@shoevibes</span>
              </li>
              <li className="social-item">
                <Twitter className="social-icon" />
                <span>@shoevibes</span>
              </li>
              <li className="social-item">
                <Tiktok className="social-icon" />
                <span>@shoevibes</span>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="payments-section">
          <Col>
            <img 
              src={payments} 
              alt="Accepted payment methods" 
              className="payments-img"
              loading="lazy"
            />
          </Col>
        </Row>
        <Row className="copyright-section">
          <Col>
            <p className="copyright-text">
              &copy; 2025 ShoeVibes. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;