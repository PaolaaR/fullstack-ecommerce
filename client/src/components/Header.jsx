import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';



const handleLogout = () => {
  const confirmLogout = window.confirm("Are you sure you want to logout?");
  
  if (confirmLogout) {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.replace('/Teacupdesign/');
  }
};


export const Header= () => { 
  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark" >
      <Container fluid>
        <img src="https://res.cloudinary.com/djymwd1fr/image/upload/ar_1:1,b_rgb:262c35,bo_34px_solid_rgb:e5962c,c_fill,g_auto,r_max,w_1000/v1700788025/logoteac_zu0o5i.png" alt="Logo-Teacup-Design" border="0" width="50" height="50" />
        <Navbar.Brand as={Link} to="/Teacupdesign/"> TEACUP DESIGN </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link as={Link} to="/Teacupdesign/catalog">Catalog</Nav.Link>
            <Nav.Link as={Link} to="/Teacupdesign/login" >Login</Nav.Link>
            <Nav.Link as={Link} to="/Teacupdesign/register">Register</Nav.Link>
            <Nav.Link as={Link} to="/Teacupdesign/profile">Profile</Nav.Link>
            <Nav.Link as={Link} to="/Teacupdesign/contact">Contact</Nav.Link>
            
          </Nav>
          <div className="d-flex align-items-center">
          
          <Form className="d-flex">
          <Nav.Link as={Button} onClick={handleLogout} style={{ cursor: 'pointer', padding: '5px 10px', borderRadius: '5px', backgroundColor: 'red', color: 'white' }}>
        Logout
      </Nav.Link>
          
          <FaShoppingCart size={40} className="me-3" />
          </Form>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className="banner">
    <Container fluid>
      <p>DECEMBER SUPER SALE 20% OFF </p>
    </Container>
  </div>
</div>
  );
};