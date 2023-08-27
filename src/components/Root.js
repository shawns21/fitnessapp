import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./Main";
import Exercises from "./Exercises";
import Navbar from "./Navbar";
import Workouts from "./Workouts";
import ExerciseView from "./ExerciseView";
import { ExerciseProvider } from "./ExerciseContext";
import { MyWorkoutProvider } from "./MyWorkoutContext";
import MyRoutine from "./MyRoutine";
import BeginnerWorkout from "./BeginnerWorkout";

const Root = () => {
    return (
        <div>
            <MyWorkoutProvider>
            <ExerciseProvider>
                <Navbar></Navbar>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/exercises" element={<Exercises />} />
                    <Route path="/workouts" element={<Workouts /> } />
                    <Route path="/exercise/:exerciseId" element={<ExerciseView />} />
                    <Route path="/workouts/my-routine" element={<MyRoutine />} />
                    <Route path="/workouts/beginner-routine" element={<BeginnerWorkout />} /> 
                </Routes>
            </ExerciseProvider>
            </MyWorkoutProvider>
        </div>
    );
};

export default Root;