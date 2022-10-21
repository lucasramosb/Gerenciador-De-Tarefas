import { useState, useEffect } from "react";
import axios from "axios";
import './Tasks.scss'

//Renderização do container onde esta todas as tarefas
const Tasks = () => {
  //constante onde fica as tarefas 
  const [tasks, setTasks] = useState([
    // {
    //     id: "1",
    //     description: "tarefa1",
    //     isCompleted: false
    // },
    // {
    //     id: "2",
    //     description: "tarefa2",
    //     isCompleted: true
    // }
  ]);

  //constante assincrona onde faz requisição das tarefas para o banco de dados
  const fetchTasks = async () => {
    try {
      const { data } = await axios.get(
        "https://fsc-task-manager-backend.herokuapp.com/tasks"
      );
      setTasks(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  //Carrega as tarefas assim que o componente for renderizado
  useEffect(() => {
    fetchTasks();
  }, []);

  //renderização de: Minhas tarefas, ultimas tarefas e terefas concluidas
  return (
    <div className="tasks-container">
      <h2>Minhas Tarefas</h2>

      <div className="last-tasks">
        <h3>Últimas Tarefas</h3>
        <div className="task-list">
            {tasks.filter(task => task.isCompleted === false).map(lastTask => <p>{lastTask.description}</p>)}
        </div>
      </div>

      <div className="completed-tasks">
        <h3>Tarefas Concluídas</h3>
        <div className="task-list">
            {tasks.filter(task => task.isCompleted === true).map(completedtask => <p>{completedtask.description}</p>)}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
