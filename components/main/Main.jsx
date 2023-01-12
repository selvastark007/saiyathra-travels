import React, { useEffect } from "react";
import { Link,NavLink } from 'react-router-dom';
import "./Main.css";
//icons
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiClipboardCheck } from "react-icons/hi";
import { BsFillBookmarkHeartFill } from "react-icons/bs";



//shirdi img
import shirdi from "../../assets/shirdi.jpg";
import shirdi2 from "../../assets/shirdi2.jpg";
import shirdi3 from "../../assets/shirdi3.jpg";
import shirdi4 from "../../assets/shirdi4.jpg";
import shirdi5 from "../../assets/shirdi5.jpg";
import shirdi6 from "../../assets/shirdi6.jpg";
import shirdi7 from "../../assets/shirdi7.jpg";
import shirdi8 from "../../assets/shirdi8.jpg";
import shirdi9 from "../../assets/shirdi9.jpg";
import shirdi10 from "../../assets/shirdi10.jpg";
import shirdi11 from "../../assets/shirdi11.jpg";
import shirdi12 from "../../assets/shirdi12.jpg";
import shirdi13 from "../../assets/shirdi13.jpg";

//pages



// Effect

import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: shirdi,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "STARTING FROM",
    fees: "₹14500.00",
    link:'/details',
    description:
      "Assemble Chennai Airport @1230 hrs. Board Flight to Shirdi by Spicejet Airlines @ 1400 hrs. Arrive Shirdi @ 1540 hrs.On arrival meet and transfer to hotel. ",
  },
  {
    id: 2,
    imgSrc: shirdi2,
    destTitle: "Machu Picchu",
    location: "Peru",
    grade: "STARTING FROM",
    fees: "₹12500.00",
    link: '/details',
    description:
      "MUMBAI - SIDDHI VINAYAK  TEMPLE, MAHALAKSHMI TEMPLE, GATEWAY OF INDIA.NASIK - TRIYAMBAKESHWAR (JYOTIR LINGAM) KALA RAM,GORA RAM,RAM KUND,SITA CAVE,KAPALEESHWAR  ",
  },
  {
    id: 3,
    imgSrc: shirdi3,
    destTitle: "Grate Barrier Reef",
    location: "Austalia",
    grade: "STARTING FROM",
    fees: "₹4500.00",
    link: '/details',
    description:
      "Morning at 08.00 hrs Arrive Pune. Proceed to Shirdi. Reach Shirdi after noon 13.00 Hrs. Check in Hotel. Evening Shri sai baba VIP Darshan and Visit In and Around Temple. Dwarakamai,Gurusthan, Baijama House, Malsapathi House and Night stay at Shirdi.",
  },

  {
    id: 4,
    imgSrc: shirdi4,
    destTitle: "Cappadocia",
    location: "Turkey",
    grade: "STARTING FROM",
    fees: "₹8500.00",
    link: '/details',
    description:
      "Arrive Solapur Rly Station @ 4.00 Hrs. Proceed to Pandaripuram.(Approx 2 Hrs)  Refresh and Darshan of Shri Vittal Panduranga and Rukmani. After Lunch Proceed to Shirdi. Reach Shirdi Overnight Stay.",
  },
  {
    id: 5,
    imgSrc: shirdi5,
    destTitle: "Guanajuato",
    location: "Mexico",
    grade: "STARTING FROM",
    fees: "₹9500.00",
    link: '/details',
    description:
      "VARANASI - Kasi Vishwanathar ,Annapoorani,Vishalakshi, Durga mandir, Bhu Brila, and Ganga Aarthi. ALLAHABAD - Holy dip at Triveni Sangam& Rituals. Anandh Bhavan, SayanaAnjaneyar ",
  },
  {
    id: 6,
    imgSrc: shirdi6,
    destTitle: "Cinque Terre",
    location: "Italy",
    grade: "STARTING FROM",
    fees: "₹16900.00",
    link: '/details',
    description:
      " Coimbatore To Shirdi and Shirdi To Coimbatore economy class Air Fare.Well experienced tour manager entire tour.",
  },
  {
    id: 7,
    imgSrc: shirdi7,
    destTitle: "Angkor Wat",
    location: "Cambodia",
    grade: "STARTING FROM",
    fees: "₹16500.00",
    link: '/details',
    description:
      "It is mandatory for passengers arriving into Mumbai from other states/UT to carry a negative RT-PCR which will have to be issued from up to a maximum of 72Hours before the time of arrival into Mumbai.",
  },
  {
    id: 8,
    imgSrc: shirdi8,
    destTitle: "Taj Mahal",
    location: "India",
    grade: "STARTING FROM",
    fees: "₹10500.00",
    link: '/details',
    description:
      "It is mandatory for passengers arriving into Pune from other states/UT to carry a negative RT-PCR which will have to be issued from up to a maximum of 72Hours before the time of arrival into Pune. RT-PCR timeline starts from the report issuance time.",
  },
  {
    id: 9,
    imgSrc: shirdi9,
    destTitle: "Bali Island",
    location: "Austalia",
    grade: "STARTING FROM",
    fees: "₹14500.00",
    link: '/details',
    description:
      "MUMBAI - SIDDHI VINAYAK  TEMPLE, MAHALAKSHMI TEMPLE, GATEWAY OF INDIA.SHIRDI - SAI MANDIR, DWARAKAMAI, GURUSTHAN, CHAVADI, LENDIBAUG, KANDOBA TEMPLE",
  },
  {
    id: 10,
    imgSrc: shirdi10,
    destTitle: "Bali Island",
    location: "Austalia",
    grade: "STARTING FROM",
    fees: "₹21900.00",
    link: '/details',
    description:
      "Departure From Madurai to shirdi.Arrive Shirdi Airport by 2.30 Pm.ALLAHABAD - Holy dip at Triveni Sangam& Rituals. Anandh Bhavan, SayanaAnjaneyar ",
  },
  {
    id: 11,
    imgSrc: shirdi11,
    destTitle: "Bali Island",
    location: "Austalia",
    grade: "STARTING FROM",
    fees: "₹34900.00",
    link: '/details',
    description:
      "VARANASI - Kasi Vishwanathar ,Annapoorani,Vishalakshi, Durga mandir, Bhu Brila, and Ganga Aarthi.ALLAHABAD - Holy dip at Triveni Sangam& Rituals. Anandh Bhavan, SayanaAnjaneyar ",
  },
  {
    id: 12,
    imgSrc: shirdi12,
    destTitle: "Bali Island",
    location: "Austalia",
    grade: "STARTING FROM",
    fees: "₹17900.00",
    link: '/details',
    description:
      "Departure from Chennai to Pune Flight.Check in Hotel and  free time For leisure up to 4.00 pm.Reach shirdi.",
  },
  {
    id: 13,
    imgSrc: shirdi13,
    destTitle: "Bali Island",
    location: "Austalia",
    grade: "STARTING FROM",
    fees: "₹5500.00",
    link: '/details',
    description:
      "Morning at 10.15 hrs Arrive Pune. Proceed to Shirdi. Reach Shirdi after noon 14.30 Hrs. Check in Hotel. Evening Shri sai baba VIP Darshan and Visit In and Around Temple. Dwarakamai,Gurustha.",
  },
];

const Main = () => {
  //react hook animation useEffect
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0)
    // window.screenTop(0)
}
  return (
    <>
      <section className="main container section">
        <div className="secTitle">
          <h3 className="title" data-aos="fade-right">
            Most visited destinations
          </h3>
        </div>

        <div className="secContent grid">
          {Data.map(
            ({ id, imgSrc, destTitle, location, grade, fees, description,link }) => {
              return (
                <div key={id} className="singleDestination">
                  <div className="imageDiv">
                    <img src={imgSrc} alt={destTitle} />
                  </div>

                  <div className="cardInfo">
                    {/* <h4 className="destTitle">
                    {destTitle}
                  </h4>
                  <span className="continent flex-s">
                    <HiOutlineLocationMarker className='icon'/>
                    <span className="name">{location}
                    </span>
                  </span> */}

                    <div className="fees flex ">
                      <div className="grade">
                        <span>{grade}</span>
                      </div>
                      <div className="price">
                        <h5>{fees}</h5>
                      </div>
                    </div>
                    {/* <div className="dsec">
                      <p>{description}</p>
                    </div> */}

                    <div className="dualBtn flex">
                      <Link to={link}>
                        <button className="btn flex"  onClick={scrollToTop}>
                          DETAILS <HiClipboardCheck className="icon" />
                          
                        </button>
                      </Link>
                      <button className="btn flex yellowGradient">
                        BOOK ONLINE <BsFillBookmarkHeartFill className="icon" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </section>
    </>
  );
};

export default Main;
