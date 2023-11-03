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
    <section className={style.footer}>
      {/*<div className={style.wave}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className={style.shape}
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className={style.shape}
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className={style.shape}
          ></path>
        </svg>
      </div>*/}

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
    </section>
  );
};

export default Footer;
