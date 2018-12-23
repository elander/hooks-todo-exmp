import React, { useState } from 'react';

import AddForm from './AddForm';
import Task from './Task';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: 'Write it all with redux!'
    }
  ]);
  const [error, setError] = useState(null);

  const handleFormSubmit = task => {
    if (task) {
      if (!tasks.find(t => t.task === task)) {
        setTasks([
          ...tasks,
          {
            id: tasks.length + 1,
            task
          }
        ]);

        setError(null);

      } else {
        setError('Item is in task list');
      }
    }
  };

  const handleRemoveTask = id => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">Hooks Tasks App!</header>
      <main className="App-main">
        <AddForm onSubmit={handleFormSubmit} />
        {tasks.map(task => (
          <Task task={task} onClick={handleRemoveTask} />
        ))}
        {error && <div className="App-error">{error}</div>}
      </main>
    </div>
  );
};

export default App;
