import {FaTimes} from 'react-icons/fa'
import './task.css'

const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task._id)}>
        <h3> 
            {task.task} <FaTimes style={{color:'red', cursor: 'pointer' }} onClick={() => onDelete(task._id)} />
        </h3>
        <p> {task.day} </p>
    </div>
  )
}

export default Task