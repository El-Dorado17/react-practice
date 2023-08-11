import React, {useState} from "react";
import './App.css';

function App () {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  const addTask = () =>{
    if (newTask.trim() !==''){
      setTasks([...tasks, {id: Date.now(), text: newTask, completed: false}])
      setNewTask('')
    }
  }

  const toggleTask = (id) =>{
    const updatedTasks = tasks.map((task)=>
    task.id === id ? { ...task, completed: !task.completed} : task
    )

    setTasks(updatedTasks)
  }

  return(
    <div className="App">
      <h1>To-Do list</h1>
      <div>
        <input
          type = 'text'
          value= {newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add something you need to do"
          />
          <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={task.completed ? 'completed' : ''}
            onClick={() => toggleTask(task.id)}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;