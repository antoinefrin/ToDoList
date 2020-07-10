import React from 'react';

export default function TodoList(props){
    const finishTodo = (id) => {
        props.finishTodo(id);
    }
    const remove = (event, id) => {
        event.stopPropagation();
        props.remove(id);
    }
    return (
        <ul>
            {props.todos.map((todo) => {
                return (
                <li 
                key={todo.id} 
                className={todo.completed ? "barred" : ""} 
                onClick={() => finishTodo(todo.id)}
                >
                    {todo.title} 
                    <button onClick={(e) => remove(e, todo.id) }>X</button>
                    </li>
                );
            })}
        </ul>
    );
}