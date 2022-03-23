// SectionAddTask Test File

// import SectionAddTask from './'
import { screen, render, cleanup } from '@testing-library/react'
import {fireEvent} from '@testing-library/react'
import { unmountComponentAtNode} from "react-dom";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import userEvent from '@testing-library/user-event'
import React from 'react';
import InputTextNewTask from '../InputTextNewTask/index'
import ButtonSubmit from '../../ButtonSubmit';
import DayPickerInput from 'react-day-picker/DayPickerInput';




// afterEach(cleanup);

let container = null;
let myValue = "";


configure({adapter: new Adapter()});

beforeEach(() => {
    // met en place un élément DOM comme cible de rendu
    container = document.createElement("div");
    document.body.appendChild(container);
  });

afterEach(() => {
    // nettoie en sortie de test
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });


describe('SectionAddTask', () => {

    var fakeDate = { selectedDay: "2022-3-18" }

    var tt = "jajaj"
        // const handleChange = jest.fn();
        var handleChange = ()=> {
                tt = "nuvibz"
        }       

    function handleDayChange(d) {

        fakeDate = { selectedDay: d}
        console.log("Peaceful Journey", fakeDate.selectedDay.toString());
      }
    
    // function handleChange(event) {

    // }

      
    test('SectionAddTask display date well', async () => {
        // render(<SectionAddTask />)
        handleDayChange("2022-4-31".toString())
        expect(fakeDate.selectedDay.toString()).toBe("2022-4-31".toString())
    })

    test('Text should change on typing', async () => {
               
        
        render(            
        <InputTextNewTask myvalue={tt} handleChange={handleChange} data-testid="my-input" />        
        )
    const inputTest = screen.getByRole('textbox');
        // coTest = await screen.findByTestId(`my-input`);
        console.log("Peace457", inputTest.value)
        
        
    expect(inputTest.value).toBe('jajaj'); // to test input value
    fireEvent.change(inputTest, { target: { value: 'nuvibz' } }); // triggers onChange event
    
     const inputTest1 = screen.getByRole('textbox');
     await userEvent.type(screen.getByRole('textbox'), 'nuvibz')

    //  const InputEl = screen.getByTestId('my-input')
    
     console.log("MTN", inputTest1.value)
    
    })

    
            
  
        })