import React from 'react'
import './Home.css'
import greatCoffee from '../../assets/great-coffee.jpg'
import londonCoffee from '../../assets/london-coffee.jpg'
import parisCoffee from '../../assets/paris-coffee.jpg'


import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const images = [
    { src: greatCoffee, heading: 'WELCOME TO THE KAFFEN', content: 'Enjoy the \n Best Coffee' , buttonText: 'Explore More>',  buttonText2: 'Get Dilvery>' },
    { src: londonCoffee, heading: 'WELCOME TO THE KAFFEN' , content: 'The London \n Coffee House', buttonText: 'Explore More>', buttonText2: 'Get Dilvery>'  },
    { src: parisCoffee, heading: 'WELCOME TO THE KAFFEN' , content: 'The Paris \n Coffee House', buttonText: 'Explore More>', buttonText2: 'Get Dilvery>'  }
];

const Home = () => {
    return (
        <div className='home' id="home" >
            <AutoplaySlider
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={6000}
            >
              { images.map ((image, index) => (
                 <div key={index} data-src={image.src} className='slide'  > 
                 <div className='content-overlay'>
                    
                    <p> {image.heading}</p>
                    <h1> {image.content} </h1>
                    <button> {image.buttonText} </button>
                    <button className='button2'> {image.buttonText2} </button>

                 </div>

                 </div>

              
              ))}
            </AutoplaySlider>
        </div>
    )
}

export default Home;