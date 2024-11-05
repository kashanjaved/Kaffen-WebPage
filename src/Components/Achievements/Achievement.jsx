import React from 'react';
import './Achievement.css';

const Achievement = () => {
    return (
        <div className='achievement'>
           <div className="a-clients">
            <h1>256+</h1>
            <div className='a-clients-text'>
                <p1>Premium Clients</p1>
                <p>Sed ut perspiciatis unde</p>
            </div>
           </div>

           <div className="a-clients">
            <h1>362+</h1>
            <div className='a-clients-text'>
                <p1>Expert Members</p1>
                <p>Sed ut perspiciatis unde</p>
            </div>
           </div>

           <div className="a-clients">
            <h1>753+</h1>
            <div className='a-clients-text'>
                <p1>Winning Awards</p1>
                <p>Sed ut perspiciatis unde</p>
            </div>
           </div>

        </div>
    )
}

export default Achievement;