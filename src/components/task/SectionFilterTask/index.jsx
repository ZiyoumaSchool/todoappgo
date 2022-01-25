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
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';




export function format(){
  var options = {year:'numeric' , month:'long' , day:"numeric" };
  return new Date().toLocaleDateString([], options);
}


export default function SectionFilterTask(Tasksource, onClickFilter) {

  const {store, setStore} = useContext(ApplicationContext);
  // const [myvalue, setMyvalue] = useState('');
  const [day, setDay] = useState({selectedDay:''});

  const notify = (msg) => toast(msg);

  console.log("Les dates", Date());


  const val = {title:'', id:Date.now()}
  
  
  const lapaz = day   
  console.log("LaPAZ3545", lapaz.selectedDay.toString());
  return (
<form>
    <div className="form-group">
      <div className='filter-section'> 
            <ToastContainer />
            
            <Tabs>
                <TabList>
                <Tab
                    onClick={(e)=>{
                      e.preventDefault();
                      store.buttonFilterTab[1]("ALL")
                    }}
                  >ALL</Tab>
                  <Tab 
                     onClick={(e)=>{
                      e.preventDefault();
                      store.buttonFilterTab[1]("INBOX")
                    }}
                  >INBOX</Tab>
                  <Tab
                    onClick={(e)=>{
                      e.preventDefault();
                      store.buttonFilterTab[1]("ARCHIVED")
                    }}
                  
                  >ARCHIVED</Tab>
                  
                </TabList>

                {/* <TabPanel>
                  <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Any content 2</h2>
                </TabPanel> */}
              </Tabs>

              {/* <ButtonSubmit 
                // disable={value===""?"true":"false"}
                disable={""} 
                onClick={(e)=>{
                  e.preventDefault();
                  store.buttonFilterTab[1]("INBOX")
                }}
                label="INBOX"
            />  

             <ButtonSubmit 
                // disable={value===""?"true":"false"}
                disable={""} 
                onClick={(e)=>{
                  e.preventDefault();
                  store.buttonFilterTab[1]("ARCHIVED")
                }}
                label="ARCHIVED"
             />  
             <ButtonSubmit 
                // disable={value===""?"true":"false"}
                disable={""} 
                onClick={(e)=>{
                  e.preventDefault();
                  store.buttonFilterTab[1]("ALL")
                }}
                label="ALL"
             /> */}
      </div>
      
    </div>  

</form>
  );
}

