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
  // const [todoList, setTodoList] = useState([
  //   { text: "Task 1", important: false, done: false, id: 1 },
  //   { text: "Task 2", important: false, done: false, id: 2 },
  //   { text: "Task 3", important: false, done: false, id: 3 },
  // ]);
  // const [count, setCount] = useState(100);
  // const [filterList, setFilterList] = useState(todoList);
  // const [taskFilterId, setTaskFilterId] = useState('all_tasks');

  // const onImportant = (id) => {
  //   const todoElements = todoList.map(todo => {
  //     if (todo.id === id) {
  //       todo.important = !todo.important;
  //     }
  //     return todo;
  //   })
  //   setTodoList(todoElements);
  // }

  // const onAdded = (value) => {
  //   setCount(prev => ++prev);
  //   const addTodos = [...todoList, 
  //   {
  //     text: value, 
  //     important: false, 
  //     done: false, 
  //     id: count
  //   }]
  //   setTodoList(addTodos);
  //   setFilterList(addTodos);
  // }

  // const onSearch = (value) => {
  //   const searchTodos = filterList.filter(todo => todo.text.toLowerCase().includes(value.toLowerCase()));
  //   setTodoList(searchTodos);
  // }

  // const onTaskFilter = (e) => {
  //   setTaskFilterId(e.target.id);
  //   console.log(e.target.id);
  // }

  // const taskFilter = (taskFilterId, items) => {
  //   switch (taskFilterId) {
  //     case 'active_tasks':
  //       return items.filter(item => (!item.done));
  //     case 'done_tasks':
  //       return items.filter(item => (item.done));
  //     default:
  //       return items;
  //   }
  // }

  // const countActiveTasks = todoList.filter(todo => todo.done).length
  // const countImpTasks = todoList.filter(todo => todo.important).length
  // const visibleData = taskFilter(taskFilterId, todoList);

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
