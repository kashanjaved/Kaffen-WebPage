import React from 'react';
import './Booking.css'
import cta_bg from '../../assets/cta_bg.jpg'



const Booking = () => {

    return (
        <div className='booking'>
           <div className="booking-left">
            <p>Need a Table On Coffee House</p>
            <h1>Booking Table For Your & Family Members</h1>
           </div>

           <div className="booking-right">
               <button>BOOKING TABLE</button>
           </div>
        </div>
    )

}

export default Booking;