import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from '../DashBoard';
import BlogIndex from '../Blog';
import ShopIndex from '../Shop';
import ColectionIndex from '../Collection';
import ProdutIndex from '../Product';
import ProductDetail from '../Product/CPage';
import NotFound from '../Misc/NoPageFound';


const FrontEnd = () => {
  return (
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/blog' element={<BlogIndex />} />
      <Route path='/shop' element={<ShopIndex />} />
      <Route path='/collection' element={<ColectionIndex />} />
      <Route path='/product' element={<ProdutIndex />} />
      <Route path='/product-detail' element={<ProductDetail />} />
      <Route path='*' element={<NotFound />} />
    </Routes>

  );
};

export default FrontEnd;
