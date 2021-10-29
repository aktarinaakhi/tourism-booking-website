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
                <Navbar.Brand href="#home">
                    TOUR TOURISM
                </Navbar.Brand>
                <Navbar.Toggle />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#places">Places</Nav.Link>

                        <NavDropdown title="View Orders" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">My orders</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Manage all orders</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Add new orders</NavDropdown.Item>
                        </NavDropdown>
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
                                    <button onClick={logOut} className="btn-login px-3 me-3">Logout</button>
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