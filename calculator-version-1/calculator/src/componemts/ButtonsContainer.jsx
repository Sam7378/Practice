import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = () => {
  const buttonNames = [
    "C",
    "+/-",
    "%",
    "÷",
    "7",
    "8",
    "9",
    "x",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];
  return (
    <div className={styles.buttoncontainer}>
      {buttonNames.map((buttonName) => (
        <button key={buttonName} className={styles.button}>
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
