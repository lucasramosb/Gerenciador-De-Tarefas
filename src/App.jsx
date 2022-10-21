
import axios from 'axios';

import Tasks from "./components/Tasks";
import "./App.css";
import TaskItem from "./components/TaskItem";

//renderização de toda pag
const App = () => {

  return (
    //renderização do componente Tasks
    <>
      <Tasks/> 
    </>
  );
};

export default App;
