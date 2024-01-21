import React, { useState } from 'react'

const About = () => {

  const [number, setNumber] = useState(1);
  function increment(){
    setNumber((prevNumber)=>prevNumber + 1);
  }


  return (

    <div>
      <h1 data-testid="currentNumber">{number}</h1>
      <button data-testid="addOne" type='button' onClick={increment}>Add one</button>

    </div>
  )
}

export default About