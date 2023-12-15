import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Contact from "./contact/Contact";

import Signin from "./componts/signin/Signin";
import SecureRoute from "./componts/secureRoute/SecureRoute";
import Product from "./product/ProductList";
import ProductAdd from "./product/ProductAdd";

//import Authrout from "./componts/secureRoute/Authrout";

function App() {
  //  s
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <SecureRoute>
              <Home />
            </SecureRoute>
          }
        />
        <Route
          path="/about"
          element={
            <SecureRoute>
              <About />
            </SecureRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <SecureRoute>
              <Contact />
            </SecureRoute>
          }
        />
        <Route path="/signin" element={<Signin />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/add" element={<ProductAdd />} />

        {/*<Route path="/login" element={<Login />} />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
