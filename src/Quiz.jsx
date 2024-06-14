// src/components/Quiz.jsx
import React, { useState } from 'react';
import { quiz } from './data';

const Quiz = ({ onFinish }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState(Array(quiz.length).fill(null));
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [quizStarted, setQuizStarted] = useState(false);

    const handleStartQuiz = () => {
        setQuizStarted(true);
    };

    const handleAnswerOptionClick = (index) => {
        const updatedOptions = [...selectedOptions];
        updatedOptions[currentQuestion] = index;
        setSelectedOptions(updatedOptions);
    };

    const handleNext = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quiz.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowConfirmation(true);
        }
    };

    const handlePrev = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleFinish = () => {
        const score = selectedOptions.reduce((score, option, index) => {
            return option === quiz[index].correct ? score + 1 : score;
        }, 0);
        onFinish(score, selectedOptions);
    };

    if (!quizStarted) {
        return (
            <div className="quiz-intro">
                <p>A continuación hay un cuestionario, ¿desea iniciar?</p>
                <button onClick={handleStartQuiz}>Iniciar</button>
            </div>
        );
    }

    if (showConfirmation) {
        return (
            <div className="quiz-confirmation">
                <p>¿Estás seguro que quieres terminar?</p>
                <button onClick={handleFinish}>Sí</button>
                <button onClick={() => setShowConfirmation(false)}>No</button>
            </div>
        );
    }

    return (
        <div className="quiz">
            <div className="question-section">
                <div className="question-count">
                    <span>Pregunta {currentQuestion + 1}</span>/{quiz.length}
                </div>
                <div className="question-text">{quiz[currentQuestion].question}</div>
            </div>
            <div className="answer-section">
                {quiz[currentQuestion].options.map((option, index) => (
                    <button
                        key={index}
                        className={selectedOptions[currentQuestion] === index ? 'selected' : ''}
                        onClick={() => handleAnswerOptionClick(index)}
                    >
                        {option}
                    </button>
                ))}
            </div>
            <div className="navigation">
                <button onClick={handlePrev} disabled={currentQuestion === 0}>Anterior</button>
                <button onClick={handleNext}>Siguiente</button>
            </div>
        </div>
    );
};

export default Quiz;
