import ButtonSubmit from'./'
import { screen, render } from '@testing-library/react'
import { unmountComponentAtNode } from "react-dom";

let container = null;
let myValue = "";

const Button = (props) => (
  <button 
    type="submit" 
    onClick={props.onClick} 
    disabled={props.disabled}
  >
    Click me
  </button>
);


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

describe('ButtonSubmit', () => {
    test('Should render properly disabled', async () => {
        myValue = ""
        render(<ButtonSubmit disable={myValue===""?"":"disabled"} />)
        // const disable=myValue===""?true:false
        const buttonSub = screen.getByRole('button')
        expect(buttonSub.getAttribute("disabled")).toBe(null)
        
        

    })

    test('Should render properly Enable', async () => {
      myValue = "Poulet braisé"
      render(<ButtonSubmit disable={myValue===""?"":"disabled"} />)
      // const disable=myValue===""?true:false
      const buttonSub = screen.getByRole('button')
      expect(buttonSub.getAttribute("disabled")).toBe("")
      
      

  })
  
})

