import React, { useRef } from "react";
import AddStudent from "./AddStudent";
import Mytable from "../components/table";

function Student() {
  const targetref = useRef();
  const targetref1 = useRef();

  const handleAddButton = () => {
    targetref.current.style.display = "none";
    targetref1.current.style.display = "flex";
  };

  return (
    <div className="student">
      <div className="student-first" ref={targetref}>
        <div className="student-header">
          <div className="student-search">
            <input type="text" placeholder="Search by name..." />
            <button> Search</button>
          </div>
          <div className="student-add" onClick={handleAddButton}>
            <span>+</span>
          </div>
        </div>
        <div className="student-table">
          <Mytable />
        </div>
      </div>

      <div className="student-second" ref={targetref1}>
        <AddStudent />
      </div>
    </div>
  );
}

export default Student;
