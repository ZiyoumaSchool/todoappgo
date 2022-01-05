import React, {useContext, useState}  from 'react';
import PropTypes from 'prop-types';
import {Tasksource} from '../../datas/Tasksource';
import "../../index.css"
import { ApplicationContext } from '../../pages/TaskHomePage';

import TaskItem from './TaskItem';


export default function TaskList({ loading, tasks, onPinTask, onArchiveTask }) {

  //const {state1, setState1} = useContext(ApplicationContext);
  const {store, setStore} = useContext(ApplicationContext);
  // const [myvalue, setMyvalue] = useState('');

  function OnArchiveTask(id){
    
    console.log("Voici alors l id", id)
    //const {state, setState} = useContext(ApplicationContext);
    console.log("La liste", store.stateList[0])
    store.stateList[1](store.stateList[0].filter(item=>item.id!==id))
  }

  const events = {
    onPinTask,
    onArchiveTask,
  };

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );
  if (loading) {
    return (
      <div className="list-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }
  if (Tasksource.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no tasks</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }
  const tasksInOrder = [
    ...tasks.filter(t => t.state === 'TASK_PINNED'),
    ...tasks.filter(t => t.state !== 'TASK_PINNED'),
  ];
  return (
    <div className="list-items">
      {tasksInOrder.map(taskItem => (
        <TaskItem key={taskItem.id} taskItem={taskItem} {...events} onArchiveTask={OnArchiveTask} />
      ))}
    </div>
  );
};


TaskList.propTypes = {
    /** Checks if it's in loading state */
    loading: PropTypes.bool,
    /** The list of tasks */
    tasks: PropTypes.arrayOf(PropTypes.shape({
      /** Id of the task */
      id: PropTypes.number.isRequired,
      /** Title of the task */
      title: PropTypes.string.isRequired,
      /** Current state of the task */
      // state: PropTypes.string.isRequired,
    }) ).isRequired,
    /** Event to change the task to pinned */
    onPinTask: PropTypes.func,
    /** Event to change the task to archived */
    onArchiveTask: PropTypes.func,
   };
   TaskList.defaultProps = {
    loading: false,
   };