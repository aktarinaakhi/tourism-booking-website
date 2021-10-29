import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import Banner from '../Banner/Banner'
import './Home.css'
import Service from '../Service/Service';

const Home = () => {

    const [services, setServices] = useState([]);
    const [spinner, setSpinner] = useState(true);

    // const [filterservice, setFilterservice] = useState([]);
    // const [page, setPage] = useState(0);
    // const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        fetch('https://obscure-plains-37105.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setSpinner(false)
            });
    }, [])
    // console.log(services);

    return (
        <div>
            <div>
                <Banner></Banner>
            </div>

            <div id="services" className="container my-5">


                <div class="row g-5">
                    <h2 className="my-5 mx-auto text-center">Let's start your tour planning</h2>
                    {
                        spinner && <Spinner animation="border" variant="success" />
                    }
                    {
                        services.slice(0, 6).map(service => <Service
                            key={service.id}
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