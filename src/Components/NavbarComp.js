import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function NavbarComp() {
    
  return (        
    <div>   
        <Navbar bg="primary" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Pahlawan</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/Hero">Hero</Nav.Link>
                </Nav>                
            </Container>
        </Navbar>                     
    </div>           
  )
  
}

export default NavbarComp