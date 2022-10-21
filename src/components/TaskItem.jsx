import './TaskItem.scss'

import {AiFillDelete} from 'react-icons/ai'

//renderização do item da tarefa
const TaskItem = ({task}) => {
    return (
        <div className="task-item-container">
            <div className="task-description">
                {/* se a tarefa estiver completa(yask.isCompleted) usar a classe... */}
                <label className={task.isCompleted ? 'checkbox-container-completed' : 'checkbox-container'}> 
                    {task.description}
                    <input type="checkbox" defaultChecked={task.isCompleted} />
                    <span className={task.isCompleted ? 'checkmark completed' : 'checkmark'}></span>
                </label>
            </div>
            
            <div className="delete">
                <AiFillDelete size={18} color="#F97474"/> 
            </div>

        </div>
    )
}

export default TaskItem;