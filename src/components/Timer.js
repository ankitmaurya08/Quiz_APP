import React, { useEffect } from 'react';

const Timer = ({ timeLeft, setTimeLeft }) => {
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTimeLeft => {
        const newTimeLeft = prevTimeLeft - 1;
        localStorage.setItem('timeLeft', newTimeLeft);
        return newTimeLeft;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [setTimeLeft]);

  return <div className="timer">Time Left: {timeLeft}s</div>;
};

export default Timer;
