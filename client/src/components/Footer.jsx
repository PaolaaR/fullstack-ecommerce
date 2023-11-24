import 'font-awesome/css/font-awesome.min.css';
import { Container, Row, Col } from 'react-bootstrap';

export const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3">
      <Container>
        <Row className="d-flex align-items-center justify-content-center">
          
          <Col md={6}>
            <p>&copy; {new Date().getFullYear()} TEACUPDESIGN </p>
            <p> Phone: +56 9 1234 5678</p>
            <p> Business Hours: 10:00 - 21:00 hrs</p>
            <p> Email: teacupdesign@gmail.com</p>
            <p> Follow Us!</p>
            <div>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook fa-2x"></i>
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-instagram fa-2x"></i>
              </a>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-twitter fa-2x"></i>
              </a>
            </div>
          </Col>

        
          <Col md={6}>
            <p>Find Us!</p>
            <div id="map-container">
              <iframe
                title="Google Map"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                src={`https://www.google.com/maps/embed/v1/place?q=Geronimo%20de%20Alderete%20627%2C%20La%20Florida&key=AIzaSyDkhw2SoQWbmKjbUOnGAsJtcAgbw0tyWSg`}
                allowFullScreen
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};





