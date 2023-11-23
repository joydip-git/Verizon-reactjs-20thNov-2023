import { AxiosResponse } from "axios"
import { fetchProducts } from "../../../services/productservice"
import { ApiResponse } from "../../../models/apiresponse"
import { Product } from "../../../models/product"
import ProductRow from "../product-row/ProductRow"
import { useEffect, useState } from "react"

const ProductList = () => {

    const [fetchCompleted, setFetchCompleted] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [products, setProducts] = useState<Product[] | undefined>(undefined)

    console.log('PL rendered')
    console.log('initiate fetching data')

    const getProductRecods = () => {
        const p: Promise<AxiosResponse<ApiResponse<Product[]>>> = fetchProducts()
        p.then(
            (resp: AxiosResponse<ApiResponse<Product[]>>) => {
                console.log('received response')
                const apiResponse = resp.data
                if (apiResponse.data !== null) {
                    setErrorMessage('')
                    setFetchCompleted(true)
                    setProducts(apiResponse.data)
                } else {
                    setErrorMessage(apiResponse.message)
                    setFetchCompleted(true)
                    setProducts(undefined)
                }
            },
            (err: Error) => {
                setErrorMessage(err.message)
                setFetchCompleted(true)
                setProducts(undefined)
            }
        )
    }

    useEffect(
        () => {
            getProductRecods()
        },
        []
    )

    let design: any;

    if (!fetchCompleted) {
        design = <span>Loading data...please wait</span>
    } else if (errorMessage !== '') {
        design = <span>{errorMessage}</span>
    } else if (!products) {
        design = <span>No records</span>
    } else {
        design = (
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products
                            .map(
                                (p: Product) => <ProductRow product={p} key={p.productId} />
                            )
                    }
                </tbody>
            </table>
        )
    }

    return design
}

export default ProductList