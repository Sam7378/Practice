import ButtonContainer from "./ButtonContainer";
import styles from "./Display.module.css";

const Display = ({ displayValue }) => {
  return (
    <input
      className={styles.display}
      type="text"
      value={displayValue}
      readOnly
      let
      sam
    />
  );
};

export default Display;
