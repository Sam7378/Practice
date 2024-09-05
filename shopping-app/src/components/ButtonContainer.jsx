import styles from "./ButtonContainer.module.css";

const ButtonContainer = ({ event }) => {
  const buttonNames = [
    "C",
    "+/-",
    "/",
    "%",
    "7",
    "8",
    "9",
    "*",
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
      {buttonNames.map((buttonName) => {
        <buttton
          onClick={(event) => console.log("clicked")}
          className={styles.button}
        >
          {buttonName}
        </buttton>;
      })}
    </div>
  );
};

export default ButtonContainer;
