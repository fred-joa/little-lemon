import React from 'react';
import './testimonials.css';
import {testimonials} from '../../utils/data';
import { RiStarLine } from "react-icons/ri";

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
      <div className='testimonial-rating'>
        {[...starts]}
      </div>
      <div className='testimonial-image'>
        <img src={picture}alt='img'></img>
      </div>
      <div className='testimonial-name'>
        <p>{name}.</p>
      </div>
      <div className='testimonial-review'>
        <p className='testim-review'>{review}</p>
      </div>
    </div>
  )
}

const Testimonials = () => {
  return (
    <section className='testimonials padding-sides'>
      <h2>
      Testimonials
      </h2>
      <div className='testimonials-container'>
        {
          testimonials.map((data)=>{
            return <Testimonial {...data} key={data.id}/>
          })
        }
      </div>
    </section>
  )
}

export default Testimonials




{/* <div className='mary'>
<h1>Mary es mi AMOR  solo con ella vivo la felicidad </h1>
<p>Mary & <span>Freddy</span></p>
</div> */}