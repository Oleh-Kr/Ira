import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
