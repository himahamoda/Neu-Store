  import React, { useEffect, useState } from 'react';
  import { Link, useHistory } from 'react-router-dom';
  import logo from '../Assets/HN__3.png';
  import { useLocation } from 'react-router-dom';
  import image1 from '../Assets/WhatsApp_Image_2024-06-13_at_13.16.34_25618678-removebg-preview.png'

  export default function Nav() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isNavLinksActive, setIsNavLinksActive] = useState(false);
    const [showCloseBtn, setShowCloseBtn] = useState(false);
    const [navToggle, setNavToggle] = useState(false);
    const location = useLocation();

    useEffect(() => {
      document.body.classList.toggle('dark-mode', isDarkMode);
    }, [isDarkMode]);

    useEffect(() => {
      setNavToggle(false);
    }, [location]);

    const handleModeToggle = () => {
      setIsDarkMode((prevMode) => !prevMode);
    };

    const handleNavToggle = () => {
      setNavToggle(!navToggle);

    };

    const handleNavLinksToggle = () => {
      setIsNavLinksActive((prevState) => !prevState);
      setShowCloseBtn(true);
    };

    const handleCloseNavLinks = () => {
      setIsNavLinksActive(false);
      setShowCloseBtn(false);
    };

    return <>

      <main>
        <section className="main">
          <h1 className='ttt2'>"<span className='ttt'>Unleash</span>  your style"</h1>
          <i class="fa-solid fa-arrow-down d-flex justify-content-around"></i>
          <div className="  d-flex  justify-content-center  gap-2 ms-3">

            <a type="button" href='https:www.instagram.com/neu.storee/' className=" btn-floating btn-light  "><i className="fab fa-instagram"></i></a>
            {/* <!-- Twitter --> */}
            <a type="button" href='https:www.tiktok.com/@nadahamada2?_t=8mhpsbuvcbm&_r=1' className=" btn-floating"><i class="fa-brands fa-tiktok"></i></a>
            {/* <!-- Facebook --> */}
            <a type="button" href='https:www.facebook.com/groups/2108306699555399/' className=" btn-light btn-lg me-4 "><i className="fab fa-facebook-f"></i></a>

          </div>
        </section>
      </main>
      <nav>
        <div className="container ">
          <div className="logo rounded-3  ">

            <Link to={`/`} >
              <img src={logo} width={100} height={100} className='' />
            </Link>
          </div>


          <div className="header">
            <i
              className="nav-toggle"
              onClick={handleNavToggle}
            >
              &#9776;
            </i>
            <nav className={navToggle ? 'active' : ''}>
              <i
                className="close-button"
                onClick={handleNavToggle}
              >
                &times;
              </i>
              <ul className='mt-3'>
                <Link to={`/`} className='  text-black  ' > <li className='nav-linkss'>Home</li> </Link>

                <Link to={`/products`} className='text-black  ' > <li className='nav-linkss'>Gallery</li> </Link>
                <div className="menus text-light  ms-4 ">
                  <label className="mode" onClick={handleModeToggle}>
                    <i className={isDarkMode ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
                  </label>
                </div>
              </ul>
              <div className="container mt-3">
                <div className="row ">
                  <h2 className=' d-flex justify-content-center text-black-50 mt-5'>Founder of Neu</h2>
    <div className="col-md-4">
                  
    <img    width={300} height={300} src={image1} alt="" />
                  </div>
                  <div className="col-md-8 ">

                    <p className=" text-center">
                      Nada, an experienced professional in the fashion industry, has launched her own women's clothing brand called NEU. With a background as a merchandiser in a renowned garment factory, Nada has a keen eye for quality and detail. She decided to start her own brand to bring a unique touch to women's fashion. Her first collection features exquisite linen fabrics, known for their lightweight and breathable qualities. Nada's expertise is evident in the distinctive and elegant designs, setting NEU apart in the market as a brand that combines comfort with style.</p>
                    
                  </div>
              

                </div>
              </div>

            </nav>
          </div>


        </div>


      </nav>
    </>
  }
