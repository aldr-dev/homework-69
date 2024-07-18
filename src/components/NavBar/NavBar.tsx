import React from 'react';
import './NavBar.css';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="header">
      <div className="container">
        <NavLink className="header-logo" to="/">TV Shows</NavLink>
      </div>
    </div>
  );
};

export default NavBar;