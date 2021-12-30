import React from 'react';
import './task.css';
import PropTypes from 'prop-types';
import "../../index.css"





export default function TaskItem({ taskItem: {  id, title, dateBegin, dateEnd, description, state },
                                                 onArchiveTask,
                                                 onPinTask,
                                                 onSelect 
                                                }) {

 
 
  return (
    <div className={`list-item ${state}`} onClick={()=>onSelect(id)}>
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
      <div className='taskitem-1'>
        <div className="title">
            {/* <input type="text" className="form-control border border-primary rounded"
             value={title} readOnly={true} placeholder="Input title" /> */}
            {title}
        </div>
       </div>
    

       <div className="actions taskitem-stars" onClick={event => event.stopPropagation()}>
        {state !== 'TASK_ARCHIVED' && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => onPinTask(id)}>           
            <span className={`icon-star`} id={`pinTask-${id}`} aria-label={`pinTask-${id}`} />            
          </a>
        )}
      </div>

      <div className="taskitem-date">{dateEnd}</div>
      
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
    /** Current state of the task */
    state: PropTypes.string.isRequired,
  }),
  /** Event to change the task to archived */
  onArchiveTask: PropTypes.func,
  /** Event to change the task to pinned */
  onPinTask: PropTypes.func,
 };