
import './App.css';
import moment from "moment";

import "moment/locale/te";
import "moment/locale/bg"
function App() {

  let monthsArr = ["January","Febraury","March","April","May","June","July","August","September","October","November","December",];

  let weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",];
    let childrensDay = new Date(1957,10,14,0,20,30,500);
    
    console.log(childrensDay.setFullYear(1857));
    console.log(childrensDay);
    console.log(childrensDay.getFullYear());
    console.log(monthsArr[childrensDay.getMonth()]);
    console.log(childrensDay.getDate());
    console.log(weekDays[childrensDay.getDay()]);
    console.log(childrensDay.getHours());
    console.log(childrensDay.getMinutes());
    console.log(childrensDay.getSeconds());
    console.log(childrensDay.getMilliseconds());
    console.log(childrensDay.getTime());
  
  
    let date=new Date(-987654321000000);
    console.log(date);
  
    let a =( -2*300576778899098);
    let date2=new Date(a);
    console.log(date2);
  
  
    let dateA=new Date("15 August 1947");
    console.log(dateA);


    console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
    console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
  return (
    <div className="App">
<h1>Date class and Moment JS </h1>

<label>Batch start date</label>
<input type='date' onChange={(eo)=>{
  let batchStartDate = new Date(eo.target.value);
  console.log(batchStartDate);

  let duration = 120*24*60*60*1000;

  let batchEndDate = new Date(batchStartDate.getTime()+duration);
console.log(batchEndDate);

console.log(moment(batchStartDate).format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment(batchEndDate).format('MMMM Do YYYY, h:mm:ss a'));



}}></input>



{/* <label>Age</label>
<input
type='date'
onChange={(eo)=>{
  let currentDate = new Date(eo.target.value);

  let previous = 26*12*30*24*60*60*1000;

  let currentAge = new Date(currentDate.getTime() - previous);
  console.log(` your D.O.B is ${currentAge}`);
}}></input> */}
 

<button type="button"
onClick={()=>{
  console.log(Date.now());
}}>Current Time in Milliseconds</button>
    </div>
  );
}

export default App;
