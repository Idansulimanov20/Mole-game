import { useState, useEffect } from 'react';
import Mole from './Mole';

const Game = ({ onScoreUpdate, hideScore }) => {
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30); // Add state for timer

  useEffect(() => {
    onScoreUpdate(score);
  }, [score, onScoreUpdate]);

  useEffect(() => {
    let timer;
    if (gameStarted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setGameStarted(false); // Stop the game when timer reaches zero
    }
    return () => clearInterval(timer);
  }, [gameStarted, timeLeft]);

  const handleMoleClick = (id) => {
    setScore(prevScore => prevScore + 1); 
  };

  return (
    <div className='flex flex-col items-center gap-2 bg-green-500 w-200 h-800 p-5 rounded-lg'>
      {/* Remove the start button and handleStartGame function */}
      <div className='grid grid-cols-3 gap-5'>
        {[...Array(9)].map((_,index) => (
          <Mole key={index} onClick={handleMoleClick} id={index} />
        ))}
      </div>
    </div>
  );
};

export default Game;
