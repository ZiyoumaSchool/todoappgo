
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import InputTextNewTask from './components/Task/InputTextNewTask'
// import ButtonSubmit from './components/ButtonSubmit';
// import SectionAddTask from './components/Task/SectionAddTask';
import reportWebVitals from './reportWebVitals';
import HeaderComponent from './components/Header/index'
import 'bootstrap/dist/css/bootstrap.css';
// import TaskList from './components/Task/TaskList';
import TaskHomePage from './pages/TaskHomePage';
// import Form1 from './components/Form1';
// import Form2 from './components/Form2';

ReactDOM.render(
  <React.StrictMode>
    <HeaderComponent />
    <br/>
    {/* <App /> */}
    <TaskHomePage />
    {/* <Form1 /> */}
    {/* <Form2 /> */}
    <br/><br/><br/><br/><br/><br/>
    {/* <TaskList/>      */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
