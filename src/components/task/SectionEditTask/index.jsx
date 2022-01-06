import React, {useContext} from 'react';
import { ApplicationContext } from '../../../pages/TaskHomePage'
//import 'bootstrap/dist/css/bootstrap.css';
import '../task.css';
import InputTextNewTask from '../InputTextNewTask';
import ButtonSubmit from '../../ButtonSubmit';
import { useState } from 'react';
import { createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TaskHomePage from '../../../pages/TaskHomePage';
//import { Tasksource } from '../../../datas/Tasksource';
import TaskList from '../TaskList';
import { Tasksource } from '../../../datas/Tasksource';




export default function SectionAddTask(Tasksource) {

  // const {state1, setState1} = useContext(ApplicationContext);
  const {store, setStore} = useContext(ApplicationContext);
  const v = store.titleTaskTab[0]
  const [myvalue, setMyvalue] = useState(v);

  function handleChangeEdit (event){
          setMyvalue(event.target.value);
          //console.log("p35", myvalue);
        };
  

  function handleEdit(e) {
    e.preventDefault();
    const editTab = store.stateList[0];
    const numer = store.idTaskTab[0]-1 ;
    // console.log("Oh Banana", editTab[numer].title);
    editTab[numer].title = myvalue;
    console.log("Oh Banana", editTab[numer].title);
    store.stateList[1](editTab)
    console.log("Le bounga séché", store.stateList[0]);
    // store.titleTaskTab[1]()
    // editTab[store.idTaskTab[0]]
    console.log("La liste", store.stateList[0]);
    store.showModal[1](false)
   //store.stateList[1](store.stateList[0].filter(item=>item.id!==store.idTaskTab[0]))

    // store.titleTaskTab[1](myvalue)
    // console.log("EditTask1 My value", myvalue);
    // console.log("EditTask OKOK", store.stateList[0])

    //console.log("Congré chaud", store.state1[state1])
   
    // console.log("New List", store.state1)
    // store.stateList [1]([...store.stateList[0], { id: store.idTaskTab[0],
    //   title:myvalue,       
    //   dateEnd: "2021-12-31",
    //   watched: false,
    //   state: 'TASK_INBOX'
    // }])

    console.log('stateLit New after Edit', store.stateList[0])
    setMyvalue('');  
    
  }    

  return (
<form>
    <div className="form-group  wrapper">
      <div className='add-task-1'> 
            
            <InputTextNewTask 
                myvalue={myvalue} 
                handleChange={handleChangeEdit}
             />

            <ButtonSubmit 
                // disable={value===""?"true":"false"}
                disable={!myvalue} 
                onClick={handleEdit}
                label="Save"
             />                        
          
      </div>
    </div>  

</form>
  );
}

