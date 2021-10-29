import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="layer" >
                <div className="Links">
                    <h4 className="pb-3">Contact Us</h4>
                    <a href="#">House #16, Road # 2, Dhanmondi R/A, Dhaka-1205,Bangladesh </a>
                    <a href="#">Phone : 09613 787801, 09666 787801</a>
                    <a href="#">E-mail : info@populardiagnostic.com</a>
                    <div>
                        <span><i className="bi bi-facebook"></i></span>
                        <span><i className="bi bi-youtube"></i></span>
                        <span><i className="bi bi-linkedin"></i></span>
                        <span><i className="bi bi-twitter"></i></span>
                        <span><i className="bi bi-instagram"></i></span>

                    </div>


                </div>
                <div className="Links">
                    <h4 className="pb-3">Important Links</h4>
                    <a href="#"> Popular Pharmaceuticals</a>
                    <a href="#"> Popular Medical College</a>
                    <a href="#">Popular Medical College Hospital </a>
                    <a href="#"> Management Team</a>
                    <a href="#"> Career</a>
                </div>
                <div className="Links">
                    <h4 className="pb-3"> Quick Links</h4>
                    <a href="#"> Our Services</a>
                    <a href="#"> Our Branches</a>
                    <a href="#">Find Docotrs </a>
                    <a href="#"> Gallery</a>
                    <a href="#"> Sitemap</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;