import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import { ApplicationContext } from '../../../pages/TaskHomePage'
//import 'bootstrap/dist/css/bootstrap.css';
import '../task.css';
import InputTextNewTask from '../InputTextNewTask';
import ButtonSubmit from '../../ButtonSubmit';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import '../../DayPickerInput/DayPickerInput.css';




export default function SectionAddTask(Tasksource) {

  // const {state1, setState1} = useContext(ApplicationContext);
  const {store, setStore} = useContext(ApplicationContext);
  const v = store.titleTaskTab[0]
  const d = store.dateTaskTab[0]
  const birthday = new Date(d);
  const year = birthday.getYear()
  const month = birthday.getMonth()
  const theday = birthday.getDay()
  const laDate = year+"-"+month+"-"+theday
  console.log("C est ici la date", laDate)
  const [myvalue, setMyvalue] = useState(v);
  const [day, setDay] = useState({selectedDay:d});

  const notify = (msg) => toast(msg);

  function handleDayChange(d) {
    setDay({ selectedDay: d });
    console.log("Peaceful Journey", day.selectedDay.toString());
  }

  function handleChangeEdit (event){
          setMyvalue(event.target.value);
          //console.log("p35", myvalue);
        };
  

  function handleEdit(e) {
    e.preventDefault();
    let editTab = store.stateList[0];
    for(let i=0;i<editTab.length;i++){
    if(editTab[i].id===store.idTaskTab[0]){
      console.log("ici json ", editTab[i])
      editTab[i]={
         id:  editTab[i].id, 
        title: myvalue, 
        // dateEnd:  editTab[i].dateEnd,
        dateEnd:  day.selectedDay.toString(), 
        state:  editTab[i].state
      }
    }
    }
    notify("Tache : "+myvalue+" modifiée avec succès");
    store.stateList[1](editTab)
    store.showModal[1](false)
  }
    // const numer = store.idTaskTab[0]-1 ;
    // console.log("la vraie canne", store.idTaskTab[0]);
    // editTab[numer].title = myvalue;
    // console.log("Oh Banana", editTab[numer].title);
    // store.stateList[1](editTab)
    // console.log("Le bounga séché", store.stateList[0]);
    // store.titleTaskTab[1]()
    // editTab[store.idTaskTab[0]]
    // console.log("La liste", store.stateList[0]);
    // store.showModal[1](false)
   //store.stateList[1](store.stateList[0].filter(item=>item.id!==store.idTaskTab[0]))

    // console.log('stateLit New after Edit', store.stateList[0])
    // setMyvalue('');  
    
  

  return (
<form>
    <div className="form-group  wrapper">
      <div className='add-task-1'> 
            
            <InputTextNewTask 
                myvalue={myvalue} 
                handleChange={handleChangeEdit}
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
                onClick={handleEdit}
                label="Save"
             />                        
          
      </div>
    </div>  

</form>
  );
}

