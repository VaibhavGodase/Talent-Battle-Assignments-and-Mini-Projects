import React from 'react';

function TodoItem({ todo, toggleComplete }) {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleComplete(todo.id)}
                />
                <span className={todo.completed ? 'text-decoration-line-through' : ''}>
                    {todo.task}
                </span>
            </div>
        </li>
    );
}

export default TodoItem;
