import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import useAuth from '../../../../hooks/useAuth';

const MyBooking = () => {
    const [myBooking, setMyBooking] = useState([]);
    const [bookings, setBookings] = useState([]);
    const { user } = useAuth();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        fetch(`https://obscure-plains-37105.herokuapp.com/bookings`)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    useEffect(() => {
        const ownOrder = bookings.filter(booking => booking.email === user?.email);
        setMyBooking(ownOrder);
    })

    const modalShow = id => {
        setShow(true);
    }

    //cancel personal booking 
    const handleDelete = id => {
        const url = `https://obscure-plains-37105.herokuapp.com/bookings/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    const remaining = myBooking.filter(myBook => myBook._id !== id);
                    setBookings(remaining);
                    setShow(false)
                }
            });
    }

    return (
        <div className="container mt-5">
            <h2 className="text-center">My Booking</h2>
            <div className="my-5 row row-cols-1 row-cols-md-2 g-4 mx-auto">
                {
                    myBooking.map(mybook => <div className="col"
                        key={mybook._id} >
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{mybook.name}</h5>
                                <h4>{mybook.email}</h4>
                                <p>Booking Id: {mybook._id}</p>
                                <p className="card-text">Address: {mybook.Address}</p>
                                <p>Phone Number : {mybook.Phone}</p>
                                <p>Status: {mybook.status}</p>
                                <div className="">
                                    <button onClick={() => modalShow(mybook._id)} className="me-5 btn btn-primary">Cancel booking</button>
                                </div>
                            </div>
                            <div>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Body>Are you sure to want to cancel your booking ?</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Cancel
                                        </Button>
                                        <Button variant="primary" onClick={() => handleDelete(mybook._id)}>
                                            Confirm
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>

                        </div>
                    </div>
                    )
                }
            </div>


        </div>
    )
};

export default MyBooking;