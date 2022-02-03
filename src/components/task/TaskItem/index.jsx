import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../task.css';
import PropTypes from 'prop-types';
import "../../../index.css";
import { useContext} from 'react';
import { ApplicationContext } from '../../../pages/TaskHomePage'


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
            {/* <input type="text" className="form-control border border-primary rounded"
             value={title} readOnly={true} placeholder="Input title" /> */}
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

      <div className="taskitem-date">{today.toLocaleDateString(userLanguage)}</div>
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
 };

TaskItem.defaultProps = {
  // loading: true,
  // title : "Peace in Africa",
  // onSelect : false,
  dateEnd : Date.now(),
  
 };