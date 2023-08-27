import React, { useState, useEffect, useContext } from 'react';
import './styles/Excercise.css';
import { useExerciseContext } from './ExerciseContext';
import { useMyWorkoutContext } from './MyWorkoutContext';
import ExerciseDetail from './ExerciseDetail';
import ButtonComponent from './ButtonComponent';

const Exercises = () => {
  const { exerciseList, updateList } = useExerciseContext();
  const { addExercise } = useMyWorkoutContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [showDetails, setShowDetails] = useState([]);
  const [exerciseDifficulty, setExerciseDifficulty] = useState("");
  const [exerciseMuscle, setExerciseMuscle] = useState(""); 
  const [exerciseType, setExerciseType] = useState("");

  const searchExercise = async () => {

    const exerciseData = {
      method: 'GET',
      url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
      params: {name: `${searchTerm}`, difficulty: `${exerciseDifficulty}`, muscle: `${exerciseMuscle}`, type: `${exerciseType}` },
      headers: {
        'X-RapidAPI-Key': '31572d2061mshe3469ce2d83480dp1d5232jsn187abbe9e10e',
        'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
      }
    };

    updateList(exerciseData);
    resetExerciseDetails();
  }

  const resetExerciseDetails = () => {
    setShowDetails(new Array(exerciseList.length).fill(false));
  };

  const resetParams = () => {
    setExerciseDifficulty("");
    setExerciseMuscle("");
    setExerciseType("");
  }

  const addIntoWorkout = (exercise) => {
    addExercise(exercise);
  };

  const toggleDetails = (index) => {
    setShowDetails((prevState) => {
      const updatedDetails = [...prevState];
      updatedDetails[index] = !updatedDetails[index];
      return updatedDetails;
    });
  };

  const handleExerciseDifficulty = (difficulty) => {
    setExerciseDifficulty(difficulty);
  };

  const handleExerciseMuscle = (muscle) => {
    setExerciseMuscle(muscle);
  }

  const handleExerciseType = (type) => {
    setExerciseType(type);
  }

  return (
    <div className="exercises-container">
      <div className="search-bar">
        <input
          className="search-input"
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Enter a keyword, like 'push'"
        />
        <button className="search-button" onClick={searchExercise}>
          Search
        </button>
      </div>
      <div className="filter-section">
        <ButtonComponent
          handleExerciseDifficulty={handleExerciseDifficulty}
          handleExerciseMuscle={handleExerciseMuscle}
          handleExerciseType={handleExerciseType}
          exerciseDifficulty={exerciseDifficulty}
          exerciseMuscle={exerciseMuscle}
          exerciseType={exerciseType}
        />
      </div>
      <div className="exercise-list">
        {exerciseList.map((exercise, index) => (
          <div className="exercise-entry" key={index}>
            <p className="exercise-name">{exercise.name}</p>
            <button
              className={`details-button ${
                showDetails[index] ? 'hide-button' : 'view-button'
              }`}
              onClick={() => toggleDetails(index)}
            >
              {showDetails[index] ? "Hide Details" : "View Details"}
            </button>
            {showDetails[index] && (
              <div className="details-section">
                <ExerciseDetail exercise={exercise} />
              </div>
            )}
            <div className='seperator'></div>
            <button className="add-button" onClick={() => addIntoWorkout(exercise)}>
              Add workout
            </button>
            <div className="seperator"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exercises;

