import React from "react";
import List from "../src/LeftSide/list";
import Products from "./Products/Products";
import css from './Products/Products.module.css';



const App = () => {
  return (
    <div className={css.container}>
      <List />
      <Products />
    </div>
  );
};

export default App;
