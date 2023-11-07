import React from "react";
import Navbar from "../componts/navbar/Navbar";
import Footer from "../componts/footer/Footer";
import './productList.scss'
import { useNavigate } from "react-router-dom";
function Product() {
const navigate = useNavigate()
  return (
    <div className="productlist">
      <Navbar />
        <div className="titel">
          <ul>
            <li className="heading">Product List</li>
            <li className="addbutton">
              <button onClick={()=>navigate('/product/add')} >ADD</button>
            </li>
          </ul>
        </div>
      <Footer />
    </div>
  );
}

export default Product;
