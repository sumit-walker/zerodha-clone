import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import Signup from './landing_page/singup/Signup';
import Login from './landing_page/singup/Login';
import About from './landing_page/about/About';
import Product from './landing_page/product/Product';
import Pricing from './landing_page/pricing/Pricing';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';
import Support from './landing_page/support/Support';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/pricing' element={<Pricing/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/product' element={<Product/>}></Route>
      <Route path='/support' element={<Support/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
    </Routes>
    <ToastContainer/>
    <Footer/>
  </BrowserRouter>
);


