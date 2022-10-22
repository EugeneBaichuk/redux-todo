// import { useState } from "react";

import React from "react";
import Header from "./components/Header";
import InputSearch from "./components/InputSearch";
import TaskFilter from "./components/TaskFilter";
import ToDoList from "./components/ToDoList";
import CreateNewElement from "./components/CreateNewElement";
import Statistics from "./components/Statistics";

import "./app.scss";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <InputSearch/>
      <TaskFilter/>
      <ToDoList/>
      <CreateNewElement/>
      <Statistics />
    </div>
  );
}

export default App;
