import React from 'react'
import './Feedback.css'
import feedbackBG from '../../assets/feedbackBG.jpeg'
import rev1 from '../../assets/rev1.jpg'
import rev2 from '../../assets/rev2.jpg'
import rev3 from '../../assets/rev3.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { FaStar } from "react-icons/fa";


const Feedback = () => {
   const data = [
  { img: rev1 , text: " lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet " , name: "Fredrick S. France" , title: "Web Designer"},
   { img:rev2 , text: "lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet " , name: "James M. London" , title: "Lawyer"},
   { img:rev3 , text: "lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet " , name: "Olivia D. New York" , title: "Dentist"},
   { img:rev1 , text: "lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet " , name: "Fredrick S. France" , title: "Web Designer"},
   { img:rev2 , text: "lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet " , name: "James M. London" , title: "Lawyer"},
   { img:rev3 , text: "lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet " , name: "Olivia D. New York" , title: "Dentist"}
   ];
   
   
    return (
        <div className='feedback' id='feedback' >
           <div className="f-top">
            <p>CUSTOMER FEEDBACK</p>
            <h1>What Our Clients Say</h1>
           </div>
           <div className="f-swiper">
               <Swiper
               modules={[Navigation, Pagination]}
               spaceBetween={30}
               slidesPerView={3}
               pagination={{ clickable: true }}
               >
                   {data.map((item, index) => (
                       <SwiperSlide key={index}>
                           <div className="f-card">
                               <div className='stars'>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                               </div>
                               <img src={item.img} alt="review" />
                               <p>{item.text}</p>
                               <h2>{item.name}</h2>
                               <h3>{item.title}</h3>
                           </div>
                       </SwiperSlide>
                   ))}
               </Swiper>
           </div>
        </div>
    )

}

export default Feedback;