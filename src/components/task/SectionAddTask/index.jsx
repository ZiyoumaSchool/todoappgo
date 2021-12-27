import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../task.css';
import InputTextNewTask from '../InputTextNewTask';
import ButtonSubmit from '../../ButtonSubmit';
import { useState, useContext } from 'react';
import { createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TaskHomePage from '../../../pages/TaskHomePage';
//import { Tasksource } from '../../../datas/Tasksource';
import TaskList from '../TaskList';
import { Tasksource } from '../../../datas/Tasksource';


export const ListOfTask = createContext();

export default function SectionAddTask(Tasksource) {

  
  const [value, setValue] = useState('');

  const myvar = {
      items:Tasksource,
      currentItem:{
      title:'ufffyfyf',
      id: Date.now()
    }
  }

  // console.log("Items Myvar", myvar.items)

  const items = Tasksource
 


  var [state, setState] = useState(myvar)
  
  //console.log("Items State1", state.items)

  function handleChange (event){
          setValue(event.target.value);
          setState({
              currentItem:{
              title:value+'a',
              id: Date.now()
            }
          }
          )
        };

  // function handleAdd() {
  //   //const newList = list.concat({ value });
  //   // setList(newList);
  //   dispatchList({ type: 'ADD_ITEM', value, id: uuidv4() });
  //   setValue('');
  //       }

  function handleAdd(e) {
    e.preventDefault();
    console.log("Items Statefull", state.items)
    const newItem = state.currentItem;
    console.log("okkk",newItem);

  if(newItem.title!==""){
    const newItems = [state.items];
    //console.log("Items Statefull", newItems.items)    
    // newItems.push(newItem);

    console.log("Le paradis est le but", newItem)
    //   setState({
    //     items:newItems,
    //     currentItem:{
    //       title: '',
    //       id: ''
    //     }
    //   }
        
    //   )
    }
  }


    

  return (
<form>
    <div className="form-group  wrapper">
      <div className='add-task-1'> 
            
            <InputTextNewTask 
                value={value} 
                handleChange={handleChange}
             />

            <ButtonSubmit 
                // disable={value===""?"true":"false"}
                disable={!value} 
                onClick={handleAdd}
             />
                        
          
      </div>
    </div>  

</form>
  );


}

