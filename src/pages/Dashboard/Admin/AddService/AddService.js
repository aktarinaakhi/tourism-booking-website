import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import './AddService.css'

const AddService = () => {
    const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const ServiceData = {

            // name: data.name,
            // discriptoin: data.discriptoin,
            // price: data.price,
            // location: data.location,
            // image: data.image
            // imageURL: imgURL
        };

        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Inserted Successfully');
                    reset();

                }
            })
        // .then(res => alert('Service Added Successfully'))
        // useHistory.push('/addService')
    }

    return (
        <div style={{ paddingTop: '5vw', paddingBottom: '5vw', backgroundColor: 'whitesmoke' }}>
            <h3 style={{ color: '#020f24', fontWeight: 'bold' }} className='mb-5'>Add New Service</h3>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input name="hotel_name" placeholder="service name" {...register("hotel_name")} className="my-1" />
                <br />
                <input name="descriptoin" placeholder="descriptoin" {...register("descriptoin")} className="my-1" />
                <br />
                <input name="price" placeholder="price" {...register("price")} className="my-1" />
                <br />
                <input name="location" placeholder="location" {...register("location")} className="my-1" /> <br />
                {/* <input type="file" className="my-1" /> */}
                <input name="image" placeholder="image" {...register("image")} className="my-1" /> <br />

                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService