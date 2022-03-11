import React from 'react';
//import 'bootstrap/dist/css/bootstrap.css';
import '../task.css';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';



function InputTextNewTask({title, myvalue, handleChange}) {

        

//export default function TaskAdd({ task: { id, title, dateBegin, dateEnd, description, state }, onArchiveTask, onPinTask }) {
  return (
    <div className='add-task-2'>
          <input id="add-task" type="text"  name="title" value={myvalue}  placeholder="Add a new task - Press Enter"
          className="form-control border border-primary rounded" onChange={handleChange} />


          {/* <input name="email" value={this.state.email} onChange={this.handleChange}/> */}
    </div>
     
  );
}

// InputTextNewTask.PropTypes = {

// }

InputTextNewTask.defaultProps = {
  value : "Insérer new Task"
}


export default InputTextNewTask