import { legacy_createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

interface CounterStateType {
    counter: number
}

interface CounterActionType {
    type: string;
    payload?: number;
}

const actionTypes = {
    INCREASE: 'INCREASE',
    DECREASE: 'DECREASE'
}

const increaseActionCreator = (data?: number): CounterActionType => {
    return {
        type: actionTypes.INCREASE,
        payload: data
    }
}
const decreaseActionCreator = (data?: number): CounterActionType => {
    return {
        type: actionTypes.DECREASE,
        payload: data
    }
}

const initialCounterState: CounterStateType = {
    counter: 0
}

const counterReducer = (state: CounterStateType = initialCounterState, action: CounterActionType): CounterStateType => {
    switch (action.type) {
        case actionTypes.INCREASE:
            return {
                ...state,
                counter: state.counter + (action.payload ? action.payload : 1)
            }

        case actionTypes.DECREASE:
            return {
                ...state,
                counter: state.counter - (action.payload ? action.payload : 1)
            }

        default:
            return { ...state }
    }
}

const loggerMiddleware = createLogger()
const storeEnhancer = applyMiddleware(loggerMiddleware)

const store = legacy_createStore(
    counterReducer,
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