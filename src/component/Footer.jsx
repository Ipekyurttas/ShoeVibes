import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Instagram } from 'react-bootstrap-icons';
import "../CSS/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <Container className="footer-container">
                <div className="footer-left">
                    <div className="footer-title">Shoe Vibes</div>
                    <p className="footer-copyright">All Rights Reserved, 2025</p>
                </div>

                <div className="footer-links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/blogs">Blogs</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                <div className="footer-social">
                    <span>Get to know us</span>
                    <div className="social-icon">
                        <Instagram className="instagram-icon" size={15} />
                    </div>
                </div>
            </Container>
        </footer>
        
    );
};

export default Footer;
