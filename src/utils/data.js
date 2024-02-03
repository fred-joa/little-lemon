import greek from '../assets/greek salad.jpg';
import brushetta from '../assets/bruchetta.svg';
import lemon from  '../assets/lemon dessert.jpg'
//TEstimonials
import avatar1 from '../assets/avatar-1.svg';
import avatar2 from '../assets/avatar-2.svg';
import avatar3 from '../assets/avatar-3.svg';
import avatar4 from '../assets/avatar-4.svg';
//Chicago
import img1 from '../assets/Mario and Adrian A.jpg';
import img2 from '../assets/Mario and Adrian b.jpg';

export const specialFoods=[
  {title:"Greek Salada", picture:greek, price:"$ 12", description:"The famous greek salad of crispy lettuce, peppers, olives and our "},
  {title:"Brushetta", picture:brushetta, price:"$ 15", description:"The famous greek salad of crispy lettuce, peppers, olives and our "},
  {title:"Lemon Dessert", picture:lemon, price:"$ 25", description:"Use the order property to sort the flex items as you like: lettuce, peppers, olives and our. Use the order property"}
];

export const testimonials = [
  {id:1, name:"Mary", picture:avatar1, review:"This restaurant is so wonderful I want to go back the very next day", rating:5},
  {id:2, name:"Sonia", picture:avatar3, review:"Smoky, slow-cooked barbecue that’s worth seeking out", rating:4},
  {id:3, name:"Joaquin", picture:avatar2, review:"A delicious taste of  Indo Chinese dishes", rating:3},
  {id:4, name:"Freddy", picture:avatar4, review:"This restaurant runs like a machine but that takes a certain amount of the magic", rating:5}
]

export const chicago = {
  title: "Little Lemon",
  address: "Chicago",
  description:"We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.",
  pictures: {img1:img1, img2:img2}
}

export const occasions = [
{name:"Birthday"},{name:"Anniversary"}, {name:"Date"}, {name:"Special occasions"}
];

//-----------------------------------
export const validateDate=(date)=>{
  const dateSelected = new Date(date);
  const currentDate = new Date();
  if(dateSelected.getFullYear() >= currentDate.getFullYear()){
    if(dateSelected.getMonth() === currentDate.getMonth()){
      if(dateSelected.getDate() >= currentDate.getDate()){
        return true;
      }
    } else if(dateSelected.getMonth() > currentDate.getMonth()){
      return true;
    }else{return false}
  }else{return false}
}
const availableSlots= [{
  date:'2024-01-30',
  slots : [ {id:5, time:'21:00'},
            {id:6, time:'22:00'}]
},{
  date:'2024-01-31',
  slots : [
            {id:10, time:'19:00'},
            {id:11, time:'20:00'},
            {id:12, time:'22:00'}]
},{
  date:'2024-02-01',
  slots : [
            {id:15, time:'19:00'},
            {id:16, time:'20:00'},
            {id:17, time:'21:00'},
            {id:18, time:'22:00'}]
},{
  date:'2024-02-02',
  slots : [ {id:1, time:'17:00'},
            {id:2, time:'18:00'},
            {id:3, time:'19:00'},
            {id:4, time:'20:00'},
            {id:5, time:'21:00'},
            {id:6, time:'22:00'}]
},{
  date:'2024-02-03',
  slots : [ {id:1, time:'17:00'},
            {id:2, time:'18:00'},
            {id:5, time:'21:00'},
            {id:6, time:'22:00'}]
},{
  date:'2024-02-04',
  slots : [
            {id:15, time:'19:00'},
            {id:16, time:'20:00'},
            {id:17, time:'21:00'},
            {id:18, time:'22:00'}]
},{
  date:'2024-02-05',
  slots : [ {id:1, time:'17:00'},
            {id:2, time:'18:00'},
            {id:3, time:'19:00'},
            {id:4, time:'20:00'},
            {id:5, time:'21:00'},
            {id:6, time:'22:00'}]
}
];

export const fetchAPI =(date)=>{
 /*  //will return times availables
  const slots = availableSlots.filter((item)=>{
    if(item.date === date){
      return item;
    }});
    let times = [];
    if(slots.length){
      times = [...slots[0].slots];
    }
 */
    const randomDate = Math.floor(Math.random()* 5);
    if(validateDate(date)){
      return availableSlots[randomDate].slots;
    }
  return {};
}
export const submitAPI = (formData)=>{
  /* if(!formData.length){
    return false;
  } */
  return true;
}


//Validate number of guests max 10 and min 1
export const validateNumberGuests = (number)=>{
  const re = /\b([1-9]|10)\b/;
  return re.test(Number(number));
}
