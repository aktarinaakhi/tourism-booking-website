import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import './Header.css'
const Header = () => {
    const { user, logOut } = useAuth();
    return (

        <Navbar collapseOnSelect expand="lg" className="header-container">
            <Container>
                <Navbar.Brand as={Link} to="/home">
                    TOURISM BOOKING
                </Navbar.Brand>
                <Navbar.Toggle />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        {
                            !user?.email ?
                                <div className="d-flex">
                                    <Nav.Link as={Link} to="/login"> Login </Nav.Link>
                                </div>
                                :
                                <div className="d-flex">
                                    <NavDropdown title="Dashboard" id="basic-nav-dropdown">
                                        <NavDropdown.Item as={Link} to="/myBooking">My Booking</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/">Manage all booking</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/addService">Add new service</NavDropdown.Item>
                                    </NavDropdown>
                                    <button onClick={logOut} className="btn-login px-3 mx-3">Logout</button>
                                    <p>{user.displayName}</p>

                                </div>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    );
};

export default Header;