import React from 'react';

const Task = ({task, onClick}) => {
  return (
    <div className="App-task" key={task.id}>
      {task.task}{' '}
      <button
        onClick={event => {
          event.preventDefault();
          onClick(task.id);
        }}
      >
        X
      </button>
    </div>
  );
};

export default Task;
