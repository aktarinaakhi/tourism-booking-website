import React from 'react';
import { Link } from 'react-router-dom';

const Service = props => {
    const { hotel_name, image, price, descriptoin, location, _id } = props.service;
    const style = {
        width: '300px',
        height: '200px',
        borderRadius: '10px'
    }
    return (

        <div className="col-sm-4 text-center">
            <div className="card">
                <div className="card-body">
                    <div><img className="card-image" style={style} src={image} alt="" /></div>
                    <h5 className="card-title mt-3">{hotel_name}</h5>
                    <p className="card-text">{descriptoin}</p>
                    <small>Location: {location}</small> <br />
                    <p>BDT {price}</p>
                    <Link to={`/placeorder/${_id}`}>
                        <button className="btn-regular">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Service;