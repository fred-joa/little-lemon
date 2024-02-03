import React from 'react'
import './chicago.css'
import {chicago} from '../../utils/data'

const Chicago = () => {
  const {title,address,description,pictures} = chicago;
  return (
    <section>
      <div className='chicago padding-sides'>
        <div className='chicago-text'>
          <h2 className='chicago-text__title'>{title}</h2>
          <h3 className='chicago-text__subtitle'>{address}</h3>
          <p className='chicago-text__description'>{description}</p>
        </div>
        <div className='chicago-pictures'>
          <div className='img-1'><img src={pictures.img1} alt='1'></img></div>
          <div className='img-2'><img src={pictures.img2} alt='2'></img></div>
        </div>
      </div>
    </section>
  )
}

export default Chicago