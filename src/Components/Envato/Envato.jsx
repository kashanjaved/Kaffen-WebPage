import React from 'react'
import './Envato.css'
import envatoMarket from '../../Assets/envatoMarket.svg'

const Envato = () => {

    return (
        < div className="envato">
            <div className='e-logo'>
                <img src={envatoMarket} alt="" />
                </div> 

           
                <button className='e-btn'>Buy Now</button>
        

        </div>
    )

}

export default Envato;