import React, { useEffect, useState } from "react";
import ScoreBoard from "./ScoreBoard";
import Cards from "./Cards";
import "../style.css";

function Game({ portraits }) {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [order, setOrder] = useState([]);
  const [clicked, setClicked] = useState([]);

  useEffect(() => {
    const arrayOrder = [];
    for (let i = 0; i < portraits.length; i++) {
      arrayOrder.push(i);
    }
    setOrder(arrayOrder);
  }, []);

  const randomize = (array) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };

  const incrementScore = () => {
    let newScore = currentScore + 1;
    if (newScore > highScore) {
      setHighScore(newScore);
    }
    setCurrentScore(newScore);
  };

  const cardClicked = (cardNum) => {
    if (clicked.includes(cardNum)) {
      gameOver();
    } else {
      incrementScore();
      setClicked((clicked) => clicked.concat(cardNum));
    }
    setOrder((order) => randomize(order));
  };

  const gameOver = () => {
    setCurrentScore(0);
    setClicked([]);
  };

  return (
    <div id="container">
      <ScoreBoard currentScore={currentScore} highScore={highScore} />
      <Cards portraits={portraits} order={order} onClick={cardClicked} />
    </div>
  );
}

export default Game;
