import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./carousel.css"

function CarouselComponent() {
    return (
            <Carousel className="carousel" autoplay infiniteLoop transitionTime="100" showIndicators={false} showThumbs={false} showStatus={false}>
                <div>
                    <img src="assets/demoday-1.jpg" className="carousel-img"/>
                </div>
                <div>
                    <img src="assets/demoday-2.jpg"className="carousel-img" />
                </div>
                <div>
                    <img src="assets/cubstart-discussion.jpg" className="carousel-img"/>
                </div>
            </Carousel>
        );
};

export default CarouselComponent;


