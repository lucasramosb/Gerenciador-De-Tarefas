import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

// import Tasks from "./components/Tasks";
// import SideBar from "./components/SideBar";
import './App.scss';
// import TaskItem from "./components/TaskItem";

//renderização de toda pag
const App = () => {
  
  return (
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Home/>} />
      </Routes>
  );
};

export default App;
