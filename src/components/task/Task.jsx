import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default function Task({ task: { id, title, dateBegin, dateEnd, description, state }, onArchiveTask, onPinTask }) {
  return (
<form>
    <div className="form-group">
    
      <input type="text" value={title} readOnly={true} />
    </div><br/><br/>
    <div className="form-group">
      <input type="text" value={ dateBegin} readOnly={true} />
    </div><br/><br/>
    <div className="form-group">
      <input type="text" value={dateEnd} readOnly={true} />
    </div><br/><br/>
    <div className="form-group">
    <label for="description">Description</label>
    <textarea class="form-control" id="description" rows="3"></textarea>
  </div><br/><br/>

</form>
  );
}