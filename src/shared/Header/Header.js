import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import './Header.css'
const Header = () => {
    const { user, logOut } = useAuth();
    const [admins, setAdmins] = useState(false);


    useEffect(() => {
        fetch('https://obscure-plains-37105.herokuapp.com/admin')
            .then(res => res.json())
            .then(data => {
                for (const dt of data) {
                    if (dt.email === user.email) {
                        setAdmins(true)
                        break;
                    }
                }
            })
    }, [])

    return (

        <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#003580' }} sticky="top">
            <Container>

                <Navbar.Brand as={Link} to="/home">
                    <h2 className="me-4 text-light" style={{ fontWeight: 'bold' }}> TOUR BOOKING</h2>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: 'whitesmoke' }} />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="text-light" as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="text-light" as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link className="text-light" as={Link} to="/about">About us</Nav.Link>
                        <Nav.Link className="text-light" as={Link} to="/myBooking">My Booking</Nav.Link>
                    </Nav>
                </Navbar.Collapse>


                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        {

                            admins ?
                                <NavDropdown title="Dashboard" id="basic-nav-dropdown" className="text-light">

                                    <NavDropdown.Item as={Link} to="/admin">Admin List</NavDropdown.Item>
                                </NavDropdown>
                                :
                                <NavDropdown title="Dashboard" id="basic-nav-dropdown" className="text-light">
                                    <NavDropdown.Item as={Link} to="/addService">Add new service</NavDropdown.Item>

                                    <NavDropdown.Item as={Link} to="/bookingList">Manage booking list</NavDropdown.Item>

                                </NavDropdown>
                        }

                        {
                            !user.email ?
                                <Nav.Link className="mx-lg-3">
                                    <Link to='/login'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" class="bi bi-person-circle" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                        </svg>
                                    </Link>
                                </Nav.Link>
                                :
                                <div className="d-flex align-items-center justify-content-center">
                                    <button className="mx-3 btn-regular" onClick={() => logOut()}>logout</button>
                                    <p className="text-light mt-2">{user.displayName}</p>
                                </div>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;