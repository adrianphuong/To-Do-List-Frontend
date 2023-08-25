import React, { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import logo from "./logo.png";
import { addToDo, updateToDo, getAllToDo, deleteToDo  } from "./utils/HandleAPI";

function App() {
  const [toDo, setToDo] = useState([])
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoID, setToDoId] = useState("")

  useEffect(() =>{
    getAllToDo(setToDo)
  }, [])

  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setToDoId(_id) 
  }

  return (
    <div className="App">
      <div className="container">
        <h1><img src={logo} alt="Logo" className="logo" /></h1>
        <div className="top">
          <input
            type="text"
            placeholder="Add Task Here..."
            value = {text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="add" onClick = {isUpdating ? () => updateToDo(toDoID, text, setToDo, setText, setIsUpdating) : () => addToDo(text, setText, setToDo)}>
            {isUpdating ? "update" : "add"}
          </div>
        </div>
        <div className="list">
        {toDo.map((item) => <ToDo 
        key={item._id} 
        text={item.text}
        updateMode={() => updateMode(item._id, item.text)}
        deleteToDo={() => deleteToDo(item._id, setToDo)}
        />)}

        </div>
      </div>
    </div>
  );
}

export default App;
