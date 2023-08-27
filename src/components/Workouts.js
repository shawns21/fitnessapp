import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Workouts.css'; // Import the CSS file for styling

const Workouts = () => {    
    return (
        <div className="workouts-container">
            <Link className="workout-link" to="/workouts/my-routine">My Routine</Link>
            <Link className="workout-link" to="/workouts/beginner-routine">Beginner Routine</Link>
        </div>
    );
};

export default Workouts;
