import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import Banner from '../Banner/Banner'
import './Home.css'
import Service from '../Service/Service';
import Input from '../Input/Input';

const Home = () => {

    const [services, setServices] = useState([]);
    const [spinner, setSpinner] = useState(true);
    const [filterService, setFilterService] = useState([])

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
    }, []);

    // handle input search
    // const handleSearch = event => {
    //     const searchText = event.target.value;
    //     const matchedProducts = services.filter(service => service.name.toLowerCase().includes(searchText.toLowerCase()));
    //     setFilterService(matchedProducts);
    // }

    return (
        <div>
            <div>
                <Banner></Banner>
            </div>

            {/* <div>
                <Input></Input>
            </div> */}

            <div id="services" className="container my-5">

                <div className="w-50 text-center mx-auto">
                    <h2 className="mt-5 mx-auto text-center">Let's start your tour planning</h2>
                    <input className="mx-5 py-3 my-5" type="text" placeholder="Search your Destination" />
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