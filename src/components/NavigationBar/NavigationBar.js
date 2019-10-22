import React from 'react';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const navigationBar = (props) => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/" style={{fontSize: 26}}>Golden Shoe</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto" pull-left>
                    <Nav.Link as={Link} to="/men" style={{fontSize: 26}}>Men</Nav.Link>
                    <Nav.Link as={Link} to="/women" style={{fontSize: 26}}>Women</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search for products" className="mr-sm-2" />
                </Form>
                <Nav>
                    <Nav.Link href="#deets">
                        <FontAwesomeIcon icon={faUser} size={"2x"}></FontAwesomeIcon>
                    </Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        <FontAwesomeIcon icon={faShoppingBag} size={"2x"}></FontAwesomeIcon>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default navigationBar;