import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';



function AddTodoList(props) {
    const  [text, setText] = useState("");
    const manipulerTodo = (event) => setText(event.target.value);
    const addTodo = () => {
        props.handler({
            id: uuidv4(),
            title: text,
            completed: false
        });
        setText("");
    }; 
// traduction "handler"  => manipuler

    return (
        <div >
            <input type="text" onChange={manipulerTodo} value={text}/>
            <button onClick={addTodo}>Ajouter</button>
        </div>
    );
}

export default AddTodoList;