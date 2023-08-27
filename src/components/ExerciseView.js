import React from "react";
import './styles/ExerciseView.css'; // Import the CSS file for styling

const ExerciseView = ({ exercise }) => {
    return (
        <div className="exercise-view">
            <p className="exercise-name">{exercise.name}</p>
            <p className="exercise-detail">Equipment: {exercise.equipment}</p>
            <p className="exercise-detail">Instructions: {exercise.instructions}</p>
        </div>
    );
}

export default ExerciseView;


