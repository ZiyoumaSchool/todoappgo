import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../task.css';
import PropTypes from 'prop-types';
import "../../../index.css";
import {createContext, useState, useContext} from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import ModalComponent from '../../Modal';
import { ApplicationContext } from '../../../pages/TaskHomePage'


export function format(theDate){
  var options = {year:'numeric' , month:'long' , day:"numeric" };
  return new theDate.toLocaleDateString([], options);
}


export default function TaskItem({ taskItem: {  id, title, dateBegin, dateEnd, description, state },
                                                 onArchiveTask,
                                                 onPinTask,
                                                 onSelect 
                                                }) {
  
  //  function InputEdit({title}){
  //    console.log("parapa", {title})
  //    return (
  //  <input type="text"  value={title} disabled={false} />   
  //     )
  //  }  
// let [show, setShow] = useState(false)
const {store, setStore} = useContext(ApplicationContext);

// const date = dateEnd.getFullYear() + '-' + (dateEnd.getMonth() + 1) + '-' + dateEnd.getDate();
//let Dt= Date({dateEnd})
 
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

      <div className="taskitem-date">{dateEnd}</div>
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
  // dateEnd : Date.now(),
  
 };