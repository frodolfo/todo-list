import React from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {
    const todos = [{
      task: "Walk the dog",
      isActive: false,
      isHighlighted: false
    }, {
      task: "Clean the floor",
      isActive: false,
      isHighlighted: true
    }, {
      task: "Wash dishes",
      isActive: true,
      isHighlighted: false
    }, {
      task: "Go to bank",
      isActive: true,
      isHighlighted: false
    }, {
      task: "Get oil change",
      isActive: true,
      isHighlighted: true
    }];

  const onHighlightHandler = (status) => {
    let t;

    for (let i = 0; i < todos.length; i++) {
      t = todos[i];
      if (t.isActive) {
        t.isHighlighted = status;
      }
      todos[i] = t;
    }
  };

  return (
    <div className="App">
      <TodoList 
        todos={ todos }
        onHighlight={ onHighlightHandler }></TodoList>
    </div>
  );
}

export default App;
