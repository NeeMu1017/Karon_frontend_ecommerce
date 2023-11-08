import React, { useState } from "react";
import imguploder from "../image/imguploder.png";
import Navbar from "../componts/navbar/Navbar";
import Footer from "../componts/footer/Footer";
import "./productAdd.scss";
import {
  category,
  Home_Kitchen_Pets,
  Beauty_Health_Grocery,
  Men_Fashion,
  Mobile_Computer,
  Tv_Appliances_Electronics,
  Women_Fashion,
  defolte,
} from "../componts/minicompont/CategoryofElement";

import { Autocomplete, Button, Stack, TextField } from "@mui/material";
const ACTIONS = {
  MOBILE_COM: category[0],
  TV_APP_ELE: category[1],
  MEN_FASTION: category[2],
  WOMEN_FATION: category[3],
  HOME_KITCHEN_PET: category[4],
  BEAUT_HEALTH_GROCERY: category[5],
};

function ProductAdd() {
   var productdata = {
    name: "",
    price: "",
    quantity: "",
    img: null
  };
  const [product, setProduct] = useState(productdata);
  const [select, setSelect] = useState();
  //const [secSelet, setSecSelet] = useState("select");
 

  let secondarr;
  switch (select) {
    case ACTIONS.MOBILE_COM:
      secondarr = Mobile_Computer;
      break;
    case ACTIONS.TV_APP_ELE:
      secondarr = Tv_Appliances_Electronics;
      break;
    case ACTIONS.MEN_FASTION:
      secondarr = Men_Fashion;
      break;
    case ACTIONS.WOMEN_FATION:
      secondarr = Women_Fashion;
      break;
    case ACTIONS.HOME_KITCHEN_PET:
      secondarr = Home_Kitchen_Pets;
      break;
    case ACTIONS.BEAUT_HEALTH_GROCERY:
      secondarr = Beauty_Health_Grocery;
      break;
    default:
      secondarr = defolte;

      secondarr = defolte;

      break;
  }

  const handelChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Navbar />
      {/*<div className="container"></div>*/}
      <div className="addfrom">
        <div className="item1">
          <TextField
            label="product Name"
            type="text"
            sx={{ width: "100%" }}
            name="name"
            value={product.name}
            onChange={handelChange}
          />
          <Stack direction={"row"}>
            <div style={{ width: "50%", margin: "10px 5px 0 0" }}>
              <Autocomplete
                freeSolo
                sx={{
                  backgroundColor: "#ffe",
                  border: "solide 1px #000",
                  borderRadius: "5px",
                }}
                options={category}
                renderInput={(pre) => (
                  <TextField {...pre} label="category" sx={{ color: "#000" }} />
                )}
              />
            </div>
            <div style={{ width: "50%", margin: "10px 0 0 0" }}>
              <Autocomplete
                id="free-solo-demo"
                freeSolo
                sx={{
                  backgroundColor: "#ffe",
                  border: "solide 1px #000",
                  borderRadius: "5px",
                }}
                options={category.map((e) => e)}
                renderInput={(params) => (
                  <TextField {...params} label="Sub Category" />
                )}
              />
            </div>
          </Stack>
          <Stack sx={{ margin: "10px 0 0 0" }} direction={"row"}>
            <TextField label="price" sx={{ margin: "0 5px 0 0" }} />
            <TextField label="quantity" />
          </Stack>
        </div>
        <div className="item2">
          <div className="conimg">
            <img src={imguploder} alt="not found" style={{ width: "50%" }} />
            <TextField type="file" sx={{ width: "50%" }}
              onChange={(e)=>{setProduct({...product,img:e.target.files[0]})}}
             />
            
          </div>
        </div>
        <Button variant="contained" onClick={()=>{console.log(product)}}>updata</Button>
      </div>

      <Footer />
    </div>
  );
}

export default ProductAdd;
