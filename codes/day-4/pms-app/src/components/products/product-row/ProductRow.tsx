import { Product } from "../../../models/product"

type ProductRowPropType = {
    product: Product
}
//Pure Function (Component)
const ProductRow = (props: Readonly<ProductRowPropType>) => {

    const { product } = props
    const design = (
        <tr>
            <td>
                <img src={product.imageUrl} alt="NA" />
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