import { useState } from "react";
import {FaPlus} from 'react-icons/fa'

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

import "./AddTask.scss";

const AddTask = () => {

    const [task, setTasks] = useState("");

    const onChange = (e) => {
        setTasks(e.target.value)
    };

  return (
    <div className="add-task-container">
      <CustomInput label="Adicionar tarefa..." value={task} onChange={onChange} />

      <CustomButton >
        <FaPlus size={14} color="white"/>
      </CustomButton>
    </div>
  );
};

export default AddTask;
