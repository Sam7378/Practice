import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./componemts/ButtonsContainer";
import Display from "./componemts/Display";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
    if (buttonText === "x") {
      const multiValue = calVal * buttonText;
      setCalVal(multiValue);
    } else if (buttonText === "÷") {
      const diviValue = calVal / buttonText;
      setCalVal(diviValue);
    }
    //  else if (buttonText === "%") {
    //   const persValue = calVal % buttonText;
    //   setCalVal(persValue);
    // } else {
    // }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
