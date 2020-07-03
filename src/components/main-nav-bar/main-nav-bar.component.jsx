import React from 'react';
import { Link } from 'react-router-dom';

import './main-nav-bar.styles.scss';

const MainNavBar = () => (
    <header className="navbar">
        <Link className="logo-container" to="/">
            <h6>LOGO</h6>
        </Link>
        <div className="menu-items">
            <Link className="menu-item" to="/">
                <h6>HOME</h6>
            </Link>
            <Link className="menu-item" to="/about-us">
                <h6>ABOUT US</h6>
            </Link>
            <Link className="menu-item" to="/available-books">
                <h6>AVAILABLE BOOKS</h6>
            </Link>
            <Link className="menu-item" to="/faq">
                <h6>FAQ</h6>
            </Link>
            <Link className="menu-item take-action" to="/take-action">
                <h6>TAKE ACTION</h6>
            </Link>
        </div>
    </header>
);

export default MainNavBar;