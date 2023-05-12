import Tasks from "./components/Tasks";
import SideBar from "./components/SideBar";
import './App.scss';
// import TaskItem from "./components/TaskItem";

//renderização de toda pag
const App = () => {

  return (
    //renderização do componente Tasks
    <div className="app-container">
      <SideBar/>
      <Tasks/> 
    </div>
  );
};

export default App;
