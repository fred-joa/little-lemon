import React from 'react'
import LineProcess from '../../utils/LineProcess'
import './confirmedBooking.css';
import { GrStatusGood } from "react-icons/gr";

const ConfirmedBooking = ({tableBooked}) => {
  return (
    <div className='confirmed-booking padding-sides'>
        <LineProcess point={2}></LineProcess>
        <div className='confirmed-booking__destails'>
            <p>Date: {tableBooked.date}, Time: {tableBooked.time}, Guests: {tableBooked.guests}, Occasion: {tableBooked.occasion} </p>
        </div>
        <h1 className='confirmed-booking__title'>Your table has been confirmed Successfully</h1>
        <div className='confirmed-booking__logo'>
            <GrStatusGood  size={100} color='var(--color-text)'/>
        </div>
        <p className='confirmed-booking__thank'>Thank you! We sent you a confirmation to your email </p>
    </div>
  )
}

export default ConfirmedBooking