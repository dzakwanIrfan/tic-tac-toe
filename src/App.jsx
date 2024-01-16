/* eslint-disable react/prop-types */
import { useState } from 'react';
import Board from './components/Board';
import { useEffect } from 'react';

export default function Game(){
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function jumpTo(nextMove){
    setCurrentMove(nextMove);
  }

  function handlePlay(nextSquares){
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  const moves = history.map((squares, move) => {
    let description = '';
    if(move > 0){
      description = 'Go to move #' + move;
    }else{
      description = 'Got to game start';
    }

    return(
      <li key={move}>
        <button style={{ padding: '4px 8px', cursor: 'pointer' }} onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return(
    <>
      <Navbar />
      <Header />
      <div className='game'>
        <div className='game-board'>
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
        </div>
        <div className="game-info">
          <h3>Game Info:</h3>
          <ol>{moves}</ol>
        </div>
      </div>
    </>
  );
}

function Header(){
  return(
    <div className="title">
      <div className="sub-title">TIC - TAC - TOE</div>
      <p>Simply made with React ⚛️</p>
    </div>
  );
}

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
      const handleOutsideClick = (event) => {
          if (menuActive && !event.target.closest('#myLinks') && !event.target.closest('.hamburger')) {
              setMenuActive(false);
          }
      };

      document.addEventListener('click', handleOutsideClick);
      return () => document.removeEventListener('click', handleOutsideClick);
  }, [menuActive]);

  const toggleMenu = () => {
      setMenuActive(!menuActive);
  };

  return (
      <header>
          <div className="logo">
              <img src="img/logo.png" alt="logo"></img>
              <div className="logo-name">Dzakwan Irfan Ramdhani</div>
          </div>
          <nav>
              <a href="../../index.html">HOME</a>
              <a href="../../index.html#contact">CONTACT</a>
              <a href="../../index.html#project">PROJECTS</a>
              <a href="#">EXTRAS</a>
              <a href="#">ARTICLES</a>
          </nav>
          <div id="myLinks" className={menuActive ? 'active' : ''}>
              <a href="../../index.html">HOME</a>
              <a href="../../index.html#contact">CONTACT</a>
              <a href="../../index.html#project">PROJECTS</a>
              <a href="#">EXTRAS</a>
              <a href="#">ARTICLES</a>
            </div>
          <div className="hamburger" onClick={toggleMenu}>
          <i className="iconoir-menu">=</i>
        </div>
      </header>
  );
}




