import React, { useState } from "react";
import { useMyWorkoutContext } from "./MyWorkoutContext";
import ExerciseView from "./ExerciseView";
import './styles/MyRoutine.css';


const MyRoutine = () => {
    const { savedExercises, removeExercise, setSavedExercises } = useMyWorkoutContext();

    const handleSetDetailsChange = (index, setEntry) => {
        const updatedExercises = [...savedExercises];
        updatedExercises[index].sets = setEntry;
        localStorage.setItem('savedExercises', JSON.stringify(updatedExercises));
        setSavedExercises(updatedExercises);
    };

    const handleRepsDetailsChange = (index, repsEntry) => {
        const updatedExercises = [...savedExercises];
        updatedExercises[index].reps = repsEntry;
        localStorage.setItem('savedExercises', JSON.stringify(updatedExercises));
        setSavedExercises(updatedExercises);
    };

    const takeOutWorkout = (exerciseIndex) => {
        removeExercise(savedExercises[exerciseIndex]);
    };

     return (
  <div className="my-workout-view">
    <div className="my-workout-heading">
      Your Routine
    </div>
    {savedExercises.length === 0 ? (
      <p>Empty so far.....</p>
    ) : (
      savedExercises.map((exercise, index) => (
        <div className="exercise-entry" key={index}>
          <div className="exercise-container">
            <ExerciseView exercise={exercise}></ExerciseView>
          </div>
          <div className="workout-details">
            <div className="detail-group">
              <p className="detail-label">Reps:</p>
              <input
                className="detail-input"
                value={exercise.reps}
                onChange={(event) => handleRepsDetailsChange(index, event.target.value)}
              />
            </div>
            <div className="detail-group">
              <p className="detail-label">Sets per Rep:</p>
              <input
                className="detail-input"
                value={exercise.sets}
                onChange={(event) => handleSetDetailsChange(index, event.target.value)}
              />
            </div>
          </div>
          <button className="remove-button" onClick={() => takeOutWorkout(index)}>Remove</button>
        </div>
      ))
    )}
  </div>
);

};

export default MyRoutine;