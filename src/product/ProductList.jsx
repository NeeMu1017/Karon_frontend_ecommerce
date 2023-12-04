import React, { useEffect, useState } from "react";
import Navbar from "../componts/navbar/Navbar";
import Footer from "../componts/footer/Footer";
import "./productList.scss";
import { useNavigate } from "react-router-dom";
//import { Stack } from "@mui/material";
import { Cardto } from "../componts/card/Card";
import { FiltetDropDwon } from "../componts/minicompont/MiniCompont";

function Product() {
  const navigate = useNavigate();
  const [product, setproduct] = useState([]);
  const [productFilter, setProductFilter] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/product")
      .then((res) => res.json())
      .then((res) => {
        setproduct(res)
        setProductFilter(res);
      });
  }, []);

  function filtervalue(value) {
    if (!value) {
      setProductFilter(product);
    } else {
      setProductFilter(
        product.filter((f) => f.category.subcategory.includes(value))
      );
    }

    //console.log(value);
  }

  return (
    <div className="productlist">
      <Navbar />
      <div className="titel">
        <ul>
          <li style={{ width: "20%" }}>
            <FiltetDropDwon getvalu={filtervalue} />
          </li>
          <li className="heading">Product List</li>
          <li className="addbutton">
            <button onClick={() => navigate("/product/add")}>ADD</button>
          </li>
        </ul>
        {/*<Stack direction={"row"}>
          <Card />
        </Stack>*/}
        {productFilter.map((i) => (
          <Cardto
            name={i.name}
            despcription={i.depcription}
            price={i.price}
            image={i.img}
            key={i._id}
            cate={i.category.subcategory}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Product;
