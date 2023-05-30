import Catalog from "./components/catalog/Catalog";
import Navbar from "./components/navbar/Navbar";
import Order from "./components/order/Order"
import Home from "./components/home/Home";
import Contact from "./components/footer/Footer";
import Product from "./components/product/Product";

import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/product" element={<Product />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
      <Contact />
    </>
  )
}


export default App;
