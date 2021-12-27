import React from 'react';
import PropTypes from 'prop-types';
import './ButtonSubmit.css';


function ButtonSubmit ({ primary, disable, backgroundColor, size, label, onClick, ...props }) {

    //const mode = primary ? 'button--primary' : 'button--secondary';

    return(
        <div className="buttonsubmit1">
            {/* <button class={['button', `button--${size}`, mode].join(' ')} type="button" disabled={disable}>
                {label}
            </button> */}
            {/* <input type="button" 
               className="btn btn-primary" 
               size={size} value={label} 
               disabled={disable} /> */}
            <button 
            className="btn btn-primary" 
            size={size}
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
     * Is this the principal call to action on the page?
     */
    primary: PropTypes.bool,
    /**
     * What background color to use
     */
    backgroundColor: PropTypes.string,
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
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
    disable:"true",
    onClick: undefined,
  };



export default ButtonSubmit;