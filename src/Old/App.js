import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskList from './components/TaskList';
import { createTask, editTask } from './actions';
import "bootstrap/dist/css/bootstrap.css";


class App extends Component {
  onCreateTask = ({ title, description }) => {
    this.props.dispatch(createTask({ title, description }));
  }

  onStatusChange = (id, status) => {
    this.props.dispatch(editTask(id, { status }));
  }

  render() {
    return (
      <div className="main-content">
        <TaskList
          tasks={this.props.tasks}
          onCreateTask={this.onCreateTask}
          onStatusChange={this.onStatusChange}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  };
}

export default connect(mapStateToProps)(App);