import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section id="input" className="input" style={{ backgroundImage: 'url(https://i.ibb.co/b5h50B4/romson-preechawit-Vy2c-Hqm0m-Cs-unsplash.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', padding: '15vw' }}>
            <div className="w-50 text-center container">
                <Link to="/home">
                    <button className="btn btn-primary p-3 px-5">Go Home</button>
                </Link>

            </div>
        </section>
    );
};

export default NotFound;