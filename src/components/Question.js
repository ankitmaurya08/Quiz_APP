import React from 'react';

const Question = ({ question, onAnswerSelect }) => {
  return (
    <div className="question">
      <h3>{question.question}</h3>
      <ul>
        {question.choices.map((choice, index) => (
          <li key={index} onClick={() => onAnswerSelect(choice)}>
            {choice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
