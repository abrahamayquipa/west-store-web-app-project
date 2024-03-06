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
        <Route path='https://west-store-web-app-project-9xu3sdw5n-abrahams-projects-a43793ae.vercel.app/' element={<Home />} />
        <Route path='https://west-store-web-app-project-9xu3sdw5n-abrahams-projects-a43793ae.vercel.app/product/:id' element={<Product />} />
        <Route path='https://west-store-web-app-project-9xu3sdw5n-abrahams-projects-a43793ae.vercel.app/shopping-cart' element={<ShoppingCart />} />
        <Route path='https://west-store-web-app-project-9xu3sdw5n-abrahams-projects-a43793ae.vercel.app/product/search/:name?' element={<SearcherProducts />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
    <Footer/>
  </>
)