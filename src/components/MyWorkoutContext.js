import React, { createContext, useContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const MyWorkoutContext = createContext();

export const MyWorkoutProvider = ({ children }) => {
  const [savedExercises, setSavedExercises] = useState([]);

  const [error, setError] = useState('');

  useEffect(() => {
    const savedExercisesFromStorage = JSON.parse(localStorage.getItem('savedExercises')) || [];
    setSavedExercises(savedExercisesFromStorage);
  }, []);

  const areExercisesEqual = (exercise1, exercise2) => {
    return (
      exercise1.name === exercise2.name &&
      exercise1.instructions === exercise2.instructions &&
      exercise1.difficulty === exercise2.difficulty
    );
  };

  const addExercise = (exercise) => {
  const isDuplicate = savedExercises.some((savedExercise) => {
    return areExercisesEqual(savedExercise, exercise);
  });

  if (!isDuplicate) {
    const updatedExercise = {...exercise, sets: "", reps: ""};
    const updatedExercises = [...savedExercises, updatedExercise];
    localStorage.setItem('savedExercises', JSON.stringify(updatedExercises));
    setSavedExercises(updatedExercises);
    setError('');
  }
};

  const removeExercise = (exerciseToRemove) => {
    const updatedExercises = savedExercises.filter((exercise) => !areExercisesEqual(exercise, exerciseToRemove));
    localStorage.setItem('savedExercises', JSON.stringify(updatedExercises));
    setSavedExercises(updatedExercises);
    setError('');
  };

  return (
    <MyWorkoutContext.Provider value={{ savedExercises, setSavedExercises, addExercise, error, removeExercise, areExercisesEqual }}>
      {children}
    </MyWorkoutContext.Provider>
  );
};

export const useMyWorkoutContext = () => {
  return useContext(MyWorkoutContext);
};

