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