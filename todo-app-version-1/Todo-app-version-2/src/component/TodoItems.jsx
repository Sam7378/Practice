import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems = ({ todoItems }) => {
  return (
    <div className={styles.itemContainer}>
      {todoItems.map((item) => (
        <TodoItem todoName={item.name} todoDame={item.duedate}></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
