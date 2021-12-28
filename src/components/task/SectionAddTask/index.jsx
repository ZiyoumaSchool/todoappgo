import React, {useContext} from 'react';
import { ApplicationContext } from '../../../pages/TaskHomePage'
import 'bootstrap/dist/css/bootstrap.css';
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


export const ListOfTask = createContext();

export default function SectionAddTask(Tasksource) {

  const {state, setState} = useContext(ApplicationContext);
  const [myvalue, setMyvalue] = useState('');

  console.log("akiaka", state)

  // const myvar = {
  //     items:Tasksource,
  //     currentItem:{
  //     title:'ufffyfyf',
  //     id: Date.now()
  //   }
  // }

  //var [state, setState] = useState(myvar)

  // console.log("Items Myvar", myvar.items)

  //const items = Tasksource
  
  //console.log("Items State1", state.items)

  const val = {title:'', id:Date.now()}
  const [currentItem, setCurrentItem] = useState(val)

  function handleChange (event){
          setMyvalue(event.target.value);
          console.log("p35", myvalue);

          // setState({
          //     items: state.items.push({title:myvalue, id: Date.now() }),
          //     currentItem:{
          //     title:myvalue+'a',
          //     id: Date.now()
          //   }
          // }
          // )
        };
  

  function handleAdd(e) {
    e.preventDefault();
    console.log("patatras", myvalue);
    console.log("Congré chaud", state)
    // const newState = state.push(
    //   { id: Date.now(),
    //     title:myvalue,       
    //     dateEnd: "2021-12-31",
    //     watched: false,
    //     state: 'TASK_INBOX'
    //   }
    //   )
    // console.log('state',state.push(
    //   { id: Date.now(),
    //     title:myvalue,       
    //     dateEnd: "2021-12-31",
    //     watched: false,
    //     state: 'TASK_INBOX'
    //   }
    //   ))
    console.log("New List", state)
    setState([...state, { id: Date.now(),
      title:myvalue,       
      dateEnd: "2021-12-31",
      watched: false,
      state: 'TASK_INBOX'
    }])
    console.log('state--->', state)
    //console.log("Ici c le bon haricot", state)
    //   if(myvalue!==""){

    //     console.log("akiaka", state)        
    //     //setState(  )      
    // }
  }    

  return (
<form>
    <div className="form-group  wrapper">
      <div className='add-task-1'> 
            
            <InputTextNewTask 
                myvalue={myvalue} 
                handleChange={handleChange}
             />

            <ButtonSubmit 
                // disable={value===""?"true":"false"}
                disable={!myvalue} 
                onClick={handleAdd}
             />                        
          
      </div>
    </div>  

</form>
  );
}

