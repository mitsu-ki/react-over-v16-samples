import React from "react";
import { render } from "react-dom";
import { App } from "./App";

import { Provider } from "./store";

const initialState = {
  todos: ["foo", "bar"],
};

function ProviderWrap() {
  return (
    <Provider initialState={initialState}>
      <App />
    </Provider>
  );
}

render(<ProviderWrap />, document.querySelector("#root"));
