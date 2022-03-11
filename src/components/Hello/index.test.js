// hello.test.js

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';

import Hello from ".";

let container = null;

beforeEach(() =>{
    //met en place un élément DOM comme cible de rendu
    container = document.createElement("div");
    document.body.appendChild(container)
});


afterEach(() => {
    // nettoie en sortie de test
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});


it("s'affiche avec ou sans nom", () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
        render(<Hello name=""/>, container);

    });

    expect(container.textContent).toBe("Salut, étranger");

    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
        render(<Hello name="Jenny" />, container);
      });
      expect(container.textContent).toBe("Bonjour, Jenny !");
    // eslint-disable-next-line testing-library/no-unnecessary-act
      act(() => {
        render(<Hello name="Margaret" />, container);
      });
      expect(container.textContent).toBe("Bonjour, Margaret !");
    
})