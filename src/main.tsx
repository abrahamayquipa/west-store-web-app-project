import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Error404 from './pages/Error'

import Navbar from './components/Navbar'
import Footer from './components/Footer';

const rootElement = document.getElementById('root') ?? document.createElement('div')
const root = createRoot(rootElement)

root.render (
  <>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='*' element={ <Error404 /> } />
      </Routes>
    </BrowserRouter>
    <Footer/>
  </>
)