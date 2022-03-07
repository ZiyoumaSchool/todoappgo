import React, {useContext} from 'react';
import { ApplicationContext } from '../../../pages/TaskHomePage/index'
import '../task.css';
import InputTextNewTask from '../InputTextNewTask';
import ButtonSubmit from '../../ButtonSubmit';
import { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import '../../DayPickerInput/DayPickerInput.css';
import db from '../../../config/firebaseDb';
import "firebase/compat/firestore";
import {doc, collection, onSnapshot, addDoc, query, orderBy, deleteDoc, setDoc} from "firebase/firestore"





export default function SectionEditTask() {

  const {store} = useContext(ApplicationContext);
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

  var userLanguage = window.navigator.userLanguage || window.navigator.language;
  let  today 		= new Date(store.dateTaskTab[0]);
  console.log("EDIT DATE 10022022", today.toLocaleDateString(userLanguage))

  

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
      // console.log("ici json 99999999999999999 ", editTab[i])
      // alert("EH");

      //////////////////////////////////////////
      
        const itemRef = doc(db, "tasks", editTab[i].id.toString());
        console.log("ici papi", editTab[i].id)
        // let name =  prompt("What would you like to update it to?")
        setDoc(itemRef, {
              id:  editTab[i].id, 
              title: myvalue, 
              // dateEnd:  editTab[i].dateEnd,
              dateEnd:  day.selectedDay.toString(), 
              state:  editTab[i].state,
              userId : editTab[i].userId
        })
        // const docRef = db.collection('tasks').doc(editTab[i].id);
        // console.log("PECEECCE",db.collection('tasks').doc(editTab[i].id.toString()))
    
        db.collection('tasks').doc(editTab[i].id.toString()).update({
        // name,
        // timestamp: firebase.firestore.FieldValue.serverTimestamp()
              id:  editTab[i].id, 
              title: myvalue, 
              // dateEnd:  editTab[i].dateEnd,
              dateEnd:  day.selectedDay.toString(), 
              state:  editTab[i].state
      }).then(() => {
        console.log('Profile Successfully Edited!');
      }).catch((error) => {
        console.log('Error updating the document:', error);
      })

    
              
      //////////////////////////////////////////

      editTab[i]={
         id:  editTab[i].id, 
        title: myvalue, 
        // dateEnd:  editTab[i].dateEnd,
        dateEnd:  day.selectedDay.toString(), 
        state:  editTab[i].state,
        userId : editTab[i].userId
      }
    }
    }
    notify("Tache : "+myvalue+" modifiée avec succès");
    store.stateList[1](editTab)
    store.showModal[1](false)
  }
      

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
                    value={today.toLocaleDateString(userLanguage)}
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

