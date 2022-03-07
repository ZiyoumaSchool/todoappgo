import React from 'react';
import ReactDOM from 'react-dom';
// import './task.css';
import PropTypes from 'prop-types';
import "../../index.css";
import {createContext, useState, useContext} from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { ApplicationContext } from '../../pages/TaskHomePage/index'

  const DefaultComponent =()=>{
    // const {store, setStore} = useContext(ApplicationContext);
    return (
      <form>
      <input type="text" placeholder='La pasta plaza' readOnly={false}/>
      {/* <input type="text" placeholder={store.titleTaskTab[0]} readOnly={false}/> */}
      {/* <textarea></textarea> */}
      </form>   
    )
  }

// export default function ModalComponent({ loading, tasks, onPinTask, onArchiveTask }) {
  export default function ModalComponent({ title, component, show }) {
    // const [smShow, setSmShow] = useState(false);
    //const [lgShow, setLgShow] = useState(show);
    const {store} = useContext(ApplicationContext);
  
    return (
      <>
        {/* <Button onClick={() => setSmShow(true)}>Small modal</Button>{' '} */}
        {/* <Button onClick={() => setLgShow(true)}>Large modal</Button> */}
        {/* <Modal
          size="sm"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              Small Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>...</Modal.Body>
        </Modal> */}
        <Modal
          size="lg"
          show={store.showModal[0]}
          onHide={() => store.showModal[1](false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              {title}{' - '}
              {store.idTaskTab[0]}{' - '}
              {store.titleTaskTab[0]}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
                {component}
          </Modal.Body>
        </Modal>
      </>
    );
  }

  ModalComponent.propTypes = {
    /** Checks if it's in loading state */
    loading: PropTypes.bool,
    title: PropTypes.string.isRequired,
    /** The list of tasks */
    // tasks: PropTypes.arrayOf(PropTypes.shape({
    //   /** Id of the task */
    //   id: PropTypes.number.isRequired,
    //   /** Title of the task */
    //   title: PropTypes.string.isRequired,
    //   /** Current state of the task */
    //   state: PropTypes.string.isRequired,
    // }) ).isRequired,
    /** Event to change the task to pinned */
    // onPinTask: PropTypes.func,
    // /** Event to change the task to archived */
    // onArchiveTask: PropTypes.func,
   };
   ModalComponent.defaultProps = {
    // loading: true,
    title : "Peace in Africa",
    component:DefaultComponent(),
    show : false
   };

