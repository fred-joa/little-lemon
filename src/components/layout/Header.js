import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
const Header = () => {
  return (
    <header className='header padding-sides' data-testid={"heading"}>
      <div className='header-title'>
            <h1>Little Lemon</h1>
            <p>Chicago</p>
      </div>
    </header>
  )
}

export default Header