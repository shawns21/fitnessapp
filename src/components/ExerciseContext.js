import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const ExerciseContext = createContext();

export const ExerciseProvider = ({ children }) => {
  const [exerciseList, setExerciseList] = useState([]);

  const updateList = async (exerciseData) => {

      try {
        const response = await axios.request(exerciseData);
        setExerciseList(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }

  };

  return (
    <ExerciseContext.Provider value={{ exerciseList, setExerciseList, updateList }}>
      {children}
    </ExerciseContext.Provider>
  );
};

export const useExerciseContext = () => {
  return useContext(ExerciseContext);
};
