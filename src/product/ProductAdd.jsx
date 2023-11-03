import React, {  useState } from "react";
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
  defolte
} from "../componts/minicompont/CategoryofElement";
import Dropdown from "../componts/minicompont/dropdwon/Dropdown";

//import { type } from "@testing-library/user-event/dist/type";
const ACTIONS = {
  MOBILE_COM: category[0],
  TV_APP_ELE: category[1],
  MEN_FASTION: category[2],
  WOMEN_FATION: category[3],
  HOME_KITCHEN_PET: category[4],
  BEAUT_HEALTH_GROCERY: category[5],
};

//function reducer(state, action) {
//  switch (action.type) {
//    case "SET_OPTIONS":
//      return action.payload;
//    default:
//      break;
//  }
//}

function ProductAdd() {
  const [select, setSelect] = useState("select ");
  const [secSelet, setSecSelet] = useState("select");
  //const [secondSelect, secondDispatch] = useReducer(reducer, []);
  // console.log(dispatch(ACTIONS.MOBILE_COM));
  //const hendelchangeEvent = (e) => {
  //  //const selectValu = setSelect
  //  //setSelect(selectValu);
  //  //console.log(select);
  //  let option ;
  //  switch (select) {
  //    case "mobile, computer":
  //      option = Mobile_Computer;
  //      break;
  //    default:
  //      break;
  //  }
  //  console.log(option);
  //  return secondDispatch({ type: "SET_OPTIONS",payload:option });
  //  //return option
  //};
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
      secondarr = defolte
      break;
  }

  return (
    <div>
      <Navbar />
      {/*<div className="container"></div>*/}
      <div className="addfrom">
        <div className="item1">
          <div>
            <label htmlFor="pname">product name</label>
            <input
              type="text"
              name="pname"
              id="pname"
              style={{ width: "95%", maxWidth: "90%" }}
            />
          </div>
          <div style={{display:"flex"}}>
            {/*<Autocomplete
            disablePortal
            options={category}
            
            />*/}
          </div>
          {/*<div style={{display:"flex"}}>
              <div style={{width:"40%"}}>
                <label>product types</label>
                <Dropdown
                  item={category}
                  isSelect={select}
                  setIsSelect={setSelect}
                  //dispatch={dispatch}
                  //onClick={hendelchangeEvent}
                />
              
              </div>
              <div style={{width:"40%"}}>
                <label >sub category</label>
                <Dropdown
                  item={secondarr}
                  isSelect={secSelet}
                  setIsSelect={setSecSelet}

                  //dispatch={dispatch}
                  //callfunction={()=>hendelchangeEvent}
                />
              </div>
           
          </div>*/}
        </div>
        <div className="item2"></div>
      </div>

      <Footer />
    </div>
  );
}

export default ProductAdd;
