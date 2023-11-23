import { AxiosResponse } from "axios"
import { fetchProducts } from "../../../services/productservice"
import { ApiResponse } from "../../../models/apiresponse"
import { Product } from "../../../models/product"

const ProductList = () => {
    let products: Product[] | undefined;

    const p: Promise<AxiosResponse<ApiResponse<Product[]>>> = fetchProducts()
    p.then(
        (resp: AxiosResponse<ApiResponse<Product[]>>) => {
            const apiResponse = resp.data
            if (apiResponse.data !== null) {
                products = apiResponse.data
            } else {
                products = undefined
            }
        },
        (err: Error) => {
            products = undefined
        }
    )

    let design: any;

    if (products !== undefined) {
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
                        products.map(
                            (p: Product) => {
                                return (
                                    <tr>
                                        <td>
                                            <img src={p.imageUrl} alt="NA" />
                                        </td>
                                        <td>{p.productName}</td>
                                        <td>{p.price}</td>
                                        <td>{p.starRating}</td>
                                        <td>
                                            <button type="button">Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        )
                    }
                </tbody>
            </table>
        )
    }

    return design
}

export default ProductList