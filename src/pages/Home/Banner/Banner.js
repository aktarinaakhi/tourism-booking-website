import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner.jpg'
import banner from '../../../images/banner1.jpg'
import banner2 from '../../../images/banner2.jpg'

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                        style={{ height: '40vw' }}
                    />
                    <Carousel.Caption>
                        <h2>Happy Journey</h2>
                        <p> work to the highest standards to guarantee your privacy. For further details</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner}
                        alt="Second slide"
                        style={{ height: '40vw' }}
                    />

                    <Carousel.Caption>
                        <h2>Welcome to stay with us</h2>
                        <p> No matter where you want to go or what you want to do</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Third slide"
                        style={{ height: '40vw' }}
                    />

                    <Carousel.Caption>
                        <h2> Your safety is our Main Goal</h2>
                        <p>We facilitate hundreds of thousands of transactions every day through our secure platform.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;