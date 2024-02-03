import React from 'react';
import './specials.css';
import { Link } from 'react-router-dom';
import { specialFoods } from '../../utils/data'

const Special = ({title,picture,price,description,}) => {
  return (
    <div className='card' >
      <div className='card-image'>
        <img src={picture} alt={title}></img>
      </div>
      <div className='card-content'>
        <div className='card-content__title-price'>
          <h3 className='card-content__title'>{title}</h3>
          <p className='card-content__price'>{price}</p>
        </div>
        <p className='card-content__description'>{description}</p>
      </div>
      <div className='card-orderDelivery'>
        <Link to="/online-menu">Order a delivery</Link>
      </div>
    </div>
  )
}
const Specials = () => {

  return (
    <div id='specials' className='padding-sides'>
      <div className='specials-header'>
        <h2>This week Specials !</h2>
        <button className='btn-link' type='button'><Link to="/online-menu">Online Menu</Link></button>
      </div>
      <div className='special-container'>
        {
          specialFoods.map((food)=>{
           return <Special {...food} key={food.title} ></Special>
          })
        }
      </div>
    </div>
  )
}

export default Specials