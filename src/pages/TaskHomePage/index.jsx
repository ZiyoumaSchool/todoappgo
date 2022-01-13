import React, {useContext} from 'react';
import SectionAddTask from '../../components/Task/SectionAddTask';
import SectionEditTask from '../../components/Task/SectionEditTask'
import SectionFilterTask from '../../components/Task/SectionFilterTask'
import { Tasksource } from '../../datas/Tasksource';
import { v4 as uuidv4 } from 'uuid';
import TaskList from '../../components/Task/TaskList';
import {createContext, useState} from 'react';
import ModalComponent from '../../components/Modal';


export const ApplicationContext = createContext();





export default function TaskHomePage() {

 

    const myvar = Tasksource

    const [state1, setState1] = useState(myvar);
    const [show, setShow] = useState(false);
    const [idTask, setIdTask] = useState(0);
    const [titleTask, setTitleTask] = useState("");
    const [stateTask, setStateTask] = useState("")

    const store = {
        stateList: [state1, setState1],
        showModal: [show, setShow],
        idTaskTab: [idTask, setIdTask],
        titleTaskTab: [titleTask, setTitleTask],
        stateTaskTab: [stateTask, setStateTask]
        
      }
    
    const initialList = Tasksource;
    //const initialList = TaskList;
    // const [list, setList] = useState(initialList);
    
    const TaskEditComponent =()=>{
        return (        
                <SectionEditTask />                
              )
      }


    return (
     <>
        {/* <ApplicationContext.Provider value={{state1, setState1}}> */}
        <ApplicationContext.Provider value={{store}}>
        <SectionAddTask 
            //value = {value} 
            // handleAdd = {handleAdd}
            //handleChange = {handleChange}
            //TaskSource = {initialList}
       />
        {/* <SectionAddTask /> */}
        <SectionFilterTask />

        <ModalComponent title="Edit Task" show={store.showModal[0]} component={TaskEditComponent()} />
        <TaskList tasks={store.stateList[0]}/>
        </ApplicationContext.Provider>
    </>
        

    )
}