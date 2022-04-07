import React from 'react';
import PropTypes from 'prop-types';
import './ButtonSubmit.css';


function ButtonSubmit ({ disable, label, onClick }) {

    return(
        <div className="buttonsubmit1">
            
            <button 
            className="btn btn-primary" 
            disabled={disable}
            onClick={onClick}
            >
             {label}
            </button>
        </div>
    )
}

ButtonSubmit.propTypes = {
   
    /**
     * Button contents
     */
    label: PropTypes.string.isRequired,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
  };
  
  ButtonSubmit.defaultProps = {
    backgroundColor: "#1ea7fd",
    primary: true,
    size: 'medium',
    label: "Add",
    disable:true,
    onClick: undefined,
  };



export default ButtonSubmit;