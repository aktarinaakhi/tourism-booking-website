import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Modal, Table, Button } from 'react-bootstrap';

const BookingList = () => {
    const [allList, setAllList] = useState([]);
    const [status, setStatus] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        fetch('https://obscure-plains-37105.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => {
                setAllList(data)
            })
    }, [status]);

    const modalShow = id => {
        setShow(true);
    }
    const handleDelete = id => {
        const url = `https://obscure-plains-37105.herokuapp.com/bookings/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    const remaining = allList.filter(service => service._id !== id);
                    setAllList(remaining);
                    setShow(false)
                }

            })
    }

    const handleUpdateStatus = id => {
        const update = {
            status: 'Accepted'
        }
        const url = `https://obscure-plains-37105.herokuapp.com/bookings/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setStatus(data);
                    alert('Status updated successfully');

                }
            })
    }

    return (
        <div style={{ paddingTop: '5vw', paddingBottom: '7vw', backgroundColor: 'whitesmoke' }}>
            <h1 className='text-center m-3' style={{ color: '#020f24', fontWeight: 'bold' }}> Manage All Booking List</h1>
            <Table className="w-75 m-auto text-center" striped bordered hover responsive style={{ color: '#020f24' }}>
                <thead>
                    <tr>
                        {/* <th>#</th> */}
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        allList.map((list) => (
                            <tr>
                                <td>{list.name}</td>
                                <td>{list.email}</td>
                                <td>{list.status}</td>
                                <td>
                                    <button className=" btn btn-danger" onClick={() => modalShow(list._id)}>Cancel</button>
                                    <button onClick={() => handleUpdateStatus(list._id)} className="btn btn-success ms-4"> Accept</button>
                                </td>

                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Body>Are you sure to want to cancel this booking service ?</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Cancel
                                        </Button>
                                        <Button variant="primary" onClick={() => handleDelete(list._id)}>
                                            Confirm
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default BookingList;