import { AxiosResponse } from "axios"
import { ApiResponse } from "../models/apiresponse"
import { Product } from "../models/product"
import { fetchProducts } from "../services/productservice"
import { fetchFailure, fetchSuccess } from "./store-slices"
import { call, put } from "redux-saga/effects";

export function* getProductRecods() {

    try {
        const response: AxiosResponse<ApiResponse<Product[]>> = yield call(() => fetchProducts())
        const apiResponse = response.data
        if (apiResponse.data !== null) {
            const successAction = fetchSuccess(apiResponse.data)
            yield put(successAction)
        } else {
            const failureAction = fetchFailure(apiResponse.message)
            yield put(failureAction)
        }
    } catch (error: any) {
        const failureAction = fetchFailure(error.message)
        yield put(failureAction)
    }
}