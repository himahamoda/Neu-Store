import React from 'react'
import img from '../Assets/HN__3.png'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import VideoHome from '../video/Video'


export default function Homepage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://data-y52c.onrender.com/orders');
      setOrders(response.data);
    };
    fetchData();
  }, []);

  const [trendy, setTrendy] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://data-y52c.onrender.com/Trendy');
      setTrendy(response.data);
    };
    fetchData();
  }, []);
  console.log(orders)
  return <>
    <header id="home">
      <div className="container w-75">
        <div className="header-content">
          <h2>"Shop with confidence"</h2>
          {/* <p>
             Sed autem laudantium dolores. Voluptatem itaque ea consequatur
             eveniet. Eum quas beatae cumque eum quaerat.
           </p> */}
          <div className="btn-group">
            <a href="#gallery" className="btn-book">show all</a>
            <a href="#Video" className="btn-video">
              <div className="icon">
                {/* <i class="fa-solid fa-play"></i> */}
                <img width="34" height="34" src="https://img.icons8.com/wired/64/n.png" alt="n" />
              </div>
              click to watch
            </a>
          </div>
        </div>
        <div className="header-image ">
          <img src={img} className='w-100 h-100' alt="hero" />
        </div>
      </div>
    </header>

    {/* start of card */}
    <div className="chefs" id="chefs">
      <div className="container  ">
        <div className=" d-flex justify-content-center fs-4 ">
          {/* <h2>Collection</h2> */}
          <p> <span>Trendy</span> Line</p>
        </div>
        <div className="chefs-cards">
          {trendy?.map((item, index) => (
            <div className="card w-75" key={index}>
              <div className="image ">
                <img className='' src={item.img} alt={`chefs-${index + 1}`} />
              </div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <ul className="social-box">
                <li><a href="https://www.facebook.com/groups/2108306699555399/" target="_blank" rel="noopener noreferrer"><img width="20" height="20" src="https://img.icons8.com/ios/50/facebook--v1.png" alt="facebook--v1" /></a></li>
                <li><a href="https://www.tiktok.com/@nadahamada2?_t=8mhpsbuvcbm&_r=1" target="_blank" rel="noopener noreferrer"><img width="24" height="24" src="https://img.icons8.com/external-thin-kawalan-studio/24/external-tik-tok-social-media-thin-kawalan-studio.png" alt="external-tik-tok-social-media-thin-kawalan-studio"/></a></li>
                <li><a href="https://www.instagram.com/neu.storee/" target="_blank" rel="noopener noreferrer"><img width="20" height="20" src="https://img.icons8.com/ios/50/instagram-new--v1.png" alt="instagram-new--v1" /> </a></li>
                <li><a href="https://wa.link/hs6joo" target="_blank" rel="noopener noreferrer"><img width="20" height="20" src="https://img.icons8.com/ios/50/whatsapp--v4.png" alt="whatsapp--v4" /></a></li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
    {/* endofcards */}
    <div className="gallery " id="gallery">
      <div className="container ">
        <div className="main-title">
          <h2></h2>
          <p>Neu <span>Now</span></p>
        </div>
   <Link to={`/products`}>       
     <div className="gallery-photos">
          {orders?.map((order, index) => (
            <div className="image pizza" key={index}>
              <img src={order.img} alt="meal-1" />
              <div className="layer">
                <h2>{order.title}</h2>
                <p>{order.description}</p>
              </div>
            </div>
          ))}
        </div> 
   </Link> 
      </div>
    </div>
    <div className='mt-5 d-flex justify-content-center'>
      <Link to={`/products`}>  <button className="descoverr  " > descover more     <img width="20" height="20" src="https://img.icons8.com/ios/50/arrow--v1.png" alt="arrow--v1"/>
</button> </Link>

    </div>

    <VideoHome />


  </>

}





