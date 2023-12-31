import React from 'react'
import './testimonials.css';
import { RiStarLine } from "react-icons/ri";
import avatar1 from '../../img/avatar-1.svg';
import avatar2 from '../../img/avatar-2.svg';
import avatar3 from '../../img/avatar-3.svg';
import avatar4 from '../../img/avatar-4.svg';



const list_testimonials = [
  {id:1, name:"Mary", picture:avatar1, review:"This restaurant is so wonderful I want to go back the very next day", rating:5},
  {id:2, name:"Sonia", picture:avatar3, review:"Smoky, slow-cooked barbecue that’s worth seeking out", rating:4},
  {id:3, name:"Joaquin", picture:avatar2, review:"A delicious taste of  Indo Chinese dishes", rating:3},
  {id:4, name:"Freddy", picture:avatar4, review:"This restaurant runs like a machine but that takes a certain amount of the magic", rating:5}
]

const Testimonial =({name, picture, review, rating})=>{
  let starts = [];
  for(let i=0; i < 5; i++){

    if(i < rating){
      starts.push(<RiStarLine className='star-color' key={i}/>);
    }else{
      starts.push(<RiStarLine key={i}/>);
    }
  }

  return(
    <div className='testimonial'>
      <p className='testimonial-rating'>{
        [...starts]
        }</p>
      <div className='testimonial-perfil'>
         <img src={picture}alt='img'></img>
        <p>{name}</p>
      </div>
      <p className='testimonial-review'>{review}</p>
    </div>
  )
}

const Testimonials = () => {
  return (
    <section className='testimonials padding-space'>
      <h2>
      Testimonials
      </h2>
      <div className='testimonials-container'>
        {
          list_testimonials.map((data)=>{
            return <Testimonial {...data} key={data.id}/>
          })
        }
      </div>
    </section>
  )
}

export default Testimonials