import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom"

import "./components/order//Order.module.scss"
import "./components/catalog/Catalog.module.scss"
import "./components/product/Product.module.scss"
import "./components/footer/Footer.module.scss"
import "./components/navbar/NavbarStyles.scss"
import "./components/home//Home.module.scss"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

