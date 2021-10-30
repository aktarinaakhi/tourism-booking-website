import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = data => {
        axios.post('https://obscure-plains-37105.herokuapp.com/admin', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Admin inserted Successfully');
                    reset();
                    console.log(res);
                }
            })
        // useHistory.push('/addService')
    }

    return (
        <div style={{ backgroundColor: 'whitesmoke', paddingBottom: '15vw', paddingTop: '8vw' }}>
            <h2 className="text-center m-5" style={{ color: '#020f24', fontWeight: 'bold' }}>Make Admin</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label for="email" style={{ color: '#020f24' }}>Enter Email</label>
                <input name='email' {...register("email", { required: true })} />
                {errors.email && <span>This field is required</span>}

                <input type="submit" style={{ backgroundColor: '#003580' }} />
            </form>
        </div>
    );
};

export default MakeAdmin;