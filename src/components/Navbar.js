import React from "react";
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="navLink">Home</Link>
                <Link to="/exercises" className="navLink">Exercises</Link>
                <Link to="/workouts" className="navLink">Workouts</Link>
            </div>
        </nav>
    );
};

export default Navbar;
