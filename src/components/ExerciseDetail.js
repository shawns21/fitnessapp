import React from 'react';
import './styles/ExerciseDetail.css'; // Import the CSS file for styling

const ExerciseDetail = ({ exercise }) => {
   return (
    <div className="exercise-detail">
      {exercise.equipment !== 'other' && (
        <p className="exercise-detail-item">
          <span className="detail-label">Equipment:</span> {exercise.equipment}
        </p>
      )}
      <p className="exercise-detail-item">
        <span className="detail-label">Muscle:</span> {exercise.muscle}
      </p>
      <p className="exercise-detail-item">
        <span className="detail-label">Difficulty:</span> {exercise.difficulty}
      </p>
      <p className="exercise-detail-item">
        <span className="detail-label">Instruction:</span> {exercise.instructions}
      </p>
    </div>
  );
};

export default ExerciseDetail;

