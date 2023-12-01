import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export const Header = () => {
  const token = localStorage.getItem('your_token_key'); // Replace 'your_token_key' with your actual token key

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
        <Container fluid>
          <img
            src="https://res.cloudinary.com/djymwd1fr/image/upload/ar_1:1,b_rgb:262c35,bo_34px_solid_rgb:e5962c,c_fill,g_auto,r_max,w_1000/v1700788025/logoteac_zu0o5i.png"
            alt="Logo-Teacup-Design"
            border="0"
            width="50"
            height="50"
          />
          <Navbar.Brand as={Link} to="/Teacupdesign/"> TEACUP DESIGN </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link as={Link} to="/Teacupdesign/" href="/"> Home </Nav.Link>
              <Nav.Link as={Link} to="/Teacupdesign/catalog"> Catalog </Nav.Link>
              {token !== undefined && token !== null && (
                <>
                  {!token && (
                    <>
                      <Nav.Link as={Link} to="/Teacupdesign/login"> Login </Nav.Link>
                      <Nav.Link as={Link} to="/Teacupdesign/register"> Register </Nav.Link>
                    </>
                  )}
                  {token && (
                    <>
                      <Nav.Link as={Link} to="/Teacupdesign/product"> Product </Nav.Link>
                      <Nav.Link as={Link} to="/Teacupdesign/profile"> Profile </Nav.Link>
                      <Nav.Link as={Link} to="/Teacupdesign/logout"> Logout </Nav.Link>
                    </>
                  )}
                </>
              )}
              <Nav.Link as={Link} to="/Teacupdesign/contact"> Contact</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
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