import { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const Product = lazy(() => import('./pages/Product'));
const Error404 = lazy(() => import('./pages/Error'));
const ShoppingCart = lazy(() => import('./pages/ShoppingCart'));
const SearcherProducts = lazy(() => import('./pages/SearcherProducts'));

const rootElement = document.getElementById('root') ?? document.createElement('div');
const root = createRoot(rootElement);

root.render(
  <>
    <Navbar />
    <BrowserRouter>
      <Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/shopping-cart' element={<ShoppingCart />} />
          <Route path='/product/search/:name?' element={<SearcherProducts />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
    <Footer />
  </>
);