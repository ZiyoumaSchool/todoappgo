import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../task.css';
import { useEffect, useState } from 'react';



export default function InputTextNewTask({title, value, handleChange}) {

        

//export default function TaskAdd({ task: { id, title, dateBegin, dateEnd, description, state }, onArchiveTask, onPinTask }) {
  return (
    <div className='add-task-1'>
          <input type="text" value={value} name="title"  placeholder="Add a new task - Press Enter"
          className="form-control border border-primary rounded" onChange={handleChange} readOnly={false}  />


          {/* <input name="email" value={this.state.email} onChange={this.handleChange}/> */}
    </div>
     
  );
}