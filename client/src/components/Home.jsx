import Carousel from 'react-bootstrap/Carousel';
import navidad from '../assets/Navidad.jpg';
import navidadFive from '../assets/NavidadFive.jpg';
import navidadThree from '../assets/NavidadThree.jpg';
import Product, { BestSellers } from './BestSellers';
import { Summer } from './Summer';


export const Home = () => {
  return (
    <div>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block mx-auto carousel-img"
          src={navidad}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Merry Christmas to All!</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mx-auto carousel-img"
          src={navidadFive}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Let's Put Up The Christmas Tree</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" d-block mx-auto carousel-img"
          src={navidadThree}
          alt="Third slide"
        />
        <Carousel.Caption>
         <strong>
         <h3>We Wish You a Colorful Christmas</h3>
          </strong> 
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <BestSellers />
    <Summer />
    </div>
    
  );
}