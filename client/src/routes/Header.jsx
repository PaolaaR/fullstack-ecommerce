import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export const Header= () => {
  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark" >
      <Container fluid>
        <Navbar.Brand as={Link} to="/Teacupdesign/" >TEACUP DESIGN</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link as={Link} to="/Teacupdesign/" href="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/Teacupdesign/catalog">Catalog</Nav.Link>
            <Nav.Link as={Link} to="/Teacupdesign/login" >Login</Nav.Link>
            <Nav.Link as={Link} to="/Teacupdesign/register">Register</Nav.Link>
            <Nav.Link as={Link} to="/Teacupdesign/product">Product</Nav.Link>
            <Nav.Link as={Link} to="/Teacupdesign/profile">Profile</Nav.Link>
            <Nav.Link as={Link} to="/Teacupdesign/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/Teacupdesign/checkout">Checkout</Nav.Link>



            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
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