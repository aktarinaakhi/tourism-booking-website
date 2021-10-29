import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = props => {
    const { name, image, price, discriptoin, place, id } = props.service;
    const style = {
        width: '300px',
        height: '200px',
        borderRadius: '10px'
    }
    return (

        <div class="col-sm-4 text-center">
            <div class="card">
                <div class="card-body">
                    <div><img className="card-image" style={style} src={image} alt="" /></div>
                    <h5 class="card-title mt-3">{name}</h5>
                    <p class="card-text">{discriptoin}</p>
                    <small>Location: {place}</small> <br />
                    <p>BDT {price}</p>
                    <Link to={`/placeorder/${id}`}>
                        <button>Book Now</button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Service;