import React, { useState } from 'react';

function TodoInput({ addTodo }) {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            addTodo(task);
            setTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="my-3">
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Add a new task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button className="btn btn-primary" type="submit">Add</button>
            </div>
        </form>
    );
}

export default TodoInput;
