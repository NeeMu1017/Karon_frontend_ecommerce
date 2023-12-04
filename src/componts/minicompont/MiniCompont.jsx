import React, { useState } from "react";
import { Autocomplete, Stack, TextField } from "@mui/material";
import { subcategory } from "./CategoryofElement";


export function FiltetDropDwon(props) {
    const [getvalu, setGetvalu] = useState(null);
    function onhandelchange (e,newvalu){
        setGetvalu(newvalu)
        props.getvalu(newvalu)
    }
  return (
    <div>
      <Autocomplete
        freeSolo
        sx={{
          backgroundColor: "transparent",
          border: "solide 1px #000",
          borderRadius: "5px",
          textTransform: "capitalize",
        }}
        value={getvalu}
        onChange={onhandelchange}
        options={subcategory}
        getOptionLabel={(op) => op}
        renderInput={(pre) => (
          <TextField {...pre} label="Filter" sx={{ color: "#000" }} />
        )}
      />
    </div>
  );
}

export function Slider (){
  
}