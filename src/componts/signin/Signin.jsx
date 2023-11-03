import React, { useState } from "react";
import "./sigin.scss";
import { useNavigate } from "react-router-dom";

function Signin() {
  var data = {
    name: "",
    email: "",
    password: "",
  };
  const [user, setUser] = useState(data);
  const [issingin, setIsSing] = useState(false);
  const handelChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  //
  // useEffect(()=>{
  //  let value = localStorage.getItem("login")
  //  if(value === "true"){
  //    setIsSing(true)
  //  }
  // })
  const fetchdata = () => {
    fetch("http://localhost:4000/user", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        setIsSing(true);
        //console.log(res);
        setUser(data);
        localStorage.setItem("login", "true");
      } else {
        throw new Error("responce is bad");
      }
    });
  };

  let handelsubmit = () => {
    fetchdata(user);
    //navigate("/");
    //console.log(user);
  };
  let hendelSingup = () => {
    setIsSing(true);
  };
  let handelLogin = () => {
    fetch("http://localhost:4000/auth", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      navigate("/");
      console.log(res);
      localStorage.setItem("login", "true");
    });
  };
  return (
    <section className="login">
      <div className="con1">
        {!issingin ? (
          <div>
            <h2>Sign </h2>

            <div className="singcon">
              <div className="feild">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={user.name}
                  onChange={handelChange}
                />
              </div>
              <div className="feild">
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  value={user.email}
                  onChange={handelChange}
                />
              </div>
              <div className="feild">
                <input
                  type="text"
                  placeholder="Password"
                  name="password"
                  value={user.password}
                  onChange={handelChange}
                />
              </div>
              <div className="feild">
                <button onClick={handelsubmit}>Sign In</button>
              </div>
              <a onClick={hendelSingup}> old user Login </a>
            </div>
          </div>
        ) : (
          <div>
            <h2>Login </h2>
            <div className="singcon">
              {/*<div className="feild">
                
                <input type="text" placeholder="Name" id="" />
              </div>*/}
              <div className="feild">
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  value={user.email}
                  onChange={handelChange}
                />
              </div>
              <div className="feild">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={user.password}
                  onChange={handelChange}
                />
              </div>
              <div className="feild">
                <button onClick={handelLogin}>Log In</button>
              </div>
              <a
                onClick={() => {
                  setIsSing(false);
                }}
                className="toggelbutton"
              >
                New User first Sign In{" "}
              </a>
            </div>
          </div>
        )}
      </div>
      <div className="con2">
        <img src="./image/sing.jpg" alt="loadi" />
      </div>
    </section>
  );
}

export default Signin;
