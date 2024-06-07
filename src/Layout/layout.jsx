import React from 'react'
import { Outlet } from 'react-router-dom'
import Homepage from '../HomePage/homepage'
import Nav from '../nav/nav'
import Products from '../products/products'
import VideoHome from '../video/Video'
import Footer from '../Footer/Footer'
import ListComponent from '../video/Video'


export default function Layout() {
    return <>
    <Nav/>
    <Outlet>        
    </Outlet>

<Footer/>
        {/* <Footer/> */}
    </>
}
