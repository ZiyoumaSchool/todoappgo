
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HeaderComponent from './components/Header/index'
import 'bootstrap/dist/css/bootstrap.css';
import TaskHomePage from './pages/TaskHomePage';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Routes>
    {/* <HeaderComponent /> */}
    <Route path="/" element={<TaskHomePage />} />
    </Routes>
    </Router>
 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();