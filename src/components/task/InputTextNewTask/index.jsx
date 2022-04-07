// InputTextNewTask Component

import React from 'react';
import '../task.css';
import PropTypes from 'prop-types';



function InputTextNewTask({myvalue, handleChange}) {

        
  return (
    <div className='add-task-2'>
          <input id="add-task" type="text" value={myvalue} data-testid="my-input"  placeholder="Add a new task - Press Enter"
          className="form-control border border-primary rounded" onChange={handleChange} />

    </div>
     
  );
}

InputTextNewTask.propTypes = {
   
    myvalue: PropTypes.string.isRequired,
  
    handleChange: PropTypes.func,
};

InputTextNewTask.defaultProps = {
  myvalue: "default",
  handleChange: undefined,
  
};

export default InputTextNewTask