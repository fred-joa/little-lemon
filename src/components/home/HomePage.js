import React from 'react'
import './homePage.css';
import Specials from './Specials';
import Chicago from  './Chicago';
import Testimonials from './Testimonials';
import { Link } from 'react-router-dom';
import restaurant from '../../assets/restauranfood.jpg'



const HomePage = () => {
  return (
    <div className='home'>
        <div className='padding-sides subheading'>
            <div className='subheading-description'>
                <p>We are a family owned Mediterranean restaurant, focused on traditional
                recipes served with a modern
                twist.</p>
                <button className='btn-link' type='button'><Link to="/booking-page">Reserve a Table</Link></button>
            </div>
            <div className='subheading-image'>
              <img src={restaurant} alt='restaurant'></img>
            </div>
        </div>
        <Specials />
        <Testimonials />
        <Chicago />
    </div>
  )
}

export default HomePage