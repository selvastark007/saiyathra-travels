import React from 'react';
import '../pages/Details.css';
import { Link } from 'react-router-dom';
// import Carousel from 'react-bootstrap/Carousel';
import Iframe from 'react-iframe';
import {Helmet} from 'react-helmet';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


// images
import img from '../assets/slider1.jpg'
import img1 from '../assets/slider2.jpg'
import img2 from '../assets/slider3.jpg'

//accordion
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


//icon
import { VscCircleFilled } from 'react-icons/vsc';
import { RiFileReduceFill } from 'react-icons/ri';
import { BsPeople } from 'react-icons/bs'
import { AiOutlineClockCircle } from 'react-icons/ai';
import { RxCounterClockwiseClock } from 'react-icons/rx';
import { AiOutlineMobile } from 'react-icons/ai';
import { FaLanguage } from 'react-icons/fa';
import { MdOutlineAirplaneTicket } from 'react-icons/md';
import { IoFastFoodOutline } from 'react-icons/io5';
import { IoMdGift } from 'react-icons/io';
import { MdOutlineEmojiTransportation } from 'react-icons/md';
import { MdOutlineTour } from 'react-icons/md';
import { RxDotFilled } from 'react-icons/rx'


const Details = () => {
    return (
        <>
          <Helmet>
            <title>Details</title>
          </Helmet>
            <section className="details">
                <div className="details-banner flex container">
                    <div className="banner-left">
                        <Carousel>
                            <div>
                                <img src={img} />
                            </div>
                            <div>
                                <img src={img1} />
                            </div>
                            <div>
                                <img src={img2} />
                            </div>
                        </Carousel>
                    </div>
                    <div className="banner-right flex">
                        <div className="details-head">
                            <h1>Chennai To Shirdi Flight Tour Package Direct (Direct shirdi flight)</h1>
                            <Link to="#"> by Saiyathra Travels</Link>

                        </div>
                        <div className="banner-review">
                            <p className='flex'>
                                <VscCircleFilled className='icon review-icon' />
                                <VscCircleFilled className='icon review-icon' />
                                <VscCircleFilled className='icon review-icon' />
                                <VscCircleFilled className='icon review-icon' />
                                <VscCircleFilled className='icon review-icon' />
                                15 reviews
                            </p>
                        </div>
                        <div className="review-content">
                            <p> Shirdi has its own Railway Station named as Shirdi Railway Station which is connected to the major cities of Maharashtra and is 10 Kms from Sai Baba temple.It is well connected to various major cities such as Pune, Mumbai, Ahmedabad, Hyderabad, Nagpur, Chandigarh, Lucknow, Kanpur, Bangalore, Nasik, Thane, Nagpur and Aurangabad.</p>
                        </div>
                        <div className="banner-price flex">
                            <div className="price-left">
                                <p>from</p>
                                <h1>₹14,500</h1>
                                <p>per adult</p>
                            </div>
                            <div className="price-right">
                                <button className="btn">check availaity</button>
                            </div>
                        </div>
                        <div className="banner-features flex">
                            <RiFileReduceFill className='fileIcon' />
                            <Link><p>Lowest price guarantee</p></Link>
                            <Link><p><li>Reserve now & pay later</li></p></Link>
                            <Link><p><li>Free cancellation</li></p></Link>
                        </div>
                        <div className="banner-details">
                            <p className="flex"><BsPeople />Ages 0-99</p>
                            <p className="flex"><RxCounterClockwiseClock />Duration:18h</p>
                            <p className="flex"><AiOutlineClockCircle />Start time: Check availability</p>
                            <p className="flex"><AiOutlineMobile />Ticket type:Mobile</p>
                            <p className="flex"><FaLanguage />Tamil,English,Malaiyalam,Hindi,Telungu</p>
                        </div>

                        <div className="accordian">
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className='accoridan-para'>What is included</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                    
                                            <li className='flex'> <RxDotFilled /> GST (Goods and Services Tax)</li>
                                            <li className='flex'> <RxDotFilled />Lunch</li>
                                            <li className='flex'> <RxDotFilled />Hotel pickup and drop-off</li>
                                            <li className='flex'> <RxDotFilled />Local guide</li>
                                            <li className='flex'> <RxDotFilled />Entry/Admission - Ekambareswarar Temple</li>
                                        
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography className='accoridan-para'>What to expect</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        
                                            <li> <strong>Itinerary: </strong> 
                                                This is a typical itinerary for this product</li>
                                            <li> <strong>Stop At:</strong>  Ekambareswarar Temple, Ekambaranathar Sannidhi Street, Kanchipuram 631502 India </li>
                                            <li className="flex">We visit Ekambareswarar of Pallava dynasty to appreciate these ancient architectural wonders. These were built in 600 AD and are magnificent specimens of the Pallava style of architecture.</li>
                                            <li className="flex"> <strong>Stop At:</strong>  Kailasanathar Temple, Pillaiyarpalayam, Kanchipuram, Tamil Nadu 631501, India </li>
                                            <li className="flex">Duration: 45 minutes</li>
                                        
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                        </div>

                    </div>
                </div>
                <div className="details-map flex container">
                    <div className="map-left">
                        <h1>Packages Include</h1>
                        <div className="route-details flex">
                            <p className='flex'><MdOutlineAirplaneTicket className='map-icon icon' />Tickets (Chennai-Shirdi-Chennai)</p>
                            <p className='flex'><MdOutlineEmojiTransportation className='map-icon icon' />AC Transportaion (private basis)</p>
                            <p className='flex'><IoMdGift className='map-icon icon' />1 Special Dhrshan (Shirdi)</p>
                            <p className='flex'><IoFastFoodOutline className='map-icon icon' />Food (1 breakefast, 1 lunch, 1 dinner)</p>
                            <p className='flex'><MdOutlineTour className='map-icon icon' />Tour Guide (Tamil)</p>
                        </div>
                    </div>
                    <div className="map-right"><Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60077.934277334716!2d74.43533266555183!3d19.760639215995287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc5ba7461768af%3A0xd802d2c2943c99c!2z4K634K6_4K6w4K-N4K6f4K6_LCDgrq7grpXgrr7grrDgrr7grrfgr43grp_grr_grrDgrr4!5e0!3m2!1sta!2sin!4v1672654203264!5m2!1sta!2sin" style="border:0;" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></Iframe></div>
                </div>


            </section>
            
        </>
    )
}

export default Details