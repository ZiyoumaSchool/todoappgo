import React from 'react';
import SectionAddTask from '../components/Task/SectionAddTask';
import { Tasksource } from '../datas/Tasksource';
import { v4 as uuidv4 } from 'uuid';
import TaskList from '../components/Task/TaskList';
import { useState, useCallback } from 'react';


export default function TaskHomePage() {


    const initialList = Tasksource;
    //const initialList = TaskList;
    const [list, setList] = useState(initialList);
    
  
    const [value, setValue] = useState('');
  
    function handleChange (event){
        setValue(event.target.value);
        //console.log("La valeur", value)
      };
  
    // function handleAdd() {
    //   const newList = list.concat({ value });

    //   console.log("jfjdjdjdj", {newList})
  
    //   setList(newList);
    //   setValue('');

    //      }

    



    return (
     <>
        <SectionAddTask 
            value = {value} 
            // handleAdd = {handleAdd}
            handleChange = {handleChange}
            TaskSource = {initialList}
       />
        {/* <SectionAddTask /> */}
        <TaskList tasks={list} />
    </>
        

    )
}