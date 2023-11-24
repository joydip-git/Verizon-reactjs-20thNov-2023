import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

interface CounterStateType {
    counterValue: number
}
interface NameStateType {
    nameValue: string
}

const initialCounterState: CounterStateType = {
    counterValue: 0
}
const initialNameState: NameStateType = {
    nameValue: ''
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increaseCounter: (state, action: PayloadAction<number>) => {
            state.counterValue += action.payload
        },
        decreaseCounter: (state, action: PayloadAction<number>) => {
            state.counterValue -= action.payload
        }
    }
})

const nameSlice = createSlice({
    name: 'name',
    initialState: initialNameState,
    reducers: {
        updateName: (state, action: PayloadAction<string>) => {
            state.nameValue = action.payload
        }
    }
})

const counterReducer = counterSlice.reducer
const nameReducer = nameSlice.reducer

// 'counter/increaseCounter' and
// 'counter/decreaseCounter'
// increaseCounter, decreaseCounter
//increaseCounter(2)=> { type: 'counter/increase' , payload:2}

const { increaseCounter, decreaseCounter } = counterSlice.actions

// 'name/updateName'
const { updateName } = nameSlice.actions

const loggerMiddleware = createLogger()
const store = configureStore({
    reducer: {
        nameState: nameReducer,
        counterState: counterReducer
    },
    middleware: [loggerMiddleware]
})

store.dispatch(increaseCounter(2))
store.dispatch(decreaseCounter(1))
store.dispatch(updateName('joydip'))