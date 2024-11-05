import React from 'react'
import './Services.css'
import resturantMenu from '../../assets/resturantMenu.jpg'
import coffeeMenu from '../../assets/coffeeMenu.jpg'
import foodServices from '../../assets/foodServices.jpg'

const Services = () => {
    return (
        <div className='services'>
            <div className="s-one">
                <img src={resturantMenu} alt="" />
                <div className="overlay">
                    <i className="icon-class">🍽️</i>
                    <span>Restaurant Menu</span>
                </div>
            </div>
            <div className="s-one">
                <img src={coffeeMenu} alt="" />
                <div className="overlay">
                    <i className="icon-class">☕</i>
                    <span>Coffee Menu</span>
                </div>
            </div>
            <div className="s-one">
                <img src={foodServices} alt="" />
                <div className="overlay">
                    <i className="icon-class">🍲</i>
                    <span>Food Services</span>
                </div>
            </div>
        </div>
    )
}

export default Services;