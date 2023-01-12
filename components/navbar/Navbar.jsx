import React, { useState,useEffect } from "react";
import { Link,NavLink } from "react-router-dom";
import "./Navbar.css";
//icon
import { MdTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
//image
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [active, setActive] = useState("navBar");
  // function to toggle navBar

  const ShowNav = () => {
    setActive("navBar activeNavbar");
  };
  // function to remove navBar

  const removeNavbar = () => {
    setActive("navBar");
  };
  // color change
  const [header, setHeader] = useState("header flex")

  const listenScrollEvent = (event) => {
      if (window.scrollY < 73) {
          return setHeader("header flex")
      } else if (window.scrollY > 70) {
          return setHeader("header2 flex")
      }
  }

  useEffect(() => {
      window.addEventListener('scroll', listenScrollEvent);

      return () =>
          window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <>
      <section className="navBarSection">
        <header className={header}>
          <div className="logoDiv">
            <Link to="/" className="logo flex">
              <img src={logo} alt="logo" />
            </Link>
          </div>

          <div className={active}>
            <ul className="navLists flex">
              <li className="navItem">
                <Link to="/" className="navLink">
                  Home
                </Link>
              </li>
              <li className="navItem">
                <Link to="/" className="navLink">
                  Flights
                </Link>
              </li>
              <li className="navItem">
                <Link to="/" className="navLink">
                  Hotels
                </Link>
              </li>
              <li className="navItem">
                <Link to="/" className="navLink">
                  Gallery
                </Link>
              </li>
              {/* <li className="navItem">
              <a href="#" className="navLink">
                About
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                News
              </a>
            </li> */}
              <li className="navItem">
                <Link to="#" className="navLink">
                  Contact
                </Link>
              </li>

              <button className="btn">
                <Link to="#">BOOK NOW</Link>
              </button>
            </ul>

            <div onClick={removeNavbar} className="closeNavbar">
              <AiFillCloseCircle className="icon" />
            </div>
          </div>

          <div onClick={ShowNav} className="toggleNavbar">
            <TbGridDots className="icon" />
          </div>
        </header>
      </section>
    </>
  );
};

export default Navbar;
