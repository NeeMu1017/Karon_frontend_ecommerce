import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./dropdwon.scss";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
function Dropdown({ item ,isSelect,setIsSelect,disptach }) {
  const [isactive, setIsactive] = useState(false);
  //const [select, setSelect] = useState("select ");
  //  console.log(select);
  return (
    <div className="dropdown">
      <div
        className="dropdown_btn"
        onClick={() => {
          setIsactive(!isactive);
          //disptach()
        }}
      >
        <span className="select">{isSelect}</span>
        {isactive ? (
          <FontAwesomeIcon icon={faCaretDown} rotation={180} className="icon" />
        ) : (
          <FontAwesomeIcon icon={faCaretDown} className="icon" />
        )}
      </div>
      {isactive && (
        <div className="dbList">
          <div className="dropdown_list">
            {item.map((e, i) => (
              <div
                onClick={() => {
                  setIsSelect(e);
                  setIsactive(false);                  
                }}
                key={i}
              >
                {e}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
