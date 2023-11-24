import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import productsReducer from './store-slices'

const loggerMiddleware = createLogger()
const appStore = configureStore({
    reducer: {
        productsState: productsReducer
    },
    middleware: [loggerMiddleware]
})

//inferring data type of reducer map (state map) from return type of getState method of the store object

export type AppState = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch

export default appStore