import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const naviagte = useNavigate();
  const [islogin, setLogin] = useState(false);

  const hendelLogin = () => {
    naviagte("/signin");
  };
  const menuElement = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Product",
      path: "/product",
    },
  ];
  useEffect(() => {
    let value = localStorage.getItem("login");
    if (value === "true") {
      setLogin(true);
    }
  }, [islogin]);
  //get data from localstorege like userdata from sing page
  //function getusername() {
  //  const name = localStorage.getItem("user");
  //  const obj = JSON.parse(name);
  //  return obj.name;
  //}
  function hendelLogout() {
    naviagte("/signin");
    localStorage.setItem("login", "false");
    localStorage.removeItem("login");
    //console.log(islogin);s
  }
  return (
    <div className="nav">
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <div className="menu">
        <ul>
          {menuElement.map((e,i) => (
            <li key={i}>
              <a href={e.path}>{e.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="end">
        <div>
          Well Come
          <a href="/">Usser</a>
        </div>
        {!islogin ? (
          <button onClick={hendelLogin}> Login</button>
        ) : (
          <button onClick={hendelLogout}> Logout</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
