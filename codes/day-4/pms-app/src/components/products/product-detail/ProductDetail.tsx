import { useParams, useNavigate } from "react-router-dom";

type ParamType = {
    id: string
}
const ProductDetail = () => {
    const params = useParams<ParamType>()
    const navigate = useNavigate()
    const id = params.id
    if (id) {
        console.log(parseInt(id))
    }
    return (
        <div>
            Viewing details of Product: &nbsp;{id ? id : 'NA'}
            <br />
            <button type="button" onClick={
                () => navigate('/products')
            }>
                Back
            </button>
        </div>
    )
}

export default ProductDetail