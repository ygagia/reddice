import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Red Dice</Link>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/signup" className="nav-link">Sign up</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}