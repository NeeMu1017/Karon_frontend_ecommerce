import React from "react";
import style from "./about.module.scss";
import Navbar from "../componts/navbar/Navbar";
import Footer from "../componts/footer/Footer";

function About() {

  
 

  return (
    <div>
      <Navbar />

     <div className={style.about}>
        <h1>user table</h1>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>name</th>
              <th>name</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
      <Footer/>
    </div>
  );
}

export default About;
