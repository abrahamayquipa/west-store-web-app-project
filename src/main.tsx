import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Product from './pages/Product';
import Error404 from './pages/Error';
import ShoppingCart from './pages/ShoppingCart';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearcherProducts from './pages/SearcherProducts';

const rootElement = document.getElementById('root') ?? document.createElement('div')
const root = createRoot(rootElement)

root.render (
  <>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/shopping-cart' element={<ShoppingCart />} />
        <Route path='/product/search/:name' element={<SearcherProducts />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
    <Footer/>
  </>
)