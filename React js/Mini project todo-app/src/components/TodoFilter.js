import React from 'react';

function TodoFilter({ filter, setFilter }) {
    return (
        <div className="btn-group my-3">
            <button
                className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setFilter('all')}
            >
                All
            </button>
            <button
                className={`btn ${filter === 'active' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setFilter('active')}
            >
                Active
            </button>
            <button
                className={`btn ${filter === 'completed' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setFilter('completed')}
            >
                Completed
            </button>
        </div>
    );
}

export default TodoFilter;
