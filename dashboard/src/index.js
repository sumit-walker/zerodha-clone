import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./components/Home.js"
import  NotFound from "./NotFound.js"
import PrivateRoute from "./PrivateRoute.js";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/*' element={
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      } />
      <Route path="*" element={<NotFound/>}></Route>
    </Routes>
    <ToastContainer/>
  </BrowserRouter>
);


