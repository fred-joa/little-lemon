import React from 'react'
import './header.css';
import restaurant from '../img/restauranfood.jpg'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header padding-space'>
      <div className='header-container__title'>
            <h1>Little Lemon</h1>
            <p>Chicago</p>
            
          </div>
      {<div className='header-container'>
        <div className='header-container__description'>
          <p>We are a family owned Mediterranean restaurant, focused on traditional
            recipes served with a modern
            twist.</p>
          
          <button className='btn-link' type='button'><Link to="/reserve-table">Reserve a Table</Link></button>
        </div>
        <div className='header-image'>
          <img width={'100'} src={restaurant} alt='restaurant'></img>
        </div>
      </div>}
        
      
    </header>
  )
}

export default Header