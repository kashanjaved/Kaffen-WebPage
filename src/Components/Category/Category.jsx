import React from 'react'
import './Category.css'
import categoryBG from '../../assets/categoryBg.jpg'
import menuBG from '../../assets/menu_logo.png'
import menu1 from '../../assets/menu1.jpg'
import menu2 from '../../assets/menu2.jpg'
import menu3 from '../../assets/menu3.jpg'
import menu4 from '../../assets/menu4.jpg'
import menu5 from '../../assets/menu5.jpg'
import menu6 from '../../assets/menu6.jpg'




const Category = () => {
    const menuItems = [
        { id: 1, img: menu1,  name: 'Americano Espresso' , title: '2/3 espresso, 1/3 streamed milk', price: '.............. $4.99' },
        { id: 2, img: menu2,  name: 'Espresso Coffee' , title: '2/3 espresso, 1/3 streamed milk', price: '.............. $4.99' },
        { id: 3, img: menu3,  name: 'Barista Pouring Syrup' , title: '2/3 espresso, 1/3 streamed milk', price: '.............. $4.99' },
        { id: 4, img: menu4,  name: 'Cold-Coffee' , title: '2/3 espresso, 1/3 streamed milk', price: '.............. $4.99' },
        { id: 5, img: menu5,  name: 'Cappuccino Arabica' , title: '2/3 espresso, 1/3 streamed milk', price: '.............. $4.99' },
        { id: 6, img: menu6,  name: 'Milk Cream Coffee' , title: '2/3 espresso, 1/3 streamed milk', price: '.............. $4.99' }

    ]
    
    
    return (
        <div className='category' id='menu' >


            <div className='c-heading'>
              <p>CHOOSE BEST COFFEE</p>
              <h1>Kaffen Popular Coffee Menu</h1>
             
              <div className="c-menu">
                <div className='c-menu-list' >
              {menuItems.map((item) => (
                <div className='c-menu-item' key={item.id}>
                  <img src={item.img} alt={item.title} />
                 <div className='item-text'>
                    <h2>{item.name}</h2>
                  <h3>{item.title}</h3>
                  <p>{item.price}</p>
                  </div>
                </div>
              ))}
              </div>
              </div>

                </div>
        </div>
    )
}

export default Category;