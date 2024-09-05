function AddTodo() {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input
            className="input-bar"
            type="text"
            placeholder="EnterTodo   Here"
          />
        </div>
        <div className="col-4">
          <input className="input-bar" type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button kg">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
