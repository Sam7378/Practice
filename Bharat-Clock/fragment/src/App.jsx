import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let foodItems = ["Dal", "Roti", "Green Vegetable", "Salad"];
  // let foodItems = [];

  // let emptyMessage =
  //   foodItems.length === 0 ? <h3>I am still hungary</h3> : null;

  //if else statement
  // if (foodItems.length === 0) {
  //   return <h3>i am hungary</h3>;
  // }

  return (
    <>
      <h1 className="heading">Healthy Food</h1>
      {/* {emptyMessage} */}

      {/* ternary Operator
      {foodItems.length === 0 ? <h3>I am still hungary</h3> : null} */}

      {/* logical operators */}
      {foodItems.length === 0 && <h3 className="headings">i am hungary</h3>}

      <ul className="list-group list-css">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
