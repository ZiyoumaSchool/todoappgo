import React, {useContext} from 'react';
import SectionAddTask from '../components/Task/SectionAddTask';
import { Tasksource } from '../datas/Tasksource';
import { v4 as uuidv4 } from 'uuid';
import TaskList from '../components/Task/TaskList';
//import 'bootstrap/dist/css/bootstrap.css';
//import { useState, useCallback } from 'react';
import {createContext, useState} from 'react';

export const ApplicationContext = createContext();


export default function TaskHomePage() {

    // const myvar = {
    //     items:Tasksource,
    //     currentItem:{
    //     title:'',
    //     id: Date.now()
    //   }
    // }

    const myvar = Tasksource

    const [state, setState] = useState(myvar);

    // console.log("MyValue", state)


    const initialList = Tasksource;
    //const initialList = TaskList;
    const [list, setList] = useState(initialList);
    
  
    //const [value, setValue] = useState('');
  
    // function handleChange (event){
    //     setValue(event.target.value);
    //     //console.log("La valeur", value)
    //   };
  
    // function handleAdd() {
    //   const newList = list.concat({ value });

    //   console.log("jfjdjdjdj", {newList})
  
    //   setList(newList);
    //   setValue('');

    //      }

    



    return (
     <>
        <ApplicationContext.Provider value={{state, setState}}>
        <SectionAddTask 
            //value = {value} 
            // handleAdd = {handleAdd}
            //handleChange = {handleChange}
            //TaskSource = {initialList}
       />
        {/* <SectionAddTask /> */}
        <TaskList tasks={state}/>
        </ApplicationContext.Provider>
    </>
        

    )
}