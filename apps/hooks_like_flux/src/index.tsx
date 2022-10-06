import * as React from "react";
import { render } from "react-dom";
import { Todo } from "./Todo";
import "./index.css";
import { StoreProvider } from "./Flux";

const InnerApp = () => {
  return <Todo />;
};

const App = () => {
  return (
    <StoreProvider>
      <InnerApp />
    </StoreProvider>
  );
};

render(<App />, document.getElementById("root"));
