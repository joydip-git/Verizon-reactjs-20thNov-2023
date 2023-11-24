import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";

interface CounterStateType {
    counter: number
}
interface NameStateType {
    name: string
}

// interface CounterActionType {
//     type: string;
//     payload?: number;
// }
// interface NameActionType {
//     type: string;
//     payload: string;
// }
interface ReduxActionType<T> {
    type: string;
    payload?: T;
}

const counterActionTypes = {
    INCREASE: 'INCREASE',
    DECREASE: 'DECREASE'
}
const nameActionTypes = {
    'UPDATE': 'UPDATE'
}

// const increaseActionCreator = (data?: number): CounterActionType => {
const increaseActionCreator = (data?: number): ReduxActionType<number> => {
    return {
        type: counterActionTypes.INCREASE,
        payload: data
    }
}
// const decreaseActionCreator = (data?: number): CounterActionType => {
const decreaseActionCreator = (data?: number): ReduxActionType<number> => {
    return {
        type: counterActionTypes.DECREASE,
        payload: data
    }
}
// const updateNameActionCreator = (data: string): NameActionType => {
const updateNameActionCreator = (data?: string): ReduxActionType<string> => {
    return {
        type: nameActionTypes.UPDATE,
        payload: data
    }
}

const initialCounterState: CounterStateType = {
    counter: 0
}
const initialNameState: NameStateType = {
    name: ''
}

// const counterReducer = (state: CounterStateType = initialCounterState, action: CounterActionType): CounterStateType => {
const counterReducer = (state: CounterStateType = initialCounterState, action: ReduxActionType<number>): CounterStateType => {
    switch (action.type) {
        case counterActionTypes.INCREASE:
            return {
                ...state,
                counter: state.counter + (action.payload ? action.payload : 1)
            }

        case counterActionTypes.DECREASE:
            return {
                ...state,
                counter: state.counter - (action.payload ? action.payload : 1)
            }

        default:
            return { ...state }
    }
}

// const nameReducer = (state: NameStateType = initialNameState, action: NameActionType): NameStateType => {
const nameReducer = (state: NameStateType = initialNameState, action: ReduxActionType<string>): NameStateType => {
    switch (action.type) {
        case nameActionTypes.UPDATE:
            return {
                ...state,
                name: action.payload ? action.payload : 'NA'
            }

        default:
            return { ...state }
    }
}

const loggerMiddleware = createLogger()
const storeEnhancer = applyMiddleware(loggerMiddleware)

const reducerMap = combineReducers({
    nameState: nameReducer,
    counterState: counterReducer
})
// const store = legacy_createStore(
//     counterReducer,
//     storeEnhancer
// )
const store = legacy_createStore(
    reducerMap,
    storeEnhancer
)

//console.log(store.getState())
//store.dispatch({ type: actionTypes.INCREASE, payload: 2 })
store.dispatch(increaseActionCreator(2))
//console.log(store.getState())

store.dispatch(increaseActionCreator(4))
//console.log(store.getState())

store.dispatch(decreaseActionCreator(3))
//console.log(store.getState())

store.dispatch(increaseActionCreator(5))
//console.log(store.getState())

store.dispatch(decreaseActionCreator(2))
//console.log(store.getState())

store.dispatch(updateNameActionCreator('joydip'))