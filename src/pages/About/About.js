import React from 'react';
import './About'

const About = () => {
    return (
        <div className="about-container d-flex container my-5">
            <div className="w-50">
                <p>About Tour Booking</p>
                <ul className="" style={{ listStyle: 'none', color: '#0071c2' }}>
                    <li>Legal</li>
                    <li>Press center</li>
                    <li>Carrer Opportunities</li>
                    <li>About your property</li>
                    <li>Tour booking for business</li>
                    <li>Extranet login</li>
                    <li>Contact us</li>
                    <li>Become Affiliate</li>
                </ul>
            </div>

            <div className="w-50">
                <h2>About Tour Booking™</h2>
                <p>Founded in 1996 in Amsterdam, Tour Booking has grown from a small Dutch start-up to one of the world’s leading digital travel companies. Part of Booking Holdings Inc. (NASDAQ: BKNG), Tour Booking’s mission is to make it easier for everyone to experience the world.

                    By investing in technology that takes the friction out of travel, Tour Booking seamlessly connects millions of travelers to memorable experiences, a variety of transportation options, and incredible places to stay – from homes to hotels, and much more. As one of the world’s largest travel marketplaces for both established brands and entrepreneurs of all sizes, Tour Booking enables properties around the world to reach a global audience and grow their businesses.

                    Tour Booking is available in 43 languages and offers more than 28 million reported accommodation listings, including over 6.2 million homes, apartments, and other unique places to stay. Wherever you want to go and whatever you want to do, Tour Booking makes it easy and supports you with 24/7 customer support.</p>

            </div>
        </div>
    );
};

export default About;