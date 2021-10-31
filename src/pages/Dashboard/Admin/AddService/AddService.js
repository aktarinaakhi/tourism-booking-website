import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';
import './AddService.css'

const AddService = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const url = ('https://obscure-plains-37105.herokuapp.com/services')
        fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (res) {
                    alert('Inserted Successfully');
                    reset();
                }
            })
    }



    return (
        <div style={{ paddingTop: '5vw', paddingBottom: '5vw', backgroundColor: 'whitesmoke' }}>
            <h3 style={{ color: '#020f24', fontWeight: 'bold' }} className='mb-5 text-center'>Add New Service</h3>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input name="hotel_name" placeholder="service name" {...register("hotel_name")} className="my-1" />
                <br />
                <input name="descriptoin" placeholder="descriptoin" {...register("descriptoin")} className="my-1" />
                <br />
                <input name="price" placeholder="price" {...register("price")} className="my-1" />
                <br />
                <input name="location" placeholder="location" {...register("location")} className="my-1" /> <br />
                <input name="image" placeholder="image" {...register("image")} className="my-1" /> <br />

                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService


