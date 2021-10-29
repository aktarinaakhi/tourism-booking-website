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
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const history = useHistory();


    const [services, setServices] = useState([]);
    const [singleService, setSingleService] = useState({})

    useEffect(() => {
        fetch('https://obscure-plains-37105.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    useEffect(() => {
        const foundService = services.find(service => service.id == serviceId);
        setSingleService(foundService);
    }, [services])

    const handleBooking = () => {
        alert('Confirm successfully');
        history.push('/home');
        // setCart([]);
        // clearTheCart();
    }

    return (
        <div className="card my-5 container p-5">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={singleService?.image} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-4 ps-4">
                    <div className="card-body">
                        <h5 className="card-title">{singleService?.name}</h5>
                        <p>Location : {singleService?.place}</p>
                        <p className="card-text">{singleService?.discriptoin}</p>
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

                        <button onClick={handleBooking} className="button mt-4" >Booking Confirm</button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default PlaceOrder;