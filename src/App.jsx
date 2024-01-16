/* eslint-disable react/prop-types */
import { useState } from 'react';
import Board from './components/Board';

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
        <button onClick={() => jumpTo(move)}>{description}</button>
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

function Navbar(){
  return(
    <header>
        <div className="logo">
            <img src="img/logo.png" alt="logo"></img>
            <div className="logo-name">Dzakwan Irfan Ramdhani</div>
        </div>
        <nav>
            <a href="#home">HOME</a>
            <a href="#contact">CONTACT</a>
            <a href="#project">PROJECTS</a>
            <a href="">EXTRAS</a>
            <a href="">ARTICLES</a>
        </nav>
        <div id="myLinks">
            <a href="#home">HOME</a>
            <a href="#contact">CONTACT</a>
            <a href="#project">PROJECTS</a>
            <a href="">EXTRAS</a>
            <a href="">ARTICLES</a>
        </div>
        <div className="hamburger">
            <i className="iconoir-menu"></i>
        </div>
    </header>
  );
}


