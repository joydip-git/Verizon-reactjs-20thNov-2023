import { Link } from "react-router-dom";
const DashBoard = () => {
    return (
        <div>
            <Link to="home">
                Home
            </Link>
            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
            <Link to="products">
                Products
            </Link>
            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
            <Link to="products/add">
                Add Product
            </Link>
        </div>
    )
}

export default DashBoard

// function Link({ to, children }: any) {
//     return (
//         <a href={to} onClick={
//             (e) => e.preventDefault()
//         }>
//             {children}
//         </a>
//     )
// }