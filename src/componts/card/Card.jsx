import React from "react";
import "./card.scss";
import Ccard from "@mui/material/Card";
import { Stack } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
export const Card = () => {
  return (
    <Ccard
      sx={{
        width: "90%",
        margin: "0 50px",
        backgroundColor: "#fff",
        opacity: "0.9",
      }}
    >
      <Stack direction={"row"}>
        <div>
          <img
            src="https://res.cloudinary.com/dliapsmgm/image/upload/v1700716705/ahskyudvskuv9ls1vd0n.jpg"
            alt="samsung"
            style={{ height: "200px" }}
          />
        </div>

        <Stack direction={"column"}>
          <h1>product name</h1>
          <p>price</p>
          <p>discount</p>
        </Stack>
      </Stack>
    </Ccard>
  );
};

export function Cardto({ name, image, despcription, price }) {
  return (
    <div className="card2" onClick={()=>console.log("click me thank ")}>
      <div className="media">
        <div className="image">
          <img src={image} alt={name} />
        </div>
      </div>
      <div className="product_info">
        <h2>{name}</h2>
        <p>{despcription}</p>
        <h2>
          <FontAwesomeIcon icon={faIndianRupeeSign} size="2xs" /> {price}
        </h2>
      </div>
    </div>
  );
}
