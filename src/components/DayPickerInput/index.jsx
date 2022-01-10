import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import PropTypes from 'prop-types';
import 'react-day-picker/lib/style.css';
import './DayPickerInput.css';
// import "../../../index.css";
import {createContext, useState, useContext} from 'react';

// export default class MyForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleDayChange = this.handleDayChange.bind(this);
//     this.state = {
//       selectedDay: undefined,
//     };
//   }

//   handleDayChange(day) {
//     this.setState({ selectedDay: day });
//   }

//   render() {
//     const { selectedDay } = this.state;
//     return (
//       <div className='daypicker1'>
//         {selectedDay && <p>Day: {selectedDay.toLocaleDateString()}</p>}
//         {!selectedDay && 
//         <p>Choose a day</p>}
//         <DayPickerInput onDayChange={this.handleDayChange} />
//       </div>
//     );
//   }
// }

export default function DayPickerInputText(day){

    const [d, setD] = useState(day)
   let selectedDay = '';

 function handleDayChange() {
        selectedDay = day
      }

    //   rreturn ()
    //         const { selectedDay } = this.state;
           
            return (
              <div className='daypicker1'>
                {selectedDay && <p>Day: {selectedDay.toLocaleDateString()}</p>}
                {selectedDay==="" && 
                <p>Choose a day</p>}
                <DayPickerInput onDayChange={handleDayChange()} />
              </div>
            );
        //   }

}


DayPickerInputText.propTypes = {
    /** Checks if it's in loading state */
    day:undefined,
  
   };
//    TaskList.defaultProps = {
//     loading: false,
//    };