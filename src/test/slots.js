import { useReducer } from "react";
import availableSlots from "../components/booking-table/data";


export const Slots = ()=>{
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

   return {availableTimes, updateTimes};

}