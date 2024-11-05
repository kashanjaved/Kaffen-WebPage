import React from 'react'
import './Footer.css'
import logo from '../../assets/logo (1).png'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import menu1 from '../../assets/menu1.jpg'
import menu2 from '../../assets/menu2.jpg'
import menu3 from '../../assets/menu3.jpg'
import menu4 from '../../assets/menu4.jpg'
import menu5 from '../../assets/menu5.jpg'
import menu6 from '../../assets/menu6.jpg'

const Footer = () => {
    return (
        <div className='footer-container' id='contact' >
        <div className="footer">
           <div className="footer-one">
            <img src={logo} alt="" />
           </div>

           <div className="footer-two">
            <h2>Working Hours</h2>
            <ul>
                <li>
                    Sunday - Thursday  <br />
                    <span>08:00AM - 09:00PM</span>
                </li>
                <li>
                     Only Friday <br />
                    <span>03:00PM - 09:00PM</span>
                </li>
            </ul>
                <h4>Saturday Close</h4>
           </div>
            
            <div className="footer-three">
                <h2>Contact Us</h2>
                <p>
                <IoLocationOutline /> Location: <br />
                    <span>55 Main Street, New York</span>
                </p>

                <p>
                <MdOutlineEmail /> Email Address: <br />
                    <span>kaffendev@gmail.com</span>
                </p>

                <p>
                <MdOutlineLocalPhone />  Phone Number: <br />
                    <span> +012 (345) 678 99 </span>
                </p>
            </div>

            <div className="footer-four">
                <h2>Gallery</h2>
                <div className='footer-four-images'>
                <img src={menu1} alt="" />
                <img src={menu2} alt="" />
                <img src={menu3} alt="" /> 
                <img src={menu4} alt="" />
                <img src={menu5} alt="" />
                <img src={menu6} alt="" />
                </div>
            </div>
            <hr style={{ border: 'none', height: '2px', backgroundColor: '#b99272', margin: '20px 0' }} />
           
        </div>
       

        <div className="footer-bottom">
        
            <p> Copyright © 2022 Kaffen. All Rights Reserved. </p>
        </div>
        </div>
    )
}

export default Footer;