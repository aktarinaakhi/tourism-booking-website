import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap';

const BookingList = () => {
    const [allList, setAllList] = useState([]);

    useEffect(() => {
        fetch('https://obscure-plains-37105.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => {
                setAllList(data)
            })
    }, []);

    const handleDelete = id => {
        const url = `https://obscure-plains-37105.herokuapp.com/bookings/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                const confirm = window.confirm("Are you sure to want to delete this service ..!")
                if (confirm === 'ok') {
                    if (data.deletedCount) {
                        const remaining = allList.filter(service => service._id !== id);
                        setAllList(remaining);
                        alert("Deleted Successfully");
                    }
                }
                else {
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
                                    <button className="btn-regular" onClick={() => handleDelete(list._id)}>Cancel Booking</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default BookingList;