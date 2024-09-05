import styles from "./Item.module.css";

const Item = ({ foodItem, handleBuyButton }) => {
  return (
    <li className={`${styles["list-item"]} list-group-item`}>
      <span className={styles["food-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-success`}
        onClick={handleBuyButton}
      >
        buy
      </button>
    </li>
  );
};

export default Item;
