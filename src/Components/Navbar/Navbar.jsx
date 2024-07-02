import React from 'react'
import './navbar.css'


const Navbar = () =>{

    return(
        <section className='navBarSection'>
           <header className='header flex'>

              
              <div className="navbar">
                <ul className="navlists flex">

                    <li className='navItem'>
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
        </header>
        </section>
    )
}

export default Navbar
