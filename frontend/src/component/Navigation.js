import React from 'react';
import {Nav, Navbar,NavDropdown, Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import katt from '../images/katt.jpg';
function Navigation() {
return (
<Navbar expand="lg">
  <Container>
    <LinkContainer to="/">
    <Navbar.Brand> 
      <img src={katt} style={{width:80}} alt="cat"/>
        </Navbar.Brand>
    </LinkContainer>
  
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <LinkContainer to="/">
        <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/login">
        <Nav.Link className='btn btn-primary text-white'>Login</Nav.Link>
        </LinkContainer>
        
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
            Another action
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">
            Separated link
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
);
}

export default Navigation;