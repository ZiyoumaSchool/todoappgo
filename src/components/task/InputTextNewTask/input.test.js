// InputTextNewTask Test File

import InputTextNewTask from './'
import { screen, render, cleanup } from '@testing-library/react'
import {fireEvent} from '@testing-library/react'
import { unmountComponentAtNode} from "react-dom";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import userEvent from '@testing-library/user-event'

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


describe('InputTextNewTask', () => {


    test('InputTextNewTask Should render without crash', async () => {
        render(<InputTextNewTask />)
    })

    test('InputTextNewTask - Should perform action when text changes', async () => {

        var tt = "jajaj"
        // const handleChange = jest.fn();
        var handleChange = ()=> {
                tt = "nuvibz"
        }       
        
        
        render(            
        <InputTextNewTask myvalue={tt} handleChange={handleChange} data-testid="my-input" />        
        )
    const inputTest = screen.getByRole('textbox');
        // coTest = await screen.findByTestId(`my-input`);
        
        
    expect(inputTest.value).toBe('jajaj'); // to test input value
    fireEvent.change(inputTest, { target: { value: 'nuvibz' } }); // triggers onChange event
    
     const inputTest1 = screen.getByRole('textbox');
     await userEvent.type(screen.getByRole('textbox'), 'nuvibz')

    //  const InputEl = screen.getByTestId('my-input')
    
     console.log("Peace457", inputTest1.value)
     userEvent.clear(screen.getByRole('textbox', 'email'))
    //  expect(inputTest1.value).toBe('nuvibz'); // to test input value
    //  expect(screen.getByRole('textbox')).toHaveValue('nuvibz')
    // expect(handleChange).toBeCalledWith('su'); // tests if onChange handler is called with proper value
        
             
            
  
        })
})