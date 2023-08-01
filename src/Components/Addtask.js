import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/Reducers/ListTask";

const Addtask = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.listTask.list);
  const [task, setTask] = useState({
    id: list.length + 1,
    title: "",
    statut: false,
  });
  return (
    <div>
      <div className="input-container">
        <input
          type="text"
          value={task.title}
          placeholder="Enter your to-do-list"
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
        <button
          id="add"
          className="button"
          onClick={() => {
            dispatch(addTodo(task));
            setTask({ ...task, title: "" })
          }}
        >
          add
        </button>
      </div>
    </div>
  );
};

export default Addtask;
