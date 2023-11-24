import { Outlet, Route, Routes } from 'react-router-dom';
import DashBoard from '../common/dashboard/DashBoard';
import ProductList from '../products/product-list/ProductList';
import './App.css';
import Home from '../common/home/Home';
import AddProduct from '../products/add-product/AddProduct';
import ProductDetail from '../products/product-detail/ProductDetail';
import EditProduct from '../products/edit-product/EditProduct';
import PageNotFound from '../common/page-not-found/PageNotFound';
import AppRoutes from '../../routes/AppRoutes';

function App() {
  return (
    <div className="App">
      <DashBoard />
      <Outlet />

      {/* <Routes>
        <Route path='home' element={<Home />} />
        <Route path='' element={<Home />} />
        <Route path='products' element={<ProductList />} />
        <Route path='products/add' element={<AddProduct />} />
        <Route path='products/view/:id' element={<ProductDetail />} />
        <Route path='products/update/:id' element={<EditProduct />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes> */}
      <AppRoutes />
    </div>
  );
}

export default App;
