import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Addtask from "./Addtask";
import { deleteTodo, editTodo, statutTodo } from "../Redux/Reducers/ListTask";

const Home = () => {
  const list = useSelector((state) => state.listTask.list);
  const dispatch = useDispatch();
  const [editingStates, setEditingStates] = useState({})
  const [editedTitle, setEditedTitle] = useState("")
  const [showDoneTasks, setShowDoneTasks] = useState(null)
  const [showNotDoneTasks, setShowNotDoneTasks] = useState(null)

  const handleEdit = (id, title) => {
    setEditingStates({ ...editingStates, [id]: true })
    setEditedTitle(title)
  }

  const handleSaveTask = (id, title) => {
    console.log(title, id);
    dispatch(editTodo({ id, title }))
    setEditingStates({ ...editingStates, [id]: false })
    setEditedTitle('') //for just clear the edited afer saving
  }

  let filteredList = list
  if (showDoneTasks === true) {
    filteredList = list.filter(el => el.statut === false)
  }
  else if (showNotDoneTasks === true) {
    filteredList = list.filter(el => el.statut === true)
  }


  return (
    <div className="tasksCard">
      <div>
        <h1>List To Do</h1>
      </div>
      <div className="add">
        <Addtask />
      </div>
      <div>

        <div className="checkbox" >
          <label class="material-checkbox">
            <input
              type="checkbox"
              checked={showDoneTasks === true}
              onChange={() => setShowDoneTasks(!showDoneTasks)}
            />
            <span className="checkmark"></span>
            Done
          </label>
          <label class="material-checkbox">
            <input
              type="checkbox"
              checked={showNotDoneTasks === true}
              onChange={() => setShowNotDoneTasks(!showNotDoneTasks)}
            />
            <span className="checkmark"></span>
            NotDone
          </label>
        </div>
        {filteredList.map((item) => (
          <div key={item.id}>
            {
              editingStates[item.id] ? (
                <div className="save">
                  <input
                    className="card"
                    type="text"
                    value={editedTitle}
                    onChange={(e) => {
                      setEditedTitle(e.target.value)
                    }}
                  />
                  <button
                    style={{
                      color: "white",
                      borderRadius: "4px",
                      backgroundColor: "#454b00",
                      height: "40px"
                    }}
                    onClick={() =>
                      handleSaveTask(item.id, editedTitle)}>
                    Save
                  </button>
                </div>
              ) : (
                <div className="task">
                  <div
                    className="blockTask"
                    style={{
                      textDecoration: item.statut ? "line-through" : "none",
                    }}
                  >
                    <div className="div">
                      <div>
                        <input
                          type="checkbox"
                          id="myCheck"
                          onChange={() => {
                            dispatch(statutTodo(item.title));
                          }}
                        />
                      </div>
                      <div>
                        {item.title}
                      </div>
                    </div>


                    <div>
                      <button
                        className="tooltip"
                        onClick={() => handleEdit(item.id, item.title)}
                      >
                        <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                          width="20px" height="20px" viewBox="0 0 494.936 494.936">
                          <g>
                            <g>
                              <path fill="#454b00" d="M389.844,182.85c-6.743,0-12.21,5.467-12.21,12.21v222.968c0,23.562-19.174,42.735-42.736,42.735H67.157 c-23.562,0-42.736-19.174-42.736-42.735V150.285c0-23.562,19.174-42.735,42.736-42.735h267.741c6.743,0,12.21-5.467,12.21-12.21 s-5.467-12.21-12.21-12.21H67.157C30.126,83.13,0,113.255,0,150.285v267.743c0,37.029,30.126,67.155,67.157,67.155h267.741 c37.03,0,67.156-30.126,67.156-67.155V195.061C402.054,188.318,396.587,182.85,389.844,182.85z" />
                              <path fill="#454b00" d="M483.876,20.791c-14.72-14.72-38.669-14.714-53.377,0L221.352,229.944c-0.28,0.28-3.434,3.559-4.251,5.396l-28.963,65.069 c-2.057,4.619-1.056,10.027,2.521,13.6c2.337,2.336,5.461,3.576,8.639,3.576c1.675,0,3.362-0.346,4.96-1.057l65.07-28.963 c1.83-0.815,5.114-3.97,5.396-4.25L483.876,74.169c7.131-7.131,11.06-16.61,11.06-26.692 C494.936,37.396,491.007,27.915,483.876,20.791z M466.61,56.897L257.457,266.05c-0.035,0.036-0.055,0.078-0.089,0.107 l-33.989,15.131L238.51,247.3c0.03-0.036,0.071-0.055,0.107-0.09L447.765,38.058c5.038-5.039,13.819-5.033,18.846,0.005 c2.518,2.51,3.905,5.855,3.905,9.414C470.516,51.036,469.127,54.38,466.61,56.897z" />
                            </g>
                          </g>
                        </svg>
                        <span className="tooltiptext">Edit</span>
                      </button>
                      <button
                        className="tooltip"
                        onClick={() => dispatch(deleteTodo(item.title))}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" height="25" width="25">
                          <path fill="#454b00" d="M8.78842 5.03866C8.86656 4.96052 8.97254 4.91663 9.08305 4.91663H11.4164C11.5269 4.91663 11.6329 4.96052 11.711 5.03866C11.7892 5.11681 11.833 5.22279 11.833 5.33329V5.74939H8.66638V5.33329C8.66638 5.22279 8.71028 5.11681 8.78842 5.03866ZM7.16638 5.74939V5.33329C7.16638 4.82496 7.36832 4.33745 7.72776 3.978C8.08721 3.61856 8.57472 3.41663 9.08305 3.41663H11.4164C11.9247 3.41663 12.4122 3.61856 12.7717 3.978C13.1311 4.33745 13.333 4.82496 13.333 5.33329V5.74939H15.5C15.9142 5.74939 16.25 6.08518 16.25 6.49939C16.25 6.9136 15.9142 7.24939 15.5 7.24939H15.0105L14.2492 14.7095C14.2382 15.2023 14.0377 15.6726 13.6883 16.0219C13.3289 16.3814 12.8414 16.5833 12.333 16.5833H8.16638C7.65805 16.5833 7.17054 16.3814 6.81109 16.0219C6.46176 15.6726 6.2612 15.2023 6.25019 14.7095L5.48896 7.24939H5C4.58579 7.24939 4.25 6.9136 4.25 6.49939C4.25 6.08518 4.58579 5.74939 5 5.74939H6.16667H7.16638ZM7.91638 7.24996H12.583H13.5026L12.7536 14.5905C12.751 14.6158 12.7497 14.6412 12.7497 14.6666C12.7497 14.7771 12.7058 14.8831 12.6277 14.9613C12.5495 15.0394 12.4436 15.0833 12.333 15.0833H8.16638C8.05588 15.0833 7.94989 15.0394 7.87175 14.9613C7.79361 14.8831 7.74972 14.7771 7.74972 14.6666C7.74972 14.6412 7.74842 14.6158 7.74584 14.5905L6.99681 7.24996H7.91638Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                        </svg>
                        <span className="tooltiptext">Remove</span>
                      </button>

                    </div>
                  </div>
                </div>
              )}
          </div>
        )
        )}
      </div>
    </div>
  );
};

export default Home;
