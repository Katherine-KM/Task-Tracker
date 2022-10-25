import { useState } from 'react'
import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";
import AddTask from './components/AddTask/AddTask';
import { useEffect } from 'react';

function App() {
  const [showAddTask, setShowAddTask] = useState(true)
  const [tasks, setTasks] = useState([])  

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  },[])

  const fetchTasks = async() => {
    const res = await fetch('http://localhost:5000/')
    const data = await res.json()
    
    return(data.tasks)
  }
   
  // Add Task
  const addTask = async (task) => {
    const res = await fetch(`http://localhost:5000/createTask`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-type': 'application/json'
      }, 
      body: JSON.stringify(task), 
    })

    const data = await res.json()

    setTasks([...tasks, data])
    
  }

  // Delete Task 
  const deleteTask = async (id) => {
    await fetch(`http//localhost:5000/deleteTask/${id}`, {
      method: 'DELETE',
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} /> }
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle = {toggleReminder} />
      ) : (
        'No Tasks To Show'
      )}
    </div>
  );
}

export default App;
