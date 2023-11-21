import axios from 'axios'

const baseURL = "https://fullstack-todo-app-backendnode.onrender.com"

const getAllToDo = (setToDo) => {
    axios
    .get(baseURL)
    .then(({data}) => {
        console.log('data --->', data);
        setToDo(data);
    })
}

const addToDo = (text, setText, setToDo) => {
    axios
    .post(`${baseURL}/save`, {text})
    .then((data) => {
        console.log(data);
        setText = "";
        getAllToDo(setToDo);
    })
    .catch((err) => console.log(err))
}

const updateToDo = (toDoID, text, setToDo, setText, setIsUpdating) => {
    axios
    .post(`${baseURL}/update`, {_id: toDoID, text})
    .then((data) => {
        setText = "";
        setIsUpdating = false;
        getAllToDo(setToDo);
    })
    .catch((err) => console.log(err))
}

const deleteToDo = (_id, setToDo) => {
    axios
    .post(`${baseURL}/delete`, {_id})
    .then((data) => {
        console.log(data)
        getAllToDo(setToDo);
    })
    .catch((err) => console.log(err))
}

export {addToDo, updateToDo, getAllToDo, deleteToDo}
