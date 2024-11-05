import React from 'react';
import './Blogs.css'
import latestBlog1 from '../../assets/latest_blog1.jpg'
import latestBlog2 from '../../assets/latest_blog2.jpg'
import latestBlog3 from '../../assets/latest_blog3.jpg'
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa";


const Blogs = () => {

    return (
        <div className="blogs">
            <div className="b-top">
                <p>Get Every Single Update</p>
                <h1>Read Some Latest Blog & News</h1>
            </div>

            <div className="blog-cards">
                <div className='b-card1' >
                    <img src={latestBlog1} alt="" />
                    <div className="b-card1-data">
                        <h1> SWR REACT HOOKS WITH NEXT INCREM ENTAL STATIIC REGENERATION </h1>
                        <p><FaRegCalendarAlt />25 SEPT 2021 <hr /> <FaRegComments /> Comments (7) </p>

                    </div>
                </div>
                <div className='b-card2' >
                    <img src={latestBlog2} alt="" />
                    <div className="b-card2-data">
                        <h1> DECISIONS FOR BUILDING FLEXIBLE COMPONENTS DEVTOOLS BROWSER </h1>
                        <p><FaRegCalendarAlt />25 SEPT 2021 <hr /> <FaRegComments /> Comments (7) </p>
                    </div>
                </div>
                <div className='b-card3' >
                    <img src={latestBlog3} alt="" />
                    <div className="b-card3-data">
                        <h1> SWR REACT HOOKS WITH NEXT INCREM ENTAL STATIIC REGENERATION </h1>
                        <p><FaRegCalendarAlt />25 SEPT 2021 <hr /> <FaRegComments /> Comments (7) </p>
                    </div>
                </div>

            </div>

         
                <button>View All</button>
        

        </div>
    )
}

export default Blogs;