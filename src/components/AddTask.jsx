import { useState } from "react";
import {FaPlus} from 'react-icons/fa';
import axios from 'axios';
import {useAlert} from 'react-alert';

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

import "./AddTask.scss";

const AddTask = () => {

    const [task, setTasks] = useState("");

    //mensagem de alerta
    const alert = useAlert();

    const onChange = (e) => {
        setTasks(e.target.value)
    };

    //adicionar tarefa ao banco de dados 
    const handleTaskAddition = async () => {
      try{
        if (task === '') {
          return alert.error(
            'A tarefa precisa de uma descrição para ser adicionada'
          )
        };

        await axios.post('http:///fsc-task-manager-backend.herokuapp.com/tasks', {
          description: task,
          isCompleted: false
        });

      } catch(error){
         
      };
    }

  return (
    <div className="add-task-container">
      <CustomInput label="Adicionar tarefa..." value={task} onChange={onChange} />

      <CustomButton onClick={handleTaskAddition} >
        <FaPlus size={14} color="white"/>
      </CustomButton>
    </div>
  );
};

export default AddTask;
