import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import { ApplicationContext } from '../../../pages/TaskHomePage'
import '../task.css';
import InputTextNewTask from '../InputTextNewTask';
import ButtonSubmit from '../../ButtonSubmit';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import '../../DayPickerInput/DayPickerInput.css';
import 'react-day-picker/lib/style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export function format(){
  var options = {year:'numeric' , month:'long' , day:"numeric" };
  return new Date().toLocaleDateString([], options);
}


export default function SectionAddTask(Tasksource) {

  const {store, setStore} = useContext(ApplicationContext);
  const [myvalue, setMyvalue] = useState('');
  const [day, setDay] = useState({selectedDay:''});

  const notify = (msg) => toast(msg);

  console.log("Les dates", Date());


  const val = {title:'', id:Date.now()}
  
  function handleDayChange(d) {
    setDay({ selectedDay: d });
    console.log("Peaceful45", day.selectedDay.toString());
  }



  function handleChange (event){
          setMyvalue(event.target.value);
          //console.log("p35", myvalue);
        };
  

  function handleAdd(e) {
    e.preventDefault();
    console.log("patatras", myvalue);
    console.log("Le big store YAYA", store.stateList[0])
    
    //const date = "2000-01-31T11:59:00-05:00";
    //const today = new Date();

    // const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    notify("Nouvelle Tache : "+myvalue+" ajoutée avec succès");
    store.stateList[1]([...store.stateList[0], { id: Date.now(),
      title:myvalue,       
      dateEnd: day.selectedDay.toString(),
      state: 'TASK_INBOX'
    }])
    
    console.log('state--->', store.stateList[0])
    setMyvalue('');  
    
  } 
  const lapaz = day   
  console.log("LaPAZ3545", lapaz.selectedDay.toString());
  return (
<form>
    <div className="form-group  wrapper">
      <div className='add-task-1'> 
            <ToastContainer />
            <InputTextNewTask 
                myvalue={myvalue} 
                handleChange={handleChange}
             />
             <div className='daypicker1'>
                <DayPickerInput 
                    day={day}
                    onDayChange = {handleDayChange}
                />
              </div>

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

