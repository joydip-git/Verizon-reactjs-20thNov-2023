import axiosInstance from "../config/axiosconfig"
import { ApiResponse } from "../models/apiresponse"
import { Product } from "../models/product"

const productsUri = 'products'
export const fetchProducts = () => {
    return axiosInstance.get<ApiResponse<Product[]>>(productsUri)
}
export const fetchProduct = (id: number) => {
    return axiosInstance.get<ApiResponse<Product>>(`${productsUri}/${id}`)
}
export const addProduct = (p: Product) => {
    return axiosInstance.post<ApiResponse<Product[]>>(productsUri, p)
}

export const updateProduct = (id: number, p: Product) => {
    return axiosInstance.put<ApiResponse<Product[]>>(`${productsUri}/${id}`, p)
}
export const deleteProduct = (id: number) => {
    return axiosInstance.delete<ApiResponse<Product[]>>(`${productsUri}/${id}`)
}