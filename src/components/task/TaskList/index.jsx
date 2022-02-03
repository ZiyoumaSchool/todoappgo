import React, {useContext, useState}  from 'react';
import PropTypes from 'prop-types';
import {Tasksource} from '../../../datas/Tasksource';
import "../../../index.css"
import { ApplicationContext } from '../../../pages/TaskHomePage';

import TaskItem from '../TaskItem';
import '../task.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


export default function TaskList({ loading, tasks, onPinTask, onArchiveTask }) {

  //const {state1, setState1} = useContext(ApplicationContext);
  const {store, setStore} = useContext(ApplicationContext);

  const notify = (msg) => toast(msg);
  // const [myvalue, setMyvalue] = useState('');

  console.log("Le POPO",store.buttonFilterTab[0] )

//////////////////////  OnArchiveTask //////////////////////////////////////

  function OnArchiveTask(id1) {
    // const e = Event;
    // e.preventDefault();
    
    let editTab = store.stateList[0];
    console.log("BLALALALA", id1);
    let desc = "";
    for(let i=0;i<editTab.length;i++){
    // if(editTab[i].id===store.idTaskTab[0]){
      if(editTab[i].id===id1 && editTab[i].state !=="TASK_ARCHIVED" ){
      console.log("Archivage ", editTab[i]);
      desc = editTab[i].title;
      editTab[i]={
        id:  editTab[i].id, 
        title: editTab[i].title, 
        dateEnd:  editTab[i].dateEnd, 
        state:  "TASK_ARCHIVED"
      }
      notify("Tache : "+desc+" archivée avec succès");

    } else if (editTab[i].id===id1 && editTab[i].state ==="TASK_ARCHIVED" ) {
      desc = editTab[i].title;
      editTab[i]={
       id:  editTab[i].id, 
       title: editTab[i].title, 
       dateEnd:  editTab[i].dateEnd, 
       state:  "TASK_INBOX"
     }
     notify("Tache : "+desc+" restaurée avec succès");
    }
  }
    
    store.stateList[1](editTab)
    store.stateList[1](store.stateList[0].filter(item=>item.state!==""))
    console.log("Le STORY ", store.stateList[0])
    // store.showModal[1](false)
  }

  //////////////////////  End OnArchiveTask //////////////////////////////////////


  //////////////////////  OnPinnedTask //////////////////////////////////////

  function onPinTaskFunction(id1) {
    // const e = Event;
    // e.preventDefault();
    
    let editTab = store.stateList[0];
    let desc = "";
    console.log("BLALALALA", id1)
    for(let i=0;i<editTab.length;i++){
    // if(editTab[i].id===store.idTaskTab[0]){
      if(editTab[i].id===id1 && editTab[i].state !=="TASK_PINNED" ){
        desc = editTab[i].title
      console.log("Activate Pinned ", editTab[i])
      editTab[i]={
        id:  editTab[i].id, 
        title: editTab[i].title, 
        dateEnd:  editTab[i].dateEnd, 
        state:  "TASK_PINNED"
      }

      notify("Task : "+desc+" Pinned with success");
      
    }  else if(editTab[i].id===id1 && editTab[i].state ==="TASK_PINNED" ){
      desc = editTab[i].title
    console.log("Desactivate Pinned ", editTab[i])
    editTab[i]={
      id:  editTab[i].id, 
      title: editTab[i].title, 
      dateEnd:  editTab[i].dateEnd, 
      state:  "TASK_INBOX"
    }

    notify("Task : "+desc+" Unpinned with success");
    
  }        

  }
     

      store.stateList[1](editTab)
      store.stateList[1](store.stateList[0].filter(item=>item.state!==""))
      console.log("Le STORY ", store.stateList[0])

  

}

  //////////////////////  End /OnPinnedTask //////////////////////////////////////


  // function OnArchiveTask(id){
    
  //   console.log("Voici alors l id", id)
  //   //const {state, setState} = useContext(ApplicationContext);
  //   console.log("La liste", store.stateList[0])
  //   store.stateList[1](store.stateList[0].filter(item=>item.id!==id))
  // }

  const events = {
    onPinTask,
    onArchiveTask,
  };

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );
  if (loading) {
    return (
      <div className="list-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }
  if (Tasksource.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no tasks</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }
  const tasksInOrder = [
    ...tasks.filter(t => t.state === 'TASK_PINNED'),
    ...tasks.filter(t => t.state !== 'TASK_PINNED'),
  ];
  return (
  <div>

 {  

  (store.buttonFilterTab[0]==="ALL" || store.buttonFilterTab[0]==="INBOX")? 
    (
    <Tabs>
    <TabPanel>
    <div className="title-wrapper">
      <nav>
            <h6 className="title-page">
                <span className = "title-wrapper">Tasks Inbox</span>
            </h6>
        </nav>
      {tasksInOrder.map(taskItem => (
        taskItem.state !== "TASK_ARCHIVED" ?(
        <TaskItem key={taskItem.id} taskItem={taskItem} {...events} onPinTask={onPinTaskFunction} onArchiveTask={OnArchiveTask} />
        ):null
      ))}
    </div>
    </TabPanel>
    </Tabs>
    )
    :<div><p></p></div>

  }

  {

    (store.buttonFilterTab[0]==="ALL" || store.buttonFilterTab[0]==="ARCHIVED")? 
    (
      <Tabs>
    <TabPanel>
    <div className="title-wrapper-archived">
      <nav>
            <h6 className="title-page">
                <span>Tasks Archived</span>
            </h6>
        </nav>
        
      {tasksInOrder.map(taskItem => (        
        taskItem.state === "TASK_ARCHIVED" ?(              
        <TaskItem key={taskItem.id} taskItem={taskItem} {...events} onArchiveTask={OnArchiveTask} />        
        ):null  
        
      ))}
      
    </div>
    </TabPanel>
    </Tabs>
    )  : (<div><p></p></div>)

}
    </div>
  );
};


TaskList.propTypes = {
    /** Checks if it's in loading state */
    loading: PropTypes.bool,
    /** The list of tasks */
    tasks: PropTypes.arrayOf(PropTypes.shape({
      /** Id of the task */
      id: PropTypes.number.isRequired,
      /** Title of the task */
      title: PropTypes.string.isRequired,
      /** Current state of the task */
      // state: PropTypes.string.isRequired,
    }) ).isRequired,
    /** Event to change the task to pinned */
    onPinTask: PropTypes.func,
    /** Event to change the task to archived */
    onArchiveTask: PropTypes.func,
   };
   TaskList.defaultProps = {
    loading: false,
   };