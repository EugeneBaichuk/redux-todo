import { connect } from "react-redux";
import { onTaskFilter } from "../../actions";
import "./style.scss";

const TaskFilter = ({onTaskFilter}) => {
    return (
      <div id="filters">
        <span onClick={() => onTaskFilter('all_tasks')} className="filters_item" id="all_tasks">
          All
        </span>
        <span onClick={() => onTaskFilter('active_tasks')} className="filters_item" id="active_tasks">
          Active
        </span>
        <span onClick={() => onTaskFilter('done_tasks')} className="filters_item" id="done_tasks">
          Done
        </span>
      </div>
    );
}

const mapStateToProps = ({taskFilterId}) => {
  return {taskFilterId}
}

const mapDispatchToProps = {
  onTaskFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskFilter);
