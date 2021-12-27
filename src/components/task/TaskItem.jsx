import React from 'react';
import './task.css';
import PropTypes from 'prop-types';
import star from './star.svg';
import starfill from './star-fill.svg';

export default function TaskItem({ taskItem: {  id, title, dateBegin, dateEnd, description, state }, onArchiveTask, onPinTask }) {
 
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === 'TASK_ARCHIVED'}
          disabled={false}
          name="checked"
        />
        <span
          className="checkbox-custom"
          onClick={() => onArchiveTask(id)}
          id={`archiveTask-${id}`}
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
            <img src={star} alt='soinned' />

            {/* const scaleType = careType === 'light' ? ( 
        <img src={Sun} alt='sun-icon' /> ) : (
            <img src={Water} alt='water-icon' />
        )  */}

            {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
              <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z">
              </path>
            </svg>

             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
              <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z">
              </path>
            </svg> */}
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