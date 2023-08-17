import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Slider.css'; 
import pic1 from './pic1.jpg';
import pic2 from './pic2.jpg';
import pic3 from './pic3.jpg';


const Slider = () => {
  return (
    <Carousel showArrows={true} showThumbs={true}>
      <div>
        <img src={pic1} alt="Slide 1" />
      </div>
      <div>
        <img src={pic2} alt="Slide 2" />
      </div>
      <div>
        <img src={pic3} alt="Slide 3" />
      </div>
    </Carousel>
  );
};

export default Slider;
