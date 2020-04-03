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

  const onActiveHandler = (e) => {
    let index = +e.target.dataset.index;

    todos[index].isActive = !todos[index].isActive;

    return todos;
  };
  
  const onHighlightHandler = (e) => {
    let index = +e.target.dataset.index;

    todos[index].isHighlighted = !todos[index].isHighlighted;

    return todos;
  };

  return (
    <div className="App">
      <TodoList 
        todos={ todos }
        onActive={ onActiveHandler }
        onHighlight={ onHighlightHandler }></TodoList>
    </div>
  );
}

export default App;
