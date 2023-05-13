import { useState, useEffect, useMemo, useCallback } from "react";
import axios from "axios";
import { useAlert } from "react-alert";

import './Tasks.scss'

import TaskItem from './TaskItem';
import AddTask from "./AddTask";
// import customInput from "./customInput";

//Renderização do container onde esta todas as tarefas - container tarefas
const Tasks = () => {
  //constante onde fica as tarefas 
  const [tasks, setTasks] = useState([]);

  const alert = useAlert;

  //constante assincrona onde faz requisição das tarefas do banco de dados
  const fetchTasks = useCallback(async() => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/tasks`
        );
      setTasks(data);
    } catch (error) {
      alert.error("Não foi possivel recuperar as terefas.")
    }
  }, [alert]);

  const lastTasks = useMemo (() => {
    return tasks.filter( task => task.isCompleted === false)
  }, [tasks]);

  const completedTasks = useMemo (() => {
    return tasks.filter(task => task.isCompleted === true)
  },[tasks]);

  //Carrega as tarefas assim que o componente for renderizado
  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  //renderização - Minhas tarefas | ultimas tarefas | terefas concluidas
  return (
    <div className="tasks-container">
      <h2>Minhas Tarefas</h2>

      <div className="last-tasks">
        <h3>Últimas Tarefas</h3>
          <AddTask fetchTasks={fetchTasks}/>  
        <div className="task-list">
            {lastTasks.map(lastTask => <TaskItem key={lastTask._id} task={lastTask} fetchTasks={fetchTasks}/>)}
        </div>
      </div>

      <div className="completed-tasks">
        <h3>Tarefas Concluídas</h3>
        <div className="task-list">
            {completedTasks.map(completedTask => <TaskItem key={completedTask._id} task={completedTask} fetchTasks={fetchTasks}/>)}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
