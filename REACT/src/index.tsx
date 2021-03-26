import React from "react";
import ReactDOM from "react-dom";

import Input, { InputProps } from "./components/Input";

declare global {
  interface Window {
    ReactInput: any;
  }
}

window.ReactInput = {
  mount: ({ handleReactInputChange, inputText }: InputProps) => {
    const el = document.getElementById("react-app") as HTMLElement;

    const component = (
      <Input
        handleReactInputChange={handleReactInputChange}
        inputText={inputText}
      />
    );
    ReactDOM.render(component, el);
  },
  unmount: () => {
    const el = document.getElementById("react-app") as HTMLElement;
    ReactDOM.unmountComponentAtNode(el);
  },
};
