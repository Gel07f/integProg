import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './MultiCarousel.css';
import Portfolio from '../Images/logo.png';
import Works1 from '../Images/atm.PNG';
import Works2 from '../Images/automotive.PNG';
import Works3 from '../Images/Fuentebella_phone.png';
import Works4 from '../Images/code.PNG';
const Photos = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="Carousel">
      <Carousel responsive={responsive}>
        <div>
        <img src={Portfolio} alt="logo.png" />
        </div>
        <div>
          <img src={Works1} alt="atm.PNG" />
        </div>
        <div>
          <img src={Works2} alt="automotive.PNG" />
        </div>
        <div>
          <img src={Works3} alt="Fuentebella_phone.png" />
        </div>
        <div>
          <img src={Works4} alt="code.PNG" />
        </div>
      </Carousel>
    </div>
  );
};

export default Photos;
