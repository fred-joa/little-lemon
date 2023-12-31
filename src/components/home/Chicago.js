import React from 'react';
import './chicago.css';
import picture1 from '../../img/Mario and Adrian A.jpg';
import picture2 from '../../img/Mario and Adrian b.jpg';


const Chicago = () => {
  return (
    <section>
      <div className='chicago padding-space'>
        <div className='chicago-content'>
          <h2 className='chicago-content-title'>Little Lemon</h2>
          <p className='chicago-content-subtitle'>Chicago</p>
          <p className='chicago-content-description'>We are a family owned
            Mediterranean restaurant,
            focused on traditional
            recipes served with a modern
            twist. We are a family owned
            Mediterranean restaurant,
            focused on traditional
            recipes served with a modern
            twist.</p>
        </div>
        <div className='chicago-pictures'>
          <div className='img-1'><img src={picture1} alt='1'></img></div>
          <div className='img-2'><img src={picture2} alt='2'></img></div>
        </div>
      </div>
    </section>
    
  )
}

export default Chicago