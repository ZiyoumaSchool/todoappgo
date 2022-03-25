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
import Tasksource from '../../../datas/TasksourceOld';




// afterEach(cleanup);

let container = null;
let myValue = "";
let list=[]


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

    var tt = "jajaj";
    let varDate= Date();
    let today = new Date(varDate);
    let userLanguage = window.navigator.userLanguage || window.navigator.language;
        // const handleChange = jest.fn();
        var handleChange = ()=> {
                tt = "nuvibz"
        }       

    function handleDayChange(d) {

        fakeDate = { selectedDay: d}
        console.log("Peaceful Journey", fakeDate.selectedDay.toString());
      }
    
    function handleAdd () {

        console.log("TaskSource", Tasksource)

    }

      
    test('handleDayChange function should work', async () => {
        // render(<SectionAddTask />)
        handleDayChange("2022-4-31".toString())
        expect(fakeDate.selectedDay.toString()).toBe("2022-4-31".toString())
    })

    test('handleChange - Text should change on typing', async () => {
            
        const varTest = "Peace in Africa"
        
        render(            
        <InputTextNewTask myvalue={varTest} handleChange={handleChange} data-testid="my-input" />        
        )
    const inputTest = screen.getByRole('textbox');
        // coTest = await screen.findByTestId(`my-input`);
        console.log("Change 2022", inputTest.value)        
        
    expect(inputTest.value).toBe('Peace in Africa'); // to test input value
    // fireEvent.change(inputTest, { target: { value: 'nuvibz' } }); // triggers onChange event    
    })


    test('handleAdd function should perform adding a new task', async () => {
        
        
        render(  
        <div>          
            <InputTextNewTask myvalue={tt} handleChange={handleChange} data-testid="my-input" />
            <DayPickerInput 
            day={fakeDate}
            onDayChange = {handleDayChange}
            placeholder = ""
            value = {today.toLocaleDateString(userLanguage)}
        />
        <ButtonSubmit disable={tt===""} label="" />
         </div>      
            )
        handleDayChange("2022-4-31".toString())
        expect(fakeDate.selectedDay.toString()).toBe("2022-4-31".toString())
        handleAdd()
    })

    
            
  
        })