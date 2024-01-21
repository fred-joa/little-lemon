import React from 'react'
import { useState } from 'react';
import './booking-table.css'

const BookingTable = ({availableTimes, setAvailableTimes}) => {

  const [date, setDate] = useState("");
  const [time, setTime] = useState({});
  const [guests, setGuests] = useState(0);
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e)=>{
    setDate("");
    setTime("");
    setGuests(0);
    setOccasion("");
    e.preventDefault();
    
  }
  const showAvailableSlots = (e)=>{
    setDate(e.target.value);
    setAvailableTimes({date:date});
    console.log(date);
  }

  
  return (
    <form className='booking_form padding_section' onSubmit={handleSubmit}>
      <h1>Book Now</h1>
      <div className='booking_form-field'>
        <label className='label' htmlFor="res-date">Choose date</label>
        <input className='input' type="date" data-testid="res-date" onChange={(e)=>{
          setDate(e.target.value);
          setAvailableTimes({date:e.target.value});
          console.log(availableTimes);
        }
        }/>
      </div>
      <div className='booking_form-field'>
        <label className='label' htmlFor="res-time">Choose time <span className='resquested'>*</span></label>
        <select className='input'  data-testid="res-time" onChange={(e)=>setTime(e.target.value)} >
        
        { availableTimes && availableTimes.length > 0 && (
            availableTimes.map(item =>{
              return <option value={item.time} key={item.time}> {item.time}</option>
            }))
        }
        </select>
      </div>
      <div className='booking_form-field'>
        <label className='label' htmlFor="guests">Number of guests</label>
        <input className='input' type="number" placeholder="1" min="1" max="10" id="guests" onChange={(e)=>setGuests(e.target.value)}/>
      </div>
      <div className='booking_form-field'>
        <label className='label' htmlFor="occasion">Occasion</label>
        <select className='input' id="occasion" onChange={(e)=>setOccasion(e.target.value)}>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
      </div>
      <div className='booking_form-submit'>
        <button className='' type="submit" >Make Your reservation</button>
      </div>
      
    </form>
  )
}

export default BookingTable;