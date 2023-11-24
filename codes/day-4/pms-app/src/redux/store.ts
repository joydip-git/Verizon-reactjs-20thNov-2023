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
export default appStore