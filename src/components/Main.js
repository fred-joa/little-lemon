import { useReducer, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./home/Home";
import About from "./about/About";
import Menu from "./menu/Menu";
import Login from "./login/Login";
import Reservations from './reservations/Reservations'
import OrderOnline from './order-online/OrderOnline'
import BookingTable from "./booking-table/BookingTable";
import availableSlots from "./booking-table/data";

function Main (){
 
  let initializeTimes = [];

  const updateTimes =(state, action)=>{
    state.splice(0,state.length, ...initializeTimes);//Initialize state
    availableSlots.filter(item=>{
      if(item.date === action.date){
        return state.splice(0,state.length, ...item.slots);
      }
    });
    return state;
  }
   const [availableTimes, setAvailableTimes] = useReducer(updateTimes,initializeTimes);

    return (<main className="">
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/menu' element={<Menu/>}></Route>
          <Route path='/reservations' element={<Reservations/>}></Route>
          <Route path='/order-online' element={<OrderOnline/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route  path='/reserve-table' element={<BookingTable availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />}></Route>
      </Routes>
    </main>)
}

export default Main;