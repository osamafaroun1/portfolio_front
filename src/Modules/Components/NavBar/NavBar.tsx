 import './NavBar.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const NavBar: React.FC = () => {
    return (
        <>
    <Navbar  className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><span>Port</span> folio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"> 
            <NavLink to={'/'}>Home</NavLink>
         <NavLink to={'/login'}>Login</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </>
    );
};

export default NavBar;