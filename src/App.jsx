import React from 'react';
import './App.css';
import Envato from './Components/Envato/Envato';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Category from './Components/Category/Category';
import Choose from './Components/Choose/Choose';
import Slider from './Components/Slider/Slider';
import Feedback from './Components/Feedback/Feedback';
import Achievement from './Components/Achievements/Achievement';
import Blogs from './Components/Blogs/Blogs';
import Booking from './Components/Booking/Booking';
import Footer from './Components/Footer/Footer';





function App() {
  return (
    <>
  
      <Envato/>
      <Navbar/>
      <Home/>
      <About />
      <Services />
      <Category />
      <Choose />
      <Slider />
      <Feedback  />
      <Achievement />
      <Blogs />
      <Booking />
      <Footer />



    </>
  );
}

export default App;
