import { AxiosResponse } from "axios"
import { fetchProducts } from "../../../services/productservice"
import { ApiResponse } from "../../../models/apiresponse"
import { Product } from "../../../models/product"
import ProductRow from "../product-row/ProductRow"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { fetchFailure, fetchInitiate, fetchSuccess } from "../../../redux/store-slices"
import { useAppDispatch, useAppSelector } from "../../../redux/hooks"
//import { AppState } from "../../../redux/store"

const ProductList = () => {
    console.log('PL rendered')
    console.log('initiate fetching data')

    // const errorMessage = useSelector((stateMap: any) => stateMap.productsState.errorMessage)
    // const fetchCompleted = useSelector((stateMap: any) => stateMap.productsState.fetchCompleted)
    // const productRecords = useSelector((stateMap: any) => stateMap.productsState.productRecords)

    // const { errorMessage, fetchCompleted, productRecords } = useSelector((stateMap:AppState) => stateMap.productsState)

    const { errorMessage, fetchCompleted, productRecords } = useAppSelector((stateMap) => stateMap.productsState)

    const dispatch = useDispatch()
    //const dispatch = useAppDispatch()

    const getProductRecods = () => {
        //dispatch({type:'products/fetchInitiate'})
        const initiateAction = fetchInitiate()
        dispatch(initiateAction)

        const p: Promise<AxiosResponse<ApiResponse<Product[]>>> = fetchProducts()
        p.then(
            (resp: AxiosResponse<ApiResponse<Product[]>>) => {
                console.log('received response')
                const apiResponse = resp.data
                if (apiResponse.data !== null) {
                    //disptach({type:'products/fetchSuccess',payload:apiResponse.data})
                    const successAction = fetchSuccess(apiResponse.data)
                    dispatch(successAction)
                } else {
                    //disptach({ type: 'products/fetchFailure', payload: apiResponse.message })
                    const failureAction = fetchFailure(apiResponse.message)
                    dispatch(failureAction)
                }
            },
            (err: Error) => {
                //disptach({ type: 'products/fetchFailure', payload: err.message })
                const failureAction = fetchFailure(err.message)
                dispatch(failureAction)
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
    } else if (!productRecords) {
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
                        productRecords
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