import 'tailwindcss/tailwind.css'
import './App.css';
import React from 'react'
import Navigation from './customer/components/Navigation/Navigation.jsx';
import './index.css'
import HomePage from './customer/pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product';
import ProdcutDetails from './customer/components/ProductDetails/ProductDetails';
import Cart from './customer/components/Cart/Cart';
import CheckOut from './customer/components/CheckOut/CheckOut';
import Order from './customer/components/Order/Order';
import OrderCard from './customer/components/Order/OrderCard';
import OrderDetails from './customer/components/Order/OrderDetails';
import CustomerRouters from './Routers/CustomerRouters';

import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/*" element={<CustomerRouters/>}></Route>
        </Routes>
        {/*<HomePage/>*/}
        {/* <Product/>*/}
        {/*<ProdcutDetails/>*/}
        {/*<Cart/>*/}
        {/*<CheckOut />*/}
      {/* <Order/>*/} 
      </div>
    </div>
  );
}

export default App;
