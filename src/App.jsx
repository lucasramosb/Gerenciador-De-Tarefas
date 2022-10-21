import { useState, useEffect } from "react";
import axios from 'axios';

import Tasks from "./components/Tasks";
import "./App.css";
import TaskItem from "./components/TaskItem";

const App = () => {

  return (
    <>
      <Tasks/>
    </>
  );
};

export default App;
