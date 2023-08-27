import React from "react";
import { Link } from "react-router-dom";
import './styles/Main.css'; // Import your custom CSS for the Main component

const Main = () => {
  return (
    <div className="home">
      <h1>Welcome to the Fitness App!</h1>
      <p>A place to store your workouts</p>
      <Link className="workout-link" to="/workouts/my-routine">Explore your Routine</Link>
    </div>
  );
};

export default Main;
