import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './AddService.css'

const AddService = () => {
    const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();
    const [imgURL, setImgURL] = useState(null);


    const onSubmit = data => {

        const serviceData = {
            ...data,
            image: imgURL
        };
        const url = ('https://obscure-plains-37105.herokuapp.com/services')
        fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => {
                if (res) {
                    alert('Inserted Successfully');
                    reset();
                }
            })
    }

    const handleImgUpload = event => {
        // console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', "02a63ca97b104e0ac83a5263fa5e7be5")
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(response => {
                setImgURL(response.data.data.display_url);
                console.log(response);

            })
            .catch(error => {
                console.log(error);
            });
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
                <input type="file" className="my-1" onChange={handleImgUpload} />
                {/* <input name="image" placeholder="image" {...register("image")} className="my-1" /> <br /> */}

                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService