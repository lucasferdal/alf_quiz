// src/App.jsx
import React, { useState } from 'react';
import { slides } from './data';
import Slide from './Slide';
import Quiz from './Quiz';
import Results from './Results';
import './index.css';

const App = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showQuiz, setShowQuiz] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [quizData, setQuizData] = useState({ score: 0, selectedOptions: [] });

    const handleNext = () => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1);
        } else {
            setShowQuiz(true);
        }
    };

    const handlePrev = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    const handleFinishQuiz = (score, selectedOptions) => {
        setQuizData({ score, selectedOptions });
        setShowQuiz(false);
        setShowResults(true);
    };

    const handleRetry = () => {
        setShowQuiz(true);
        setShowResults(false);
        setQuizData({ score: 0, selectedOptions: [] });
    };

    return (
        <div className="app">
            {!showQuiz && !showResults ? (
                <>
                    <Slide image={slides[currentSlide].image} text={slides[currentSlide].text} />
                    <div className="navigation">
                        <button onClick={handlePrev} disabled={currentSlide === 0}>Anterior</button>
                        <button onClick={handleNext}>Siguiente</button>
                    </div>
                </>
            ) : showQuiz ? (
                <Quiz onFinish={handleFinishQuiz} />
            ) : (
                <Results score={quizData.score} selectedOptions={quizData.selectedOptions} onRetry={handleRetry} />
            )}
        </div>
    );
};

export default App;
