import React, { useEffect, useState } from "react";
import Navbar from "../componts/navbar/Navbar";
import Footer from "../componts/footer/Footer";
import "./productList.scss";
import { useNavigate } from "react-router-dom";
//import { Stack } from "@mui/material";
import {  Cardto } from "../componts/card/Card";
function Product() {
  const navigate = useNavigate();
  const [product, setproduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/product")
    .then((res) => res.json())
    .then(res => setproduct(res));
  },[]);
  
  return (
    <div className="productlist">
      <Navbar />
      <div className="titel">
        <ul>
          <li className="heading">Product List</li>
          <li className="addbutton">
            <button onClick={() => navigate("/product/add")}>ADD</button>
          </li>
        </ul>
        {/*<Stack direction={"row"}>
          <Card />
        </Stack>*/}
        {product.map((i) => (
         
          <Cardto
            name={i.name}
            despcription={i.depcription}
            price={i.price}
            image={i.img}
            key={i._id}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Product;
