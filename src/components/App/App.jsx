import "./App.css";

import Cart from "../Cart/Cart";
import Header from "../Header/Header";
import Main from "../Main/Main";
import React from "react";

// const container = React.createElement(
//   "div",
//   null,
//   React.createElement("h1", null, "Hello App"),
//   React.createElement("p", { className: "descr" }, "App description")
// );

// const Title = ({ title }) => {
//   return <h2 className="secondaryTitle">{title}</h2>;
// };

// Title({ title: "Hello Section 1" }); //  <h2 className="secondaryTitle">Hello Section 1</h2>

function App() {
  // return container;
  return (
    <>
      <Header />
      <Main />
      <Cart />
    </>
  );
}

export default App;
