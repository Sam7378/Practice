function AddTodo() {
  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-6">
          <input
            className="input-bar"
            type="text"
            placeholder="EnterTodo   Here"
          />
        </div>
        <div class="col-4">
          <input className="input-bar" type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success kg-button kg">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
