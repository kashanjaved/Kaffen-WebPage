import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo (1).png';
import { Link as ScrollLink} from 'react-scroll';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="navbar">
            <div className="n-right">
                <img src={logo} alt="Logo" />
            </div>

            
            <div className="hamburger" onClick={toggleMenu}>
                ☰
            </div>

            
            <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
                <li>
                    <ScrollLink to="home" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Home</ScrollLink>
                </li>
                <li>
                    <ScrollLink to="about" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>About</ScrollLink>
                </li>
                <li>
                    <ScrollLink to="services" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Services</ScrollLink>
                </li>
                <li>
                    <ScrollLink to="feedback" smooth={true} duration={500} onClick={() =>  setMenuOpen(false)}>Feedback</ScrollLink>
                </li>
                <li>
                    <ScrollLink to="contact" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Contact</ScrollLink>
                </li>
            </ul>

            <div className="n-right">
                
                <button>
                    BOOK A TABLE
                </button>
               
            </div>
        </div>
    );
};

export default Navbar;
