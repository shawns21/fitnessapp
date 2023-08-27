import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ExerciseView from './ExerciseView';
import './styles/BeginnerRoutineView.css';

const BeginnerWorkout = () => {
  const [beginnerData, setBeginnerData] = useState([]);

  const fetchData = async (params) => {
    const config = {
      method: 'GET',
      url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
      params,
      headers: {
        'X-RapidAPI-Key': '31572d2061mshe3469ce2d83480dp1d5232jsn187abbe9e10e',
        'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(config);
      const exercise = response.data[1];
      return exercise;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const fetchAllExercises = async () => {
    const exercises = [];
    exercises.push(await fetchData({ difficulty: 'beginner', muscle: 'glutes' }));
    exercises.push(await fetchData({ difficulty: 'beginner', muscle: 'chest' }));
    exercises.push(await fetchData({ difficulty: 'beginner', muscle: 'middle_back' }));
    exercises.push(await fetchData({ difficulty: 'beginner', muscle: 'biceps'}));
    return exercises;
  };

  useEffect(() => {
    const fetchExercises = async () => {
      const exercises = await fetchAllExercises();
      setBeginnerData(exercises);
    };
    
    fetchExercises();
  }, []);

  return (
        <div className="beginner-routine-view">
            <p className="routine-title">Beginner Routine</p>
            {beginnerData.map((exercise, index) => (
                <div className="exercise-entry" key={index}>
                    {index === 0 && (
                        <div className="routine-section">
                            <p className="section-title">Legs</p>
                            <div className="exercise-container">
                                <ExerciseView exercise={exercise}></ExerciseView>
                            </div>
                            <p className="exercise-detail">Reps: 4</p>
                            <p className="exercise-detail">Sets per Rep: 10-12</p>
                        </div>
                    )}
                    {index === 1 && (
                        <div className="routine-section">
                            <p className="section-title">Chest</p>
                            <div className="exercise-container">
                                <ExerciseView exercise={exercise}></ExerciseView>
                            </div>
                            <p className="exercise-detail">Reps: 3</p>
                            <p className="exercise-detail">Sets per Rep: 10-12</p>
                        </div>
                    )}
                    {index === 2 && (
                        <div className="routine-section">
                            <p className="section-title">Back</p>
                            <div className="exercise-container">
                                <ExerciseView exercise={exercise}></ExerciseView>
                            </div>
                            <p className="exercise-detail">Reps: 5</p>
                            <p className="exercise-detail">Sets per Rep: 12-15</p>
                        </div>
                    )}
                    {index === 3 && (
                        <div className="routine-section">
                            <p className="section-title">Arms</p>
                            <div className="exercise-container">
                                <ExerciseView exercise={exercise}></ExerciseView>
                            </div>
                            <p className="exercise-detail">Reps: 4</p>
                            <p className="exercise-detail">Sets per Rep: 10-12</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default BeginnerWorkout;

