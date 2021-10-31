import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './PlaceOrder.css'

const PlaceOrder = () => {
    const { serviceId } = useParams();
    const { user } = useAuth();
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const [services, setServices] = useState([]);
    const [singleService, setSingleService] = useState({})
    const [confirmationData, setConfirmationData] = useState(null);
    const [congratulate, setCongratulate] = useState(false);
    const [booking, setBooking] = useState([]);

    useEffect(() => {
        fetch('https://obscure-plains-37105.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    useEffect(() => {
        const foundService = services.find(service => service._id == serviceId);
        setSingleService(foundService);
    }, [services])

    const onSubmit = data => {
        const serviceData = {
            ...data,
            status: 'pending'
        };
        const url = 'https://obscure-plains-37105.herokuapp.com/bookings';
        fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => {
                if (res) {
                    setBooking([]);
                    setCongratulate(true);
                    alert('booking Successfully');
                    reset();
                }
            })
    }

    return (
        <div>
            <div className="card my-5 container p-5">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={singleService?.image} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-4 ps-4">
                        <div className="card-body">
                            <h5 className="card-title">{singleService?.hotel_name}</h5>
                            <p>Location : {singleService?.place}</p>
                            <p className="card-text">{singleService?.descriptoin}</p>
                            <p className="card-text"><small className="text-muted">Price : BDT <strong>{singleService?.price}</strong></small></p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <form className="order-form" onSubmit={handleSubmit(onSubmit)}>
                            <input defaultValue={user.displayName} {...register("name")} /> <br />
                            <input placeholder="email" defaultValue={user.email} {...register("email", { required: true })} /> <br />
                            {errors.email && <span className="error">This field is required</span>} <br />
                            <input placeholder="Address" defaultValue="" {...register("Address", { required: true })} /> <br />
                            {errors.Address && <span>Address is required </span>}
                            <input placeholder="phone number" defaultValue="" {...register("Phone", { required: true })} required /> <br />

                            <input value="Confirm Booking" type="submit"></input>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PlaceOrder;