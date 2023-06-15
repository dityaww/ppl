import Login from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";

import { Routes, Route } from "react-router-dom";
import CartProduct from "./pages/CartProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />

        <Route path="/product">
          <Route index element={<Product />} />
          <Route path=":id" element={<ProductDetail />} />
        </Route>

        <Route path="/cart" element={<CartProduct />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
