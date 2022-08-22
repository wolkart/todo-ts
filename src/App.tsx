import React, {ChangeEvent, FormEvent, useState} from 'react';
import {TodoItem} from "./components/TodoItem";
import {useAppSelector} from "./hooks/useAppSelector";
import {useDispatch} from "react-redux";
import {todoActions} from "./store/reducers/todos.slice";

function App() {
    const {todos} = useAppSelector(state => state.todoReducer)
    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()

        setValue(event.target.value)
    }

    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        dispatch(todoActions.addTodo({
            id: Date.now(),
            todo: value
        }))

        setValue('')
    }

    return (
        <div className="w-full h-screen bg-gray-100">
            <div className="container w-1/2 h-full pt-[50px] bg-white mx-auto flex flex-col items-center">
                <h1 className="font-bold text-xl mb-4">Todos</h1>
                <form
                    onSubmit={submitHandler}
                    className="w-1/2"
                >
                    <input
                        type="text"
                        className="h-[50px] w-full border rounded flex items-center px-2 mb-4 outline-none hover:border-gray-500 focus:border-gray-500 transition-all"
                        placeholder='Enter todo...'
                        onChange={changeHandler}
                        value={value}
                    />
                </form>

                <div className="flex flex-col w-1/2">
                    {todos.map((item, index) => (
                        <TodoItem
                            value={item.todo}
                            key={item.id}
                            count={index + 1}
                            id={item.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
function removeTodo(removeTodo: any): () => void {
    throw new Error('Function not implemented.');
}

