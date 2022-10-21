//renderização do item da tarefa
const TaskItem = ({task}) => {
    return (
        <>
            <h1>{task.description}</h1>
            <p>{task.isCompleted ? "Completo" : "Não completo"}</p>
        </>
    )
}

export default TaskItem;