import React, { useState } from 'react';
import Dashboard from '../assets/images/List-Menu.svg';
import Market from '../assets/images/trade.png';
import Wallet from '../assets/images/Group.svg';
import Staking from '../assets/images/donate.svg';
import Loans from '../assets/images/protocols.svg';
import Settings from '../assets/images/setting.svg';
import user from '../assets/images/user.svg';
import LogOut from '../assets/images/logout.svg';
import { usePrivy } from "@privy-io/react-auth";

export default function Sidemenu() {
  const { logout } = usePrivy();
  const [isToggled, setIsToggled] = useState(false);

  // Function to handle button click
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };



  return (
    <>
      <button className='btn  btn-sm clchn ms-3 d-inline-block d-sm-none' onClick={handleToggle}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`sidemenu fixed-top ${isToggled ? 'active' : ''}`} >
        <ul>
          <li><a href='@!' className='active'> <img src={Dashboard} alt="Dashboard" /> <span>Dashboard</span></a></li>
          <li><a href='@!'> <img src={Market} alt="Market" /> <span>Market</span> </a></li>
          <li><a href='@!'> <img src={Wallet} alt="Wallet" /> <span>Wallet</span></a></li>
          <li><a href='@!'> <img src={Staking} alt="Staking" /> <span>Staking</span></a></li>
          <li><a href='@!'> <img src={Loans} alt="Loans" /> <span>Loans</span></a></li>
          <li><a href='@!'> <img src={Settings} alt="Settings" /> <span>Settings</span></a></li>
          <li><a href='@!'> <img src={user} alt="Profile" /> <span>Profile</span></a></li>
          <li className='mt-auto'>
            <a href='' onClick={logout}>
              <img src={LogOut} alt="Log Out" /> <span>Log Out</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
