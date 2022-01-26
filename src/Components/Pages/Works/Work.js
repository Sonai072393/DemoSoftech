import React from "react";

//Carousel import
import Carousel from 'react-bootstrap/Carousel'

//image
import ckingtea from '../../UI/Img/ckingtea.com.png';
import apee from '../../UI/Img/screenshot2-300x146.png';
import cab from '../../UI/Img/screenshot3-300x146.png';


import './work.css';
const Work =()=>{
    return(
<div>
    <div className="header_container">
        <h1>Our featured works</h1>
        <h3>Take a look at how we solve challenges to meet project requirements ​</h3>
    </div>
    <Carousel>
  <Carousel.Item bsPrefix="carousel-item">
    <img
      className="d-block w-100"
      src={ckingtea}
      alt="First slide"
    />
    <Carousel.Caption bsPrefix="carousel-caption">
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={apee}
      alt="Second slide"
    />

    <Carousel.Caption bsPrefix="carousel-caption">
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={cab}
      alt="Third slide"
    />

    <Carousel.Caption bsPrefix="carousel-caption">
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
    );
}

export default Work;