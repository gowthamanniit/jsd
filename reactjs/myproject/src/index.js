import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//var sname="gowthaman"
//var marks=[77,88,99,100,67];
//var stud={rno:1001,sname:"gowthaman",mark:99,result:"pass",iseligible:false}
var stud={
  rno:1001,
  sname:"haiban",
  marks:[99,34,99],
  result:null
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={stud} /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
