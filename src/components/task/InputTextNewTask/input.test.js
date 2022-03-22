// InputTextNewTask Test File

import InputTextNewTask from './'
import { screen, render, fireEvent, cleanup } from '@testing-library/react'
import { unmountComponentAtNode} from "react-dom";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

afterEach(cleanup);

let container = null;
let myValue = "";


configure({adapter: new Adapter()});


describe('InputTextNewTask', () => {


    test('InputTextNewTask Should render without crash', async () => {
        render(<InputTextNewTask />)
    })

    test('InputTextNewTask - Should perform action when text changes', async () => {
        const handleChange = jest.fn();
        const tt = "jajaj"
        
        
        render(            
        <InputTextNewTask myvalue={tt} handleChange={handleChange} data-testid="my-input" />        
        )
        const inputNode = screen.getByRole('textbox');
        // const inputNode = await screen.findByTestId(`my-input`);
        
        
    expect(inputNode.value).toBe('jajaj'); // to test input value
    // fireEvent.change(inputNode, { target: { value: 'su' } }); // triggers onChange event
    // expect(inputNode.value).toBe('su'); // to test input value
    // expect(handleChange).toBeCalledWith('su'); // tests if onChange handler is called with proper value
        
             
            
  
        })
})