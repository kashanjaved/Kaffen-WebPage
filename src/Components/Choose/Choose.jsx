import React from 'react'
import './Choose.css'
import chooseImg from '../../assets/choose_img.jpg'
import chooseIcon1 from '../../assets/choose_icon1.png'
import chooseIcon2 from '../../assets/choose_icon2.png'



const Choose = () => {
    return (
        <div className="choose" id='about' >
             <div className="choose-left">
                 <img src={chooseImg} alt="" />
             </div>
             <div className="choose-right">
                <p>WHY CHOOSE US</p>
                <h1>New London Coffee Founded <br /> For Extraordinary Test </h1>
                <p>Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae abillo inventore veritatis</p>
                <div className="choose-icons">
                        
                    <div className='c-icon-text-1'> 
                    <img src={chooseIcon1} alt="" />
                       <h1>Natural Coffee Beans</h1>
                       <p>Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque</p>
                    </div>

                    <div className="c-icon-text">
                    <img src={chooseIcon2} alt="" />
                        <h1>100% ISO Certification</h1>
                        <p>Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque</p>
                    </div>
                </div>
                <button>EXPLORE MORE  </button>
                
                </div>
        </div>
    )
}

export default Choose;