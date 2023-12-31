import { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./home/Home";
import About from "./about/About";
import Menu from "./menu/Menu";
import Login from "./login/Login";
import Reservations from './reservations/Reservations'
import OrderOnline from './order-online/OrderOnline'

function Main (){
    return (<main className="">
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/menu' element={<Menu/>}></Route>
        <Route path='/reservations' element={<Reservations/>}></Route>
        <Route path='/order-online' element={<OrderOnline/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </main>)
}

export default Main;