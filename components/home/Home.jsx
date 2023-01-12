import React, { useEffect } from "react";
import "./Home.css";
import video from "../../assets/plane2.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";
import Main from "../main/Main";
import {Helmet} from 'react-helmet';

// Effect

import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  //react hook animation useEffect
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
     <Helmet>
      <title>Saiyathra Travels</title>
     </Helmet>
      <section className="home">
        {/* <div className="overlay">

      </div> */}
        <video src={video} muted autoPlay loop type="video/mp4"></video>

        <div className="homeContent container">
          <div className="textDiv">
            <h1 className="homeTitle" data-aos="fade-up">
              Shirdi Tour Packages
            </h1>
            <span className="smallText" data-aos="fade-up">
              Chennai - Bengaluru - Coimbatore
            </span>
          </div>

          <div className="cardDiv grid" data-aos="fade-up">
            <div className="destinationInput">
              <label htmlFor="city">
                {/* Search your destination */}
                Your location
              </label>
              <div className="input flex">
                <input type="text" placeholder="Enter location here..." />
                <GrLocation className="icon-s" />
              </div>
            </div>

            <div className="destinationInput">
              <label htmlFor="city">Search your destination</label>
              <div className="input flex">
                <input type="text" placeholder="Enter name here..." />
                <GrLocation className="icon-s" />
              </div>
            </div>

            <div className="destinationInput duration">
              <label htmlFor="city">Duration</label>
              {/* <div className="input flex"><input type="text" placeholder='Enter name here...' />
            <GrLocation className='icon'/> */}
              <select name="duration" id="duration" className="input duration">
                <option value="1 Night">1 Night</option>
                <option value="2 Night">2 Night</option>
                <option value="3 Night">3 Night</option>
                <option value="2day 3Night">2day 3Night</option>
              </select>
            </div>
            {/* </div> */}

            <div className="dateInput">
              <label htmlFor="date">Select your date</label>
              <div className="input flex">
                <input type="date" />
              </div>
            </div>

            {/* <div className="priceInput">
            <div className="lable_total flex">
             <label htmlFor="price">Max price:</label>
             <h3 className="total">$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max='5000' className='range' min='1000' />
            </div>
          </div> */}

            <div className="searchOptions flex">
              <HiFilter className="icon" />
              <span>More filter</span>
            </div>
          </div>

          <div className="homeFooterIcons flex" data-aos="fade-up">
            <div className="rightIcons">
              <FiFacebook className="icons" />
              <AiOutlineInstagram className="icons" />
              <FaTripadvisor className="icons" />
            </div>
            <div className="leftIcons">
              {/* <BsListTask className="icons" />
              <TbApps className="icons" /> */}
            </div>
          </div>
        </div>
      </section>
      <Main />
    </>
  );
};

export default Home;
