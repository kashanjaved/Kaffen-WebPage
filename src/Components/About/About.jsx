import React from 'react'
import './About.css'
import banPerson from '../../assets/ban-person.png'
import aboutR from '../../assets/aboutR.png'

const About = () => {

    return (
        <div className="about">
            <div className="a-left">
            <div className="a-services">
                <p> ABOUT US </p>
                <h1>Organic & Fresh Coffee <br /> Provider Center </h1>
                <p> Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque 
                    laudantium, totam rem aperiam eaque ipsa quae abillo inventore veritatis et quasi 
                    architecto beatae vitae dicta sunt explicabo. Nemo enim ipsluptatem quia voluptas 
                    sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione </p>
            </div>
            <div className="a-banner">
                <img src={banPerson} alt="" />
                <p> Lorem, ipsum dolor sit amet <br /> consectetur adipisicing elit <br /> dolor sit amet</p>
            </div>
            </div>

            <div className="a-right">
                <img src={aboutR} alt="" />
            </div>
        </div>
    )
}

export default About;