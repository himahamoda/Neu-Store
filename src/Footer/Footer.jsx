import React from 'react'
import logo from '../Assets//HN__3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {


    return <>
        {/* Foterrr start */}
        <footer>
            <div className="container ">
                <div className="about ">

                        {/* <img src={logo} width={100} height={100} className='bg-light' /> */}
                                   <p></p>
                    <h3>Social Media</h3>
                    <ul className="social-media">
                        <li><a href="https://www.tiktok.com/@nadahamada2?_t=8mhpsbuvcbm&_r=1" target="_blank" ><i class="fa-brands fa-tiktok"></i></a></li>
                        <li><a href="https://www.facebook.com/groups/2108306699555399/" target="_blank"><i class="fa-brands fa-facebook"></i></a></li>
                        <li><a href="https://www.instagram.com/neu.storee/" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
                        <li><a href="https://wa.link/hs6joo" target="_blank"><i class="fa-brands fa-whatsapp"></i></a></li>


                    </ul>
                </div>
                <div className="subscription ">
                    <div className="subscription-info">
                        <div className="subscription-form">
                            <div className=" touch ">
                                <h3>Get in Touch</h3>
                                <ul>
                                    <li><i className="fa-solid fa-location-dot me-2"></i><a>Ismalia , Egypt</a></li>
                                    <li><i className="fa-solid fa-envelope me-2"></i> <a href="n.store2024.5@gmail.com">n.store2024.5@gmail.com</a></li>
                                    {/* <li><i className="fa-solid fa-phone me-2"></i> <a href="tel:+1 5589 55488 55"></a></li> */}
                                </ul>
                            </div>
                            {/* <input type="email" className='rounded-3' name="email" placeholder="Enter Your Email Address" /> */}
                            <a className='' href="https://wa.link/hs6joo"><button className="btn-subscription  d-flex justify-content-center rounded-3" ><i class="fa-brands fa-whatsapp p-1"></i> WhatsApp</button>
  </a>

                        </div>



                    </div>
                </div>
            </div>
        </footer>
    </>
}
