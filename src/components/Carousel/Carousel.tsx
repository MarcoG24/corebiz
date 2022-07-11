import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../assets/image-1.jpg'
import image2 from '../../assets/image-2.jpg'
import './Carousel.scss'

function CarouselFade() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 image-carousel"
          src={image1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 image-carousel"
          src={image2}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;