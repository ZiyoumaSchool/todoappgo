import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../task.css';
import InputTextNewTask from '../InputTextNewTask';
import ButtonSubmit from '../../ButtonSubmit';
import { Tasksource } from '../../../datas/Tasksource';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const listReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return state.concat({ value: action.value, id: action.id });
    default:
      throw new Error();
  }
};


export default function SectionAddTask() {

  const initialList = Tasksource;
  const [list, setList] = useState(initialList);
  
  const addEntryClick = () => {
    setList([...list, `Entry ${list.length}`]);
};

  const [value, setValue] = useState('');

  function handleChange (event){
          setValue(event.target.value);
        };

  // function handleAdd() {
  //   //const newList = list.concat({ value });
  //   // setList(newList);
  //   dispatchList({ type: 'ADD_ITEM', value, id: uuidv4() });
  //   setValue('');
  //       }


    

  return (
<form>
    <div className="form-group  wrapper">
      <div className='add-task-1'> 
            <AddItem
              value={value}
              handleChange={handleChange}
              handleAdd={addEntryClick}
            /> 
            {/* <InputTextNewTask value={value} handleChange={handleChange} />
            <ButtonSubmit disable={!value} onClick={handleAdd} /> */}

            {/* <List list={list} />       */}
            
          
      </div>
    </div>  

</form>
  );


}

const AddItem = ({ value, handleChange, handleAdd }) => (
  <div>
    <InputTextNewTask value={value} handleChange={handleChange} />
    <ButtonSubmit disable={!value} onClick={handleAdd} />
    {/* <input type="button" value="papapapa" disabled="true" /> */}
    
  </div>
);
// const List = ({ list }) => (
//   <ul>
//     {list.map((item) => (
//       <li key={item.id}>{item.title}</li>
//     ))}
//   </ul>
// );