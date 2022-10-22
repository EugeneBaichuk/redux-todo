import {connect} from 'react-redux';
import { ToDoListItem } from "../ToDoListItem";
import {setTodoList, onDelete, onToggle, onImportant} from '../../actions';
import "./style.scss";

const ToDoList = ({todoList, onDelete, onToggle, onImportant, searchValue, taskFilterId}) => {
  const filteredList = todoList.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));
    const taskFilter = (taskFilterId, filteredList) => {
    switch (taskFilterId) {
      case 'active_tasks':
        return filteredList.filter(item => (!item.done));
      case 'done_tasks':
        return filteredList.filter(item => (item.done));
      default:
        return filteredList;
    }
  }

  const todoElements = taskFilter(taskFilterId, filteredList).map(item => {
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

const mapStateToProps = ({todoList, searchValue, taskFilterId}) => {
  return {todoList, searchValue, taskFilterId}
}

const mapDispatchToProps = {
  setTodoList,
  onDelete,
  onToggle,
  onImportant,
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);