import {connect} from 'react-redux';
import { ToDoListItem } from "../ToDoListItem";
import {setTodoList, onDelete, onToggle, onImportant} from '../../actions';

import "./style.scss";

const ToDoList = ({todoList, onDelete, onToggle, onImportant, searchValue, onSearch, searchTodoList}) => {
  const filteredList = todoList.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

  const todoElements = filteredList.map(item => {
      return <ToDoListItem 
      {...item} 
      onDelete={() => {onDelete(item.id)}} 
      onImportant={() => onImportant(item.id)} 
      onToggle={()=> onToggle(item.id)}
      key={item.id} />
  })

  return (
    <section>
      {todoElements}
    </section>
  )
};

const mapStateToProps = ({todoList, searchValue}) => {
  return {todoList, searchValue}
}

const mapDispatchToProps = {
  setTodoList,
  onDelete,
  onToggle,
  onImportant,
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);