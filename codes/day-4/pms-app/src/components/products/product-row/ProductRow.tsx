import { Link } from "react-router-dom"
import { Product } from "../../../models/product"
import './ProductRow.css'

type ProductRowPropType = {
    product: Product
}
//Pure Function (Component)
const ProductRow = (props: Readonly<ProductRowPropType>) => {

    const { product } = props
    const design = (
        <tr>
            <td>
                <Link to={`/products/view/${product.productId}`}>
                    <img src={product.imageUrl} alt="NA" className="img-style" />
                </Link>
            </td>
            <td>{product.productName}</td>
            <td>{product.price}</td>
            <td>{product.starRating}</td>
            <td>
                <button type="button">Delete</button>
            </td>
        </tr>
    )
    return design
}

export default ProductRow