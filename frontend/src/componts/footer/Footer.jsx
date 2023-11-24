import React from "react";
import style from "./footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faInstagram,
  faLinkedin,
  faPaypal,
  faSquareFacebook,
  faSquareXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const shop = [
    { name: "Giftcard", link: "/" },
    { name: "Men", link: "/" },
    { name: "Women", link: "/" },
    { name: "Kid", link: "/" },
    { name: "Glass", link: "/" },
    { name: "Coupons", link: "/" },
  ];
  const about = [
    { name: "About us", link: "/" },
    { name: "Careers", link: "/" },
    { name: "Press Releases", link: "/" },
    { name: "service", link: "/" },
    { name: "Offline Shop", link: "/" },
  ];
  const help = [
    { name: "Contact us", link: "/" },
    { name: "FAQ", link: "/" },
    { name: "Your Account", link: "/" },
    { name: "Returns Centre", link: "/" },
    { name: "Help", link: "/" },
    { name: "Returns & Refunds", link: "/" },
    { name: "Track Order", link: "/" },
  ];
  const sosalmedia = [
    { name: faSquareFacebook },
    { name: faSquareXTwitter },
    { name: faInstagram },
    { name: faYoutube },
    { name: faLinkedin },
    { name: faGoogle },
    { name: faPaypal },
  ];

  return (
    <div className={style.footer}>
     <div className={style.containcon}>
      <div className={style.upcon}>
        <div className={style.con1}>
          <div className={style.logo}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu18MHIW_LQDffkF_z9KywJBbPcTx8zio19DwKC1icMoj8NLjnr5URUGUh67ZyfRCCYPI&usqp=CAU"
              alt="logo"
            />
          </div>
          <div className={style.input}>
            <input type="text" name="" id="" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className={style.con2}>
          <ul>
            <li>
              <p>Shop</p>
            </li>
            {shop.map((e, i) => (
              <li key={i}>
                <a href={e.link}>{e.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={style.con3}>
          <ul>
            <li>
              <p>Get to Know Us</p>
            </li>
            {about.map((e, i) => (
              <li key={i}>
                <a href={e.link}>{e.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={style.con4}>
          <ul>
            <li>
              <p>Let Us Help You</p>
            </li>
            {help.map((e, i) => (
              <li key={i + 1}>
                <a href={e.link}>{e.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr />
      <div className={style.downcon}>
        <ul>
          {sosalmedia.map((e, i) => (
            <li key={i}>
              <FontAwesomeIcon icon={e.name} />
            </li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Footer;
