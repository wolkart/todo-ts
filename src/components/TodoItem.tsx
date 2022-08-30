import React from 'react';
import {useDispatch} from "react-redux";
import {ITodo, todoActions} from "../store/reducers/todos.slice";

export const TodoItem = ({count, todo, id, completed}: ITodo) => {
    const dispatch = useDispatch()
    const classes = ['italic', 'text-gray-800']

    if (completed) classes.push('line-through')

    return (
        <div className="flex px-4 py-2 items-center mb-2 shadow-md bg-gray-100 justify-between">
            <div className="flex items-center">
                <input
                    checked={completed}
                    type="checkbox"
                    className="w-[20px] h-[20px] rounded border-gray-500 mr-4 cursor-pointer"
                    onChange={() => dispatch(todoActions.completedTodo(id))}
                />
                <span className={classes.join(' ')}>{count}. {todo}</span>
            </div>
            <button
                className="h-[40px] rounded bg-orange-400 flex items-center px-4 text-white font-medium"
                onClick={() => dispatch(todoActions.removeTodo(id))}
            >
                Delete
            </button>
        </div>
    );
};