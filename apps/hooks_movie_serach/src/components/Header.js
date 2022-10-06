import React from "react";

const Header = (props) => {
  return (
    <header className="App-herader">
      <h2>{props.text}</h2>
    </header>
  );
};

export default Header;
