import React, { useState } from 'react';
import alexa1 from '../../img/homepage_carousel/alexa1.png';
import echoauto from '../../img/homepage_carousel/echo_auto.png';
import kidtablet from '../../img/homepage_carousel/kid_tablet.png';
import './AllProductsCarousel.css'

function Carousel() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [alexa1, echoauto, kidtablet];

    function previousImage() {
        setCurrentImageIndex(currentImageIndex - 1);
        if (currentImageIndex === 0) {
            setCurrentImageIndex(images.length - 1);
        }
    }

    function nextImage() {
        setCurrentImageIndex(currentImageIndex + 1);
        if (currentImageIndex === images.length - 1) {
            setCurrentImageIndex(0);
        }
    }

    return (
        <div className="carousel">
            <button onClick={previousImage} >&lt;</button>
            <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
            <button onClick={nextImage} className='carousel-button-next'>&gt;</button>
        </div>
    );
}

export default Carousel;
