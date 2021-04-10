import React, {useState, useEffect} from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import {ITodo} from '../interfaces';

const TodoPage: React.FC = (props) => {

    const [todos, setTodos] = useState<ITodo[]>([]); //иначе useState<never[]>

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
        setTodos(saved);
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const addHandler = (title: string): void => {
        setTodos(prev => [...prev, { title, id: Date.now(), completed: false }]);
    }

    const onToggleHandler = (id: number): void => {
        setTodos(prevTodos => prevTodos.map(todo => {
            if (todo.id !== id) {
                return todo
            } else {
                return {
                    ...todo,
                    completed: !todo.completed,
                }
            }
        }))
    }

    const onRemoveHandler = (id: number): void => {
        const shouldDelete = window.confirm('Вы уверены?')
        if (shouldDelete) {
            setTodos(prevState => {
                return prevState.filter(todo => todo.id !== id)
            })
        }

    }

    return (
        <>
            <TodoForm onAdd={addHandler} />
            <TodoList
                todos={todos}
                onToggle={onToggleHandler}
                onRemove={onRemoveHandler}
            />
        </>
    )
}

export default TodoPage;