import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../Assets/HN__3.png';
import { useLocation } from 'react-router-dom';

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
            <ul className='mt-5'>
              <Link to={`/`} className='  text-black mb-2 ' > <li className='nav-linkss'>Home</li> </Link>

              <Link to={`/products`} className='text-black  ' > <li className='nav-linkss'>Gallery</li> </Link>
              <div className="menus text-light mt-3 ">
            <label className="mode" onClick={handleModeToggle}>
          <i className={isDarkMode? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
            </label>
            </div>
            </ul>
       
          </nav>
        </div>


      </div>


    </nav>
  </>
}
