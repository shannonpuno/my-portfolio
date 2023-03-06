import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, Container } from "react-bootstrap";

function Navigation() {
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>Portfolio</Navbar.Brand>
                <Nav className="me-auto">
                    <LinkContainer to="/aboutMe">
                        <Nav.Link>About Me</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/Projects">
                        <Nav.Link>Projects</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/resume">
                        <Nav.Link>Resume</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/contact">
                        <Nav.Link>Contact</Nav.Link>
                    </LinkContainer>
                    </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigation;

