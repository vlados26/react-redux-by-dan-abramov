import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todo.action';

const AddTodo = ({ dispatch }) => {
    const [input, setInput] = useState();

    return (
        <div>
            <input
                value={input}
                onChange={e => setInput(e.target.value)}
            />
            <button onClick={() => {
                dispatch(addTodo(input));
                setInput('');
            }}>
                Add Todo
            </button>
        </div>
    );
};

export default connect()(AddTodo);