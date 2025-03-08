import { useState } from 'react';
import Game from './components/Game';
import './App.css'

const AppMoleGame = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  const startGame = () => {
    setGameStarted(true);
    setScore(0);
    setGameWon(false);
  };

  const handleScoreUpdate = (newScore) => {
    setScore(newScore);
    if (newScore >= 20) {
      setGameWon(true);
      setGameStarted(false);
    }
  };

  return (
    <div className='flex flex-col justify-between min-h-screen bg-gray-900 text-white'>
      <header className='bg-blue-800 text-white py-1 shadow-lg w-full'>
        <h1 className='text-3xl font-bold'>Mole Game</h1>
      </header>
      <main className='flex-grow text-center p-2 m-0'> {/* Removed margin */}
        <p className='text-lg mb-5'>Try to catch the mole as many times as you can within the time limit!</p>
        {gameStarted && (
          <div className='mb-5'>
            <span className='text-2xl font-bold'>Score: </span>
            <span className='text-2xl font-bold bg-yellow-500 text-black py-1 px-3 rounded'>{score}</span>
          </div>
        )}
        <div className='flex justify-center'>
          {!gameStarted && !gameWon && (
            <button onClick={startGame} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-5 transition duration-300'>
              Start Game
            </button>
          )}
          {gameStarted && <Game onScoreUpdate={handleScoreUpdate} hideScore={true} />}
          {gameWon && (
            <div>
              <h2 className='text-4xl font-bold mb-5'>You Won!</h2>
              <button onClick={startGame} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-5 transition duration-300'>
                Restart Game
              </button>
            </div>
          )}
        </div>
      </main>
      <footer className='bg-blue-800 text-white py-1 shadow-lg w-full text-center text-lg'> {/* Centered and increased font size */}
        <p className='text-sm'>Made by Idan Sulimanov</p>
      </footer>
    </div>
  );
};

export default AppMoleGame;
