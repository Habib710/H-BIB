import React from 'react';
import './Nav.css'
import { Navbar,Container,Nav } from 'react-bootstrap';
import CustomLink from '../Custom/CustomLink';


const NavBar = () => {
    return (
        <div className='mt-4'>
             <Navbar collapseOnSelect expand="lg" className='coustom m-auto '  variant="dark">
      <Container>
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto c-link">
            <CustomLink  to="/home">Home</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/contact">Contract</CustomLink>
           
          
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
            
        </div>
        
    );
};

export default NavBar;