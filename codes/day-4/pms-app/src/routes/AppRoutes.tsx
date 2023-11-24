import { RouteObject, useRoutes } from 'react-router-dom'
import Home from '../components/common/home/Home'
import PageNotFound from '../components/common/page-not-found/PageNotFound'
import ProductList from '../components/products/product-list/ProductList'
import AddProduct from '../components/products/add-product/AddProduct'
import ProductDetail from '../components/products/product-detail/ProductDetail'
import EditProduct from '../components/products/edit-product/EditProduct'


const AppRoutes = () => {

    const appRoutes: RouteObject = {
        path: '',
        children: [
            {
                path: 'home',
                element: <Home />
            },
            {
                path: '',
                element: <Home />
            },
            {
                path: '*',
                element: <PageNotFound />
            }
        ]
    }

    const productRoutes: RouteObject =
    {
        path: 'products',
        children: [
            {
                path: '',
                element: <ProductList />
            },
            {
                path: 'add',
                element: <AddProduct />
            },
            {
                path: 'view/:id',
                element: <ProductDetail />
            },
            {
                path: 'update/:id',
                element: <EditProduct />
            }
        ]
    }


    const allRoutes = useRoutes([productRoutes, appRoutes])
    return allRoutes

}

export default AppRoutes