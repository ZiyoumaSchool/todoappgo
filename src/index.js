import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import TaskAdd from './components/task/TaskAdd'
import reportWebVitals from './reportWebVitals';
import HeaderComponent from './components/Header/index'
import 'bootstrap/dist/css/bootstrap.css';
import TaskList from './components/task/TaskList';

ReactDOM.render(
  <React.StrictMode>
    <HeaderComponent />
    <br/>
    {/* <App /> */}
    <TaskAdd/>  
    <TaskList/> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
