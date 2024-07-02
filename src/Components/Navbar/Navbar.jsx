import React from 'react'
import './navbar.css'
import { FaRegWindowClose } from "react-icons/fa";
import { MdTravelExplore } from "react-icons/md";

const Navbar = () =>{

    return(
        <section className='navBarSection'>
           <header className='header flex'>

              
              <div className="logoDiv">
                <a href="#" className='logo flex'>
                  <h1><MdTravelExplore className='icon'/>TRAVEL</h1>
                </a>
              </div>

                <div>
                 <ul>
                    <li>
                      <a href="#" className="navLink">Home</a>
                    </li>

                    <li className='navItem'>
                      <a href="#" className="navLink">Packages</a>
                    </li>

                    <li className='navItem'>
                      <a href="#" className="navLink">Shop</a>
                    </li>

                    <li className='navItem'>
                      <a href="#" className="navLink">About</a>
                    </li>

                    <li className='navItem'>
                      <a href="#" className="navLink">Pages</a>
                    </li>

                    <li className='navItem'>
                      <a href="#" className="navLink">News</a>
                    </li>

                    <li className='navItem'>
                      <a href="#" className="navLink">Contact</a>
                    </li>

                    <button className='btn'>
                        <a href='#'>BOOK NOW </a>
                    </button>
                  </ul>  

                </div>


              <div className='closeNavbar'>
                   <FaRegWindowClose className="icon"/>
              </div>   
              
        </header>
        </section>
    )
}

export default Navbar
