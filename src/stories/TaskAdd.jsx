import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default function TaskAdd({ task: { id, title, dateBegin, dateEnd, description, state }, onArchiveTask, onPinTask }) {
  return (
<form>
    <div className="form-group">
      <input type="text" value={title} readOnly={true} />
    </div>
  

</form>
  );
}