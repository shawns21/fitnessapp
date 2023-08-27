import React, { useState } from "react";
import './styles/ButtonComponent.css';

const ButtonComponent = ({ handleExerciseDifficulty, handleExerciseMuscle, handleExerciseType, exerciseDifficulty, exerciseMuscle, exerciseType }) => {
  const muscleOptions = ['abdominals', 'abductors', 'adductors', 'biceps', 'calves', 'chest', 'forearms', 'glutes', 'hamstrings', 'lats', 'lower_back', 'middle_back', 'neck', 'quadriceps', 'traps', 'triceps'];

  const difficultyOptions = ['beginner', 'intermediate', 'expert'];

  const typeOptions = ['cardio', 'olympic_weightlifting', 'plyometrics', 'powerlifting', 'strength', 'stretching', 'strongman'];

  const [showDifficultyOptions, setShowDifficultyOptions] = useState(true);
  const [showMuscleOptions, setShowMuscleOptions] = useState(true);
  const [showTypeOptions, setShowTypeOptions] = useState(true);


  const toggleDifficultyOptions = () => {
    setShowDifficultyOptions(!showDifficultyOptions);
  };

  const toggleMuscleOptions = () => {
    setShowMuscleOptions(!showMuscleOptions);
  };

  const toggleTypeOptions = () => {
    setShowTypeOptions(!showTypeOptions);
  };

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
        <p onClick={toggleDifficultyOptions} className="filter-title">
          Difficulty
        </p>
        {showDifficultyOptions && (
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
        <p onClick={toggleMuscleOptions} className="filter-title">
          Muscle
        </p>
        {showMuscleOptions && (
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
        <p onClick={toggleTypeOptions} className="filter-title">
          Type
        </p>
        {showTypeOptions && (
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

