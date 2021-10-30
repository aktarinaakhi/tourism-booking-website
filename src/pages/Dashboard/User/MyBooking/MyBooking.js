import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';

const MyBooking = () => {
    const [myBooking, setMyBooking] = useState([])
    const [bookings, setBookings] = useState([])

    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://obscure-plains-37105.herokuapp.com/bookings`)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    useEffect(() => {
        const ownOrder = bookings.filter(booking => booking.email === user?.email);
        setMyBooking(ownOrder);
    })
    console.log(myBooking);

    return (
        <div className="text-center my-5">
            <h1>My Orders</h1>
            <h4 className="mb-5"> Number of orders : {myBooking.length}</h4>
            {
                myBooking.map(mybook => <div key={mybook._id}
                >
                    <h2>{mybook.name}</h2>
                    <h3>Order Id : {mybook._id}</h3>
                    <button className="btn btn-primary"> Cancel order</button>

                </div>)
            }
        </div>
    );
};

export default MyBooking;