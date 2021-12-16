import React from 'react';
import './task.css';

export default function TaskItem({ taskItem: {  id, title, dateBegin, dateEnd, description, state }, onArchiveTask, onPinTask }) {
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
          id={`archiveTask-${id}`}
          aria-label={`archiveTask-${id}`}
        />
      </label>
      <div className='taskitem-1'>
        <div className="title">
            <input type="text" className="form-control border border-primary rounded"
             value={title} readOnly={true} placeholder="Input title" />
        </div>
       </div>
    

      <div className="actions" onClick={event => event.stopPropagation()}>
        {state !== 'TASK_ARCHIVED' && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => onPinTask(id)}>
            <span className={`icon-star`} id={`pinTask-${id}`} aria-label={`pinTask-${id}`} />
          </a>
        )}
      </div>
    </div>
  );
}