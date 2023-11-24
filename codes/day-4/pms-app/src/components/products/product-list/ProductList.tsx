import { Product } from "../../../models/product"
import ProductRow from "../product-row/ProductRow"
import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { fetchInitiate } from "../../../redux/store-slices"
import { useAppSelector } from "../../../redux/hooks"


const ProductList = () => {
    console.log('PL rendered')

    const { errorMessage, fetchCompleted, productRecords } = useAppSelector((stateMap) => stateMap.productsState)
    const dispatch = useDispatch()

    useEffect(
        () => {
            dispatch(fetchInitiate())
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