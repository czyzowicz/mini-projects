import {useState} from "react";

export const ToDoList = () => {

    const [todos, setTodos] = useState([])
    const [text, setText] = useState('')

    const addTodo = () => {
        if (text) {
            setTodos([...todos, {text, completed: false}])
            setText('')
        }
    };

    const toggleTodo = (i) => {
        const newTodos = [...todos];
        newTodos[i].completed = !newTodos[i].completed;
        setTodos(newTodos);
    };

    const removeTodo = (i) => {
        const newTodos = [...todos];
        newTodos.splice(i, 1);
        setTodos(newTodos);
    }

    return (
        <div>
            <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Add a to-do"/>
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index} style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                        {todo.text}
                        <button onClick={() => toggleTodo(index)}>Toggle</button>
                        <button onClick={() => removeTodo(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>

    )
}