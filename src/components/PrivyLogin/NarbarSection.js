import React from 'react';
import { usePrivy } from "@privy-io/react-auth";
import './NavbarSection.css';

const NavbarSection = () => {
    const { login } = usePrivy();

    return (
        <div className="navbar-container">
            <button className="connect-button" onClick={login}>Connect Wallet</button>
        </div>
    );
};

export default NavbarSection;
