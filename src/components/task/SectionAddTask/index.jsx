import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import { ApplicationContext } from '../../../pages/TaskHomePage/index'
import '../task.css';
import InputTextNewTask from '../InputTextNewTask/index'
import ButtonSubmit from '../../ButtonSubmit';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import '../../DayPickerInput/DayPickerInput.css';
import 'react-day-picker/lib/style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import db from '../../../config/firebaseDb';
import {doc, collection, onSnapshot, addDoc, query, orderBy, deleteDoc, setDoc} from "firebase/firestore"




export function format(){
  var options = {year:'numeric' , month:'long' , day:"numeric" };
  return new Date().toLocaleDateString([], options);
}


export default function SectionAddTask(Tasksource) {

  const {store, setStore} = useContext(ApplicationContext);
  const [myvalue, setMyvalue] = useState('');
  const [day, setDay] = useState({selectedDay:''});
  const [value, setValue] = useState("")
  let userLanguage = window.navigator.userLanguage || window.navigator.language;

  const notify = (msg) => toast(msg);

  console.log("Les dates", Date.now());


  const val = {title:'', id:Date.now()}
  
  function handleDayChange(d) {
    setDay({ selectedDay: d });
    console.log("Peaceful45", day.selectedDay.toString());
  }
  

  let varDate= Date()
  let today = new Date(varDate)


  function handleChange (event){
          setMyvalue(event.target.value);
          // var userLanguage = window.navigator.userLanguage || window.navigator.language;
          // const regexDate = /^\d{2}\/\d{2}\/\d{4}$/
          console.log("p35", userLanguage);
          // console.log("p351", regexDate);
          let mdy = ['month', 'date', 'year'];
          let hms = ['hour', 'minute', 'second'];
          const start = Date.now();
          console.log("LE SUCRE DU LAIT", start)
          mdy = new Date().toLocaleDateString(userLanguage).split("/");
          hms = new Date().toLocaleTimeString(userLanguage).split(/:| /);
          // let v1 = new Date().toLocaleDateString(userLanguage).split("/");
          console.log("Les shawarma", varDate)
          console.log(mdy[0],hms);
        };
  

  function handleAdd(e) {
    e.preventDefault();
    console.log("patatras", myvalue);
    console.log("Le big store YAYA", store.stateList[0])
    
    //const date = "2000-01-31T11:59:00-05:00";
    //const today = new Date();

    // const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    // notify("Nouvelle Tache : "+myvalue+" ajoutée avec succès");

    ////********* */
    var size = 0;
    db.collection('tasks').get().then(snap => {
			size = snap.size // will return the collection size
      const d = day.selectedDay.toString()===""?today.toString() : day.selectedDay.toString()
      console.log("DADADAD45",d)
      
			// db.collection("tasks").add({
			// 	id:size+1,
			// 	title: myvalue,
			// 	dateEnd: d,
			// 	state : "TASK_INBOX",
				
			// })
			// .then((docRef) => {
			// 	// alert("Data Successfully Submitted");
      //   notify("Nouvelle Tache : "+myvalue+" ajoutée avec succès");
			// })
			// .catch((error) => {
			// 	console.error("Error adding document: ", error);
      //   alert("YOU LOOSE");
			// });

      size = size +1 
      const itemRef = doc(db, "tasks", size.toString());
      setDoc(itemRef, {
        id:  size, 
        title: myvalue, 
        // dateEnd:  editTab[i].dateEnd,
        dateEnd: d,
				state : "TASK_INBOX",
        userId : store.userTab[0]
  })
			
		 });
    //////******** */
    
    store.stateList[1]([...store.stateList[0], { id: Date.now(),
      title:myvalue,       
      dateEnd: day.selectedDay.toString()===""?today : day.selectedDay.toString(),
      state: 'TASK_INBOX'
    }])


    ////////////////////////////////////////************************** */  
	  

	    // END Add a new task to the database


    ///////////////////////////////////////************************** */
    
    console.log('state--->', store.stateList[0])
    setMyvalue('');  
    setDay({selectedDay:''});
    setValue("");
    
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
                    placeholder = {today.toLocaleDateString(userLanguage)}
                    value = {today.toLocaleDateString(userLanguage)}
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

