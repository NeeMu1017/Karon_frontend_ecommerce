import React, { useState, useEffect } from "react";

const SecureRoute = (props) => {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const isuserLogged = localStorage.getItem("login");
    if (!isuserLogged || isuserLogged === "false") {
      window.location.href = "/signin";
    } else {
      setLogin(true);
    }
  }, []);
  return <React.Fragment>{login ? props.children : null}</React.Fragment>;
};

export default SecureRoute;
