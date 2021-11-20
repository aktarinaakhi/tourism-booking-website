import React from 'react';

const Contact = () => {
    return (
        <>
            <section id="input" className="input" style={{ backgroundImage: 'url(https://i.ibb.co/B3ySWS1/diego-jimenez-A-NVHPka9-Rk-unsplash.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', padding: '4vw' }}>
                <div className="w-50 text-center container">
                    <h2 className="text-light">Save time, save money!</h2>

                    <input type="text" placeholder="Enter Your Email" />
                    <button className="btn btn-primary mt-2">Subscribe</button>
                </div>
            </section>


            {/* corporate contact part  */}
            <section className="container my-5 px-5">
                <h2 className="mb-5">Corporate Contact</h2>
                <div className="row g-4">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Do you need to make changes to a booking?</h5>
                                <a href="#">Visit my booking page</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Do you need help with a booking?</h5>
                                <a href="#">Sign in to use our help centre</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Are you a property needing help?</h5>
                                <a href="#">Sign in to use our help centre</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Questions about Tour Booking for Business?</h5>
                                <a href="#">Sign in to use our help centre</a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>
    );
};

export default Contact;