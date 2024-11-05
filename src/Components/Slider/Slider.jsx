// src/Components/Slider/Slider.jsx
import React from 'react';
import './Slider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import grid1 from '../../assets/grid_gal1.jpg';
import grid2 from '../../assets/grid_gal2.jpg';
import grid3 from '../../assets/grid_gal3.jpg';
import grid4 from '../../assets/grid_gal4.jpg';
import grid5 from '../../assets/grid_gal5.jpg';

const Slider = () => {
     const images = [
        { src: grid1, name: "Black Coffee" },
        { src: grid2, name: "Latte" },
        { src: grid3, name: "Cappucino" },
        { src: grid4, name: "Iced Coffee" },
        { src: grid5, name: "Espresso" }
      ];

    return (
        <div className="slider">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={3}
                loop={true}
                
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className="slide">
                        <img src={image.src} alt={`Slide ${index}`}  />
                        <span> {image.name} </span>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;
