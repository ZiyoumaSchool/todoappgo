import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../task.css';
import InputTextNewTask from '../InputTextNewTask';
import ButtonSubmit from '../../ButtonSubmit';


export default function SectionAddTask(title) {

  const [value, setValue] = React.useState('');

        const handleChange = (event) => {
          setValue(event.target.value);
        };

  return (
<form>
    <div className="form-group  wrapper">
      <div className='add-task-1'>          
            <InputTextNewTask title={title} value={value} handleChange={handleChange} />
            <ButtonSubmit disable={!value} />
            {/* <input type="button" value="papapapa" disabled="true" /> */}
          
      </div>
    </div>

  

</form>
  );
}