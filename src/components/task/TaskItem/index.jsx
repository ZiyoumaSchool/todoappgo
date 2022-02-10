import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../task.css';
import PropTypes from 'prop-types';
import "../../../index.css";
import { useContext, useState} from 'react';
import { ApplicationContext } from '../../../pages/TaskHomePage/index'




export function format(theDate){
  var options = {year:'numeric' , month:'long' , day:"numeric" };
  var userLanguage = window.navigator.userLanguage || window.navigator.language;
          // const regexDate = /^\d{2}\/\d{2}\/\d{4}$/
          console.log("p35", userLanguage);
          // console.log("p351", regexDate);
          let mdy = ['month', 'date', 'year'];
          let hms = ['hour', 'minute', 'second'];
          mdy = new Date().toLocaleDateString(userLanguage).split("/");
          hms = new Date().toLocaleTimeString(userLanguage).split(/:| /);
          console.log(mdy[0],hms);
  return new theDate.toLocaleDateString([], options);
  
}

let varDate= Date()

export default function TaskItem({ taskItem: {  id, title, dateBegin, dateEnd, description, state },
                                                 onArchiveTask,
                                                 onPinTask,
                                                 onDeleteTask,
                                                 onSelect 
                                                }) {

const {store, setStore} = useContext(ApplicationContext);
var userLanguage = window.navigator.userLanguage || window.navigator.language;

let  today 		= new Date(dateEnd);
console.log("lalalala45", today.toLocaleDateString(userLanguage))
	let  dd 		= String(today.getDate()).padStart(2, '0');
	let  mm 		= String(today.getMonth() + 1).padStart(2, '0'); //janvier = 0
	let  yyyy 		= today.getFullYear();

	var ladate =  dd + '/' + mm + '/' + yyyy;

  const [popup, setPopup] = useState({
    show: false, // initial values set to false and null
    id: null,
  });
  // This will show the Cofirmation Box

const handleDelete = (id) => {
  setPopup({
    show: true,
    id,
  });
};
store.idTaskTab[1](id)
store.titleTaskTab[1](title)
store.dateTaskTab[1](dateEnd)

  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === 'TASK_ARCHIVED'}
          disabled={true}
          name="checked"
        />
        <span
          className="checkbox-custom"
          onClick={() => onArchiveTask(id)}
          ///id={`archiveTask-${id}`}
          aria-label={`archiveTask-${id}`}
        />
      </label>
      <div className='taskitem-1' >
        <div className="title"> 
            <p  onClick={() => {
          store.showModal[1](true)
          store.idTaskTab[1](id)
          store.titleTaskTab[1](title)
          store.dateTaskTab[1](dateEnd)
           }}>
            
            {title}
           
            </p>
        </div>
       </div>
       {/* <ModalComponent title="Edit Task" show={show} /> */}
    

       <div className="actions taskitem-stars">
        {state !== 'TASK_ARCHIVED' && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => onPinTask(id)}>           
            <span className={`icon-star`} id={`pinTask-${id}`} aria-label={`pinTask-${id}`} />            
          </a>
        )}
      </div>
      {/* <Button onClick={() => store.showModal[1](true)}>Large modal</Button> */}

      <div className="taskitem-date"
         onClick={() => {
          store.showModal[1](true)
          store.idTaskTab[1](id)
          store.titleTaskTab[1](title)
          store.dateTaskTab[1](dateEnd)
           }}
      >
        {today.toLocaleDateString(userLanguage)}{' '}             
            
      </div>
      <div className= "taskitem-trash">
      <svg onClick={() => {
                onDeleteTask(id)
                store.idTaskTab[1](id)
                store.titleTaskTab[1](title)
                store.dateTaskTab[1](dateEnd)
                handleDelete(id)
                }
              }
              xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="25" height="25" viewBox="0 0 24 24" stroke-width="0.5" stroke="#597e8d" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <line x1="4" y1="7" x2="20" y2="7" />
                        <line x1="10" y1="11" x2="10" y2="17" />
                        <line x1="14" y1="11" x2="14" y2="17" />
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
              </svg>
      </div>
      {/* <Example /> */}
    </div>
  );
};

TaskItem.propTypes = {
  /** Composition of the task */
  taskItem: PropTypes.shape({
    /** Id of the task */
    id: PropTypes.number.isRequired,
    /** Title of the task */
    title: PropTypes.string.isRequired,
    // dateEnd: PropTypes.string.isRequired,
    /** Current state of the task */
    // state: PropTypes.string.isRequired,
  }),
  /** Event to change the task to archived */
  onArchiveTask: PropTypes.func,
  /** Event to change the task to pinned */
  onPinTask: PropTypes.func,

  onDeleteTask: PropTypes.func,
 };

TaskItem.defaultProps = {
  // loading: true,
  // title : "Peace in Africa",
  // onSelect : false,
  dateEnd : Date.now(),
  
 };