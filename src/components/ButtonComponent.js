import React, { useState } from "react";
import './styles/ButtonComponent.css';

const ButtonComponent = ({ handleExerciseDifficulty, handleExerciseMuscle, handleExerciseType, exerciseDifficulty, exerciseMuscle, exerciseType }) => {
  const muscleOptions = ['abdominals', 'abductors', 'adductors', 'biceps', 'calves', 'chest', 'forearms', 'glutes', 'hamstrings', 'lats', 'lower_back', 'middle_back', 'neck', 'quadriceps', 'traps', 'triceps'];

  const difficultyOptions = ['beginner', 'intermediate', 'expert'];

  const typeOptions = ['cardio', 'olympic_weightlifting', 'plyometrics', 'powerlifting', 'strength', 'stretching', 'strongman'];

  const toggleMuscleOption = (muscle) => {
    if (exerciseMuscle === muscle) {
      handleExerciseMuscle("");
    } else {
      handleExerciseMuscle(muscle);
    }
  };
  
  const toggleDifficultyOption = (difficulty) => {
    if (exerciseDifficulty === difficulty) {
      handleExerciseDifficulty("");
    } else {
      handleExerciseDifficulty(difficulty);
    }
  };

  const toggleTypeOption = (type) => {
    if (exerciseType === type) {
      handleExerciseType("");
    } else {
      handleExerciseType(type);
    }
  };

   return (
    <div className="button-component">
      <div className="button-group">
        <div className="filter-title">
          <p>Difficulty</p>
        </div>
        {(
          <div className="options">
            {difficultyOptions.map(difficulty => (
              <button
                key={difficulty}
                className={
                  exerciseDifficulty === difficulty
                    ? "button selected"
                    : "button"
                }
                onClick={() => toggleDifficultyOption(difficulty)}
              >
                {difficulty}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="button-group">
        <div className="filter-title">
          <p>Muscle</p>
        </div>
        {(
          <div className="options">
            {muscleOptions.map(muscle => (
              <button
                key={muscle}
                className={
                  exerciseMuscle === muscle ? "button selected" : "button"
                }
                onClick={() => toggleMuscleOption(muscle)}
              >
                {muscle}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="button-group">
        <div className="filter-title">
          <p>Type</p>
        </div>
        {(
          <div className="options">
            {typeOptions.map(type => (
              <button
                key={type}
                className={
                  exerciseType === type ? "button selected" : "button"
                }
                onClick={() => toggleTypeOption(type)}
              >
                {type}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ButtonComponent;

