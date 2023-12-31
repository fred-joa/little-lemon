import React from 'react';
import './specials.css';
import greek from '../../img/greek salad.jpg';
import brushetta from '../../img/bruchetta.svg';
import lemon from  '../../img/lemon dessert.jpg'
import { MdOutlineDeliveryDining } from "react-icons/md";

let specialFoods=[
  {title:"Greek Salada", picture:greek, price:"$ 12", description:"The famous greek salad of crispy lettuce, peppers, olives and our "},
  {title:"Brushetta", picture:brushetta, price:"$ 15", description:"The famous greek salad of crispy lettuce, peppers, olives and our "},
  {title:"Lemon Dessert", picture:lemon, price:"$ 25", description:"Use the order property to sort the flex items as you like: lettuce, peppers, olives and our"}
];

/* Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta. */



const Special = ({title,picture,price,description,})=>{
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
        <button className='card-content__btn' type='button'>Order a delivery  <MdOutlineDeliveryDining size={27} /> </button>
      </div>
    </div>
  )
}


const Specials = () => {

  return (
    <div id='specials' className='padding-space'>
      <div className='specials-header'>
        <h2>This week Specials !</h2>
        <button className='btn' type='button'>Online Menu</button>
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