import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import TodoItems from "./component/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      duedate: "4/10/2024",
    },
    {
      name: "Go to Collage",
      duedate: "4/10/2024",
    },
    {
      name: "Go to Gym",
      duedate: "2/10/2024",
    },
  ];
  return (
    <center className="todo-container ">
      <AppName />
      <AddTodo />

      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
