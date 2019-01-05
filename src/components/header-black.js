import React from 'react';
import { Link } from 'react-router-dom';
import './css/header-bar.css';

export default function HeaderBarBlack(props) {
  return (
    <header role="banner" className="content-header-black">
      <Link to="/news">
        <h1 className="header-title-black">
          News Flash<span className="period">.</span>
        </h1>
      </Link>
      <nav>
        <ul>
          <Link to="/registeruser">
            <li>Sign Up</li>
          </Link>
          <Link to="/login">
            <li>Login</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
