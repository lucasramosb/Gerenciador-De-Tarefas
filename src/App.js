import { useState, useEffect } from "react";
import axios from 'axios';

import "./App.css";
import TaskItem from "./components/TaskItem";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: "Estudar",
      isCompleted: true,
    },
    {
      id: 2,
      description: "Ler",
      isCompleted: false,
    },
  ]);

  const fetchTasks = async () => {
    try {
      const {data} = await axios.get("https://fsc-task-manager-backend.herokuapp.com/tasks")
      setTasks(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  };

  useEffect( () => {
    fetchTasks()
  }, [])

  return (
    <>
      {tasks.map((task) => (<TaskItem task={task}/>))};
    </>
  );
};

export default App;
