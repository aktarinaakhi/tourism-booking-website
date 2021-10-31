import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Banner from '../Banner/Banner'
import './Home.css'
import Service from '../Service/Service';

const Home = () => {

    const [services, setServices] = useState([]);
    const [spinner, setSpinner] = useState(true);
    const [filterService, setFilterService] = useState([]);

    useEffect(() => {
        fetch('https://obscure-plains-37105.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setSpinner(false)
            });
    }, []);


    return (
        <div id="home">
            {/* banner part  */}
            <div>
                <Banner></Banner>
            </div>

            {/* all Services part  */}

            <div id="services" className="container my-5">

                <div className="w-50 text-center mx-auto">
                    <h2 className="mt-5 text-center">Let's start your tour planning</h2>
                    <input className="mx-4 py-3 my-5 px-2 aligns-item-center" type="text" placeholder="Search your Destination" />
                </div>
                <div className="row g-4">
                    {
                        spinner && <Spinner animation="border" variant="dark" />
                    }
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        >
                        </Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;