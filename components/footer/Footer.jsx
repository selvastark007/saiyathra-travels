import React, { useEffect } from "react";
import "./Footer.css";
import video2 from "../../assets/video2.mp4";
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { SiTripadvisor } from "react-icons/si";
import { FiChevronRight } from "react-icons/fi";

// Effect

import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  //react hook animation useEffect
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="footer">
        <div className="videoDiv">
          <video src={video2} loop autoPlay muted type="video/mp4"></video>
        </div>

        <div className="secContent container">
          <div className="contactDiv flex">
            <div className="text" data-aos="fade-up">
              <small>KEEP IN TOUCH</small>
              <h3>Travel with Us</h3>
            </div>
            <div className="inputDiv flex">
              <div>
                <input
                  type="text"
                  placeholder="Enter Email Address"
                  data-aos="fade-up"
                />
              </div>
              <div>
                <button className="btn flex" type="submit" data-aos="fade-up">
                  SEND <FiSend className="icon" />
                </button>
              </div>
            </div>
          </div>
          <div className="footerCard flex ">
            <div className="footerIntro flex">
              <div className="logoDiv">
                <a href="#" className="logoDiv flex">
                  <MdOutlineTravelExplore className="icon" />
                  Travel
                </a>
              </div>

              <div className="footerParagraph" data-aos="fade-up">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate facilis illum qui odio quibusdam, harum rerum quos
                veritatis ipsam non!. Lorem ipsum dolor sit amet consectetur.
              </div>
              <div className="footerSocials flex" data-aos="fade-up">
                <AiOutlineTwitter className="icon" />
                <AiOutlineYoutube className="icon" />
                <AiFillInstagram className="icon" />
                <SiTripadvisor className="icon" />
              </div>
            </div>
            <div className="footerLinks grid">
              {/* Group one */}
              <div
                className="linkGroup"
                data-aos="fade-up"
                data-duration="3000"
              >
                <span className="groupTitle">OUR AGENCY</span>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Services
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Insurance
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Agency
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Tourism
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Payment
                </li>
              </div>
              {/* Group two */}
              <div
                className="linkGroup"
                data-aos="fade-up"
                data-duration="4000"
              >
                <span className="groupTitle">PATNERS</span>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Booking
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Rentcars
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Trivago
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Hostel World
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Trip Advisior
                </li>
              </div>
              {/* Group three */}
              <div
                className="linkGroup"
                data-aos="fade-up"
                data-duration="5000"
              >
                <span className="groupTitle">LAST MINUTUE</span>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  London
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  California
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Indonesia
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Europe
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Oceania
                </li>
              </div>
            </div>
            <div className="footerDiv flex">
              <small>BEST TRAVEL WEBSITE</small>
              <small>COPYRIGHTS RESERVED - WEBDADS2U 2022</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
