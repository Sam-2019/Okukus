import React from "react";
const TASK_STATUSES = ["Unstarted", "In Progress", "Completed"];

const Task = props => {
  return (
    <div className="container py-2">
      <div className="row">
        <div className="col-1 col-md-3"></div>
        <div className="col-10 col-md-6 px-1">
          <div className="card">
            <div className="card-header form-inline">
              <h5 className="mr-3">{props.task.title}</h5>
              <select className="form-control" 
              value={props.task.status} 
              onChange={onStatusChange}>
                {TASK_STATUSES.map(status => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
            <div className="card-body">
              <h5 className="card-title">{props.task.description}</h5>
              <button class="btn btn-primary">Go somewhere</button>
            </div>
          </div>
        </div>
        <div className="col-1 col-md-3"></div>
      </div>
    </div>
  );

  function onStatusChange(e) {
    props.onStatusChange(props.task.id, e.target.value);
  }
};

export default Task;
