import React from 'react'
import { useState } from 'react';
import './bookingForm.css';
import { validateDate, occasions, validateNumberGuests } from '../../utils/data';
import LineProcess from '../../utils/LineProcess';

const BookingForm = ({setAvailableTimes, availableTimes, submitForm}) => {


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
    const [disableSubmit, setDisableSubmit] = useState(true);




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
           /*  console.log('date ?'); */
        }
        if(!timeOk || time === placeholderTime){
            passValidationForm = false;
            setErrorTime(placeholderTime);
            setTimeOk(false);
           /*  console.log(' time ?: ' + timeOk +" " + errorTime); */
        }
        if(!guestsOk){
            passValidationForm = false;
            setGuestsOk(false)
            setErrorGuests(placeHolderGuests);
           /*  console.log('guests ?' + guests); */
        }
        if(!occasionOk || occasion === placeholderOccasion){
            passValidationForm = false;
            setErrorOccasion(placeholderOccasion)
            setOccasionOk(false);
            console.log("select Oc: ");
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

      const fullDataLoaded = ()=>{
        let result = false;
        if(dateOk){
            if(timeOk){
                if(guestsOk){
                    if(occasionOk){
                        return true;
                    }
                }
            }
        }
        return result;
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

                if(!validateDate(e.target.value)){
                    setDate("");
                    setDateOk(false);
                    e.target.value === ""? setErrorDate("Please select a date."):setErrorDate("Select a current or greater date...")
                }else{
                    setErrorDate("");
                    setDateOk(true);
                    setDate(e.target.value);
                    setAvailableTimes(e.target.value); 
                    /* fullDataLoaded(); */
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
                    <select className='input' name='time'  data-testid="select-time" onChange={(e)=>{
                        if(e.target.value === "" || e.target.value === placeholderTime){
                            setTimeOk(false);
                            setTime("");
                            setErrorTime(placeholderTime);
                            console.log(errorTime);
                        }else{
                            setTimeOk(true)
                            setErrorTime("");
                            setTime(e.target.value);
                            /* fullDataLoaded(); */
                        }
                        
                        }} required >
                        <option key="time">{placeholderTime}</option>
                        { availableTimes && availableTimes.length > 0 && (
                            availableTimes.map((item) =>{
                                /* console.log(item); */
                            return <option value={item.time} key={item.time}> {item.time}</option>
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

                        if(!validateNumberGuests(e.target.value)){
                            setGuestsOk(false);
                            setErrorGuests(placeHolderGuests);
                            setGuests(0);
                        }
                        else{
                            setGuestsOk(true);
                            setErrorGuests("");
                            setGuests(e.target.value.trim());
                            /* fullDataLoaded(); */
                        }
                        }} required/>
                    <p className='error'>{!guestsOk && errorGuests}</p>
                </div>

            </div>
            <div className='booking-form__field'>
                <label className='label' htmlFor="occasion">Occasion <span className=''> *</span></label>
                <div className='booking-form__input'>
                    <select className='input' id="occasion" onChange={(e)=>{

                        if(e.target.value === "" || e.target.value === placeholderOccasion){
                            setOccasionOk(false);
                            setErrorOccasion(placeholderOccasion);
                            setOccasion("");
                        }else{
                            setOccasionOk(true);
                            setErrorOccasion("")
                            setOccasion(e.target.value);
                           /*  fullDataLoaded(); */
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
                <button className="btn-link" disabled={fullDataLoaded()? false:true} type="submit" >Make Your reservation</button>
            </div>
        </div>
    </form>
  )
}

export default BookingForm