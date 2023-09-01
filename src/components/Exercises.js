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

  const [showOptions, setShowOptions] = useState(true);

  const searchExercise = async () => {

    const exerciseData = {
      method: 'GET',
      url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
      params: {name: `${searchTerm}`},
      headers: {
        'X-RapidAPI-Key': '31572d2061mshe3469ce2d83480dp1d5232jsn187abbe9e10e',
        'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
      }
    };

    updateTags();
    updateList(exerciseData);
    resetExerciseDetails();
  }

  const searchWithTags = async () => {

      const exerciseData = {
        method: 'GET',
        url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
        params: {name: `${searchTerm}`, difficulty: `${exerciseDifficulty}`, muscle: `${exerciseMuscle}`, type: `${exerciseType}`},
        headers: {
          'X-RapidAPI-Key': '31572d2061mshe3469ce2d83480dp1d5232jsn187abbe9e10e',
          'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
        }
      };

    updateList(exerciseData);
    resetExerciseDetails();

  }

  const updateTags = () => {
    setExerciseDifficulty("");
    setExerciseMuscle("");
    setExerciseType("");
  }

  const resetExerciseDetails = () => {
    setShowDetails(new Array(exerciseList.length).fill(false));
  };

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

  const handleClear = () => {
    setSearchTerm('');
  };

  return (
    <div className="exercises-container">
      <div className="search-bar">
         <div className="search-input-container">
          <input
            className="search-input"
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Enter a keyword, like 'push'"
          />
          {searchTerm && (
            <button className="clear-button" onClick={handleClear}>
              &times;
            </button>
          )}
        </div>
        <button className="search-button" onClick={searchExercise}>
          Search
        </button>
      </div>
      <div className="filter-section">
        <div className='title'>
          <p className='filterSectionTitle'>Filter</p>
          <span className={`arrow ${showOptions ? 'up-arrow' : 'down-arrow'}`} onClick={() => setShowOptions(!showOptions)}></span>
        </div>
        {showOptions && (
          <ButtonComponent
            handleExerciseDifficulty={handleExerciseDifficulty}
            handleExerciseMuscle={handleExerciseMuscle}
            handleExerciseType={handleExerciseType}
            exerciseDifficulty={exerciseDifficulty}
            exerciseMuscle={exerciseMuscle}
            exerciseType={exerciseType}
          />
        )}
        <button className="add-button" onClick={() => searchWithTags()}>Apply Tags</button>
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

