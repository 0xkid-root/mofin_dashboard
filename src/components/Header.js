import React, { useState, useEffect } from 'react'
import Logo from '../assets/images/logo_dark.svg'
import noti from '../assets/images/notification.svg'
import mass from '../assets/images/message.svg'
import user from '../assets/images/user.png'
import search from '../assets/images/search.png'
import Logomob from '../assets/images/Logo-mob.svg'

export default function Header() {
  
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to handle scroll events
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar top-menu fixed-top ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className='webs' src={(Logo)} alt="Logo" />
            <img className='mobs' src={(Logomob)} alt="Mobile Logo" />
          </a>
          <div className='top-right-menu'>
            <div className='veltext me-auto'>
              Welcome Back, Arkhan
            </div>
            <div className='search webs'>
              <div className="input-group">
                <span className="input-group-text" id="basic-addon1">
                  <img src={search} alt="Search icon" />
                </span>
                <input 
                  type="text"  
                  placeholder="Search" 
                  aria-label="Username" 
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div className='leftdrop ms-auto'>
              <div className='notification mobs'>
                <img src={search} alt="Search" />
              </div>

              <div className="btn-group">
                <button type="button" className="notification bg-transparent p-0 border-0 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={noti} alt="Notifications" />
                  <span>5</span>
                </button>

                <ul className="dropdown-menu dropdown-menu-end">
                  <li><button className="dropdown-item" type="button">Action</button></li>
                  <li><button className="dropdown-item" type="button">Another action</button></li>
                  <li><button className="dropdown-item" type="button">Something else here</button></li>
                </ul>
              </div>
              <div className="btn-group">
                <button type="button" className="mass bg-transparent p-0 border-0 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={mass} alt="Messages" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><button className="dropdown-item" type="button">Action</button></li>
                  <li><button className="dropdown-item" type="button">Another action</button></li>
                  <li><button className="dropdown-item" type="button">Something else here</button></li>
                </ul>
              </div>
              <div className="btn-group">
                <button type="button" className="user bg-transparent p-0 border-0 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={user} alt="User" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><button className="dropdown-item" type="button">Action</button></li>
                  <li><button className="dropdown-item" type="button">Another action</button></li>
                  <li><button className="dropdown-item" type="button">Something else here</button></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
