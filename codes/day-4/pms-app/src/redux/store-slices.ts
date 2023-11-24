import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductRecordsState } from "./statetypes";
import { Product } from "../models/product";

const initialProductsState: ProductRecordsState = {
    errorMessage: '',
    fetchCompleted: false,
    productRecords: undefined
}
const productsSlice = createSlice({
    name: 'products',
    initialState: initialProductsState,
    reducers: {
        fetchInitiate: (state) => {
            state.errorMessage = ''
            state.fetchCompleted = false
            state.productRecords = undefined
        },
        fetchSuccess: (state, action: PayloadAction<Product[]>) => {
            state.errorMessage = ''
            state.fetchCompleted = true
            state.productRecords = action.payload
        },
        fetchFailure: (state, action: PayloadAction<string>) => {
            state.errorMessage = action.payload
            state.fetchCompleted = true
            state.productRecords = undefined
        }
    }
})

export const { fetchInitiate, fetchFailure, fetchSuccess } = productsSlice.actions
export default productsSlice.reducer