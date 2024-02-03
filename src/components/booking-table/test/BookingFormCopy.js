import React, { useReducer } from 'react'
import { useState } from 'react';
import '../bookingForm.css';
import { validateDate, occasions, validateNumberGuests , fetchAPI, submitAPI } from '../../../utils/data';
import LineProcess from '../../../utils/LineProcess';
/* import { useNavigate } from 'react-router-dom'; */

const BookingFormCopy = (props) => {
        /*
         start code from Parent component Main -------------------
        */
         const [tableBooked, setTableBooked]= useState({});
        /*  const navigate = useNavigate(); */
         const submitForm = (formData) =>{
           console.log("data: ");
           console.log(formData);
           if(submitAPI(formData)){
             setTableBooked(formData); 
             console.log("submited ok !");
             /* navigate("/confirmed-booking"); */
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
       
       /* End code from parent component ------------------------ */



    //extra
    const placeholderTime = "-- Please select a time --";
    const placeholderOccasion = "-- Please select a Occasion --";
    const placeHolderGuests = 'Please enter a number "1-10"';
    const [errorDate, setErrorDate]=  useState("");
    const [errorTime, setErrorTime] = useState("");
    const [errorOccasion, setErrorOccasion] = useState("");
    const [errorGuests, setErrorGuests] = useState("");

    const [dateOk, setDateOk]= useState(false)
    const [timeOk, setTimeOk] = useState(false);
    const [occasionOk, setOccasionOk] =  useState(false);
    const [guestsOk, setGuestsOk] = useState(false);




    let formData = {date:"",time:"",guests:"",occasion:""};
    //States from component BookingForm
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(0);
    const [occasion, setOccasion] = useState("");

    //Validation form
    function validateForm(){
        let passValidationForm = true;
        if(dateOk !== true){
            passValidationForm = false;
            console.log('date ?');
        }
        if(!timeOk || time === placeholderTime){
            passValidationForm = false;
            setErrorTime(placeholderTime);
            setTimeOk(false);
            console.log(' time ?: ' + timeOk +" " + errorTime);
        }
        if(!guestsOk){
            passValidationForm = false;
            setGuestsOk(false)
            setErrorGuests(placeHolderGuests);
            console.log('guests ?' + guests);
        }
        if(!occasionOk || occasion === placeholderOccasion){
            passValidationForm = false;
            setErrorOccasion(placeholderOccasion)
            setOccasionOk(false);
            console.log('occasion ?');
        }
        return passValidationForm
    }
    function loadData(){
        formData.date = date;
        formData.time = time;
        formData.guests = guests;
        formData.occasion = occasion;
    }


    const handleSubmit = (e)=>{
        //Validate
        if(validateForm()){
            loadData();
            if(submitForm(formData) === true){
                setDate("");
                setTime("");
                setGuests(0);
                setOccasion("");
                e.preventDefault();
            }
        }
        e.preventDefault();
      }



  return (
    <form className='booking-form padding-sides' onSubmit={handleSubmit}>
        <LineProcess point={1}></LineProcess>
        <div className='container-form'>
        <h2>Book your table Now!</h2>
        <p className='msg-required'>Fields with * are required </p>
        <div className='booking-form__field'>
            <label className='label' htmlFor="res-date">Choose date <span className=''>*</span></label>
            <div className='booking-form__input'>
            <input className='input' name='date' type="date" value={date} data-testid="select-date" onChange={(e)=>{
            setDate(e.target.value);
            setAvailableTimes(e.target.value);
            if(!validateDate(e.target.value)){
                setDateOk(false);
                e.target.value === ""? setErrorDate("Please select a date."):setErrorDate("Select a current or greater date...")
            }else{
                setErrorDate("");
                setDateOk(true);
            }
            }
            } required/>
                <p className='error'>{
                    !dateOk && errorDate
                }</p>
            </div>
        </div>
        <div className='booking-form__field'>
            <label className='label' htmlFor="res-time">Choose time <span className=''> *</span></label>
            <div className='booking-form__input'>
                <select className='input' value={time} name='time'  data-testid="select-time" onChange={(e)=>{
                    console.log("Change time");
                    setTime(e.target.value);
                    if(e.target.value === "" || e.target.value === placeholderTime){
                        setTimeOk(false);
                        setErrorTime(placeholderTime);
                        console.log(errorTime);
                    }else{
                        setTimeOk(true)
                        setErrorTime("");
                    }
                    }} required >
                    <option key="time">{placeholderTime}</option>
                    { availableTimes && availableTimes.length > 0 && (
                        availableTimes.map((item,key) =>{
                            /* console.log(item); */
                        return <option data-testid={"time"+ key} value={item.time} key={item.time}> {item.time}</option>
                        })
                        )
                    }
                </select>
                <p className='error'>{!timeOk && errorTime}</p>
            </div>

        </div>
        <div className='booking-form__field'>
            <label className='label' htmlFor="guests">Number of guests (1-10) <span className=''> *</span></label>
            <div className='booking-form__input'>
                <input className='input' type="number" placeholder="0" value={guests} min={1} max={10}  id="guests" onChange={(e)=>{
                    setGuests(e.target.value.trim());
                    if(!validateNumberGuests(e.target.value)){
                        setGuestsOk(false);
                        setErrorGuests(placeHolderGuests);
                    }
                    else{
                        setGuestsOk(true);
                        setErrorGuests("");
                    }
                    }} required/>
                <p className='error'>{!guestsOk && errorGuests}</p>
            </div>

        </div>
        <div className='booking-form__field'>
            <label className='label' htmlFor="occasion">Occasion <span className=''> *</span></label>
            <div className='booking-form__input'>
                <select className='input' id="occasion" onChange={(e)=>{
                    setOccasion(e.target.value);
                    if(e.target.value === "" || e.target.value === placeholderOccasion){
                        setOccasionOk(false);
                        setErrorOccasion(placeholderOccasion);
                    }else{
                        setOccasionOk(true);
                        setErrorOccasion("")
                    }
                }} required>
                    <option  key="occasion">{placeholderOccasion}</option>
                    {
                        occasions.map((item)=>{
                           return <option key={item.name}>{item.name}</option>
                        })
                    }
                </select>
                <p className='error'>{!occasionOk && errorOccasion}</p>
            </div>
        </div>
        <div className='booking-form__submit'>
            <button className='btn-link' type="submit" >Make Your reservation</button>
        </div>
        </div>
    </form>
  )
                }

export default BookingFormCopy;