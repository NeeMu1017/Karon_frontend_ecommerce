import React, { useState } from "react";
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
import { Button, Stack, TextField } from "@mui/material";
import imgupload from "../image/image_upload.png";
const ACTIONS = {
  MOBILE_COM: category[0],
  TV_APP_ELE: category[1],
  MEN_FASTION: category[2],
  WOMEN_FATION: category[3],
  HOME_KITCHEN_PET: category[4],
  BEAUT_HEALTH_GROCERY: category[5],
};

function ProductAdd() {
  const [select, setSelect] = useState("select ");
  const [secSelet, setSecSelet] = useState("select");

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
      break;
  }

  return (
    <div>
      <Navbar />

      <div className="addfrom">
        <div className="item1">
          <div>
            <Stack direction={"column"}>
              <TextField label="product name" sx={{ width: "100%" }} />
              <Stack direction={"row"}>
                <TextField
                  label="price"
                  sx={{
                    margin: "5px 5px 0 0",
                    width: "50%",
                  }}
                />
                <TextField
                  label="quantity"
                  sx={{
                    margin: "5px 0 0 0",
                    width: "50%",
                  }}
                />
              </Stack>
              <Stack
                sx={{ justifyContent: "center", margin: "10px 0 0 0" }}
                direction={"row"}
              >
                <Button
                  variant="contained"
                  sx={{
                    width: "40%",
                  }}
                >
                  Upload
                </Button>
              </Stack>
            </Stack>
          </div>
        </div>
        <div className="item2">
          <Stack
            direction={"column"}
            sx={{ width: "50%", alignItems: "center" }}
          >
            <Stack direction={"row"} sx={{ justifyContent: "center" }}>
              <img src={imgupload} alt="uloadimg" style={{width:"90%"}} />
            </Stack>
            <TextField 
            type="file"
            />
          </Stack>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProductAdd;
