import React, { useEffect, useState } from 'react'
import logo from '../Assets/HN__3.png'
import { Link } from 'react-router-dom';


export default function NAv() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isNavLinksActive, setIsNavLinksActive] = useState(false);
    const [showCloseBtn, setShowCloseBtn] = useState(false);

    useEffect(() => {
      document.body.classList.toggle('dark-mode', isDarkMode);
    }, [isDarkMode]);

    const handleModeToggle = () => {
      setIsDarkMode((prevMode) =>!prevMode);
    };

    const handleNavLinksToggle = () => {
      setIsNavLinksActive((prevState) =>!prevState);
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

           <a type="button" href='https://www.instagram.com/neu.storee/' className=" btn-floating btn-light  "><i className="fab fa-instagram"></i></a>
           {/* <!-- Twitter --> */}
           <a type="button" href='https://www.tiktok.com/@nadahamada2?_t=8mhpsbuvcbm&_r=1' className=" btn-floating"><i class="fa-brands fa-tiktok"></i></a>
           {/* <!-- Facebook --> */}
           <a type="button" href='https://www.facebook.com/groups/2108306699555399/' className=" btn-light btn-lg me-4 "><i className="fab fa-facebook-f"></i></a>

         </div>
        </section>
      </main>
      <nav>
        <div className="container ">
          <div className="logo rounded-3 ">

            <img src={logo} width={100} height={100} className='' />        </div>
          <ul className={`nav-links ${isNavLinksActive? 'active' : ''}`}>

{/*             <li><a href="/">Home</a></li>
 */}
           <Link to={`/`} className='text-black me-5' > <li>Home</li> </Link>

           <Link to={`/products`} className='text-black me-5' > <li>Gallery</li> </Link>


          </ul>
          <div className="menus text-light ">
            <label className="mode" onClick={handleModeToggle}>
          <i className={isDarkMode? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
            </label>
            <label className="menu " onClick={handleNavLinksToggle}>
              <i className="fa-solid fa-bars"></i>

            </label>

          </div>

        </div>

      </nav>


    </>
  }

