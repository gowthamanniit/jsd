import React from 'react'
import axios from 'axios'
import { useState } from 'react'
function App() {
  const[city,setCity]=useState("salem")
  const[result,setResult]=useState(null);
  const cityFun=(Event)=>{
    setCity(Event.target.value)
  }
  
   const show=async()=>{
    const apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dc00b20e5f6cedffbd73d7827c6332e2`
    
    await axios.get(apiurl).then((response)=>{
      setResult(response.data)
      console.log(result)
    }).catch((err)=>{
      setResult(err.response.data)
      console.log(err.response.data)
    })

    //console.log(apiurl)

  }
  return (
    <div>
      <h1><center>Weather Report all over world</center></h1>
      <h1><center>by using entering city name</center></h1>
      <h2><center>Developed by K.Gowthaman M.C.A.,</center></h2>
      <hr size="10" color="green"></hr>
      <input type="text" value={city} onChange={(e)=>cityFun(e)} name="city" placeholder='Enter City Name'></input>      
      <input type='button' value="Find Weather Report" onClick={show}></input>
      <hr size="10" color="blue"></hr>
      {result!==null && result.cod===200 &&<> <h2>Country & City:{result.sys.country} - {result.name}</h2></> }      
      {result!==null && result.cod===200 &&<> <h2>Main Report:{result.weather[0].main}</h2></> }      
      {result!==null && result.cod===200 &&<><h2> Description:{result.weather[0].description}</h2></>}
      {result!==null && result.cod===200 &&<><h2> Wind speed:{result.wind.speed}</h2></>}
      {result!==null && result.cod===200 &&<><h2> Temperature:{result.main.temp}</h2></>}
      {result!==null && result.cod===200 &&<><h2> Hummidity:{result.main.humidity}</h2></>}
      {result!==null && result.cod===200 &&<><h2> sea_level:{result.main.sea_level}</h2></>}
      {result!==null && result.cod===200 &&<><h2> Co-ord(lat lon):{result.coord.lat} {result.coord.lon}</h2></>}
      {result!==null && result.cod==="404" && <font color='red' size='5'><b>Result:{result.message}</b></font>}
      
    </div>
  )
}

export default App

/*
import React from 'react'

function App() {
  let dis=()=>{
    var tags=document.getElementsByTagName("input")
    var size=tags.length;
    document.getElementById("r1").innerHTML="count of textbox:"+size;
    var sum=0;
    for(var i=0;i<size;i++)
    {
      sum=sum+parseInt(tags[i].value);
    }
    document.getElementById("res").innerHTML=sum+" is total";
  }
  return (
    <div>
      <input type='text' placeholder='Enter number 1'></input><br></br>
      <input type='text' placeholder='Enter number 2'></input><br></br>
      <input type='text' placeholder='Enter number 3'></input><br></br>
      <input type='text' placeholder='Enter number 4'></input><br></br>
    
      <button onClick={dis}>find total</button>
      <div id="r1"></div>
      <div id="res"></div>
    </div>
  )
}

export default App

/*
import React from 'react'

function App() {
    const dis=(Event)=>{
      document.getElementById("res").innerHTML = "You are working currently:"+Event.target.type;
  }
  return (
    <div>
      <input type='text' onChange={dis}></input><br></br>
      <input type='number' onChange={dis}></input><br></br>
      <input type='password' onChange={dis}></input><br></br>
      <input type='radio' name="g" onChange={dis}></input>Male
      <input type='radio' name='g' onChange={dis}></input>FeMale<br></br>
      <input type='checkbox' onChange={dis}></input>C
      <input type='checkbox' onChange={dis}></input>C++
      <input type='checkbox' onChange={dis}></input>JAVA<br></br>
      <div id="res"></div>

      
    </div>
  )
}

export default App

/*
import React from 'react'

function App() {
const dis=(Event)=>{

  document.getElementById("res").innerHTML = Event.target.id+" ...typing"
}

  return (
    <div>
      <input type="text" onChange={dis} id="textbox 1" placeholder='Textbox 1'></input>
      <br></br>
      <input type="text" onChange={dis} id="textbox 2" placeholder='Textbox 2'></input>
      <br></br>
      <input type="text" onChange={dis} id="textbox 3" placeholder='Textbox 3'></input>
      <br></br>
      <input type="text" onChange={dis} id="textbox 4" placeholder='Textbox 4'></input>
      <br></br>
      <input type="text" onChange={dis} id="textbox 5" placeholder='Textbox 5'></input>
      <br></br>
      <div id="res"></div>
    </div>
  )
}

export default App

/*
import React from 'react'

function App() {
  const dis=()=>{
    var a=parseInt(document.getElementById("t1").value);
    var b=parseInt(document.getElementById("t2").value);
    var c=a+b;
    document.getElementById("res").innerHTML="Total:"+c;
  }
  return (
    <div>
      <input type="text" id="t1" placeholder='enter no.1'></input>
      <input type="text" id="t2" placeholder='enter no.2'></input>
      <br></br>
      <input type="button" onClick={dis} value="find total"></input>
      <div id="res"></div>
      
    </div>
  )
}

export default App

/*
import React from 'react' 
function App() {
  const dis1=()=>{    
    document.getElementById("res").innerHTML="Cursor Outside textbox";
    document.getElementById("t1").style.backgroundColor="pink";
  }
  const dis2=()=>{    
    document.getElementById("res").innerHTML="Cursor Inside textbox";
    document.getElementById("t1").style.backgroundColor="lightgreen";
  }
  return (
    <div>
      <input type="text" id="t1" onBlur={dis1} onFocus={dis2} placeholder='Enter your text'></input>
      <div id="res"></div>
    </div>
  )
}

export default App

/*
import React from 'react'
function App() {
  const dis=(Event)=>{
    var data=Event.target.value;
    document.getElementById("res").innerHTML=data+"... typing"

  }
  return (
    <div>
      <h1>React Events</h1>
      <input type="text" onChange={dis} placeholder='enter text'></input>
      <br></br>
      <div id="res"></div>
      
    </div>
  )
}

export default App

/*
import React from 'react'

function App() {
  return (
    <form>
      <h1>React Forms:</h1>
      <input type="text" id="t1" placeholder='Enter Mark:1'></input>
      <br></br>
      <input type="text" id="t2" placeholder='Enter Mark:2'></input>
      <br></br>
      <input type="text" id="t3" placeholder='Enter Mark:3'></input>
      <br></br>
      <input type="text" id="t4" placeholder='Enter Mark:4'></input>
      <br></br>
      <input type="text" id="t5" placeholder='Enter Mark:5'></input>
      <br></br>
      <input type="password" id="pw" placeholder='Enter password'></input>
      <br></br>
      <input type="number" id="nm" placeholder='Enter number'></input>
      <br></br>
      <label>Select Gender:</label>
      <input type="radio" id="g1" name="gen"></input>Male
      <input type="radio" id="g2" name="gen"></input>FeMale
      <input type="radio" id="g3" name="gen"></input>Others
      <br></br>
      <label>Select courses:</label>
      <input type="checkbox" id="c1"></input>C
      <input type="checkbox" id="c2"></input>C++
      <input type="checkbox" id="c3"></input>JAVA
      <input type="checkbox" id="c4"></input>None of these above
      <br></br>
      <label>Select Color:</label>
      <input type="color" id="col"></input>
      <br></br>
      <label>Select Date:</label>
      <input type="date" id="dat"></input>
      <br></br>
      <label>Select Time:</label>
      <input type="time" id="ti"></input>
      <br></br>
      <label>Upload  photo:</label>
      <input type="file" id="fi"></input>
      <br></br>
          
      <input type="button" value="clickme"></input>
      <input type="submit" value="submit button"></input>
      <input type="reset" value="clear"></input>
      <button>clickme</button>
      

      
    </form>
  )
}

export default App

/*
import React from 'react'
function App(props) {
var arr=[]
  for(var k in props.data)
  {    
    arr.push(k)    
  }
   
  return (
    <div>
      <h1>Json with Array Handling and also check null</h1>    
      <h2>Roll number:{props.data.rno}</h2>
      <h2>Name:{props.data.sname}</h2>
      <h2>mark 1:{props.data.marks[0]}</h2>
      <h2>mark 2:{props.data.marks[1]}</h2>
      <h2>mark 3:{props.data.marks[2]}</h2>
      <h3>Result:{(props.data.marks[0]>34 && props.data.marks[1]>34 && props.data.marks[2]>34)?props.data.results="PASS":props.data.results="FAIL"}</h3>
    <h1>================additionl(smart way)==============</h1>
      {arr.map((item)=><><br></br>{item}---&gt; {props.data[item]}</>)}      
      <h1>================extra (smart way)==============</h1>
      {arr.map((item)=><><br></br>{item}----&gt; {(item==="marks" && props.data[item].map((v,index)=><><br></br>mark:{index+1}---{v}</>)) || props.data[item]}</>)}
      

    </div>
  )
}

export default App

/*
import React from 'react'

export default function App(props) {
  var arr=[]
  for(var k in props.data)
  {    
    arr.push(k)    
  }

  return (
    <div>
      <h1>Props using JSON data</h1>
      <h2>Roll Number:{props.data.rno}</h2>    
      <h2>Student name:{props.data.sname}</h2>    
      
      <h2>Mark:{props.data.mark}</h2>    
      <h2>Result:{props.data.mark>=35?"pass":"fail"}</h2>    
      <h2>is eligible to study:{props.data.iseligible?"eligible":"not eligible"}</h2>    

      <br></br>
      <h2>======================================================</h2>
      {arr.map((v)=><h2>{v}----&gt; {props.data[v]}</h2>)}
      <h2>=================extra learners==================</h2>
      {arr.map((v)=><h2>{v}----&gt; {(props.data[v]===true && "Eligible") || (props.data[v]===false && "Not Eligible") || props.data[v]}</h2>)}
    </div>
  )
}

/*
import React from 'react'

function App(props) {
  return (
    <div>
      <h1>Props using Array</h1>
      
      Test first mark:{props.data[0]}      
      <br></br>

      {props.data.map((item,index)=><><br></br>mark:{index+1} = {item}</>)}
    </div>
  )
}

export default App

/*
import React from 'react'
function App(props) {

  return (    
    <div>
      <h1>props: properties</h1>
      <h2>share data from one component to another component</h2>
      <h2>Your Name:{props.data}</h2>
    </div>
  )
}

export default App

/*
import React from 'react'
function App() {
  var stud={
    sno:1001,
    sname:'gowthaman',
    marks:{tamil:99,
          english:40,
          maths:100,
          science:88,
          social:68
    },
    rank:2,
    result:"pass"             
  }
  return (
    <div>
      <h1>JSON</h1>
      <h2>student number:{stud.sno}</h2>
      <h2>student name:{stud.sname}</h2>
      <h2>student tamil mark:{stud.marks["tamil"]}</h2>
      <h2>student english mark:{stud.marks['english']}</h2>
      <h2>student maths mark:{stud.marks.maths}</h2>
      <h2>student science mark:{stud.marks.science}</h2>
      <h2>student social mark:{stud.marks["social"]}</h2>
      <h2>student rank:{stud.rank}</h2>
      <h2>student result:{stud.result}</h2>
    </div>
  )
}

export default App

/*
import React from 'react'

function App() {

  var arr=[11,22,33,44,55,66,77,88,-99,110,112,334,56,19,13];
  var big=arr[0];
  return (
    <div>
        <h1>Array Demo</h1>
        
        {arr.map((item)=>item)}
        <br></br>
        
        {arr.map((item)=><>{item} </>)}
        
        {arr.map((item)=><><br></br>{item}</>)}
        
        <ol type="A">
        {arr.map((v)=><li>{v}</li>)}
        </ol>

        

        <div style={{display:"none" }}>
        {arr.map((v)=><>{big>v && <>{big=v}</>}</>)}
        </div>

      <h1>Biggest number:{big}</h1>
    </div>
  )
}

export default App

/*
import React from 'react'

function App() {

  var arr=[11,22,33,44,55,66];
  return (
    <div>
        <h1>Array Demo</h1>
        <h2>array value index : 0 : {arr[0]}</h2>
        <h2>array value index : 1 : {arr[1]}</h2>
        <h2>array value index : 2 : {arr[2]}</h2>
        <h2>array value index : 3 : {arr[3]}</h2>
        <h2>array value index : 4 : {arr[4]}</h2>
        <h2>array value index : 5 : {arr[5]}</h2>
    </div>
  )
}

export default App

/*
import React from 'react'

function App() {
  var avg=90;
  var res="fail";
  return (
    <div>
      <h1>Grade system:</h1>
      <h2>{(res==="pass" && ((avg>=85 && "outstanding") || 
           (avg>=75 && "excellent") || 
           (avg>=65 && "very good") || 
           (avg>=55 && "good") || 
           "fair")) || "no grade"
        }</h2>
    </div>
  )
}

export default App

/*
import React from 'react'

function App() {
  var n=-5
  return (
    <div>
        <h1>3.if else if statement or else if ladder</h1>
        <h2>{n} is {(n>0 && "+ve") || (n<0 && "-ve") || "zero" }</h2>
    </div>
  )
}

export default App

/*
import React from 'react'
function App() {
  var n=8;
   return (
    <div>
      <h1>Find given no. is even or odd using if else</h1>
    
    <h2>Number : {n}</h2>
       
      <h2>{n} is {( n%2===0 && "Even" ) || "Odd" } Number </h2>
      
    </div>
  )
}

export default App

/*
import React from 'react'
function App() {
  var mark=40;
  return (
    <div>
      <h1>mark : {mark}</h1>
      <h2>1.Simple If statement Result:</h2>
      <h2>{mark>34 && "PASS"}</h2>
      <h2>{mark<=34 && "FAIL"}</h2>
    </div>
  )
}

export default App


/*
import './App.css'
import React from 'react'
import myimg from './images/3.jpg'
function App() {
  return (
    <div align="center">
      <img src={myimg} width="90%" alt="not found"></img>
    </div>
  )
}
export default App


/*
var App=()=>{
  var a=10
  var b=20
  var c=30
  return(
    <>
        <h1>Addition of two numbers</h1>
        <h2>A value:{a}</h2>
        <h2>B value:{b}</h2>
        <h2>C value:{c}</h2>
        <h2>total value:{a+b+c}</h2>

    </>
  )

}
export default App;

/*
import React from "react";
class App extends React.Component
{
  render(){
    return(
      <>
        <h1>Welcome to Class Components</h1>
        <h1>Welcome to Class Components</h1>
        <h1>Welcome to Class Components</h1>
      </>
    )
  }
}
export default App;
/*
function App()
{
return(
  <>
  <h1>welcome to react js</h1>
  <h2>welcome to react js</h2>
  <h3>welcome to react js</h3>
  </>
)
}
export default App;
/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/