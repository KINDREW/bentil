import React from "react";

function AddStudent() {
  return (
    <div className="add-student">
      <div className="student-save">
        <h1>Add new student</h1>
      </div>
      <div className="student-inputs">
        <div className="student-column">
          <input type="file" capture="user" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </div>
        <div className="student-column">
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </div>
        <div className="student-column">
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <button>Save </button>
        </div>
      </div>
    </div>
  );
}

export default AddStudent;
