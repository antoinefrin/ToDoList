import React, {useState} from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import AddTodoList from './components/AddTodoList';
import Footer from './components/Footer';

import './App.css';

const todoStyle = {
  marginTop: '5%',
  marginLeft: '25%',
  marginBottom: '5%',
  paddingTop: '2%',
  paddingLeft: '5%',
  width: '50%',
  height: '400px',
  background: 'linear-gradient(to top, rgb(196, 6, 47), #b3003b'
}
const pageStyle = {
  height: '100%'
}

function App() {
  const [todos, setTodos] = useState([]);
  const manipulerAddTodo = (todo) => setTodos([todo, ...todos]);
  const setfinish = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find(i => id === i.id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }
  const deleteTodo = (id) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex(i => id === i.id);
    newTodos.splice(index, 1)
    setTodos(newTodos);
  }

  return (
    <div  className="App" style={pageStyle} >
      <Header/>
      <div style={todoStyle}>
        <AddTodoList handler={manipulerAddTodo} />
        <TodoList todos={todos} finishTodo={setfinish} remove={deleteTodo} />
      </div>
      <Footer/>
    </div>
  );
}

export default App;