// src/components/Results.jsx
import React from 'react';
import './Results.css';
import { quiz } from './data';

const Results = ({ score, selectedOptions, onRetry }) => {
    const questionResults = quiz.map((question, index) => {
        const isCorrect = question.correct === selectedOptions[index];
        return (
            <div className={isCorrect ? 'result correct' : 'result incorrect'} key={index}>
                <p>Pregunta {index + 1}: {isCorrect ? 'Correcta' : 'Incorrecta'}</p>
            </div>
        );
    });

    return (
        <div className="results-container">
            <h2>Tu puntaje es: <span className="score">{score}/{quiz.length}</span></h2>
            <div className="question-results">
                {questionResults}
            </div>
            <button onClick={onRetry}>Intentar de nuevo</button>
        </div>
    );
};

export default Results;
