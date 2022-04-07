import React from 'react';
import SectionAddTask from '../../components/task/SectionAddTask'
import SectionEditTask from '../../components/task/SectionEditTask'
import SectionFilterTask from '../../components/task/SectionFilterTask'
import {Tasksource} from '../../datas/Tasksource';
import {DataSource} from '../../datas/Tasksource';
import { v4 as uuidv4 } from 'uuid';
import TaskList from '../../components/task/TaskList'
import {createContext, useState, useEffect} from 'react';
import db from '../../config/firebaseDb'
import ModalComponent from '../../components/Modal';


let list = []

const ref = db.collection('tasks')
console.log("REFERENCE", ref)
console.log("default 000 =>",list)

export const ApplicationContext = createContext();

//////////////////////////////////   BEGINING OF THE DEFAULT EXPORT FUNCTION \\\\\\\\\\\\\\\

 export default function TaskHomePage() {

  const [data, setData] = useState([])
  const [loader, setLoader] = useState(true)
 
  //  DataSource();
// console.log("STORAGEEEEEE=>",store.stateList[0])
 
function getData(){
  ref.onSnapshot((querySnapshot) => {
    const items = []
    querySnapshot.forEach((doc) => {
      items.push(doc.data())
      // list.push({id : data.id, title: data.title, state: data.state, dateEnd: data.dateEnd})
    })
    setData(items)
    setLoader(false)
    list = items

  })
}

useEffect(()=> {
  getData()
  console.log("Dityrambique DATA", data)
  
},[])

     const myvar = data
  // const myvar = DataSource()

    console.log("VOILA UNE BONNE SOURCE",myvar)
    const [state1, setState1] = useState(data);
    const [show, setShow] = useState(false);
    const [idTask, setIdTask] = useState(0);
    const [titleTask, setTitleTask] = useState("");
    const [dateTask, setDateTask] = useState("");
    const [stateTask, setStateTask] = useState("")
    const [buttonFilter, setButtonFilter] = useState("ALL")
    const [labelFilter, setLabelFilter] = useState("")

    // setState1(myvar)
    
    console.log("888888",data)
    const store = {
        stateList: [state1, setState1],
        showModal: [show, setShow],
        idTaskTab: [idTask, setIdTask],
        titleTaskTab: [titleTask, setTitleTask],
        dateTaskTab:[dateTask, setDateTask],
        stateTaskTab: [stateTask, setStateTask],
        buttonFilterTab:[buttonFilter, setButtonFilter],
        labelFilterTab:[labelFilter, setLabelFilter]
        
      }     
      console.log("77777777 DATA", myvar)
      
    const TaskEditComponent =()=>{
        return (        
                <SectionEditTask />                
              )
      }    


    return (
     <>
        <ApplicationContext.Provider value={{store}}>
            <SectionAddTask/>
            <SectionFilterTask />
            <ModalComponent title="Edit Task" show={store.showModal[0]} component={TaskEditComponent()} />
            {/* <TaskList tasks={myvar}/> */}
            <TaskList tasks={store.stateList[0]}/>
        </ApplicationContext.Provider>
        

    </>
        

    )
}

// export default TaskHomePage