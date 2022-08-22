import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {todoReducer} from "./reducers/todos.slice";

const rootReducer = combineReducers({
    todoReducer
})


export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>