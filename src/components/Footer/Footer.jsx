import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css'; // Asegúrate de que el archivo CSS está correctamente enlazado

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2>About Us</h2>
                    <p>
                        We are NateDrops, a company dedicated to bringing you the latest in fashion and style. 
                        Our mission is to provide top quality products with exceptional customer service.
                    </p>
                </div>
                <div className="footer-section contact">
                    <h2>Contact</h2>
                    <p>123 Fashion Avenue, Milan It, MI 10001</p>
                    <p>Email: bussiness@natedrops.com</p>
                    <p>Phone: +39 234 567 890</p>
                </div>
                <div className="footer-section social">
                    <h2>Follow Us</h2>
                    <div className="social-icons">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 NateDrops. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
