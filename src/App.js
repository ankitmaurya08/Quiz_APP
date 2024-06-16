import React, { useState, useEffect } from 'react';
import Quiz from './components/Quiz';
import FullScreenPrompt from './components/FullScreenPrompt';
import './index.css';

const App = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFullScreenChange = () => {
    setIsFullScreen(document.fullscreenElement !== null);
  };

  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullScreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullScreenChange);
  }, []);

  const enableFullScreen = () => {
    document.documentElement.requestFullscreen().catch(err => {
      alert(`Error attempting to enable full-screen mode: ${err.message}`);
    });
  };

  return (
    <div className="App">
      {isFullScreen ? <Quiz /> : <FullScreenPrompt onEnableFullScreen={enableFullScreen} />}
    </div>
  );
};

export default App;
