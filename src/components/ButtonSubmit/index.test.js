//ButtonSubmit Test

import ButtonSubmit from'./'
import { screen, render } from '@testing-library/react'
import { unmountComponentAtNode} from "react-dom";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';



let container = null;
let myValue = "";
let theLabel = "";

configure({adapter: new Adapter()});

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

  // const myMock = jest.fn();

  // const a = new myMock();
  // const b = {};
  // const bound = myMock.bind(b);
  // bound();
  
  // console.log("Peace in CMR",myMock.mock.instances);
  // > [ <a>, <b> ]

  const myMock = jest.fn();
  console.log(myMock());
  // > undefined

  myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

  console.log(myMock(), myMock(), myMock(), myMock());
// > 10, 'x', true, true



describe('ButtonSubmit', () => {
    test('Should render properly disabled', async () => {
        myValue = ""
        render(<ButtonSubmit disable={myValue===""} />)
        // const disable=myValue===""?true:false
        const buttonSub = screen.getByRole('button')
        expect(buttonSub.disabled).toEqual(true)
        
      })

    test('Should render properly Enable', async () => {
      myValue = "Poulet braisé"
      render(<ButtonSubmit disable={myValue===""} />)
      // const disable=myValue===""?true:false
      const buttonSub = screen.getByRole('button')
      expect(buttonSub.disabled).toEqual(false)     

      })
    
    test('Should display Button Label', async () => {
        theLabel = "Poulet braisé"
        render(<ButtonSubmit disable={myValue===""} label={theLabel} />)
        // const disable=myValue===""?true:false
        const buttonSub = screen.getByRole('button')
        expect(buttonSub.textContent).toEqual("Poulet braisé")     
  
        })
    
    test('Should perform action when pressed', async () => {
          const onClick = jest.fn();

          const buttonTest = shallow((<ButtonSubmit onClick={onClick}/>));
          buttonTest.find('button').simulate('click');
          // render(<ButtonSubmit onClick={onClick} />)
          // const buttonSub = screen.getByRole('button')          
          // ReactTestUtils.Simulate.click(findDOMNode(buttonSub)); 
          console.log("UTILS 01",onClick.mock.calls.length)  
          expect(onClick.mock.calls.length).toEqual(1);
    
          })
  
})

