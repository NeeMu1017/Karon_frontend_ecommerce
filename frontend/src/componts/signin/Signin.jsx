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
  const [error, setError] = useState(null);
  const handelChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
 
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
      } else if(res.status === 400) {
        setError( "pls fill all details")
      }
    });
  };

  let handelsubmit = () => {
    fetchdata(user);
    //navigate("/");
    //console.log(user);
  };
  let hendelSingup = () => {
    setIsSing(!issingin);
  };
  let handelLogin = () => {
    fetch("http://localhost:4000/user/auth", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        navigate("/");
        localStorage.setItem("login", "true");
      } else if (res.status === 401) {
        setError(" user not found pls sign in first ");
      } else if (res.status === 400) {
        setError("email and password require");
      }
    });
  };

  return (
    <section className="login">
      <div className="con1">
        <div>
          <h2>{!issingin ? "sign in" : "login"} </h2>

          <div className="singcon">
            {!issingin ? (
              <div className="feild">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={user.name}
                  onChange={handelChange}
                />
              </div>
            ) : null}

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
              <button
                onClick={!issingin ? () => handelsubmit() : () => handelLogin()}
              >
                {!issingin ? "sign in" : "login"}
              </button>
            </div>
            <p onClick={hendelSingup}>
              {!issingin ? "old user Login " : "New User"}
            </p>
          </div>
        </div>
        {error && <h5>{error}</h5>}
      </div>
    </section>
  );
}

export default Signin;
