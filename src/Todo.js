import { useState } from "react";
import './Todo.css';

function Todo() {
    const [todolist, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        setTodoList([...todolist, newTask]);
        setNewTask("");
    };
    return(
        <div className="container">
            <h1>Todo List</h1>
            <div>
            <input type="text" placeholder="Enter a task" onChange={(e) => setNewTask(e.target.value)}
            value={newTask} />
            <button onClick={addTask}>Add Task</button>
            </div>
            <div>
            <ul>
              {todolist.map((todo) => (
                <li>{todo}</li>
              ))}
            </ul>
            </div>
        </div>
    )
}


export default Todo;