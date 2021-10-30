import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ManageService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`https://obscure-plains-37105.herokuapp.com/services`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handleDelete = id => {
        const url = `https://obscure-plains-37105.herokuapp.com/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                const confirm = window.confirm("Are you sure to want to delete this service ..!")
                if (confirm === 'ok') {
                    if (data.deletedCount) {
                        const remaining = services.filter(service => service._id !== id);
                        setServices(remaining);
                        alert("Deleted Successfully");
                    }
                }
                else {
                }
            })
    }
    return (

        <div className="container mt-5">
            <h2 className="text-center">Manage All services</h2>
            <div className="my-5 row row-cols-1 row-cols-md-2 g-4 mx-auto">
                {
                    services.map(service => <div className="col"
                        key={service._id} >
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{service.hotel_name}</h5>
                                <p className="card-text">Price: {service.price}</p>
                                <div className="">
                                    <button onClick={() => handleDelete(service._id)} className="me-5 btn btn-danger">Remove Service</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default ManageService;