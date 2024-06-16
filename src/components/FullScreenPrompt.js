import React from 'react';

const FullScreenPrompt = ({ onEnableFullScreen }) => {
  return (
    <div className="full-screen-prompt">
      <h2>Please enable full-screen mode to start the quiz</h2>
      <button onClick={onEnableFullScreen}>Enable Full-Screen</button>
    </div>
  );
};

export default FullScreenPrompt;
