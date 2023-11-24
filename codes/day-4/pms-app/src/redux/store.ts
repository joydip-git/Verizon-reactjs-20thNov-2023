import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import productsReducer from './store-slices'
import createSagaMiddleware from 'redux-saga'
import { productsaga } from "./productsaga";

const loggerMiddleware = createLogger()
const sagaMiddleware = createSagaMiddleware()
const appStore = configureStore({
    reducer: {
        productsState: productsReducer
    },
    middleware: [loggerMiddleware, sagaMiddleware]
})

sagaMiddleware.run(productsaga)

//inferring data type of reducer map (state map) from return type of getState method of the store object

export type AppState = ReturnType<typeof appStore.getState>
//export type AppDispatch = typeof appStore.dispatch

export default appStore