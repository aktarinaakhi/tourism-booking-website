import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="layer" >
                <div className="Links">
                    <h4 className="pb-3">Follow Us</h4>
                    <a href="#">House #16, Road # 2, Dhanmondi R/A, Dhaka-1205,Bangladesh </a>
                    <a href="#">Phone : 09613 787801, 09666 787801</a>
                    <a href="#">E-mail : info@tourbooking.com</a>
                    <div>
                        <span><i className="bi bi-facebook"></i></span>
                        <span><i className="bi bi-youtube"></i></span>
                        <span><i className="bi bi-linkedin"></i></span>
                        <span><i className="bi bi-twitter"></i></span>
                        <span><i className="bi bi-instagram"></i></span>

                    </div>


                </div>
                <div className="Links">
                    <h4 className="pb-3">Location</h4>
                    <a href="#"> Virtual office</a>
                    <a href="#"> Amsterdam</a>
                    <a href="#">New Yourk </a>
                    <a href="#"> Singapure</a>
                    <a href="#"> Career</a>
                </div>

                <div className="Links">
                    <h4 className="pb-3">About us</h4>
                    <a href="#"> Our Gallery</a>
                    <a href="#"> Our Horizons</a>
                    <a href="#">Our People </a>
                    <a href="#"> Our Community</a>
                    <a href="#"> Sustanability</a>
                </div>
                
                <div className="Links">
                    <h4 className="pb-3">How We hire</h4>
                    <a href="#"> Our Values</a>
                    <a href="#"> Interview</a>
                    <a href="#">FAQ </a>
                    <a href="#"> Gallery</a>
                    <a href="#"> Sitemap</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;