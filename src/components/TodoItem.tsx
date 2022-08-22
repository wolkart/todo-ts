import React from 'react';
import {useDispatch} from "react-redux";
import {todoActions} from "../store/reducers/todos.slice";

interface IProps {
    id: number
    count: number
    value: string
}

export const TodoItem = ({count, value, id}: IProps) => {
    const dispatch = useDispatch()

    return (
        <div className="flex px-4 py-2 items-center mb-2 shadow-md bg-gray-100 justify-between">
            <span>{count} {value}</span>
            <button
                className="h-[40px] rounded bg-orange-400 flex items-center px-4 text-white font-medium"
                onClick={() => dispatch(todoActions.removeTodo(id))}
            >
                Delete
            </button>
        </div>
    );
};