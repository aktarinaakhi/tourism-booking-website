import React from 'react';
import "./Input"

const Input = () => {
    return (
        <section id="input" className="input" style={{ backgroundImage: 'url(https://i.ibb.co/B3ySWS1/diego-jimenez-A-NVHPka9-Rk-unsplash.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', padding: '5vw' }}>
            <h2>input</h2>

            <input type="text" placeholder="Search your Destination" />

        </section>
    );
};

export default Input;