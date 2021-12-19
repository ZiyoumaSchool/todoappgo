import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../task.css';


export default function InputTextNewTask({title}) {
//export default function TaskAdd({ task: { id, title, dateBegin, dateEnd, description, state }, onArchiveTask, onPinTask }) {
  return (
<form>
    <div className="form-group  wrapper">
      <div className='add-task-1'>
          <input type="text" value={title} name="title"  placeholder="Add a new task - Press Enter"
          className="form-control border border-primary rounded" readOnly={false}  />
      </div>
    </div>

  

</form>
  );
}