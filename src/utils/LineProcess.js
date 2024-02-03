import React from 'react'
import './lineProcess.css';

const LineProcess = ({point}) => {
  return (
    <div className='process-container'>
            <div className='puntos'> <div className= {"punto active"}></div> <div className={point===2?"punto active":"punto"}></div> </div>
            <div className='lineContainer'><div className='lineCross'></div></div>
    </div>
  )
}

export default LineProcess