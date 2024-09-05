function TodoItem2() {
  let todoName = "Go to Collage";
  let todoDate = "4/10/2024";
  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-6 todo-item">{todoName}</div>
        <div class="col-4 todo-item">{todoDate}</div>
        <div class="col-2">
          <button
            type="button"
            class="btn 
      btn-danger kg-button"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
