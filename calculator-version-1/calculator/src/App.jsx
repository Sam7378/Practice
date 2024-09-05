import styles from "./App.module.css";
import ButtonsContainer from "./componemts/ButtonsContainer";
import Disply from "./componemts/Display";

function App() {
  return (
    <div className={styles.calculator}>
      <Disply></Disply>
      <ButtonsContainer></ButtonsContainer>
    </div>
  );
}

export default App;
