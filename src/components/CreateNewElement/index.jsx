import {connect} from 'react-redux';
import {onChangeVal, onTaskAdd, clearForm} from '../../actions';

import "./style.scss";

const CreateNewElement = ({taskValue, onChangeVal, onTaskAdd, clearForm}) => {
  //const [taskValue, setTaskValue] = useState('');

  // const changeTaskValue = (e) => {
  //   setTaskValue(e.target.value);
  // }

  const onChangeFormVal = (e) => {
    onChangeVal(e.target.value);
  }

  const onAddTask = (e) => {
    e.preventDefault();
    taskValue && onTaskAdd() && clearForm();
  }



  return (
    <form className="new-task">
      <input
        type="text"
        id="new-task-input"
        placeholder="Write down a new task..."
        onChange={onChangeFormVal}
        value={taskValue}
      />
      <button onClick={onAddTask} id="new-task-button">Add</button>
    </form>
  );
};

const mapStateToProps = ({taskValue}) => {
  return {taskValue}
}

const mapDispatchToProps = {
  onChangeVal,
  onTaskAdd,
  clearForm
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewElement);
