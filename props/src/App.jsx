import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // let foodItems = ["sabzi", "Roti", "Green Vegetable", "Salad", "Milk"];
  // let foodItems = [];

  let [foodItems, setFoodItems] = useState([
    // "salad",
    // "Roti",
    // "Green Vegetable",
  ]);
  // console.log(`current value of textState:${textToShow}`);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoddItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoddItem];
      setFoodItems(newItems);
      console.log("Food value enter is: " + newFoddItem);
    }
    // console.log(event);
    // setTextState(event.target.value);
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput handleKeyDown={onKeyDown} />
        <ErrorMessage items={foodItems} />
        {/* <p>{textToShow}</p> */}
        <FoodItems items={foodItems} />
      </Container>

      {/* <Container>
        <p>
          Above is the list of healthy foods that are good for your health and
          well being.
        </p>
      </Container> */}
    </>
  );
}

export default App;
