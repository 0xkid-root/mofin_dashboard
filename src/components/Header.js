import React, { useState, useEffect } from 'react'
import Logo from '../assets/images/Logo.svg'
import noti from '../assets/images/bell.svg'
import mass from '../assets/images/mass.svg'
import user from '../assets/images/user.png'
import search from '../assets/images/search.svg'
import Logomob from '../assets/images/Logo-mob.svg'
import { Dropdown } from 'react-bootstrap';

export default function Header() {
  
const [isScrolled, setIsScrolled] = useState(false);

// Function to handle scroll events
const handleScroll = () => {
  if (window.scrollY > 0) { // Adjust this threshold as needed
    setIsScrolled(true);
  } else {
    setIsScrolled(false);
  }
};
useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>
        <nav className={`navbar top-menu fixed-top ${isScrolled ? 'scrolled' : ''}`}>
            
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img className='webs' src={(Logo)}></img>
                        <img className='mobs' src={(Logomob)}></img>
                    </a>
                
                    <div className='top-right-menu' >
                        <div className='veltext me-auto'>
                            Welcome Back, Arkhan
                        </div>
                        <div className='search webs'>
                            <div class="input-group">
                                <span class="input-group-text" id="basic-addon1"><img src={(search)}></img></span>
                                <input type="text"  placeholder="Search" aria-label="Username" aria-describedby="basic-addon1"></input>
                            </div>
                        </div>
                        <div className='leftdrop ms-auto'>
                          
                            <div className='notification mobs'>
                                <img src={(search)}></img>
                            </div>
                            <div class="btn-group">
                                <button type="button" class="notification bg-transparent p-0 border-0 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={(noti)}></img>
                                    <span>5</span>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><button class="dropdown-item" type="button">Action</button></li>
                                    <li><button class="dropdown-item" type="button">Another action</button></li>
                                    <li><button class="dropdown-item" type="button">Something else here</button></li>
                                </ul>
                            </div>
                            <div class="btn-group">
                                <button type="button" class="mass bg-transparent p-0 border-0 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={(mass)}></img>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><button class="dropdown-item" type="button">Action</button></li>
                                    <li><button class="dropdown-item" type="button">Another action</button></li>
                                    <li><button class="dropdown-item" type="button">Something else here</button></li>
                                </ul>
                            </div>
                            <div class="btn-group">
                                <button type="button" class="user bg-transparent p-0 border-0 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={(user)}></img>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><button class="dropdown-item" type="button">Action</button></li>
                                    <li><button class="dropdown-item" type="button">Another action</button></li>
                                    <li><button class="dropdown-item" type="button">Something else here</button></li>
                                </ul>
                            </div>
                         
                            {/* <button className='btn btn-dark btn-sm clchn ms-3 d-inline-block d-sm-none' onClick={handleToggle}> <span class="navbar-toggler-icon"></span></button> */}
                        </div>
                    </div>
                </div>
            </nav>
    </>
  )
}
