import React from "react";

import "./style.scss";

const TaskFilter = ({onTaskFilter}) => {
    return (
      <div id="filters">
        <span onClick={onTaskFilter} className="filters_item" id="all_tasks">
          All
        </span>
        <span onClick={onTaskFilter} className="filters_item" id="active_tasks">
          Active
        </span>
        <span onClick={onTaskFilter} className="filters_item" id="done_tasks">
          Done
        </span>
      </div>
    );
}

export default TaskFilter;
