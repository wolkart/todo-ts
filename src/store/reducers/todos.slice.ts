import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const TODO_KEY = 'TODO_KEY'

export interface ITodo {
    id: number
    todo: string
    completed: boolean
    count?: number
}

interface ITodoState {
    todos: ITodo[]
}

const initialState: ITodoState = {
    todos: JSON.parse(localStorage.getItem(TODO_KEY) ?? '[]')
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<ITodo>) => {
            state.todos.push(action.payload)
            localStorage.setItem(TODO_KEY, JSON.stringify(state.todos))
        },
        removeTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
            localStorage.setItem(TODO_KEY, JSON.stringify(state.todos))
        },
        completedTodo: (state, action: PayloadAction<number>) => {
            state.todos.map(todo => {
                if (todo.id === action.payload) todo.completed = !todo.completed
            })
        }
    }
})

export const todoReducer = todosSlice.reducer
export const todoActions = todosSlice.actions