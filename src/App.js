import React from 'react'
import ProductPage from './Components/ProductPage';
import HomePage from './Components/HomePage';
import CartPage from './Components/CartPage';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ProductDetailPage from './Components/ProductDetailPage';
import AboutUsPage from './Components/AboutUsPage';
import GoToTop from './Components/GoToTop';

function App() {
  return (
    <>
      <BrowserRouter>
        <GoToTop />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/productDetail" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/aboutUs" element={<AboutUsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
