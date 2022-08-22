import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface ITodo {
    id: number
    todo: string
}

interface ITodoState {
    todos: ITodo[]
}

const initialState: ITodoState = {
    todos: []
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<ITodo>) => {
            state.todos.push(action.payload)
        },
        removeTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        }
    }
})

export const todoReducer = todosSlice.reducer
export const todoActions = todosSlice.actions