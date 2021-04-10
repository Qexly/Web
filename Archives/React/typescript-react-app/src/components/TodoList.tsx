import React from 'react';
import { ITodo } from '../interfaces';

type TodoListProps = { //это должен быть объект со свойством any(массив) 
    todos: ITodo[];
    onToggle: (id: number) => void,
    onRemove(id: number): void,
}

const TodoList: React.FC<TodoListProps> = (props) => {
    let {todos, onToggle, onRemove} = props;

    const onRemoveHandler = (e: React.MouseEvent, id: number) => {
        e.preventDefault();
        onRemove(id);
    }

    return (
        <ul>
            {
                todos.map(todo => {
                    const classes = ['todo'];
                    if (todo.completed) classes.push('complited');
                    return (
                        <li className={classes.join(' ')} key={todo.id}>
                            <label>
                                <input type="checkbox" checked={todo.completed} onChange={onToggle.bind(null, todo.id)}/>
                                <span>{todo.title}</span>
                                <i 
                                    onClick={(e:React.MouseEvent) => onRemoveHandler(e, todo.id)} 
                                    className="material-icons red-text">
                                        delete
                                </i>
                            </label>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default TodoList;