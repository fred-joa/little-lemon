import React, { useReducer, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from '../home/HomePage';
import BookingPage from '../booking-table/BookingPage';
import ConfirmedBooking from '../booking-table/ConfirmedBooking';
import { fetchAPI, submitAPI } from '../../utils/data';


const Main = () => {
  const [tableBooked, setTableBooked]= useState({});
  const navigate = useNavigate();

  const submitForm = (formData) =>{
    console.log("data: ");
    console.log(formData);
    if(submitAPI(formData)){
      setTableBooked(formData); 
      console.log("submited ok !");
      navigate("/confirmed-booking");
    }else{
      console.log("No submited");
      return false;
    }
    return true
  }

let initializeTimes = fetchAPI(new Date().getDate());

const updateTimes = (state, date)=>{
  console.log("fetch dates");
  const slots = fetchAPI(date);
  return slots;
}

const [availableTimes, setAvailableTimes] = useReducer(updateTimes,initializeTimes)

  return (
    <main>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/online-menu' element={<HomePage  />}></Route>
        <Route path='/booking-page' element={<BookingPage availableTimes = {availableTimes} setAvailableTimes = {setAvailableTimes} submitForm = {submitForm}/>}></Route>
        <Route path='/confirmed-booking' element={<ConfirmedBooking tableBooked={tableBooked}/>}></Route>
      </Routes>
    </main>
  )
}

export default Main