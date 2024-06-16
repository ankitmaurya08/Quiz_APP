import React, { useState, useEffect } from 'react';
import Question from './Question';
import Timer from './Timer';
import questions from '../data/questions.json';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(
    parseInt(localStorage.getItem('currentQuestionIndex')) || 0
  );
  const [timeLeft, setTimeLeft] = useState(parseInt(localStorage.getItem('timeLeft')) || 600);
  const [score, setScore] = useState(parseInt(localStorage.getItem('score')) || 0);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    localStorage.setItem('currentQuestionIndex', currentQuestionIndex);
  }, [currentQuestionIndex]);

  useEffect(() => {
    localStorage.setItem('timeLeft', timeLeft);
  }, [timeLeft]);

  useEffect(() => {
    localStorage.setItem('score', score);
  }, [score]);

  const handleAnswerSelection = (answer) => {
    if (questions[currentQuestionIndex].answer === answer) {
      setScore(score + 1);
      setFeedback('Correct!');
    } else {
      setFeedback('Incorrect!');
    }
    setTimeout(() => {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setFeedback('');
    }, 1000); // Display feedback for 1 second before moving to the next question
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setTimeLeft(600);
    setScore(0);
    localStorage.removeItem('currentQuestionIndex');
    localStorage.removeItem('timeLeft');
    localStorage.removeItem('score');
  };

  if (timeLeft <= 0 || currentQuestionIndex >= questions.length) {
    return (
      <div className="quiz-completed">
        Quiz Completed!
        <br />
        Your Score: {score}/{questions.length}
        <br />
        <button onClick={restartQuiz}>Restart Quiz</button>
      </div>
    );
  }

  return (
    <div className="quiz">
      <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
      <div className="score">Score: {score}</div>
      <Question
        question={questions[currentQuestionIndex]}
        onAnswerSelect={handleAnswerSelection}
      />
      <div className="feedback">{feedback}</div>
    </div>
  );
};

export default Quiz;
