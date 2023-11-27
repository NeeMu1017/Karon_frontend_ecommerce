import React, { useState } from "react";
import imguploder from "../image/imguploder.png";
import Navbar from "../componts/navbar/Navbar";
import Footer from "../componts/footer/Footer";
import "./productAdd.scss";
import {
  category
} from "../componts/minicompont/CategoryofElement";

import { Autocomplete, Button, CircularProgress, LinearProgress, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
//const ACTIONS = {
//  MOBILE_COM: category[0],
//  TV_APP_ELE: category[1],
//  MEN_FASTION: category[2],
//  WOMEN_FATION: category[3],
//  HOME_KITCHEN_PET: category[4],
//  BEAUT_HEALTH_GROCERY: category[5],
//};

function ProductAdd() {
  var productdata = {
    name: "",
    price: "",
    quantity: "",
    description:"",
  };
  
  const [product, setProduct] = useState(productdata);
  const [isloading,setIsloading] =useState(false);
  const [select, setSelect] = useState(null);
  const [firstdrop, setFirstdrop] = useState(null);
  const [secondselect, setScondSelect] = useState(null);
  const navigate = useNavigate()
  const handelupload = () => {
    setIsloading(true);
    let formData = new FormData();
    formData.append("img", select);
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("quantity", product.quantity);
    formData.append("depcription" , product.description)
    formData.append("category",firstdrop.name);
    formData.append("subcategory",secondselect)
    fetch("http://localhost:4000/product/add", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {console.log("res.ok", res);
      navigate('/product');
      setIsloading(false);
    })
      .catch((err) => {console.log(err);
      setIsloading(true);
      });

  };

  const handelChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handelFirst = (e,newvalue) => {
    //let category = e.target.value
    setFirstdrop(newvalue);
    setScondSelect(" ")
  };
  const handelSecond = (e,newvalue) => {
    //let subCategory =e.target.value
    setScondSelect(newvalue);
   
  };

  //  const handelChangefirstselect = (e) => {
  //    const slectvalue = e.target.value;
  //    setFirstdrop(slectvalue);
  //
  //    switch (slectvalue) {
  //      case ACTIONS.MOBILE_COM:
  //        setScondSelect(Mobile_Computer)
  //        break;
  //      case ACTIONS.TV_APP_ELE:
  //        setScondSelect(Tv_Appliances_Electronics)
  //        break;
  //      case ACTIONS.MEN_FASTION:
  //        setScondSelect(Men_Fashion)
  //        break;
  //      case ACTIONS.WOMEN_FATION:
  //        setScondSelect(Women_Fashion)
  //        break;
  //      case ACTIONS.HOME_KITCHEN_PET:
  //        setScondSelect(Home_Kitchen_Pets)
  //        break;
  //      case ACTIONS.BEAUT_HEALTH_GROCERY:
  //        setScondSelect(Beauty_Health_Grocery)
  //        break;
  //      default:
  //        setScondSelect(defolte)
  //        break;
  //    }
  //  };

  return (
    <div>
    
      <Navbar />
    
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
                  textTransform:"capitalize"
                }} 
                options={category }
                getOptionLabel={op => op.name}
                value={firstdrop}
                
                onChange={handelFirst}
                renderInput={(pre) => (
                  <TextField {...pre} label="category" sx={{ color: "#000" }} />
                )}
              />
            </div>
            <div style={{ width: "50%", margin: "10px 0 0 0" }}>
              <Autocomplete
                
                freeSolo
                sx={{
                  backgroundColor: "#ffe",
                  border: "solide 1px #000",
                  borderRadius: "5px",
                  
                }}
                options={firstdrop?.subcategory || [] }
                getOptionLabel={op =>op}
                value={secondselect}
                onChange={handelSecond}
                renderInput={(params) => (
                  <TextField {...params} label="Sub Category" disabled = {!setFirstdrop} />
                )}
              />
            </div>
          </Stack>
          <Stack sx={{ margin: "10px 0 0 0" }} direction={"row"}>
            <TextField

              name="price"
              label="price"
              sx={{ margin: "0 5px 0 0", width:"50%" }}
              value={product.price}
              onChange={handelChange}
            />
            <TextField
              sx={{ width:"50%"}}
              name="quantity"
              label="quantity"
              value={product.quantity}
              onChange={handelChange}
            />
          </Stack>
          <Stack sx={{ margin: "10px 0 0 0", width:"100%" }}>
            <textarea
              name="description"
              value={product.description}
              onChange={handelChange}
              placeholder="Depcription"
            />
          </Stack>
        </div>
        <div className="item2">
          <div className="conimg">
            <img src={imguploder} alt="not found" style={{ width: "50%" }} />
            <TextField
              type="file"
              sx={{ width: "50%" }}
              
              onChange={(e) => {
                setSelect(e.target.files[0]);
              }}
            />
          </div>
        </div>
        <Button variant="contained" onClick={handelupload}>
          updata
        </Button>
        {
          isloading ? <CircularProgress/>:''
        }

      </div>

      <Footer />
    </div>
  );
}

export default ProductAdd;
