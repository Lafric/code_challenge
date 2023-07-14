import './App.css';
import MyForm from './form';
import ViewDetail from './viewDetails';
import React, { useState } from 'react';
import { Transformfibonacci } from './utils';
import { Task } from './taskClass';

function App() {
  const [showTasks, setShowTask] = useState(false);
  const [taskArray, setTaskArray] = useState([]);
  const handleSubmit = (formData) => {
    console.log(formData);
    const effort =Transformfibonacci(formData.effort)
    const task = new Task(formData.id,effort,formData.name,formData.description);
    setTaskArray((prevArray) => [...prevArray, task])
    setShowTask(true);
  };


  return (
    <div className="App">
      <header className="App-header">
        <div></div>
        <MyForm onSubmit={handleSubmit} />
        {(showTasks) && (
            taskArray.map((task) => (
              <ViewDetail
                key={task.id}
                id={task.id}
                effort={task.effort}
                name={task.name}
                description={task.description}
              />
            ))
        )}

      </header>
    </div>
  );
}

export default App;
