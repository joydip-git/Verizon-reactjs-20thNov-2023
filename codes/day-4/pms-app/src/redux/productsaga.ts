import { takeEvery } from "redux-saga/effects";
import { getProductRecods } from "./async-works";

export function* productsaga() {
    yield takeEvery("products/fetchInitiate", getProductRecods)
    // yield takeEvery("counter/increase", getProductRecods)
    // yield takeEvery("name/updateName", getProductRecods)
}

//productsaga().next()