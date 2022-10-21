export const ToDoListItem = (props) => {
    const taskClass = props.done ? 'task-text task_is_done': 'task-text';
    const important = props.important ? 'important': "";
    return (
        <div className="task-item">
          <span className={`${taskClass} ${important}`} onClick={props.onToggle}> {props.text} </span>
          <div className="controls">
            <i onClick={props.onDelete} className="fa fa-trash" />
            <i onClick={props.onImportant} className="fa fa-star" />
          </div>
        </div>
    )
}